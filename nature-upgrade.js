// Small, deterministic surface details. Reuses the application's Three.js build.
const textures = new Map();
export function createMotionUniform() {
  const preference = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null;
  const uniform = { value: preference?.matches ? 0 : 1 };
  preference?.addEventListener?.('change', event => { uniform.value = event.matches ? 0 : 1; });
  return uniform;
}

const windCode = `
#ifdef USE_INSTANCING
vec3 naturePosition = vec3(instanceMatrix[3]);
float natureSpeed = 0.65 + 0.25 * sin(naturePosition.x * 0.37 + naturePosition.z * 0.41);
float natureWind = sin(uWind * natureSpeed + naturePosition.x * 1.3 + naturePosition.z * 0.9) * 0.7
  + sin(uWind * 1.9 * natureSpeed + naturePosition.y * 2.3) * 0.3;
transformed += vec3(natureWind * 0.045, natureWind * 0.012, natureWind * 0.032)
  * (position.y + 0.5) * (1.0 + uGust * 1.6) * uNatureMotion;
#endif`;

export function configureLeafWind(material, time, gust, motion) {
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, { uWind: time, uGust: gust, uNatureMotion: motion });
    shader.vertexShader = 'uniform float uWind;uniform float uGust;uniform float uNatureMotion;\n'
      + shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + windCode);
  };
  material.customProgramCacheKey = () => 'garden-natural-wind-v1';
  return material;
}

function random(seed = 137) {
  return () => { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; return (seed >>> 0) / 4294967296; };
}

function texture(kind, Texture, repeat) {
  if (textures.has(kind)) return textures.get(kind);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = kind === 'contact' ? 128 : 256;
  const ctx = canvas.getContext('2d'), size = canvas.width, rng = random();
  const pixels = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const index = (y * size + x) * 4;
    let grey, alpha = 255;
    if (kind === 'contact') {
      const angle = Math.atan2(y - size / 2, x - size / 2);
      const radius = Math.hypot(x - size / 2, y - size / 2) / (size * 0.5);
      const edge = 0.84 + 0.055 * Math.sin(angle * 5) + 0.025 * Math.cos(angle * 9);
      alpha = 255 * Math.pow(Math.max(0, 1 - radius / edge), 1.65);
      grey = 255;
    } else {
      const grain = rng();
      grey = kind === 'brass'
        ? 205 + 12 * Math.sin(y / size * Math.PI * 32) + grain * 22
        : 199 + grain * 42 + 5 * Math.sin(y / size * Math.PI * 12);
      if (kind === 'ceramic' && grain < 0.022) grey -= 50;
    }
    pixels.data[index] = pixels.data[index + 1] = pixels.data[index + 2] = grey;
    pixels.data[index + 3] = alpha;
  }
  ctx.putImageData(pixels, 0, 0);
  const result = new Texture(canvas);
  result.wrapS = result.wrapT = repeat;
  result.needsUpdate = true;
  textures.set(kind, result);
  return result;
}

export function addGrounding(group, config, api) {
  const { Mesh, Plane, Material, Texture, repeat } = api;
  const material = new Material({
    map: texture('contact', Texture, repeat), color: '#3b372a',
    transparent: true, opacity: 0.25, depthWrite: false,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
  });
  const patch = new Mesh(new Plane(1, 1), material);
  patch.name = 'nature-contact-shadow';
  patch.rotation.x = -Math.PI / 2;
  patch.position.y = 0.004;
  patch.scale.set(config.moss * 2.9, config.moss * 2.55, 1);
  patch.receiveShadow = true;
  patch.renderOrder = 1;
  group.add(patch);
}

export function softenStone(material, mossColor) {
  material.onBeforeCompile = shader => {
    shader.uniforms.natureMossColor = { value: mossColor };
    shader.vertexShader = 'varying vec3 vNatureStone;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>', '#include <begin_vertex>\nvNatureStone = position;');
    shader.fragmentShader = 'varying vec3 vNatureStone;uniform vec3 natureMossColor;\n'
      + shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
float naturePore = fract(sin(dot(floor(vNatureStone.xz * 34.0), vec2(12.9898,78.233))) * 43758.5453);
float natureEdge = -0.55 + 0.055 * sin(vNatureStone.x * 19.0) + 0.035 * cos(vNatureStone.z * 23.0);
float natureMoss = (1.0 - smoothstep(natureEdge - 0.12, natureEdge + 0.12, vNatureStone.y)) * 0.5;
diffuseColor.rgb *= 0.98 + naturePore * 0.035;
diffuseColor.rgb = mix(diffuseColor.rgb, natureMossColor * (0.7 + naturePore * 0.22), natureMoss);`);
  };
  material.customProgramCacheKey = () => 'garden-stone-foot-v1';
  return material;
}

export function initNaturalMaterials({ bowls, tea, wood, pond, Texture, repeat, motion }) {
  const brass = texture('brass', Texture, repeat), ceramic = texture('ceramic', Texture, repeat);
  const bowlWater = [];
  for (const bowl of bowls.list) {
    const metal = bowl.bw.material;
    metal.roughness = 0.43;
    metal.metalness = 0.82;
    metal.envMapIntensity = 0.95;
    metal.roughnessMap = brass;
    metal.normalScale?.set(0.3, 0.3);
    metal.needsUpdate = true;
    const water = bowl.water.material;
    if (water.normalMap) {
      water.normalMap = water.normalMap.clone();
      water.normalMap.needsUpdate = true;
      water.normalScale?.set(0.035, 0.035);
      bowlWater.push(bowl);
    }
  }
  const cup = tea.g.children[0]?.material;
  if (cup) {
    cup.roughness = 0.48;
    cup.metalness = 0;
    cup.bumpMap = ceramic;
    cup.bumpScale = 0.0008;
    cup.roughnessMap = ceramic;
    cup.needsUpdate = true;
  }
  wood.bumpScale = 0.055;
  wood.roughness = 0.88;
  const water = pond.water?.material;
  if (water) { water.roughness = 0.12; water.metalness = 0.12; water.envMapIntensity = 0.85; }
  return {
    update(time) {
      if (!bowls.on || !motion.value) return;
      for (let i = 0; i < bowlWater.length; i++) {
        const bowl = bowlWater[i], material = bowl.water.material;
        const energy = Math.min(1, bowl.energy + bowl.rub);
        material.normalMap.offset.set(
          Math.sin(time * 0.14 + i) * 0.015,
          Math.cos(time * 0.11 + i * 1.7) * 0.012);
        material.normalScale.setScalar(0.025 + energy * 0.065);
      }
    },
  };
}
