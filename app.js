var Og=0,dp=1,Bg=2;var $0=1,Of=2,_s=3,ls=0,Mn=1,Ft=2;var _i=0,Ra=1,Gi=2,pp=3,mp=4,Hg=5,Ir=100,kg=101,Gg=102,gp=103,vp=104,Vg=200,Wg=201,Xg=202,qg=203,Yu=204,Zu=205,Yg=206,Zg=207,Qg=208,Kg=209,Jg=210,jg=211,$g=212,ev=213,tv=214,nv=0,iv=1,sv=2,Mc=3,rv=4,av=5,ov=6,lv=7,em=0,cv=1,hv=2,er=0,Bf=1,Hf=2,kf=3,jo=4,uv=5,Gf=6;var tm=300,Pa=301,Da=302,Do=303,Qu=304,$c=306,$n=1e3,Jn=1001,Ku=1002,Ut=1003,xp=1004;var uu=1005;var Nt=1006,fv=1007;var Ia=1008;var tr=1009,dv=1010,pv=1011,Vf=1012,nm=1013,bi=1014,ci=1015,jt=1016,im=1017,sm=1018,Cs=1020,mv=1021,yn=1023,gv=1024,vv=1025,as=1026,nr=1027,$o=1028,rm=1029,xv=1030,am=1031,om=1033,fu=33776,du=33777,pu=33778,mu=33779,yp=35840,Mp=35841,Ep=35842,wp=35843,lm=36196,Sp=37492,Tp=37496,bp=37808,_p=37809,Rp=37810,Ap=37811,Cp=37812,Pp=37813,Dp=37814,Ip=37815,Lp=37816,Up=37817,Np=37818,Fp=37819,zp=37820,Op=37821,gu=36492,Bp=36494,Hp=36495,yv=36283,kp=36284,Gp=36285,Vp=36286;var Ec=2300,wc=2301,vu=2302,Wp=2400,Xp=2401,qp=2402;var cm=3e3,Nr=3001,Mv=3200,el=3201,hm=0,Ev=1,jn="",tn="srgb",Ri="srgb-linear",Wf="display-p3",eh="display-p3-linear",Sc="linear",Jt="srgb",Tc="rec709",bc="p3";var ia=7680;var Yp=519,wv=512,Sv=513,Tv=514,um=515,bv=516,_v=517,Rv=518,Av=519,Ju=35044;var Zp="300 es",ju=1035,As=2e3,_c=2001,ir=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qp=1234567,To=Math.PI/180,Io=180/Math.PI;function os(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[t&63|128]+Zn[t>>8&255]+"-"+Zn[t>>16&255]+Zn[t>>24&255]+Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]).toLowerCase()}function Tn(n,e,t){return Math.max(e,Math.min(t,n))}function Xf(n,e){return(n%e+e)%e}function Cv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Pv(n,e,t){return n!==e?(t-n)/(e-n):0}function bo(n,e,t){return(1-t)*n+t*e}function Dv(n,e,t,i){return bo(n,e,1-Math.exp(-t*i))}function Iv(n,e=1){return e-Math.abs(Xf(n,e*2)-e)}function Lv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fv(n,e){return n+Math.random()*(e-n)}function zv(n){return n*(.5-Math.random())}function Ov(n){n!==void 0&&(Qp=n);let e=Qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bv(n){return n*To}function Hv(n){return n*Io}function $u(n){return(n&n-1)===0&&n!==0}function kv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Rc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gv(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Bn={DEG2RAD:To,RAD2DEG:Io,generateUUID:os,clamp:Tn,euclideanModulo:Xf,mapLinear:Cv,inverseLerp:Pv,lerp:bo,damp:Dv,pingpong:Iv,smoothstep:Lv,smootherstep:Uv,randInt:Nv,randFloat:Fv,randFloatSpread:zv,seededRandom:Ov,degToRad:Bv,radToDeg:Hv,isPowerOfTwo:$u,ceilPowerOfTwo:kv,floorPowerOfTwo:Rc,setQuaternionFromProperEuler:Gv,normalize:Zt,denormalize:rs},ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],w=s[7],C=s[2],A=s[5],D=s[8];return r[0]=a*x+o*y+l*C,r[3]=a*m+o*v+l*A,r[6]=a*p+o*w+l*D,r[1]=c*x+h*y+u*C,r[4]=c*m+h*v+u*A,r[7]=c*p+h*w+u*D,r[2]=f*x+d*y+g*C,r[5]=f*m+d*v+g*A,r[8]=f*p+d*w+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xu.makeScale(e,t)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xu=new Rt;function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vv(){let n=Lo("canvas");return n.style.display="block",n}var Kp={};function _o(n){n in Kp||(Kp[n]=!0,console.warn(n))}var Jp=new Rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jp=new Rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kl={[Ri]:{transfer:Sc,primaries:Tc,toReference:n=>n,fromReference:n=>n},[tn]:{transfer:Jt,primaries:Tc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[eh]:{transfer:Sc,primaries:bc,toReference:n=>n.applyMatrix3(jp),fromReference:n=>n.applyMatrix3(Jp)},[Wf]:{transfer:Jt,primaries:bc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jp),fromReference:n=>n.applyMatrix3(Jp).convertLinearToSRGB()}},Wv=new Set([Ri,eh]),Gt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=kl[e].toReference,s=kl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return kl[n].primaries},getTransfer:function(n){return n===jn?Sc:kl[n].transfer}};function Aa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sa,Ac=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sa===void 0&&(sa=Lo("canvas")),sa.width=e.width,sa.height=e.height;let i=sa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Aa(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Aa(t[i]/255)*255):t[i]=Aa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xv=0,Cc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mu(s[a].image)):r.push(Mu(s[a]))}else r=Mu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Mu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qv=0,hi=class n extends ir{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=Nt,a=Ia,o=yn,l=tr,c=n.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=os(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nr?tn:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tn?Nr:cm}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?tn:jn}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=tm;hi.DEFAULT_ANISOTROPY=1;var on=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(d+1)/2,C=(p+1)/2,A=(h+f)/4,D=(u+x)/4,N=(g+m)/4;return v>w&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=D/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=N/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ef=class extends ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?tn:jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends ef{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Pc=class extends hi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tf=class extends hi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dc=class extends $t{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLMultipleRenderTargets=!0;let r=this.texture;this.texture=[];for(let a=0;a<i;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.texture.length;s<r;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},vi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,p*y);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let w=o*y;if(l=l*m+f*w,c=c*m+d*w,h=h*m+g*w,u=u*m+x*w,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eu=new b,$p=new vi,Ps=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Vl.subVectors(this.max,po),ra.subVectors(e.a,po),aa.subVectors(e.b,po),oa.subVectors(e.c,po),Qs.subVectors(aa,ra),Ks.subVectors(oa,aa),Rr.subVectors(ra,oa);let t=[0,-Qs.z,Qs.y,0,-Ks.z,Ks.y,0,-Rr.z,Rr.y,Qs.z,0,-Qs.x,Ks.z,0,-Ks.x,Rr.z,0,-Rr.x,-Qs.y,Qs.x,0,-Ks.y,Ks.x,0,-Rr.y,Rr.x,0];return!wu(t,ra,aa,oa,Vl)||(t=[1,0,0,0,1,0,0,0,1],!wu(t,ra,aa,oa,Vl))?!1:(Wl.crossVectors(Qs,Ks),t=[Wl.x,Wl.y,Wl.z],wu(t,ra,aa,oa,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ms=[new b,new b,new b,new b,new b,new b,new b,new b],Oi=new b,Gl=new Ps,ra=new b,aa=new b,oa=new b,Qs=new b,Ks=new b,Rr=new b,po=new b,Vl=new b,Wl=new b,Ar=new b;function wu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ar.fromArray(n,r);let o=s.x*Math.abs(Ar.x)+s.y*Math.abs(Ar.y)+s.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),h=i.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Yv=new Ps,mo=new b,Su=new b,Vi=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Yv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);let t=mo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Su)),this.expandByPoint(mo.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Es=new b,Tu=new b,Xl=new b,Js=new b,bu=new b,ql=new b,_u=new b,La=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Tu.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),Js.copy(this.origin).sub(Tu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xl),o=Js.dot(this.direction),l=-Js.dot(Xl),c=Js.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tu).addScaledVector(Xl,f),d}intersectSphere(e,t){Es.subVectors(e.center,this.origin);let i=Es.dot(this.direction),s=Es.dot(Es)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,i,s,r){bu.subVectors(t,e),ql.subVectors(i,e),_u.crossVectors(bu,ql);let a=this.direction.dot(_u),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Js.subVectors(this.origin,e);let l=o*this.direction.dot(ql.crossVectors(Js,ql));if(l<0)return null;let c=o*this.direction.dot(bu.cross(Js));if(c<0||l+c>a)return null;let h=-o*Js.dot(_u);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/la.setFromMatrixColumn(e,0).length(),r=1/la.setFromMatrixColumn(e,1).length(),a=1/la.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zv,e,Qv)}lookAt(e,t,i){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),js.crossVectors(i,mi),js.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),js.crossVectors(i,mi)),js.normalize(),Yl.crossVectors(mi,js),s[0]=js.x,s[4]=Yl.x,s[8]=mi.x,s[1]=js.y,s[5]=Yl.y,s[9]=mi.y,s[2]=js.z,s[6]=Yl.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],v=i[7],w=i[11],C=i[15],A=s[0],D=s[4],N=s[8],S=s[12],T=s[1],U=s[5],V=s[9],j=s[13],F=s[2],X=s[6],q=s[10],se=s[14],ne=s[3],te=s[7],re=s[11],oe=s[15];return r[0]=a*A+o*T+l*F+c*ne,r[4]=a*D+o*U+l*X+c*te,r[8]=a*N+o*V+l*q+c*re,r[12]=a*S+o*j+l*se+c*oe,r[1]=h*A+u*T+f*F+d*ne,r[5]=h*D+u*U+f*X+d*te,r[9]=h*N+u*V+f*q+d*re,r[13]=h*S+u*j+f*se+d*oe,r[2]=g*A+x*T+m*F+p*ne,r[6]=g*D+x*U+m*X+p*te,r[10]=g*N+x*V+m*q+p*re,r[14]=g*S+x*j+m*se+p*oe,r[3]=y*A+v*T+w*F+C*ne,r[7]=y*D+v*U+w*X+C*te,r[11]=y*N+v*V+w*q+C*re,r[15]=y*S+v*j+w*se+C*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+x*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,w=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,C=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,A=t*y+i*v+s*w+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=y*D,e[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*D,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*D,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*D,e[4]=v*D,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*D,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*D,e[8]=w*D,e[9]=(g*u*r-h*x*r-g*i*d+t*x*d+h*i*p-t*u*p)*D,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*p+t*o*p)*D,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*D,e[12]=C*D,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*m+t*u*m)*D,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*D,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,w=l*u,C=i.x,A=i.y,D=i.z;return s[0]=(1-(x+p))*C,s[1]=(d+w)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(d-w)*A,s[5]=(1-(f+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+v)*D,s[9]=(m-y)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=la.set(s[0],s[1],s[2]).length(),a=la.set(s[4],s[5],s[6]).length(),o=la.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bi.copy(this);let c=1/r,h=1/a,u=1/o;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,t.setFromRotationMatrix(Bi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=As){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(o===As)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_c)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=As){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,d=(i+s)*h,g,x;if(o===As)g=(a+r)*u,x=-2*u;else if(o===_c)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},la=new b,Bi=new qe,Zv=new b(0,0,0),Qv=new b(1,1,1),js=new b,Yl=new b,mi=new b,e0=new qe,t0=new vi,sr=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sr.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kv=0,n0=new b,ca=new vi,ws=new qe,Zl=new b,go=new b,Jv=new b,jv=new vi,i0=new b(1,0,0),s0=new b(0,1,0),r0=new b(0,0,1),$v={type:"added"},e2={type:"removed"},Pn=class n extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new sr,i=new vi,s=new b(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Rt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(s0,e)}rotateZ(e){return this.rotateOnAxis(r0,e)}translateOnAxis(e,t){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(s0,e)}translateZ(e){return this.translateOnAxis(r0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ws.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ws.lookAt(go,Zl,this.up):ws.lookAt(Zl,go,this.up),this.quaternion.setFromRotationMatrix(ws),s&&(ws.extractRotation(s.matrixWorld),ca.setFromRotationMatrix(ws),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($v)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e2)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ws.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ws.multiply(e.parent.matrixWorld)),e.applyMatrix4(ws),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pn.DEFAULT_UP=new b(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new b,Ss=new b,Ru=new b,Ts=new b,ha=new b,ua=new b,a0=new b,Au=new b,Cu=new b,Pu=new b,Ql=!1,Ur=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hi.subVectors(e,t),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hi.subVectors(s,t),Ss.subVectors(i,t),Ru.subVectors(e,t);let a=Hi.dot(Hi),o=Hi.dot(Ss),l=Hi.dot(Ru),c=Ss.dot(Ss),h=Ss.dot(Ru),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getUV(e,t,i,s,r,a,o,l){return Ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ql=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(a,Ts.y),l.addScaledVector(o,Ts.z),l)}static isFrontFacing(e,t,i,s){return Hi.subVectors(i,t),Ss.subVectors(e,t),Hi.cross(Ss).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ss.subVectors(this.a,this.b),Hi.cross(Ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ql=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ha.subVectors(s,i),ua.subVectors(r,i),Au.subVectors(e,i);let l=ha.dot(Au),c=ua.dot(Au);if(l<=0&&c<=0)return t.copy(i);Cu.subVectors(e,s);let h=ha.dot(Cu),u=ua.dot(Cu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ha,a);Pu.subVectors(e,r);let d=ha.dot(Pu),g=ua.dot(Pu);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ua,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return a0.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(a0,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(ha,a).addScaledVector(ua,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Gt.workingColorSpace){if(e=Xf(e,1),t=Tn(t,0,1),i=Tn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Du(a,r,e+1/3),this.g=Du(a,r,e),this.b=Du(a,r,e-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(e,t=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let i=dm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Gt.fromWorkingColorSpace(Qn.copy(this),e),Math.round(Tn(Qn.r*255,0,255))*65536+Math.round(Tn(Qn.g*255,0,255))*256+Math.round(Tn(Qn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Qn.copy(this),t);let i=Qn.r,s=Qn.g,r=Qn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=tn){Gt.fromWorkingColorSpace(Qn.copy(this),e);let t=Qn.r,i=Qn.g,s=Qn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(Kl);let i=bo($s.h,Kl.h,t),s=bo($s.s,Kl.s,t),r=bo($s.l,Kl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new we;we.NAMES=dm;var t2=0,cs=class extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Ra,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=Zu,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yu&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dn=class extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rs=n2();function n2(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function i2(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Tn(n,-65504,65504),Rs.floatView[0]=n;let e=Rs.uint32View[0],t=e>>23&511;return Rs.baseTable[t]+((e&8388607)>>Rs.shiftTable[t])}function s2(n){let e=n>>10;return Rs.uint32View[0]=Rs.mantissaTable[Rs.offsetTable[e]+(n&1023)]+Rs.exponentTable[e],Rs.floatView[0]}var tl={toHalfFloat:i2,fromHalfFloat:s2},xn=new b,Jl=new ce,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ju,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jl.fromBufferAttribute(this,t),Jl.applyMatrix3(e),this.setXY(t,Jl.x,Jl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ju&&(e.usage=this.usage),e}};var Ic=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lc=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Je=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var r2=0,Ti=new qe,Iu=new Pn,fa=new b,gi=new Ps,vo=new Ps,Cn=new b,Pt=class n extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?Lc:Ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,i){return Ti.makeTranslation(e,t,i),this.applyMatrix4(Ti),this}scale(e,t,i){return Ti.makeScale(e,t,i),this.applyMatrix4(Ti),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];vo.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(gi.min,vo.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,vo.max),gi.expandByPoint(Cn)):(gi.expandByPoint(vo.min),gi.expandByPoint(vo.max))}gi.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Cn.fromBufferAttribute(o,c),l&&(fa.fromBufferAttribute(e,c),Cn.add(fa)),s=Math.max(s,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new b,h[T]=new b;let u=new b,f=new b,d=new b,g=new ce,x=new ce,m=new ce,p=new b,y=new b;function v(T,U,V){u.fromArray(s,T*3),f.fromArray(s,U*3),d.fromArray(s,V*3),g.fromArray(a,T*2),x.fromArray(a,U*2),m.fromArray(a,V*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let j=1/(x.x*m.y-m.x*x.y);isFinite(j)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(j),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(j),c[T].add(p),c[U].add(p),c[V].add(p),h[T].add(y),h[U].add(y),h[V].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let T=0,U=w.length;T<U;++T){let V=w[T],j=V.start,F=V.count;for(let X=j,q=j+F;X<q;X+=3)v(i[X+0],i[X+1],i[X+2])}let C=new b,A=new b,D=new b,N=new b;function S(T){D.fromArray(r,T*3),N.copy(D);let U=c[T];C.copy(U),C.sub(D.multiplyScalar(D.dot(U))).normalize(),A.crossVectors(N,U);let j=A.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=j}for(let T=0,U=w.length;T<U;++T){let V=w[T],j=V.start,F=V.count;for(let X=j,q=j+F;X<q;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new b,r=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},o0=new qe,Cr=new La,jl=new Vi,l0=new b,da=new b,pa=new b,ma=new b,Lu=new b,$l=new b,ec=new ce,tc=new ce,nc=new ce,c0=new b,h0=new b,u0=new b,ic=new b,sc=new b,W=class extends Pn{constructor(e=new Pt,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lu.fromBufferAttribute(u,e),a?$l.addScaledVector(Lu,h):$l.addScaledVector(Lu.sub(t),h))}t.add($l)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(r),Cr.copy(e.ray).recast(e.near),!(jl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(jl,l0)===null||Cr.origin.distanceToSquared(l0)>(e.far-e.near)**2))&&(o0.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(o0),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let w=y,C=v;w<C;w+=3){let A=o.getX(w),D=o.getX(w+1),N=o.getX(w+2);s=rc(this,p,e,i,c,h,u,A,D,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),w=o.getX(m+2);s=rc(this,a,e,i,c,h,u,y,v,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=y,C=v;w<C;w+=3){let A=w,D=w+1,N=w+2;s=rc(this,p,e,i,c,h,u,A,D,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,w=m+2;s=rc(this,a,e,i,c,h,u,y,v,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function a2(n,e,t,i,s,r,a,o){let l;if(e.side===Mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ls,o),l===null)return null;sc.copy(o),sc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(sc);return c<t.near||c>t.far?null:{distance:c,point:sc.clone(),object:n}}function rc(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,da),n.getVertexPosition(l,pa),n.getVertexPosition(c,ma);let h=a2(n,e,t,i,da,pa,ma,ic);if(h){s&&(ec.fromBufferAttribute(s,o),tc.fromBufferAttribute(s,l),nc.fromBufferAttribute(s,c),h.uv=Ur.getInterpolation(ic,da,pa,ma,ec,tc,nc,new ce)),r&&(ec.fromBufferAttribute(r,o),tc.fromBufferAttribute(r,l),nc.fromBufferAttribute(r,c),h.uv1=Ur.getInterpolation(ic,da,pa,ma,ec,tc,nc,new ce),h.uv2=h.uv1),a&&(c0.fromBufferAttribute(a,o),h0.fromBufferAttribute(a,l),u0.fromBufferAttribute(a,c),h.normal=Ur.getInterpolation(ic,da,pa,ma,c0,h0,u0,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new b,materialIndex:0};Ur.getNormal(da,pa,ma,u.normal),h.face=u}return h}var Vt=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(x,m,p,y,v,w,C,A,D,N,S){let T=w/D,U=C/N,V=w/2,j=C/2,F=A/2,X=D+1,q=N+1,se=0,ne=0,te=new b;for(let re=0;re<q;re++){let oe=re*U-j;for(let Me=0;Me<X;Me++){let Z=Me*T-V;te[x]=Z*y,te[m]=oe*v,te[p]=F,c.push(te.x,te.y,te.z),te[x]=0,te[m]=0,te[p]=A>0?1:-1,h.push(te.x,te.y,te.z),u.push(Me/D),u.push(1-re/N),se+=1}}for(let re=0;re<N;re++)for(let oe=0;oe<D;oe++){let Me=f+oe+X*re,Z=f+oe+X*(re+1),ae=f+(oe+1)+X*(re+1),Ee=f+(oe+1)+X*re;l.push(Me,Z,Ee),l.push(Z,ae,Ee),ne+=6}o.addGroup(d,ne,S),d+=ne,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ua(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function si(n){let e={};for(let t=0;t<n.length;t++){let i=Ua(n[t]);for(let s in i)e[s]=i[s]}return e}function o2(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pm(n){return n.getRenderTarget()===null?n.outputColorSpace:Gt.workingColorSpace}var Pi={clone:Ua,merge:si},l2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l2,this.fragmentShader=c2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ua(e.uniforms),this.uniformsGroups=o2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Uc=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=class extends Uc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(To*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ga=-90,va=1,No=class extends Pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(ga,va,e,t);s.layers=this.layers,this.add(s);let r=new Kn(ga,va,e,t);r.layers=this.layers,this.add(r);let a=new Kn(ga,va,e,t);a.layers=this.layers,this.add(a);let o=new Kn(ga,va,e,t);o.layers=this.layers,this.add(o);let l=new Kn(ga,va,e,t);l.layers=this.layers,this.add(l);let c=new Kn(ga,va,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===As)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Nc=class extends hi{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pa,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fo=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Nr?tn:jn),this.texture=new Nc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vt(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:_i});r.uniforms.tEquirect.value=t;let a=new W(s,r),o=t.minFilter;return t.minFilter===Ia&&(t.minFilter=Nt),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Uu=new b,h2=new b,u2=new Rt,ki=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Uu.subVectors(i,t).cross(h2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Uu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||u2.getNormalMatrix(e),s=this.coplanarPoint(Uu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new Vi,ac=new b,Fr=class{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,a=new ki){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=As){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,m-d,w-p).normalize(),i[1].setComponents(l+r,f+c,m+d,w+p).normalize(),i[2].setComponents(l+a,f+h,m+g,w+y).normalize(),i[3].setComponents(l-a,f-h,m-g,w-y).normalize(),i[4].setComponents(l-o,f-u,m-x,w-v).normalize(),t===As)i[5].setComponents(l+o,f+u,m+x,w+v).normalize();else if(t===_c)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ac.x=s.normal.x>0?e.max.x:e.min.x,ac.y=s.normal.y>0?e.max.y:e.min.y,ac.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function f2(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var On=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let v=0;v<c;v++){let w=v*u-r;g.push(w,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,w=y+c*(p+1),C=y+1+c*(p+1),A=y+1+c*p;d.push(v,w,A),d.push(w,C,A)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},d2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,x2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,S2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V2="gl_FragColor = linearToOutputTexel( gl_FragColor );",W2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,X2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ax=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,My=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:d2,alphahash_pars_fragment:p2,alphamap_fragment:m2,alphamap_pars_fragment:g2,alphatest_fragment:v2,alphatest_pars_fragment:x2,aomap_fragment:y2,aomap_pars_fragment:M2,batching_pars_vertex:E2,batching_vertex:w2,begin_vertex:S2,beginnormal_vertex:T2,bsdfs:b2,iridescence_fragment:_2,bumpmap_pars_fragment:R2,clipping_planes_fragment:A2,clipping_planes_pars_fragment:C2,clipping_planes_pars_vertex:P2,clipping_planes_vertex:D2,color_fragment:I2,color_pars_fragment:L2,color_pars_vertex:U2,color_vertex:N2,common:F2,cube_uv_reflection_fragment:z2,defaultnormal_vertex:O2,displacementmap_pars_vertex:B2,displacementmap_vertex:H2,emissivemap_fragment:k2,emissivemap_pars_fragment:G2,colorspace_fragment:V2,colorspace_pars_fragment:W2,envmap_fragment:X2,envmap_common_pars_fragment:q2,envmap_pars_fragment:Y2,envmap_pars_vertex:Z2,envmap_physical_pars_fragment:ax,envmap_vertex:Q2,fog_vertex:K2,fog_pars_vertex:J2,fog_fragment:j2,fog_pars_fragment:$2,gradientmap_pars_fragment:ex,lightmap_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ox,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:yx,map_fragment:Mx,map_pars_fragment:Ex,map_particle_fragment:wx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:bx,morphcolor_vertex:_x,morphnormal_vertex:Rx,morphtarget_pars_vertex:Ax,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Dx,normal_pars_fragment:Ix,normal_pars_vertex:Lx,normal_vertex:Ux,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Bx,opaque_fragment:Hx,packing:kx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Qx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Jx,skinbase_vertex:jx,skinning_pars_vertex:$x,skinning_vertex:ey,skinnormal_vertex:ty,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:ay,transmission_pars_fragment:oy,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:hy,worldpos_vertex:uy,background_vert:fy,background_frag:dy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:vy,depth_vert:xy,depth_frag:yy,distanceRGBA_vert:My,distanceRGBA_frag:Ey,equirect_vert:wy,equirect_frag:Sy,linedashed_vert:Ty,linedashed_frag:by,meshbasic_vert:_y,meshbasic_frag:Ry,meshlambert_vert:Ay,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Dy,meshnormal_vert:Iy,meshnormal_frag:Ly,meshphong_vert:Uy,meshphong_frag:Ny,meshphysical_vert:Fy,meshphysical_frag:zy,meshtoon_vert:Oy,meshtoon_frag:By,points_vert:Hy,points_frag:ky,shadow_vert:Gy,shadow_frag:Vy,sprite_vert:Wy,sprite_frag:Xy},_e={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},ss={basic:{uniforms:si([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:si([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new we(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:si([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:si([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:si([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new we(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:si([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:si([_e.points,_e.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:si([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:si([_e.common,_e.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:si([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:si([_e.sprite,_e.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:si([_e.common,_e.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:si([_e.lights,_e.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ss.physical={uniforms:si([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var oc={r:0,b:0,g:0};function qy(n,e,t,i,s,r,a){let o=new we(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$c)?(h===void 0&&(h=new W(new Vt(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Ua(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Jt,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new W(new On(2,2),new Ct({name:"BackgroundMaterial",uniforms:Ua(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(oc,pm(n)),i.buffers.color.setClear(oc.r,oc.g,oc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Yy(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(F,X,q,se,ne){let te=!1;if(a){let re=x(se,q,X);c!==re&&(c=re,d(c.object)),te=p(F,se,q,ne),te&&y(F,se,q,ne)}else{let re=X.wireframe===!0;(c.geometry!==se.id||c.program!==q.id||c.wireframe!==re)&&(c.geometry=se.id,c.program=q.id,c.wireframe=re,te=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(te||h)&&(h=!1,N(F,X,q,se),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,X,q){let se=q.wireframe===!0,ne=o[F.id];ne===void 0&&(ne={},o[F.id]=ne);let te=ne[X.id];te===void 0&&(te={},ne[X.id]=te);let re=te[se];return re===void 0&&(re=m(f()),te[se]=re),re}function m(F){let X=[],q=[],se=[];for(let ne=0;ne<s;ne++)X[ne]=0,q[ne]=0,se[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:q,attributeDivisors:se,object:F,attributes:{},index:null}}function p(F,X,q,se){let ne=c.attributes,te=X.attributes,re=0,oe=q.getAttributes();for(let Me in oe)if(oe[Me].location>=0){let ae=ne[Me],Ee=te[Me];if(Ee===void 0&&(Me==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),Me==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor)),ae===void 0||ae.attribute!==Ee||Ee&&ae.data!==Ee.data)return!0;re++}return c.attributesNum!==re||c.index!==se}function y(F,X,q,se){let ne={},te=X.attributes,re=0,oe=q.getAttributes();for(let Me in oe)if(oe[Me].location>=0){let ae=te[Me];ae===void 0&&(Me==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),Me==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));let Ee={};Ee.attribute=ae,ae&&ae.data&&(Ee.data=ae.data),ne[Me]=Ee,re++}c.attributes=ne,c.attributesNum=re,c.index=se}function v(){let F=c.newAttributes;for(let X=0,q=F.length;X<q;X++)F[X]=0}function w(F){C(F,0)}function C(F,X){let q=c.newAttributes,se=c.enabledAttributes,ne=c.attributeDivisors;q[F]=1,se[F]===0&&(n.enableVertexAttribArray(F),se[F]=1),ne[F]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),ne[F]=X)}function A(){let F=c.newAttributes,X=c.enabledAttributes;for(let q=0,se=X.length;q<se;q++)X[q]!==F[q]&&(n.disableVertexAttribArray(q),X[q]=0)}function D(F,X,q,se,ne,te,re){re===!0?n.vertexAttribIPointer(F,X,q,ne,te):n.vertexAttribPointer(F,X,q,se,ne,te)}function N(F,X,q,se){if(i.isWebGL2===!1&&(F.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let ne=se.attributes,te=q.getAttributes(),re=X.defaultAttributeValues;for(let oe in te){let Me=te[oe];if(Me.location>=0){let Z=ne[oe];if(Z===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let ae=Z.normalized,Ee=Z.itemSize,ye=t.get(Z);if(ye===void 0)continue;let De=ye.buffer,ke=ye.type,rt=ye.bytesPerElement,Qe=i.isWebGL2===!0&&(ke===n.INT||ke===n.UNSIGNED_INT||Z.gpuType===nm);if(Z.isInterleavedBufferAttribute){let St=Z.data,Q=St.stride,un=Z.offset;if(St.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Me.locationSize;Ye++)C(Me.location+Ye,St.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ye=0;Ye<Me.locationSize;Ye++)w(Me.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Ye=0;Ye<Me.locationSize;Ye++)D(Me.location+Ye,Ee/Me.locationSize,ke,ae,Q*rt,(un+Ee/Me.locationSize*Ye)*rt,Qe)}else{if(Z.isInstancedBufferAttribute){for(let St=0;St<Me.locationSize;St++)C(Me.location+St,Z.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let St=0;St<Me.locationSize;St++)w(Me.location+St);n.bindBuffer(n.ARRAY_BUFFER,De);for(let St=0;St<Me.locationSize;St++)D(Me.location+St,Ee/Me.locationSize,ke,ae,Ee*rt,Ee/Me.locationSize*St*rt,Qe)}}else if(re!==void 0){let ae=re[oe];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(Me.location,ae);break;case 3:n.vertexAttrib3fv(Me.location,ae);break;case 4:n.vertexAttrib4fv(Me.location,ae);break;default:n.vertexAttrib1fv(Me.location,ae)}}}}A()}function S(){V();for(let F in o){let X=o[F];for(let q in X){let se=X[q];for(let ne in se)g(se[ne].object),delete se[ne];delete X[q]}delete o[F]}}function T(F){if(o[F.id]===void 0)return;let X=o[F.id];for(let q in X){let se=X[q];for(let ne in se)g(se[ne].object),delete se[ne];delete X[q]}delete o[F.id]}function U(F){for(let X in o){let q=o[X];if(q[F.id]===void 0)continue;let se=q[F.id];for(let ne in se)g(se[ne].object),delete se[ne];delete q[F.id]}}function V(){j(),h=!0,c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:j,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:w,disableUnusedAttributes:A}}function Zy(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Qy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=a||e.has("OES_texture_float"),C=v&&w,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:A}}function Ky(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ki,o=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,w=p.clippingState||null;l.value=w,w=h(g,f,v,d);for(let C=0;C!==v;++C)w[C]=t[C];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=d;v!==x;++v,w+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Jy(n){let e=new WeakMap;function t(a,o){return o===Do?a.mapping=Pa:o===Qu&&(a.mapping=Da),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Do||o===Qu)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Fo(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var rr=class extends Uc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ta=4,f0=[.125,.215,.35,.446,.526,.582],Lr=20,Nu=new rr,d0=new we,Fu=null,zu=0,Ou=0,Dr=(1+Math.sqrt(5))/2,xa=1/Dr,p0=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Dr,xa),new b(0,Dr,-xa),new b(xa,0,Dr),new b(-xa,0,Dr),new b(Dr,xa,0),new b(-Dr,xa,0)],Na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,zu,Ou),e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pa||e.mapping===Da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:jt,format:yn,colorSpace:Ri,depthBuffer:!1},s=m0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(r)),this._blurMaterial=$y(r,e,t)}return s}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,Nu)}_sceneToCubeUV(e,t,i,s){let o=new Kn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(d0),h.toneMapping=er,h.autoClear=!1;let d=new Dn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new W(new Vt,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(d0),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;lc(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Pa||e.mapping===Da;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;lc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Nu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=p0[(s-1)%p0.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new W(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Lr;m>Lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);let p=[],y=0;for(let D=0;D<Lr;++D){let N=D/x,S=Math.exp(-N*N/2);p.push(S),D===0?y+=S:D<m&&(y+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let w=this._sizeLods[s],C=3*w*(s>v-Ta?s-v+Ta:0),A=4*(this._cubeSize-w);lc(t,C,A,3*w,2*w),l.setRenderTarget(t),l.render(u,Nu)}};function jy(n){let e=[],t=[],i=[],s=n,r=n-Ta+1+f0.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ta?l=f0[a-n+Ta-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),w=new Float32Array(p*g*d);for(let A=0;A<d;A++){let D=A%3*2/3-1,N=A>2?0:-1,S=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];y.set(S,x*g*A),v.set(f,m*g*A);let T=[A,A,A,A,A,A];w.set(T,p*g*A)}let C=new Pt;C.setAttribute("position",new zt(y,x)),C.setAttribute("uv",new zt(v,m)),C.setAttribute("faceIndex",new zt(w,p)),e.push(C),s>Ta&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function m0(n,e,t){let i=new $t(n,e,t);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $y(n,e,t){let i=new Float32Array(Lr),s=new b(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function g0(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function v0(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e3(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Do||l===Qu,h=l===Pa||l===Da;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Na(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Na(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function t3(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function n3(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,w=y.length;v<w;v+=3){let C=y[v+0],A=y[v+1],D=y[v+2];f.push(C,A,A,D,D,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){let C=v+0,A=v+1,D=v+2;f.push(C,A,A,D,D,C)}}else return;let m=new(fm(f)?Lc:Ic)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function i3(n,e,t,i){let s=i.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){n.drawElements(r,g,o,d*l),t.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*l,x),t.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function s3(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r3(n,e){return n[0]-e[0]}function a3(n,e){return Math.abs(e[1])-Math.abs(n[1])}function o3(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new on,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let F=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],N=0;y===!0&&(N=1),v===!0&&(N=2),w===!0&&(N=3);let S=h.attributes.position.count*N,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let U=new Float32Array(S*T*4*g),V=new Pc(U,S,T,g);V.type=ci,V.needsUpdate=!0;let j=N*4;for(let X=0;X<g;X++){let q=C[X],se=A[X],ne=D[X],te=S*T*4*X;for(let re=0;re<q.count;re++){let oe=re*j;y===!0&&(a.fromBufferAttribute(q,re),U[te+oe+0]=a.x,U[te+oe+1]=a.y,U[te+oe+2]=a.z,U[te+oe+3]=0),v===!0&&(a.fromBufferAttribute(se,re),U[te+oe+4]=a.x,U[te+oe+5]=a.y,U[te+oe+6]=a.z,U[te+oe+7]=0),w===!0&&(a.fromBufferAttribute(ne,re),U[te+oe+8]=a.x,U[te+oe+9]=a.y,U[te+oe+10]=a.z,U[te+oe+11]=ne.itemSize===4?a.w:1)}}x={count:g,texture:V,size:new ce(S,T)},r.set(h,x),h.addEventListener("dispose",F)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<d;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort(a3);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(r3);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=o[v],C=w[0],A=w[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),m&&h.getAttribute("morphNormal"+v)!==m[C]&&h.setAttribute("morphNormal"+v,m[C]),s[v]=A,p+=A):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function l3(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ar=class extends hi{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:as,h!==as&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=bi),i===void 0&&h===nr&&(i=Cs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gm=new hi,vm=new ar(1,1);vm.compareFunction=um;var xm=new Pc,ym=new tf,Mm=new Nc,x0=[],y0=[],M0=new Float32Array(16),E0=new Float32Array(9),w0=new Float32Array(4);function Ga(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=x0[s];if(r===void 0&&(r=new Float32Array(s),x0[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function bn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function th(n,e){let t=y0[e];t===void 0&&(t=new Int32Array(e),y0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function u3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function f3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function d3(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,i))return;w0.set(i),n.uniformMatrix2fv(this.addr,!1,w0),_n(t,i)}}function p3(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),_n(t,i)}}function m3(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,i))return;M0.set(i),n.uniformMatrix4fv(this.addr,!1,M0),_n(t,i)}}function g3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function x3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function y3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function M3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function w3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function S3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function T3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?vm:gm;t.setTexture2D(e||r,s)}function b3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ym,s)}function _3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mm,s)}function R3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xm,s)}function A3(n){switch(n){case 5126:return c3;case 35664:return h3;case 35665:return u3;case 35666:return f3;case 35674:return d3;case 35675:return p3;case 35676:return m3;case 5124:case 35670:return g3;case 35667:case 35671:return v3;case 35668:case 35672:return x3;case 35669:case 35673:return y3;case 5125:return M3;case 36294:return E3;case 36295:return w3;case 36296:return S3;case 35678:case 36198:case 36298:case 36306:case 35682:return T3;case 35679:case 36299:case 36307:return b3;case 35680:case 36300:case 36308:case 36293:return _3;case 36289:case 36303:case 36311:case 36292:return R3}}function C3(n,e){n.uniform1fv(this.addr,e)}function P3(n,e){let t=Ga(e,this.size,2);n.uniform2fv(this.addr,t)}function D3(n,e){let t=Ga(e,this.size,3);n.uniform3fv(this.addr,t)}function I3(n,e){let t=Ga(e,this.size,4);n.uniform4fv(this.addr,t)}function L3(n,e){let t=Ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U3(n,e){let t=Ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N3(n,e){let t=Ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F3(n,e){n.uniform1iv(this.addr,e)}function z3(n,e){n.uniform2iv(this.addr,e)}function O3(n,e){n.uniform3iv(this.addr,e)}function B3(n,e){n.uniform4iv(this.addr,e)}function H3(n,e){n.uniform1uiv(this.addr,e)}function k3(n,e){n.uniform2uiv(this.addr,e)}function G3(n,e){n.uniform3uiv(this.addr,e)}function V3(n,e){n.uniform4uiv(this.addr,e)}function W3(n,e,t){let i=this.cache,s=e.length,r=th(t,s);bn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||gm,r[a])}function X3(n,e,t){let i=this.cache,s=e.length,r=th(t,s);bn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ym,r[a])}function q3(n,e,t){let i=this.cache,s=e.length,r=th(t,s);bn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mm,r[a])}function Y3(n,e,t){let i=this.cache,s=e.length,r=th(t,s);bn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xm,r[a])}function Z3(n){switch(n){case 5126:return C3;case 35664:return P3;case 35665:return D3;case 35666:return I3;case 35674:return L3;case 35675:return U3;case 35676:return N3;case 5124:case 35670:return F3;case 35667:case 35671:return z3;case 35668:case 35672:return O3;case 35669:case 35673:return B3;case 5125:return H3;case 36294:return k3;case 36295:return G3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return W3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return q3;case 36289:case 36303:case 36311:case 36292:return Y3}}var nf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A3(t.type)}},sf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z3(t.type)}},rf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function S0(n,e){n.seq.push(e),n.map[e.id]=e}function Q3(n,e,t){let i=n.name,s=i.length;for(Bu.lastIndex=0;;){let r=Bu.exec(i),a=Bu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){S0(t,c===void 0?new nf(o,n,e):new sf(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new rf(o),S0(t,u)),t=u}}}var Ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Q3(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function T0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var K3=37297,J3=0;function j3(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function $3(n){let e=Gt.getPrimaries(Gt.workingColorSpace),t=Gt.getPrimaries(n),i;switch(e===t?i="":e===bc&&t===Tc?i="LinearDisplayP3ToLinearSRGB":e===Tc&&t===bc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case eh:return[i,"LinearTransferOETF"];case tn:case Wf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function b0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j3(n.getShaderSource(e),a)}else return s}function eM(n,e){let t=$3(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tM(n,e){let t;switch(e){case Bf:t="Linear";break;case Hf:t="Reinhard";break;case kf:t="OptimizedCineon";break;case jo:t="ACESFilmic";break;case Gf:t="AgX";break;case uv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ba).join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ba).join(`
`)}function sM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ba(n){return n!==""}function _0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(n){return n.replace(aM,lM)}var oM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lM(n,e){let t=Et[e];if(t===void 0){let i=oM.get(e);if(i!==void 0)t=Et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return af(t)}var cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(n){return n.replace(cM,hM)}function hM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function C0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_s&&(e="SHADOWMAP_TYPE_VSM"),e}function fM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pa:case Da:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Da&&(e="ENVMAP_MODE_REFRACTION"),e}function pM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case em:e="ENVMAP_BLENDING_MULTIPLY";break;case cv:e="ENVMAP_BLENDING_MIX";break;case hv:e="ENVMAP_BLENDING_ADD";break}return e}function mM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=uM(t),c=fM(t),h=dM(t),u=pM(t),f=mM(t),d=t.isWebGL2?"":nM(t),g=iM(t),x=sM(r),m=s.createProgram(),p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ba).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ba).join(`
`),y.length>0&&(y+=`
`)):(p=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),y=[d,C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?Et.tonemapping_pars_fragment:"",t.toneMapping!==er?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),a=af(a),a=_0(a,t),a=R0(a,t),o=af(o),o=_0(o,t),o=R0(o,t),a=A0(a),o=A0(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let w=v+p+a,C=v+y+o,A=T0(s,s.VERTEX_SHADER,w),D=T0(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,D),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(V){if(n.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),F=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(D).trim(),q=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,D);else{let ne=b0(s,A,"vertex"),te=b0(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+ne+`
`+te)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(F===""||X==="")&&(se=!1);se&&(V.diagnostics={runnable:q,programLog:j,vertexShader:{log:F,prefix:p},fragmentShader:{log:X,prefix:y}})}s.deleteShader(A),s.deleteShader(D),S=new Ca(s,m),T=rM(s,m)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,K3)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J3++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=D,this}var vM=0,of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lf(e),t.set(e,i)),i}},lf=class{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}};function xM(n,e,t,i,s,r,a){let o=new Uo,l=new of,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,T,U,V,j){let F=V.fog,X=j.geometry,q=S.isMeshStandardMaterial?V.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),ne=se&&se.mapping===$c?se.image.height:null,te=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=re!==void 0?re.length:0,Me=0;X.morphAttributes.position!==void 0&&(Me=1),X.morphAttributes.normal!==void 0&&(Me=2),X.morphAttributes.color!==void 0&&(Me=3);let Z,ae,Ee,ye;if(te){let Nn=ss[te];Z=Nn.vertexShader,ae=Nn.fragmentShader}else Z=S.vertexShader,ae=S.fragmentShader,l.update(S),Ee=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);let De=n.getRenderTarget(),ke=j.isInstancedMesh===!0,rt=j.isBatchedMesh===!0,Qe=!!S.map,St=!!S.matcap,Q=!!se,un=!!S.aoMap,Ye=!!S.lightMap,at=!!S.bumpMap,He=!!S.normalMap,nn=!!S.displacementMap,vt=!!S.emissiveMap,I=!!S.metalnessMap,_=!!S.roughnessMap,$=S.anisotropy>0,ge=S.clearcoat>0,fe=S.iridescence>0,ve=S.sheen>0,Be=S.transmission>0,Pe=$&&!!S.anisotropyMap,Ne=ge&&!!S.clearcoatMap,je=ge&&!!S.clearcoatNormalMap,lt=ge&&!!S.clearcoatRoughnessMap,de=fe&&!!S.iridescenceMap,kt=fe&&!!S.iridescenceThicknessMap,Tt=ve&&!!S.sheenColorMap,$e=ve&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Ue=!!S.specularColorMap,tt=!!S.specularIntensityMap,pt=Be&&!!S.transmissionMap,bt=Be&&!!S.thicknessMap,yt=!!S.gradientMap,J=!!S.alphaMap,G=S.alphaTest>0,Ae=!!S.alphaHash,Ce=!!S.extensions,et=!!X.attributes.uv1,Ke=!!X.attributes.uv2,Xt=!!X.attributes.uv3,qt=er;return S.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(qt=n.toneMapping),{isWebGL2:h,shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:ae,defines:S.defines,customVertexShaderID:Ee,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:rt,instancing:ke,instancingColor:ke&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ri,map:Qe,matcap:St,envMap:Q,envMapMode:Q&&se.mapping,envMapCubeUVHeight:ne,aoMap:un,lightMap:Ye,bumpMap:at,normalMap:He,displacementMap:f&&nn,emissiveMap:vt,normalMapObjectSpace:He&&S.normalMapType===Ev,normalMapTangentSpace:He&&S.normalMapType===hm,metalnessMap:I,roughnessMap:_,anisotropy:$,anisotropyMap:Pe,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:lt,iridescence:fe,iridescenceMap:de,iridescenceThicknessMap:kt,sheen:ve,sheenColorMap:Tt,sheenRoughnessMap:$e,specularMap:Le,specularColorMap:Ue,specularIntensityMap:tt,transmission:Be,transmissionMap:pt,thicknessMap:bt,gradientMap:yt,opaque:S.transparent===!1&&S.blending===Ra,alphaMap:J,alphaTest:G,alphaHash:Ae,combine:S.combine,mapUv:Qe&&x(S.map.channel),aoMapUv:un&&x(S.aoMap.channel),lightMapUv:Ye&&x(S.lightMap.channel),bumpMapUv:at&&x(S.bumpMap.channel),normalMapUv:He&&x(S.normalMap.channel),displacementMapUv:nn&&x(S.displacementMap.channel),emissiveMapUv:vt&&x(S.emissiveMap.channel),metalnessMapUv:I&&x(S.metalnessMap.channel),roughnessMapUv:_&&x(S.roughnessMap.channel),anisotropyMapUv:Pe&&x(S.anisotropyMap.channel),clearcoatMapUv:Ne&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&x(S.sheenRoughnessMap.channel),specularMapUv:Le&&x(S.specularMap.channel),specularColorMapUv:Ue&&x(S.specularColorMap.channel),specularIntensityMapUv:tt&&x(S.specularIntensityMap.channel),transmissionMapUv:pt&&x(S.transmissionMap.channel),thicknessMapUv:bt&&x(S.thicknessMap.channel),alphaMapUv:J&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(He||$),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:Ke,vertexUv3s:Xt,pointsUvs:j.isPoints===!0&&!!X.attributes.uv&&(Qe||J),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&Gt.getTransfer(S.map.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ce&&S.extensions.derivatives===!0,extensionFragDepth:Ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)T.push(U),T.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(y(T,S),v(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function w(S){let T=g[S.type],U;if(T){let V=ss[T];U=Pi.clone(V.uniforms)}else U=S.uniforms;return U}function C(S,T){let U;for(let V=0,j=c.length;V<j;V++){let F=c[V];if(F.cacheKey===T){U=F,++U.usedTimes;break}}return U===void 0&&(U=new gM(n,T,S,r),c.push(U)),U}function A(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:c,dispose:N}}function yM(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function MM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function P0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function D0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||MM),i.length>1&&i.sort(f||P0),s.length>1&&s.sort(f||P0)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function EM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new D0,n.set(i,[a])):s>=r.length?(a=new D0,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new we};break;case"SpotLight":t={position:new b,direction:new b,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function SM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TM=0;function bM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _M(n,e){let t=new wM,i=SM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new b);let r=new b,a=new qe,o=new qe;function l(h,u){let f=0,d=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,w=0,C=0,A=0,D=0,N=0,S=0;h.sort(bM);let T=u===!0?Math.PI:1;for(let V=0,j=h.length;V<j;V++){let F=h[V],X=F.color,q=F.intensity,se=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=X.r*q*T,d+=X.g*q*T,g+=X.b*q*T;else if(F.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(F.sh.coefficients[te],q);S++}else if(F.isDirectionalLight){let te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){let re=F.shadow,oe=i.get(F);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,s.directionalShadow[x]=oe,s.directionalShadowMap[x]=ne,s.directionalShadowMatrix[x]=F.shadow.matrix,w++}s.directional[x]=te,x++}else if(F.isSpotLight){let te=t.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(X).multiplyScalar(q*T),te.distance=se,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,s.spot[p]=te;let re=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,re.updateMatrices(F),F.castShadow&&N++),s.spotLightMatrix[p]=re.matrix,F.castShadow){let oe=i.get(F);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,s.spotShadow[p]=oe,s.spotShadowMap[p]=ne,A++}p++}else if(F.isRectAreaLight){let te=t.get(F);te.color.copy(X).multiplyScalar(q),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=te,y++}else if(F.isPointLight){let te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*T),te.distance=F.distance,te.decay=F.decay,F.castShadow){let re=F.shadow,oe=i.get(F);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,oe.shadowCameraNear=re.camera.near,oe.shadowCameraFar=re.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=ne,s.pointShadowMatrix[m]=F.shadow.matrix,C++}s.point[m]=te,m++}else if(F.isHemisphereLight){let te=t.get(F);te.skyColor.copy(F.color).multiplyScalar(q*T),te.groundColor.copy(F.groundColor).multiplyScalar(q*T),s.hemi[v]=te,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==w||U.numPointShadows!==C||U.numSpotShadows!==A||U.numSpotMaps!==D||U.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+D-N,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=S,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=w,U.numPointShadows=C,U.numSpotShadows=A,U.numSpotMaps=D,U.numLightProbes=S,s.version=TM++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let w=h[y];if(w.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let C=s.point[d];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function I0(n,e){let t=new _M(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function RM(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new I0(n,e),t.set(r,[l])):a>=o.length?(l=new I0(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var zr=class extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cf=class extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PM(n,e,t){let i=new Fr,s=new ce,r=new ce,a=new on,o=new zr({depthPacking:el}),l=new cf,c={},h=t.maxTextureSize,u={[ls]:Mn,[Mn]:ls,[Ft]:Ft},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:AM,fragmentShader:CM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new W(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$0;let p=this.type;this.render=function(A,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(_i),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let j=p!==_s&&this.type===_s,F=p===_s&&this.type!==_s;for(let X=0,q=A.length;X<q;X++){let se=A[X],ne=se.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let te=ne.getFrameExtents();if(s.multiply(te),r.copy(ne.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,ne.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,ne.mapSize.y=r.y)),ne.map===null||j===!0||F===!0){let oe=this.type!==_s?{minFilter:Ut,magFilter:Ut}:{};ne.map!==null&&ne.map.dispose(),ne.map=new $t(s.x,s.y,oe),ne.map.texture.name=se.name+".shadowMap",ne.camera.updateProjectionMatrix()}n.setRenderTarget(ne.map),n.clear();let re=ne.getViewportCount();for(let oe=0;oe<re;oe++){let Me=ne.getViewport(oe);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),V.viewport(a),ne.updateMatrices(se,oe),i=ne.getFrustum(),w(D,N,ne.camera,se,this.type)}ne.isPointLightShadow!==!0&&this.type===_s&&y(ne,N),ne.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,T,U)};function y(A,D){let N=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $t(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,N,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,N,d,x,null)}function v(A,D,N,S){let T=null,U=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)T=U;else if(T=N.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let V=T.uuid,j=D.uuid,F=c[V];F===void 0&&(F={},c[V]=F);let X=F[j];X===void 0&&(X=T.clone(),F[j]=X,D.addEventListener("dispose",C)),T=X}if(T.visible=D.visible,T.wireframe=D.wireframe,S===_s?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:u[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let V=n.properties.get(T);V.light=N}return T}function w(A,D,N,S,T){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===_s)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let j=e.update(A),F=A.material;if(Array.isArray(F)){let X=j.groups;for(let q=0,se=X.length;q<se;q++){let ne=X[q],te=F[ne.materialIndex];if(te&&te.visible){let re=v(A,te,S,T);A.onBeforeShadow(n,A,D,N,j,re,ne),n.renderBufferDirect(N,null,j,re,A,ne),A.onAfterShadow(n,A,D,N,j,re,ne)}}}else if(F.visible){let X=v(A,F,S,T);A.onBeforeShadow(n,A,D,N,j,X,null),n.renderBufferDirect(N,null,j,X,A,null),A.onAfterShadow(n,A,D,N,j,X,null)}}let V=A.children;for(let j=0,F=V.length;j<F;j++)w(V[j],D,N,S,T)}function C(A){A.target.removeEventListener("dispose",C);for(let N in c){let S=c[N],T=A.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function DM(n,e,t){let i=t.isWebGL2;function s(){let G=!1,Ae=new on,Ce=null,et=new on(0,0,0,0);return{setMask:function(Ke){Ce!==Ke&&!G&&(n.colorMask(Ke,Ke,Ke,Ke),Ce=Ke)},setLocked:function(Ke){G=Ke},setClear:function(Ke,Xt,qt,vn,Nn){Nn===!0&&(Ke*=vn,Xt*=vn,qt*=vn),Ae.set(Ke,Xt,qt,vn),et.equals(Ae)===!1&&(n.clearColor(Ke,Xt,qt,vn),et.copy(Ae))},reset:function(){G=!1,Ce=null,et.set(-1,0,0,0)}}}function r(){let G=!1,Ae=null,Ce=null,et=null;return{setTest:function(Ke){Ke?rt(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(Ke){Ae!==Ke&&!G&&(n.depthMask(Ke),Ae=Ke)},setFunc:function(Ke){if(Ce!==Ke){switch(Ke){case nv:n.depthFunc(n.NEVER);break;case iv:n.depthFunc(n.ALWAYS);break;case sv:n.depthFunc(n.LESS);break;case Mc:n.depthFunc(n.LEQUAL);break;case rv:n.depthFunc(n.EQUAL);break;case av:n.depthFunc(n.GEQUAL);break;case ov:n.depthFunc(n.GREATER);break;case lv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=Ke}},setLocked:function(Ke){G=Ke},setClear:function(Ke){et!==Ke&&(n.clearDepth(Ke),et=Ke)},reset:function(){G=!1,Ae=null,Ce=null,et=null}}}function a(){let G=!1,Ae=null,Ce=null,et=null,Ke=null,Xt=null,qt=null,vn=null,Nn=null;return{setTest:function(Yt){G||(Yt?rt(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Yt){Ae!==Yt&&!G&&(n.stencilMask(Yt),Ae=Yt)},setFunc:function(Yt,Fn,Si){(Ce!==Yt||et!==Fn||Ke!==Si)&&(n.stencilFunc(Yt,Fn,Si),Ce=Yt,et=Fn,Ke=Si)},setOp:function(Yt,Fn,Si){(Xt!==Yt||qt!==Fn||vn!==Si)&&(n.stencilOp(Yt,Fn,Si),Xt=Yt,qt=Fn,vn=Si)},setLocked:function(Yt){G=Yt},setClear:function(Yt){Nn!==Yt&&(n.clearStencil(Yt),Nn=Yt)},reset:function(){G=!1,Ae=null,Ce=null,et=null,Ke=null,Xt=null,qt=null,vn=null,Nn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,w=null,C=null,A=null,D=null,N=null,S=new we(0,0,0),T=0,U=!1,V=null,j=null,F=null,X=null,q=null,se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,te=0,re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=te>=1):re.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=te>=2);let oe=null,Me={},Z=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),Ee=new on().fromArray(Z),ye=new on().fromArray(ae);function De(G,Ae,Ce,et){let Ke=new Uint8Array(4),Xt=n.createTexture();n.bindTexture(G,Xt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<Ce;qt++)i&&(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ae,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,Ke):n.texImage2D(Ae+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ke);return Xt}let ke={};ke[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),ke[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ke[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ke[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),rt(n.DEPTH_TEST),l.setFunc(Mc),vt(!1),I(dp),rt(n.CULL_FACE),He(_i);function rt(G){f[G]!==!0&&(n.enable(G),f[G]=!0)}function Qe(G){f[G]!==!1&&(n.disable(G),f[G]=!1)}function St(G,Ae){return d[G]!==Ae?(n.bindFramebuffer(G,Ae),d[G]=Ae,i&&(G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function Q(G,Ae){let Ce=x,et=!1;if(G)if(Ce=g.get(Ae),Ce===void 0&&(Ce=[],g.set(Ae,Ce)),G.isWebGLMultipleRenderTargets){let Ke=G.texture;if(Ce.length!==Ke.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let Xt=0,qt=Ke.length;Xt<qt;Xt++)Ce[Xt]=n.COLOR_ATTACHMENT0+Xt;Ce.length=Ke.length,et=!0}}else Ce[0]!==n.COLOR_ATTACHMENT0&&(Ce[0]=n.COLOR_ATTACHMENT0,et=!0);else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,et=!0);et&&(t.isWebGL2?n.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function un(G){return m!==G?(n.useProgram(G),m=G,!0):!1}let Ye={[Ir]:n.FUNC_ADD,[kg]:n.FUNC_SUBTRACT,[Gg]:n.FUNC_REVERSE_SUBTRACT};if(i)Ye[gp]=n.MIN,Ye[vp]=n.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(Ye[gp]=G.MIN_EXT,Ye[vp]=G.MAX_EXT)}let at={[Vg]:n.ZERO,[Wg]:n.ONE,[Xg]:n.SRC_COLOR,[Yu]:n.SRC_ALPHA,[Jg]:n.SRC_ALPHA_SATURATE,[Qg]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[qg]:n.ONE_MINUS_SRC_COLOR,[Zu]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[Zg]:n.ONE_MINUS_DST_ALPHA,[jg]:n.CONSTANT_COLOR,[$g]:n.ONE_MINUS_CONSTANT_COLOR,[ev]:n.CONSTANT_ALPHA,[tv]:n.ONE_MINUS_CONSTANT_ALPHA};function He(G,Ae,Ce,et,Ke,Xt,qt,vn,Nn,Yt){if(G===_i){p===!0&&(Qe(n.BLEND),p=!1);return}if(p===!1&&(rt(n.BLEND),p=!0),G!==Hg){if(G!==y||Yt!==U){if((v!==Ir||A!==Ir)&&(n.blendEquation(n.FUNC_ADD),v=Ir,A=Ir),Yt)switch(G){case Ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gi:n.blendFunc(n.ONE,n.ONE);break;case pp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}w=null,C=null,D=null,N=null,S.set(0,0,0),T=0,y=G,U=Yt}return}Ke=Ke||Ae,Xt=Xt||Ce,qt=qt||et,(Ae!==v||Ke!==A)&&(n.blendEquationSeparate(Ye[Ae],Ye[Ke]),v=Ae,A=Ke),(Ce!==w||et!==C||Xt!==D||qt!==N)&&(n.blendFuncSeparate(at[Ce],at[et],at[Xt],at[qt]),w=Ce,C=et,D=Xt,N=qt),(vn.equals(S)===!1||Nn!==T)&&(n.blendColor(vn.r,vn.g,vn.b,Nn),S.copy(vn),T=Nn),y=G,U=!1}function nn(G,Ae){G.side===Ft?Qe(n.CULL_FACE):rt(n.CULL_FACE);let Ce=G.side===Mn;Ae&&(Ce=!Ce),vt(Ce),G.blending===Ra&&G.transparent===!1?He(_i):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);let et=G.stencilWrite;c.setTest(et),et&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(G){V!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),V=G)}function I(G){G!==Og?(rt(n.CULL_FACE),G!==j&&(G===dp?n.cullFace(n.BACK):G===Bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),j=G}function _(G){G!==F&&(ne&&n.lineWidth(G),F=G)}function $(G,Ae,Ce){G?(rt(n.POLYGON_OFFSET_FILL),(X!==Ae||q!==Ce)&&(n.polygonOffset(Ae,Ce),X=Ae,q=Ce)):Qe(n.POLYGON_OFFSET_FILL)}function ge(G){G?rt(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function fe(G){G===void 0&&(G=n.TEXTURE0+se-1),oe!==G&&(n.activeTexture(G),oe=G)}function ve(G,Ae,Ce){Ce===void 0&&(oe===null?Ce=n.TEXTURE0+se-1:Ce=oe);let et=Me[Ce];et===void 0&&(et={type:void 0,texture:void 0},Me[Ce]=et),(et.type!==G||et.texture!==Ae)&&(oe!==Ce&&(n.activeTexture(Ce),oe=Ce),n.bindTexture(G,Ae||ke[G]),et.type=G,et.texture=Ae)}function Be(){let G=Me[oe];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){Ee.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ee.copy(G))}function pt(G){ye.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ye.copy(G))}function bt(G,Ae){let Ce=u.get(Ae);Ce===void 0&&(Ce=new WeakMap,u.set(Ae,Ce));let et=Ce.get(G);et===void 0&&(et=n.getUniformBlockIndex(Ae,G.name),Ce.set(G,et))}function yt(G,Ae){let et=u.get(Ae).get(G);h.get(Ae)!==et&&(n.uniformBlockBinding(Ae,et,G.__bindingPointIndex),h.set(Ae,et))}function J(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},oe=null,Me={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,w=null,C=null,A=null,D=null,N=null,S=new we(0,0,0),T=0,U=!1,V=null,j=null,F=null,X=null,q=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:rt,disable:Qe,bindFramebuffer:St,drawBuffers:Q,useProgram:un,setBlending:He,setMaterial:nn,setFlipSided:vt,setCullFace:I,setLineWidth:_,setPolygonOffset:$,setScissorTest:ge,activeTexture:fe,bindTexture:ve,unbindTexture:Be,compressedTexImage2D:Pe,compressedTexImage3D:Ne,texImage2D:Le,texImage3D:Ue,updateUBOMapping:bt,uniformBlockBinding:yt,texStorage2D:Tt,texStorage3D:$e,texSubImage2D:je,texSubImage3D:lt,compressedTexSubImage2D:de,compressedTexSubImage3D:kt,scissor:tt,viewport:pt,reset:J}}function IM(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,_){return d?new OffscreenCanvas(I,_):Lo("canvas")}function x(I,_,$,ge){let fe=1;if((I.width>ge||I.height>ge)&&(fe=ge/Math.max(I.width,I.height)),fe<1||_===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ve=_?Rc:Math.floor,Be=ve(fe*I.width),Pe=ve(fe*I.height);u===void 0&&(u=g(Be,Pe));let Ne=$?g(Be,Pe):u;return Ne.width=Be,Ne.height=Pe,Ne.getContext("2d").drawImage(I,0,0,Be,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Be+"x"+Pe+")."),Ne}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return $u(I.width)&&$u(I.height)}function p(I){return o?!1:I.wrapS!==Jn||I.wrapT!==Jn||I.minFilter!==Ut&&I.minFilter!==Nt}function y(I,_){return I.generateMipmaps&&_&&I.minFilter!==Ut&&I.minFilter!==Nt}function v(I){n.generateMipmap(I)}function w(I,_,$,ge,fe=!1){if(o===!1)return _;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ve=_;if(_===n.RED&&($===n.FLOAT&&(ve=n.R32F),$===n.HALF_FLOAT&&(ve=n.R16F),$===n.UNSIGNED_BYTE&&(ve=n.R8)),_===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ve=n.R8UI),$===n.UNSIGNED_SHORT&&(ve=n.R16UI),$===n.UNSIGNED_INT&&(ve=n.R32UI),$===n.BYTE&&(ve=n.R8I),$===n.SHORT&&(ve=n.R16I),$===n.INT&&(ve=n.R32I)),_===n.RG&&($===n.FLOAT&&(ve=n.RG32F),$===n.HALF_FLOAT&&(ve=n.RG16F),$===n.UNSIGNED_BYTE&&(ve=n.RG8)),_===n.RGBA){let Be=fe?Sc:Gt.getTransfer(ge);$===n.FLOAT&&(ve=n.RGBA32F),$===n.HALF_FLOAT&&(ve=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ve=Be===Jt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ve=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ve=n.RGB5_A1)}return(ve===n.R16F||ve===n.R32F||ve===n.RG16F||ve===n.RG32F||ve===n.RGBA16F||ve===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function C(I,_,$){return y(I,$)===!0||I.isFramebufferTexture&&I.minFilter!==Ut&&I.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function A(I){return I===Ut||I===xp||I===uu?n.NEAREST:n.LINEAR}function D(I){let _=I.target;_.removeEventListener("dispose",D),S(_),_.isVideoTexture&&h.delete(_)}function N(I){let _=I.target;_.removeEventListener("dispose",N),U(_)}function S(I){let _=i.get(I);if(_.__webglInit===void 0)return;let $=I.source,ge=f.get($);if(ge){let fe=ge[_.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&T(I),Object.keys(ge).length===0&&f.delete($)}i.remove(I)}function T(I){let _=i.get(I);n.deleteTexture(_.__webglTexture);let $=I.source,ge=f.get($);delete ge[_.__cacheKey],a.memory.textures--}function U(I){let _=I.texture,$=i.get(I),ge=i.get(_);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray($.__webglFramebuffer[fe]))for(let ve=0;ve<$.__webglFramebuffer[fe].length;ve++)n.deleteFramebuffer($.__webglFramebuffer[fe][ve]);else n.deleteFramebuffer($.__webglFramebuffer[fe]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[fe])}else{if(Array.isArray($.__webglFramebuffer))for(let fe=0;fe<$.__webglFramebuffer.length;fe++)n.deleteFramebuffer($.__webglFramebuffer[fe]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let fe=0;fe<$.__webglColorRenderbuffer.length;fe++)$.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[fe]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let fe=0,ve=_.length;fe<ve;fe++){let Be=i.get(_[fe]);Be.__webglTexture&&(n.deleteTexture(Be.__webglTexture),a.memory.textures--),i.remove(_[fe])}i.remove(_),i.remove(I)}let V=0;function j(){V=0}function F(){let I=V;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),V+=1,I}function X(I){let _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.wrapR||0),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.colorSpace),_.join()}function q(I,_){let $=i.get(I);if(I.isVideoTexture&&nn(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){let ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee($,I,_);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+_)}function se(I,_){let $=i.get(I);if(I.version>0&&$.__version!==I.version){Ee($,I,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+_)}function ne(I,_){let $=i.get(I);if(I.version>0&&$.__version!==I.version){Ee($,I,_);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+_)}function te(I,_){let $=i.get(I);if(I.version>0&&$.__version!==I.version){ye($,I,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+_)}let re={[$n]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ku]:n.MIRRORED_REPEAT},oe={[Ut]:n.NEAREST,[xp]:n.NEAREST_MIPMAP_NEAREST,[uu]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[fv]:n.LINEAR_MIPMAP_NEAREST,[Ia]:n.LINEAR_MIPMAP_LINEAR},Me={[wv]:n.NEVER,[Av]:n.ALWAYS,[Sv]:n.LESS,[um]:n.LEQUAL,[Tv]:n.EQUAL,[Rv]:n.GEQUAL,[bv]:n.GREATER,[_v]:n.NOTEQUAL};function Z(I,_,$){if($?(n.texParameteri(I,n.TEXTURE_WRAP_S,re[_.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,re[_.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,re[_.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,oe[_.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,oe[_.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Jn||_.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Ut&&_.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ut||_.minFilter!==uu&&_.minFilter!==Ia||_.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===jt&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function ae(I,_){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",D));let ge=_.source,fe=f.get(ge);fe===void 0&&(fe={},f.set(ge,fe));let ve=X(_);if(ve!==I.__cacheKey){fe[ve]===void 0&&(fe[ve]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),fe[ve].usedTimes++;let Be=fe[I.__cacheKey];Be!==void 0&&(fe[I.__cacheKey].usedTimes--,Be.usedTimes===0&&T(_)),I.__cacheKey=ve,I.__webglTexture=fe[ve].texture}return $}function Ee(I,_,$){let ge=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ge=n.TEXTURE_3D);let fe=ae(I,_),ve=_.source;t.bindTexture(ge,I.__webglTexture,n.TEXTURE0+$);let Be=i.get(ve);if(ve.version!==Be.__version||fe===!0){t.activeTexture(n.TEXTURE0+$);let Pe=Gt.getPrimaries(Gt.workingColorSpace),Ne=_.colorSpace===jn?null:Gt.getPrimaries(_.colorSpace),je=_.colorSpace===jn||Pe===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let lt=p(_)&&m(_.image)===!1,de=x(_.image,lt,!1,s.maxTextureSize);de=vt(_,de);let kt=m(de)||o,Tt=r.convert(_.format,_.colorSpace),$e=r.convert(_.type),Le=w(_.internalFormat,Tt,$e,_.colorSpace,_.isVideoTexture);Z(ge,_,kt);let Ue,tt=_.mipmaps,pt=o&&_.isVideoTexture!==!0&&Le!==lm,bt=Be.__version===void 0||fe===!0,yt=C(_,de,kt);if(_.isDepthTexture)Le=n.DEPTH_COMPONENT,o?_.type===ci?Le=n.DEPTH_COMPONENT32F:_.type===bi?Le=n.DEPTH_COMPONENT24:_.type===Cs?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:_.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===as&&Le===n.DEPTH_COMPONENT&&_.type!==Vf&&_.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=bi,$e=r.convert(_.type)),_.format===nr&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,_.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Cs,$e=r.convert(_.type))),bt&&(pt?t.texStorage2D(n.TEXTURE_2D,1,Le,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Le,de.width,de.height,0,Tt,$e,null));else if(_.isDataTexture)if(tt.length>0&&kt){pt&&bt&&t.texStorage2D(n.TEXTURE_2D,yt,Le,tt[0].width,tt[0].height);for(let J=0,G=tt.length;J<G;J++)Ue=tt[J],pt?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Tt,$e,Ue.data):t.texImage2D(n.TEXTURE_2D,J,Le,Ue.width,Ue.height,0,Tt,$e,Ue.data);_.generateMipmaps=!1}else pt?(bt&&t.texStorage2D(n.TEXTURE_2D,yt,Le,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Tt,$e,de.data)):t.texImage2D(n.TEXTURE_2D,0,Le,de.width,de.height,0,Tt,$e,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){pt&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Le,tt[0].width,tt[0].height,de.depth);for(let J=0,G=tt.length;J<G;J++)Ue=tt[J],_.format!==yn?Tt!==null?pt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,de.depth,Tt,Ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Le,Ue.width,Ue.height,de.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,de.depth,Tt,$e,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Le,Ue.width,Ue.height,de.depth,0,Tt,$e,Ue.data)}else{pt&&bt&&t.texStorage2D(n.TEXTURE_2D,yt,Le,tt[0].width,tt[0].height);for(let J=0,G=tt.length;J<G;J++)Ue=tt[J],_.format!==yn?Tt!==null?pt?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Tt,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Le,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Tt,$e,Ue.data):t.texImage2D(n.TEXTURE_2D,J,Le,Ue.width,Ue.height,0,Tt,$e,Ue.data)}else if(_.isDataArrayTexture)pt?(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Le,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Tt,$e,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,Tt,$e,de.data);else if(_.isData3DTexture)pt?(bt&&t.texStorage3D(n.TEXTURE_3D,yt,Le,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Tt,$e,de.data)):t.texImage3D(n.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,Tt,$e,de.data);else if(_.isFramebufferTexture){if(bt)if(pt)t.texStorage2D(n.TEXTURE_2D,yt,Le,de.width,de.height);else{let J=de.width,G=de.height;for(let Ae=0;Ae<yt;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Le,J,G,0,Tt,$e,null),J>>=1,G>>=1}}else if(tt.length>0&&kt){pt&&bt&&t.texStorage2D(n.TEXTURE_2D,yt,Le,tt[0].width,tt[0].height);for(let J=0,G=tt.length;J<G;J++)Ue=tt[J],pt?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Tt,$e,Ue):t.texImage2D(n.TEXTURE_2D,J,Le,Tt,$e,Ue);_.generateMipmaps=!1}else pt?(bt&&t.texStorage2D(n.TEXTURE_2D,yt,Le,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,$e,de)):t.texImage2D(n.TEXTURE_2D,0,Le,Tt,$e,de);y(_,kt)&&v(ge),Be.__version=ve.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function ye(I,_,$){if(_.image.length!==6)return;let ge=ae(I,_),fe=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+$);let ve=i.get(fe);if(fe.version!==ve.__version||ge===!0){t.activeTexture(n.TEXTURE0+$);let Be=Gt.getPrimaries(Gt.workingColorSpace),Pe=_.colorSpace===jn?null:Gt.getPrimaries(_.colorSpace),Ne=_.colorSpace===jn||Be===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let je=_.isCompressedTexture||_.image[0].isCompressedTexture,lt=_.image[0]&&_.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!je&&!lt?de[J]=x(_.image[J],!1,!0,s.maxCubemapSize):de[J]=lt?_.image[J].image:_.image[J],de[J]=vt(_,de[J]);let kt=de[0],Tt=m(kt)||o,$e=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),Ue=w(_.internalFormat,$e,Le,_.colorSpace),tt=o&&_.isVideoTexture!==!0,pt=ve.__version===void 0||ge===!0,bt=C(_,kt,Tt);Z(n.TEXTURE_CUBE_MAP,_,Tt);let yt;if(je){tt&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Ue,kt.width,kt.height);for(let J=0;J<6;J++){yt=de[J].mipmaps;for(let G=0;G<yt.length;G++){let Ae=yt[G];_.format!==yn?$e!==null?tt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G,0,0,Ae.width,Ae.height,$e,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G,Ue,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G,0,0,Ae.width,Ae.height,$e,Le,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G,Ue,Ae.width,Ae.height,0,$e,Le,Ae.data)}}}else{yt=_.mipmaps,tt&&pt&&(yt.length>0&&bt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Ue,de[0].width,de[0].height));for(let J=0;J<6;J++)if(lt){tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,$e,Le,de[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,de[J].width,de[J].height,0,$e,Le,de[J].data);for(let G=0;G<yt.length;G++){let Ce=yt[G].image[J].image;tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G+1,0,0,Ce.width,Ce.height,$e,Le,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G+1,Ue,Ce.width,Ce.height,0,$e,Le,Ce.data)}}else{tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,$e,Le,de[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,$e,Le,de[J]);for(let G=0;G<yt.length;G++){let Ae=yt[G];tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G+1,0,0,$e,Le,Ae.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,G+1,Ue,$e,Le,Ae.image[J])}}}y(_,Tt)&&v(n.TEXTURE_CUBE_MAP),ve.__version=fe.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function De(I,_,$,ge,fe,ve){let Be=r.convert($.format,$.colorSpace),Pe=r.convert($.type),Ne=w($.internalFormat,Be,Pe,$.colorSpace);if(!i.get(_).__hasExternalTextures){let lt=Math.max(1,_.width>>ve),de=Math.max(1,_.height>>ve);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,ve,Ne,lt,de,_.depth,0,Be,Pe,null):t.texImage2D(fe,ve,Ne,lt,de,0,Be,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),He(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,fe,i.get($).__webglTexture,0,at(_)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,fe,i.get($).__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(I,_,$){if(n.bindRenderbuffer(n.RENDERBUFFER,I),_.depthBuffer&&!_.stencilBuffer){let ge=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||He(_)){let fe=_.depthTexture;fe&&fe.isDepthTexture&&(fe.type===ci?ge=n.DEPTH_COMPONENT32F:fe.type===bi&&(ge=n.DEPTH_COMPONENT24));let ve=at(_);He(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ge,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(_.depthBuffer&&_.stencilBuffer){let ge=at(_);$&&He(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,_.width,_.height):He(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let ge=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let fe=0;fe<ge.length;fe++){let ve=ge[fe],Be=r.convert(ve.format,ve.colorSpace),Pe=r.convert(ve.type),Ne=w(ve.internalFormat,Be,Pe,ve.colorSpace),je=at(_);$&&He(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ne,_.width,_.height):He(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Ne,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(I,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let ge=i.get(_.depthTexture).__webglTexture,fe=at(_);if(_.depthTexture.format===as)He(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(_.depthTexture.format===nr)He(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Qe(I){let _=i.get(I),$=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!_.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");rt(_.__webglFramebuffer,I)}else if($){_.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ge]),_.__webglDepthbuffer[ge]=n.createRenderbuffer(),ke(_.__webglDepthbuffer[ge],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),ke(_.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(I,_,$){let ge=i.get(I);_!==void 0&&De(ge.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Qe(I)}function Q(I){let _=I.texture,$=i.get(I),ge=i.get(_);I.addEventListener("dispose",N),I.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=_.version,a.memory.textures++);let fe=I.isWebGLCubeRenderTarget===!0,ve=I.isWebGLMultipleRenderTargets===!0,Be=m(I)||o;if(fe){$.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(o&&_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer[Pe]=[];for(let Ne=0;Ne<_.mipmaps.length;Ne++)$.__webglFramebuffer[Pe][Ne]=n.createFramebuffer()}else $.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)$.__webglFramebuffer[Pe]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(ve)if(s.drawBuffers){let Pe=I.texture;for(let Ne=0,je=Pe.length;Ne<je;Ne++){let lt=i.get(Pe[Ne]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&He(I)===!1){let Pe=ve?_:[_];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Pe.length;Ne++){let je=Pe[Ne];$.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ne]);let lt=r.convert(je.format,je.colorSpace),de=r.convert(je.type),kt=w(je.internalFormat,lt,de,je.colorSpace,I.isXRRenderTarget===!0),Tt=at(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,kt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ke($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Z(n.TEXTURE_CUBE_MAP,_,Be);for(let Pe=0;Pe<6;Pe++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let Ne=0;Ne<_.mipmaps.length;Ne++)De($.__webglFramebuffer[Pe][Ne],I,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ne);else De($.__webglFramebuffer[Pe],I,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(_,Be)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){let Pe=I.texture;for(let Ne=0,je=Pe.length;Ne<je;Ne++){let lt=Pe[Ne],de=i.get(lt);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Z(n.TEXTURE_2D,lt,Be),De($.__webglFramebuffer,I,lt,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),y(lt,Be)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?Pe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,ge.__webglTexture),Z(Pe,_,Be),o&&_.mipmaps&&_.mipmaps.length>0)for(let Ne=0;Ne<_.mipmaps.length;Ne++)De($.__webglFramebuffer[Ne],I,_,n.COLOR_ATTACHMENT0,Pe,Ne);else De($.__webglFramebuffer,I,_,n.COLOR_ATTACHMENT0,Pe,0);y(_,Be)&&v(Pe),t.unbindTexture()}I.depthBuffer&&Qe(I)}function un(I){let _=m(I)||o,$=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ge=0,fe=$.length;ge<fe;ge++){let ve=$[ge];if(y(ve,_)){let Be=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Pe=i.get(ve).__webglTexture;t.bindTexture(Be,Pe),v(Be),t.unbindTexture()}}}function Ye(I){if(o&&I.samples>0&&He(I)===!1){let _=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],$=I.width,ge=I.height,fe=n.COLOR_BUFFER_BIT,ve=[],Be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(I),Ne=I.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<_.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let je=0;je<_.length;je++){ve.push(n.COLOR_ATTACHMENT0+je),I.depthBuffer&&ve.push(Be);let lt=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(lt===!1&&(I.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[je]),lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Be])),Ne){let de=i.get(_[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,$,ge,0,0,$,ge,fe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<_.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[je]);let lt=i.get(_[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function at(I){return Math.min(s.maxSamples,I.samples)}function He(I){let _=i.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nn(I){let _=a.render.frame;h.get(I)!==_&&(h.set(I,_),I.update())}function vt(I,_){let $=I.colorSpace,ge=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===ju||$!==Ri&&$!==jn&&(Gt.getTransfer($)===Jt?o===!1?e.has("EXT_sRGB")===!0&&ge===yn?(I.format=ju,I.minFilter=Nt,I.generateMipmaps=!1):_=Ac.sRGBToLinear(_):(ge!==yn||fe!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),_}this.allocateTextureUnit=F,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=se,this.setTexture3D=ne,this.setTextureCube=te,this.rebindTextures=St,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=He}function LM(n,e,t){let i=t.isWebGL2;function s(r,a=jn){let o,l=Gt.getTransfer(a);if(r===tr)return n.UNSIGNED_BYTE;if(r===im)return n.UNSIGNED_SHORT_4_4_4_4;if(r===sm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return n.BYTE;if(r===pv)return n.SHORT;if(r===Vf)return n.UNSIGNED_SHORT;if(r===nm)return n.INT;if(r===bi)return n.UNSIGNED_INT;if(r===ci)return n.FLOAT;if(r===jt)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===mv)return n.ALPHA;if(r===yn)return n.RGBA;if(r===gv)return n.LUMINANCE;if(r===vv)return n.LUMINANCE_ALPHA;if(r===as)return n.DEPTH_COMPONENT;if(r===nr)return n.DEPTH_STENCIL;if(r===ju)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===$o)return n.RED;if(r===rm)return n.RED_INTEGER;if(r===xv)return n.RG;if(r===am)return n.RG_INTEGER;if(r===om)return n.RGBA_INTEGER;if(r===fu||r===du||r===pu||r===mu)if(l===Jt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===fu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===du)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===fu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===du)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yp||r===Mp||r===Ep||r===wp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ep)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sp||r===Tp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Sp)return l===Jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Tp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bp||r===_p||r===Rp||r===Ap||r===Cp||r===Pp||r===Dp||r===Ip||r===Lp||r===Up||r===Np||r===Fp||r===zp||r===Op)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===bp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_p)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ap)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ip)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Up)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Np)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zp)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Op)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gu||r===Bp||r===Hp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===gu)return l===Jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yv||r===kp||r===Gp||r===Vp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===gu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===kp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var hf=class extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Fe=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},UM={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Fe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},uf=class extends ir{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=t.getContextAttributes(),m=null,p=null,y=[],v=[],w=new ce,C=null,A=new Kn;A.layers.enable(1),A.viewport=new on;let D=new Kn;D.layers.enable(2),D.viewport=new on;let N=[A,D],S=new hf;S.layers.enable(1),S.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=y[Z];return ae===void 0&&(ae=new Ro,y[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=y[Z];return ae===void 0&&(ae=new Ro,y[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=y[Z];return ae===void 0&&(ae=new Ro,y[Z]=ae),ae.getHandSpace()};function V(Z){let ae=v.indexOf(Z.inputSource);if(ae===-1)return;let Ee=y[ae];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,c||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<y.length;Z++){let ae=v[Z];ae!==null&&(v[Z]=null,y[Z].disconnect(ae))}T=null,U=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",j),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new $t(d.framebufferWidth,d.framebufferHeight,{format:yn,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ae=null,Ee=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?nr:as,Ee=x.stencil?Cs:bi);let De={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new $t(f.textureWidth,f.textureHeight,{format:yn,type:tr,depthTexture:new ar(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let ke=e.properties.get(p);ke.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(Z){for(let ae=0;ae<Z.removed.length;ae++){let Ee=Z.removed[ae],ye=v.indexOf(Ee);ye>=0&&(v[ye]=null,y[ye].disconnect(Ee))}for(let ae=0;ae<Z.added.length;ae++){let Ee=Z.added[ae],ye=v.indexOf(Ee);if(ye===-1){for(let ke=0;ke<y.length;ke++)if(ke>=v.length){v.push(Ee),ye=ke;break}else if(v[ke]===null){v[ke]=Ee,ye=ke;break}if(ye===-1)break}let De=y[ye];De&&De.connect(Ee)}}let X=new b,q=new b;function se(Z,ae,Ee){X.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(Ee.matrixWorld);let ye=X.distanceTo(q),De=ae.projectionMatrix.elements,ke=Ee.projectionMatrix.elements,rt=De[14]/(De[10]-1),Qe=De[14]/(De[10]+1),St=(De[9]+1)/De[5],Q=(De[9]-1)/De[5],un=(De[8]-1)/De[0],Ye=(ke[8]+1)/ke[0],at=rt*un,He=rt*Ye,nn=ye/(-un+Ye),vt=nn*-un;ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(nn),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let I=rt+nn,_=Qe+nn,$=at-vt,ge=He+(ye-vt),fe=St*Qe/_*I,ve=Q*Qe/_*I;Z.projectionMatrix.makePerspective($,ge,fe,ve,I,_),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function ne(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;S.near=D.near=A.near=Z.near,S.far=D.far=A.far=Z.far,(T!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,U=S.far);let ae=Z.parent,Ee=S.cameras;ne(S,ae);for(let ye=0;ye<Ee.length;ye++)ne(Ee[ye],ae);Ee.length===2?se(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),te(Z,S,ae)};function te(Z,ae,Ee){Ee===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Io*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let re=null;function oe(Z,ae){if(h=ae.getViewerPose(c||a),g=ae,h!==null){let Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ye=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let De=0;De<Ee.length;De++){let ke=Ee[De],rt=null;if(d!==null)rt=d.getViewport(ke);else{let St=u.getViewSubImage(f,ke);rt=St.viewport,De===0&&(e.setRenderTargetTextures(p,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(p))}let Qe=N[De];Qe===void 0&&(Qe=new Kn,Qe.layers.enable(De),Qe.viewport=new on,N[De]=Qe),Qe.matrix.fromArray(ke.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ke.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(rt.x,rt.y,rt.width,rt.height),De===0&&(S.matrix.copy(Qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(Qe)}}for(let Ee=0;Ee<y.length;Ee++){let ye=v[Ee],De=y[Ee];ye!==null&&De!==void 0&&De.update(ye,ae,c||a)}re&&re(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Me=new mm;Me.setAnimationLoop(oe),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}};function NM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FM(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let w=v.program;i.uniformBlockBinding(y,w)}function c(y,v){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(y,C);let A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let v=u();y.__bindingPointIndex=v;let w=n.createBuffer(),C=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],w=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,D=w.length;A<D;A++){let N=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,T=N.length;S<T;S++){let U=N[S];if(d(U,A,S,C)===!0){let V=U.__offset,j=Array.isArray(U.value)?U.value:[U.value],F=0;for(let X=0;X<j.length;X++){let q=j[X],se=x(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,V+F,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,F),F+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,w,C){let A=y.value,D=v+"_"+w;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{let N=C[D];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[D]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){let v=y.uniforms,w=0,C=16;for(let D=0,N=v.length;D<N;D++){let S=Array.isArray(v[D])?v[D]:[v[D]];for(let T=0,U=S.length;T<U;T++){let V=S[T],j=Array.isArray(V.value)?V.value:[V.value];for(let F=0,X=j.length;F<X;F++){let q=j[F],se=x(q),ne=w%C;ne!==0&&C-ne<se.boundary&&(w+=C-ne),V.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=se.storage}}}let A=w%C;return A>0&&(w+=C-A),y.__size=w,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var zo=class{constructor(e={}){let{canvas:t=Vv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;let v=this,w=!1,C=0,A=0,D=null,N=-1,S=null,T=new on,U=new on,V=null,j=new we(0),F=0,X=t.width,q=t.height,se=1,ne=null,te=null,re=new on(0,0,X,q),oe=new on(0,0,X,q),Me=!1,Z=new Fr,ae=!1,Ee=!1,ye=null,De=new qe,ke=new ce,rt=new b,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return D===null?se:1}let Q=i;function un(M,P){for(let L=0;L<M.length;L++){let B=M[L],H=t.getContext(B,P);if(H!==null)return H}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),Q===null){let P=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&P.shift(),Q=un(P,M),Q===null)throw un(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ye,at,He,nn,vt,I,_,$,ge,fe,ve,Be,Pe,Ne,je,lt,de,kt,Tt,$e,Le,Ue,tt,pt;function bt(){Ye=new t3(Q),at=new Qy(Q,Ye,e),Ye.init(at),Ue=new LM(Q,Ye,at),He=new DM(Q,Ye,at),nn=new s3(Q),vt=new yM,I=new IM(Q,Ye,He,vt,at,Ue,nn),_=new Jy(v),$=new e3(v),ge=new f2(Q,at),tt=new Yy(Q,Ye,ge,at),fe=new n3(Q,ge,nn,tt),ve=new l3(Q,fe,ge,nn),Tt=new o3(Q,at,I),lt=new Ky(vt),Be=new xM(v,_,$,Ye,at,tt,lt),Pe=new NM(v,vt),Ne=new EM,je=new RM(Ye,at),kt=new qy(v,_,$,He,ve,f,l),de=new PM(v,ve,at),pt=new FM(Q,nn,at,He),$e=new Zy(Q,Ye,nn,at),Le=new i3(Q,Ye,nn,at),nn.programs=Be.programs,v.capabilities=at,v.extensions=Ye,v.properties=vt,v.renderLists=Ne,v.shadowMap=de,v.state=He,v.info=nn}bt();let yt=new uf(v,Q);this.xr=yt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let M=Ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(X,q,!1))},this.getSize=function(M){return M.set(X,q)},this.setSize=function(M,P,L=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,q=P,t.width=Math.floor(M*se),t.height=Math.floor(P*se),L===!0&&(t.style.width=M+"px",t.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(X*se,q*se).floor()},this.setDrawingBufferSize=function(M,P,L){X=M,q=P,se=L,t.width=Math.floor(M*L),t.height=Math.floor(P*L),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(re)},this.setViewport=function(M,P,L,B){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,P,L,B),He.viewport(T.copy(re).multiplyScalar(se).floor())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,P,L,B){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,P,L,B),He.scissor(U.copy(oe).multiplyScalar(se).floor())},this.getScissorTest=function(){return Me},this.setScissorTest=function(M){He.setScissorTest(Me=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){te=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(M=!0,P=!0,L=!0){let B=0;if(M){let H=!1;if(D!==null){let K=D.texture.format;H=K===om||K===am||K===rm}if(H){let K=D.texture.type,Y=K===tr||K===bi||K===Vf||K===Cs||K===im||K===sm,ee=kt.getClearColor(),he=kt.getClearAlpha(),ue=ee.r,xe=ee.g,Te=ee.b;Y?(d[0]=ue,d[1]=xe,d[2]=Te,d[3]=he,Q.clearBufferuiv(Q.COLOR,0,d)):(g[0]=ue,g[1]=xe,g[2]=Te,g[3]=he,Q.clearBufferiv(Q.COLOR,0,g))}else B|=Q.COLOR_BUFFER_BIT}P&&(B|=Q.DEPTH_BUFFER_BIT),L&&(B|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ne.dispose(),je.dispose(),vt.dispose(),_.dispose(),$.dispose(),ve.dispose(),tt.dispose(),pt.dispose(),Be.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Nn),yt.removeEventListener("sessionend",Yt),ye&&(ye.dispose(),ye=null),Fn.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=nn.autoReset,P=de.enabled,L=de.autoUpdate,B=de.needsUpdate,H=de.type;bt(),nn.autoReset=M,de.enabled=P,de.autoUpdate=L,de.needsUpdate=B,de.type=H}function Ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ce(M){let P=M.target;P.removeEventListener("dispose",Ce),et(P)}function et(M){Ke(M),vt.remove(M)}function Ke(M){let P=vt.get(M).programs;P!==void 0&&(P.forEach(function(L){Be.releaseProgram(L)}),M.isShaderMaterial&&Be.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,L,B,H,K){P===null&&(P=Qe);let Y=H.isMesh&&H.matrixWorld.determinant()<0,ee=E(M,P,L,B,H);He.setMaterial(B,Y);let he=L.index,ue=1;if(B.wireframe===!0){if(he=fe.getWireframeAttribute(L),he===void 0)return;ue=2}let xe=L.drawRange,Te=L.attributes.position,be=xe.start*ue,Ie=(xe.start+xe.count)*ue;K!==null&&(be=Math.max(be,K.start*ue),Ie=Math.min(Ie,(K.start+K.count)*ue)),he!==null?(be=Math.max(be,0),Ie=Math.min(Ie,he.count)):Te!=null&&(be=Math.max(be,0),Ie=Math.min(Ie,Te.count));let Ve=Ie-be;if(Ve<0||Ve===1/0)return;tt.setup(H,B,ee,L,he);let Lt,ot=$e;if(he!==null&&(Lt=ge.get(he),ot=Le,ot.setIndex(Lt)),H.isMesh)B.wireframe===!0?(He.setLineWidth(B.wireframeLinewidth*St()),ot.setMode(Q.LINES)):ot.setMode(Q.TRIANGLES);else if(H.isLine){let Ze=B.linewidth;Ze===void 0&&(Ze=1),He.setLineWidth(Ze*St()),H.isLineSegments?ot.setMode(Q.LINES):H.isLineLoop?ot.setMode(Q.LINE_LOOP):ot.setMode(Q.LINE_STRIP)}else H.isPoints?ot.setMode(Q.POINTS):H.isSprite&&ot.setMode(Q.TRIANGLES);if(H.isBatchedMesh)ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ot.renderInstances(be,Ve,H.count);else if(L.isInstancedBufferGeometry){let Ze=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Wt=Math.min(L.instanceCount,Ze);ot.renderInstances(be,Ve,Wt)}else ot.render(be,Ve)};function Xt(M,P,L){M.transparent===!0&&M.side===Ft&&M.forceSinglePass===!1?(M.side=Mn,M.needsUpdate=!0,Mt(M,P,L),M.side=ls,M.needsUpdate=!0,Mt(M,P,L),M.side=Ft):Mt(M,P,L)}this.compile=function(M,P,L=null){L===null&&(L=M),m=je.get(L),m.init(),y.push(m),L.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),M!==L&&M.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);let B=new Set;return M.traverse(function(H){let K=H.material;if(K)if(Array.isArray(K))for(let Y=0;Y<K.length;Y++){let ee=K[Y];Xt(ee,L,H),B.add(ee)}else Xt(K,L,H),B.add(K)}),y.pop(),m=null,B},this.compileAsync=function(M,P,L=null){let B=this.compile(M,P,L);return new Promise(H=>{function K(){if(B.forEach(function(Y){vt.get(Y).currentProgram.isReady()&&B.delete(Y)}),B.size===0){H(M);return}setTimeout(K,10)}Ye.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let qt=null;function vn(M){qt&&qt(M)}function Nn(){Fn.stop()}function Yt(){Fn.start()}let Fn=new mm;Fn.setAnimationLoop(vn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(M){qt=M,yt.setAnimationLoop(M),M===null?Fn.stop():Fn.start()},yt.addEventListener("sessionstart",Nn),yt.addEventListener("sessionend",Yt),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(P),P=yt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,P,D),m=je.get(M,y.length),m.init(),y.push(m),De.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Z.setFromProjectionMatrix(De),Ee=this.localClippingEnabled,ae=lt.init(this.clippingPlanes,Ee),x=Ne.get(M,p.length),x.init(),p.push(x),Si(M,P,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(ne,te),this.info.render.frame++,ae===!0&&lt.beginShadows();let L=m.state.shadowsArray;if(de.render(L,M,P),ae===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),kt.render(x,M),m.setupLights(v._useLegacyLights),P.isArrayCamera){let B=P.cameras;for(let H=0,K=B.length;H<K;H++){let Y=B[H];_r(x,M,Y,Y.viewport)}}else _r(x,M,P);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,P),tt.resetDefaultState(),N=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Si(M,P,L,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)L=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){B&&rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);let Y=ve.update(M),ee=M.material;ee.visible&&x.push(M,Y,ee,L,rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){let Y=ve.update(M),ee=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),rt.copy(M.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),rt.copy(Y.boundingSphere.center)),rt.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(ee)){let he=Y.groups;for(let ue=0,xe=he.length;ue<xe;ue++){let Te=he[ue],be=ee[Te.materialIndex];be&&be.visible&&x.push(M,Y,be,L,rt.z,Te)}}else ee.visible&&x.push(M,Y,ee,L,rt.z,null)}}let K=M.children;for(let Y=0,ee=K.length;Y<ee;Y++)Si(K[Y],P,L,B)}function _r(M,P,L,B){let H=M.opaque,K=M.transmissive,Y=M.transparent;m.setupLightsView(L),ae===!0&&lt.setGlobalState(v.clippingPlanes,L),K.length>0&&hu(H,K,P,L),B&&He.viewport(T.copy(B)),H.length>0&&is(H,P,L),K.length>0&&is(K,P,L),Y.length>0&&is(Y,P,L),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function hu(M,P,L,B){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;let K=at.isWebGL2;ye===null&&(ye=new $t(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")?jt:tr,minFilter:Ia,samples:K?4:0})),v.getDrawingBufferSize(ke),K?ye.setSize(ke.x,ke.y):ye.setSize(Rc(ke.x),Rc(ke.y));let Y=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(j),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let ee=v.toneMapping;v.toneMapping=er,is(M,L,B),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye);let he=!1;for(let ue=0,xe=P.length;ue<xe;ue++){let Te=P[ue],be=Te.object,Ie=Te.geometry,Ve=Te.material,Lt=Te.group;if(Ve.side===Ft&&be.layers.test(B.layers)){let ot=Ve.side;Ve.side=Mn,Ve.needsUpdate=!0,Ys(be,L,B,Ie,Ve,Lt),Ve.side=ot,Ve.needsUpdate=!0,he=!0}}he===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye)),v.setRenderTarget(Y),v.setClearColor(j,F),v.toneMapping=ee}function is(M,P,L){let B=P.isScene===!0?P.overrideMaterial:null;for(let H=0,K=M.length;H<K;H++){let Y=M[H],ee=Y.object,he=Y.geometry,ue=B===null?Y.material:B,xe=Y.group;ee.layers.test(L.layers)&&Ys(ee,P,L,he,ue,xe)}}function Ys(M,P,L,B,H,K){M.onBeforeRender(v,P,L,B,H,K),M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(v,P,L,B,M,K),H.transparent===!0&&H.side===Ft&&H.forceSinglePass===!1?(H.side=Mn,H.needsUpdate=!0,v.renderBufferDirect(L,P,B,H,M,K),H.side=ls,H.needsUpdate=!0,v.renderBufferDirect(L,P,B,H,M,K),H.side=Ft):v.renderBufferDirect(L,P,B,H,M,K),M.onAfterRender(v,P,L,B,H,K)}function Mt(M,P,L){P.isScene!==!0&&(P=Qe);let B=vt.get(M),H=m.state.lights,K=m.state.shadowsArray,Y=H.state.version,ee=Be.getParameters(M,H.state,K,P,L),he=Be.getProgramCacheKey(ee),ue=B.programs;B.environment=M.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(M.isMeshStandardMaterial?$:_).get(M.envMap||B.environment),ue===void 0&&(M.addEventListener("dispose",Ce),ue=new Map,B.programs=ue);let xe=ue.get(he);if(xe!==void 0){if(B.currentProgram===xe&&B.lightsStateVersion===Y)return Hl(M,ee),xe}else ee.uniforms=Be.getUniforms(M),M.onBuild(L,ee,v),M.onBeforeCompile(ee,v),xe=Be.acquireProgram(ee,he),ue.set(he,xe),B.uniforms=ee.uniforms;let Te=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=lt.uniform),Hl(M,ee),B.needsLights=k(M),B.lightsStateVersion=Y,B.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.directionalShadowMap.value=H.state.directionalShadowMap,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotShadowMap.value=H.state.spotShadowMap,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMap.value=H.state.pointShadowMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),B.currentProgram=xe,B.uniformsList=null,xe}function fo(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=Ca.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Hl(M,P){let L=vt.get(M);L.outputColorSpace=P.outputColorSpace,L.batching=P.batching,L.instancing=P.instancing,L.instancingColor=P.instancingColor,L.skinning=P.skinning,L.morphTargets=P.morphTargets,L.morphNormals=P.morphNormals,L.morphColors=P.morphColors,L.morphTargetsCount=P.morphTargetsCount,L.numClippingPlanes=P.numClippingPlanes,L.numIntersection=P.numClipIntersection,L.vertexAlphas=P.vertexAlphas,L.vertexTangents=P.vertexTangents,L.toneMapping=P.toneMapping}function E(M,P,L,B,H){P.isScene!==!0&&(P=Qe),I.resetTextureUnits();let K=P.fog,Y=B.isMeshStandardMaterial?P.environment:null,ee=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ri,he=(B.isMeshStandardMaterial?$:_).get(B.envMap||Y),ue=B.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,xe=!!L.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!L.morphAttributes.position,be=!!L.morphAttributes.normal,Ie=!!L.morphAttributes.color,Ve=er;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ve=v.toneMapping);let Lt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ot=Lt!==void 0?Lt.length:0,Ze=vt.get(B),Wt=m.state.lights;if(ae===!0&&(Ee===!0||M!==S)){let cn=M===S&&B.id===N;lt.setState(B,M,cn)}let We=!1;B.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Wt.state.version||Ze.outputColorSpace!==ee||H.isBatchedMesh&&Ze.batching===!1||!H.isBatchedMesh&&Ze.batching===!0||H.isInstancedMesh&&Ze.instancing===!1||!H.isInstancedMesh&&Ze.instancing===!0||H.isSkinnedMesh&&Ze.skinning===!1||!H.isSkinnedMesh&&Ze.skinning===!0||H.isInstancedMesh&&Ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ze.instancingColor===!1&&H.instanceColor!==null||Ze.envMap!==he||B.fog===!0&&Ze.fog!==K||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==lt.numPlanes||Ze.numIntersection!==lt.numIntersection)||Ze.vertexAlphas!==ue||Ze.vertexTangents!==xe||Ze.morphTargets!==Te||Ze.morphNormals!==be||Ze.morphColors!==Ie||Ze.toneMapping!==Ve||at.isWebGL2===!0&&Ze.morphTargetsCount!==ot)&&(We=!0):(We=!0,Ze.__version=B.version);let Kt=Ze.currentProgram;We===!0&&(Kt=Mt(B,P,H));let ni=!1,rn=!1,It=!1,ht=Kt.getUniforms(),zn=Ze.uniforms;if(He.useProgram(Kt.program)&&(ni=!0,rn=!0,It=!0),B.id!==N&&(N=B.id,rn=!0),ni||S!==M){ht.setValue(Q,"projectionMatrix",M.projectionMatrix),ht.setValue(Q,"viewMatrix",M.matrixWorldInverse);let cn=ht.map.cameraPosition;cn!==void 0&&cn.setValue(Q,rt.setFromMatrixPosition(M.matrixWorld)),at.logarithmicDepthBuffer&&ht.setValue(Q,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(Q,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,rn=!0,It=!0)}if(H.isSkinnedMesh){ht.setOptional(Q,H,"bindMatrix"),ht.setOptional(Q,H,"bindMatrixInverse");let cn=H.skeleton;cn&&(at.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),ht.setValue(Q,"boneTexture",cn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(ht.setOptional(Q,H,"batchingTexture"),ht.setValue(Q,"batchingTexture",H._matricesTexture,I));let ys=L.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&at.isWebGL2===!0)&&Tt.update(H,L,Kt),(rn||Ze.receiveShadow!==H.receiveShadow)&&(Ze.receiveShadow=H.receiveShadow,ht.setValue(Q,"receiveShadow",H.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(zn.envMap.value=he,zn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),rn&&(ht.setValue(Q,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&R(zn,It),K&&B.fog===!0&&Pe.refreshFogUniforms(zn,K),Pe.refreshMaterialUniforms(zn,B,se,q,ye),Ca.upload(Q,fo(Ze),zn,I)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ca.upload(Q,fo(Ze),zn,I),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(Q,"center",H.center),ht.setValue(Q,"modelViewMatrix",H.modelViewMatrix),ht.setValue(Q,"normalMatrix",H.normalMatrix),ht.setValue(Q,"modelMatrix",H.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let cn=B.uniformsGroups;for(let Zs=0,zg=cn.length;Zs<zg;Zs++)if(at.isWebGL2){let fp=cn[Zs];pt.update(fp,Kt),pt.bind(fp,Kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kt}function R(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function k(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,P,L){vt.get(M.texture).__webglTexture=P,vt.get(M.depthTexture).__webglTexture=L;let B=vt.get(M);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=L===void 0,B.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,P){let L=vt.get(M);L.__webglFramebuffer=P,L.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,L=0){D=M,C=P,A=L;let B=!0,H=null,K=!1,Y=!1;if(M){let he=vt.get(M);he.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(Q.FRAMEBUFFER,null),B=!1):he.__webglFramebuffer===void 0?I.setupRenderTarget(M):he.__hasExternalTextures&&I.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);let ue=M.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Y=!0);let xe=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(xe[P])?H=xe[P][L]:H=xe[P],K=!0):at.isWebGL2&&M.samples>0&&I.useMultisampledRTT(M)===!1?H=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(xe)?H=xe[L]:H=xe,T.copy(M.viewport),U.copy(M.scissor),V=M.scissorTest}else T.copy(re).multiplyScalar(se).floor(),U.copy(oe).multiplyScalar(se).floor(),V=Me;if(He.bindFramebuffer(Q.FRAMEBUFFER,H)&&at.drawBuffers&&B&&He.drawBuffers(M,H),He.viewport(T),He.scissor(U),He.setScissorTest(V),K){let he=vt.get(M.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,L)}else if(Y){let he=vt.get(M.texture),ue=P||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,he.__webglTexture,L||0,ue)}N=-1},this.readRenderTargetPixels=function(M,P,L,B,H,K,Y){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Y!==void 0&&(ee=ee[Y]),ee){He.bindFramebuffer(Q.FRAMEBUFFER,ee);try{let he=M.texture,ue=he.format,xe=he.type;if(ue!==yn&&Ue.convert(ue)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Te=xe===jt&&(Ye.has("EXT_color_buffer_half_float")||at.isWebGL2&&Ye.has("EXT_color_buffer_float"));if(xe!==tr&&Ue.convert(xe)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(xe===ci&&(at.isWebGL2||Ye.has("OES_texture_float")||Ye.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&L>=0&&L<=M.height-H&&Q.readPixels(P,L,B,H,Ue.convert(ue),Ue.convert(xe),K)}finally{let he=D!==null?vt.get(D).__webglFramebuffer:null;He.bindFramebuffer(Q.FRAMEBUFFER,he)}}},this.copyFramebufferToTexture=function(M,P,L=0){let B=Math.pow(2,-L),H=Math.floor(P.image.width*B),K=Math.floor(P.image.height*B);I.setTexture2D(P,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,L,0,0,M.x,M.y,H,K),He.unbindTexture()},this.copyTextureToTexture=function(M,P,L,B=0){let H=P.image.width,K=P.image.height,Y=Ue.convert(L.format),ee=Ue.convert(L.type);I.setTexture2D(L,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,L.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,L.unpackAlignment),P.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,B,M.x,M.y,H,K,Y,ee,P.image.data):P.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,B,M.x,M.y,P.mipmaps[0].width,P.mipmaps[0].height,Y,P.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,B,M.x,M.y,Y,ee,P.image),B===0&&L.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(M,P,L,B,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let K=M.max.x-M.min.x+1,Y=M.max.y-M.min.y+1,ee=M.max.z-M.min.z+1,he=Ue.convert(B.format),ue=Ue.convert(B.type),xe;if(B.isData3DTexture)I.setTexture3D(B,0),xe=Q.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)I.setTexture2DArray(B,0),xe=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,B.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,B.unpackAlignment);let Te=Q.getParameter(Q.UNPACK_ROW_LENGTH),be=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ie=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Ve=Q.getParameter(Q.UNPACK_SKIP_ROWS),Lt=Q.getParameter(Q.UNPACK_SKIP_IMAGES),ot=L.isCompressedTexture?L.mipmaps[H]:L.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,ot.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ot.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,M.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,M.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,M.min.z),L.isDataTexture||L.isData3DTexture?Q.texSubImage3D(xe,H,P.x,P.y,P.z,K,Y,ee,he,ue,ot.data):L.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(xe,H,P.x,P.y,P.z,K,Y,ee,he,ot.data)):Q.texSubImage3D(xe,H,P.x,P.y,P.z,K,Y,ee,he,ue,ot),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Te),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,be),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ie),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Ve),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Lt),H===0&&B.generateMipmaps&&Q.generateMipmap(xe),He.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),He.unbindTexture()},this.resetState=function(){C=0,A=0,D=null,He.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Wf?"display-p3":"srgb",t.unpackColorSpace=Gt.workingColorSpace===eh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tn?Nr:cm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?tn:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ff=class extends zo{};ff.prototype.isWebGL1Renderer=!0;var Fc=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oo=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},df=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ju,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=os()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ii=new b,zc=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rs(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wi=class extends cs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ya,xo=new b,Ma=new b,Ea=new b,wa=new ce,yo=new ce,Em=new qe,cc=new b,Mo=new b,hc=new b,L0=new ce,Hu=new ce,U0=new ce,hs=class extends Pn{constructor(e=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",ya===void 0){ya=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new df(t,5);ya.setIndex([0,1,2,0,2,3]),ya.setAttribute("position",new zc(i,3,0,!1)),ya.setAttribute("uv",new zc(i,2,3,!1))}this.geometry=ya,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ma.setFromMatrixScale(this.matrixWorld),Em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ma.multiplyScalar(-Ea.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;uc(cc.set(-.5,-.5,0),Ea,a,Ma,s,r),uc(Mo.set(.5,-.5,0),Ea,a,Ma,s,r),uc(hc.set(.5,.5,0),Ea,a,Ma,s,r),L0.set(0,0),Hu.set(1,0),U0.set(1,1);let o=e.ray.intersectTriangle(cc,Mo,hc,!1,xo);if(o===null&&(uc(Mo.set(-.5,.5,0),Ea,a,Ma,s,r),Hu.set(0,1),o=e.ray.intersectTriangle(cc,hc,Mo,!1,xo),o===null))return;let l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||t.push({distance:l,point:xo.clone(),uv:Ur.getInterpolation(xo,cc,Mo,hc,L0,Hu,U0,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function uc(n,e,t,i,s,r){wa.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(yo.x=r*wa.x-s*wa.y,yo.y=s*wa.x+r*wa.y):yo.copy(wa),n.copy(e),n.x+=yo.x,n.y+=yo.y,n.applyMatrix4(Em)}var Bo=class extends hi{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ut,h=Ut,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oc=class extends zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sa=new qe,N0=new qe,fc=[],F0=new Ps,zM=new qe,Eo=new W,wo=new Vi,or=class extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ps),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sa),F0.copy(e.boundingBox).applyMatrix4(Sa),this.boundingBox.union(F0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sa),wo.copy(e.boundingSphere).applyMatrix4(Sa),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sa),N0.multiplyMatrices(i,Sa),Eo.matrixWorld=N0,Eo.raycast(e,fc);for(let a=0,o=fc.length;a<o;a++){let l=fc[a];l.instanceId=r,l.object=this,t.push(l)}fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var lr=class extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},z0=new b,O0=new b,B0=new qe,ku=new La,dc=new Vi,Ho=class extends Pn{constructor(e=new Pt,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)z0.fromBufferAttribute(t,s-1),O0.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=z0.distanceTo(O0);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(s),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;B0.copy(s).invert(),ku.copy(e.ray).applyMatrix4(B0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,u=new b,f=new b,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=p,w=y-1;v<w;v+=d){let C=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,A),ku.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=p,w=y-1;v<w;v+=d){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),ku.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},H0=new b,k0=new b,Fa=class extends Ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)H0.fromBufferAttribute(t,s),k0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+H0.distanceTo(k0);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var za=class extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},G0=new qe,pf=new La,pc=new Vi,mc=new b,Or=class extends Pn{constructor(e=new Pt,t=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;G0.copy(s).invert(),pf.copy(e.ray).applyMatrix4(G0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);mc.fromBufferAttribute(u,m),V0(mc,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)mc.fromBufferAttribute(u,g),V0(mc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function V0(n,e,t,i,s,r,a){let o=pf.distanceSqToPoint(n);if(o<t){let l=new b;pf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var ui=class extends hi{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,s=[],r=[],a=[],o=new b,l=new qe;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new b)}r[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Tn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Tn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ko=class extends Ai{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new ce,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mf=class extends ko{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yf(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var gc=new b,Gu=new Yf,Vu=new Yf,Wu=new Yf,Oa=class extends Ai{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new b){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gc.subVectors(s[0],s[1]).add(s[0]),c=gc);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Gu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Vu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Wu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Gu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Vu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Wu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Gu.calc(l),Vu.calc(l),Wu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function W0(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function OM(n,e){let t=1-n;return t*t*e}function BM(n,e){return 2*(1-n)*n*e}function HM(n,e){return n*n*e}function Ao(n,e,t,i){return OM(n,e)+BM(n,t)+HM(n,i)}function kM(n,e){let t=1-n;return t*t*t*e}function GM(n,e){let t=1-n;return 3*t*t*n*e}function VM(n,e){return 3*(1-n)*n*n*e}function WM(n,e){return n*n*n*e}function Co(n,e,t,i,s){return kM(n,e)+GM(n,t)+VM(n,i)+WM(n,s)}var Bc=class extends Ai{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Co(e,s.x,r.x,a.x,o.x),Co(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gf=class extends Ai{constructor(e=new b,t=new b,i=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new b){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Co(e,s.x,r.x,a.x,o.x),Co(e,s.y,r.y,a.y,o.y),Co(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hc=class extends Ai{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vf=class extends Ai{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Ai{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ao(e,s.x,r.x,a.x),Ao(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends Ai{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ao(e,s.x,r.x,a.x),Ao(e,s.y,r.y,a.y),Ao(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(W0(o,l.x,c.x,h.x,u.x),W0(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},xf=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:Oa,CubicBezierCurve:Bc,CubicBezierCurve3:gf,EllipseCurve:ko,LineCurve:Hc,LineCurve3:vf,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Gc,SplineCurve:Vc}),yf=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new xf[s.type]().fromJSON(s))}return this}},Wc=class extends yf{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Hc(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new kc(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Bc(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Vc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ko(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Go=class n extends Pt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Tn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new b,f=new ce,d=new b,g=new b,x=new b,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let v=i+y*h*s,w=Math.sin(v),C=Math.cos(v);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*w,u.y=e[A].y,u.z=e[A].x*C,a.push(u.x,u.y,u.z),f.x=y/t,f.y=A/(e.length-1),o.push(f.x,f.y);let D=l[3*A+0]*w,N=l[3*A+1],S=l[3*A+0]*C;c.push(D,N,S)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let w=v+y*e.length,C=w,A=w+e.length,D=w+e.length+1,N=w+1;r.push(C,A,N),r.push(D,N,A)}this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var us=class n extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new b,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nt=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function y(){let w=new b,C=new b,A=0,D=(t-e)/i;for(let N=0;N<=r;N++){let S=[],T=N/r,U=T*(t-e)+e;for(let V=0;V<=s;V++){let j=V/s,F=j*l+o,X=Math.sin(F),q=Math.cos(F);C.x=U*X,C.y=-T*i+m,C.z=U*q,u.push(C.x,C.y,C.z),w.set(X,D,q).normalize(),f.push(w.x,w.y,w.z),d.push(j,1-T),S.push(g++)}x.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){let T=x[S][N],U=x[S+1][N],V=x[S+1][N+1],j=x[S][N+1];h.push(T,U,j),h.push(U,V,j),A+=6}c.addGroup(p,A,0),p+=A}function v(w){let C=g,A=new ce,D=new b,N=0,S=w===!0?e:t,T=w===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;let U=g;for(let V=0;V<=s;V++){let F=V/s*l+o,X=Math.cos(F),q=Math.sin(F);D.x=S*q,D.y=m*T,D.z=S*X,u.push(D.x,D.y,D.z),f.push(0,T,0),A.x=X*.5+.5,A.y=q*.5*T+.5,d.push(A.x,A.y),g++}for(let V=0;V<s;V++){let j=C+V,F=U+V;w===!0?h.push(F,F+1,j):h.push(F+1,F,j),N+=3}c.addGroup(p,N,w===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xi=class n extends nt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mf=class n extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new b,w=new b,C=new b;for(let A=0;A<t.length;A+=3)d(t[A+0],v),d(t[A+1],w),d(t[A+2],C),l(v,w,C,y)}function l(y,v,w,C){let A=C+1,D=[];for(let N=0;N<=A;N++){D[N]=[];let S=y.clone().lerp(w,N/A),T=v.clone().lerp(w,N/A),U=A-N;for(let V=0;V<=U;V++)V===0&&N===A?D[N][V]=S:D[N][V]=S.clone().lerp(T,V/U)}for(let N=0;N<A;N++)for(let S=0;S<2*(A-N)-1;S++){let T=Math.floor(S/2);S%2===0?(f(D[N][T+1]),f(D[N+1][T]),f(D[N][T])):(f(D[N][T+1]),f(D[N+1][T+1]),f(D[N+1][T]))}}function c(y){let v=new b;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(y),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let y=new b;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let w=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;a.push(w,1-C)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],w=a[y+2],C=a[y+4],A=Math.max(v,w,C),D=Math.min(v,w,C);A>.9&&D<.1&&(v<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let w=y*3;v.x=e[w+0],v.y=e[w+1],v.z=e[w+2]}function g(){let y=new b,v=new b,w=new b,C=new b,A=new ce,D=new ce,N=new ce;for(let S=0,T=0;S<r.length;S+=9,T+=6){y.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),w.set(r[S+6],r[S+7],r[S+8]),A.set(a[T+0],a[T+1]),D.set(a[T+2],a[T+3]),N.set(a[T+4],a[T+5]),C.copy(y).add(v).add(w).divideScalar(3);let U=m(C);x(A,T+0,y,U),x(D,T+2,v,U),x(N,T+4,w,U)}}function x(y,v,w,C){C<0&&y.x===1&&(a[v]=y.x-1),w.x===0&&w.z===0&&(a[v]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Vo=class extends Wc{constructor(e){super(e),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Wc().fromJSON(s))}return this}},XM={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wm(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=KM(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Wo(r,a,t,o,l,d,0),a}};function wm(n,e,t,i,s){let r,a;if(s===oE(n,e,t,i)>0)for(r=e;r<t;r+=i)a=X0(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=X0(r,n[r],n[r+1],a);return a&&nh(a,a.next)&&(qo(a),a=a.next),a}function Br(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nh(t,t.next)||hn(t.prev,t,t.next)===0)){if(qo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Wo(n,e,t,i,s,r,a){if(!n)return;!a&&r&&tE(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?YM(n,i,s,r):qM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),qo(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ZM(Br(n),e,t),Wo(n,e,t,i,s,r,2)):a===2&&QM(n,e,t,i,s,r):Wo(Br(n),e,t,i,s,r,1);break}}}function qM(n){let e=n.prev,t=n,i=n.next;if(hn(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&_a(s,o,r,l,a,c,g.x,g.y)&&hn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function YM(n,e,t,i){let s=n.prev,r=n,a=n.next;if(hn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ef(d,g,e,t,i),y=Ef(x,m,e,t,i),v=n.prevZ,w=n.nextZ;for(;v&&v.z>=p&&w&&w.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_a(o,h,l,u,c,f,v.x,v.y)&&hn(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&_a(o,h,l,u,c,f,w.x,w.y)&&hn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_a(o,h,l,u,c,f,v.x,v.y)&&hn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=y;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&_a(o,h,l,u,c,f,w.x,w.y)&&hn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function ZM(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!nh(s,r)&&Sm(s,i,i.next,r)&&Xo(s,r)&&Xo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),qo(i),qo(i.next),i=n=r),i=i.next}while(i!==n);return Br(i)}function QM(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sE(a,o)){let l=Tm(a,o);a=Br(a,a.next),l=Br(l,l.next),Wo(a,e,t,i,s,r,0),Wo(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function KM(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=wm(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(iE(c));for(s.sort(JM),r=0;r<s.length;r++)t=jM(s[r],t);return t}function JM(n,e){return n.x-e.x}function jM(n,e){let t=$M(n,e);if(!t)return e;let i=Tm(t,n);return Br(i,i.next),Br(t,t.next)}function $M(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&_a(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Xo(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&eE(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function eE(n,e){return hn(n.prev,n,e.prev)<0&&hn(e.next,n,n.next)<0}function tE(n,e,t,i){let s=n;do s.z===0&&(s.z=Ef(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,nE(s)}function nE(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Ef(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function iE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _a(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function sE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rE(n,e)&&(Xo(n,e)&&Xo(e,n)&&aE(n,e)&&(hn(n.prev,n,e.prev)||hn(n,e.prev,e))||nh(n,e)&&hn(n.prev,n,n.next)>0&&hn(e.prev,e,e.next)>0)}function hn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nh(n,e){return n.x===e.x&&n.y===e.y}function Sm(n,e,t,i){let s=xc(hn(n,e,t)),r=xc(hn(n,e,i)),a=xc(hn(t,i,n)),o=xc(hn(t,i,e));return!!(s!==r&&a!==o||s===0&&vc(n,t,e)||r===0&&vc(n,i,e)||a===0&&vc(t,n,i)||o===0&&vc(t,e,i))}function vc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xc(n){return n>0?1:n<0?-1:0}function rE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Xo(n,e){return hn(n.prev,n,n.next)<0?hn(n,e,n.next)>=0&&hn(n,n.prev,e)>=0:hn(n,e,n.prev)<0||hn(n,n.next,e)<0}function aE(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Tm(n,e){let t=new wf(n.i,n.x,n.y),i=new wf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function X0(n,e,t,i){let s=new wf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function qo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oE(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Po=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];q0(e),Y0(i,e);let a=e.length;t.forEach(q0);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Y0(i,t[l]);let o=XM.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function q0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Y0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ci=class n extends Mf{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Yo=class n extends Pt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new b,g=new ce;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,v=y,w=y+i+1,C=y+i+2,A=y+1;o.push(v,w,A),o.push(w,C,A)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Xc=class n extends Pt{constructor(e=new Vo([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Po.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Po.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=Po.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+u,w=y[1]+u,C=y[2]+u;i.push(v,w,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return lE(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function lE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Xe=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new b,f=new b,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,w=0;p===0&&a===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+w,1-v),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let v=h[p][y+1],w=h[p][y],C=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(v,w,A),(p!==i-1||l<Math.PI)&&d.push(w,C,A)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cr=class n extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new b,u=new b,f=new b;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zo=class n extends Pt{constructor(e=new Gc(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new ce,h=new b,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),p()}function m(v){h=e.getPointAt(v/t,h);let w=a.normals[v],C=a.binormals[v];for(let A=0;A<=s;A++){let D=A/s*Math.PI*2,N=Math.sin(D),S=-Math.cos(D);l.x=S*w.x+N*C.x,l.y=S*w.y+N*C.y,l.z=S*w.z+N*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let w=1;w<=s;w++){let C=(s+1)*(v-1)+(w-1),A=(s+1)*v+(w-1),D=(s+1)*v+w,N=(s+1)*(v-1)+w;g.push(C,A,N),g.push(A,D,N)}}function y(){for(let v=0;v<=t;v++)for(let w=0;w<=s;w++)c.x=v/t,c.y=w/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new xf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var qc=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},At=class extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function yc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ba=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sf=class extends Ba{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wp,endingEnd:Wp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xp:r=e,o=2*t-i;break;case qp:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xp:a=e,l=2*i-t;break;case qp:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,w=d*m-d*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+y*a[c+C]+v*a[l+C]+w*a[u+C];return r}},Tf=class extends Ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},bf=class extends Ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ec:t=this.InterpolantFactoryMethodDiscrete;break;case wc:t=this.InterpolantFactoryMethodLinear;break;case vu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ec;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cE(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vu,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=wc;var Hr=class extends qi{};Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Ec;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends qi{};_f.prototype.ValueTypeName="color";var Rf=class extends qi{};Rf.prototype.ValueTypeName="number";var Af=class extends Ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qo=class extends qi{InterpolantFactoryMethodLinear(e){return new Af(this.times,this.values,this.getValueSize(),e)}};Qo.prototype.ValueTypeName="quaternion";Qo.prototype.DefaultInterpolation=wc;Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends qi{};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Ec;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cf=class extends qi{};Cf.prototype.ValueTypeName="vector";var Yc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Pf=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},hE=new Pf,Gr=class{constructor(e){this.manager=e!==void 0?e:hE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs={},Df=class extends Error{constructor(e,t){super(e),this.response=t}},If=class extends Gr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Yc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bs[e]!==void 0){bs[e].push({onLoad:t,onProgress:i,onError:s});return}bs[e]=[],bs[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=bs[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:w})=>{if(v)p.close();else{x+=w.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,D=h.length;A<D;A++){let N=h[A];N.onProgress&&N.onProgress(C)}p.enqueue(w),y()}})}}});return new Response(m)}else throw new Df(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yc.add(e,c);let h=bs[e];delete bs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=bs[e];if(h===void 0)throw this.manager.itemError(e),c;delete bs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Lf=class extends Gr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Yc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Lo("img");function l(){h(),Yc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Zc=class extends Gr{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Bo,o=new If(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Jn,a.wrapT=c.wrapT!==void 0?c.wrapT:Jn,a.magFilter=c.magFilter!==void 0?c.magFilter:Nt,a.minFilter=c.minFilter!==void 0?c.minFilter:Nt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ia),c.mipmapCount===1&&(a.minFilter=Nt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}},Ko=class extends Gr{constructor(e){super(e)}load(e,t,i,s){let r=new hi,a=new Lf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Jo=class extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qc=class extends Jo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xu=new qe,Z0=new b,Q0=new b,Kc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(Z0),Q0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Q0),t.updateMatrixWorld(),Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var K0=new qe,So=new b,qu=new b,Uf=class extends Kc{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new on(2,1,1,1),new on(0,1,1,1),new on(3,1,1,1),new on(1,1,1,1),new on(3,0,1,1),new on(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),i.position.copy(So),qu.copy(i.position),qu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qu),i.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),K0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K0)}},Ha=class extends Jo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nf=class extends Kc{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jc=class extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Nf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=J0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=J0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function J0(){return(typeof performance>"u"?Date:performance).now()}var Zf="\\[\\]\\.:\\/",uE=new RegExp("["+Zf+"]","g"),Qf="[^"+Zf+"]",fE="[^"+Zf.replace("\\.","")+"]",dE=/((?:WC+[\/:])*)/.source.replace("WC",Qf),pE=/(WCOD+)?/.source.replace("WCOD",fE),mE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qf),gE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qf),vE=new RegExp("^"+dE+pE+mE+gE+"$"),xE=["material","materials","bones","map"],Ff=class{constructor(e,t,i){let s=i||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},an=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uE,"")}static parseTrackName(e){let t=vE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=Ff;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q4=new Float32Array(1);var jc=class{constructor(e,t,i=0,s=1/0){this.ray=new La(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return zf(e,this,i,t),i.sort(j0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zf(e[s],this,i,t);return i.sort(j0),i}};function j0(n,e){return n.distance-e.distance}function zf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)zf(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ih={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ME=new rr(-1,1,1,-1,0,1),Kf=class extends Pt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},EE=new Kf,fs=class{constructor(e){this._mesh=new W(EE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ME)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Va=class extends Hn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pi.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var nl=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sh=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Va(ih),this.copyPass.material.blending=_i,this.clock=new ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nl!==void 0&&(a instanceof nl?i=!0:a instanceof sh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ah=class extends Hn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var bm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Wa=class n extends Hn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,a,{type:jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new $t(r,a,{type:jt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new $t(r,a,{type:jt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=bm;this.highPassUniforms=Pi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ih;this.copyUniforms=Pi.clone(h.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new Dn,this.fsQuad=new fs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Wa.BlurDirectionX=new ce(1,0);Wa.BlurDirectionY=new ce(0,1);var _m={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var oh=class extends Hn{constructor(){super();let e=_m;this.uniforms=Pi.clone(e.uniforms),this.material=new qc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new fs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gf&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Rm={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var lh=class extends Hn{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new $t(1,1,{minFilter:Ut,magFilter:Ut,type:jt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new zr,this.materialDepth.depthPacking=el,this.materialDepth.blending=_i;let o=Rm,l=Pi.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=t.aspect,l.aperture.value=r,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new Ct({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new fs(this.materialBokeh),this._oldClearColor=new we}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var il=class n extends W{constructor(){let e=n.SkyShader,t=new Ct({name:e.name,uniforms:Pi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Mn,depthWrite:!1});super(new Vt(1,1,1),t),this.isSky=!0}};il.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new b},up:{value:new b(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Am=function(n){return URL.createObjectURL(new Blob([n],{type:"text/javascript"}))},wE=function(n){return new Worker(n)};try{URL.revokeObjectURL(Am(""))}catch{Am=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},wE=function(e){return new Worker(e,{type:"module"})}}var Di=Uint8Array,hr=Uint16Array,$f=Uint32Array,Cm=new Di([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pm=new Di([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),SE=new Di([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Dm=function(n,e){for(var t=new hr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new $f(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return[t,s]},Im=Dm(Cm,2),Lm=Im[0],TE=Im[1];Lm[28]=258,TE[258]=28;var Um=Dm(Pm,0),bE=Um[0],CS=Um[1],ed=new hr(32768);for(Ot=0;Ot<32768;++Ot)Ds=(Ot&43690)>>>1|(Ot&21845)<<1,Ds=(Ds&52428)>>>2|(Ds&13107)<<2,Ds=(Ds&61680)>>>4|(Ds&3855)<<4,ed[Ot]=((Ds&65280)>>>8|(Ds&255)<<8)>>>1;var Ds,Ot,sl=(function(n,e,t){for(var i=n.length,s=0,r=new hr(e);s<i;++s)++r[n[s]-1];var a=new hr(e);for(s=0;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new hr(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=e-n[s],u=a[n[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[ed[u]>>>l]=c}else for(o=new hr(i),s=0;s<i;++s)n[s]&&(o[s]=ed[a[n[s]-1]++]>>>15-n[s]);return o}),rl=new Di(288);for(Ot=0;Ot<144;++Ot)rl[Ot]=8;var Ot;for(Ot=144;Ot<256;++Ot)rl[Ot]=9;var Ot;for(Ot=256;Ot<280;++Ot)rl[Ot]=7;var Ot;for(Ot=280;Ot<288;++Ot)rl[Ot]=8;var Ot,Nm=new Di(32);for(Ot=0;Ot<32;++Ot)Nm[Ot]=5;var Ot;var _E=sl(rl,9,1);var RE=sl(Nm,5,1),Jf=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Yi=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},jf=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},AE=function(n){return(n/8|0)+(n&7&&1)},CE=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var i=new(n instanceof hr?hr:n instanceof $f?$f:Di)(t-e);return i.set(n.subarray(e,t)),i},PE=function(n,e,t){var i=n.length;if(!i||t&&!t.l&&i<5)return e||new Di(0);var s=!e||t,r=!t||t.i;t||(t={}),e||(e=new Di(i*3));var a=function(ye){var De=e.length;if(ye>De){var ke=new Di(Math.max(De*2,ye));ke.set(e),e=ke}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,f=t.m,d=t.n,g=i*8;do{if(!h){t.f=o=Yi(n,l,1);var x=Yi(n,l+1,3);if(l+=3,x)if(x==1)h=_E,u=RE,f=9,d=5;else if(x==2){var v=Yi(n,l,31)+257,w=Yi(n,l+10,15)+4,C=v+Yi(n,l+5,31)+1;l+=14;for(var A=new Di(C),D=new Di(19),N=0;N<w;++N)D[SE[N]]=Yi(n,l+N*3,7);l+=w*3;for(var S=Jf(D),T=(1<<S)-1,U=sl(D,S,1),N=0;N<C;){var V=U[Yi(n,l,T)];l+=V&15;var m=V>>>4;if(m<16)A[N++]=m;else{var j=0,F=0;for(m==16?(F=3+Yi(n,l,3),l+=2,j=A[N-1]):m==17?(F=3+Yi(n,l,7),l+=3):m==18&&(F=11+Yi(n,l,127),l+=7);F--;)A[N++]=j}}var X=A.subarray(0,v),q=A.subarray(v);f=Jf(X),d=Jf(q),h=sl(X,f,1),u=sl(q,d,1)}else throw"invalid block type";else{var m=AE(l)+4,p=n[m-4]|n[m-3]<<8,y=m+p;if(y>i){if(r)throw"unexpected EOF";break}s&&a(c+p),e.set(n.subarray(m,y),c),t.b=c+=p,t.p=l=y*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}s&&a(c+131072);for(var se=(1<<f)-1,ne=(1<<d)-1,te=l;;te=l){var j=h[jf(n,l)&se],re=j>>>4;if(l+=j&15,l>g){if(r)throw"unexpected EOF";break}if(!j)throw"invalid length/literal";if(re<256)e[c++]=re;else if(re==256){te=l,h=null;break}else{var oe=re-254;if(re>264){var N=re-257,Me=Cm[N];oe=Yi(n,l,(1<<Me)-1)+Lm[N],l+=Me}var Z=u[jf(n,l)&ne],ae=Z>>>4;if(!Z)throw"invalid distance";l+=Z&15;var q=bE[ae];if(ae>3){var Me=Pm[ae];q+=jf(n,l)&(1<<Me)-1,l+=Me}if(l>g){if(r)throw"unexpected EOF";break}s&&a(c+131072);for(var Ee=c+oe;c<Ee;c+=4)e[c]=e[c-q],e[c+1]=e[c+1-q],e[c+2]=e[c+2-q],e[c+3]=e[c+3-q];c=Ee}}t.l=h,t.p=te,t.b=c,h&&(o=1,t.m=f,t.d=u,t.n=d)}while(!o);return c==e.length?e:CE(e,0,c)};var DE=new Di(0);var IE=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function al(n,e){return PE((IE(n),n.subarray(2,-4)),e)}var LE=typeof TextDecoder<"u"&&new TextDecoder,UE=0;try{LE.decode(DE,{stream:!0}),UE=1}catch{}var ch=class extends Zc{constructor(e){super(e),this.type=jt}parse(e){let S=Math.pow(2.7182818,2.2);function T(E,R){let k=0;for(let P=0;P<65536;++P)(P==0||E[P>>3]&1<<(P&7))&&(R[k++]=P);let M=k-1;for(;k<65536;)R[k++]=0;return M}function U(E){for(let R=0;R<16384;R++)E[R]={},E[R].len=0,E[R].lit=0,E[R].p=null}let V={l:0,c:0,lc:0};function j(E,R,k,M,P){for(;k<E;)R=R<<8|Ue(M,P),k+=8;k-=E,V.l=R>>k&(1<<E)-1,V.c=R,V.lc=k}let F=new Array(59);function X(E){for(let k=0;k<=58;++k)F[k]=0;for(let k=0;k<65537;++k)F[E[k]]+=1;let R=0;for(let k=58;k>0;--k){let M=R+F[k]>>1;F[k]=R,R=M}for(let k=0;k<65537;++k){let M=E[k];M>0&&(E[k]=M|F[M]++<<6)}}function q(E,R,k,M,P,L){let B=R,H=0,K=0;for(;M<=P;M++){if(B.value-R.value>k)return!1;j(6,H,K,E,B);let Y=V.l;if(H=V.c,K=V.lc,L[M]=Y,Y==63){if(B.value-R.value>k)throw new Error("Something wrong with hufUnpackEncTable");j(8,H,K,E,B);let ee=V.l+6;if(H=V.c,K=V.lc,M+ee>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)L[M++]=0;M--}else if(Y>=59){let ee=Y-59+2;if(M+ee>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)L[M++]=0;M--}}X(L)}function se(E){return E&63}function ne(E){return E>>6}function te(E,R,k,M){for(;R<=k;R++){let P=ne(E[R]),L=se(E[R]);if(P>>L)throw new Error("Invalid table entry");if(L>14){let B=M[P>>L-14];if(B.len)throw new Error("Invalid table entry");if(B.lit++,B.p){let H=B.p;B.p=new Array(B.lit);for(let K=0;K<B.lit-1;++K)B.p[K]=H[K]}else B.p=new Array(1);B.p[B.lit-1]=R}else if(L){let B=0;for(let H=1<<14-L;H>0;H--){let K=M[(P<<14-L)+B];if(K.len||K.p)throw new Error("Invalid table entry");K.len=L,K.lit=R,B++}}}return!0}let re={c:0,lc:0};function oe(E,R,k,M){E=E<<8|Ue(k,M),R+=8,re.c=E,re.lc=R}let Me={c:0,lc:0};function Z(E,R,k,M,P,L,B,H,K){if(E==R){M<8&&(oe(k,M,P,L),k=re.c,M=re.lc),M-=8;let Y=k>>M;if(Y=new Uint8Array([Y])[0],H.value+Y>K)return!1;let ee=B[H.value-1];for(;Y-- >0;)B[H.value++]=ee}else if(H.value<K)B[H.value++]=E;else return!1;Me.c=k,Me.lc=M}function ae(E){return E&65535}function Ee(E){let R=ae(E);return R>32767?R-65536:R}let ye={a:0,b:0};function De(E,R){let k=Ee(E),P=Ee(R),L=k+(P&1)+(P>>1),B=L,H=L-P;ye.a=B,ye.b=H}function ke(E,R){let k=ae(E),M=ae(R),P=k-(M>>1)&65535,L=M+P-32768&65535;ye.a=L,ye.b=P}function rt(E,R,k,M,P,L,B){let H=B<16384,K=k>P?P:k,Y=1,ee,he;for(;Y<=K;)Y<<=1;for(Y>>=1,ee=Y,Y>>=1;Y>=1;){he=0;let ue=he+L*(P-ee),xe=L*Y,Te=L*ee,be=M*Y,Ie=M*ee,Ve,Lt,ot,Ze;for(;he<=ue;he+=Te){let Wt=he,We=he+M*(k-ee);for(;Wt<=We;Wt+=Ie){let Kt=Wt+be,ni=Wt+xe,rn=ni+be;H?(De(E[Wt+R],E[ni+R]),Ve=ye.a,ot=ye.b,De(E[Kt+R],E[rn+R]),Lt=ye.a,Ze=ye.b,De(Ve,Lt),E[Wt+R]=ye.a,E[Kt+R]=ye.b,De(ot,Ze),E[ni+R]=ye.a,E[rn+R]=ye.b):(ke(E[Wt+R],E[ni+R]),Ve=ye.a,ot=ye.b,ke(E[Kt+R],E[rn+R]),Lt=ye.a,Ze=ye.b,ke(Ve,Lt),E[Wt+R]=ye.a,E[Kt+R]=ye.b,ke(ot,Ze),E[ni+R]=ye.a,E[rn+R]=ye.b)}if(k&Y){let Kt=Wt+xe;H?De(E[Wt+R],E[Kt+R]):ke(E[Wt+R],E[Kt+R]),Ve=ye.a,E[Kt+R]=ye.b,E[Wt+R]=Ve}}if(P&Y){let Wt=he,We=he+M*(k-ee);for(;Wt<=We;Wt+=Ie){let Kt=Wt+be;H?De(E[Wt+R],E[Kt+R]):ke(E[Wt+R],E[Kt+R]),Ve=ye.a,E[Kt+R]=ye.b,E[Wt+R]=Ve}}ee=Y,Y>>=1}return he}function Qe(E,R,k,M,P,L,B,H,K){let Y=0,ee=0,he=B,ue=Math.trunc(M.value+(P+7)/8);for(;M.value<ue;)for(oe(Y,ee,k,M),Y=re.c,ee=re.lc;ee>=14;){let Te=Y>>ee-14&16383,be=R[Te];if(be.len)ee-=be.len,Z(be.lit,L,Y,ee,k,M,H,K,he),Y=Me.c,ee=Me.lc;else{if(!be.p)throw new Error("hufDecode issues");let Ie;for(Ie=0;Ie<be.lit;Ie++){let Ve=se(E[be.p[Ie]]);for(;ee<Ve&&M.value<ue;)oe(Y,ee,k,M),Y=re.c,ee=re.lc;if(ee>=Ve&&ne(E[be.p[Ie]])==(Y>>ee-Ve&(1<<Ve)-1)){ee-=Ve,Z(be.p[Ie],L,Y,ee,k,M,H,K,he),Y=Me.c,ee=Me.lc;break}}if(Ie==be.lit)throw new Error("hufDecode issues")}}let xe=8-P&7;for(Y>>=xe,ee-=xe;ee>0;){let Te=R[Y<<14-ee&16383];if(Te.len)ee-=Te.len,Z(Te.lit,L,Y,ee,k,M,H,K,he),Y=Me.c,ee=Me.lc;else throw new Error("hufDecode issues")}return!0}function St(E,R,k,M,P,L){let B={value:0},H=k.value,K=Le(R,k),Y=Le(R,k);k.value+=4;let ee=Le(R,k);if(k.value+=4,K<0||K>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let he=new Array(65537),ue=new Array(16384);U(ue);let xe=M-(k.value-H);if(q(E,k,xe,K,Y,he),ee>8*(M-(k.value-H)))throw new Error("Something wrong with hufUncompress");te(he,K,Y,ue),Qe(he,ue,E,k,ee,Y,L,P,B)}function Q(E,R,k){for(let M=0;M<k;++M)R[M]=E[R[M]]}function un(E){for(let R=1;R<E.length;R++){let k=E[R-1]+E[R]-128;E[R]=k}}function Ye(E,R){let k=0,M=Math.floor((E.length+1)/2),P=0,L=E.length-1;for(;!(P>L||(R[P++]=E[k++],P>L));)R[P++]=E[M++]}function at(E){let R=E.byteLength,k=new Array,M=0,P=new DataView(E);for(;R>0;){let L=P.getInt8(M++);if(L<0){let B=-L;R-=B+1;for(let H=0;H<B;H++)k.push(P.getUint8(M++))}else{let B=L;R-=2;let H=P.getUint8(M++);for(let K=0;K<B+1;K++)k.push(H)}}return k}function He(E,R,k,M,P,L){let B=new DataView(L.buffer),H=k[E.idx[0]].width,K=k[E.idx[0]].height,Y=3,ee=Math.floor(H/8),he=Math.ceil(H/8),ue=Math.ceil(K/8),xe=H-(he-1)*8,Te=K-(ue-1)*8,be={value:0},Ie=new Array(Y),Ve=new Array(Y),Lt=new Array(Y),ot=new Array(Y),Ze=new Array(Y);for(let We=0;We<Y;++We)Ze[We]=R[E.idx[We]],Ie[We]=We<1?0:Ie[We-1]+he*ue,Ve[We]=new Float32Array(64),Lt[We]=new Uint16Array(64),ot[We]=new Uint16Array(he*64);for(let We=0;We<ue;++We){let Kt=8;We==ue-1&&(Kt=Te);let ni=8;for(let It=0;It<he;++It){It==he-1&&(ni=xe);for(let ht=0;ht<Y;++ht)Lt[ht].fill(0),Lt[ht][0]=P[Ie[ht]++],nn(be,M,Lt[ht]),vt(Lt[ht],Ve[ht]),I(Ve[ht]);Y==3&&_(Ve);for(let ht=0;ht<Y;++ht)$(Ve[ht],ot[ht],It*64)}let rn=0;for(let It=0;It<Y;++It){let ht=k[E.idx[It]].type;for(let zn=8*We;zn<8*We+Kt;++zn){rn=Ze[It][zn];for(let ys=0;ys<ee;++ys){let cn=ys*64+(zn&7)*8;B.setUint16(rn+0*ht,ot[It][cn+0],!0),B.setUint16(rn+2*ht,ot[It][cn+1],!0),B.setUint16(rn+4*ht,ot[It][cn+2],!0),B.setUint16(rn+6*ht,ot[It][cn+3],!0),B.setUint16(rn+8*ht,ot[It][cn+4],!0),B.setUint16(rn+10*ht,ot[It][cn+5],!0),B.setUint16(rn+12*ht,ot[It][cn+6],!0),B.setUint16(rn+14*ht,ot[It][cn+7],!0),rn+=16*ht}}if(ee!=he)for(let zn=8*We;zn<8*We+Kt;++zn){let ys=Ze[It][zn]+8*ee*2*ht,cn=ee*64+(zn&7)*8;for(let Zs=0;Zs<ni;++Zs)B.setUint16(ys+Zs*2*ht,ot[It][cn+Zs],!0)}}}let Wt=new Uint16Array(H);B=new DataView(L.buffer);for(let We=0;We<Y;++We){k[E.idx[We]].decoded=!0;let Kt=k[E.idx[We]].type;if(k[We].type==2)for(let ni=0;ni<K;++ni){let rn=Ze[We][ni];for(let It=0;It<H;++It)Wt[It]=B.getUint16(rn+It*2*Kt,!0);for(let It=0;It<H;++It)B.setFloat32(rn+It*2*Kt,J(Wt[It]),!0)}}}function nn(E,R,k){let M,P=1;for(;P<64;)M=R[E.value],M==65280?P=64:M>>8==255?P+=M&255:(k[P]=M,P++),E.value++}function vt(E,R){R[0]=J(E[0]),R[1]=J(E[1]),R[2]=J(E[5]),R[3]=J(E[6]),R[4]=J(E[14]),R[5]=J(E[15]),R[6]=J(E[27]),R[7]=J(E[28]),R[8]=J(E[2]),R[9]=J(E[4]),R[10]=J(E[7]),R[11]=J(E[13]),R[12]=J(E[16]),R[13]=J(E[26]),R[14]=J(E[29]),R[15]=J(E[42]),R[16]=J(E[3]),R[17]=J(E[8]),R[18]=J(E[12]),R[19]=J(E[17]),R[20]=J(E[25]),R[21]=J(E[30]),R[22]=J(E[41]),R[23]=J(E[43]),R[24]=J(E[9]),R[25]=J(E[11]),R[26]=J(E[18]),R[27]=J(E[24]),R[28]=J(E[31]),R[29]=J(E[40]),R[30]=J(E[44]),R[31]=J(E[53]),R[32]=J(E[10]),R[33]=J(E[19]),R[34]=J(E[23]),R[35]=J(E[32]),R[36]=J(E[39]),R[37]=J(E[45]),R[38]=J(E[52]),R[39]=J(E[54]),R[40]=J(E[20]),R[41]=J(E[22]),R[42]=J(E[33]),R[43]=J(E[38]),R[44]=J(E[46]),R[45]=J(E[51]),R[46]=J(E[55]),R[47]=J(E[60]),R[48]=J(E[21]),R[49]=J(E[34]),R[50]=J(E[37]),R[51]=J(E[47]),R[52]=J(E[50]),R[53]=J(E[56]),R[54]=J(E[59]),R[55]=J(E[61]),R[56]=J(E[35]),R[57]=J(E[36]),R[58]=J(E[48]),R[59]=J(E[49]),R[60]=J(E[57]),R[61]=J(E[58]),R[62]=J(E[62]),R[63]=J(E[63])}function I(E){let R=.5*Math.cos(.7853975),k=.5*Math.cos(3.14159/16),M=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),L=.5*Math.cos(5*3.14159/16),B=.5*Math.cos(3*3.14159/8),H=.5*Math.cos(7*3.14159/16),K=new Array(4),Y=new Array(4),ee=new Array(4),he=new Array(4);for(let ue=0;ue<8;++ue){let xe=ue*8;K[0]=M*E[xe+2],K[1]=B*E[xe+2],K[2]=M*E[xe+6],K[3]=B*E[xe+6],Y[0]=k*E[xe+1]+P*E[xe+3]+L*E[xe+5]+H*E[xe+7],Y[1]=P*E[xe+1]-H*E[xe+3]-k*E[xe+5]-L*E[xe+7],Y[2]=L*E[xe+1]-k*E[xe+3]+H*E[xe+5]+P*E[xe+7],Y[3]=H*E[xe+1]-L*E[xe+3]+P*E[xe+5]-k*E[xe+7],ee[0]=R*(E[xe+0]+E[xe+4]),ee[3]=R*(E[xe+0]-E[xe+4]),ee[1]=K[0]+K[3],ee[2]=K[1]-K[2],he[0]=ee[0]+ee[1],he[1]=ee[3]+ee[2],he[2]=ee[3]-ee[2],he[3]=ee[0]-ee[1],E[xe+0]=he[0]+Y[0],E[xe+1]=he[1]+Y[1],E[xe+2]=he[2]+Y[2],E[xe+3]=he[3]+Y[3],E[xe+4]=he[3]-Y[3],E[xe+5]=he[2]-Y[2],E[xe+6]=he[1]-Y[1],E[xe+7]=he[0]-Y[0]}for(let ue=0;ue<8;++ue)K[0]=M*E[16+ue],K[1]=B*E[16+ue],K[2]=M*E[48+ue],K[3]=B*E[48+ue],Y[0]=k*E[8+ue]+P*E[24+ue]+L*E[40+ue]+H*E[56+ue],Y[1]=P*E[8+ue]-H*E[24+ue]-k*E[40+ue]-L*E[56+ue],Y[2]=L*E[8+ue]-k*E[24+ue]+H*E[40+ue]+P*E[56+ue],Y[3]=H*E[8+ue]-L*E[24+ue]+P*E[40+ue]-k*E[56+ue],ee[0]=R*(E[ue]+E[32+ue]),ee[3]=R*(E[ue]-E[32+ue]),ee[1]=K[0]+K[3],ee[2]=K[1]-K[2],he[0]=ee[0]+ee[1],he[1]=ee[3]+ee[2],he[2]=ee[3]-ee[2],he[3]=ee[0]-ee[1],E[0+ue]=he[0]+Y[0],E[8+ue]=he[1]+Y[1],E[16+ue]=he[2]+Y[2],E[24+ue]=he[3]+Y[3],E[32+ue]=he[3]-Y[3],E[40+ue]=he[2]-Y[2],E[48+ue]=he[1]-Y[1],E[56+ue]=he[0]-Y[0]}function _(E){for(let R=0;R<64;++R){let k=E[0][R],M=E[1][R],P=E[2][R];E[0][R]=k+1.5747*P,E[1][R]=k-.1873*M-.4682*P,E[2][R]=k+1.8556*M}}function $(E,R,k){for(let M=0;M<64;++M)R[k+M]=tl.toHalfFloat(ge(E[M]))}function ge(E){return E<=1?Math.sign(E)*Math.pow(Math.abs(E),2.2):Math.sign(E)*Math.pow(S,Math.abs(E)-1)}function fe(E){return new DataView(E.array.buffer,E.offset.value,E.size)}function ve(E){let R=E.viewer.buffer.slice(E.offset.value,E.offset.value+E.size),k=new Uint8Array(at(R)),M=new Uint8Array(k.length);return un(k),Ye(k,M),new DataView(M.buffer)}function Be(E){let R=E.array.slice(E.offset.value,E.offset.value+E.size),k=al(R),M=new Uint8Array(k.length);return un(k),Ye(k,M),new DataView(M.buffer)}function Pe(E){let R=E.viewer,k={value:E.offset.value},M=new Uint16Array(E.width*E.scanlineBlockSize*(E.channels*E.type)),P=new Uint8Array(8192),L=0,B=new Array(E.channels);for(let Te=0;Te<E.channels;Te++)B[Te]={},B[Te].start=L,B[Te].end=B[Te].start,B[Te].nx=E.width,B[Te].ny=E.lines,B[Te].size=E.type,L+=B[Te].nx*B[Te].ny*B[Te].size;let H=G(R,k),K=G(R,k);if(K>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(H<=K)for(let Te=0;Te<K-H+1;Te++)P[Te+H]=tt(R,k);let Y=new Uint16Array(65536),ee=T(P,Y),he=Le(R,k);St(E.array,R,k,he,M,L);for(let Te=0;Te<E.channels;++Te){let be=B[Te];for(let Ie=0;Ie<B[Te].size;++Ie)rt(M,be.start+Ie,be.nx,be.size,be.ny,be.nx*be.size,ee)}Q(Y,M,L);let ue=0,xe=new Uint8Array(M.buffer.byteLength);for(let Te=0;Te<E.lines;Te++)for(let be=0;be<E.channels;be++){let Ie=B[be],Ve=Ie.nx*Ie.size,Lt=new Uint8Array(M.buffer,Ie.end*2,Ve*2);xe.set(Lt,ue),ue+=Ve*2,Ie.end+=Ve}return new DataView(xe.buffer)}function Ne(E){let R=E.array.slice(E.offset.value,E.offset.value+E.size),k=al(R),M=E.lines*E.channels*E.width,P=E.type==1?new Uint16Array(M):new Uint32Array(M),L=0,B=0,H=new Array(4);for(let K=0;K<E.lines;K++)for(let Y=0;Y<E.channels;Y++){let ee=0;switch(E.type){case 1:H[0]=L,H[1]=H[0]+E.width,L=H[1]+E.width;for(let he=0;he<E.width;++he){let ue=k[H[0]++]<<8|k[H[1]++];ee+=ue,P[B]=ee,B++}break;case 2:H[0]=L,H[1]=H[0]+E.width,H[2]=H[1]+E.width,L=H[2]+E.width;for(let he=0;he<E.width;++he){let ue=k[H[0]++]<<24|k[H[1]++]<<16|k[H[2]++]<<8;ee+=ue,P[B]=ee,B++}break}}return new DataView(P.buffer)}function je(E){let R=E.viewer,k={value:E.offset.value},M=new Uint8Array(E.width*E.lines*(E.channels*E.type*2)),P={version:pt(R,k),unknownUncompressedSize:pt(R,k),unknownCompressedSize:pt(R,k),acCompressedSize:pt(R,k),dcCompressedSize:pt(R,k),rleCompressedSize:pt(R,k),rleUncompressedSize:pt(R,k),rleRawSize:pt(R,k),totalAcUncompressedCount:pt(R,k),totalDcUncompressedCount:pt(R,k),acCompression:pt(R,k)};if(P.version<2)throw new Error("EXRLoader.parse: "+Ys.compression+" version "+P.version+" is unsupported");let L=new Array,B=G(R,k)-2;for(;B>0;){let be=lt(R.buffer,k),Ie=tt(R,k),Ve=Ie>>2&3,Lt=(Ie>>4)-1,ot=new Int8Array([Lt])[0],Ze=tt(R,k);L.push({name:be,index:ot,type:Ze,compression:Ve}),B-=be.length+3}let H=Ys.channels,K=new Array(E.channels);for(let be=0;be<E.channels;++be){let Ie=K[be]={},Ve=H[be];Ie.name=Ve.name,Ie.compression=0,Ie.decoded=!1,Ie.type=Ve.pixelType,Ie.pLinear=Ve.pLinear,Ie.width=E.width,Ie.height=E.lines}let Y={idx:new Array(3)};for(let be=0;be<E.channels;++be){let Ie=K[be];for(let Ve=0;Ve<L.length;++Ve){let Lt=L[Ve];Ie.name==Lt.name&&(Ie.compression=Lt.compression,Lt.index>=0&&(Y.idx[Lt.index]=be),Ie.offset=be)}}let ee,he,ue;if(P.acCompressedSize>0)switch(P.acCompression){case 0:ee=new Uint16Array(P.totalAcUncompressedCount),St(E.array,R,k,P.acCompressedSize,ee,P.totalAcUncompressedCount);break;case 1:let be=E.array.slice(k.value,k.value+P.totalAcUncompressedCount),Ie=al(be);ee=new Uint16Array(Ie.buffer),k.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){let be={array:E.array,offset:k,size:P.dcCompressedSize};he=new Uint16Array(Be(be).buffer),k.value+=P.dcCompressedSize}if(P.rleRawSize>0){let be=E.array.slice(k.value,k.value+P.rleCompressedSize),Ie=al(be);ue=at(Ie.buffer),k.value+=P.rleCompressedSize}let xe=0,Te=new Array(K.length);for(let be=0;be<Te.length;++be)Te[be]=new Array;for(let be=0;be<E.lines;++be)for(let Ie=0;Ie<K.length;++Ie)Te[Ie].push(xe),xe+=K[Ie].width*E.type*2;He(Y,Te,K,ee,he,M);for(let be=0;be<K.length;++be){let Ie=K[be];if(!Ie.decoded)switch(Ie.compression){case 2:let Ve=0,Lt=0;for(let ot=0;ot<E.lines;++ot){let Ze=Te[be][Ve];for(let Wt=0;Wt<Ie.width;++Wt){for(let We=0;We<2*Ie.type;++We)M[Ze++]=ue[Lt+We*Ie.width*Ie.height];Lt++}Ve++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(M.buffer)}function lt(E,R){let k=new Uint8Array(E),M=0;for(;k[R.value+M]!=0;)M+=1;let P=new TextDecoder().decode(k.slice(R.value,R.value+M));return R.value=R.value+M+1,P}function de(E,R,k){let M=new TextDecoder().decode(new Uint8Array(E).slice(R.value,R.value+k));return R.value=R.value+k,M}function kt(E,R){let k=$e(E,R),M=Le(E,R);return[k,M]}function Tt(E,R){let k=Le(E,R),M=Le(E,R);return[k,M]}function $e(E,R){let k=E.getInt32(R.value,!0);return R.value=R.value+4,k}function Le(E,R){let k=E.getUint32(R.value,!0);return R.value=R.value+4,k}function Ue(E,R){let k=E[R.value];return R.value=R.value+1,k}function tt(E,R){let k=E.getUint8(R.value);return R.value=R.value+1,k}let pt=function(E,R){let k;return"getBigInt64"in DataView.prototype?k=Number(E.getBigInt64(R.value,!0)):k=E.getUint32(R.value+4,!0)+Number(E.getUint32(R.value,!0)<<32),R.value+=8,k};function bt(E,R){let k=E.getFloat32(R.value,!0);return R.value+=4,k}function yt(E,R){return tl.toHalfFloat(bt(E,R))}function J(E){let R=(E&31744)>>10,k=E&1023;return(E>>15?-1:1)*(R?R===31?k?NaN:1/0:Math.pow(2,R-15)*(1+k/1024):6103515625e-14*(k/1024))}function G(E,R){let k=E.getUint16(R.value,!0);return R.value+=2,k}function Ae(E,R){return J(G(E,R))}function Ce(E,R,k,M){let P=k.value,L=[];for(;k.value<P+M-1;){let B=lt(R,k),H=$e(E,k),K=tt(E,k);k.value+=3;let Y=$e(E,k),ee=$e(E,k);L.push({name:B,pixelType:H,pLinear:K,xSampling:Y,ySampling:ee})}return k.value+=1,L}function et(E,R){let k=bt(E,R),M=bt(E,R),P=bt(E,R),L=bt(E,R),B=bt(E,R),H=bt(E,R),K=bt(E,R),Y=bt(E,R);return{redX:k,redY:M,greenX:P,greenY:L,blueX:B,blueY:H,whiteX:K,whiteY:Y}}function Ke(E,R){let k=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],M=tt(E,R);return k[M]}function Xt(E,R){let k=Le(E,R),M=Le(E,R),P=Le(E,R),L=Le(E,R);return{xMin:k,yMin:M,xMax:P,yMax:L}}function qt(E,R){let k=["INCREASING_Y"],M=tt(E,R);return k[M]}function vn(E,R){let k=bt(E,R),M=bt(E,R);return[k,M]}function Nn(E,R){let k=bt(E,R),M=bt(E,R),P=bt(E,R);return[k,M,P]}function Yt(E,R,k,M,P){if(M==="string"||M==="stringvector"||M==="iccProfile")return de(R,k,P);if(M==="chlist")return Ce(E,R,k,P);if(M==="chromaticities")return et(E,k);if(M==="compression")return Ke(E,k);if(M==="box2i")return Xt(E,k);if(M==="lineOrder")return qt(E,k);if(M==="float")return bt(E,k);if(M==="v2f")return vn(E,k);if(M==="v3f")return Nn(E,k);if(M==="int")return $e(E,k);if(M==="rational")return kt(E,k);if(M==="timecode")return Tt(E,k);if(M==="preview")return k.value+=P,"skipped";k.value+=P}function Fn(E,R,k){let M={};if(E.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");M.version=E.getUint8(4);let P=E.getUint8(5);M.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},k.value=8;let L=!0;for(;L;){let B=lt(R,k);if(B==0)L=!1;else{let H=lt(R,k),K=Le(E,k),Y=Yt(E,R,k,H,K);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${H}'.`):M[B]=Y}}if((P&-5)!=0)throw console.error("THREE.EXRHeader:",M),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return M}function Si(E,R,k,M,P){let L={size:0,viewer:R,array:k,offset:M,width:E.dataWindow.xMax-E.dataWindow.xMin+1,height:E.dataWindow.yMax-E.dataWindow.yMin+1,channels:E.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:E.channels[0].pixelType,uncompress:null,getter:null,format:null,colorSpace:Ri};switch(E.compression){case"NO_COMPRESSION":L.lines=1,L.uncompress=fe;break;case"RLE_COMPRESSION":L.lines=1,L.uncompress=ve;break;case"ZIPS_COMPRESSION":L.lines=1,L.uncompress=Be;break;case"ZIP_COMPRESSION":L.lines=16,L.uncompress=Be;break;case"PIZ_COMPRESSION":L.lines=32,L.uncompress=Pe;break;case"PXR24_COMPRESSION":L.lines=16,L.uncompress=Ne;break;case"DWAA_COMPRESSION":L.lines=32,L.uncompress=je;break;case"DWAB_COMPRESSION":L.lines=256,L.uncompress=je;break;default:throw new Error("EXRLoader.parse: "+E.compression+" is unsupported")}if(L.scanlineBlockSize=L.lines,L.type==1)switch(P){case ci:L.getter=Ae,L.inputSize=2;break;case jt:L.getter=G,L.inputSize=2;break}else if(L.type==2)switch(P){case ci:L.getter=bt,L.inputSize=4;break;case jt:L.getter=yt,L.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+L.type+" for "+E.compression+".");L.blockCount=(E.dataWindow.yMax+1)/L.scanlineBlockSize;for(let H=0;H<L.blockCount;H++)pt(R,M);L.outputChannels=L.channels==3?4:L.channels;let B=L.width*L.height*L.outputChannels;switch(P){case ci:L.byteArray=new Float32Array(B),L.channels<L.outputChannels&&L.byteArray.fill(1,0,B);break;case jt:L.byteArray=new Uint16Array(B),L.channels<L.outputChannels&&L.byteArray.fill(15360,0,B);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}return L.bytesPerLine=L.width*L.inputSize*L.channels,L.outputChannels==4?(L.format=yn,L.colorSpace=Ri):(L.format=$o,L.colorSpace=jn),L}let _r=new DataView(e),hu=new Uint8Array(e),is={value:0},Ys=Fn(_r,e,is),Mt=Si(Ys,_r,hu,is,this.type),fo={value:0},Hl={R:0,G:1,B:2,A:3,Y:0};for(let E=0;E<Mt.height/Mt.scanlineBlockSize;E++){let R=Le(_r,is);Mt.size=Le(_r,is),Mt.lines=R+Mt.scanlineBlockSize>Mt.height?Mt.height-R:Mt.scanlineBlockSize;let M=Mt.size<Mt.lines*Mt.bytesPerLine?Mt.uncompress(Mt):fe(Mt);is.value+=Mt.size;for(let P=0;P<Mt.scanlineBlockSize;P++){let L=P+E*Mt.scanlineBlockSize;if(L>=Mt.height)break;for(let B=0;B<Mt.channels;B++){let H=Hl[Ys.channels[B].name];for(let K=0;K<Mt.width;K++){fo.value=(P*(Mt.channels*Mt.width)+B*Mt.width+K)*Mt.inputSize;let Y=(Mt.height-1-L)*(Mt.width*Mt.outputChannels)+K*Mt.outputChannels+H;Mt.byteArray[Y]=Mt.getter(M,fo)}}}}return{header:Ys,width:Mt.width,height:Mt.height,data:Mt.byteArray,format:Mt.format,colorSpace:Mt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Nt,a.magFilter=Nt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,i,s)}};var ol=new Pt;ol.setAttribute("position",new zt(new Float32Array([-1,-1,3,-1,-1,3]),2));ol.setAttribute("uv",new zt(new Float32Array([0,0,2,0,0,2]),2));ol.boundingSphere=new Vi;ol.computeBoundingSphere=function(){};var FE=new rr,ur=class{constructor(e){this._mesh=new W(ol,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,FE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}},zE={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new qe},viewMat:{value:new qe},projViewMat:{value:new qe},projectionMatrixInv:{value:new qe},viewMatrixInv:{value:new qe},cameraPos:{value:new b},resolution:{value:new ce},time:{value:0},samples:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},logDepth:{value:!1},ortho:{value:!1},screenSpaceRadius:{value:!1},frame:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1);
}`,fragmentShader:`
    #define SAMPLES 16
    #define FSAMPLES 16.0
uniform sampler2D sceneDiffuse;
uniform highp sampler2D sceneNormal;
uniform highp sampler2D sceneDepth;
uniform mat4 projectionMatrixInv;
uniform mat4 viewMatrixInv;
uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 projViewMat;
uniform vec3 cameraPos;
uniform vec2 resolution;
uniform float time;
uniform vec3[SAMPLES] samples;
uniform float radius;
uniform float distanceFalloff;
uniform float near;
uniform float far;
uniform float frame;
uniform bool logDepth;
uniform bool ortho;
uniform bool screenSpaceRadius;
uniform sampler2D bluenoise;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }

    vec3 getWorldPosLog(vec3 posS) {
      vec2 uv = posS.xy;
      float z = posS.z;
      float nearZ =near;
      float farZ = far;
      float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
      vec4 wpos = projectionMatrixInv * clipVec;
      return wpos.xyz / wpos.w;
    }
    vec3 getWorldPos(float depth, vec2 coord) {
      #ifdef LOGDEPTH
        return getWorldPosLog(vec3(coord, depth));
      #endif
      float z = depth * 2.0 - 1.0;
      vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
      vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
      // Perspective division
     vec4 worldSpacePosition = viewSpacePosition;
     worldSpacePosition.xyz /= worldSpacePosition.w;
      return worldSpacePosition.xyz;
  }

  vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    ivec2 p = ivec2(vUv * resolution);
    float c0 = texelFetch(sceneDepth, p, 0).x;
    float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;

    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);

    vec3 ce = getWorldPos(c0, vUv).xyz;

    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;

    return normalize(cross(dpdx, dpdy));
}

mat3 makeRotationZ(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(c, - s, 0,
			s,  c, 0,
			0,  0, 1);
  }

void main() {
      vec4 diffuse = texture2D(sceneDiffuse, vUv);
      float depth = texture2D(sceneDepth, vUv).x;
      if (depth == 1.0) {
        gl_FragColor = vec4(vec3(1.0), 1.0);
        return;
      }
      vec3 worldPos = getWorldPos(depth, vUv);
      #ifdef HALFRES
        vec3 normal = texture2D(sceneNormal, vUv).rgb;
      #else
        vec3 normal = computeNormal(worldPos, vUv);
      #endif
      vec4 noise = texture2D(bluenoise, gl_FragCoord.xy / 128.0);
      vec2 harmoniousNumbers = vec2(
        1.618033988749895,
        1.324717957244746
      );
      noise.rg += harmoniousNumbers * frame;
      noise.rg = fract(noise.rg);
        vec3 helperVec = vec3(0.0, 1.0, 0.0);
        if (dot(helperVec, normal) > 0.99) {
          helperVec = vec3(1.0, 0.0, 0.0);
        }
        vec3 tangent = normalize(cross(helperVec, normal));
        vec3 bitangent = cross(normal, tangent);
        mat3 tbn = mat3(tangent, bitangent, normal) *  makeRotationZ(noise.r * 2.0 * 3.1415962) ;

      float occluded = 0.0;
      float totalWeight = 0.0;
      float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : radiusToUse * distanceFalloff * 0.2;
      float bias = (min(
        0.1,
        distanceFalloffToUse * 0.1
      ) / near) * fwidth(distance(worldPos, cameraPos)) / radiusToUse;
      float phi = 1.61803398875;
      float offsetMove = 0.0;
      float offsetMoveInv = 1.0 / FSAMPLES;
      for(float i = 0.0; i < FSAMPLES; i++) {
        vec3 sampleDirection = tbn * samples[int(i)];

        float moveAmt = fract(noise.g + offsetMove);
        offsetMove += offsetMoveInv;

        vec3 samplePos = worldPos + radiusToUse * moveAmt * sampleDirection;
        vec4 offset = projMat * vec4(samplePos, 1.0);
        offset.xyz /= offset.w;
        offset.xyz = offset.xyz * 0.5 + 0.5;
        
        vec2 diff = gl_FragCoord.xy - floor(offset.xy * resolution);
        // From Rabbid76's hbao
        vec2 clipRangeCheck = step(vec2(0.0),offset.xy) * step(offset.xy, vec2(1.0));
          float sampleDepth = textureLod(sceneDepth, offset.xy, 0.0).x;

          #ifdef LOGDEPTH

          float distSample = linearize_depth_log(sampleDepth, near, far);

          #else

          float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);

          #endif

          float distWorld = ortho ? linearize_depth_ortho(offset.z, near, far) : linearize_depth(offset.z, near, far);
          
          float rangeCheck = distSample == distWorld ? 0.0 : smoothstep(0.0, 1.0, distanceFalloffToUse / (abs(distSample - distWorld)));
          
          float sampleValid = (clipRangeCheck.x * clipRangeCheck.y);
          occluded += rangeCheck * float(sampleDepth != depth) * float(distSample + bias < distWorld) * step(
            1.0,
            dot(diff, diff)
          ) * sampleValid;
          
          totalWeight += sampleValid;
      }
      float occ = clamp(1.0 - occluded / (totalWeight == 0.0 ? 1.0 : totalWeight), 0.0, 1.0);
      gl_FragColor = vec4(occ, 0.5 + 0.5 * normal);
}`},OE={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},transparencyDWFalse:{value:null},transparencyDWTrue:{value:null},transparencyDWTrueDepth:{value:null},transparencyAware:{value:!1},projMat:{value:new qe},viewMat:{value:new qe},projectionMatrixInv:{value:new qe},viewMatrixInv:{value:new qe},cameraPos:{value:new b},resolution:{value:new ce},color:{value:new b(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:10},renderMode:{value:0},gammaCorrection:{value:!1},logDepth:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0}},depthWrite:!1,depthTest:!1,vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform highp sampler2D downsampledDepth;
    uniform highp sampler2D transparencyDWFalse;
    uniform highp sampler2D transparencyDWTrue;
    uniform highp sampler2D transparencyDWTrueDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform vec2 resolution;
    uniform vec3 color;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform float intensity;
    uniform float renderMode;
    uniform float near;
    uniform float far;
    uniform bool gammaCorrection;
    uniform bool logDepth;
    uniform bool ortho;
    uniform bool screenSpaceRadius;
    uniform bool fog;
    uniform bool fogExp;
    uniform bool colorMultiply;
    uniform bool transparencyAware;
    uniform float fogDensity;
    uniform float fogNear;
    uniform float fogFar;
    uniform float radius;
    uniform float distanceFalloff;
    uniform vec3 cameraPos;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
       // if (logDepth) {
        #ifdef LOGDEPTH
          return getWorldPosLog(vec3(coord, depth));
        #endif
      //  }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }

    #include <common>
    #include <dithering_pars_fragment>
    void main() {
        //vec4 texel = texture2D(tDiffuse, vUv);//vec3(0.0);
        vec4 sceneTexel = texture2D(sceneDiffuse, vUv);
        float depth = texture2D(
            sceneDepth,
            vUv
        ).x;
        #ifdef HALFRES 
        vec4 texel;
        if (depth == 1.0) {
            texel = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
        vec3 worldPos = getWorldPos(depth, vUv);
        vec3 normal = computeNormal(getWorldPos(depth, vUv), vUv);
       // vec4 texel = texture2D(tDiffuse, vUv);
       // Find closest depth;
       float totalWeight = 0.0;
       float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : distanceFalloff;
        for(float x = -1.0; x <= 1.0; x++) {
            for(float y = -1.0; y <= 1.0; y++) {
                vec2 offset = vec2(x, y);
                ivec2 p = ivec2(
                    (vUv * resolution * 0.5) + offset
                );
                vec2 pUv = vec2(p) / (resolution * 0.5);
                float sampleDepth = texelFetch(downsampledDepth,p, 0).x;
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                vec3 normalSample = sampleInfo.gba * 2.0 - 1.0;
                vec3 worldPosSample = getWorldPos(sampleDepth, pUv);
                float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
                float rangeCheck = exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0);
                float weight = rangeCheck;
                totalWeight += weight;
                texel += sampleInfo * weight;
            }
        }
        if (totalWeight == 0.0) {
            texel = texture2D(tDiffuse, vUv);
        } else {
            texel /= totalWeight;
        }
    }
        #else
        vec4 texel = texture2D(tDiffuse, vUv);
        #endif

        #ifdef LOGDEPTH
        texel.r = clamp(texel.r, 0.0, 1.0);
        if (texel.r == 0.0) {
          texel.r = 1.0;
        }
        #endif
     
        float finalAo = pow(texel.r, intensity);
        float fogFactor;
        float fogDepth = distance(
            cameraPos,
            getWorldPos(depth, vUv)
        );
        if (fog) {
            if (fogExp) {
                fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
            } else {
                fogFactor = smoothstep( fogNear, fogFar, fogDepth );
            }
        }
        if (transparencyAware) {
            float transparencyDWOff = texture2D(transparencyDWFalse, vUv).a;
            float transparencyDWOn = texture2D(transparencyDWTrue, vUv).a;
            float adjustmentFactorOff = transparencyDWOff;
            float adjustmentFactorOn = (1.0 - transparencyDWOn) * (
                texture2D(transparencyDWTrueDepth, vUv).r == texture2D(sceneDepth, vUv).r ? 1.0 : 0.0
            );
            float adjustmentFactor = max(adjustmentFactorOff, adjustmentFactorOn);
            finalAo = mix(finalAo, 1.0, adjustmentFactor);
        }
        finalAo = mix(finalAo, 1.0, fogFactor);
        vec3 aoApplied = color * mix(vec3(1.0), sceneTexel.rgb, float(colorMultiply));
        if (renderMode == 0.0) {
            gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 1.0) {
            gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 2.0) {
            gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
        } else if (renderMode == 3.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        } else if (renderMode == 4.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        }
        #include <dithering_fragment>
        if (gammaCorrection) {
            gl_FragColor = sRGBTransferOETF(gl_FragColor);
        }
    }
    `},BE={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new qe},viewMat:{value:new qe},projectionMatrixInv:{value:new qe},viewMatrixInv:{value:new qe},cameraPos:{value:new b},resolution:{value:new ce},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},logDepth:{value:!1},screenSpaceRadius:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1.0);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform vec2 resolution;
    uniform float r;
    uniform float radius;
     uniform float worldRadius;
    uniform float index;
     uniform float near;
     uniform float far;
     uniform float distanceFalloff;
     uniform bool logDepth;
     uniform bool screenSpaceRadius;
    varying vec2 vUv;

    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        highp float z_n = 2.0 * d - 1.0;
        return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
     float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     return linearize_depth(linDepth, nearZ, farZ);
   }
   highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
     return nearZ + (farZ - nearZ) * d;
   }
   vec3 getWorldPosLog(vec3 posS) {
     vec2 uv = posS.xy;
     float z = posS.z;
     float nearZ =near;
     float farZ = far;
     float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
     vec4 wpos = projectionMatrixInv * clipVec;
     return wpos.xyz / wpos.w;
   }
    vec3 getWorldPos(float depth, vec2 coord) {
     #ifdef LOGDEPTH
          return getWorldPosLog(vec3(coord, depth));
     #endif
        
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
    #include <common>
    #define NUM_SAMPLES 16
    uniform vec2 poissonDisk[NUM_SAMPLES];
    void main() {
        const float pi = 3.14159;
        vec2 texelSize = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec2 uv = vUv;
        vec4 data = texture2D(tDiffuse, vUv);
        float occlusion = data.r;
        float baseOcc = data.r;
        vec3 normal = data.gba * 2.0 - 1.0;
        float count = 1.0;
        float d = texture2D(sceneDepth, vUv).x;
        if (d == 1.0) {
          gl_FragColor = data;
          return;
        }
        vec3 worldPos = getWorldPos(d, vUv);
        float size = radius;
        float angle;
        if (index == 0.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).x * PI2;
        } else if (index == 1.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).y * PI2;
        } else if (index == 2.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).z * PI2;
        } else {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).w * PI2;
        }

        mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        float radiusToUse = screenSpaceRadius ? distance(
          worldPos,
          getWorldPos(d, vUv +
            vec2(worldRadius, 0.0) / resolution)
        ) : worldRadius;
        float distanceFalloffToUse =screenSpaceRadius ?
        radiusToUse * distanceFalloff
    : radiusToUse * distanceFalloff * 0.2;


        for(int i = 0; i < NUM_SAMPLES; i++) {
            vec2 offset = (rotationMatrix * poissonDisk[i]) * texelSize * size;
            vec4 dataSample = texture2D(tDiffuse, uv + offset);
            float occSample = dataSample.r;
            vec3 normalSample = dataSample.gba * 2.0 - 1.0;
            float dSample = texture2D(sceneDepth, uv + offset).x;
            vec3 worldPosSample = getWorldPos(dSample, uv + offset);
            float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
            float rangeCheck = dSample == 1.0 ? 0.0 :exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0) * (1.0 - abs(occSample - baseOcc));
            occlusion += occSample * rangeCheck;
            count += rangeCheck;
        }
        if (count > 0.0) {
          occlusion /= count;
        }
        #ifdef LOGDEPTH
          occlusion = clamp(occlusion, 0.0, 1.0);
          if (occlusion == 0.0) {
            occlusion = 1.0;
          }
        #endif
        gl_FragColor = vec4(occlusion, 0.5 + 0.5 * normal);
    }
    `},HE={uniforms:{sceneDepth:{value:null},resolution:{value:new ce},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new qe},projectionMatrixInv:{value:new qe},logDepth:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1);
    }`,fragmentShader:`
    uniform highp sampler2D sceneDepth;
    uniform vec2 resolution;
    uniform float near;
    uniform float far;
    uniform bool logDepth;
    uniform mat4 viewMatrixInv;
    uniform mat4 projectionMatrixInv;
    varying vec2 vUv;
    layout(location = 1) out vec4 gNormal;
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
        if (logDepth) {
          return getWorldPosLog(vec3(coord, depth));
        }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }
    void main() {
        vec2 uv = vUv - vec2(0.5) / resolution;
        vec2 pixelSize = vec2(1.0) / resolution;
        highp vec2[4] uvSamples;
        uvSamples[0] = uv;
        uvSamples[1] = uv + vec2(pixelSize.x, 0.0);
        uvSamples[2] = uv + vec2(0.0, pixelSize.y);
        uvSamples[3] = uv + pixelSize;
        float depth00 = texture2D(sceneDepth, uvSamples[0]).r;
        float depth10 = texture2D(sceneDepth, uvSamples[1]).r;
        float depth01 = texture2D(sceneDepth, uvSamples[2]).r;
        float depth11 = texture2D(sceneDepth, uvSamples[3]).r;
        float minDepth = min(min(depth00, depth10), min(depth01, depth11));
        float maxDepth = max(max(depth00, depth10), max(depth01, depth11));
        float targetDepth = minDepth;
        // Checkerboard pattern to avoid artifacts
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) > 0.5) { 
            targetDepth = maxDepth;
        }
        int chosenIndex = 0;
        float[4] samples;
        samples[0] = depth00;
        samples[1] = depth10;
        samples[2] = depth01;
        samples[3] = depth11;
        for(int i = 0; i < 4; ++i) {
            if (samples[i] == targetDepth) {
                chosenIndex = i;
                break;
            }
        }
        gl_FragColor = vec4(samples[chosenIndex], 0.0, 0.0, 1.0);
        gNormal = vec4(computeNormal(
            getWorldPos(samples[chosenIndex], uvSamples[chosenIndex]), uvSamples[chosenIndex]
        ), 0.0);
    }`},zm="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",US=Uint8Array.from(atob(zm),n=>n.charCodeAt(0));var kE=Uint8Array.from(atob(zm),n=>n.charCodeAt(0));function Om(n,e,t){if(e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)){let r=e.getQueryParameter(n,e.QUERY_RESULT)/1e6;t.lastTime=r}else setTimeout(()=>{Om(n,e,t)},1)}var hh=class extends Hn{constructor(e,t,i=512,s=512){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.configuration=new Proxy({aoSamples:16,aoRadius:5,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,color:new we(0,0,0),gammaCorrection:!0,logarithmicDepthBuffer:!1,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,autoRenderBeauty:!0,colorMultiply:!0,transparencyAware:!1,stencil:!1,accumulate:!1},{set:(r,a,o)=>{let l=r[a];return r[a]=o,o.equals?o.equals(l)||this.firstFrame():l!==o&&this.firstFrame(),a==="aoSamples"&&l!==o&&this.configureAOPass(this.configuration.logarithmicDepthBuffer),a==="denoiseSamples"&&l!==o&&this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),a==="halfRes"&&l!==o&&(this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.setSize(this.width,this.height)),a==="depthAwareUpsampling"&&l!==o&&this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),a==="transparencyAware"&&l!==o&&(this.autoDetectTransparency=!1,this.configureTransparencyTarget()),a==="stencil"&&l!==o&&(this.beautyRenderTarget.dispose(),this.beautyRenderTarget=new $t(this.width,this.height,{minFilter:Nt,magFilter:Ut,type:jt,format:yn,stencilBuffer:o}),this.beautyRenderTarget.depthTexture=new ar(this.width,this.height,o?Cs:bi),this.beautyRenderTarget.depthTexture.format=o?nr:as),!0}}),this.samples=[],this.samplesDenoise=[],this.autoDetectTransparency=!0,this.frame=0,this.lastViewMatrix=new qe,this.lastProjectionMatrix=new qe,this.beautyRenderTarget=new $t(this.width,this.height,{minFilter:Nt,magFilter:Ut,type:jt,format:yn,stencilBuffer:!1}),this.beautyRenderTarget.depthTexture=new ar(this.width,this.height,bi),this.beautyRenderTarget.depthTexture.format=as,this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.detectTransparency(),this.configureTransparencyTarget(),this.writeTargetInternal=new $t(this.width,this.height,{minFilter:Nt,magFilter:Nt,depthBuffer:!1}),this.readTargetInternal=new $t(this.width,this.height,{minFilter:Nt,magFilter:Nt,depthBuffer:!1}),this.accumulationRenderTarget=new $t(this.width,this.height,{minFilter:Nt,magFilter:Nt,depthBuffer:!1,format:yn,type:jt,stencilBuffer:!1,depthBuffer:!1,alpha:!0}),this.bluenoise=new Bo(kE,128,128),this.accumulationQuad=new ur(new Ct({uniforms:{frame:{value:0},tDiffuse:{value:null}},transparent:!0,opacity:1,vertexShader:`
             varying vec2 vUv;
             void main() {
                 vUv = uv;
                 gl_Position = vec4(position, 1);
             }`,fragmentShader:`
             uniform sampler2D tDiffuse;
             uniform float frame;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    gl_FragColor = vec4(color.rgb, 1.0 / (frame + 1.0));
                }
                `})),this.bluenoise.colorSpace=jn,this.bluenoise.wrapS=$n,this.bluenoise.wrapT=$n,this.bluenoise.minFilter=Ut,this.bluenoise.magFilter=Ut,this.bluenoise.needsUpdate=!0,this.lastTime=0,this._r=new ce,this._c=new we}configureHalfResTargets(){this.firstFrame(),this.configuration.halfRes?(this.depthDownsampleTarget="160">161?new $t(this.width/2,this.height/2,{count:2}):new Dc(this.width/2,this.height/2,2),"160"<=161&&(this.depthDownsampleTarget.textures=this.depthDownsampleTarget.texture),this.depthDownsampleTarget.textures[0].format=$o,this.depthDownsampleTarget.textures[0].type=ci,this.depthDownsampleTarget.textures[0].minFilter=Ut,this.depthDownsampleTarget.textures[0].magFilter=Ut,this.depthDownsampleTarget.textures[0].depthBuffer=!1,this.depthDownsampleTarget.textures[1].format=yn,this.depthDownsampleTarget.textures[1].type=jt,this.depthDownsampleTarget.textures[1].minFilter=Ut,this.depthDownsampleTarget.textures[1].magFilter=Ut,this.depthDownsampleTarget.textures[1].depthBuffer=!1,this.depthDownsampleQuad=new ur(new Ct(HE))):(this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null))}detectTransparency(){if(this.autoDetectTransparency){let e=!1;this.scene.traverse(t=>{t.material&&t.material.transparent&&(e=!0)}),this.configuration.transparencyAware=e}}configureTransparencyTarget(){this.configuration.transparencyAware?(this.transparencyRenderTargetDWFalse=new $t(this.width,this.height,{minFilter:Nt,magFilter:Ut,type:jt,format:yn}),this.transparencyRenderTargetDWTrue=new $t(this.width,this.height,{minFilter:Nt,magFilter:Ut,type:jt,format:yn}),this.transparencyRenderTargetDWTrue.depthTexture=new ar(this.width,this.height,bi),this.depthCopyPass=new ur(new Ct({uniforms:{depthTexture:{value:this.beautyRenderTarget.depthTexture}},vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1);
            }`,fragmentShader:`
            uniform sampler2D depthTexture;
            varying vec2 vUv;
            void main() {
               gl_FragDepth = texture2D(depthTexture, vUv).r + 0.00001;
               gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            }
            `}))):(this.transparencyRenderTargetDWFalse&&(this.transparencyRenderTargetDWFalse.dispose(),this.transparencyRenderTargetDWFalse=null),this.transparencyRenderTargetDWTrue&&(this.transparencyRenderTargetDWTrue.dispose(),this.transparencyRenderTargetDWTrue=null),this.depthCopyPass&&(this.depthCopyPass.dispose(),this.depthCopyPass=null))}renderTransparency(e){let t=this.scene.background,i=e.getClearColor(new we),s=e.getClearAlpha(),r=new Map,a=e.autoClearDepth;this.scene.traverse(o=>{r.set(o,o.visible)}),this.scene.background=null,e.autoClearDepth=!1,e.setClearColor(new we(0,0,0),0),this.depthCopyPass.material.uniforms.depthTexture.value=this.beautyRenderTarget.depthTexture,e.setRenderTarget(this.transparencyRenderTargetDWFalse),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&(o.material.transparent&&!o.material.depthWrite&&!o.userData.treatAsOpaque||!!o.userData.cannotReceiveAO))}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),e.setRenderTarget(this.transparencyRenderTargetDWTrue),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&o.material.transparent&&o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),this.scene.traverse(o=>{o.visible=r.get(o)}),e.setClearColor(i,s),this.scene.background=t,e.autoClearDepth=a}configureSampleDependentPasses(){this.firstFrame(),this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer)}configureAOPass(e=!1){this.firstFrame(),this.samples=this.generateHemisphereSamples(this.configuration.aoSamples);let t={...zE};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new Ct(t)):this.effectShaderQuad=new ur(new Ct(t))}configureDenoisePass(e=!1){this.firstFrame(),this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);let t={...BE};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.denoiseSamples),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.poissonBlurQuad?(this.poissonBlurQuad.material.dispose(),this.poissonBlurQuad.material=new Ct(t)):this.poissonBlurQuad=new ur(new Ct(t))}configureEffectCompositer(e=!1){this.firstFrame();let t={...OE};e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&this.configuration.depthAwareUpsampling&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectCompositerQuad?(this.effectCompositerQuad.material.dispose(),this.effectCompositerQuad.material=new Ct(t)):this.effectCompositerQuad=new ur(new Ct(t))}generateHemisphereSamples(e){let t=[];for(let i=0;i<e;i++){let s=2.399963*i,r=Math.sqrt(i+.5)/Math.sqrt(e),a=r*Math.cos(s),o=r*Math.sin(s),l=Math.sqrt(1-(a*a+o*o));t.push(new b(a,o,l))}return t}generateDenoiseSamples(e,t){let i=2*Math.PI*t/e,s=1/e,r=s,a=[],o=s,l=0;for(let c=0;c<e;c++)a.push(new ce(Math.cos(l),Math.sin(l)).multiplyScalar(Math.pow(o,.75))),o+=r,l+=i;return a}setSize(e,t){this.firstFrame(),this.width=e,this.height=t;let i=this.configuration.halfRes?.5:1;this.beautyRenderTarget.setSize(e,t),this.writeTargetInternal.setSize(e*i,t*i),this.readTargetInternal.setSize(e*i,t*i),this.accumulationRenderTarget.setSize(e*i,t*i),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(e*i,t*i),this.configuration.transparencyAware&&(this.transparencyRenderTargetDWFalse.setSize(e,t),this.transparencyRenderTargetDWTrue.setSize(e,t))}firstFrame(){this.needsFrame=!0}render(e,t,i,s,r){e.capabilities.logarithmicDepthBuffer!==this.configuration.logarithmicDepthBuffer&&(this.configuration.logarithmicDepthBuffer=e.capabilities.logarithmicDepthBuffer,this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer)),this.detectTransparency(),this.camera.updateMatrixWorld(),this.lastViewMatrix.equals(this.camera.matrixWorldInverse)&&this.lastProjectionMatrix.equals(this.camera.projectionMatrix)&&this.configuration.accumulate&&!this.needsFrame?this.frame++:(e.setRenderTarget(this.accumulationRenderTarget),e.clear(!0,!0,!0),this.frame=0,this.needsFrame=!1),this.lastViewMatrix.copy(this.camera.matrixWorldInverse),this.lastProjectionMatrix.copy(this.camera.projectionMatrix);let a,o,l;this.debugMode&&(a=e.getContext(),o=a.getExtension("EXT_disjoint_timer_query_webgl2"),o===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.configuration.autoRenderBeauty&&(e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera),this.configuration.transparencyAware&&this.renderTransparency(e)),this.debugMode&&(l=a.createQuery(),a.beginQuery(o.TIME_ELAPSED_EXT,l));let c=e.xr.enabled;e.xr.enabled=!1,this._r.set(this.width,this.height);let h=this.configuration.aoRadius;if(this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(h*=.5),this.frame<1024/this.configuration.aoSamples){this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.logarithmicDepthBuffer,this.depthDownsampleQuad.render(e)),this.effectShaderQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new b),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=h,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectShaderQuad.material.uniforms.frame.value=this.frame,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);for(let f=0;f<this.configuration.denoiseIterations;f++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new b),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=h,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=f,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);e.setRenderTarget(this.accumulationRenderTarget);let u=e.autoClear;e.autoClear=!1,this.accumulationQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.accumulationQuad.material.uniforms.frame.value=this.frame,this.accumulationQuad.render(e),e.autoClear=u}this.configuration.transparencyAware&&(this.effectCompositerQuad.material.uniforms.transparencyDWFalse.value=this.transparencyRenderTargetDWFalse.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrue.value=this.transparencyRenderTargetDWTrue.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrueDepth.value=this.transparencyRenderTargetDWTrue.depthTexture,this.effectCompositerQuad.material.uniforms.transparencyAware.value=!0),this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectCompositerQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=h,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.accumulationRenderTarget.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new b),this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.renderToScreen?null:t),this.effectCompositerQuad.render(e),this.debugMode&&(a.endQuery(o.TIME_ELAPSED_EXT),Om(l,a,this)),e.xr.enabled=c}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Low"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Medium"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12):e==="High"?(this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6):e==="Ultra"&&(this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6)}};var Xa=[10129,-1672,-144,1,9599,-5270,-62,16,21392,1918,-5,124,21990,-6083,-1,71,27923,3878,3,0,7917,4600,8,80,7863,-820,18,-3,11483,522,40,43,2443,-5724,45,-16,8879,741,45,150,21096,-6037,61,-23,29770,887,76,22,18665,-6310,77,-24,6898,1651,87,154,20130,-1116,98,-24,24735,-2643,106,186,11633,2803,116,99,34441,-2962,117,14,19193,-5969,125,-24,31036,4528,125,9,21990,-6084,135,90,15209,1197,136,-9,10466,-2897,150,-21,11365,3189,158,3,18779,-5711,159,160,26340,-3710,162,-23,8128,635,164,-22,8157,2861,165,-13,13830,-6972,167,7,8405,-120,169,-18,33206,-4696,173,-7,8519,-194,174,-20,12238,-4734,175,-14,19351,5596,176,-2,5108,4986,179,48,27604,-3438,179,-3,16593,6175,181,106,10710,-2639,183,67,20689,4931,185,-10,12563,-5951,186,120,26433,-4300,186,41,8988,4495,190,8,25217,-6903,191,145,9943,1640,193,0,13118,-5471,193,4,30641,-5674,194,-12,3795,8926,197,64,9567,-1796,198,-24,14190,-866,199,144,3179,2346,201,115,15499,1984,201,113,1090,-1799,204,102,28382,-2630,205,-13,21167,-3637,206,101,210,2909,207,-4,1743,3562,207,158,8694,-967,207,-17,22268,7416,207,146,34067,-4688,207,161,26373,1256,208,16,4704,4096,209,0,3097,4233,210,137,17726,1457,214,9,1418,6072,215,-5,19038,-4896,220,-2,12090,-4e3,221,-27,13927,-5928,221,19,23367,2671,222,3,13700,-4343,223,166,20098,5493,223,6,30556,4026,223,67,1013,5654,224,117,26915,5149,224,152,8300,-30,225,-18,229,5915,228,38,20497,-5347,229,-17,24008,-2262,229,-12,25254,-3429,229,114,22048,-4739,230,-15,21888,-4216,233,-16,16546,5638,234,3,22125,2707,235,97,32605,988,238,152,26562,-3903,239,-17,657,-4231,240,108,17846,5369,241,4,25759,-1572,243,6,34594,2808,244,166,11102,-2930,245,-8,31964,6259,245,26,14053,-5501,247,-14,31155,3397,248,102,34619,1521,249,0,4557,409,254,163,24929,-1057,254,4,20888,-4729,255,-18,16853,2052,256,13,24136,-1981,256,-6,8318,-1782,258,21,18209,-5072,258,-13,18395,-1754,258,-11,28565,-2988,260,6,22925,-938,261,-7,23607,643,263,117,2866,2081,264,16,8491,-3407,265,-12,8993,3721,265,-8,18860,-2340,265,89,2145,6024,266,16,20867,1840,268,58,22463,-4313,268,-18,7425,3317,269,149,16169,-4942,269,90,18930,-6914,269,-18,26269,-3730,270,-18,10929,-3710,271,162,27525,-2983,272,138,29656,1061,272,151,24359,-369,273,158,24600,6151,273,91,16074,-6439,274,-22,19042,-145,274,37,8386,-591,275,-21,20015,-3671,275,7,22272,-1604,275,15,26587,457,276,117,7696,-509,278,16,24756,2149,278,95,25866,1439,278,116,18379,-5875,279,-19,26261,5230,279,95,23379,-4117,280,-22,8206,-2076,281,81,25032,3160,281,65,644,-7725,282,62,24897,-2822,282,-21,27699,-2542,282,102,331,1518,283,-19,12189,-2430,283,46,23879,-6343,283,32,5853,3188,284,27,26132,-5553,284,148,26296,-4988,284,-14,5687,2411,285,-9,19554,1096,285,93,32676,-1613,285,18,2969,-6157,286,29,29624,4513,286,0,9574,2251,287,162,22973,-6868,287,1,33463,-6026,287,139,4457,-4030,288,13,28744,-2102,288,38,11179,829,289,-10,19401,3832,289,-12,23971,-2611,289,-18,5946,4001,290,-20,24530,-2559,290,30,32289,-557,290,83,4620,5351,291,72,14678,-6507,292,27,34075,3022,293,85,10248,-5061,294,121,18747,-1652,294,-1,33145,-32,295,97,5951,-1351,297,159,8441,2114,297,-15,14646,2377,297,81,27145,-3042,298,98,19973,-2317,299,92,26690,-4013,299,51,28635,1386,299,1,3239,3499,300,14,16742,4450,300,114,23018,7183,300,6,25297,-3805,300,-20,32848,-3736,300,-8,5573,4779,301,-12,9508,-3006,302,-16,10576,-2383,302,-8,18253,-2262,302,133,7549,4382,303,54,19157,-6811,304,-18,21802,3831,304,19,29268,2796,305,109,30525,-1478,305,79,10098,2513,306,138,15558,4150,306,160,28814,6766,307,99,27441,-3676,310,158,13385,595,311,98,16241,-1619,311,123,17395,-6302,311,-4,30939,-4729,311,100,8774,-3577,312,115,13480,4804,312,22,25466,-5599,312,155,25876,2484,312,8,22479,-4210,313,-21,14026,3439,314,155,14281,-5703,316,154,25876,3681,316,144,9944,-4320,317,-10,14321,5168,317,48,25720,6571,317,-12,28141,-2699,317,-11,7663,4123,318,-15,22063,-6498,318,26,7246,696,319,48,7637,-2237,319,146,25442,938,319,116,26746,-3704,319,119,31823,3023,321,99,35484,7763,321,103,23034,-4065,322,-23,24458,-469,323,97,27533,-290,323,94,32217,7056,323,-20,10205,-6194,324,22,30283,-82,324,-7,11231,-4330,325,151,21159,-2668,325,109,22602,-2528,325,167,28474,3269,325,-5,5681,-7424,326,159,983,3086,327,127,26050,-2500,327,-19,34366,-1582,327,7,7823,-1621,329,-11,15343,-7004,329,-7,23123,5897,329,117,6850,-5504,330,-8,15801,-6169,330,-9,9372,2251,331,160,26135,-5638,331,-15,1652,-4672,332,88,4629,3884,332,153,18386,5703,332,8,25804,-4324,332,44,26976,-977,332,99,28674,-2767,332,117,6361,-6247,333,92,16856,1543,333,0,11732,-2486,334,122,2860,6367,335,-15,8112,-240,335,-24,10132,1290,335,44,12757,6072,335,86,29137,311,336,32,23067,-4469,337,-19,13169,642,338,68,20367,-60,338,11,8378,993,339,-16,15427,-6133,339,154,19390,340,339,157,33271,5820,339,156,6717,1587,340,18,2209,-4332,341,154,6017,1249,341,-10,20738,-4169,341,-22,22807,-5210,341,92,31132,6184,341,91,34037,1083,341,-9,2827,2958,342,49,24003,-3840,342,-21,26661,2772,342,75,31124,-6620,342,16,13774,-5897,343,-19,15417,2342,343,31,28656,-488,343,-10,15427,4291,345,3,1228,5782,346,59,1715,-1018,346,116,11919,-5298,346,-18,22888,3331,346,96,4083,324,347,9,20740,-4247,347,-17,15183,1676,348,-3,25072,3892,348,92,2602,-1594,349,73,10543,-2793,349,173,16962,3309,349,140,22549,4039,349,96,27674,-4597,349,-18,34214,-5132,349,8,10246,-3251,350,-12,11003,2198,350,37,34242,6620,350,105,29969,1949,351,157,34250,2460,351,93,5581,-976,352,92,14529,989,352,52,14922,-5457,352,-7,28252,3336,352,0,28443,-2111,352,115,33255,620,352,9,6715,1918,353,101,12413,919,353,148,17325,-3186,354,95,23740,-343,354,-4,26440,-1540,354,26,6447,-3380,355,-11,8674,-1482,355,10,21485,-4606,355,-18,27526,7273,355,49,30218,-6618,355,75,486,-882,356,121,3413,-5151,356,-12,16984,-1478,356,111,25308,-3802,356,-21,11611,2440,357,93,13591,4716,357,1,21796,3037,357,130,23045,-3626,357,153,10952,1654,358,11,30451,-1254,358,88,2450,4863,359,127,7940,-684,359,-12,8612,-2245,359,48,17767,176,359,52,18534,-6040,359,139,2101,-818,360,106,10320,3396,360,10,13007,-5292,360,-17,14268,-4047,360,37,23426,-2814,360,136,26277,-6068,360,-10,4250,2726,361,-10,5120,903,361,89,15265,-1235,361,101,19557,-7155,361,119,26643,-6472,361,116,2287,1535,362,97,5729,2405,362,-7,11631,-3797,362,171,25365,-4236,362,139,34548,4233,362,-10,17640,-6673,363,16,30939,1460,364,42,6495,1563,365,98,14288,6306,365,36,23655,1542,365,7,27166,-5009,365,-10,33721,-2,365,41,23196,2911,366,32,23466,-2978,366,-18,21110,6438,367,-5,31370,-5845,367,125,7280,561,368,-16,13090,-3319,368,-18,29685,1853,368,131,34736,-2117,368,120,924,5390,369,-20,2899,-5161,369,84,7562,4108,369,115,14631,-6251,369,101,17651,4778,369,118,32502,-1666,369,32,4988,-2176,370,161,26944,2925,370,94,34929,328,370,92,7356,244,371,-18,8910,-1417,371,34,11805,-4058,371,101,23770,448,371,15,27184,956,371,16,29883,641,371,86,5323,-946,372,88,5622,2411,372,-10,8988,5428,372,101,31623,4393,372,161,5179,973,373,-8,22156,189,373,0,26838,5687,373,118,32537,-7739,373,101,34315,-758,373,163,2787,-1034,374,114,24548,1915,374,30,31870,3805,374,39,13604,-4710,375,117,26697,271,375,4,8341,-6249,376,64,8783,-2088,376,98,9720,-703,376,-11,28617,-2174,376,101,29243,5173,376,15,33782,5028,376,3,4267,5590,377,169,5630,4258,377,42,6573,1754,377,98,8469,-260,377,-19,12643,-6614,377,113,13016,-4665,377,67,25245,-5904,377,156,30991,1591,377,-6,32167,-2241,377,100,33175,2535,377,44,10719,-7050,378,101,11143,2780,378,102,14775,5904,378,29,16337,-5885,378,94,22029,1373,378,4,31192,-950,378,0,4737,4486,379,98,16333,3421,379,104,16955,3153,379,61,4802,-2899,380,54,11471,-2680,380,-16,23370,1054,380,27,28928,5337,380,95,30341,4674,380,127,6889,-3056,381,96,15697,-5874,381,32,23569,2630,381,2,35439,4646,381,98,3051,276,382,2,13971,3680,382,7,17285,6933,382,161,24773,198,382,2,26487,4601,382,-18,15652,-1684,383,146,20957,-4210,383,-22,22197,-7904,383,143,5605,-6481,384,113,5608,3229,384,2,6714,1596,384,95,13376,-6064,384,-10,15820,931,384,-15,15933,-4823,384,30,18812,-7213,384,-16,27189,2876,384,-2,27344,-2106,384,20,29704,7027,384,89,6350,-4229,385,108,8682,-5107,385,17,9553,-3344,385,86,15368,-4212,385,5,18837,6979,385,-12,18943,-4854,385,5,23911,1566,385,48,27592,2177,385,117,27880,-824,385,132,1419,3850,386,13,6955,-1430,386,108,8280,-3547,386,113,24386,-6369,386,110,24836,-7890,386,92,26906,3725,386,135,33541,-139,386,-6,5646,2437,387,-6,13151,-4604,387,2,20967,-4480,387,-21,22077,-566,387,38,23922,-2921,387,-20,29812,101,387,63,235,-4575,388,101,2838,1929,388,-5,14819,2601,388,122,22798,-4874,388,-3,34759,-4525,388,100,4411,-890,389,109,10353,-2418,389,174,13859,231,389,-6,18498,-67,389,3,29908,3508,389,102,14496,-114,390,131,17025,-5449,390,-16,20276,-3941,390,119,6079,599,391,3,12642,-391,391,-1,18701,-5023,391,-19,22628,-4705,391,-14,23388,-1479,391,101,24494,4631,391,-15,25507,3093,392,-2,29042,-1785,392,23,31896,525,392,55,655,-4368,393,18,2281,-4907,393,97,4356,5276,393,76,6908,-335,393,-21,11546,-7261,393,103,16715,-5898,393,123,24170,-2067,393,-5,27016,293,393,3,1710,-5525,394,-12,11531,-955,394,102,11595,-2895,394,16,13117,1815,394,108,31429,4117,394,3,3086,7242,395,0,9917,-1926,395,104,6217,4771,396,-2,8979,-4282,396,115,13516,4178,396,46,13782,-6232,396,-18,29066,-4446,396,-8,29097,-4062,396,-10,30387,4771,396,145,35074,-2010,396,108,6601,-3402,397,147,8787,3915,397,113,10921,-6796,397,76,13003,-3531,397,94,18291,-5237,397,-16,23774,-3363,397,-4,30015,-7291,397,-3,33732,-4350,397,102,34163,2357,397,107,5974,3579,398,2,32350,4559,398,88,3e3,-2108,399,155,9371,-627,399,132,15610,-7403,399,37,20131,5499,399,17,34936,-5824,399,41,13561,-6640,400,14,17098,1053,400,42,24300,-1946,400,8,2592,5069,401,-10,7138,-325,401,-15,10603,2057,401,90,10870,-2677,401,-15,22049,-3779,401,-16,24047,5857,401,53,24496,-5016,401,108,28076,-7143,401,113,30735,3037,401,40,13263,-2771,402,127,18210,-2473,402,33,28491,1507,402,108,28542,-574,402,108,3433,3385,403,2,7585,6044,403,92,13167,2876,403,101,19365,-5718,403,-18,27136,250,403,86,30830,1130,403,-12,35983,686,403,42,6297,-684,404,33,17646,653,404,150,21630,5185,404,50,33884,-12,404,-8,4727,4961,405,60,12463,-7692,405,41,13110,-4265,405,87,17028,603,405,-6,20737,1580,405,152,21514,-3789,405,-3,21947,-4943,405,-15,34240,-1359,405,157,7409,1351,406,116,11398,2690,406,154,17122,-1768,406,22,18439,-6796,406,160,18461,-6400,406,-17,22091,-3517,406,136,25490,-5316,406,145,21400,-600,407,51,22721,-4528,407,-16,22938,-5880,407,9,33729,5842,407,78,1183,2427,408,110,3544,-6866,408,3,3987,33,408,-21,4560,-2362,408,16,10355,-1204,408,142,14361,-5923,408,-1,16494,-1830,408,108,28383,4395,408,140,31649,-1723,408,-1,32052,1980,408,111,8423,929,409,95,23718,1814,409,162,2420,4141,410,54,4105,4923,410,51,11731,-4637,410,-16,27721,-4907,410,100,28751,-3934,410,116,4017,-3986,411,101,10594,-1563,411,-11,12941,-4299,411,11,14787,-1485,411,92,15887,-7861,411,158,17663,-6118,411,90,23418,-6632,411,116,28737,-3790,411,4,34522,-5275,411,96,3990,-6827,412,-6,6372,4841,412,94,9060,965,412,17,18130,873,412,97,29882,-4187,412,106,31296,-2692,412,163,33744,-4375,412,157,8099,-781,413,94,9724,2021,413,-12,23846,-1673,413,100,31152,-2527,413,43,34151,-8138,413,21,35499,563,413,51,5272,1294,414,111,5658,2395,414,-5,12941,570,414,0,18172,-6461,414,35,23323,3136,414,-13,23940,2688,414,123,32616,2564,414,42,33399,3775,414,145,10797,-49,415,0,26092,3715,415,-1,35510,4433,415,-7,9103,2326,416,84,11228,3178,416,32,24109,-1137,416,46,26159,-2418,416,28,825,6293,417,13,5736,-3620,417,93,33421,-778,417,98,21322,-1027,418,132,21410,4609,418,9,24909,-3526,418,154,33376,5704,418,28,34016,-2704,418,-10,20736,-3445,419,152,28142,2055,419,48,8270,595,420,-14,11921,-2288,420,72,15697,3671,420,91,24853,4244,420,-1,34167,1217,420,50,34399,-3254,420,95,5227,5994,421,42,6634,2229,421,14,25149,8204,421,90,30740,6299,421,20,32161,-6537,421,49,4265,3832,422,34,5671,-2325,422,43,11833,-4810,422,-13,24165,-3680,422,-18,24676,-1846,422,22,27519,7134,422,-9,28179,-475,422,109,28305,-6219,422,-15,28363,3690,422,158,31142,3072,422,105,31935,3939,422,10,34858,-605,422,154,502,-6487,423,58,11583,2888,423,112,19797,2788,423,57,20642,-3304,423,39,21041,154,423,12,24219,4493,423,-4,25077,-7752,423,106,28660,-3706,423,52,32588,5878,423,224,32670,4931,423,-12,1719,8626,424,121,3675,-4770,424,-14,4103,-1386,424,-12,18459,-7931,424,-12,18844,4136,424,59,24785,-3470,424,-17,26535,-1288,424,9,34897,-909,424,111,1894,-6888,425,48,6165,5035,425,-1,6891,1016,425,18,6917,4126,425,117,7729,-875,425,-19,12571,4319,425,155,19336,-4018,425,22,21688,7570,425,143,32636,6112,425,47,1738,4724,426,1,2635,916,426,94,4998,-4307,426,71,5345,-2163,426,-11,6401,-5149,426,31,7351,6634,426,-1,13462,1186,426,14,26414,-3864,426,108,27038,2160,426,41,33095,6463,426,38,1574,789,427,95,4124,1011,427,31,6388,889,427,-5,6954,1251,427,12,7056,2296,427,-11,19673,-4991,427,-18,22963,-4788,427,-9,29080,-4480,427,35,31166,1612,427,104,35199,638,427,106,6658,2281,428,26,14427,8133,428,149,15679,-3107,428,143,26184,-2987,428,40,30335,5657,428,11,32056,-1683,428,89,33250,3318,428,47,34672,-4352,428,42,5422,40,429,57,7989,-1318,429,-24,15983,-5560,429,102,17823,-3391,429,-10,23601,7779,429,4,24778,-1661,429,92,33161,-1387,429,-8,33788,-3235,429,1,35453,4327,429,-8,1465,-2936,430,-15,3704,846,430,-5,5630,2447,430,-11,5715,-3762,430,-4,6637,1793,430,5,8998,4594,430,170,13081,340,430,-19,16390,2475,430,2,17424,-82,430,98,17742,-6379,430,-15,18802,-1620,430,39,21508,-5639,430,8,30441,-1251,430,93,13015,-5976,431,-12,21673,-8367,431,130,23112,3738,431,31,24185,-2087,431,83,30958,-111,431,95,5412,4819,432,-6,7011,-1967,432,160,8305,1859,432,206,9384,2950,432,102,13159,-1355,432,90,14293,2297,432,154,18076,-6331,432,28,19750,1753,432,46,20796,-3299,432,-15,22291,-4358,432,-15,26021,-1285,432,4,11204,893,433,142,19328,-4894,433,134,21655,-4538,433,43,25884,-2660,433,86,27215,-6367,433,23,27497,3606,433,116,922,3372,434,-12,964,2931,434,87,1778,5515,434,17,8619,-6574,434,22,9796,-2342,434,-24,12516,-7748,434,116,13905,-5754,434,160,14421,-4936,434,17,21043,-4560,434,60,23451,-4257,434,141,26163,414,434,148,28119,3761,434,19,28176,1818,434,15,32613,1735,434,116,33738,4771,434,168,4791,1973,435,103,7265,890,435,1,9874,-5298,435,-2,10432,5842,435,85,12198,-6862,435,-11,13211,584,435,-4,18673,2827,435,113,22946,-3015,435,110,26305,8659,435,2,27581,-6149,435,146,28909,3813,435,126,32624,-3303,435,-5,789,-6296,436,-6,1084,-5746,436,2,3325,885,436,88,5264,4800,436,137,6117,2208,436,106,7322,-545,436,26,7831,-1294,436,-9,8938,-3528,436,-16,10403,-1705,436,-6,12215,-298,436,97,21151,-4118,436,-20,29418,-129,436,-8,49,-601,437,163,9414,-3514,437,98,10968,-2495,437,-13,16504,-4223,437,12,27219,2081,437,-16,29993,-3528,437,-15,19749,-554,438,-1,30222,7771,438,-5,35151,-2064,438,146,35324,-3782,438,-10,2841,-4630,439,160,5738,6553,439,187,8371,949,439,-16,8860,2028,439,59,9594,459,439,22,12057,233,439,125,15198,1e3,439,145,22573,209,439,103,25350,1017,439,-9,26025,-2111,439,39,29502,1801,439,78,29526,1748,439,104,31997,-5345,439,19,1430,2342,440,94,11702,-2594,440,-7,12226,-1924,440,-16,28424,-6723,440,53,32948,-5499,440,30,10246,-5362,441,90,10778,3025,441,126,21576,-3951,441,-18,26268,2611,441,143,26963,3019,441,38,31948,3490,441,-10,34697,7539,441,80,34948,-918,441,-14,34971,-3253,441,111,9189,1477,442,-16,9947,-1824,442,114,10838,-4464,442,133,10856,-2635,442,-17,12351,-4035,442,117,16558,2018,442,5,22257,-2796,442,137,23661,735,442,60,27044,131,442,5,33589,5223,442,101,35134,2340,442,62,5654,-1210,443,160,6382,-765,443,82,7432,5375,443,-2,28844,3915,443,-15,30066,-2771,443,164,30597,3219,443,133,31086,1507,443,30,31193,-503,443,164,366,-1893,444,164,1217,759,444,150,6412,-5930,444,108,7014,-4186,444,34,9491,5901,444,3,11351,-2230,444,52,12284,-3962,444,159,12464,-3666,444,22,21815,-5046,444,-18,29218,2466,444,150,2536,549,445,135,4227,-3241,445,98,7807,-1187,445,-10,9298,1421,445,-18,12969,334,445,122,13502,-4125,445,65,15890,-5756,445,160,16145,-8054,445,-19,16917,-365,445,21,24803,-2147,445,13,28889,7336,445,126,29352,738,445,118,3727,6740,446,15,5857,-295,446,67,7832,286,446,117,13722,5160,446,29,16791,-2283,446,2,18202,-5066,446,-16,24680,-4755,446,-7,34313,-3288,446,-4,4128,-1857,447,48,5008,2905,447,156,7464,171,447,137,9704,-3258,447,-17,9823,733,447,2,11956,-4924,447,-18,13629,-7260,447,61,14116,2618,447,122,14371,5205,447,3,17779,-4517,447,128,21867,2975,447,36,22430,-435,447,32,31862,1001,447,53,33153,-3954,447,135,1118,4828,448,-7,6022,-6216,448,150,6659,1562,448,26,10197,241,448,110,15198,-37,448,-3,23084,-5932,448,17,24603,-2004,448,100,34597,382,448,-12,34667,-2374,448,89,3049,7091,449,16,6838,-2977,449,97,10100,1323,449,117,10814,-4676,449,32,11816,-3886,449,-19,15186,3524,449,19,22018,1642,449,0,29411,5022,449,40,31678,-2501,449,160,32604,2874,449,51,35551,178,449,20,35568,-1454,449,-3,35998,-6558,449,-8,8480,412,450,-10,8746,-5617,450,108,13168,-5677,450,-17,15523,-5604,450,-10,17700,2022,450,55,20682,1746,450,51,30394,2781,450,126,31740,-1137,450,93,32218,-2181,450,89,33210,-3299,450,5,33347,3971,450,138,34013,4428,450,132,458,3679,451,5,1792,3009,451,109,8729,3918,451,95,14231,-3595,451,141,14484,-6133,451,-7,23539,1967,451,6,30070,6787,451,131,31101,-5192,451,28,32427,-1947,451,-18,33683,-6497,451,-3,35860,5750,451,119,4198,2925,452,111,20066,-6099,452,-14,20100,-6454,452,82,21478,-1337,452,13,22611,2695,452,124,27281,-4595,452,101,29043,-1596,452,8,31134,5758,452,54,32249,2364,452,162,33762,4312,452,-9,789,-6297,453,15,1245,4108,453,-14,9001,-307,453,120,11434,-3497,453,-8,21337,5179,453,23,26166,-509,453,38,26689,-2783,453,60,31185,3649,453,-8,34814,4941,453,30,7954,3337,454,125,9876,-2296,454,-4,14300,-118,454,11,14356,3640,454,91,14362,6983,454,78,22285,1910,454,72,22806,-1979,454,-7,23079,-3686,454,-16,29924,-2717,454,146,34675,941,454,156,35229,1276,454,94,94,-1734,455,-5,5248,5888,455,49,7610,-3548,455,118,10502,7698,455,136,11245,1201,455,128,14803,5406,455,4,23397,-4496,455,-18,24516,-2417,455,76,27202,-2846,455,94,32548,7131,455,111,33526,4654,455,-10,33613,4948,455,9,4288,3506,456,155,5969,-6140,456,159,8833,2761,456,-1,13663,3845,456,104,16880,2310,456,166,21653,-4522,456,-15,26392,-4651,456,-2,31303,2710,456,84,31665,4765,456,157,5427,-4027,457,102,24635,1403,457,0,24640,-2345,457,23,26548,7215,457,43,28369,2265,457,78,28709,-4050,457,107,29837,2408,457,-5,8385,-484,458,-18,14792,-4655,458,117,16088,-6057,458,170,19807,-5992,458,-7,20786,6472,458,157,24308,-2793,458,-17,26446,-812,458,13,35016,2374,458,18,1033,-4608,459,95,5571,-3731,459,119,5759,7133,459,6,8171,310,459,-20,13005,6433,459,118,14229,-277,459,41,15490,-5503,459,160,16815,-6032,459,54,23740,2607,459,79,23840,-2533,459,-7,28109,3961,459,18,29418,-2488,459,-8,35723,-2813,459,0,6456,5030,460,4,15128,-1306,460,-9,16418,-3714,460,101,22131,1696,460,97,23133,-3873,460,0,23817,4245,460,56,29017,6571,460,3,133,-571,461,103,427,3868,461,6,2839,319,461,93,4782,3961,461,112,11168,4921,461,0,11997,-1840,461,9,23354,-1006,461,100,30848,3525,461,159,1417,5918,462,96,5998,-2402,462,-12,7577,2159,462,16,8298,-730,462,-26,13701,-2586,462,159,16625,734,462,33,16664,-6242,462,99,17369,-5426,462,-8,19159,-5649,462,-15,19366,-5915,462,-15,24695,-837,462,18,27012,-369,462,39,27838,-4231,462,99,28405,420,462,16,4480,2134,463,5,11588,-2841,463,163,11827,-4961,463,-23,13092,-723,463,84,13894,-3741,463,47,18997,-3999,463,-8,20518,5468,463,163,22440,6593,463,159,23774,-2575,463,-7,24088,-5778,463,25,27784,-6228,463,-12,28280,5939,463,118,35944,2514,463,158,5843,-2461,464,-14,7372,1015,464,8,9098,2014,464,24,20666,-5143,464,96,23484,3664,464,-10,23530,-4466,464,41,25246,-1078,464,48,25942,3729,464,4,27183,873,464,95,29163,34,464,58,30883,1467,464,12,33934,5155,464,25,34605,5005,464,106,4086,2771,465,-12,6846,1484,465,26,7614,1540,465,-6,8853,-6309,465,102,10958,-3673,465,-10,11268,-3096,465,90,11385,-2837,465,-11,15685,-5764,465,47,18022,661,465,12,24080,-4923,465,90,1786,2103,466,102,2740,-1069,466,33,10024,990,466,-23,10391,-2014,466,37,10915,-2788,466,159,13082,2147,466,1,13641,-7054,466,-15,16349,4319,466,-4,18981,-800,466,124,19065,-4881,466,108,23494,-3441,466,96,27126,-2958,466,77,27451,-2704,466,163,27591,-893,466,93,30028,2775,466,18,1844,2458,467,105,5234,4951,467,-10,6372,4048,467,101,6982,1592,467,15,9154,-1494,467,5,12305,1765,467,53,13773,6351,467,38,27001,1675,467,125,27730,-1457,467,8,28108,3967,467,17,29309,6966,467,79,31532,-3226,467,89,2348,5923,468,99,2873,-6765,468,93,3112,-2930,468,-16,4469,3966,468,6,13408,-5272,468,-12,14461,465,468,131,15005,804,468,159,15968,3198,468,82,20299,-626,468,161,20361,4902,468,13,24509,-7870,468,168,29484,3015,468,97,32444,-785,468,18,34090,-1883,468,136,6665,1471,469,98,7979,4010,469,63,11458,-2536,469,-10,11708,-4708,469,104,12031,-139,469,148,15969,-5918,469,156,19141,-6098,469,105,32552,5119,469,-12,33084,-5679,469,106,35377,-4262,469,8,8011,-2124,470,-5,17417,-980,470,-7,17505,-3474,470,-7,25350,-4236,470,44,28057,-905,470,36,29896,-2630,470,75,31759,1013,470,26,34360,8435,470,142,35332,-2091,470,2,4493,891,471,-11,5234,-6294,471,41,7313,1425,471,177,7638,-5747,471,53,8243,-109,471,159,8318,3219,471,28,14037,-2597,471,163,14080,-2883,471,89,17619,-1835,471,96,19657,-4846,471,-15,20941,-6369,471,108,29856,846,471,102,31948,-3217,471,7,34748,-2246,471,67,2148,6813,472,105,8044,-38,472,-17,8776,3731,472,162,9257,-5497,472,-23,12282,-1293,472,94,14183,-2234,472,115,15648,3380,472,26,15758,-7199,472,4,15831,4043,472,22,18108,-6317,472,-8,18518,1779,472,101,19939,4057,472,31,24070,4604,472,-9,25915,-45,472,112,32566,-1887,472,87,3641,5028,473,153,10366,1318,473,32,12286,-4299,473,16,16546,-248,473,159,24162,-4517,473,23,24224,3649,473,101,31316,-898,473,32,794,5452,474,-10,1987,2726,474,3,3802,-1524,474,45,3995,-4289,474,6,5e3,6565,474,-11,5265,-508,474,-9,12225,-6130,474,44,13030,-4732,474,14,13564,6763,474,154,19960,-1831,474,71,21248,-5344,474,94,23782,2098,474,153,26995,-2382,474,-3,28578,-4210,474,-3,29294,3445,474,-15,31496,4752,474,-8,33083,-216,474,-10,35446,-4549,474,8,10866,-4827,475,-9,17706,-6681,475,152,20830,-3193,475,-11,21404,5137,475,24,23549,-1968,475,157,23567,-3471,475,-15,30890,-6058,475,29,34966,6811,475,84,785,-4880,476,2,4262,-7507,476,134,4276,-2100,476,91,8811,186,476,138,9471,6932,476,2,11942,-3033,476,15,14532,-2359,476,-12,16056,-6447,476,-14,16978,3819,476,11,18601,5156,476,88,19473,1741,476,157,20186,-1597,476,110,20795,3444,476,161,21565,-5846,476,80,26050,-6777,476,119,26510,-4942,476,42,28905,2139,476,-6,32448,6208,476,25,34678,2547,476,128,1105,-1061,477,100,4638,5671,477,102,8472,-721,477,14,10183,804,477,140,13994,-1197,477,93,17258,-300,477,153,19359,-954,477,159,26424,6876,477,43,27077,-818,477,41,27814,5705,477,61,30089,-3794,477,142,30445,3803,477,38,30517,-1276,477,-5,30722,-1781,477,39,34187,8315,477,126,40,-7707,478,125,1325,-114,478,155,3212,3786,478,12,5651,6334,478,75,6764,1619,478,17,7498,-1254,478,27,8376,-600,478,-25,12211,5151,478,5,12337,-3590,478,-11,14605,-2777,478,52,15493,1947,478,45,18563,2585,478,52,19940,547,478,164,21518,-4519,478,31,21577,-2775,478,130,26285,-2396,478,2,26755,-4009,478,26,28136,-6487,478,20,33533,2833,478,-1,33696,470,478,104,365,2021,479,157,2948,2360,479,29,7316,3670,479,141,12563,-4849,479,-15,14024,-6240,479,93,19881,-6789,479,-8,23781,3566,479,100,24755,-2512,479,-12,26729,-3170,479,-3,27007,437,479,-10,30382,2559,479,-18,33245,7234,479,92,33390,-4135,479,79,1052,5051,480,-10,1327,6112,480,54,4896,-882,480,23,6539,4650,480,-2,6602,1744,480,15,7536,-717,480,-16,9983,4249,480,124,13760,6713,480,49,13905,5402,480,20,14012,-956,480,91,16103,-6396,480,-13,18871,2263,480,1,19679,2762,480,148,21221,7755,480,137,21450,3551,480,106,22086,2653,480,167,22553,2501,480,151,24457,-2861,480,1,25933,3310,480,-17,30333,4682,480,10,31331,4439,480,-13,32019,-4081,480,3,33632,138,480,-17,34044,2931,480,-1,7742,1560,481,31,7844,-6719,481,127,7937,-3490,481,99,8950,2595,481,-9,12008,-6357,481,-17,14377,3962,481,99,17115,-1086,481,156,21705,-223,481,69,27634,-2054,481,131,30963,2120,481,-3,31223,4611,481,57,2929,-4739,482,86,7836,3848,482,19,9982,-1415,482,146,10339,-2022,482,-21,11345,-1452,482,136,15558,-4165,482,110,15766,5598,482,54,18663,-5145,482,-14,20437,3629,482,24,21260,2509,482,54,24057,2280,482,7,24552,103,482,34,25231,4598,482,9,25526,-422,482,148,27650,6556,482,118,28360,7130,482,115,31610,-1986,482,17,33538,1221,482,-13,33766,-1068,482,-5,34944,4902,482,167,35544,-1782,482,82,1375,5897,483,122,2191,4541,483,42,3989,-1187,483,45,4139,-6762,483,6,10721,-3966,483,-18,10915,-2332,483,160,12535,-3305,483,142,13061,-5311,483,-17,19589,-4953,483,3,22595,4765,483,65,22821,-4450,483,-18,24716,4188,483,129,25621,-3412,483,26,28152,2666,483,120,28427,-585,483,106,28468,-3711,483,40,2255,614,484,137,3331,4423,484,148,3426,3422,484,61,4984,337,484,68,6348,926,484,80,8532,1653,484,-12,11486,-3831,484,-19,12883,-5801,484,98,16514,362,484,114,17632,826,484,17,21494,1631,484,123,24815,1149,484,150,25023,6459,484,121,25132,5678,484,38,29974,-2620,484,88,34087,-4141,484,103,34141,-5350,484,118,34665,5942,484,-6,4798,7439,485,4,4968,3422,485,149,11246,-2302,485,24,15223,-5181,485,-12,19801,-3780,485,69,22941,-6361,485,126,26920,-4434,485,118,27522,338,485,91,28462,-5294,485,-5,698,-3301,486,163,4959,-2251,486,90,10156,5944,486,8,12993,-2956,486,90,15877,7571,486,96,19930,-6678,486,148,21584,845,486,1,22041,816,486,99,24552,3089,486,97,24852,-4405,486,4,24969,4893,486,156,26307,5517,486,28,26586,-2168,486,47,28108,-3564,486,-17,28354,-2274,486,141,28889,-2526,486,57,30940,-6153,486,45,33142,506,486,144,2059,4553,487,108,3897,559,487,88,4873,2104,487,-1,6360,-1026,487,116,10831,-4518,487,0,13043,-1594,487,106,13388,-2768,487,14,14855,-2593,487,120,15931,-2741,487,163,16171,-6438,487,-15,29659,-1976,487,106,32369,3853,487,108,3649,-1229,488,-3,8191,2194,488,-14,8725,2457,488,102,8828,-3380,488,-15,10967,-2456,488,-16,17991,-7822,488,-5,19047,1024,488,8,19507,3078,488,116,25401,6513,488,48,26945,-4172,488,162,28088,-828,488,111,28941,-1895,488,101,29380,-4810,488,110,35676,5865,488,112,35967,-356,488,93,35975,5575,488,-7,282,-1547,489,49,7248,3749,489,145,8119,185,489,-20,8739,1265,489,-7,11479,3458,489,41,11653,1851,489,142,15784,-5372,489,50,15939,-1338,489,280,17663,-4050,489,66,17796,-6521,489,-12,19332,2124,489,90,21456,-8101,489,24,25634,1274,489,12,26304,5518,489,25,29607,3735,489,95,31249,-3378,489,100,33982,3905,489,-21,35251,5855,489,-12,1221,5097,490,-9,2141,-1460,490,123,8562,147,490,114,10440,4509,490,3,19267,-3400,490,-3,19856,-5910,490,49,24085,-3860,490,-15,24136,-1980,490,-2,24712,-7008,490,56,29777,2261,490,-15,31237,-4623,490,149,4056,4019,491,58,6797,-4,491,132,7536,-2005,491,-5,7686,1865,491,66,9500,-294,491,161,10756,-424,491,102,10791,3932,491,145,15965,-1688,491,92,19049,-5969,491,-4,20370,3718,491,40,22524,-852,491,0,22866,-3152,491,37,25039,-1774,491,110,25633,5447,491,47,29891,5244,491,12,30741,-289,491,116,30918,-255,491,161,33825,-6198,491,161,34381,882,491,0,2917,-2253,492,143,9046,-1060,492,-13,9125,-1648,492,20,9622,4929,492,190,10597,-4958,492,14,11277,8241,492,163,13890,-3857,492,108,16633,-2729,492,37,18660,2727,492,28,20353,366,492,3,20743,2126,492,143,22125,-3519,492,1,23105,-1032,492,45,27171,-4343,492,26,27507,2196,492,159,27794,-4591,492,-10,28331,5071,492,90,31122,2527,492,118,6271,-4199,493,33,6432,2058,493,26,6510,3457,493,95,7481,3789,493,4,11392,-5253,493,137,11575,5871,493,10,11993,-368,493,120,13424,-5923,493,-18,14556,-2392,493,53,17307,-2926,493,54,17522,-6209,493,111,18409,2395,493,96,19292,2754,493,68,19518,5637,493,37,21271,-1630,493,168,22275,-230,493,99,22683,2487,493,43,24300,-1006,493,9,29422,-703,493,-5,30185,-5288,493,159,30236,3684,493,-14,30363,3681,493,15,31179,3437,493,129,34921,-773,493,161,35600,2936,493,94,3309,3030,494,77,4477,3518,494,124,10407,-4872,494,167,11056,-1902,494,-4,12088,2779,494,113,13245,-4531,494,4,14872,-1901,494,156,15603,6557,494,-5,15776,-7322,494,168,19726,-2312,494,105,19843,4015,494,106,24700,6877,494,-5,28500,3215,494,146,30357,1520,494,7,30751,4895,494,-9,33254,-3255,494,49,1087,4702,495,17,2002,5823,495,68,5936,6307,495,-7,8521,-113,495,-20,9301,1613,495,-15,17198,286,495,100,18868,7002,495,131,23955,-1428,495,-8,24337,-5463,495,102,24438,7576,495,39,29897,3849,495,-9,30044,-5938,495,136,34301,4331,495,156,35173,126,495,4,35660,349,495,251,2515,4058,496,-7,2545,4261,496,62,3846,-2823,496,-5,5036,4333,496,5,6711,1636,496,114,7982,2210,496,94,8871,5571,496,5,20747,-1813,496,106,23945,5475,496,27,24084,-2587,496,123,27151,2222,496,166,27293,-2370,496,106,27298,3141,496,164,35121,6228,496,168,1880,-4553,497,57,2900,6869,497,-8,5559,3397,497,-5,6033,-6108,497,139,6509,2735,497,115,8887,-3712,497,110,11837,2677,497,10,15574,-6690,497,-13,18509,331,497,117,20211,1378,497,71,21704,-2949,497,-7,23507,-2382,497,130,24425,-5007,497,79,25578,1409,497,160,35349,3133,497,138,35495,-1422,497,26,35651,4642,497,109,2568,-369,498,138,3236,2594,498,34,4470,-6407,498,13,7667,5160,498,34,8382,-539,498,60,8385,-542,498,-10,11510,-1526,498,154,13001,-1248,498,142,16519,610,498,17,17749,-7023,498,136,18675,2683,498,9,23295,4090,498,9,24036,2985,498,-5,27598,5880,498,8,28406,420,498,20,29014,-542,498,94,29898,5885,498,158,113,-1051,499,162,3058,5449,499,-7,5201,4906,499,-9,5556,-3194,499,-16,5928,6111,499,144,6972,-1212,499,7,8071,354,499,-10,10269,4178,499,126,10272,-3437,499,138,10573,-424,499,-20,11141,928,499,99,12333,-1579,499,107,13649,509,499,119,13777,-4487,499,22,14299,1130,499,105,17071,4348,499,100,18413,3306,499,114,20544,-5456,499,-6,21307,241,499,-12,23053,-4793,499,52,23080,3029,499,58,23988,-4174,499,99,27347,6440,499,44,29103,2962,499,-12,30108,-3206,499,121,33211,-3404,499,150,34411,4973,499,178,34974,-961,499,-2,6111,5916,500,50,8111,1738,500,54,9188,-3725,500,-10,9394,-1372,500,-8,10403,-1404,500,118,10963,4946,500,9,14430,684,500,105,17080,-3616,500,146,17588,-6249,500,78,23285,7735,500,154,24202,1705,500,93,26977,-3025,500,165,27187,4346,500,91,28378,-2267,500,135,28536,4693,500,19,28848,5771,500,116,29365,1977,500,-9,29661,3373,500,48,35940,-6430,500,6];var Hs=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Sh={low:{name:"\u7701\u96FB",dpr:1,shadow:1024,post:!1,ao:0,bloom:!1,dof:!1,leaves:0,hedgeLeaves:0,shells:0,rockDetail:1,smoothRocks:!1,env:!1,gravelW:1200,cube:64,waterN:!1,grass:!1},mid:{name:"\u6A19\u6E96",dpr:1.5,shadow:2048,post:!0,ao:1,bloom:!0,dof:!1,leaves:650,hedgeLeaves:110,shells:3,rockDetail:5,smoothRocks:!0,env:!0,gravelW:1600,cube:128,waterN:!0,grass:!0},high:{name:"\u7CBE\u7DFB",dpr:2,shadow:4096,post:!0,ao:2,bloom:!0,dof:!0,leaves:1300,hedgeLeaves:230,shells:5,rockDetail:8,smoothRocks:!0,env:!0,gravelW:2e3,cube:192,waterN:!0,grass:!0}},vr=null;try{vr=(JSON.parse(localStorage.getItem("karesansui-v1")||"{}")||{}).quality}catch{}Sh[vr]||(vr=Hs?"mid":"high");var dt=Sh[vr],z=n=>document.getElementById(n),O={ctx:null,on:!0};function Yh(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Se=Yh(20261110),Dt=(n,e,t)=>Math.max(e,Math.min(t,n));function xl(n,e,t){let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function Ni(n,e,t=0){let i=n.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),a=i.getY(s),o=i.getZ(s),l=1+(xl(Math.round(r*50)+t,Math.round(a*50),Math.round(o*50))-.5)*e;i.setXYZ(s,r*l,a*l,o*l)}return n.computeVertexNormals(),n}var me=(n,e={})=>new At({color:n,roughness:e.r??.9,metalness:0,flatShading:!!e.flat,side:e.side??ls,...e.extra||{}});function Un(n,e=!0,t=!0){n.traverse(i=>{i.isMesh&&(i.castShadow=e,i.receiveShadow=t)})}var li;try{li=new zo({canvas:z("c"),antialias:!0})}catch(n){throw window.__zgFail&&window.__zgFail("nogl"),n}z("c").addEventListener("webglcontextlost",n=>{n.preventDefault(),window.__zgFail&&window.__zgFail("lost")});li.setPixelRatio(Math.min(devicePixelRatio,dt.dpr));li.setSize(innerWidth,innerHeight);li.shadowMap.enabled=!0;li.shadowMap.type=Of;li.toneMapping=jo;li.toneMappingExposure=1.05;var GE=new Ko;function ea(n,e,t=!0){let i=GE.load(n);return i.wrapS=i.wrapT=$n,e&&i.repeat.set(e[0],e[1]),t&&(i.colorSpace=tn),i.anisotropy=8,i}var Re=new Oo,v1=new we("#dde4e2");Re.background=v1;Re.fog=new Fc(v1,30,75);var Th=new W(new Xe(150,32,16),new Ct({side:Mn,depthWrite:!1,fog:!1,uniforms:{top:{value:new we("#9fb6cc")},bottom:{value:new we("#dde4e2")}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top;uniform vec3 bottom;varying vec3 vP;void main(){float t=smoothstep(-0.02,0.55,vP.y);gl_FragColor=vec4(mix(bottom,top,t),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));Th.renderOrder=-10;Re.add(Th);var Li=null,bh=null,x1=null,td=null,yl="";if(dt.env){Li=new il,Li.scale.setScalar(100),Li.material.uniforms.envGain={value:.05},Li.material.fragmentShader=Li.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform float envGain;`).replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min(retColor*envGain,vec3(3.0)), 1.0 );"),bh=new Oo,bh.add(Li),x1=new Na(li);let n=Li.material.uniforms;n.turbidity.value=5,n.rayleigh.value=1.4,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.8}function Dd(n,e){if(!dt.env)return;let t=Math.round(n*4)/4+"|"+it+"|"+(dn>.3)+"|"+Math.round(wt.sun.x*20)+Math.round(wt.sun.z*20);if(!e&&t===yl)return;yl=t;let i=wt.sun.clone();i.y<-.25&&(i.y=-.25,i.normalize()),Li.material.uniforms.sunPosition.value.copy(i),Li.material.uniforms.turbidity.value=dn>.3?12:it==="summer"?8:5,Li.material.uniforms.envGain.value=.045*Math.max(.12,Math.min(1,i.y*3+.35));let s=n>=19.2||n<4.8?"night":n<8.5||n>=16.3?"morning":"day",r=y1[s];if(r.tex){Li.visible=!1,Ii.visible=!0,Ii.material.map=r.tex,Ii.material.needsUpdate=!0;let o=Math.max(0,Math.min(1,i.y*2.2+.25)),c=(s==="night"?.035:s==="morning"?.08+.08*o:.15)/r.avg*(dn>.3?.75:1);Ii.material.color.setRGB(c,c,c),dn>.3&&Ii.material.color.lerp(new we(c*.95,c,c*1.03),.5),s==="morning"&&n>=12&&Ii.material.color.multiply(new we(1.08,.94,.82));let h=Math.atan2(i.z,i.x);Ii.rotation.y=Math.PI-2*Math.PI*r.sunU-h}else Li.visible=!0,Ii&&(Ii.visible=!1),VE(s,n);let a=td;td=x1.fromScene(bh,.02),Re.environment=td.texture,a&&a.dispose()}var y1={morning:{url:"assets/env_morning.js",sunU:.598},day:{url:"assets/env_day.js",sunU:.574},night:{url:"assets/env_night.js",sunU:.34}},Ii=null;dt.env&&(Ii=new W(new Xe(50,48,24),new Dn({side:Mn,toneMapped:!1})),Ii.visible=!1,bh.add(Ii));function VE(n,e){let t=y1[n];if(t.loading||t.failed)return;t.loading=!0,(t.url.startsWith("data:")?Promise.resolve(t.url):import(new URL(t.url,location.href).href).then(s=>s.default)).then(s=>new ch().setDataType(jt).load(s,r=>{let a=r.image.data,o=r.image.width*r.image.height,l=tl.fromHalfFloat,c=0,h=0;for(let u=0;u<o;u+=7){let f=Math.floor(u/r.image.width),d=Math.sin((f+.5)/r.image.height*Math.PI),g=.2126*l(a[u*4])+.7152*l(a[u*4+1])+.0722*l(a[u*4+2]);c+=Math.min(g,8)*d,h+=d}t.avg=Math.max(.02,c/h),r.mapping=Do,t.tex=r,t.loading=!1,yl="",Dd(na(),!0)},void 0,()=>{t.failed=!0,t.loading=!1})).catch(()=>{t.failed=!0,t.loading=!1})}var ut=new Kn(50,innerWidth/innerHeight,.1,200),ph=new Qc("#eef3f6","#6a6656",1.15);Re.add(ph);var Ei=new Jc("#fff1dc",1.9);Ei.position.set(-13,26,-5);Ei.castShadow=!0;Ei.shadow.mapSize.set(dt.shadow,dt.shadow);Object.assign(Ei.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:70});Ei.shadow.bias=-5e-4;Ei.shadow.normalBias=.03;Re.add(Ei);var $a="karesansui-v1",M1="karesansui-v1-gravel";function Zh(n){try{return localStorage.getItem(n)}catch{return null}}function _h(n,e){try{return localStorage.setItem(n,e),!0}catch{return!1}}var pe={};try{pe=JSON.parse(Zh($a)||"{}")||{}}catch{pe={}}var E1=Date.now(),Rh=pe.last||0,Id=!Rh||E1-Rh>1800*1e3,no=(pe.visits||0)+(Id?1:0),md=Rh?(E1-Rh)/864e5:0,gd=1+Math.min(.3,(no-1)*.012),Bm=0,Hm=0,Rn=null;pe.moods=pe.moods&&typeof pe.moods=="object"?pe.moods:{};pe.notes=Array.isArray(pe.notes)?pe.notes:[];pe.days=Array.isArray(pe.days)?pe.days:[];{let n=new Date,e=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();pe.days.includes(e)||pe.days.push(e),pe.days.length>800&&(pe.days=pe.days.slice(-800))}var Wr={value:0},fl={mist:dh("mist")<.4,dragon:dh("dragonfly")<.6,frog:dh("frog")<.55,tanuki:dh("tanuki")<.18},ks=Object.assign({music:75,amb:75,on:!0},pe.vol||{});O.on=ks.on!==!1;var Ge={x0:-12,x1:12,z0:-3.5,z1:10};Ge.w=Ge.x1-Ge.x0;Ge.d=Ge.z1-Ge.z0;var gr=dt.gravelW,Ml=Math.round(gr*Ge.d/Ge.w),Vn=gr/Ge.w,dl=.18,Xr={x:-10.6,z:8.4},Sn={x:10.2,z:8.4},mn={x:-10.35,z:-2.3},_t={x:7,z:7.15,rx:2.45,rz:1.4},El=n=>1+.08*Math.sin(3*n+1)+.05*Math.sin(5*n+.3);function Qh(n,e){let t=(n-_t.x)/_t.rx,i=(e-_t.z)/_t.rz;return Math.hypot(t,i)/El(Math.atan2(i,t))}var Qr=(n,e)=>(Qh(n,e)-1)*(_t.rx+_t.rz)/2,Ya=[[5.05,6.85],[6.05,7.45],[7.15,7],[8.25,7.5],[9.15,7.05]],wl=[{k:"d0",x:-7.2,z:-.6,moss:1.9,rot:0,scale:1,seed:7,rocks:[[-.4,-.4,2.5,.62],[.5,.1,1.7,.55],[-1.1,.4,1.1,.5],[.2,1.05,.75,.5],[1.1,-.55,.6,.42]]},{k:"d1",x:-2.4,z:.8,moss:1.25,rot:0,scale:1,seed:38,rocks:[[-.2,-.2,1.5,.5],[.5,.35,.85,.45],[-.55,.5,.5,.4]]},{k:"d2",x:-5.2,z:5.6,moss:.95,rot:0,scale:1,seed:69,rocks:[[0,0,1.15,.85]]},{k:"d3",x:2.4,z:3.2,moss:1.05,rot:0,scale:1,seed:100,rocks:[[-.2,-.1,.75,.6],[.45,.45,.5,.45]]},{k:"d4",x:6.8,z:-.8,moss:.7,rot:0,scale:1,seed:131,rocks:[[0,0,.55,.5]]}],fi=Array.isArray(pe.layout)&&pe.layout.length<=24?pe.layout:JSON.parse(JSON.stringify(wl)),w1=()=>JSON.stringify(fi.map(n=>[n.x.toFixed(2),n.z.toFixed(2),(n.rot||0).toFixed(2),(n.scale||1).toFixed(2),n.seed,n.moss]));function WE(){return[...fi.map(n=>({x:n.x,z:n.z,R:n.moss*(n.scale||1)+.12})),{x:Xr.x,z:Xr.z,R:.75},{x:Sn.x,z:Sn.z,R:.55},{x:mn.x-.35,z:mn.z-.1,R:.95}]}var oo=document.createElement("canvas");oo.width=gr;oo.height=Ml;var xr=oo.getContext("2d"),Kh=document.createElement("canvas");Kh.width=gr;Kh.height=Ml;function S1(){let n=xr.createImageData(gr,Ml),e=n.data,t=dl*6,i=WE(),s=(_t.rx+_t.rz)/2;for(let r=0;r<Ml;r++){let a=Ge.z0+(r+.5)/Vn;for(let o=0;o<gr;o++){let l=Ge.x0+(o+.5)/Vn,c=1e9;for(let p=0;p<i.length;p++){let y=i[p],v=l-y.x,w=a-y.z,C=Math.sqrt(v*v+w*w)-y.R;C<c&&(c=C)}let h=(l-_t.x)/_t.rx,u=(a-_t.z)/_t.rz,f=(Math.sqrt(h*h+u*u)/El(Math.atan2(u,h))-1)*s-.38;f<c&&(c=f);let d;if(c<0)d=.94;else{let y=(c<t?c/dl:(a+.28*Math.sin(l*.33+.6)+.1*Math.sin(l*1.1))/dl)*Math.PI*2;d=.9+.075*Math.cos(y)+.045*Math.sin(y)}let g=(Math.random()-.5)*.09;Math.random()<.012&&(g-=.13);let x=d+g,m=(r*gr+o)*4;e[m]=226*x,e[m+1]=223*x,e[m+2]=215*x,e[m+3]=255}}xr.putImageData(n,0,0),Kh.getContext("2d").drawImage(oo,0,0)}S1();var XE=!1;try{let n=JSON.parse(Zh(M1)||"null");if(n&&n.sig===w1()&&n.img){let e=new Image;e.onload=()=>{xr.drawImage(e,0,0,gr,Ml),yr=!0,XE=!0},e.src=n.img}}catch{}var Ah=document.createElement("canvas");Ah.width=Ah.height=64;{let n=Ah.getContext("2d"),e=n.createImageData(64,64);for(let t=0;t<4096;t++){let i=.955+(Math.random()-.5)*.09;Math.random()<.012&&(i-=.13),e.data[t*4]=226*i,e.data[t*4+1]=223*i,e.data[t*4+2]=215*i,e.data[t*4+3]=255}n.putImageData(e,0,0)}var qE=xr.createPattern(Ah,"repeat");function T1(n,e,t,i,s,r,a=0){let o=document.createElement("canvas");o.width=n,o.height=e;let l=o.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,n,e),l.fillStyle="#000",l.beginPath();for(let h=0;h<=96;h++){let u=h/96*Math.PI*2,f=El(u)+a,d=_t.x+Math.cos(u)*_t.rx*f,g=_t.z+Math.sin(u)*_t.rz*f,x=(d-t)/s*n,m=(g-i)/r*e;h?l.lineTo(x,m):l.moveTo(x,m)}return l.fill(),new ui(o)}var Sl=new ui(oo);Sl.colorSpace=tn;Sl.anisotropy=li.capabilities.getMaxAnisotropy();var io=new W(new On(Ge.w,Ge.d),new At({map:Sl,bumpMap:Sl,bumpScale:2.5,roughness:.96,alphaMap:T1(800,450,Ge.x0,Ge.z0,Ge.w,Ge.d),alphaTest:.5}));io.rotation.x=-Math.PI/2;io.position.set((Ge.x0+Ge.x1)/2,0,(Ge.z0+Ge.z1)/2);io.receiveShadow=!0;Re.add(io);var yr=!1,km=0,zs=new W(new On(90,90),me("#737a58",{r:1,extra:{alphaMap:T1(1024,1024,-45,-45,90,90,.02),alphaTest:.5}}));zs.rotation.x=-Math.PI/2;zs.position.y=-.02;zs.receiveShadow=!0;Re.add(zs);var Gm=dt.grass?ea("assets/grass_d.webp",[22,22]):null,YE=dt.grass?ea("assets/grass_n.jpg",[22,22],!1):null,ZE=me("#9c978d",{r:1});[[Ge.x0-.08,(Ge.z0+Ge.z1)/2,.16,Ge.d+.32],[Ge.x1+.08,(Ge.z0+Ge.z1)/2,.16,Ge.d+.32],[0,Ge.z1+.08,Ge.w,.16],[0,Ge.z0-.06,Ge.w,.12]].forEach(([n,e,t,i])=>{let s=new W(new Vt(t,.07,i),ZE);s.position.set(n,.035,e),s.receiveShadow=!0,Re.add(s)});function oi(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new ui(s);return r.colorSpace=tn,r.wrapS=r.wrapT=$n,i&&r.repeat.set(i[0],i[1]),r.anisotropy=8,r}var QE=oi(256,256,(n,e,t)=>{for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=70+Math.random()*14;n.fillStyle=`rgb(${r},${r+4},${r+8})`,n.fillRect(s*128,i*128,128,128)}for(let i=0;i<1200;i++)n.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,n.fillRect(Math.random()*e,Math.random()*t,2,2);n.strokeStyle="#33373b",n.lineWidth=4;for(let i=0;i<=2;i++)n.beginPath(),n.moveTo(i*128,0),n.lineTo(i*128,t),n.stroke(),n.beginPath(),n.moveTo(0,i*128),n.lineTo(e,i*128),n.stroke()},[24/.8,4.3/.8]),Ld=new W(new Vt(24,.04,4.3),new At({map:QE,roughness:.75}));Ld.position.set(0,0,-5.65);Ld.receiveShadow=!0;Re.add(Ld);var Tl=me("#5b7a3a",{r:1}),Ud=me("#4a6a32",{r:1}),Ws=[],Nd=[],eo=new Fe;Re.add(eo);var b1=new Dn({visible:!1});function _1(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Math.floor(t),a=n-i,o=e-s,l=t-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),f=Bn.lerp,d=(g,x,m)=>xl(i+g,s+x,r+m);return f(f(f(d(0,0,0),d(1,0,0),c),f(d(0,1,0),d(1,1,0),c),h),f(f(d(0,0,1),d(1,0,1),c),f(d(0,1,1),d(1,1,1),c),h),u)}function Za(n,e,t,i=4){let s=.5,r=1,a=0;for(let o=0;o<i;o++)a+=s*_1(n*r,e*r,t*r),r*=2.03,s*=.5;return a}var mh={};function KE(n){if(mh[n])return mh[n];let e=new Ci(1,dt.rockDetail);e.deleteAttribute("normal"),e.deleteAttribute("uv");let t=JE(e),i=t.attributes.position,s=new Float32Array(i.count*3),r=n*.37,a=[],o=Yh(n*13+5),l=[];for(let h=0;h<5;h++){let u=o()*6.283,f=(o()-.35)*1.4,d=Math.cos(u)*Math.cos(f),g=Math.sin(f),x=Math.sin(u)*Math.cos(f);l.push([d,g,x,.55+o()*.3])}for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getY(h),d=i.getZ(h),g=Za(u*1.2+r,f*1.2,d*1.2+r,4),x=Za(u*4+r,f*4,d*4,3),m=1+(g-.5)*.55+(x-.5)*.12,p=1-.42*((f+1)/2);u*=m*p,d*=m*p*.78,f*=.95+.1*_1(u*2+r,0,d*2),f<-.7&&(f=-.7+(f+.7)*.3);for(let[y,v,w,C]of l){let A=u*y+f*v+d*w-C;A>0&&(u-=y*A*.92,f-=v*A*.92,d-=w*A*.92)}i.setXYZ(h,u,f,d),a.push(g)}t.computeVertexNormals();let c=t.attributes.normal;for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getY(h),d=i.getZ(h),g=.85+.25*Za(u*6+r,f*6,d*6,3)+(a[h]-.5)*.35,x=g*.62,m=g*.63,p=g*.66,y=Za(u*3.1+9,f*3.1,d*3.1+r,3);if(c.getY(h)>.25&&y>.6){let v=Math.min(1,(y-.6)*6);x=Bn.lerp(x,.62,v*.6),m=Bn.lerp(m,.66,v*.6),p=Bn.lerp(p,.48,v*.6)}c.getY(h)>.55&&Za(u*5,f*5+r,d*5,2)>.58&&(x*=.75,m*=.95,p*=.62),s[h*3]=x,s[h*3+1]=m,s[h*3+2]=p}return t.setAttribute("color",new zt(s,3)),mh[n]=t,t}function JE(n){let e=n.attributes.position,t=new Map,i=[],s=[];for(let a=0;a<e.count;a++){let o=Math.round(e.getX(a)*1e4)+","+Math.round(e.getY(a)*1e4)+","+Math.round(e.getZ(a)*1e4),l=t.get(o);l===void 0&&(l=i.length/3,t.set(o,l),i.push(e.getX(a),e.getY(a),e.getZ(a))),s.push(l)}let r=new Pt;return r.setAttribute("position",new Je(i,3)),r.setIndex(s),r}var jE=(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createImageData(256,256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=Za(a/9,r/9,3.3,3)*.55+Math.random()*.45,l=(r*256+a)*4;i.data[l]=i.data[l+1]=i.data[l+2]=o*255,i.data[l+3]=255}t.putImageData(i,0,0);let s=new ui(e);return s.wrapS=s.wrapT=$n,s.repeat.set(3,3),s})(),Jh=[];for(let n=1;n<=dt.shells;n++)Jh.push(new At({color:"#5b7a3a",alphaMap:jE,alphaTest:.25+.6*n/(dt.shells+1),roughness:1}));var $E=new At({vertexColors:!0,roughness:.86,metalness:0});function ew(n){let e=new Ci(1,1),t=e.attributes.position;for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),a=t.getZ(i),o=1+(xl(Math.round(s*40)+n,Math.round(r*40),Math.round(a*40))-.5)*.55,l=1-.45*((r+1)/2);t.setXYZ(i,s*o*l,r*(.9+.2*xl(n,Math.round(s*40),Math.round(a*40))),a*o*l*.75)}return e.computeVertexNormals(),e}function tw(n,e){let t=new Fe,i=Yh(n.seed||e*31+7);t.position.set(n.x,0,n.z),t.rotation.y=n.rot||0,t.scale.setScalar(n.scale||1);let s=new W(Ni(new Xe(1,22,12),.35,n.seed||e),(n.seed||e)%2?Ud:Tl);s.scale.set(n.moss*gd,.22,n.moss*.86*gd),s.rotation.y=i()*3,s.position.y=-.03,s.receiveShadow=!0,t.add(s),Jh.forEach((a,o)=>{let l=new W(s.geometry,a);l.scale.set(s.scale.x*(1+.016*(o+1)),s.scale.y*(1+.1*(o+1)),s.scale.z*(1+.016*(o+1))),l.rotation.y=s.rotation.y,l.position.y=-.03+.004*(o+1),l.receiveShadow=!0,t.add(l)}),n.rocks.forEach(([a,o,l,c],h)=>{let u=.22+i()*.08,f=dt.smoothRocks?new W(KE(((n.seed||e)*7+h*13)%997),(()=>{let d=$E.clone();return d.color.setRGB(.34+u*.8,.34+u*.8,.35+u*.8),d})()):new W(ew((n.seed||e)*7+h*13),new At({color:new we(u,u*1.02,u*1.05),roughness:.95,flatShading:!0}));f.scale.set(c,l/2,c),f.position.set(a,l/2-.15,o),f.rotation.set((i()-.5)*.18,i()*6.28,(i()-.5)*.18),f.castShadow=f.receiveShadow=!0,t.add(f)});let r=new W(new nt(n.moss*1.05+.2,n.moss*1.05+.2,1.2,16),b1);return r.position.y=.5,t.add(r),t.userData.c=n,t.userData.hit=r,t}function Kr(){for(;eo.children.length;)eo.children.pop().traverse(e=>{e.isMesh&&(!Object.values(mh).includes(e.geometry)&&!Jh.includes(e.material)&&e.geometry.dispose(),e.material!==b1&&e.material!==Tl&&e.material!==Ud&&e.material.dispose())});fi.forEach((n,e)=>eo.add(tw(n,e))),Nd=fi.map(n=>({x:n.x,z:n.z,r:n.moss*(n.scale||1)*.85*Math.min(gd,1.12)}))}Kr();var YS=oi(512,184,(n,e,t)=>{let s=t/8;for(let r=0;r<8;r++){let a=Se()*18;n.fillStyle=`rgb(${128+a},${94+a*.8},${62+a*.6})`,n.fillRect(0,r*s,e,s);for(let o=0;o<26;o++){n.strokeStyle=`rgba(70,45,25,${.05+Se()*.08})`,n.lineWidth=1;let l=r*s+Se()*s;n.beginPath(),n.moveTo(0,l),n.bezierCurveTo(e*.3,l+Se()*3-1.5,e*.7,l+Se()*3-1.5,e,l),n.stroke()}n.fillStyle="rgba(50,32,18,.55)",n.fillRect(0,r*s,e,1.5)}},[5.5,1.8]),nw=ea("assets/wood_d.webp",[4,.9]),iw=ea("assets/wood_b.webp",[4,.9],!1),sw=ea("assets/wood_r.webp",[4,.9],!1),R1=new At({map:nw,bumpMap:iw,bumpScale:1.2,roughnessMap:sw,roughness:.85,color:"#a07a55"}),jh=me("#4e3626",{r:.8}),A1=ea("assets/wood_d.webp",[.25,2.2]);A1.rotation=Math.PI/2;var C1=new At({map:A1,color:"#6b4c36",roughness:.75}),rw=me("#ebe6da",{r:1}),Mr=new Fe;Re.add(Mr);var P1,D1,qn=-10.05,Er=12.05,ns=(qn+Er)/2,Yn=Er-qn;function zi(n,e,t,i,s,r,a,o=Mr){let l=new W(new Vt(n,e,t),i);return l.position.set(s,r,a),o.add(l),l}zi(Yn,.12,2.6,R1,ns,.69,-6.3);zi(Yn,.1,.7,R1,ns,.35,-4.65);zi(Yn-.2,.6,2.3,me("#2a2521"),ns,.3,-6.4);for(let n=qn+.5;n<=Er;n+=2.2)zi(.12,.3,.12,jh,n,.15,-4.65);var Fd=[];for(let n=0;n<=8;n++)Fd.push(qn+n*(Yn/8));var I1=[];Fd.forEach(n=>{let e=zi(.2,3.8,.2,C1.clone(),n,1.9,-5.2);e.material.transparent=!0,I1.push(e),Ws.push({x:n,z:-5.2,r:.14})});zi(Yn+.3,.26,.24,jh,ns,3.72,-5.2);zi(Yn,3.8,5.9,rw,ns,1.9,-10.57);var Vm=oi(256,448,(n,e,t)=>{n.fillStyle="#f4f0e5",n.fillRect(0,0,e,t);for(let s=0;s<1800;s++)n.fillStyle=`rgba(170,160,140,${Math.random()*.07})`,n.fillRect(Math.random()*e,Math.random()*t,2,2);let i="#5e4330";n.fillStyle="#7b5b3f",n.fillRect(12,360,232,78),n.fillStyle=i,n.fillRect(0,0,e,10),n.fillRect(0,0,12,t),n.fillRect(e-12,0,12,t),n.fillRect(0,t-10,e,10),n.fillRect(0,354,e,8);for(let s=1;s<4;s++)n.fillRect(12+s*58-2,10,4,344);for(let s=1;s<6;s++)n.fillRect(12,10+s*57.3-2,232,4)},[15,1]),zd=new W(new On(Yn,2.55),new At({map:Vm,roughness:.95,emissive:new we("#ffc274"),emissiveMap:Vm,emissiveIntensity:0}));zd.position.set(ns,2.025,-7.6);Mr.add(zd);zi(Yn+.1,.14,.12,jh,ns,3.33,-7.56);zi(Yn+.1,.16,.12,jh,ns,.77,-7.56);Fd.forEach(n=>zi(.16,3.1,.16,C1,n,2.3,-7.56));var Od=new W(new On(Yn+2.7,3.4),me("#6e5038",{r:.85}));Od.rotation.x=Math.PI/2;Od.position.set(ns,3.87,-5.95);Mr.add(Od);{let n=qn-1.35,e=Er+1.35,t=-4.3,i=-14.7,s=3.95,r=6.7,a=-9.5,o=-5.4,l=7.4,c=[],h=(A,D,N)=>c.push(...A,...D,...N),u=[n,s,t],f=[e,s,t],d=[n,s,i],g=[e,s,i],x=[o,r,a],m=[l,r,a];h(u,f,m),h(u,m,x),h(g,d,x),h(g,x,m),h(d,u,x),h(f,g,m);let p=new Pt;p.setAttribute("position",new Je(c,3)),p.computeVertexNormals();{let A=p.attributes.position,D=[];for(let N=0;N<A.count;N+=3){let S=new b().fromBufferAttribute(A,N),T=new b().fromBufferAttribute(A,N+1),U=new b().fromBufferAttribute(A,N+2),V=T.clone().sub(S).cross(U.clone().sub(S));for(let j of[S,T,U]){let F=Math.abs(V.x)>Math.abs(V.z)?j.z:j.x;D.push(F/.3,j.y/.24)}}p.setAttribute("uv",new Je(D,2))}let y=(A,D)=>{let N=Math.pow(Math.abs(Math.cos(Math.PI*A)),.6),S=D<.12?(.12-D)*4:0;return N*.8+S},v=(()=>{let D=document.createElement("canvas");D.width=D.height=128;let N=D.getContext("2d"),S=N.createImageData(128,128);for(let U=0;U<128;U++)for(let V=0;V<128;V++){let j=V/128,F=U/128,X=1/128,q=(y(j+X,F)-y(j-X,F))*14,se=(y(j,F+X)-y(j,F-X))*14,ne=Math.hypot(q,se,1),te=(U*128+V)*4;S.data[te]=(-q/ne*.5+.5)*255,S.data[te+1]=(se/ne*.5+.5)*255,S.data[te+2]=(1/ne*.5+.5)*255,S.data[te+3]=255}N.putImageData(S,0,0);let T=new ui(D);return T.wrapS=T.wrapT=$n,T})(),w=oi(128,128,(A,D,N)=>{for(let S=0;S<N;S++)for(let T=0;T<D;T++){let U=.82+.18*Math.pow(Math.abs(Math.cos(Math.PI*T/D)),.6)-(S<14?.12:0)+(Math.random()-.5)*.05;A.fillStyle=`rgb(${74*U},${76*U},${82*U})`,A.fillRect(T,S,1,1)}}),C=new W(p,new At({map:w,normalMap:v,normalScale:new ce(.9,.9),roughness:.55,metalness:.05,side:Ft}));Mr.add(C),P1=p,D1=[l-o+.6,(o+l)/2,r+.08,a],zi(e-n+.1,.22,.2,me("#2d2824"),ns,3.88,t),zi(l-o+.6,.3,.45,me("#2d2824"),(o+l)/2,r+.08,a)}Un(Mr);var vd=[],xd,yd=[],gh=Ni(new Ci(1,2),.3,9),Os=[],bl=me("#f4f7fa",{r:.95}),L1={value:0};function aw(n){let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(128/2,128/2),i.fillStyle="#fff",i.strokeStyle="rgba(110,110,110,.5)",i.lineWidth=2,i.lineCap="round",n==="maple"){i.beginPath();let r=[];for(let a=0;a<10;a++){let o=-Math.PI/2+a/10*Math.PI*2,l=[1,0,.92,0,.78,0,.78,0,.92,0][a],c=a%2?20:56*l;r.push([Math.cos(o)*c,Math.sin(o)*c+6])}i.moveTo(r[0][0],r[0][1]);for(let a=1;a<=10;a++){let o=r[a%10],l=r[a-1];i.quadraticCurveTo(l[0]*.9+o[0]*.1,l[1]*.9+o[1]*.1,o[0],o[1])}i.fill();for(let a=0;a<10;a+=2)i.beginPath(),i.moveTo(0,8),i.lineTo(r[a][0]*.8,r[a][1]*.8),i.stroke();i.beginPath(),i.moveTo(0,8),i.lineTo(0,60),i.stroke()}else if(n==="ginkgo"){i.beginPath(),i.moveTo(0,52),i.arc(0,52,96,-Math.PI/2-.95,-Math.PI/2+.95),i.closePath(),i.fill(),i.globalCompositeOperation="destination-out",i.beginPath(),i.moveTo(0,-44),i.lineTo(-7,-26),i.lineTo(7,-26),i.fill(),i.globalCompositeOperation="source-over";for(let r=-4;r<=4;r++){let a=-Math.PI/2+r*.2;i.beginPath(),i.moveTo(0,52),i.lineTo(Math.cos(a)*90,52+Math.sin(a)*90),i.stroke()}}else if(n==="sakura")for(let[r,a,o]of[[-20,-14,22],[22,-6,20],[-2,24,21]]){for(let l=0;l<5;l++){let c=l/5*Math.PI*2;i.beginPath(),i.ellipse(r+Math.cos(c)*o*.55,a+Math.sin(c)*o*.55,o*.52,o*.4,c,0,7),i.fill()}i.fillStyle="rgba(150,150,150,.9)",i.beginPath(),i.arc(r,a,o*.22,0,7),i.fill(),i.fillStyle="#fff"}else if(n==="needle"){i.strokeStyle="#fff",i.lineWidth=3;for(let r=0;r<34;r++){let a=-Math.PI/2+(Math.random()-.5)*1.5,o=40+Math.random()*24;i.beginPath(),i.moveTo(0,54),i.lineTo(Math.cos(a)*o,54+Math.sin(a)*o*1.6),i.stroke()}}else{i.beginPath(),i.moveTo(0,-58),i.bezierCurveTo(40,-30,36,30,0,58),i.bezierCurveTo(-36,30,-40,-30,0,-58),i.fill(),i.beginPath(),i.moveTo(0,-50),i.lineTo(0,56),i.stroke();for(let r=-3;r<=3;r++)i.beginPath(),i.moveTo(0,r*14),i.lineTo(r%2?22:-22,r*14-12),i.stroke()}let s=new ui(t);return s.colorSpace=tn,s.anisotropy=4,s}var Wm={},Xm={},U1=new On(1,1);function N1(n){return Wm[n]||(Wm[n]=aw(n))}function F1(n){return Xm[n]||(Xm[n]=new zr({depthPacking:el,map:N1(n),alphaTest:.45,side:Ft}))}function Ch(n,e="#ffffff"){let t=new At({map:N1(n),alphaTest:.45,side:Ft,roughness:.78,color:e});return t.onBeforeCompile=i=>{i.uniforms.uWind=L1,i.uniforms.uGust=Wr,i.vertexShader=`uniform float uWind;uniform float uGust;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
vec3 ip=vec3(instanceMatrix[3]);float w=(sin(uWind*1.6+ip.x*1.3+ip.z*0.9)*0.6+sin(uWind*2.7+ip.y*2.3)*0.4)*(1.0+uGust*2.6);transformed+=vec3(w*0.07,w*0.04,w*0.06)*(position.y+0.5);
#endif`)},t.customProgramCacheKey=()=>"leafwind",t}var Ph=new qe,Dh=new vi,Ih=new sr,Lh=new b,Uh=new b,qm=new we;function Nh(n,e,t,i,s,r,a,o=Math.random){if(!s||!e.length)return null;let l=new or(U1,a||Ch(t),s);l.customDepthMaterial=F1(t);let c=e.reduce((h,u)=>h+u.sx*u.sz,0);for(let h=0;h<s;h++){let u=o()*c,f=e[0];for(let v of e)if(u-=v.sx*v.sz,u<=0){f=v;break}let d=o()*2-1,g=o()*2-1,x=o()*2-1,m=Math.hypot(d,g,x)||1;d/=m,g=g/m*.85+.15,x/=m;let p=.8+o()*.3;Lh.set(f.x+d*f.sx*p,f.y+g*f.sy*p,f.z+x*f.sz*p),Ih.set(o()*6.28,o()*6.28,o()*6.28),Dh.setFromEuler(Ih);let y=r*(.75+o()*.5);Uh.set(y,y,y),Ph.compose(Lh,Dh,Uh),l.setMatrixAt(h,Ph),qm.set(i[Math.floor(o()*i.length)]).multiplyScalar(.82+o()*.32),l.setColorAt(h,qm)}return l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}var Ki=null,z1=[];{let r=function(a,o,l,c,h){let u=new Fe,f=new W(new nt(.16,.24,l,8),s);f.position.y=l/2,u.add(f);let d=new we(h),g=dt.leaves?d.clone().multiplyScalar(.62):d,x=me("#"+g.getHexString(),{r:1});yd.push({mat:x,base:g.clone()});let m=[];for(let p=0;p<4;p++){let y=c*(.65+Se()*.45),v=new W(gh,x);v.scale.set(y,y*.85,y),v.position.set((Se()-.5)*c,l+(Se()-.2)*c*.7,(Se()-.5)*c),m.push({x:v.position.x,y:v.position.y,z:v.position.z,sx:y,sy:y*.85,sz:y}),dt.leaves&&v.scale.multiplyScalar(.84),u.add(v)}if(dt.leaves){let p=Ch("broad","#"+d.getHexString());yd.push({mat:p,base:d.clone()}),Nh(u,m,"broad",["#ffffff","#e9f0dc","#d6e3c4","#f4f0d8"],Math.round(dt.leaves*1.2),.34,p)}u.position.set(a,0,o),Un(u),Re.add(u)},n=Ni(new Ci(1,2),.25,3),e=[];for(let a=-14;a<=12;a+=1.45)e.push([-13.9,a]);for(let a=-12.6;a<=13.5;a+=1.45)e.push([a,12]);for(let a=-3.6;a<=11;a+=1.45)e.push([14,a]);let t=new or(n,me("#ffffff",{r:1}),e.length),i=new qe;if(e.forEach(([a,o],l)=>{let c=1.05+Se()*.3;i.compose(new b(a+(Se()-.5)*.3,.95+Se()*.2,o+(Se()-.5)*.3),new vi().setFromEuler(new sr(0,Se()*6,0)),new b(c,1.15+Se()*.3,c)),t.setMatrixAt(l,i);let h=new we().setHSL(.27+Se()*.04,.38+Se()*.1,.25+Se()*.06);vd.push(h),t.setColorAt(l,h)}),t.castShadow=t.receiveShadow=!0,Re.add(t),xd=t,dt.hedgeLeaves){let a=new qe,o=new b,l=new vi,c=new b,h=[];for(let d=0;d<e.length;d++)t.getMatrixAt(d,a),a.decompose(o,l,c),h.push({x:o.x,y:o.y,z:o.z,sx:c.x,sy:c.y,sz:c.z,i:d});let u=e.length*dt.hedgeLeaves;Ki=new or(U1,Ch("broad"),u),Ki.customDepthMaterial=F1("broad");let f=0;for(let d of h)for(let g=0;g<dt.hedgeLeaves;g++){let x=Math.random()*2-1,m=Math.random()*2-1,p=Math.random()*2-1,y=Math.hypot(x,m,p)||1;x/=y,m/=y,p/=y,m<-.3&&(m=-m*.5);let v=.93+Math.random()*.14;Lh.set(d.x+x*d.sx*v,d.y+m*d.sy*v,d.z+p*d.sz*v),Ih.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),Dh.setFromEuler(Ih);let w=.2+Math.random()*.12;Uh.set(w,w,w),Ph.compose(Lh,Dh,Uh),Ki.setMatrixAt(f,Ph);let C=vd[d.i].clone().multiplyScalar(1.15+Math.random()*.45);z1.push(C),Ki.setColorAt(f,C),f++}Ki.castShadow=Ki.receiveShadow=!0,Re.add(Ki)}let s=me("#5a4636");[[-16,-9.5,4.5,2.2],[-16.5,-1,5,2.4],[-8.5,16.5,4.4,2.1],[7.5,16.8,4.6,2.2],[17,6,4.3,2.2],[17,-1.5,4.8,2.3],[-6,-17,5.5,2.6],[3,-17.5,5.8,2.8],[11,-16.5,5,2.4]].forEach(([a,o,l,c])=>{let h=new we().setHSL(.26+Se()*.06,.35+Se()*.15,.22+Se()*.08);r(a,o,l,c,"#"+h.getHexString())})}var nd={sakura:["#f3a6bd","#f7c2d2","#ec8fac"],sakuraL:["#f8d3de","#f5bfd0","#fbe4ec"],aomomiji:["#8cc24d","#79b03f","#a3d062"],momiji:["#c4412a","#d65a2c","#b8332a"],momijiO:["#e0782e","#d9602c","#e89a3a"],ginkgo:["#e8b92f","#f0c93f","#ddaa25"],umeP:["#e9879f","#f2a5b8","#d96f8c"],umeW:["#fbf7f2","#f3ece6","#ffffff"]},Fh={},hl=n=>Fh[n]||(Fh[n]=me(n,{r:1})),Ym=n=>Fh["e"+n]||(Fh["e"+n]=me(n,{r:1,extra:{emissive:new we(n),emissiveIntensity:.22}}));function vs(n,e,t,i,s){let r=n.distanceTo(e),a=new W(new nt(i,t,r,6),s);return a.position.copy(n).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new b(0,1,0),e.clone().sub(n).normalize()),a}function ow(n,e){let t=Yh(e),i=new Fe,s=n.startsWith("ume"),r=n.startsWith("sakura"),a=n==="ginkgo",o=n==="bare",l=hl(s||r?"#4a3a35":"#5a4636"),c=a?3:s?1.3:2;i.add(vs(new b(0,0,0),new b((t()-.5)*.3,c,(t()-.5)*.3),.27,.16,l));let h=[],u=a?4:6;for(let f=0;f<u;f++){let d=f/u*Math.PI*2+t()*.6,g=(a?1:1.5)+t()*.6,x=(a?1.2:s?.95:.7)+t()*.4,m=new b(0,c*(.78+t()*.2),0),p=new b(Math.cos(d),x,Math.sin(d)).normalize(),y=m.clone().addScaledVector(p,g);if(i.add(vs(m,y,.08,.04,l)),h.push({st:m,en:y}),o||s)for(let v=0;v<2;v++){let w=p.clone().add(new b((t()-.5)*1,.35,(t()-.5)*1)).normalize(),C=y.clone().addScaledVector(w,.5+t()*.45);i.add(vs(y,C,.035,.014,l)),h.push({st:y,en:C})}}if(s){let f=nd[n],d=h.length*9,g=new or(new Ci(.06,0),me("#ffffff",{r:.8}),d),x=new qe,m=new we,p=0;for(let y of h)for(let v=0;v<9;v++){let w=.25+t()*.85,C=y.st.clone().lerp(y.en,Math.min(w,1)).add(new b((t()-.5)*.12,(t()-.5)*.12,(t()-.5)*.12)),A=.8+t()*.6;x.makeScale(A,A,A).setPosition(C),g.setMatrixAt(p,x),m.set(f[p%3]),g.setColorAt(p,m),p++}i.add(g)}else if(a){let f=nd.ginkgo,d=[];for(let g=0;g<5;g++){let x=1.3-g*.2;for(let m=0;m<2;m++){let p=new W(gh,hl(f[(g+m)%3]));p.scale.set(x,x*.85,x),p.position.set((t()-.5)*.6,c*.75+g*.7,(t()-.5)*.6),d.push({x:p.position.x,y:p.position.y,z:p.position.z,sx:x,sy:x*.85,sz:x}),dt.leaves&&p.scale.multiplyScalar(.82),i.add(p)}}dt.leaves&&Nh(i,d,"ginkgo",f,dt.leaves,.3,null,t)}else if(!o){let f=nd[n],d=n==="aomomiji"||n.startsWith("momiji")?.72:.8,g=r?1.05:.95,x=[];for(let p of h)for(let y=0;y<2;y++){let v=g*(.7+t()*.4),w=new W(gh,(r?Ym:hl)(f[Math.floor(t()*3)]));w.scale.set(v,v*d,v),w.position.copy(p.en).add(new b((t()-.5)*.7,(t()-.3)*.5,(t()-.5)*.7)),x.push({x:w.position.x,y:w.position.y,z:w.position.z,sx:v,sy:v*d,sz:v}),dt.leaves&&w.scale.multiplyScalar(.8),i.add(w)}let m=new W(gh,(r?Ym:hl)(f[0]));if(m.scale.set(1.1,.9*d/.8,1.1),m.position.set(0,c+1.3,0),x.push({x:0,y:c+1.3,z:0,sx:1.1,sy:.9*d/.8,sz:1.1}),dt.leaves&&m.scale.multiplyScalar(.8),i.add(m),dt.leaves){let p=r?"sakura":"maple";Nh(i,x,p,f,Math.round(dt.leaves*(r?1.1:1.25)),r?.32:.27,p==="sakura"?(()=>{let y=Ch("sakura");return y.emissive=new we("#f7c9d4"),y.emissiveIntensity=.18,y})():null,t)}}return Un(i),i}var O1=[{x:15.4,z:3,s:1.35,k:{spring:"sakura",summer:"aomomiji",autumn:"momiji",winter:"umeP"}},{x:-15.6,z:-5.5,s:1.3,k:{spring:"sakura",summer:"aomomiji",autumn:"ginkgo",winter:"bare"}},{x:-15.3,z:5.5,s:1.3,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momijiO",winter:"umeW"}},{x:15.6,z:10.4,s:1.2,k:{spring:"aomomiji",summer:"aomomiji",autumn:"ginkgo",winter:"bare"}},{x:-12.5,z:14.6,s:1.5,k:{spring:"sakuraL",summer:"aomomiji",autumn:"ginkgo",winter:"umeW"}},{x:-4,z:14.4,s:1.6,k:{spring:"sakura",summer:"aomomiji",autumn:"momiji",winter:"bare"}},{x:4,z:14.6,s:1.55,k:{spring:"sakura",summer:"aomomiji",autumn:"momijiO",winter:"umeP"}},{x:11.5,z:14.8,s:1.5,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momiji",winter:"bare"}},{x:-12,z:-15.8,s:1.4,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momijiO",winter:"umeP"}}];O1.forEach((n,e)=>{n.vars={};let t=Se()*6;for(let i of new Set(Object.values(n.k))){let s=ow(i,1e3+e*17+i.length);s.position.set(n.x,0,n.z),s.scale.setScalar(n.s),s.rotation.y=t,s.visible=!1,Re.add(s),n.vars[i]=s}});var Bd=new Fe;Re.add(Bd);{let n=me("#3d6a33",{r:1}),e=Ni(new Ci(1,1),.3,4),t=Ni(new Ci(1,1),.22,8),i=[["#6f8fd6","#5d7cc9","#8aa3e0"],["#8f7fd2","#a08ad8","#7b6cc4"],["#d98fb8","#c97aa8","#e6a6c8"]],s=[];for(let r=-2;r<=9.5;r+=1.55)s.push([-12.75,r]);for(let r=-9.5;r<=8.5;r+=2)s.push([r,10.85]);for(let r=-2.5;r<=7;r+=1.7)s.push([12.8,r]);s.forEach(([r,a])=>{let o=new Fe,l=i[Math.floor(Se()*3)],c=new W(e,n);c.scale.set(.62,.45,.62),c.position.y=.4,o.add(c);for(let h=0;h<6;h++){let u=new W(t,hl(l[h%3])),f=.17+Se()*.08;u.scale.set(f,f*.9,f);let d=Se()*6.28,g=.22+Se()*.28;u.position.set(Math.cos(d)*g,.58+Se()*.3,Math.sin(d)*g),o.add(u)}o.position.set(r,0,a),o.rotation.y=Se()*6,Un(o),Bd.add(o)})}{let n=new W(P1,bl);n.position.y=.09,n.receiveShadow=!0,Mr.add(n),Os.push(n);let[e,t,i,s]=D1,r=new W(new Vt(e,.14,.55),bl);r.position.set(t,i+.2,s),Mr.add(r),Os.push(r)}var Hd=Hs?350:600,Vr=new Float32Array(Hd*6),B1=[];for(let n=0;n<Hd;n++)B1.push({x:-14+Se()*28,y:Se()*12,z:-5+Se()*17});var kd=new Pt;kd.setAttribute("position",new zt(Vr,3));var pi=new Fa(kd,new lr({color:"#a9b8be",transparent:!0,opacity:.5}));pi.frustumCulled=!1;Re.add(pi);var Gd=Hs?450:800,vh=new Float32Array(Gd*3),H1=[];for(let n=0;n<Gd;n++)H1.push({x:-14+Se()*28,y:Se()*10,z:-5+Se()*17,ph:Se()*10});var Vd=new Pt;Vd.setAttribute("position",new zt(vh,3));var ta=oi(32,32,n=>{let e=n.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,32,32)}),Pl=new Or(Vd,new za({size:.11,map:ta,transparent:!0,depthWrite:!1}));Pl.frustumCulled=!1;Re.add(Pl);{let n=new Fe,e=new Oa([new b(0,0,0),new b(.25,.9,.1),new b(.05,1.7,-.15),new b(.6,2.4,0),new b(.9,2.7,.1)]);n.add(new W(new Zo(e,24,.13,8),me("#5b4434")));let t=me("#2e4b2e",{r:1}),i=Ni(new Xe(1,14,8),.3,5);[[.9,2.8,.1,.95],[-.3,2,.35,.7],[1.15,1.8,-.25,.65],[.3,3.25,.05,.55],[-.45,2.6,-.3,.5]].forEach(([r,a,o,l])=>{let c=new W(i,t);c.scale.set(l,l*.38,l*.9),c.position.set(r,a,o),n.add(c);let h=new W(i,bl);h.scale.set(l*.9,l*.2,l*.8),h.position.set(r,a+l*.24,o),n.add(h),Os.push(h),dt.leaves&&Nh(n,[{x:r,y:a+l*.05,z:o,sx:l*1.02,sy:l*.36,sz:l*.92}],"needle",["#3a5e34","#2f5030","#4a6d3a"],Math.round(dt.leaves*.18),.3)});{let r=new b(.35,4.6,.05),a=vs(new b(.35,0,.05),r,.045,.035,me("#b39461"));n.add(a),Os.push(a);let o=[];for(let u=0;u<20;u++){let f=u/20*Math.PI*2;o.push(r.x,r.y,r.z,.35+Math.cos(f)*1.75,1.55+Math.sin(u*1.7)*.1,.05+Math.sin(f)*1.6)}let l=new Pt;l.setAttribute("position",new Je(o,3));let c=new Fa(l,new lr({color:"#c4a873"}));n.add(c),Os.push(c);let h=new W(new Xi(.12,.3,8),me("#b39461"));h.position.copy(r).add(new b(0,.12,0)),n.add(h),Os.push(h)}let s=new W(Ni(new Xe(1,16,8),.3,2),Tl);s.scale.set(.75,.18,.7),s.position.y=-.03,n.add(s),n.position.set(Xr.x,0,Xr.z),n.rotation.y=.6,Un(n),Re.add(n),Ws.push({x:Xr.x,z:Xr.z,r:.55})}var sn={on:!1};{let n=new Fe,e=me("#8f8b83",{r:1,flat:!0}),t=(s,r)=>{let a=new W(s,e);return a.position.y=r,n.add(a),a};t(new nt(.34,.38,.18,6),.09),t(new nt(.11,.14,.75,8),.55),t(new nt(.32,.26,.13,6),.98);for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,a=t(new Vt(.06,.32,.06),1.2);a.position.x=Math.cos(r)*.17,a.position.z=Math.sin(r)*.17}sn.glowMat=new At({color:"#3a332a",emissive:"#ffb85c",emissiveIntensity:0,roughness:1});let i=new W(new Vt(.22,.24,.22),sn.glowMat);i.position.y=1.2,n.add(i),t(new Xi(.5,.32,6),1.52),t(new Xe(.07,8,6),1.73);{let s=new W(new Xi(.46,.2,6),bl);s.position.y=1.63,n.add(s),Os.push(s);let r=new W(new nt(.3,.31,.05,6),bl);r.position.y=1.07,n.add(r),Os.push(r)}sn.light=new Ha("#ffb35a",0,7,1.6),sn.light.position.y=1.2,n.add(sn.light),sn.halo=new hs(new Wi({map:null,color:"#ffbf6a",transparent:!0,opacity:0,depthWrite:!1,blending:Gi})),sn.halo.position.y=1.2,n.add(sn.halo),n.position.set(Sn.x,0,Sn.z),Un(n),i.castShadow=!1,Re.add(n),Ws.push({x:Sn.x,z:Sn.z,r:.42})}var k1=32,In={t:Math.random()*20,phase:"fill",angle:.32,pivot:null,pour:null,stream:null},Zm={x:mn.x,z:mn.z+.8};{let n=mn,e=me("#8d8981",{r:1,flat:!0}),t=me("#9aa45a",{r:.65}),i=me("#6f7a3c",{r:.7}),s=new Fe;s.position.set(n.x,0,n.z),Re.add(s);let r=new W(Ni(new nt(.42,.5,.5,14),.12,4),e);r.position.y=.25,s.add(r),In.basinWater=new W(new us(.29,28),new At({color:"#2b4547",roughness:.08,metalness:.3,normalMap:to,normalScale:new ce(.2,.2)})),In.basinWater.rotation.x=-Math.PI/2,In.basinWater.position.y=.505,s.add(In.basinWater);let a=(y,v,w,C,A)=>{let D=new W(Ni(new nt(y,y*1.1,v,10),.2,A),e);return D.position.set(w,v/2-.03,C),s.add(D),D};a(.34,.12,0,.8,11),a(.22,.22,-.62,.35,12),a(.2,.18,.6,.4,13);let o=new Fe;o.position.set(.05,.53,0),o.rotation.y=.5,s.add(o);let l=new W(new nt(.012,.012,.75,6),me("#c9b48a"));l.rotation.z=Math.PI/2,o.add(l);let c=new W(new nt(.06,.055,.08,10,1,!0),me("#c9b48a",{side:Ft}));c.position.set(.36,.03,0),o.add(c);let h=-.3,u=-.02;s.add(vs(new b(h,0,-.85),new b(h,1.25,-.85),.045,.04,t)),s.add(vs(new b(h,1.16,-.88),new b(h,1.13,u),.035,.035,t)),In.stream=new W(new nt(.012,.016,.26,6),new At({color:"#dfeef2",transparent:!0,opacity:.55,roughness:.1})),In.stream.position.set(h,.99,u),s.add(In.stream);let f=-.75,d=.72;[[-.11],[.11]].forEach(([y])=>s.add(vs(new b(f,0,y),new b(f,.8,y),.03,.028,i)));let g=new Fe;g.position.set(f,d,0),s.add(g),In.pivot=g;let x=new W(new nt(.055,.058,.92,12),t);x.rotation.z=Math.PI/2,g.add(x);let m=new W(new us(.045,12),me("#2d2a20"));m.position.x=.461,m.rotation.y=Math.PI/2,g.add(m);for(let y of[-.2,.15]){let v=new W(new cr(.058,.008,6,14),i);v.position.x=y,v.rotation.y=Math.PI/2,g.add(v)}In.pour=new W(new nt(.014,.02,.22,6),In.stream.material),In.pour.visible=!1,s.add(In.pour);let p=new W(Ni(new Ci(.28,1),.25,21),e);p.scale.set(1,.95,.9),p.position.set(f-.45,.25,0),s.add(p),Un(s),Ws.push({x:n.x,z:n.z,r:.5},{x:n.x-.95,z:n.z,r:.42},{x:n.x+h,z:n.z-.85,r:.15})}function lw(n){let e=In;if(e.t+=n,e.phase==="fill"){let i=Math.min(1,e.t/k1);e.angle=.32-.24*Math.pow(i,1.6),i>=1&&(e.phase="tip",e.t=0)}else if(e.phase==="tip"){let i=Math.min(1,e.t/.4);e.angle=.08-.66*(1-Math.pow(1-i,3)),i>=1&&(e.phase="pour",e.t=0,bw())}else if(e.phase==="pour")e.angle=-.58+Math.sin(e.t*20)*.01,e.t>.75&&(e.phase="back",e.t=0);else if(e.phase==="back"){let i=Math.min(1,e.t/.22);e.angle=-.58+.98*i*i,i>=1&&(e.phase="bounce",e.t=0,O.ctx&&O.on&&O.ctx.state==="running"&&Tw())}else e.phase==="bounce"&&(e.angle=.32+.08*Math.exp(-e.t*9)*Math.cos(e.t*30),e.t>.6&&(e.phase="fill",e.t=0));e.pivot.rotation.z=e.angle;let t=e.phase==="pour";if(e.pour.visible=t,t){let i=-.75+Math.cos(e.angle)*.46,s=.72+Math.sin(e.angle)*.46;e.pour.position.set(i+.03,s-.11,0),Math.random()<.3&&wr(mn.x+i*.5,.51,mn.z,.18)}}var Qt={fish:[],pellets:[],ripples:[],cubeT:-1e9,cubeDirty:!0},zh=(n,e)=>Ya.some(([t,i])=>Math.hypot(n-t,e-i)<.42),id=(n,e)=>Qr(n,e)<.12&&!zh(n,e),to=dt.waterN?ea("assets/water_n.webp",[.6,.6],!1):null,Oh=new Fo(dt.cube),Wd=new No(.1,120,Oh);Wd.position.set(_t.x,.08,_t.z);Re.add(Wd);{let e=[];for(let u=0;u<96;u++){let f=u/96*Math.PI*2,d=El(f);e.push([_t.x+Math.cos(f)*_t.rx*d,_t.z+Math.sin(f)*_t.rz*d])}let t=u=>{let f=new Vo(e.map(([g,x])=>new ce(g,-x))),d=new Xc(f,2);return d.rotateX(-Math.PI/2),d.translate(0,u,0),d};Qt.water=new W(t(-.07),new At({color:"#21403d",roughness:.05,metalness:.35,transparent:!0,opacity:.8,envMap:Oh.texture,envMapIntensity:1.1,depthWrite:!1,normalMap:to,normalScale:new ce(.28,.28)})),Qt.water.renderOrder=2,Re.add(Qt.water);let i=new W(t(-.55),me("#33402f",{r:1}));i.receiveShadow=!0,Re.add(i);let s=[];for(let u=0;u<96;u++){let[f,d]=e[u],[g,x]=e[(u+1)%96];s.push(f,0,d,g,0,x,g,-.56,x,f,0,d,g,-.56,x,f,-.56,d)}let r=new Pt;r.setAttribute("position",new Je(s,3)),r.computeVertexNormals();let a=new W(r,me("#4b4a3b",{r:1,side:Ft}));Re.add(a);let o=new Fe;Re.add(o);for(let u=0;u<34;u++){let f=u/34*Math.PI*2+(Se()-.5)*.08,d=El(f)*(1.02+Se()*.05),g=_t.x+Math.cos(f)*_t.rx*d,x=_t.z+Math.sin(f)*_t.rz*d;if(Math.hypot(g-Ya[0][0],x-Ya[0][1])<.45||Math.hypot(g-Ya[4][0],x-Ya[4][1])<.45)continue;let m=.42+Se()*.15,p=new W(Ni(new Ci(1,1),.3,u+40),new At({color:new we(m,m*.99,m*.95),roughness:1,flatShading:!0})),y=.16+Se()*.14;p.scale.set(y*1.3,y*.6,y),p.position.set(g,.02,x),p.rotation.y=f,o.add(p)}Un(o,!0,!0);let l=me("#a39e94",{r:1,flat:!0});Ya.forEach(([u,f],d)=>{let g=new W(Ni(new nt(.34,.38,.16,12),.18,60+d),l);g.position.set(u,-.02,f),g.rotation.y=Se()*3,g.castShadow=g.receiveShadow=!0,Re.add(g)}),[["#f4f1ea","#d8452c"],["#e88a2a","#f3b552"],["#f4f1ea","#222222"],["#d23a26","#f4f1ea"],["#efd04a","#f7e9a8"],["#f4f1ea","#e06a2a"]].forEach(([u,f],d)=>{let g=new Fe,x=me(u,{r:.5}),m=me(f,{r:.5}),p=new W(new Xe(1,14,10),x);p.scale.set(.075,.05,.24),g.add(p);let y=new W(new Xe(1,10,8),m);y.scale.set(.06,.035,.1),y.position.set(0,.022,.04+Se()*.05),g.add(y);let v=new Fe;v.position.z=-.22,g.add(v);let w=new W(new Xe(1,10,6),x);w.scale.set(.08,.012,.075),w.position.z=-.06,v.add(w);for(let N of[-1,1]){let S=new W(new Xe(1,8,6),x);S.scale.set(.045,.008,.03),S.position.set(N*.075,-.01,.08),S.rotation.y=N*.6,g.add(S)}let C=.8+Se()*.45;g.scale.setScalar(C);let A=Se()*6.28,D={g,tail:v,x:_t.x+Math.cos(A)*.8,z:_t.z+Math.sin(A)*.5,h:Se()*6.28,tx:_t.x,tz:_t.z,ph:Se()*6,sp:.25+Se()*.12};g.position.set(D.x,-.24-d*.015,D.z),Re.add(g),Qt.fish.push(D)});let h=new Yo(.85,1,40);h.rotateX(-Math.PI/2);for(let u=0;u<18;u++){let f=new W(h,new Dn({color:"#e8f0ee",transparent:!0,opacity:0,depthWrite:!1}));f.visible=!1,f.renderOrder=3,Re.add(f),Qt.ripples.push({m:f,t:0,life:1})}}function wr(n,e,t,i=.5){let s=Qt.ripples.find(r=>!r.m.visible)||Qt.ripples[0];s.m.position.set(n,e+.004,t),s.t=0,s.life=1.2+i,s.size=i,s.m.visible=!0}function sd(n=.7){for(let e=0;e<20;e++){let t=Math.random()*6.28,i=Math.sqrt(Math.random())*n,s=_t.x+Math.cos(t)*_t.rx*i,r=_t.z+Math.sin(t)*_t.rz*i;if(Qh(s,r)<n)return[s,r]}return[_t.x,_t.z]}function cw(n,e){for(let t of Qt.fish){let i=t.tx,s=t.tz,r=!1;if(Qt.pellets.length){let u=null,f=1e9;for(let d of Qt.pellets){let g=Math.hypot(d.m.position.x-t.x,d.m.position.z-t.z);g<f&&(f=g,u=d)}i=u.m.position.x,s=u.m.position.z,r=!0,f<.12&&(u.dead=!0,wr(i,-.07,s,.22),Rw())}else Math.hypot(i-t.x,s-t.z)<.3&&([t.tx,t.tz]=sd());let o=((Math.atan2(i-t.x,s-t.z)-t.h+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;t.h+=Dt(o,-1,1)*n*(r?2.6:1.3);let l=t.sp*(r?2.2:1)*(it==="winter"?.6:1),c=t.x+Math.sin(t.h)*l*n,h=t.z+Math.cos(t.h)*l*n;Qh(c,h)<.86?(t.x=c,t.z=h):(t.h+=n*2.5,[t.tx,t.tz]=sd(.5)),t.g.position.x=t.x,t.g.position.z=t.z,t.g.rotation.y=t.h,t.tail.rotation.y=Math.sin(e*(r?14:7)+t.ph)*.45}Qt.pellets=Qt.pellets.filter(t=>(t.life-=n,t.dead||t.life<=0?(Re.remove(t.m),!1):(t.m.position.y=-.065+Math.sin(e*3+t.ph)*.004,!0))),to&&(to.offset.x+=n*.012,to.offset.y+=n*.007);for(let t of Qt.ripples){if(!t.m.visible)continue;t.t+=n;let i=t.t/t.life;if(i>=1){t.m.visible=!1;continue}t.m.scale.setScalar(.05+t.size*i),t.m.material.opacity=.55*(1-i)}if(pi.visible&&Math.random()<n*7){let[t,i]=sd(.95);wr(t,-.07,i,.25)}}var hw=new Xe(.025,6,4),uw=me("#c49a5e");function fw(){ft("koi");let n=st.position,e=st.rotation.y,t=n.x+Math.sin(e)*.8,i=n.z+Math.cos(e)*.8;for(let s=0;s<20&&Qr(t,i)>-.25;s++)t+=(_t.x-t)*.15,i+=(_t.z-i)*.15;for(let s=0;s<6;s++){let r=t+(Math.random()-.5)*.5,a=i+(Math.random()-.5)*.4;if(Qh(r,a)>.9)continue;let o=new W(hw,uw);o.position.set(r,-.065,a),Re.add(o),Qt.pellets.push({m:o,life:30,ph:Math.random()*6}),setTimeout(()=>wr(r,-.07,a,.15),s*90)}if(O.ctx&&O.on){let s=O.ctx.currentTime;for(let r=0;r<4;r++)ts(900+Math.random()*500,300,s+r*.08,.06,.02,"sine",.3)}Ht("\u6492\u4E0B\u4E00\u9EDE\u98FC\u6599\u3002")}function dw(){ft("wash"),Xh=Math.atan2(mn.x-st.position.x,mn.z-st.position.z),$h("wash"),wr(mn.x,.51,mn.z,.25),setTimeout(()=>wr(mn.x+.08,.51,mn.z-.05,.2),300),_w(),Ht(it==="winter"?"\u6C34\u5F88\u51B0\uFF0C\u5FC3\u4E5F\u9192\u4E86\u3002":it==="summer"?"\u6DBC\u6DBC\u7684\uFF0C\u597D\u8212\u670D\u3002":"\u6E05\u6C34\u6D41\u904E\u6307\u5C16\u3002",2800)}function pw(n){let e=performance.now();if(!n&&!Qt.cubeDirty&&e-Qt.cubeT<2e4)return;Qt.cubeDirty=!1,Qt.cubeT=e,Qt.water.visible=!1;let t=Qt.fish.map(i=>i.g.visible);Qt.fish.forEach(i=>i.g.visible=!1),Wd.update(li,Re),Qt.water.visible=!0,Qt.fish.forEach((i,s)=>i.g.visible=t[s])}var st=new Fe,ei=new Fe;st.add(ei);Re.add(st);var ie={arms:[],petals:[],anim:null,animT:0,idleT:0,breathT:0,petalT:20,stepIdx:0};{let n=me("#f0d6b8",{r:.8}),e=me("#c8a464",{r:.95});ie.robeM=new At({color:"#3f4f6e",roughness:.9}),ie.obiM=me("#93402d"),ie.yukata=oi(256,256,(p,y,v)=>{p.fillStyle="#2c4a78",p.fillRect(0,0,y,v),p.strokeStyle="rgba(240,244,250,.75)",p.lineWidth=2.5;for(let w=0;w<v;w+=32)for(let C=w/32%2?16:0;C<y;C+=32)p.beginPath(),p.arc(C,w,10,0,Math.PI*2),p.stroke(),p.beginPath(),p.moveTo(C-10,w),p.lineTo(C+10,w),p.moveTo(C,w-10),p.lineTo(C,w+10),p.stroke()},[2,1.5]);let t=(p,y,v,w,C,A=ei)=>{let D=new W(p,y);return D.position.set(v,w,C),A.add(D),D};ie.body=t(new nt(.17,.28,.5,16),ie.robeM,0,.32,0),t(new nt(.205,.215,.065,16),ie.obiM,0,.43,0);for(let p of[-1,1]){let y=t(new Vt(.03,.16,.012),me("#f2ede2"),p*.045,.52,.168);y.rotation.z=p*.5,y.rotation.x=-.25}ie.head=new Fe,ie.head.position.set(0,.74,0),ei.add(ie.head),t(new Xe(.2,22,16),n,0,0,0,ie.head);let i=new Xe(.022,8,6),s=me("#1d1a17",{r:.4});t(i,s,.07,.02,.18,ie.head),t(i,s,-.07,.02,.18,ie.head);let r=new Xe(.03,8,6),a=me("#e9a597");t(r,a,.115,-.04,.15,ie.head),t(r,a,-.115,-.04,.15,ie.head),ie.hat=t(new Xi(.38,.2,24),e,0,.21,0,ie.head);for(let p of[1,-1]){let y=new Fe;y.position.set(p*.2,.5,.02),ei.add(y),t(new Xe(1,12,10),ie.robeM,0,-.08,0,y).scale.set(.078,.13,.08);let w=t(new Xe(.035,10,8),n,0,-.2,.02,y);y.userData.hand=w,ie.arms.push(y)}let o=new Xe(.06,8,6),l=me("#2b2622");ie.feet=[t(o,l,.09,.04,.06),t(o,l,-.09,.04,.06)],ie.feet.forEach(p=>p.scale.set(1,.6,1.4)),ie.legs=new Fe,ei.add(ie.legs);for(let p of[-1,1]){let y=t(new Xe(1,14,10),ie.robeM,p*.07,.06,.13,ie.legs);y.scale.set(.17,.065,.08),y.rotation.y=p*.45}ie.legs.visible=!1,ie.scarf=new Fe,ei.add(ie.scarf);let c=me("#a8382c",{r:.95}),h=t(new cr(.135,.04,8,20),c,0,.575,0,ie.scarf);h.rotation.x=Math.PI/2,h.scale.set(1,1,.8);let u=t(new Vt(.07,.2,.03),c,.08,.47,.15,ie.scarf);u.rotation.z=.15,ie.scarfTail=u,ie.fan=new Fe,ie.arms[0].userData.hand.add(ie.fan),t(new nt(.009,.009,.14,6),me("#c9b48a"),0,-.06,.02,ie.fan);let f=oi(128,128,(p,y,v)=>{p.fillStyle="#f4efe2",p.beginPath(),p.arc(64,64,62,0,7),p.fill(),p.fillStyle="#d8573a",p.beginPath(),p.arc(78,52,18,0,7),p.fill(),p.strokeStyle="#5d7fb0",p.lineWidth=4;for(let w=0;w<3;w++)p.beginPath(),p.arc(64,100+w*7,40,Math.PI*1.15,Math.PI*1.85),p.stroke()}),d=t(new us(.14,24),new At({map:f,side:Ft,roughness:.9}),0,-.24,.03,ie.fan);d.rotation.y=Math.PI/2+.5,ie.fan.visible=!1,ie.umb=new Fe,ie.umb.position.set(.13,.42,.1),ei.add(ie.umb),t(new nt(.012,.012,1.05,6),me("#5a3f2c"),0,.48,0,ie.umb);let g=oi(256,64,(p,y,v)=>{p.fillStyle="#c79a52",p.fillRect(0,0,y,v),p.strokeStyle="rgba(90,60,30,.6)",p.lineWidth=2;for(let w=0;w<24;w++)p.beginPath(),p.moveTo(w*y/24,0),p.lineTo(w*y/24,v),p.stroke();p.fillStyle="rgba(160,50,40,.8)",p.fillRect(0,v-12,y,7)}),x=t(new Xi(.6,.24,24,1,!0),new At({map:g,side:Ft,roughness:.6}),0,.98,0,ie.umb);t(new Xe(.03,8,6),me("#3a2a20"),0,1.1,0,ie.umb),ie.umb.visible=!1,ie.umbK=0,ie.lan=new Fe,ie.lan.position.set(-.22,.24,.24),ei.add(ie.lan),t(new nt(.004,.004,.12,4),me("#2b2622"),0,.06,0,ie.lan),ie.lanM=new At({color:"#f3e6c8",emissive:new we("#ffb35a"),emissiveIntensity:1.2,roughness:.8}),t(new Xe(1,14,10),ie.lanM,0,-.06,0,ie.lan).scale.set(.065,.09,.065);for(let p of[.03,-.15])t(new nt(.035,.035,.02,10),me("#1d1a17"),0,p,0,ie.lan);ie.lanLight=new Ha("#ffb35a",0,3.8,1.5),ie.lanLight.position.set(-.22,.18,.24),ei.add(ie.lanLight),ie.lan.visible=!1,ie.fog=[];for(let p=0;p<4;p++){let y=new hs(new Wi({map:null,color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));y.visible=!1,Re.add(y),ie.fog.push({sp:y,t:9})}}function mw(n){let e={spring:["#efe2e6","#b65a6a"],summer:["#ffffff","#d9a54a"],autumn:["#b9592c","#3a302a"],winter:["#3f4f6e","#93402d"]}[n];ie.robeM.color.set(e[0]),ie.robeM.map=n==="summer"?ie.yukata:null,ie.robeM.needsUpdate=!0,ie.obiM.color.set(e[1]),ie.scarf.visible=n==="winter",n!=="spring"&&(ie.petals.forEach(t=>ie.hat.parent.remove(t)),ie.petals.length=0)}function $h(n){ie.anim=n,ie.animT=0,ie.idleT=0}var fr=new Fe;ei.add(fr);{let n=me("#a27b50",{r:.8}),e=new b(.21,.42,.06),t=new b(0,.07,-.75),i=e.distanceTo(t),s=new W(new nt(.018,.018,i,6),n);s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new b(0,1,0),e.clone().sub(t).normalize()),fr.add(s);let r=new W(new Vt(.95,.05,.06),n);r.position.copy(t),fr.add(r);for(let a=-2;a<=2;a++){let o=new W(new Vt(.025,.08,.025),n);o.position.set(a*dl,.02,-.75),fr.add(o)}fr.visible=!1}Un(st,!0,!1);st.position.set(.5,0,5.2);st.rotation.y=Math.PI;var Xd=[];{let n=new On(.15,.1);for(let e=0;e<32;e++){let t=new W(n,new At({color:"#ffffff",side:Ft,roughness:.9}));Re.add(t);let i={m:t,ph:Se()*10,rest:0};qd(i,!0),Xd.push(i)}}function qd(n,e){n.m.position.set(-10+Se()*22,e?Se()*7:5+Se()*2.5,-3.2+Se()*13),n.m.rotation.set(Se()*6,Se()*6,Se()*6),n.rest=0}var Bh=(n,e)=>[(n-Ge.x0)*Vn,(e-Ge.z0)*Vn],Qa=(n,e)=>n>Ge.x0+.05&&n<Ge.x1-.05&&e>Ge.z0+.05&&e<Ge.z1-.05;function gw(n,e,t,i){let[s,r]=Bh(n,e),[a,o]=Bh(t,i),l=a-s,c=o-r,h=Math.hypot(l,c);if(h<.5)return;let u=l/h,f=c/h,d=-f,g=u;s-=u*3,r-=f*3;let x=xr,m=dl*Vn;x.save(),x.lineCap="butt",x.strokeStyle=qE,x.lineWidth=m*5.3,x.beginPath(),x.moveTo(s,r),x.lineTo(a,o),x.stroke();for(let p=-2;p<=2;p++){let y=p*m+(Math.random()-.5)*.5;x.strokeStyle="rgba(118,112,102,0.45)",x.lineWidth=m*.38,x.beginPath(),x.moveTo(s+d*y,r+g*y),x.lineTo(a+d*y,o+g*y),x.stroke();let v=y+m*.36;x.strokeStyle="rgba(255,255,255,0.42)",x.lineWidth=m*.2,x.beginPath(),x.moveTo(s+d*v,r+g*v),x.lineTo(a+d*v,o+g*v),x.stroke()}x.restore(),yr=!0,ln(!0)}function vw(n,e,t,i){let[s,r]=Bh(n+Math.cos(t)*.09*i,e-Math.sin(t)*.09*i),a=xr;a.save(),a.translate(s,r),a.rotate(Math.atan2(Math.cos(t),Math.sin(t))),a.fillStyle="rgba(105,99,90,0.2)",a.beginPath(),a.ellipse(0,0,.11*Vn,.06*Vn,0,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.18)",a.beginPath(),a.ellipse(.01*Vn,.035*Vn,.09*Vn,.025*Vn,0,0,Math.PI*2),a.fill(),a.restore(),yr=!0,ln(!0)}var gs={};addEventListener("keydown",n=>{gs[n.code]=!0,n.code==="KeyR"&&W1(),(n.code==="KeyE"||n.code==="Space")&&(n.preventDefault(),q1())});addEventListener("keyup",n=>{gs[n.code]=!1});var Wn={id:null,ox:0,oy:0,x:0,y:0};var ji=z("joy"),G1=z("knob"),so=z("c");Hs&&ji.classList.remove("hidden");var ll=50;function xw(){ji.style.left="34px",ji.style.top="",ji.style.bottom="34px",G1.style.transform="",ji.classList.remove("active")}so.addEventListener("pointerdown",n=>{try{so.setPointerCapture(n.pointerId)}catch{}if(Dl(),Oe.on){Kw(n);return}if(ct.on){N4(n);return}if(le.on&&le.stage==="whisk"){le.down=n.pointerId,le.lx=n.clientX,le.ly=n.clientY;return}if(n.pointerType!=="mouse"&&n.clientX<innerWidth*.5&&Wn.id===null)Wn.id=n.pointerId,Wn.ox=n.clientX,Wn.oy=n.clientY,Wn.x=Wn.y=0,ji.style.left=n.clientX-60+"px",ji.style.top=n.clientY-60+"px",ji.style.bottom="auto",ji.classList.add("active");else if(dr.set(n.pointerId,{x:n.clientX,y:n.clientY}),dr.size===2){let[e,t]=[...dr.values()];Ka.d0=Math.hypot(e.x-t.x,e.y-t.y)||1,Ka.v0=gt.on?gt.fov:Fi}});so.addEventListener("pointermove",n=>{if(Oe.on){Jw(n);return}if(ct.on){F4(n);return}if(le.on&&le.down===n.pointerId){p4(n);return}if(n.pointerId===Wn.id){let e=n.clientX-Wn.ox,t=n.clientY-Wn.oy,i=Math.hypot(e,t);i>ll&&(e*=ll/i,t*=ll/i),Wn.x=e/ll,Wn.y=-t/ll,G1.style.transform=`translate(${e}px,${t}px)`}else if(dr.has(n.pointerId)){let e=dr.get(n.pointerId),t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,dr.size>=2){let[s,r]=[...dr.values()],a=Math.hypot(s.x-r.x,s.y-r.y)||1;gt.on?gt.fov=Dt(Ka.v0*Ka.d0/a,18,75):Fi=Dt(Ka.v0*Ka.d0/a,2.6,16)}else gt.on?(gt.yaw-=t*.005,gt.pitch=Dt(gt.pitch+i*.004,-.15,1.45)):(mr-=t*.006,gl=Dt(gl+i*.004,.02,1.25))}});function V1(n){if(Oe.on){jw(n);return}if(ct.on){z4(n);return}if(le.down===n.pointerId){le.down=null;return}n.pointerId===Wn.id&&(Wn.id=null,Wn.x=Wn.y=0,xw()),dr.delete(n.pointerId)}so.addEventListener("pointerup",V1);so.addEventListener("pointercancel",V1);so.addEventListener("wheel",n=>{if(n.preventDefault(),Oe.on){Oe.cam.h=Dt(Oe.cam.h+n.deltaY*.02,10,40);return}if(gt.on){gt.fov=Dt(gt.fov+n.deltaY*.03,18,75);return}Fi=Dt(Fi*(1+n.deltaY*.001),2.6,16)},{passive:!1});var dr=new Map,Ka={d0:1,v0:10},ti=!1,mt=!1,xi=null,Qm=0;function Ht(n,e=2600){let t=z("toast");t.textContent=n,t.classList.add("show"),clearTimeout(Qm),Qm=setTimeout(()=>t.classList.remove("show"),e)}function W1(){mt||(ti=!ti,fr.visible=ti,z("rakeBtn").classList.toggle("on",ti),Ht(ti?"\u62D6\u8457\u8019\u5B50\u6162\u6162\u8D70\uFF0C\u8EAB\u5F8C\u6703\u7559\u4E0B\u6C99\u7D0B":"\u653E\u4E0B\u8019\u5B50"))}z("rakeBtn").onclick=W1;z("resetBtn").onclick=()=>{xr.drawImage(Kh,0,0),yr=!0,ln(!0),Ht("\u767D\u7802\u56DE\u5230\u6700\u521D\u7684\u6A23\u5B50")};var X1={spring:["\u82B1\u958B\u4E86\uFF0C\u4E5F\u6703\u843D\u3002","\u82B1\u671F\u5F88\u77ED\uFF0C\u6240\u4EE5\u6162\u6162\u770B\u3002","\u98A8\u4E00\u5439\uFF0C\u4E0B\u8D77\u7C89\u7D05\u8272\u7684\u96EA\u3002","\u4EC0\u9EBC\u90FD\u4E0D\u7528\u505A\u3002"],summer:["\u96E8\u843D\u5728\u9752\u6953\u4E0A\u3002","\u7E61\u7403\u82B1\u5728\u96E8\u88E1\u6700\u597D\u770B\u3002","\u807D\u96E8\u3002","\u6FD5\u6FD5\u7684\uFF0C\u4E5F\u5F88\u597D\u3002"],autumn:["\u98A8\u5F88\u8F15\u3002","\u8449\u5B50\u7D05\u4E86\uFF0C\u4E0D\u6025\u8457\u6389\u3002","\u77F3\u982D\u5728\u9019\u88E1\uFF0C\u5DF2\u7D93\u5F88\u4E45\u4E86\u3002","\u6C99\u7D0B\u4E82\u4E86\uFF0C\u518D\u8019\u5C31\u597D\u3002"],winter:["\u96EA\u843D\u5728\u677E\u4E0A\uFF0C\u6C92\u6709\u8072\u97F3\u3002","\u6885\u82B1\u5148\u958B\u4E86\u3002","\u51B7\uFF0C\u4F46\u5F88\u4E7E\u6DE8\u3002","\u807D\uFF0C\u6C92\u6709\u8072\u97F3\u7684\u8072\u97F3\u3002"]};function q1(){xi==="lantern"?(sn.on=!sn.on,Ht(sn.on?"\u71C8\u4EAE\u4E86":"\u71C8\u7184\u4E86")):xi==="sit"?Hh():xi==="stand"?lo():xi==="wash"?dw():xi==="feed"?fw():xi==="cat"?a4():xi==="kuji"?Eg():xi==="bowls"?(mt||Hh(),ou()):xi==="wish"&&Fl("\u5BEB\u4E00\u500B\u9858\u671B","\u639B\u5728\u7AF9\u5B50\u4E0A",16,"\u639B\u4E0A\u53BB",d4)}z("ctxBtn").onclick=q1;function Hh(){mt=!0,ti=!1,fr.visible=!1,z("rakeBtn").classList.remove("on");let n=Yn/8,e=Dt(Math.round((st.position.x-qn)/n-.5),0,7);kh.set(qn+(e+.5)*n,.75,-5.3),Xh=0;let t=z("poem"),i=X1[it];t.textContent=i[Math.floor(Math.random()*i.length)],setTimeout(()=>t.classList.add("show"),900),ro(),xs("choices"),ji.style.opacity="0",Yd=performance.now(),document.body.classList.add("sitting")}var Yd=0;function lo(){mt&&performance.now()-Yd>8e3&&setTimeout(s4,700),mt=!1,document.body.classList.remove("sitting"),z("poem").classList.remove("show"),en.mode&&iu(),le.on&&Sg(),ct.on&&up(),z("listenOverlay").classList.contains("show")&&fg(),xs(null),ji.style.opacity=""}var kh=new b;z("helpBtn").onclick=()=>{z("intro").classList.remove("fade")};z("how").innerHTML=(Hs?["\u5DE6\u534A\u908A\u62D6\u66F3\u8D70\u8DEF\uFF0C\u53F3\u534A\u908A\u62D6\u66F3\u8F49\u8996\u89D2","\u300C\u8019\u6C99\u300D\u7559\u4E0B\u7D0B\u8DEF\uFF0C\u4E5F\u80FD\u6383\u6389\u843D\u8449","\u300C\u9020\u5EAD\u300D\uFF1A\u81EA\u5DF1\u64FA\u653E\u77F3\u982D","\u8D70\u8FD1\u7DE3\u5074\u3001\u71C8\u7C60\u3001\u624B\u6C34\u7F3D\u3001\u6C60\u908A\uFF0C\u53F3\u4E0B\u6703\u51FA\u73FE\u80FD\u505A\u7684\u4E8B","\u7DE3\u5074\u5DE6\u908A\u6709\u7C64\u7BB1\uFF0C\u6BCF\u5929\u53EF\u4EE5\u62BD\u4E00\u5F35","\u5B63\u7BC0\u8DDF\u8457\u65E5\u671F\uFF0C\u5149\u7DDA\u8DDF\u8457\u6642\u9593","\u53F3\u4E0A\u300C\u97F3\u300D\uFF1A\u97F3\u91CF\u8207\u7761\u524D\u6A21\u5F0F\u30FB\u5EFA\u8B70\u6234\u8033\u6A5F"]:["WASD\uFF0F\u65B9\u5411\u9375\u8D70\u8DEF\uFF0C\u6ED1\u9F20\u62D6\u66F3\u8F49\u8996\u89D2","R \u8019\u6C99\uFF08\u4E5F\u80FD\u6383\u843D\u8449\uFF09\u30FBE\uFF0F\u7A7A\u767D\u9375\uFF1A\u4E92\u52D5","\u300C\u9020\u5EAD\u300D\uFF1A\u81EA\u5DF1\u64FA\u653E\u77F3\u982D","\u8D70\u8FD1\u7DE3\u5074\u3001\u71C8\u7C60\u3001\u624B\u6C34\u7F3D\u3001\u6C60\u908A\uFF0C\u53F3\u4E0B\u6703\u51FA\u73FE\u80FD\u505A\u7684\u4E8B","\u5B63\u7BC0\u8DDF\u8457\u65E5\u671F\uFF0C\u5149\u7DDA\u8DDF\u8457\u6642\u9593\uFF081\uFF5E4\u3001T \u53EF\u5207\u63DB\uFF09","\u53F3\u4E0A\u300C\u97F3\u300D\uFF1A\u97F3\u91CF\u8207\u7761\u524D\u6A21\u5F0F\u30FB\u5EFA\u8B70\u6234\u8033\u6A5F"]).map(n=>`<li>${n}</li>`).join("");var Md=!1;z("startBtn").onclick=()=>{z("intro").classList.add("fade"),O.on&&Xs(),!Md&&(Md=!0,setTimeout(()=>$h("bow"),700),setTimeout(()=>bg(!0),900))};function ds(n){if(n===xi)return;xi=n;let e=z("ctxBtn");if(!n){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent={sit:"\u5750\u4E0B",stand:"\u8D77\u8EAB",kuji:"\u62BD\u7C64",bowls:"\u980C\u7F3D",wish:"\u5BEB\u9858\u671B",wash:"\u6D17\u624B",feed:"\u9935\u9B5A",cat:"\u6478\u6478\u8C93"}[n]||(sn.on?"\u7184\u71C8":"\u9EDE\u71C8")}var _l={spring:{name:"\u6625",title:"\u6625\u30FB\u6AFB\u82B1",text:"\u82B1\u671F\u77ED\u66AB\u537B\u6975\u81F4\u7D62\u721B\uFF0C\u8C61\u5FB5\u751F\u547D\u7684\u7121\u5E38\u3001\u9752\u6625\u8207\u65B0\u7684\u958B\u59CB\u3002",sky:"#e9e5e7",fog:[32,80],hemi:["#f4f1f4",1.2],sun:["#fff2e6",1.85],ground:"#7b8659",moss:["#6b8a40","#5a7a36"],gravel:"#ffffff",rough:.96,leaves:{cols:["#f6c3d0","#f9dbe3","#f2aec0","#ffffff"],size:.7,speed:.28,sway:.7}},summer:{name:"\u590F",title:"\u590F\u30FB\u7E61\u7403\u82B1\uFF0F\u9752\u6953",text:"\u6885\u96E8\u4E2D\u7DBB\u653E\u7684\u7E61\u7403\u82B1\uFF0C\u548C\u5145\u6EFF\u751F\u547D\u529B\u7684\u65B0\u7DA0\u6953\u8449\u3002",sky:"#cdd8d5",fog:[20,60],hemi:["#e3ecea",1.3],sun:["#f4f6f2",.85],ground:"#5e7547",moss:["#4f7a35","#40692c"],gravel:"#d9d9d5",rough:.75,leaves:null,rain:!0},autumn:{name:"\u79CB",title:"\u79CB\u30FB\u7D05\u8449\uFF0F\u9280\u674F",text:"\u6953\u8449\u8F49\u7D05\u3001\u9280\u674F\u67D3\u9EC3\uFF0C\u7D05\u9EC3\u4EA4\u7E54\u7684\u300C\u7D05\u8449\u72E9\u300D\u3002",sky:"#dde4e2",fog:[30,75],hemi:["#eef3f6",1.15],sun:["#ffe9cf",1.9],ground:"#7a7553",moss:["#62783a","#516a33"],gravel:"#ffffff",rough:.96,leaves:{cols:["#c4482b","#d6702c","#e3a23a","#b8392a","#e8bd34"],size:1,speed:.38,sway:.45}},winter:{name:"\u51AC",title:"\u51AC\u30FB\u677E\uFF0F\u6885",text:"\u5E38\u9752\u7684\u677E\u62AB\u4E0A\u96EA\u540A\uFF0C\u6885\u82B1\u5728\u5BD2\u51AC\u5C3E\u8072\u7387\u5148\u7DBB\u653E\uFF0C\u8C61\u5FB5\u5831\u6625\u3002",sky:"#e5eaee",fog:[24,65],hemi:["#f2f5f9",1.5],sun:["#eef3ff",1.6],ground:"#e3e7e9",moss:["#d6ddd8","#c9d3cc"],gravel:"#f7f9fb",rough:.96,leaves:null,snow:!0}},it="autumn",Ns=null,rd=new we("#eef2f5");function Zd(n){it=n;let e=_l[n];if(O1.forEach(i=>{for(let s in i.vars)i.vars[s].visible=s===i.k[n]}),Bd.visible=n==="summer",Os.forEach(i=>i.visible=n==="winter"),Re.fog.near=e.fog[0],Re.fog.far=e.fog[1],zs.material.color.set(e.ground),Tl.color.set(e.moss[0]),Ud.color.set(e.moss[1]),Jh.forEach((i,s)=>i.color.copy(Tl.color).multiplyScalar(1+.07*(s+1))),Gm){let i=n==="winter";zs.material.map=i?null:Gm,zs.material.normalMap=i?null:YE,i||zs.material.color.set({spring:"#d4dcbc",summer:"#b9c8a2",autumn:"#d0c7a2"}[n]),zs.material.needsUpdate=!0}io.material.color.set(e.gravel),io.material.roughness=e.rough;let t=new we;vd.forEach((i,s)=>{t.copy(i),Ki&&t.multiplyScalar(.7),n==="winter"?t.lerp(rd,.5):n==="summer"?t.offsetHSL(0,.06,-.02):n==="spring"&&t.offsetHSL(.01,0,.03),xd.setColorAt(s,t)}),xd.instanceColor.needsUpdate=!0,Ki&&(z1.forEach((i,s)=>{t.copy(i),n==="winter"?t.lerp(rd,.55):n==="summer"?t.offsetHSL(0,.06,-.02):n==="spring"&&t.offsetHSL(.01,.02,.04),Ki.setColorAt(s,t)}),Ki.instanceColor.needsUpdate=!0),yd.forEach(({mat:i,base:s})=>{i.color.copy(s),n==="winter"?i.color.lerp(rd,.42):n==="spring"&&i.color.offsetHSL(.01,0,.03)}),Ns=e.leaves,Xd.forEach((i,s)=>{i.m.visible=!!Ns,Ns&&(i.m.material.color.set(Ns.cols[s%Ns.cols.length]),i.m.scale.setScalar(Ns.size),qd(i,!0))}),pi.visible=!!e.rain,Pl.visible=!!e.snow,mw(n),window.__lightReady&&Gs(),typeof Qt<"u"&&(Qt.cubeDirty=!0),O.ctx&&Jr(),document.querySelectorAll("#seasons button").forEach(i=>i.classList.toggle("on",i.dataset.s===n))}var Gh=0;function Ed(){let n=_l[it];z("scTitle").textContent=n.title,z("scText").textContent=n.text;let e=z("seasonCard");e.classList.add("show"),clearTimeout(Gh),Gh=setTimeout(()=>e.classList.remove("show"),4500)}function Qd(n){if(n===it)return Ed();let e=z("fade");e.classList.add("on"),setTimeout(()=>{if(Zd(n),mt){let t=X1[n];z("poem").textContent=t[Math.floor(Math.random()*t.length)]}e.classList.remove("on"),Ed()},380)}document.querySelectorAll("#seasons button").forEach(n=>n.onclick=()=>Qd(n.dataset.s));addEventListener("keydown",n=>{let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);e>=0&&Qd(["spring","summer","autumn","winter"][e])});{let n=new Date().getMonth()+1;Zd(n>=3&&n<=5?"spring":n>=6&&n<=8?"summer":n>=9&&n<=11?"autumn":"winter")}var yw=[0,1,5,7,8],eu={spring:{density:.8,bell:.2,gap:[2.6,5.2],wind:.015,rain:0},summer:{density:.6,bell:.3,gap:[3.2,6.5],wind:0,rain:.075},autumn:{density:.7,bell:.35,gap:[3,6],wind:.04,rain:0},winter:{density:.5,bell:.6,gap:[4.5,8.5],wind:.06,rain:0}};function Mw(n,e,t){let i=Math.floor(n.sampleRate*e),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){let a=s.getChannelData(r);for(let o=0;o<i;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/i,t)}return s}function Ln(n,e,t="amb"){let i=O.bus[t];n.connect(i.dry);let s=O.ctx.createGain();s.gain.value=e,n.connect(s),s.connect(i.wet)}var Kd=1.6,Ew=n=>Math.pow(n/100,1.6)*1.35;function Jd(){if(!O.ctx)return;let n=O.ctx.currentTime;for(let[e,t]of[["mus",ks.music],["amb",ks.amb]]){let i=Ew(t);O.bus[e].dry.gain.setTargetAtTime(i,n,.1),O.bus[e].wet.gain.setTargetAtTime(i,n,.1)}}function Xs(){if(O.ctx){O.on&&O.ctx.state==="suspended"&&O.ctx.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;let e;try{e=new n}catch{return}O.ctx=e;let t=e.createGain();t.gain.value=0;let i=e.createDynamicsCompressor();i.threshold.value=-18,i.ratio.value=3,t.connect(i),i.connect(e.destination),O.master=t,O.verb=e.createConvolver(),O.verb.buffer=Mw(e,4.8,2.4);let s=e.createGain();s.gain.value=.6,O.verb.connect(s),s.connect(t),O.dry=e.createGain(),O.dry.gain.value=.75,O.dry.connect(t),O.bus={};for(let l of["mus","amb"]){let c=e.createGain(),h=e.createGain();c.connect(O.dry),h.connect(O.verb),O.bus[l]={dry:c,wet:h}}Jd();let r=e.createBuffer(1,e.sampleRate*3,e.sampleRate),a=r.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;O.noiseBuf=r;let o=()=>{let l=e.createBufferSource();return l.buffer=r,l.loop=!0,l.start(0,Math.random()*2),l};{let l=e.createGain();l.gain.value=.055,O.drone=l;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.4,c.connect(l),Ln(l,.65,"mus"),[[73.42,"sine",.5],[73.62,"sine",.35],[110,"sine",.3],[146.83,"triangle",.1]].forEach(([g,x,m])=>{let p=e.createOscillator();p.type=x,p.frequency.value=g;let y=e.createGain();y.gain.value=m,p.connect(y),y.connect(c),p.start()});let h=e.createOscillator();h.frequency.value=.045;let u=e.createGain();u.gain.value=220,h.connect(u),u.connect(c.frequency),h.start();let f=e.createOscillator();f.frequency.value=.029;let d=e.createGain();d.gain.value=.022,f.connect(d),d.connect(l.gain),f.start()}{let l=o(),c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=380,c.Q.value=.7;let h=e.createOscillator();h.frequency.value=.07;let u=e.createGain();u.gain.value=180,h.connect(u),u.connect(c.frequency),h.start(),O.wind=e.createGain(),O.wind.gain.value=0,l.connect(c),c.connect(O.wind),Ln(O.wind,.3)}{let l=o(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=900;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=5500,O.rain=e.createGain(),O.rain.gain.value=0,l.connect(c),c.connect(h),h.connect(O.rain),Ln(O.rain,.25)}{let l=o(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=2200;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=4800,h.Q.value=.5;let u=e.createOscillator();u.frequency.value=7;let f=e.createGain();f.gain.value=1800,u.connect(f),f.connect(h.frequency),u.start(),O.rustle=e.createGain(),O.rustle.gain.value=0,l.connect(c),c.connect(h),h.connect(O.rustle),Ln(O.rustle,.25)}{let l=o(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2300,c.Q.value=.8;let h=e.createOscillator();h.frequency.value=5.5;let u=e.createGain();u.gain.value=600,h.connect(u),u.connect(c.frequency),h.start(),O.trickle=e.createGain(),O.trickle.gain.value=0,l.connect(c),c.connect(O.trickle),Ln(O.trickle,.35)}{let l=o(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2600,c.Q.value=.9;let h=e.createOscillator();h.frequency.value=3.2;let u=e.createGain();u.gain.value=700,h.connect(u),u.connect(c.frequency),h.start(),O.rake=e.createGain(),O.rake.gain.value=0,l.connect(c),c.connect(O.rake),Ln(O.rake,.15),O.rakeOn=!1}Jr(),O.on&&t.gain.linearRampToValueAtTime(Kd,e.currentTime+4),Q1(),j1()}function Jr(){if(!O.ctx)return;let n=eu[it],e=O.ctx.currentTime;O.wind.gain.setTargetAtTime(n.wind,e,1.5),O.rain.gain.setTargetAtTime(pi.visible?n.rain:0,e,1.5)}var Xn={active:!1,set:new Set,timers:[]};function qs(n){Xn.active&&Xn.set.add(n)}function Y1(n,e,t=1){let i=O.ctx,s=i.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.15*t,e+.006),s.gain.exponentialRampToValueAtTime(6e-4,e+3.3);let r=i.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(n*7,e),r.frequency.exponentialRampToValueAtTime(n*1.6,e+1.1);let a=i.createOscillator();a.type="triangle",a.frequency.setValueAtTime(n*1.008,e),a.frequency.exponentialRampToValueAtTime(n,e+.09);let o=i.createOscillator();o.type="sine",o.frequency.value=n*2.003;let l=i.createGain();l.gain.value=.22,a.connect(r),o.connect(l),l.connect(r),r.connect(s),Ln(s,.5,"mus"),a.start(e),o.start(e),a.stop(e+3.5),o.stop(e+3.5),qs("\u53E4\u7B8F")}function wd(n,e,t=1,i=6,s="\u9418\u8072"){qs(s);let r=O.ctx,a=r.createGain();a.gain.value=t*.09,Ln(a,.75,"mus"),[[1,1,1],[1.003,.6,1],[2.76,.4,.55],[5.4,.16,.35],[8.93,.07,.22]].forEach(([o,l,c])=>{let h=r.createOscillator();h.type="sine",h.frequency.value=n*o;let u=r.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+.01),u.gain.exponentialRampToValueAtTime(4e-4,e+i*c),h.connect(u),u.connect(a),h.start(e),h.stop(e+i*c+.1)})}function ro(){if(!O.ctx||!O.on)return;let n=O.ctx.currentTime+.05;wd(146.83,n,1.6,11,"\u980C\u7F3D"),wd(220.2,n+.02,.5,9,"\u980C\u7F3D")}var ad=3,Z1=n=>{let e=Math.floor(n/5),t=(n%5+5)%5;return 293.66*Math.pow(2,(yw[t]+12*e)/12)};function Q1(){let n=eu[it];if(O.ctx&&O.on&&O.ctx.state==="running"&&!ct.on&&Math.random()<n.density){let e=O.ctx.currentTime+.05,t=1+Math.floor(Math.random()*3);for(let i=0;i<t;i++){ad=Dt(ad+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)],-2,8);let s=Z1(ad);Math.random()<n.bell?wd(s,e,.7,5.5):Y1(s,e,.75+Math.random()*.35),e+=.4+Math.random()*.8}}setTimeout(Q1,(n.gap[0]+Math.random()*(n.gap[1]-n.gap[0]))*1e3*(mt?1.5:1))}function ts(n,e,t,i,s,r="sine",a=.3){let o=O.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(n,t),l.frequency.exponentialRampToValueAtTime(e,t+i),c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(s,t+.008),c.gain.exponentialRampToValueAtTime(3e-4,t+i),l.connect(c),Ln(c,a),l.start(t),l.stop(t+i+.05)}function K1(n){let e=2400+Math.random()*1400,t=2+Math.floor(Math.random()*4);for(let i=0;i<t;i++)ts(e*(1+Math.random()*.1),e*1.5,n+i*.13,.09,.018,"sine",.35);qs("\u9CE5\u9CF4")}function ww(n){ts(1700+Math.random()*900,700,n,.12,.03,"sine",.5),qs("\u5C4B\u7C37\u6EF4\u6C34")}function Sw(n){let e=4200+Math.random()*300;for(let t=0;t<3+Math.floor(Math.random()*4);t++)ts(e,e*.98,n+t*.16,.11,.008,"sine",.2);qs("\u9234\u87F2")}function J1(n){let e=230+Math.random()*60;for(let t=0;t<2+Math.floor(Math.random()*3);t++)ts(e*1.3,e,n+t*.22,.12,.03,"triangle",.3);qs("\u9752\u86D9")}function Sd(n){let e=xt>.5;it==="spring"&&!e?K1(n):it==="summer"?(pi.visible?ww:J1)(n):(it==="autumn"||it==="spring"&&e)&&Sw(n)}function j1(){O.ctx&&O.on&&O.ctx.state==="running"&&Math.random()<.6&&Sd(O.ctx.currentTime+.05),setTimeout(j1,1800+Math.random()*3500)}function Tw(){let n=O.ctx,e=n.currentTime+.05;ts(420,260,e,.18,.12,"triangle",.7);let t=n.createBufferSource();t.buffer=O.noiseBuf;let i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=4;let s=n.createGain();s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(5e-4,e+.08),t.connect(i),i.connect(s),Ln(s,.7),t.start(e,Math.random()*2),t.stop(e+.1),qs("\u9E7F\u5A01\u3057\uFF08\u7AF9\u7B52\u6572\u77F3\uFF09")}function es(n,e,t,i,s,r=.4,a="bandpass"){let o=O.ctx,l=o.createBufferSource();l.buffer=O.noiseBuf;let c=o.createBiquadFilter();c.type=a,c.frequency.value=t,c.Q.value=i;let h=o.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(s,n+.03),h.gain.setTargetAtTime(0,n+e*.5,e*.25),l.connect(c),c.connect(h),Ln(h,r),l.start(n,Math.random()*2),l.stop(n+e+.3)}function bw(){!O.ctx||!O.on||O.ctx.state!=="running"||es(O.ctx.currentTime,.8,1300,1.2,.07,.4)}function _w(){if(!O.ctx||!O.on||O.ctx.state!=="running")return;let n=O.ctx.currentTime;es(n,1.3,1800,.7,.09,.4);for(let e=0;e<5;e++)ts(1400+Math.random()*1200,500,n+.1+Math.random()*.8,.1,.02,"sine",.4)}function Rw(){!O.ctx||!O.on||O.ctx.state!=="running"||ts(650,170,O.ctx.currentTime,.12,.045,"sine",.4)}function Aw(){if(!O.ctx||!O.on||O.ctx.state!=="running")return;let n=O.ctx,e=n.currentTime,t=n.createBufferSource();t.buffer=O.noiseBuf,t.playbackRate.value=.8+Math.random()*.4;let i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=1600+Math.random()*900,i.Q.value=1.1;let s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.09,e+.015),s.gain.exponentialRampToValueAtTime(5e-4,e+.16),t.connect(i),i.connect(s),Ln(s,.1),t.start(e,Math.random()*2.5),t.stop(e+.2)}function Cw(n){!O.ctx||n===O.rakeOn||(O.rakeOn=n,O.rake.gain.setTargetAtTime(n?.055:0,O.ctx.currentTime,.08))}function jd(n,e,t){if(O.on=n,ks.on=n,z("soundBtn").classList.toggle("off",!n),z("muteBtn").textContent=n?"\u958B":"\u95DC",z("muteBtn").classList.toggle("on",n),typeof ln=="function"&&ln(),!O.ctx){n&&!t&&Xs();return}n&&O.ctx.state==="suspended"&&O.ctx.resume(),O.master.gain.cancelScheduledValues(O.ctx.currentTime),O.master.gain.setTargetAtTime(n?Kd:0,O.ctx.currentTime,.6),e||Ht(n?"\u8072\u97F3\u958B\u555F":"\u5B89\u975C\u6A21\u5F0F")}function Dl(){z("soundPanel").classList.add("hidden")}z("soundBtn").onclick=n=>{n.stopPropagation(),z("soundPanel").classList.toggle("hidden")};z("muteBtn").onclick=()=>jd(!O.on,!0);z("volMusic").value=ks.music;z("volAmb").value=ks.amb;z("volMusic").oninput=n=>{ks.music=+n.target.value,O.on&&Xs(),Jd(),ln()};z("volAmb").oninput=n=>{ks.amb=+n.target.value,O.on&&Xs(),Jd(),ln()};jd(O.on,!0,!0);var wn={on:!1,end:0,fading:!1,done:!1,lastTxt:""};function $d(){let n=z("sleepBtn");if(!wn.on){n.textContent="\u7761\u524D\u6A21\u5F0F\u30FB10 \u5206\u9418\u5F8C\u6162\u6162\u5B89\u975C",n.classList.remove("on");return}if(n.classList.add("on"),wn.fading){n.textContent="\u6B63\u5728\u6162\u6162\u5B89\u975C\u2026\uFF08\u9EDE\u4E00\u4E0B\u53D6\u6D88\uFF09";return}let e=Math.max(0,Math.ceil((wn.end-performance.now())/1e3)),t=Math.floor(e/60)+":"+String(e%60).padStart(2,"0");t!==wn.lastTxt&&(n.textContent=`\u7761\u524D\u6A21\u5F0F ${t}\uFF08\u9EDE\u4E00\u4E0B\u53D6\u6D88\uFF09`,wn.lastTxt=t)}function $1(){let n=z("sleepOverlay");n.style.transition="opacity 1.5s",n.classList.remove("show"),setTimeout(()=>{n.style.transition=""},1600),wn.on=!1,wn.fading=!1,wn.done=!1,$d(),O.ctx&&O.on&&(O.ctx.resume(),O.master.gain.cancelScheduledValues(O.ctx.currentTime),O.master.gain.setTargetAtTime(Kd,O.ctx.currentTime,1))}z("sleepBtn").onclick=()=>{if(wn.on){$1(),Ht("\u53D6\u6D88\u7761\u524D\u6A21\u5F0F");return}wn.on=!0,wn.end=performance.now()+10*6e4,O.on&&Xs(),$d(),Ht("\u5341\u5206\u9418\u5F8C\uFF0C\u5EAD\u9662\u6703\u6162\u6162\u5B89\u975C\u4E0B\u4F86\u3002",3200)};z("sleepOverlay").addEventListener("pointerdown",$1);function Pw(n){if(wn.on&&($d(),!wn.fading&&n>=wn.end)){if(wn.fading=!0,Dl(),mt&&lo(),O.ctx){let e=O.ctx.currentTime;O.master.gain.cancelScheduledValues(e),O.master.gain.setValueAtTime(O.master.gain.value,e),O.master.gain.linearRampToValueAtTime(0,e+90)}z("sleepOverlay").classList.add("show"),setTimeout(()=>{wn.fading&&(wn.done=!0,O.ctx&&O.ctx.suspend())},92e3)}}document.addEventListener("visibilitychange",()=>{O.ctx&&(document.hidden?O.ctx.suspend():O.on&&O.ctx.resume())});var xt=0,Sr="auto",od=null,ld=["auto",6.6,12,17.9,22],Dw={auto:"\u6642",6.6:"\u6668",12:"\u5348",17.9:"\u660F",22:"\u591C"},Iw={auto:"\u8DDF\u8457\u73FE\u5728\u7684\u6642\u9593",6.6:"\u6E05\u6668",12:"\u6B63\u5348",17.9:"\u9EC3\u660F",22:"\u591C\u665A"},uh=[{h:0,n:1},{h:4.8,n:1},{h:6.2,n:.18,sky:["#e9c2ae",.6],sun:["#ffad78",.85],sm:.55,hm:.75},{h:8,n:0,sky:["#f3e6d6",.15],sun:["#fff0dc",.3],sm:.95,hm:.95},{h:12,n:0},{h:16,n:0,sky:["#f0e2cc",.15],sun:["#ffe2bd",.4],sm:.95,hm:.95},{h:17.8,n:.18,sky:["#e8a57f",.6],sun:["#ff9152",.85],sm:.65,hm:.7},{h:19.2,n:1},{h:24,n:1}],Bs={on:Math.random()<.6,next:0},Lw=new we("#1a2232"),Uw=new we("#a3b6dc"),Nw=new we("#7d8db0"),Ja=new we,eg=new we;function Km(n,e){let t=new we(e.sky);n.sky&&t.lerp(Ja.set(n.sky[0]),n.sky[1]),t.lerp(Lw,n.n);let i=new we(e.sun[0]);n.sun&&i.lerp(Ja.set(n.sun[0]),n.sun[1]),i.lerp(Uw,n.n);let s=new we(e.hemi[0]).lerp(Nw,n.n);return{sky:t,sc:i,hc:s,si:Bn.lerp(e.sun[1]*(n.sm??1),.5,n.n),hi:Bn.lerp(e.hemi[1]*(n.hm??1),.42,n.n),n:n.n}}function na(){if(Sr!=="auto")return Sr;let n=new Date;return n.getHours()+n.getMinutes()/60}var wi=(()=>{let n=29.530588853,e=Date.UTC(2e3,0,6,18,14)/864e5,t=(Date.now()/864e5-e)/n%1;return t<0&&(t+=1),{p:t,illum:(1-Math.cos(2*Math.PI*t))/2}})(),tg=document.createElement("canvas");function ep(n){let e=n?256:128,t=tg;t.width=t.height=e;let i=t.getContext("2d"),s=Math.cos(2*Math.PI*wi.p),r=wi.p<.5,a=null;n&&(i.drawImage(n,n.width*.25,0,n.width*.5,n.height,0,0,e,e),a=i.getImageData(0,0,e,e).data);let o=i.createImageData(e,e);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(c+.5)/e*2-1,u=(l+.5)/e*2-1,f=h*h+u*u,d=(l*e+c)*4;if(f>1){o.data[d+3]=0;continue}let g=Math.sqrt(1-u*u),x=r?h>g*s:h<-g*s,m=.9+.1*Math.sin(h*9+u*5)*Math.sin(u*11-h*3),p=Math.min(1,(1-Math.sqrt(f))*18),y=a?.55+.6*(a[d]/255):m;x?(o.data[d]=Math.min(255,248*y),o.data[d+1]=Math.min(255,243*y),o.data[d+2]=Math.min(255,226*y),o.data[d+3]=255*p):(o.data[d]=60,o.data[d+1]=68,o.data[d+2]=88,o.data[d+3]=70*p)}i.putImageData(o,0,0)}ep(null);var tu=new ui(tg);tu.colorSpace=tn;setTimeout(()=>{let n=new Image;n.onload=()=>{og=n,ep(n),tu.needsUpdate=!0},n.src="assets/moon.jpg"},2500);var gn=new hs(new Wi({map:tu,fog:!1,transparent:!0,depthWrite:!1}));gn.scale.set(6.2,6.2,1);gn.position.set(-18,11,60);gn.renderOrder=-3;Re.add(gn);var Yr=new hs(new Wi({map:ta,color:"#dfe6ff",fog:!1,transparent:!0,depthWrite:!1}));Yr.scale.set(21,21,1);Yr.position.copy(gn.position);Yr.renderOrder=-3;Re.add(Yr);var Jm=new we("#e9edee"),dn=0,Fw=23.5,zw=120.5,En=Math.PI/180,wt={M:new qe,sun:new b(0,1,0),moon:new b(0,-1,0),planets:[],phase:.5,decSun:0,moonUp:0,times:null,timesKey:""},pl=[{name:"\u91D1\u661F",col:[1,.97,.88],size:8.5,el:n=>[76.6799+24659e-9*n,3.3946+275e-10*n,54.891+138374e-10*n,.72333,.006773-1302e-12*n,48.0052+1.6021302244*n]},{name:"\u706B\u661F",col:[1,.62,.45],size:4.8,el:n=>[49.5574+211081e-10*n,1.8497-178e-10*n,286.5016+292961e-10*n,1.523688,.093405+2516e-12*n,18.6021+.5240207766*n]},{name:"\u6728\u661F",col:[1,.95,.84],size:6.6,el:n=>[100.4542+276854e-10*n,1.303-1557e-10*n,273.8777+164505e-10*n,5.20256,.048498+4469e-12*n,19.895+.0830853001*n]},{name:"\u571F\u661F",col:[1,.9,.7],size:5,el:n=>[113.6634+23898e-9*n,2.4886-1081e-10*n,339.3939+297661e-10*n,9.55475,.055546-9499e-12*n,316.967+.0334442282*n]}];function Ow(){let n=new Date,e=n.getMonth(),t=n.getDate(),i=na();if(Ll&&it!==Wh()){let s={spring:[3,5],summer:[6,20],autumn:[9,20],winter:[0,15]}[it];e=s[0],t=s[1]}return{base:Date.UTC(n.getFullYear(),e,t)-8*36e5,h:i}}function tp(n){let e=n/864e5+24405875e-1-24515435e-1,t=Z=>(Z%360+360)%360,i=Z=>Math.sin(Z*En),s=Z=>Math.cos(Z*En),r=23.4393-3563e-10*e,a=(Z,ae,Ee)=>{let ye=ae*s(r)-Ee*i(r),De=ae*i(r)+Ee*s(r),ke=Math.hypot(Z,ye,De);return new b(Z/ke,ye/ke,De/ke)},o=(Z,ae)=>{let Ee=Z+ae/En*i(Z)*(1+ae*s(Z));for(let ye=0;ye<6;ye++)Ee-=(Ee-ae/En*i(Ee)-Z)/(1-ae*s(Ee));return Ee},l=282.9404+470935e-10*e,c=.016709-1151e-12*e,h=t(356.047+.9856002585*e),u=o(h,c),f=s(u)-c,d=Math.sqrt(1-c*c)*i(u),g=t(Math.atan2(d,f)/En+l),x=Math.hypot(f,d),m=x*s(g),p=x*i(g),y=t(h+l),v=(n/36e5%24+24)%24,w=t(y+180+v*15+zw),C=(Z,ae,Ee,ye,De,ke)=>{let rt=o(t(ke),De),Qe=ye*(s(rt)-De),St=ye*Math.sqrt(1-De*De)*i(rt),Q=Math.atan2(St,Qe)/En+Ee,un=Math.hypot(Qe,St);return[un*(s(Z)*s(Q)-i(Z)*i(Q)*s(ae)),un*(i(Z)*s(Q)+s(Z)*i(Q)*s(ae)),un*i(Q)*i(ae)]},A=pl.map(Z=>{let ae=C(...Z.el(e));return a(ae[0]+m,ae[1]+p,ae[2])}),D=t(125.1228-.0529538083*e),N=t(318.0634+.1643573223*e),S=t(115.3654+13.0649929509*e),T=o(S,.0549),U=60.2666*(s(T)-.0549),V=60.2666*Math.sqrt(1-.0549*.0549)*i(T),j=Math.atan2(V,U)/En+N,F=Math.hypot(U,V),X=F*(s(D)*s(j)-i(D)*i(j)*s(5.1454)),q=F*(i(D)*s(j)+s(D)*i(j)*s(5.1454)),se=F*i(j)*i(5.1454),ne=Math.atan2(q,X)/En,te=Math.atan2(se,Math.hypot(X,q))/En,re=t(S+N+D),oe=t(re-y),Me=t(re-D);return ne+=-1.274*i(S-2*oe)+.658*i(2*oe)-.186*i(h)-.059*i(2*S-2*oe)-.057*i(S-2*oe+h)+.053*i(S+2*oe)+.046*i(2*oe-h)+.041*i(S-h)-.035*i(oe)-.031*i(S+h)-.015*i(2*Me-2*oe)+.011*i(S-4*oe),te+=-.173*i(Me-2*oe)-.055*i(S-Me-2*oe)-.046*i(S+Me-2*oe)+.033*i(Me+2*oe)+.017*i(2*S+Me),{sunEq:a(m,p,0),moonEq:a(s(te)*s(ne),s(te)*i(ne),i(te)),planets:A,LST:w,phase:t(ne-g)/360}}function np(n,e){let t=Fw*En,i=n*En,s=new b(0,Math.sin(t),-Math.cos(t)),r=new b(0,Math.cos(t),Math.sin(t)),a=new b(-1,0,0),o=r.clone().multiplyScalar(Math.cos(i)).addScaledVector(a,Math.sin(i)),l=r.clone().multiplyScalar(Math.sin(i)).addScaledVector(a,-Math.cos(i));return(e||new qe).makeBasis(o,l,s)}function ng(n){let e=null,t=6,i=18,s=12,r=-2,a=new qe;for(let o=0;o<=24.001;o+=1/6){let l=tp(n+o*36e5),c=l.sunEq.clone().applyMatrix4(np(l.LST,a)).y,h=Math.sin(-.833*En);c>r&&(r=c,s=o),e!==null&&(e<h&&c>=h&&(t=o-1/6*(c-h)/(c-e)),e>=h&&c<h&&(i=o-1/6*(h-c)/(e-c))),e=c}return{sr:t,ss:i,noon:s}}function ig(n){let e=wt.times;if(!e)return n;let{sr:t,ss:i,noon:s}=e;if(n>=t&&n<=s)return 6+6*(n-t)/(s-t);if(n>s&&n<=i)return 12+6*(n-s)/(i-s);let r=n>i?n-i:n+24-i,a=18+12*r/(t+24-i);return a>=24?a-24:a}var jr=new Fe;jr.matrixAutoUpdate=!1;Re.add(jr);var sg=`attribute float aSize; attribute vec3 aCol; attribute float aPh; uniform float uT,uPx,uTw; varying vec3 vC; varying float vA;
void main(){ vec4 wp=modelMatrix*vec4(position,1.); float alt=wp.y/length(wp.xyz);
  float tw=1.0+uTw*0.22*sin(uT*(1.7+aPh*2.0)+aPh*9.0)*(1.0-alt*0.5);
  vA=smoothstep(-0.01,0.12,alt)*tw*(0.55+0.45*smoothstep(0.0,0.35,alt)); vC=aCol; gl_PointSize=aSize*uPx; gl_Position=projectionMatrix*viewMatrix*wp; }`,rg="uniform float uOp; varying vec3 vC; varying float vA; void main(){ float r=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,r); a=a*a*(0.6+0.4*a)+step(r,0.12)*0.6; gl_FragColor=vec4(vC*vA*uOp*a,1.0); }",Tr={uOp:{value:0},uT:{value:0},uPx:{value:Math.min(devicePixelRatio,2)},uTw:{value:1}},Bw=(()=>{let n=Xa.length/4,e=new Float32Array(n*3),t=new Float32Array(n),i=new Float32Array(n*3),s=new Float32Array(n),r=l=>l<0?[.72,.82,1]:l<.4?[.86+l*.35,.9+l*.2,1-l*.25]:l<1?[1,.98-(l-.4)*.25,.9-(l-.4)*.5]:[1,.8-Math.min(1,l-1)*.12,.6-Math.min(1,l-1)*.15];for(let l=0;l<n;l++){let c=Xa[l*4]/100*En,h=Xa[l*4+1]/100*En,u=Xa[l*4+2]/100,f=Xa[l*4+3]/100;e[l*3]=Math.cos(h)*Math.cos(c)*95,e[l*3+1]=Math.cos(h)*Math.sin(c)*95,e[l*3+2]=Math.sin(h)*95,t[l]=Math.max(2.4,Math.min(10,7.4-1.15*u));let d=Math.max(.3,Math.min(1.6,1.4-.22*u)),g=r(f);i.set([g[0]*d,g[1]*d,g[2]*d],l*3),s[l]=Math.random()}let a=new Pt;a.setAttribute("position",new zt(e,3)),a.setAttribute("aSize",new zt(t,1)),a.setAttribute("aCol",new zt(i,3)),a.setAttribute("aPh",new zt(s,1));let o=new Or(a,new Ct({uniforms:Tr,vertexShader:sg,fragmentShader:rg,transparent:!0,depthWrite:!1,blending:Gi}));return o.frustumCulled=!1,o.renderOrder=-5,jr.add(o),o})(),Rl={uOp:{value:0},uT:Tr.uT,uPx:Tr.uPx,uTw:{value:0}},ag=(()=>{let n=pl.length,e=new Pt;e.setAttribute("position",new zt(new Float32Array(n*3),3)),e.setAttribute("aSize",new zt(new Float32Array(pl.map(i=>i.size)),1)),e.setAttribute("aCol",new zt(new Float32Array(pl.flatMap(i=>i.col.map(s=>s*1.25))),3)),e.setAttribute("aPh",new zt(new Float32Array(n),1));let t=new Or(e,new Ct({uniforms:Rl,vertexShader:sg,fragmentShader:rg,transparent:!0,depthWrite:!1,blending:Gi}));return t.frustumCulled=!1,t.renderOrder=-4,jr.add(t),t})(),Vh={uOp:{value:0},uMap:{value:null}},ZS=(()=>{let n=new W(new Xe(97,64,32),new Ct({uniforms:Vh,side:Mn,transparent:!0,depthWrite:!1,blending:Gi,vertexShader:"varying vec3 vL; varying float vAlt; void main(){ vL=position; vec4 wp=modelMatrix*vec4(position,1.); vAlt=wp.y/length(wp.xyz); gl_Position=projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform sampler2D uMap; uniform float uOp; varying vec3 vL; varying float vAlt;
 float h3(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float vn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
 void main(){ vec3 e=normalize(vL); float u=fract((atan(e.y,e.x)+3.14159265)/6.2831853); float v=(asin(clamp(e.z,-1.,1.))+1.5707963)/3.14159265;
 float k=texture2D(uMap,vec2(u,v)).r; float n=vn(e*22.)*0.6+vn(e*61.)*0.4; k=pow(k,1.5)*(0.35+1.1*n)*smoothstep(0.0,0.2,vAlt); gl_FragColor=vec4(vec3(0.55,0.6,0.78)*k*uOp,1.0); }`}));return n.renderOrder=-6,n.frustumCulled=!1,n.visible=!1,jr.add(n),new Ko().load("assets/milkyway.webp",e=>{e.generateMipmaps=!1,e.minFilter=Nt,e.wrapS=$n,Vh.uMap.value=e,n.visible=!0}),n})(),og=null,jm=-1;function lg(){let{base:n,h:e}=Ow(),t=n;wt.timesKey!==t&&(wt.times=ng(n),wt.timesKey=t);let i=tp(n+e*36e5);np(i.LST,wt.M),jr.matrix.copy(wt.M),jr.matrixWorldNeedsUpdate=!0,wt.sun.copy(i.sunEq).applyMatrix4(wt.M),wt.moon.copy(i.moonEq).applyMatrix4(wt.M),wt.moon.y-=.0166*Math.sqrt(Math.max(0,1-wt.moon.y*wt.moon.y)),wt.moon.normalize(),wt.decSun=Math.asin(i.sunEq.z)/En,wt.phase=i.phase,wt.planetsEq=i.planets;let s=ag.geometry.attributes.position;i.planets.forEach((r,a)=>s.setXYZ(a,r.x*94,r.y*94,r.z*94)),s.needsUpdate=!0,wi.p=i.phase,wi.illum=(1-Math.cos(2*Math.PI*i.phase))/2,Math.abs(jm-wi.p)>.004&&(jm=wi.p,ep(og),tu.needsUpdate=!0),wt.moonUp=Bn.smoothstep(wt.moon.y,-.02,.12)}var nu=40,xh=new Float32Array(nu*3),yh=new Float32Array(nu*3),cg=[];for(let n=0;n<nu;n++){let e=Se(),t,i;e<.4?(t=-12.6+Se()*1.2,i=-2+Se()*12):e<.7?(t=-10+Se()*20,i=10.2+Se()*1.2):(t=11.8+Se()*1.2,i=-2+Se()*10),cg.push({x:t,z:i,y:.3+Se()*1.4,p1:Se()*10,p2:Se()*10,sp:.6+Se()*.8})}var Al=new Pt;Al.setAttribute("position",new zt(xh,3));Al.setAttribute("color",new zt(yh,3));var Il=new Or(Al,new za({size:.38,map:ta,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Gi}));Il.frustumCulled=!1;Re.add(Il);function Gs(){lg();let n=_l[it],e=ig(na()),t=0;for(;t<uh.length-2&&uh[t+1].h<=e;)t++;let i=uh[t],s=uh[t+1],r=Dt((e-i.h)/(s.h-i.h),0,1),a=Km(i,n),o=Km(s,n),l=a.sky.clone().lerp(o.sky,r);Re.background.copy(l),Re.fog.color.copy(l),dn=h4(e),Rn==="fog"&&(dn=Math.max(dn,.82)),dn>0&&(Re.fog.color.lerp(Jm,dn*.6),Re.background.lerp(Jm,dn*.45)),Re.fog.near=Bn.lerp(n.fog[0],1.5,dn),Re.fog.far=Bn.lerp(n.fog[1],24,dn),Ei.color.copy(a.sc).lerp(o.sc,r),Ei.intensity=Bn.lerp(a.si,o.si,r),ph.color.copy(a.hc).lerp(o.hc,r),ph.intensity=Bn.lerp(a.hi,o.hi,r)*(dt.env?.55:1),xt=Bn.lerp(a.n,o.n,r);let c=wi.illum*wt.moonUp;Ei.intensity*=1-xt*.5*(1-c);let h=Rn==="cloud"?.55:Rn==="rain"?.7:Rn==="snow"?.5:0;h&&(Ei.intensity*=1-h*.7,ph.intensity*=1+h*.15,Ja.set(xt>.5?"#1a1f27":"#c4cacc"),Re.background.lerp(Ja,h*.6),Re.fog.color.lerp(Ja,h*.6)),Rn==="sun"&&(Ei.intensity*=1.08);let u=wt.sun.clone();if(u.y<.14){let m=Math.hypot(u.x,u.z)||1;u.set(u.x/m*.99,.14,u.z/m*.99).normalize()}let f=wt.moon.y>.15?wt.moon.clone():new b(-.4,.82,.42).normalize();Ei.position.copy(u.multiplyScalar(30)).lerp(f.multiplyScalar(30),xt),Th.material.uniforms.bottom.value.copy(Re.fog.color),Th.material.uniforms.top.value.copy(Re.fog.color).lerp(Ja.set(xt>.5?"#0c1220":"#8fb0cf"),.55*(1-dn*.8)).lerp(eg.set("#e9a07a"),Math.max(0,1-Math.abs(e-17.8)/1.2)*.25*(1-xt)),Dd(e),gn.position.copy(wt.moon).multiplyScalar(85),Yr.position.copy(gn.position);let d=(1-xt)*.3*(wi.illum>.12?1:0)*(1-h);gn.material.opacity=Math.max(xt,d)*wt.moonUp,gn.visible=gn.material.opacity>.02,Yr.material.opacity=xt*(.12+.3*wi.illum)*wt.moonUp*(1-h*.7),Yr.visible=gn.visible&&xt>.1;let g=wi.illum*wt.moonUp;Tr.uOp.value=Dt(xt*1.35-.35,0,1)*(1-h*.9)*(1-dn*.5)*(1-g*.25),Bw.visible=Tr.uOp.value>.01,Rl.uOp.value=Dt(xt*1.8-.2,0,1)*(1-h*.85)*(1-dn*.7),ag.visible=Rl.uOp.value>.01,Vh.uOp.value=Bn.smoothstep(xt,.82,1)*(1-g*.85)*(1-h)*(dn>.2?0:1)*.2,co()&&wt.decSun>23.2&&wt.sun.y>.998&&pe.solstice!==ao()&&(pe.solstice=ao(),ln(),ft("solstice"),Ht("\u4ECA\u5929\u6B63\u5348\uFF0C\u5317\u56DE\u6B78\u7DDA\u4E0A\uFF0C\u7ACB\u7AFF\u7121\u5F71\u3002",6e3)),zd.material.emissiveIntensity=xt*.55,pi.visible=Rn==="rain"||!Rn&&!!n.rain&&xt<.4&&Bs.on,Pl.visible=!!n.snow||Rn==="snow",Il.visible=it==="summer"&&xt>=.4&&!pi.visible;let x=xt>.3;x!==od&&((od!==null||x)&&(sn.on=x),od=x,O.ctx&&Jr()),z("timeBtn").textContent=Dw[Sr]||"\u6642",document.body.classList.toggle("night",xt>.5)}window.__lightReady=!0;Gs();var fh=0;function Hw(n){if(Il.visible){for(let e=0;e<nu;e++){let t=cg[e],i=e*3;xh[i]=t.x+Math.sin(n*.3*t.sp+t.p1)*.9,xh[i+1]=t.y+Math.sin(n*.5*t.sp+t.p2)*.35,xh[i+2]=t.z+Math.cos(n*.25*t.sp+t.p2)*.9;let s=Math.pow(Math.max(0,Math.sin(n*1.3*t.sp+t.p1*3)),4)*xt;yh[i]=1*s,yh[i+1]=1*s,yh[i+2]=.4*s}Al.attributes.position.needsUpdate=!0,Al.attributes.color.needsUpdate=!0}}z("timeBtn").onclick=()=>{let n=ld.indexOf(Sr),e=ld[(n+1)%ld.length],t=z("fade");t.classList.add("on"),setTimeout(()=>{Sr=e,Gs(),Qt.cubeDirty=!0,t.classList.remove("on"),Ht(Iw[e]+(e==="auto"?"\uFF08\u73FE\u5728 "+new Date().toTimeString().slice(0,5)+"\uFF09":""))},380)};addEventListener("keydown",n=>{n.code==="KeyT"&&z("timeBtn").click()});var Ll=!1;function Wh(){let n=new Date().getMonth()+1;return n>=3&&n<=5?"spring":n>=6&&n<=8?"summer":n>=9&&n<=11?"autumn":"winter"}setInterval(()=>{!Ll&&Wh()!==it&&Qd(Wh())},6e4);document.querySelectorAll("#seasons button").forEach(n=>n.addEventListener("click",()=>{Ll=!0}));var en={mode:null,end:0,start:0,v:0,lastInfo:""};function xs(n){z("sitPanel").classList.toggle("hidden",!n),z("sitChoices").classList.toggle("hidden",n!=="choices"),z("sitRunning").classList.toggle("hidden",n!=="running")}function hg(n){if(!["t1","t3","t5","breath","listen","leaf","tea","bowls"].includes(n)){xs("choices");return}if(O.on&&Xs(),z("poem").classList.remove("show"),n==="listen"){Gw();return}if(n==="leaf"){e4();return}if(n==="tea"){wg();return}if(n==="bowls"){ou();return}en.start=performance.now(),n==="breath"?(en.mode="breath",z("breathDot").classList.add("show"),z("sitInfo").textContent=""):(en.mode="timer",en.mins=parseInt(n.slice(1)),en.end=en.start+en.mins*6e4,ro()),xs("running")}function iu(){en.mode==="breath"&&(z("breathDot").classList.remove("show"),O.drone&&O.drone.gain.setTargetAtTime(.055,O.ctx.currentTime,1)),en.mode=null,xs(mt?"choices":null)}function kw(n,e){if(en.mode==="timer"){let t=en.end-n;if(t<=0){ro(),setTimeout(ro,2600),Ht("\u6642\u9593\u5230\u4E86\uFF0C\u6162\u6162\u56DE\u4F86\u3002",3500),pe.zazenMin=(pe.zazenMin||0)+en.mins,ft("zazen"),iu();return}let i=Math.ceil(t/1e3),s=Math.floor(i/60)+":"+String(i%60).padStart(2,"0");s!==en.lastInfo&&(z("sitInfo").textContent=s,en.lastInfo=s)}else if(en.mode==="breath"){let t=(n-en.start)/1e3%10,i=r=>.5-.5*Math.cos(Math.PI*r);en.v=t<4?i(t/4):1-i((t-4)/6);let s=z("breathDot");s.style.transform=`translateX(-50%) scale(${.55+.65*en.v})`,s.style.opacity=.25+.45*en.v,O.drone&&O.ctx&&O.drone.gain.setTargetAtTime(.035+.06*en.v,O.ctx.currentTime,.25)}}document.querySelectorAll("#sitChoices button").forEach(n=>n.onclick=()=>hg(n.dataset.m));z("sitStop").onclick=()=>iu();function Gw(){O.on?Xs():jd(!0),Xn.active=!0,Xn.set.clear(),xs(null),z("listenOverlay").classList.add("show"),z("listenText").innerHTML="\u9589\u4E0A\u773C\u775B\u3002<br>\u6578\u4E00\u6578\uFF0C\u807D\u5230\u5E7E\u7A2E\u8072\u97F3\u3002",z("listenBack").textContent="\u63D0\u65E9\u7D50\u675F",setTimeout(ro,600);let e=(t,i)=>Xn.timers.push(setTimeout(()=>{Xn.active&&O.ctx&&t()},i));e(()=>Sd(O.ctx.currentTime+.05),9e3+Math.random()*5e3),e(()=>{In.t=Math.max(In.t,k1-2),In.phase=In.phase==="fill"?"fill":In.phase},2e4+Math.random()*12e3),e(()=>Sd(O.ctx.currentTime+.05),4e4+Math.random()*8e3),Xn.timers.push(setTimeout(ug,6e4))}function ug(){Xn.active&&(Xn.active=!1,Xn.timers.forEach(clearTimeout),Xn.timers=[],ro(),ft("listen"),z("listenText").innerHTML="\u807D\u5230\u5E7E\u7A2E\u5462\uFF1F",z("listenBack").textContent="\u56DE\u5230\u5EAD\u9662",Xn.timers.push(setTimeout(()=>{let n=eu[it],e=[];n.wind>0&&e.push("\u98A8"),pi.visible&&e.push("\u96E8"),Xn.set.forEach(t=>{t!=="\u980C\u7F3D"&&e.push(t)}),e.push("\u4F4E\u4F4E\u7684\u3001\u50CF\u547C\u5438\u4E00\u6A23\u7684\u6301\u7E8C\u97F3"),z("listenText").innerHTML="\u9019\u4E00\u5206\u9418\uFF0C\u5EAD\u9662\u88E1\u6709<br><b>"+e.join("\u3001")+"</b><br><br>\u4E5F\u8A31\uFF0C\u9084\u6709\u4F60\u81EA\u5DF1\u7684\u547C\u5438\u3002"},3500)))}function fg(){Xn.active=!1,Xn.timers.forEach(clearTimeout),Xn.timers=[],z("listenOverlay").classList.remove("show"),xs(mt?"choices":null)}z("listenBack").onclick=()=>{Xn.active?ug():fg()};var ip=140,di=(Array.isArray(pe.fallen)?pe.fallen:[]).filter(n=>Array.isArray(n)).map(n=>({x:n[0],z:n[1],r:n[2],c:n[3]}));function Ul(n,e){if(!Qa(n,e)||Qr(n,e)<.45||Math.hypot(n-mn.x,e-mn.z)<1.2)return!1;for(let t of Nd)if(Math.hypot(n-t.x,e-t.z)<t.r+.15)return!1;return!0}var dg=new On(.16,.11);dg.rotateX(-Math.PI/2);var Fs=new or(dg,new At({color:"#ffffff",side:Ft,roughness:.9}),ip);Fs.receiveShadow=!0;Fs.frustumCulled=!1;Re.add(Fs);function su(){let n=new qe,e=new vi,t=new we,i=new sr,s=new b(1,1,1),r=new b;di.forEach((a,o)=>{i.set(0,a.r,0),e.setFromEuler(i),n.compose(r.set(a.x,.012,a.z),e,s),Fs.setMatrixAt(o,n),t.set(a.c||"#c4482b"),Fs.setColorAt(o,t)}),Fs.count=di.length,Fs.instanceMatrix.needsUpdate=!0,Fs.instanceColor&&(Fs.instanceColor.needsUpdate=!0)}var Td=0;if(Id&&md>.4&&_l[it].leaves){let n=Math.min(70,Math.round(md*9)),e=_l[it].leaves.cols;for(let t=0;t<n&&di.length<ip;t++)for(let i=0;i<8;i++){let s=Ge.x0+.4+Math.random()*(Ge.w-.8),r=Ge.z0+.4+Math.random()*(Ge.d-.8);if(Ul(s,r)){di.push({x:s,z:r,r:Math.random()*6.28,c:e[Math.floor(Math.random()*e.length)]}),Td++;break}}}di=di.filter(n=>Ul(n.x,n.z));su();function Vw(n,e){let t=!1;for(let i=di.length-1;i>=0;i--){let s=di[i];Math.hypot(s.x-n,s.z-e)<.52&&(di.splice(i,1),t=!0)}t&&(su(),ln())}if(Id&&it==="winter"&&Math.random()<.6){let n=xr,e=Ge.z0+2+Math.random()*(Ge.d-4),t=1+Math.random()*1.5,i=Math.random()*6,s=Math.random()<.5?1:-1,r=1;for(let a=Ge.x0+.3;a<Ge.x1-.3;a+=.22){let o=s>0?a:Ge.x1+Ge.x0-a,l=e+Math.sin(o*.35+i)*t,c=Math.atan2(Math.cos(o*.35+i)*t*.35,1)*s;if(!Ul(o,l))continue;r*=-1;let[h,u]=Bh(o-Math.sin(c)*.05*r,l+Math.cos(c)*.05*r);n.save(),n.translate(h,u),n.rotate(s>0?c:Math.PI+c),n.fillStyle="rgba(105,99,92,0.28)",n.beginPath(),n.ellipse(0,0,.045*Vn,.04*Vn,0,0,7),n.fill();for(let f=-1.5;f<=1.5;f++)n.beginPath(),n.ellipse(.06*Vn,f*.028*Vn,.016*Vn,.014*Vn,0,0,7),n.fill();n.restore()}yr=!0}z("visitNote").textContent=no<=1?"\u7B2C\u4E00\u6B21\u4F86":`\u7B2C ${no} \u6B21\u4F86`;function br(){pe.visits=no,pe.last=Date.now(),pe.layout=fi,pe.fallen=di.map(n=>[+n.x.toFixed(2),+n.z.toFixed(2),+n.r.toFixed(2),n.c]),pe.vol=ks,_h($a,JSON.stringify(pe))}function Nl(){try{_h(M1,JSON.stringify({sig:w1(),img:oo.toDataURL("image/jpeg",.8)}))}catch{}}function ln(n){clearTimeout(Bm),Bm=setTimeout(br,1500),n&&(clearTimeout(Hm),Hm=setTimeout(Nl,4e3))}addEventListener("pagehide",()=>{br(),Nl()});document.addEventListener("visibilitychange",()=>{document.hidden&&(br(),Nl())});br();function Ww(){no>1&&md>3?Ht(Td?"\u597D\u4E45\u4E0D\u898B\u3002\u767D\u7802\u4E0A\u7A4D\u4E86\u4E00\u4E9B\u843D\u8449\u3002":"\u597D\u4E45\u4E0D\u898B\u3002",3800):Td>4&&Ht("\u767D\u7802\u4E0A\u7A4D\u4E86\u4E00\u4E9B\u843D\u8449\uFF0C\u8981\u8019\u4E00\u8019\u55CE\uFF1F",3800)}var Oe={on:!1,sel:null,drag:null,off:new b,cam:{x:0,z:3.4,h:22},pan:null},$r=new W(new Yo(1,1.07,56),new Dn({color:"#a33f2c",transparent:!0,opacity:.9,depthWrite:!1}));$r.rotation.x=-Math.PI/2;$r.visible=!1;$r.renderOrder=3;Re.add($r);var ru=new jc,Xw=new ki(new b(0,1,0),0),$m=new ce;function sp(n){$m.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),ru.setFromCamera($m,ut)}function pg(n){sp(n);let e=new b;return ru.ray.intersectPlane(Xw,e)?e:null}function qw(n){sp(n);let e=ru.intersectObjects(eo.children.map(t=>t.userData.hit),!1);return e.length?e[0].object.parent:null}function Yw(n){return eo.children.find(e=>e.userData.c===n)||null}function Vs(n){Oe.sel=n,$r.visible=!!n,document.querySelectorAll("#editBar [data-op]").forEach(e=>{e.dataset.op!=="default"&&(e.disabled=!n)})}function ml(n,e,t){let i=n.moss*(n.scale||1);if(e<Ge.x0+i*.55||e>Ge.x1-i*.55||t<Ge.z0+i*.55||t>Ge.z1-i*.55||Qr(e,t)<i*.75+.35)return!1;for(let s of[Xr,Sn,mn])if(Math.hypot(e-s.x,t-s.z)<i+.55)return!1;return!0}function Zw(){mt&&lo(),z("askCard").classList.remove("show"),Oe.on=!0,ti=!1,fr.visible=!1,z("rakeBtn").classList.remove("on"),document.body.classList.add("editing"),Oe.cam.h=ut.aspect<.8?30:21,Oe.cam.x=0,Oe.cam.z=3.4,Vs(null),Ht("\u62D6\u52D5\u77F3\u982D\uFF0C\u6392\u51FA\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662",3e3)}function Qw(){Oe.on=!1,Vs(null),document.body.classList.remove("editing"),Ht("\u91CD\u65B0\u8019\u7802\u4E2D\u2026",1200),setTimeout(()=>{S1(),yr=!0,Kr(),di=di.filter(t=>Ul(t.x,t.z)),su();let[n,e]=Ug(st.position.x,st.position.z);st.position.x=n,st.position.z=e,ft("garden"),br(),Nl(),Ht("\u6C99\u7D0B\u91CD\u65B0\u8019\u597D\u4E86")},80)}function Kw(n){let e=qw(n);if(e){Vs(e);let t=pg(n),i=e.userData.c;Oe.drag={id:n.pointerId},Oe.off.set(i.x-(t?t.x:i.x),0,i.z-(t?t.z:i.z))}else Oe.pan={id:n.pointerId,lx:n.clientX,ly:n.clientY,moved:0}}function Jw(n){if(Oe.drag&&n.pointerId===Oe.drag.id&&Oe.sel){let e=pg(n);if(!e)return;let t=Oe.sel.userData.c,i=e.x+Oe.off.x,s=e.z+Oe.off.z;ml(t,i,s)?(t.x=i,t.z=s,Oe.sel.position.set(i,0,s)):ml(t,i,t.z)?(t.x=i,Oe.sel.position.x=i):ml(t,t.x,s)&&(t.z=s,Oe.sel.position.z=s)}else if(Oe.pan&&n.pointerId===Oe.pan.id){let e=n.clientX-Oe.pan.lx,t=n.clientY-Oe.pan.ly,i=Oe.cam.h*.0021;Oe.pan.moved+=Math.abs(e)+Math.abs(t),Oe.pan.lx=n.clientX,Oe.pan.ly=n.clientY,Oe.cam.x=Dt(Oe.cam.x-e*i,-12,12),Oe.cam.z=Dt(Oe.cam.z-t*i,-4,11)}}function jw(n){Oe.drag&&n.pointerId===Oe.drag.id&&(Oe.drag=null),Oe.pan&&n.pointerId===Oe.pan.id&&(Oe.pan.moved<6&&Vs(null),Oe.pan=null)}var Cl={tall:{moss:.85,rocks:[[0,0,1.9,.55]]},trio:{moss:1.5,rocks:[[0,-.2,2,.55],[-.75,.3,1.1,.48],[.75,.35,.85,.45]]},flat:{moss:.9,rocks:[[0,0,.45,.95]]},moss:{moss:1,rocks:[]}};function $w(n){if(fi.length>=20){Ht("\u77F3\u982D\u5DF2\u7D93\u5920\u591A\u4E86");return}let e=Cl[n],t={k:n,x:0,z:0,moss:e.moss,rot:Math.random()*6.28,scale:1,seed:1+Math.floor(Math.random()*1e6),rocks:JSON.parse(JSON.stringify(e.rocks))},i=!1;for(let s=0;s<9&&!i;s+=.6)for(let r=0;r<12&&!i;r++){let a=Oe.cam.x+Math.cos(r/12*6.28)*s,o=Oe.cam.z+Math.sin(r/12*6.28)*s;ml(t,a,o)&&(t.x=a,t.z=o,i=!0)}if(!i){Ht("\u627E\u4E0D\u5230\u7A7A\u4F4D\uFF0C\u5148\u79FB\u958B\u4E00\u4E9B\u77F3\u982D");return}fi.push(t),Kr(),Vs(Yw(t))}document.querySelectorAll("#editBar [data-add]").forEach(n=>n.onclick=()=>$w(n.dataset.add));document.querySelectorAll("#editBar [data-op]").forEach(n=>n.onclick=()=>{let e=n.dataset.op;if(e==="default"){fi=JSON.parse(JSON.stringify(wl)),Kr(),Vs(null),Ht("\u77F3\u982D\u56DE\u5230\u539F\u672C\u7684\u4F4D\u7F6E");return}if(!Oe.sel)return;let t=Oe.sel,i=t.userData.c;if(e==="rot")i.rot=(i.rot||0)+Math.PI/6,t.rotation.y=i.rot;else if(e==="smaller"||e==="bigger"){let s=Dt((i.scale||1)+(e==="bigger"?.15:-.15),.6,1.8),r=i.scale||1;i.scale=s,ml(i,i.x,i.z)||(i.scale=r,Ht("\u9019\u88E1\u653E\u4E0D\u4E0B\u66F4\u5927\u7684\u4E86")),t.scale.setScalar(i.scale)}else e==="del"&&(fi.splice(fi.indexOf(i),1),Kr(),Vs(null))});z("editDone").onclick=Qw;z("editBtn").onclick=Zw;var Mh=[],bd=null;function Fl(n,e,t,i,s,r){z("keepRow").style.display=r?"flex":"none",z("keepChk").checked=!1,z("leafModalTitle").textContent=n;let a=z("leafInput");a.placeholder=e,a.maxLength=t,a.value="",z("leafOk").textContent=i,bd=s,z("leafModal").classList.remove("hidden"),setTimeout(()=>a.focus(),50)}function e4(){Fl("\u5728\u8449\u5B50\u4E0A\u5BEB\u4E00\u500B\u8A5E","\u4E00\u500B\u8A5E\u5C31\u597D",10,"\u653E\u4E0B",n=>{z("keepChk").checked&&(pe.notes.push({d:Date.now(),q:"\u5BEB\u5728\u8449\u5B50\u4E0A",a:n}),ln(),ft("note")),n4(n)},!0)}function rp(){z("leafModal").classList.add("hidden"),z("leafInput").blur()}z("leafCancel").onclick=rp;z("leafOk").onclick=()=>{let n=z("leafInput").value.trim();rp(),n&&bd&&bd(n)};z("leafInput").addEventListener("keydown",n=>{n.stopPropagation(),n.key==="Enter"&&z("leafOk").click(),n.key==="Escape"&&rp()});function t4(n){let e=document.createElement("canvas");e.width=320,e.height=200;let t=e.getContext("2d"),i={spring:"#f2b3c4",summer:"#7fae4a",autumn:"#cf5530",winter:"#e2d6b0"}[it],s=it==="autumn"||it==="summer";t.fillStyle=i,t.beginPath(),t.moveTo(14,100),t.bezierCurveTo(70,10,240,8,308,100),t.bezierCurveTo(240,192,70,190,14,100),t.fill(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=3,t.beginPath(),t.moveTo(14,100),t.lineTo(306,100),t.stroke(),t.lineWidth=1.5;for(let o=1;o<6;o++){let l=20+o*48;t.beginPath(),t.moveTo(l,100),t.quadraticCurveTo(l+20,70,l+34,40+o*2),t.moveTo(l,100),t.quadraticCurveTo(l+20,130,l+34,160-o*2),t.stroke()}t.strokeStyle=i,t.lineWidth=5,t.beginPath(),t.moveTo(16,100),t.lineTo(0,108),t.stroke();let r=n.length<=3?56:n.length<=5?44:n.length<=7?34:28;t.font=`600 ${r}px "Noto Serif TC","Songti TC",serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle=s?"rgba(255,248,236,.96)":"rgba(43,36,32,.92)",t.fillText(n,162,102);let a=new ui(e);return a.colorSpace=tn,a}function n4(n){pe.leafCount=(pe.leafCount||0)+1,ft("leaf");let e=new Fe,t=new W(new On(1.3,.81),new At({map:t4(n),transparent:!0,alphaTest:.05,side:Ft,roughness:.85}));t.castShadow=!0,e.add(t),e.rotation.y=Math.PI;let i=st.position;e.position.set(i.x+.2,i.y+2,i.z+.9),Re.add(e),Mh.push({grp:e,m:t,state:"fall",t:0,ph:Math.random()*6,vx:0,vz:0}),O.ctx&&O.on&&Y1(Z1(3),O.ctx.currentTime+.05,.6),z("poem").classList.remove("show")}function i4(n,e){for(let t=Mh.length-1;t>=0;t--){let i=Mh[t],s=i.grp;if(i.t+=n,i.state==="fall"){s.position.y-=.3*n,s.position.z+=.24*n,s.position.x+=Math.sin(e*1.1+i.ph)*.35*n;let r=ul(s.position.x,s.position.z)+.02,a=Dt((s.position.y-r)/.9,0,1);i.m.rotation.x=Bn.lerp(-Math.PI/2+.12,-.35+Math.sin(e*1.6+i.ph)*.35,a),s.rotation.y=Math.PI+Math.sin(e*.7+i.ph)*.35*a,s.position.y<=r&&(s.position.y=r,i.m.rotation.x=-Math.PI/2+.12,i.state="rest",i.t=0)}else if(i.state==="rest"){if(i.t>14&&(i.state="wind",i.t=0,O.ctx&&O.wind)){let r=O.ctx.currentTime;O.wind.gain.setTargetAtTime(.12,r,.4),setTimeout(()=>Jr(),2500)}}else{let r=Math.min(1,i.t/1.5);s.position.x+=1.6*r*n,s.position.z+=.9*r*n,s.position.y+=.35*r*n,i.m.rotation.x=-Math.PI/2+i.t*2.5,i.m.material.opacity=Math.max(0,1-i.t/3.5),i.t>3.5&&(Re.remove(s),i.m.geometry.dispose(),i.m.material.map.dispose(),i.m.material.dispose(),Mh.splice(t,1))}}}var e1={spring:["\u6700\u8FD1\uFF0C\u6709\u4EC0\u9EBC\u6B63\u5728\u4F60\u5FC3\u88E1\u6162\u6162\u767C\u82BD\uFF1F","\u5982\u679C\u4ECA\u5929\u662F\u4E00\u500B\u65B0\u7684\u958B\u59CB\uFF0C\u4F60\u60F3\u5F9E\u54EA\u4E00\u4EF6\u5C0F\u4E8B\u958B\u59CB\uFF1F","\u6709\u4EC0\u9EBC\u7F8E\u597D\u7684\u4E8B\uFF0C\u662F\u4F60\u6700\u8FD1\u5DEE\u9EDE\u932F\u904E\u7684\uFF1F"],summer:["\u6700\u8FD1\u8B93\u4F60\u60B6\u60B6\u7684\uFF0C\u662F\u4EC0\u9EBC\uFF1F\u5B83\u9700\u8981\u4E00\u5834\u96E8\u55CE\uFF1F","\u9019\u9663\u5B50\uFF0C\u4F60\u89BA\u5F97\u81EA\u5DF1\u5728\u54EA\u88E1\u9577\u5927\u4E86\u4E00\u9EDE\uFF1F","\u5982\u679C\u53EF\u4EE5\u8B93\u96E8\u5E36\u8D70\u4E00\u4EF6\u4E8B\uFF0C\u4F60\u60F3\u4EA4\u7D66\u5B83\u4EC0\u9EBC\uFF1F"],autumn:["\u9019\u9663\u5B50\uFF0C\u6709\u4EC0\u9EBC\u662F\u4F60\u6E96\u5099\u653E\u4E0B\u7684\uFF1F","\u4ECA\u5E74\u5230\u73FE\u5728\uFF0C\u4F60\u6536\u7A6B\u4E86\u4EC0\u9EBC\uFF1F\u54EA\u6015\u5F88\u5C0F\u3002","\u6709\u4EC0\u9EBC\u4E8B\uFF0C\u4F60\u60F3\u6162\u6162\u4F86\u5C31\u597D\uFF1F"],winter:["\u5B89\u975C\u4E0B\u4F86\u7684\u6642\u5019\uFF0C\u4F60\u6700\u5E38\u60F3\u8D77\u8AB0\uFF1F","\u73FE\u5728\u7684\u4F60\uFF0C\u9700\u8981\u4EC0\u9EBC\u6A23\u7684\u6EAB\u6696\uFF1F","\u9019\u500B\u51AC\u5929\uFF0C\u6709\u4EC0\u9EBC\u4E00\u76F4\u966A\u8457\u4F60\uFF1F"],dawn:["\u4ECA\u5929\u9192\u4F86\u6642\uFF0C\u4F60\u7684\u7B2C\u4E00\u500B\u5FF5\u982D\u662F\u4EC0\u9EBC\uFF1F"],day:["\u4ECA\u5929\u6709\u4EC0\u9EBC\u4E8B\uFF0C\u8B93\u4F60\u60F3\u6162\u4E0B\u4F86\uFF1F"],dusk:["\u4ECA\u5929\u6709\u6C92\u6709\u4E00\u500B\u7247\u523B\uFF0C\u503C\u5F97\u8A18\u4F4F\uFF1F"],night:["\u7761\u524D\uFF0C\u60F3\u5C0D\u4ECA\u5929\u7684\u81EA\u5DF1\u8AAA\u4EC0\u9EBC\uFF1F"]},t1="",n1=0;function s4(){let n=na(),e=n>=4.5&&n<9?"dawn":n<16&&n>=9?"day":n>=16&&n<19?"dusk":"night",t=[...e1[it],...e1[e]].filter(s=>s!==t1),i=t[Math.floor(Math.random()*t.length)];t1=i,z("askText").textContent=i,z("askCard").classList.add("show"),clearTimeout(n1),n1=setTimeout(()=>z("askCard").classList.remove("show"),14e3)}z("askOk").onclick=()=>{z("askCard").classList.remove("show")};z("askWrite").onclick=()=>{let n=z("askText").textContent;z("askCard").classList.remove("show"),Fl("\u5BEB\u4E0B\u4F60\u7684\u56DE\u7B54","\u5E7E\u500B\u5B57\u5C31\u597D",60,"\u6536\u9032\u624B\u5E16",e=>{pe.notes.push({d:Date.now(),q:n,a:e}),pe.notes.length>300&&pe.notes.shift(),ln(),ft("note"),Ht("\u6536\u9032\u624B\u5E16\u4E86\u3002")},!1)};var ze={present:Math.random()<.45||location.search.includes("cat"),x:0,z:-6.85,g:null,head:null,tail:null,body:null,eyesOpen:null,eyesShut:null,ears:[],awake:0,purrT:0,twitch:0};if(ze.present){let n=Yn/8,e=[0,2,3,4,5,7][Math.floor(Math.random()*7)];ze.x=qn+(e+.5)*n+(Math.random()-.5)*.6;let t=[{b:"#e49a52",s:"#c06f31",l:"#f8ecdb",k:"tabby"},{b:"#9a9893",s:"#64625e",l:"#efece6",k:"tabby"},{b:"#2b2827",s:null,l:"#f5f2ec",k:"tux"},{b:"#f6f1e8",s:null,l:"#fbf8f2",k:"calico"},{b:"#f1e6d3",s:"#e0c69e",l:"#fbf6ee",k:"tabby"}],i=t[Math.floor(Math.random()*t.length)],s=T=>(U,V,j)=>{if(U.fillStyle=i.b,U.fillRect(0,0,V,j),i.k==="tabby"){U.strokeStyle=i.s,U.globalAlpha=.55,U.lineCap="round";for(let F=1;F<20;F++){let X=F*j/20+(Math.random()-.5)*3;U.lineWidth=1.5+Math.random()*2.5,U.beginPath(),U.moveTo(T?V*.42:0,X);for(let q=T?V*.42:0;q<=V*1.08;q+=12)U.lineTo(q,X+Math.sin(q*.08+F)*2.5);U.stroke()}U.globalAlpha=1}if(i.k==="calico")for(let[F,X]of T?[["#d98b3d",5],["#2f2b28",4]]:[["#d98b3d",2],["#2f2b28",1]])for(let q=0;q<X;q++)U.fillStyle=F,U.beginPath(),U.ellipse(T?Math.random()*V:V*.55+Math.random()*V*.4,Math.random()*j*.5,18+Math.random()*16,12+Math.random()*10,Math.random()*3,0,7),U.fill();if(T){let F=U.createLinearGradient(V*.05,0,V*.45,0);F.addColorStop(0,"rgba(0,0,0,0)"),F.addColorStop(.3,i.l),F.addColorStop(.7,i.l),F.addColorStop(1,"rgba(0,0,0,0)"),U.fillStyle=F,U.fillRect(V*.05,0,V*.4,j)}for(let F=0;F<1500;F++)U.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.05)`,U.fillRect(Math.random()*V,Math.random()*j,1,3)},r=oi(256,128,s(!0)),a=oi(256,128,s(!1));a.wrapS=$n,r.wrapS=$n;let o=new At({map:r,roughness:.95}),l=me(i.l,{r:.95}),c=me("#e7a1a1",{r:.7}),h=me("#1b1817",{r:.35}),u=new Dn({color:"#ffffff"}),f=new Fe,d=new Xe(1,28,20);d.rotateX(Math.PI/2);let g=new W(d,o);if(g.scale.set(.24,.15,.27),g.position.y=.14,f.add(g),i.k==="tux"||i.k==="calico"){let T=new W(new Xe(1,16,12),l);T.scale.set(.12,.1,.1),T.position.set(.04,.12,.17),f.add(T)}for(let[T,U]of[[.07,.25],[-.03,.255]]){let V=new W(new Xe(1,12,10),i.k==="tabby"&&i.b!=="#f1e6d3"?o:l);V.scale.set(.042,.03,.06),V.position.set(T,.03,U),f.add(V)}let x=new Oa([new b(-.02,.1,-.25),new b(-.2,.07,-.15),new b(-.25,.05,.05),new b(-.15,.045,.22),new b(.03,.045,.3)]),m=new Zo(x,40,.034,10);{let T=m.attributes.position;for(let U=0;U<T.count;U++){let V=Math.floor(U/11)/40,j=1-V*.35,F=x.getPointAt(Math.min(1,V));T.setXYZ(U,F.x+(T.getX(U)-F.x)*j,F.y+(T.getY(U)-F.y)*j,F.z+(T.getZ(U)-F.z)*j)}m.computeVertexNormals()}let p=new Fe;f.add(p);let y=new W(m,o);p.add(y);let v=new W(new Xe(.023,10,8),i.k==="tux"?h:o);v.position.copy(x.getPointAt(1)),p.add(v);let w=new Fe;w.position.set(.11,.16,.2),w.rotation.set(.05,.45,.18),f.add(w);let C=new At({map:a,roughness:.95}),A=new W(new Xe(.115,24,18),C);A.scale.set(1.12,.94,1),w.add(A);for(let T of[-1,1]){let U=new W(new Xe(.038,12,10),l);U.position.set(T*.033,-.035,.088),U.scale.set(1,.85,.8),w.add(U)}let D=new W(new Xe(.012,8,6),c);D.scale.set(1.3,.8,.8),D.position.set(0,-.012,.113),w.add(D);for(let T of[-1,1]){let U=new Fe;U.position.set(T*.068,.078,-.01),U.rotation.set(-.15,0,-T*.32),w.add(U),ze.ears.push(U);let V=new W(new Xi(.046,.088,12),C);V.scale.z=.55,V.position.y=.035,U.add(V);let j=new W(new Xi(.03,.06,10),c);j.scale.z=.4,j.position.set(0,.03,.012),U.add(j)}ze.eyesShut=new Fe,ze.eyesOpen=new Fe,w.add(ze.eyesShut),w.add(ze.eyesOpen);for(let T of[-1,1]){let U=new W(new cr(.017,.0035,6,14,Math.PI),h);U.rotation.z=Math.PI,U.position.set(T*.043,.016,.104),U.rotation.y=T*.25,ze.eyesShut.add(U);let V=new W(new Xe(1,12,10),h);V.scale.set(.017,.022,.01),V.position.set(T*.043,.012,.103),ze.eyesOpen.add(V);let j=new W(new Xe(.0045,6,4),u);j.position.set(T*.043+.005,.02,.112),ze.eyesOpen.add(j)}ze.eyesOpen.visible=!1;let N=[];for(let T of[-1,1])for(let U of[-.008,.006])N.push(T*.05,-.02,.1,T*.13,-.02+U*2.2,.085);let S=new Pt;S.setAttribute("position",new Je(N,3)),w.add(new Fa(S,new lr({color:"#f2efe8",transparent:!0,opacity:.7}))),f.scale.setScalar(1.15),f.position.set(ze.x,.75,ze.z),f.rotation.y=(Math.random()-.5)*1,Un(f),Re.add(f),Object.assign(ze,{g:f,head:w,tail:p,body:g}),Ws.push({x:ze.x,z:ze.z,r:.32})}function i1(n,e,t,i,s=3.4){let r=Math.max(2,Math.round(s/1.15));for(let[a,o,l,c]of[["lowpass",300,.7,.5],["bandpass",720,1.1,.42],["bandpass",1500,1.6,.12]]){let h=n.createBufferSource();h.buffer=t,h.loop=!0;let u=n.createBiquadFilter();u.type=a,u.frequency.value=o,u.Q.value=l;let f=n.createGain();f.gain.value=.55;let d=n.createOscillator();d.type="sine",d.frequency.value=25;let g=n.createGain();g.gain.value=.45,d.connect(g),g.connect(f.gain);let x=n.createGain();x.gain.setValueAtTime(0,i);for(let m=0;m<r;m++){let p=i+m*(s/r),y=s/r,v=m%2===0;x.gain.linearRampToValueAtTime(c*(v?.75:1),p+y*.18),x.gain.linearRampToValueAtTime(c*(v?.6:.85),p+y*.8),x.gain.linearRampToValueAtTime(c*.25,p+y*.98)}x.gain.linearRampToValueAtTime(0,i+s+.15),h.connect(u),u.connect(f),f.connect(x),x.connect(e),h.start(i,Math.random()*2),d.start(i),h.stop(i+s+.3),d.stop(i+s+.3)}}function r4(n,e,t){let i=.62+Math.random()*.18,s=520+Math.random()*120,r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(s*.95,t),r.frequency.linearRampToValueAtTime(s*1.45,t+i*.35),r.frequency.linearRampToValueAtTime(s*1.1,t+i*.8),r.frequency.linearRampToValueAtTime(s*.85,t+i);let a=n.createOscillator();a.frequency.value=6;let o=n.createGain();o.gain.value=9,a.connect(o),o.connect(r.frequency);let l=n.createGain();l.gain.value=1;for(let[h,u,f]of[[900,6,.9],[1800,8,.55],[3e3,9,.22]]){let d=n.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(h*.8,t),d.frequency.linearRampToValueAtTime(h*1.15,t+i*.4),d.frequency.linearRampToValueAtTime(h*.9,t+i),d.Q.value=u;let g=n.createGain();g.gain.value=f,r.connect(d),d.connect(g),g.connect(l)}let c=n.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.32,t+.06),c.gain.setValueAtTime(.32,t+i*.55),c.gain.exponentialRampToValueAtTime(.001,t+i),l.connect(c),c.connect(e),r.start(t),a.start(t),r.stop(t+i+.05),a.stop(t+i+.05)}function a4(){if(ft("catpet"),ze.purrT=3.4,Ht(["\u547C\u5695\u2026\u2026\u547C\u5695\u2026\u2026","\u8C93\u7787\u8D77\u4E86\u773C\u775B\u3002","\u7260\u7FFB\u4E86\u500B\u8EAB\uFF0C\u53C8\u7761\u4E86\u3002","\u55B5\uFF5E","\u7260\u628A\u982D\u9760\u904E\u4F86\u4E86\u3002"][Math.floor(Math.random()*5)],2800),O.ctx&&O.on&&O.ctx.state==="running"){let n=O.ctx,e=n.currentTime+.03,t=n.createGain();t.gain.value=1,Ln(t,.12),Math.random()<.5?(r4(n,t,e),i1(n,t,O.noiseBuf,e+.75,3.2)):i1(n,t,O.noiseBuf,e,3.4),setTimeout(()=>t.disconnect(),5e3)}}function o4(n,e){if(!ze.present)return;let t=st.position,i=Math.hypot(t.x-ze.x,t.z-ze.z)<2.4&&t.y>.5;if(i&&ft("cat"),ze.awake+=((i||ze.purrT>0?1:0)-ze.awake)*(1-Math.exp(-n*3)),ze.body.scale.y=.15*(1+Math.sin(e*1.5)*.035),ze.head.position.y=.16+ze.awake*.06,ze.head.rotation.x=.05-ze.awake*.22,ze.head.rotation.z=.18*(1-ze.awake),i){let s=Math.atan2(t.x-ze.x,t.z-ze.z)-ze.g.rotation.y;ze.head.rotation.y+=(Dt(((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,-.9,.9)-ze.head.rotation.y)*n*3}else ze.head.rotation.y+=(.45-ze.head.rotation.y)*n*2;ze.eyesOpen.visible=ze.awake>.5&&ze.purrT<=0,ze.eyesShut.visible=!ze.eyesOpen.visible,ze.twitch-=n,ze.twitch<=0&&(ze.twitch=3+Math.random()*6,ze.earT=.25),ze.earT>0?(ze.earT-=n,ze.ears[Math.random()<.5?0:1].rotation.x=-.15-Math.sin(ze.earT*40)*.25):ze.ears.forEach(s=>s.rotation.x+=(-.15-s.rotation.x)*n*6),ze.tail.rotation.y=Math.sin(e*(ze.purrT>0?3:.7))*(ze.purrT>0?.12:.03),ze.purrT>0&&(ze.purrT-=n)}var qr={g:null,state:"perch",t:0,home:new b(Sn.x,1.79,Sn.z),away:new b(Sn.x+5,6.5,Sn.z+7),wings:[],enabled:Math.random()<.7};{let n=new Fe,e=me("#8a6a4a",{r:.9}),t=me("#6e5338"),i=me("#e9dccb"),s=new W(new Xe(1,10,8),e);s.scale.set(.055,.05,.075),n.add(s);let r=new W(new Xe(1,10,8),i);r.scale.set(.04,.035,.05),r.position.set(0,-.015,.02),n.add(r);let a=new W(new Xe(.035,10,8),e);a.position.set(0,.045,.05),n.add(a),qr.head=a;let o=new W(new Xi(.01,.03,5),me("#d89b3a"));o.rotation.x=Math.PI/2,o.position.set(0,.04,.09),n.add(o);let l=new W(new Vt(.03,.006,.06),t);l.position.set(0,.01,-.08),l.rotation.x=.4,n.add(l);for(let c of[-1,1]){let h=new W(new Vt(.07,.005,.05),t);h.position.set(c*.045,.015,0),n.add(h),qr.wings.push(h)}n.position.copy(qr.home),n.rotation.y=Math.PI,Un(n,!0,!1),Re.add(n),qr.g=n}function l4(n,e){if(!(qr.enabled&&it==="spring"&&xt<.5)){qr.g.visible=!1;return}let i=qr,s=st.position;i.t+=n;let r=Math.hypot(s.x-Sn.x,s.z-Sn.z);if(i.state==="perch")r<6&&co()&&ft("bird"),i.g.visible=!0,i.g.position.copy(i.home),i.g.position.y+=Math.max(0,Math.sin(e*5))*0,Math.random()<n*.5&&(i.g.rotation.y+=(Math.random()-.5)*1.6),i.head.rotation.y=Math.sin(e*2.3)*.4,i.wings.forEach(a=>a.rotation.z=0),r<2.6&&(i.state="fly",i.t=0,O.ctx&&O.on&&O.ctx.state==="running"&&K1(O.ctx.currentTime+.02));else if(i.state==="fly"||i.state==="back"){let a=Math.min(1,i.t/2.4),o=i.state==="fly"?a:1-a,l=o*o*(3-2*o);i.g.position.lerpVectors(i.home,i.away,l),i.g.position.y+=Math.sin(l*Math.PI)*.8,i.g.rotation.y=Math.atan2(i.away.x-i.home.x,i.away.z-i.home.z)+(i.state==="back"?Math.PI:0),i.wings.forEach((c,h)=>c.rotation.z=Math.sin(e*38)*.9*(h?1:-1)),a>=1&&(i.state==="fly"?(i.state="gone",i.t=0,i.g.visible=!1):(i.state="perch",i.t=0))}else i.state==="gone"&&i.t>40&&r>5&&(i.state="back",i.t=0,i.g.visible=!0)}pe.met=pe.met||{};var s1={first:"\u7B2C\u4E00\u6B21\u8D70\u9032\u5EAD\u9662",bird:"\u71C8\u7C60\u4E0A\u7684\u5C0F\u9CE5",cat:"\u7DE3\u5074\u7761\u8457\u7684\u8C93",catpet:"\u6478\u4E86\u6478\u8C93",frog:"\u624B\u6C34\u7F3D\u908A\u7684\u9752\u86D9",furin:"\u807D\u898B\u98A8\u9234",dragonfly:"\u9EC3\u660F\u7684\u7D05\u873B\u8713",rainbow:"\u96E8\u5F8C\u7684\u5F69\u8679",mist:"\u6E05\u6668\u7684\u8584\u9727",tanuki:"\u4E00\u9583\u800C\u904E\u7684\u5C0F\u72F8\u8C93",fullmoon:"\u6EFF\u6708\u4E0B\u5750\u5728\u7DE3\u5074",snowsit:"\u96EA\u591C\u5750\u5728\u7DE3\u5074",sakura:"\u5750\u770B\u4E00\u5834\u6AFB\u82B1",rainsit:"\u5750\u8457\u807D\u4E86\u4E00\u5834\u96E8",momiji:"\u5750\u770B\u7D05\u8449",fireflies:"\u590F\u591C\u7684\u87A2\u706B\u87F2",koi:"\u9935\u4E86\u9326\u9BC9",wash:"\u5728\u624B\u6C34\u7F3D\u6D17\u4E86\u624B",leaf:"\u5BEB\u4E0B\u7B2C\u4E00\u7247\u8449\u5B50",tea:"\u9EDE\u4E86\u4E00\u7897\u8336",omikuji:"\u62BD\u4E86\u4E00\u5F35\u7C64",listen:"\u9589\u4E0A\u773C\u775B\u807D\u4E86\u4E00\u5206\u9418",zazen:"\u975C\u5750\u5230\u980C\u7F3D\u97FF\u8D77",garden:"\u6392\u4E86\u81EA\u5DF1\u7684\u5EAD\u9662",sky:"\u62AC\u982D\u671B\u8457\u5929\u7A7A",mood:"\u8A18\u4E0B\u4E86\u5FC3\u60C5\u5929\u6C23",solstice:"\u5317\u56DE\u6B78\u7DDA\u4E0A\uFF0C\u7ACB\u7AFF\u7121\u5F71\u7684\u6B63\u5348",bowls:"\u5750\u5728\u980C\u7F3D\u524D",bowlrub:"\u8B93\u980C\u7F3D\u5531\u8D77\u6B4C\u4F86",bowllisten:"\u807D\u8457\u7F3D\u8072\u76F4\u5230\u6D88\u5931",bowlbreath:"\u8DDF\u8457\u7F3D\u8072\u547C\u5438",note:"\u6536\u9032\u4E00\u53E5\u81EA\u5DF1\u7684\u8A71",photo:"\u62CD\u4E0B\u4E00\u5F35\u5EAD\u9662",bansho:"\u807D\u898B\u508D\u665A\u7684\u9418\u8072",share:"\u628A\u5EAD\u9662\u5206\u4EAB\u7D66\u5225\u4EBA",visitcode:"\u770B\u4E86\u5225\u4EBA\u7684\u5EAD\u9662",stars:"\u591C\u88E1\u671B\u8457\u6EFF\u5929\u661F\u661F",meteor:"\u770B\u898B\u4E00\u9846\u6D41\u661F","mid-autumn":"\u4E2D\u79CB\u7684\u7CF0\u5B50\u8207\u8292\u8349",lantern:"\u5143\u5BB5\u5C4B\u7C37\u4E0B\u7684\u71C8",tanabata:"\u4E03\u5915\u5BEB\u4E86\u4E00\u500B\u9858\u671B"};function co(){return!Ll&&Sr==="auto"&&it===Wh()}function ft(n){pe.met[n]||(pe.met[n]=Date.now(),pe.bookNew=!0,z("bookDot").classList.add("on"),ln())}var cl="met",mg={sun:"#e6b84a",cloud:"#a7b0b5",rain:"#5f86b0",fog:"#cfd5d6",snow:"#eef3f7"};function ap(n){Dl(),pe.bookNew=!1,z("bookDot").classList.remove("on"),ln(),n&&(cl=n),document.querySelectorAll("#bookTabs button").forEach(s=>s.classList.toggle("on",s.dataset.t===cl));{let s=pe.bowlListen||[];z("bookStats").textContent=`\u4F86\u904E ${no} \u6B21\u30FB\u5BEB\u904E ${pe.leafCount||0} \u7247\u8449\u5B50\u30FB\u975C\u5750 ${pe.zazenMin||0} \u5206\u9418`+(s.length?`\u30FB\u807D\u7F3D\u5230\u5B89\u975C ${s.length} \u6B21\uFF08\u6700\u8FD1\u4E00\u6B21 ${s[s.length-1]} \u79D2\uFF09`:"")}let e=z("bookList"),t=z("bookYear");e.style.display="",t.style.display="none";let i=s=>{let r=new Date(s);return`${r.getMonth()+1}\u6708${r.getDate()}\u65E5`};if(cl==="met"){let s=Object.entries(pe.met).filter(([r])=>s1[r]).sort((r,a)=>r[1]-a[1]);e.innerHTML=s.map(([r,a])=>`<li><span class="d">${i(a)}</span>${s1[r]}</li>`).join("")+'<li class="blank">\u3000</li><li class="blank">\u3000</li><li class="blank">\u3000</li>'}else if(cl==="mood"){let s=Object.keys(pe.moods).sort((r,a)=>new Date(r.replace(/-/g,"/"))-new Date(a.replace(/-/g,"/"))).slice(-28);e.innerHTML=s.length?'<li class="moodrow">'+s.map(r=>{let a=pe.moods[r],o=r.split("-");return`<span class="mchip" style="background:${mg[a]}"><b>${Cd[a][0]}</b><i>${o[1]}/${o[2]}</i></span>`}).join("")+"</li>":'<li class="empty">\u9084\u6C92\u6709\u8A18\u4E0B\u5FC3\u60C5\u5929\u6C23\u3002</li>'}else cl==="notes"?e.innerHTML=pe.notes.length?pe.notes.slice().reverse().map(s=>`<li class="note"><span class="d">${i(s.d)}</span><small>${r1(s.q||"")}</small><span>${r1(s.a)}</span></li>`).join(""):'<li class="empty">\u9084\u6C92\u6709\u6536\u9032\u4F86\u7684\u77ED\u53E5\u3002\u8D77\u8EAB\u6642\u7684\u63D0\u554F\uFF0C\u53EF\u4EE5\u6309\u300C\u5BEB\u4E0B\u4F86\u300D\u3002</li>':(e.style.display="none",t.style.display="block",c4());z("book").classList.remove("hidden")}var r1=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.querySelectorAll("#bookTabs button").forEach(n=>n.onclick=()=>ap(n.dataset.t));function c4(){let n=z("yearCanvas"),e=Math.min(2,devicePixelRatio||1),t=Math.min(280,innerWidth*.72);n.width=t*e,n.height=t*e,n.style.width=t+"px",n.style.height=t+"px";let i=n.getContext("2d");i.scale(e,e),i.clearRect(0,0,t,t);let s=new Date,r=s.getFullYear(),a=r%4===0&&r%100!==0||r%400===0?366:365,o=t/2,l=t/2,c=t*.4,h=new Set(pe.days.filter(f=>f.startsWith(r+"-"))),u=0;for(let f=0;f<a;f++){let d=new Date(r,0,1+f),g=r+"-"+(d.getMonth()+1)+"-"+d.getDate(),x=f/a*Math.PI*2-Math.PI/2,m=o+Math.cos(x)*c,p=l+Math.sin(x)*c,y=h.has(g),v=pe.moods[g];y&&u++,i.beginPath(),i.arc(m,p,y?3.6:1.6,0,7),i.fillStyle=y?v?mg[v]:"#6e5038":"rgba(110,100,85,.25)",i.fill(),y&&v==="snow"&&(i.strokeStyle="#9aa6ad",i.lineWidth=.8,i.stroke()),d.toDateString()===s.toDateString()&&(i.beginPath(),i.arc(m,p,7,0,7),i.strokeStyle="#a33f2c",i.lineWidth=1.4,i.stroke())}i.fillStyle="#8a7f72",i.font='11px "Noto Serif TC",serif',i.textAlign="center",i.textBaseline="middle";for(let f=0;f<12;f++){let d=(new Date(r,f,15)-new Date(r,0,1))/864e5,g=d/a*Math.PI*2-Math.PI/2;i.fillText(f+1+"\u6708",o+Math.cos(g)*(c-22),l+Math.sin(g)*(c-22))}i.fillStyle="#2b2824",i.font='600 22px "Noto Serif TC",serif',i.fillText(r,o,l-10),i.font='13px "Noto Serif TC",serif',i.fillStyle="#6e655a",i.fillText(`\u4F86\u904E ${u} \u5929`,o,l+16)}z("bookBtn").onclick=n=>{n.stopPropagation(),ap()};z("bookClose").onclick=()=>z("book").classList.add("hidden");pe.bookNew&&z("bookDot").classList.add("on");ft("first");function dh(n){let e=new Date,t=e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate(),i=0;for(let s of n)i=(i*31+s.charCodeAt(0))%9973;return xl(t%10007,i,t%97)}function h4(n){return!fl.mist||n<4.6||n>9.6?0:n<6.6?Bn.smoothstep(n,4.6,6.2):1-Bn.smoothstep(n,7.2,9.6)}var a1=new Fr,o1=new qe;function l1(n){return o1.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),a1.setFromProjectionMatrix(o1),a1.containsPoint(n)}var gg=[];for(let n=0;n<12;n++){let e=new hs(new Wi({map:ta,color:"#f2f4f3",transparent:!0,opacity:0,depthWrite:!1}));e.scale.set(9+Se()*5,2.4+Se()*1.2,1),e.position.set(-13+Se()*26,.5+Se()*.8,-3+Se()*13),Re.add(e),gg.push(e)}var pn={a:0,target:0,until:0,mesh:null};{let i=[],s=[],r=[];for(let l=0;l<=72;l++){let c=l/72*Math.PI;for(let[h,u]of[[30,0],[33.5,1]])i.push(Math.cos(c)*h,Math.sin(c)*h,0),s.push(l/72,u)}for(let l=0;l<72;l++){let c=l*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}let a=new Pt;a.setAttribute("position",new Je(i,3)),a.setAttribute("uv",new Je(s,2)),a.setIndex(r);let o=oi(4,64,(l,c,h)=>{let u=l.createLinearGradient(0,h,0,0);[["rgba(150,80,200,0)",0],["rgba(140,90,220,.8)",.12],["rgba(80,120,230,.85)",.28],["rgba(90,190,120,.85)",.46],["rgba(240,220,90,.9)",.62],["rgba(245,150,70,.9)",.78],["rgba(230,80,70,.8)",.9],["rgba(230,80,70,0)",1]].forEach(([f,d])=>u.addColorStop(d,f)),l.fillStyle=u,l.fillRect(0,0,c,h)});o.wrapS=o.wrapT=Jn,pn.mesh=new W(a,new Dn({map:o,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:Ft})),pn.mesh.position.set(-4,-14,82),pn.mesh.scale.set(1.1,1,1),pn.mesh.visible=!1,Re.add(pn.mesh)}function u4(){pn.target=.42,pn.until=performance.now()+15e4}function vg(){Bs.next=performance.now()+(Bs.on?180+Math.random()*180:120+Math.random()*120)*1e3}vg();var ms={g:null,croakT:3};{let n=new Fe,e=me("#5f8f3a",{r:.6}),t=me("#a9c46a",{r:.6}),i=me("#151512",{r:.3}),s=new W(new Xe(1,12,10),e);s.scale.set(.07,.045,.08),s.position.y=.04,n.add(s);let r=new W(new Xe(1,10,8),t);r.scale.set(.055,.03,.06),r.position.set(0,.025,.02),n.add(r);for(let a of[-1,1]){let o=new W(new Xe(.02,8,6),e);o.position.set(a*.035,.085,.045),n.add(o);let l=new W(new Xe(.01,6,4),i);l.position.set(a*.04,.09,.06),n.add(l);let c=new W(new Xe(1,8,6),e);c.scale.set(.03,.02,.05),c.position.set(a*.065,.02,-.03),n.add(c)}n.position.set(mn.x+.6,.22,mn.z+.4),n.rotation.y=-.6,Un(n,!0,!1),Re.add(n),ms.g=n}var ri={g:null,sway:0,next:performance.now()+5e3};{let n=new Fe,e=Yn/8;n.position.set(qn+4.5*e+.3,3.86,-4.72);let t=new W(new nt(.003,.003,.42,4),me("#e8e2d2"));t.position.y=-.21,n.add(t);let i=new Fe;i.position.y=-.42,n.add(i),ri.bell=i;let s=new W(new Xe(.07,16,10,0,Math.PI*2,0,Math.PI*.55),new At({color:"#cfe4ee",transparent:!0,opacity:.55,roughness:.05,metalness:.1,side:Ft}));s.position.y=-.07,i.add(s);let r=new W(new Xe(.012,6,4),me("#c0392b"));r.position.set(0,-.035,.06),i.add(r);let a=new W(new nt(.002,.002,.16,4),me("#e8e2d2"));a.position.y=-.15,i.add(a);let o=new W(new On(.06,.2),me("#d9eef2",{side:Ft}));o.position.y=-.32,i.add(o),ri.paper=o,Re.add(n),ri.g=n}function op(){if(!O.ctx||!O.on||O.ctx.state!=="running")return;let n=O.ctx.currentTime,e=2150+Math.random()*450;for(let[t,i,s]of[[1,.05,1.8],[2.41,.022,1],[3.95,.01,.6]]){let r=O.ctx.createOscillator(),a=O.ctx.createGain();r.type="sine",r.frequency.value=e*t,a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(i,n+.004),a.gain.exponentialRampToValueAtTime(2e-4,n+s),r.connect(a),Ln(a,.55),r.start(n),r.stop(n+s+.1)}if(Math.random()<.5){let t=n+.22+Math.random()*.2,i=O.ctx.createOscillator(),s=O.ctx.createGain();i.type="sine",i.frequency.value=e*1.06,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.03,t+.004),s.gain.exponentialRampToValueAtTime(2e-4,t+1.2),i.connect(s),Ln(s,.55),i.start(t),i.stop(t+1.3)}qs("\u98A8\u9234"),it==="summer"&&co()&&ft("furin")}var xg=[];for(let n=0;n<7;n++){let e=new Fe,t=me("#c63b25",{r:.5}),i=new Dn({color:"#f3f0e6",transparent:!0,opacity:.35,side:Ft,depthWrite:!1}),s=new W(new nt(.008,.005,.14,6),t);s.rotation.x=Math.PI/2,s.position.z=-.04,e.add(s);let r=new W(new Xe(.014,8,6),t);r.position.z=.035,e.add(r);let a=[];for(let[o,l]of[[-1,.012],[1,.012],[-1,-.012],[1,-.012]]){let c=new W(new On(.08,.018),i);c.rotation.x=-Math.PI/2,c.position.set(o*.042,.004,l),e.add(c),a.push(c)}e.scale.setScalar(1.8),e.visible=!1,Re.add(e),xg.push({g:e,wings:a,x:-6+Se()*12,y:.8,z:Se()*8,tx:0,ty:.8,tz:3,hover:0,ph:Se()*6})}var _d={g:null,state:"none",t:0,seen:0,done:!1,spot:null};{let n=new Fe,e=me("#7a5a3c",{r:.95}),t=me("#a07a52",{r:.95}),i=me("#2a221b",{r:.8}),s=me("#e6dac4",{r:.9}),r=new W(new Xe(1,14,10),e);r.scale.set(.17,.15,.21),r.position.y=.15,n.add(r);let a=new Fe;a.position.set(0,.27,.17),n.add(a),_d.head=a,a.add(new W(new Xe(.11,14,12),t));for(let h of[-1,1]){let u=new W(new Xe(1,10,8),i);u.scale.set(.045,.032,.03),u.position.set(h*.045,.01,.085),a.add(u);let f=new W(new Xe(.011,6,4),me("#0c0b0a",{r:.2}));f.position.set(h*.045,.015,.112),a.add(f);let d=new W(new Xe(.03,8,6),i);d.position.set(h*.07,.085,-.01),a.add(d)}let o=new W(new Xe(.04,10,8),s);o.position.set(0,-.03,.1),a.add(o);let l=new W(new Xe(.012,6,4),i);l.position.set(0,-.015,.14),a.add(l);let c=new W(new nt(.05,.035,.22,10),e);c.rotation.x=1.1,c.position.set(0,.1,-.22),n.add(c),n.scale.setScalar(1.35),n.visible=!1,Un(n,!0,!1),Re.add(n),_d.g=n}var c1=[{x:-12.3,z:4.4,ry:Math.PI/2,dx:-1,dz:0},{x:-2.5,z:10.55,ry:Math.PI,dx:0,dz:1},{x:12.3,z:1.6,ry:-Math.PI/2,dx:1,dz:0}],yg={"mid-autumn":["\u4E2D\u79CB","\u7DE3\u5074\u4E0A\u64FA\u4E86\u7CF0\u5B50\u548C\u8292\u8349\uFF0C\u665A\u4E0A\u8A18\u5F97\u62AC\u982D\u770B\u770B\u6708\u4EAE\u3002"],lantern:["\u5143\u5BB5","\u5C4B\u7C37\u4E0B\u639B\u8D77\u4E86\u71C8\uFF0C\u591C\u88E1\u6703\u4EAE\u8D77\u4F86\u3002"],tanabata:["\u4E03\u5915","\u7AF9\u5B50\u4E0A\u639B\u8457\u9858\u671B\uFF0C\u4F60\u4E5F\u5BEB\u4E00\u5F35\u5427\u3002"]},$i=(()=>{let n=location.hash.slice(1);if(yg[n])return{kind:n,preview:!0};try{let e=new Intl.DateTimeFormat("zh-TW-u-ca-chinese",{month:"numeric",day:"numeric"}).formatToParts(new Date),t=(e.find(r=>r.type==="month")||{}).value||"",i=parseInt(t.replace(/\D/g,"")),s=parseInt((e.find(r=>r.type==="day")||{}).value);if(!/閏|bis/.test(t)){if(i===8&&s>=13&&s<=16)return{kind:"mid-autumn"};if(i===1&&s>=13&&s<=16)return{kind:"lantern"};if(i===7&&s>=5&&s<=8)return{kind:"tanabata"}}}catch{}return{kind:null}})(),Ji={lanterns:[],glows:[],strips:[]},ja={x:11.15,z:-2.85};if($i.kind==="mid-autumn"){let n=new Fe,e=Yn/8;n.position.set(qn+3.5*e,.75,-6.75);let t=me("#d8bc8a",{r:.8}),i=me("#f7f3ea",{r:.7}),s=new W(new Vt(.34,.12,.34),t);s.position.y=.06,n.add(s);let r=new W(new Vt(.4,.02,.4),t);r.position.y=.13,n.add(r);let a=new Xe(.045,12,10);[[3,.185],[2,.255],[1,.325]].forEach(([h,u])=>{for(let f=0;f<h;f++)for(let d=0;d<h;d++){let g=new W(a,i);g.position.set((f-(h-1)/2)*.088,u,(d-(h-1)/2)*.088),n.add(g)}});let o=new W(new nt(.06,.075,.34,12),me("#4a3b30",{r:.4}));o.position.set(.55,.17,.05),n.add(o);let l=me("#b9a477"),c=me("#e3d6b5",{r:1});for(let h=0;h<6;h++){let u=(h/6-.5)*1.4,f=new b(.55+Math.sin(u)*.35,1.05+Se()*.25,.05+Math.cos(u*2)*.08);n.add(vs(new b(.55,.3,.05),f,.006,.004,l));let d=new W(new Xe(1,8,6),c);d.scale.set(.035,.16,.035),d.position.copy(f).add(new b(Math.sin(u)*.06,.08,0)),d.rotation.z=-u*.6-.3,n.add(d)}Un(n),Re.add(n),Ji.center=n.position.clone()}if($i.kind==="lantern"){let n=Yn/8,e=me("#1c1a18");for(let t=0;t<8;t++){let i=qn+(t+.5)*n,s=new Fe;s.position.set(i,3.86,-4.62);let r=new W(new nt(.004,.004,.4,4),e);r.position.y=-.2,s.add(r);let a=new At({color:"#c8382a",emissive:new we("#ff6a3a"),emissiveIntensity:.5,roughness:.8}),o=new W(new Xe(1,16,12),a);o.scale.set(.2,.25,.2),o.position.y=-.62,s.add(o);for(let h of[-.38,-.86]){let u=new W(new nt(.08,.08,.04,12),e);u.position.y=h,s.add(u)}let l=new W(new nt(.012,.02,.18,6),me("#d9a531"));l.position.y=-.97,s.add(l);let c=new hs(new Wi({map:ta,color:"#ff9a5a",transparent:!0,opacity:.2,depthWrite:!1,blending:Gi}));c.scale.set(1.3,1.3,1),c.position.y=-.62,s.add(c),Re.add(s),Ji.lanterns.push({g:s,lm:a,ph:Se()*6}),Ji.glows.push(c)}}function f4(n,e){let t=document.createElement("canvas");t.width=64,t.height=256;let i=t.getContext("2d");if(i.fillStyle=e,i.fillRect(0,0,64,256),i.fillStyle="rgba(255,255,255,.25)",i.fillRect(0,0,64,6),n){let r=[...n].slice(0,16),a=r.length<=6?30:r.length<=10?22:16;i.font=`600 ${a}px "Noto Serif TC",serif`,i.fillStyle="rgba(40,32,28,.88)",i.textAlign="center",i.textBaseline="top",r.forEach((o,l)=>i.fillText(o,32,14+l*(a+2)))}let s=new ui(t);return s.colorSpace=tn,s}var h1=["#f2c94c","#e87a7a","#7fb3e0","#9ccf8a","#f3f0e8","#c9a0dc"],Rd=[];function Ad(n,e){let t=Rd[e%Rd.length],i=h1[Math.floor(Math.random()*h1.length)],s=new Fe;s.position.copy(t).add(new b((Math.random()-.5)*.3,0,(Math.random()-.5)*.3));let r=new W(new On(.11,.42),new At({map:f4(n,i),side:Ft,roughness:.9}));r.position.y=-.24,s.add(r),s.rotation.y=Math.random()*6,Re.add(s),Ji.strips.push({g:s,ph:Math.random()*6})}if($i.kind==="tanabata"){let n=new Fe,e=me("#7f9a4a",{r:.6}),t=me("#6f9a3e",{r:.8,side:Ft});n.position.set(ja.x,0,ja.z);let i=new b(.25,3.9,.05);n.add(vs(new b(0,0,0),i,.06,.03,e));for(let a=1;a<9;a++){let o=new W(new cr(.055-a*.003,.01,5,12),e);o.rotation.x=Math.PI/2,o.position.set(i.x*a/9,i.y*a/9,i.z*a/9),n.add(o)}let s=new On(.06,.32);s.translate(0,.16,0);for(let a=0;a<7;a++){let o=1.6+a*.33,l=a*2.3,c=new b(i.x*o/3.9,o,0),h=c.clone().add(new b(Math.cos(l)*.75,.25,Math.sin(l)*.75));n.add(vs(c,h,.014,.008,e)),Rd.push(h.clone().add(n.position));for(let u=0;u<6;u++){let f=new W(s,t);f.position.copy(c).lerp(h,.4+u*.12),f.rotation.set(.9+Math.random()*.8,Math.random()*6,.4),n.add(f)}}Un(n),Re.add(n),Ws.push({x:ja.x,z:ja.z,r:.3});for(let a=0;a<9;a++)Ad("",a);let r=new Date().getFullYear();pe.wishes=pe.wishes&&pe.wishes.year===r?pe.wishes:{year:r,list:[]},pe.wishes.list.forEach((a,o)=>Ad(a,o+3))}function d4(n){Ad(n,Ji.strips.length+2),$i.preview||(pe.wishes.list.push(n),ft("tanabata"),ln()),Ht("\u9858\u671B\u639B\u4E0A\u53BB\u4E86\u3002",2600),O.ctx&&O.on&&op()}function Mg(){if(!$i.kind)return;let[n,e]=yg[$i.kind];z("scTitle").textContent=n,z("scText").textContent=e;let t=z("seasonCard");t.classList.add("show"),clearTimeout(Gh),Gh=setTimeout(()=>t.classList.remove("show"),6e3)}var yi={x:qn+1.5*(Yn/8),z:-6.95};{let n=new Fe;n.position.set(yi.x,.75,yi.z);let e=me("#b48a55",{r:.75}),t=me("#5a3f2c",{r:.8}),i=me("#a8352a",{r:.7}),s=new W(new nt(.15,.16,.42,6),e);s.position.y=.21,n.add(s);let r=new W(new nt(.162,.162,.06,6),i);r.position.y=.3,n.add(r);let a=new W(new nt(.16,.16,.03,6),t);a.position.y=.435,n.add(a);let o=new W(new Vt(.016,.2,.016),me("#ecdcb5"));o.position.set(.03,.52,0),o.rotation.z=.18,n.add(o);let l=oi(256,384,(d,g,x)=>{d.fillStyle="#f3ead6",d.fillRect(0,0,g,x),d.strokeStyle="#6e5038",d.lineWidth=14,d.strokeRect(7,7,g-14,x-14),d.fillStyle="#a8352a",d.font='600 150px "Noto Serif TC",serif',d.textAlign="center",d.textBaseline="middle",d.fillText("\u7C64",g/2,x*.4),d.fillStyle="#4a3b30",d.font='600 34px "Noto Serif TC",serif',d.fillText("\u6BCF\u65E5\u4E00\u5F35",g/2,x*.78)});l.wrapS=l.wrapT=Jn;let c=new W(new Vt(.04,.75,.04),t);c.position.set(-.38,.375,.05),n.add(c);let h=new W(new Vt(.34,.5,.025),[t,t,t,t,new At({map:l,roughness:.85,emissive:new we("#fff3dc"),emissiveMap:l,emissiveIntensity:0}),t]);h.position.set(-.38,.95,.07),h.rotation.y=.15,n.add(h),yi.board=h;let u=new W(new Vt(.44,.03,.12),t);u.position.set(-.38,1.22,.07),u.rotation.y=.15,n.add(u);let f=.48;for(let d of[-.25,.25]){let g=new W(new Vt(.035,.62,.035),t);g.position.set(f+d,.31,0),n.add(g)}for(let d of[.42,.58]){let g=new W(new nt(.006,.006,.5,4),me("#d9c8a0"));g.rotation.z=Math.PI/2,g.position.set(f,d,0),n.add(g);for(let x=0;x<5;x++){let m=new W(new Vt(.035,.06,.012),me("#fbf8f0",{r:.9}));m.position.set(f-.2+x*.1+(Math.random()-.5)*.03,d-.035,0),m.rotation.z=(Math.random()-.5)*.5,n.add(m)}}Un(n),Re.add(n),Ws.push({x:yi.x,z:yi.z,r:.2},{x:yi.x+f,z:yi.z,r:.25},{x:yi.x-.38,z:yi.z+.05,r:.18})}var cd=["\u4ECA\u5929\u8A18\u5F97\u559D\u6C34\u3002","\u4ECA\u5929\u53EF\u4EE5\u5C0D\u81EA\u5DF1\u5BEC\u5BB9\u4E00\u9EDE\u3002","\u6162\u6162\u4F86\uFF0C\u4E5F\u662F\u4E00\u7A2E\u524D\u9032\u3002","\u7D2F\u4E86\u5C31\u4F11\u606F\uFF0C\u4E0D\u7528\u89E3\u91CB\u3002","\u4ECA\u5929\u627E\u4E00\u500B\u4EBA\uFF0C\u8AAA\u8072\u8B1D\u8B1D\u3002","\u62AC\u982D\u770B\u770B\u5929\u7A7A\u5427\u3002","\u6709\u4E9B\u4E8B\uFF0C\u653E\u8457\u4E5F\u6C92\u95DC\u4FC2\u3002","\u4ECA\u5929\u597D\u597D\u5403\u4E00\u9813\u98EF\u3002","\u4F60\u5DF2\u7D93\u505A\u5F97\u5F88\u597D\u4E86\u3002","\u8D70\u6162\u4E00\u9EDE\uFF0C\u6703\u770B\u898B\u66F4\u591A\u3002","\u4ECA\u5929\u65E9\u4E00\u9EDE\u7761\u3002","\u7559\u4E00\u9EDE\u6642\u9593\u7D66\u81EA\u5DF1\u3002","\u4E0D\u5B8C\u7F8E\uFF0C\u4E5F\u5F88\u597D\u3002","\u4ECA\u5929\u5C0D\u8EAB\u908A\u7684\u4EBA\u7B11\u4E00\u4E0B\u3002","\u6DF1\u547C\u5438\u4E09\u6B21\uFF0C\u518D\u958B\u59CB\u3002","\u60F3\u5FF5\u8AB0\uFF0C\u5C31\u8DDF\u4ED6\u8AAA\u5427\u3002","\u4ECA\u5929\u4E0D\u7528\u6025\u8457\u56DE\u7B54\u3002","\u628A\u4E00\u4EF6\u5C0F\u4E8B\u505A\u597D\u5C31\u597D\u3002","\u4F60\u7684\u52AA\u529B\uFF0C\u6709\u4EBA\u770B\u898B\u3002","\u8AAA\u300C\u6211\u4E0D\u77E5\u9053\u300D\uFF0C\u4E5F\u6C92\u95DC\u4FC2\u3002","\u4E0B\u96E8\u5929\uFF0C\u4E5F\u6709\u4E0B\u96E8\u5929\u7684\u597D\u3002","\u7D66\u4ECA\u5929\u7684\u81EA\u5DF1\u4E00\u9EDE\u638C\u8072\u3002","\u4ECA\u5929\u51FA\u53BB\u8D70\u4E00\u8D70\u3002","\u5148\u7167\u9867\u597D\u81EA\u5DF1\u3002","\u6709\u9EDE\u4E82\uFF0C\u4E5F\u662F\u751F\u6D3B\u7684\u6A23\u5B50\u3002","\u4ECA\u5929\u807D\u4E00\u9996\u559C\u6B61\u7684\u6B4C\u3002","\u8A18\u5F97\u4F38\u5C55\u4E00\u4E0B\u80A9\u8180\u3002","\u5C11\u770B\u4E00\u9EDE\u87A2\u5E55\uFF0C\u591A\u770B\u4E00\u9EDE\u9060\u65B9\u3002"];function ao(){let n=new Date;return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()}function Eg(){let n=ao(),e=!1;if(pe.kuji&&pe.kuji.date===n)e=!0;else{let i;do i=Math.floor(Math.random()*cd.length);while(pe.kuji&&i===pe.kuji.i&&cd.length>1);pe.kuji={date:n,i},ft("omikuji"),ln()}if(O.ctx&&O.on&&O.ctx.state==="running"){let i=O.ctx.currentTime;for(let s=0;s<7;s++)ts(380+Math.random()*160,300,i+s*.07,.05,.04,"triangle",.2);es(i+.7,.35,4200,.8,.03,.2)}let t=new Date;z("kujiText").textContent=cd[pe.kuji.i],z("kujiDate").textContent=`${t.getMonth()+1}\u6708${t.getDate()}\u65E5`,z("kujiNote").textContent=e?"\u4ECA\u5929\u5DF2\u7D93\u62BD\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\u770B\u770B\u3002":"",setTimeout(()=>z("kujiCard").classList.add("show"),e?0:650)}z("kujiOk").onclick=()=>z("kujiCard").classList.remove("show");var le={on:!1,stage:"",prog:0,g:null,foam:null,liq:null,whisk:null,down:null,lx:0,ly:0,acc:0,t:0,base:new b,wx:0,wz:0,idle:0};{let n=new Fe,e=[[0,0],[.045,0],[.05,.012],[.09,.03],[.108,.07],[.112,.11],[.103,.108],[.088,.06],[.045,.034],[0,.03]].map(([h,u])=>new ce(h,u)),t=new W(new Go(e,40),new At({color:"#4a3326",roughness:.35,metalness:.05,side:Ft}));n.add(t),le.liq=new W(new us(.099,36),new At({color:"#3f5f2c",roughness:.3})),le.liq.rotation.x=-Math.PI/2,le.liq.position.y=.094,n.add(le.liq);let i=oi(128,128,(h,u,f)=>{h.fillStyle="#b8cf7a",h.fillRect(0,0,u,f);for(let d=0;d<900;d++){let g=Math.random()*2.2+.4;h.fillStyle=`rgba(${225+Math.random()*30},240,${190+Math.random()*30},${.25+Math.random()*.4})`,h.beginPath(),h.arc(Math.random()*u,Math.random()*f,g,0,7),h.fill()}});le.foam=new W(new us(.098,36),new At({map:i,transparent:!0,opacity:0,roughness:.9})),le.foam.rotation.x=-Math.PI/2,le.foam.position.y=.097,n.add(le.foam);let s=new Fe,r=me("#dcc58f",{r:.7}),a=new W(new nt(.011,.012,.09,10),r);a.position.y=.115,s.add(a);let o=new W(new nt(.03,.011,.07,18,1,!0),me("#efe2bd",{side:Ft}));o.position.y=.035,s.add(o),s.position.set(0,.07,0),n.add(s),le.whisk=s;let l=new W(new nt(.035,.035,.06,18),me("#1d1a18",{r:.25}));l.position.set(-.2,.03,-.05),n.add(l);let c=new W(new Vt(.17,.005,.012),r);c.position.set(.2,.004,.1),c.rotation.y=.4,n.add(c),n.scale.setScalar(1.6),n.visible=!1,Un(n),Re.add(n),le.g=n}function Zr(n){let e=z("teaHint");if(!n){e.classList.remove("show");return}e.textContent=n,e.classList.add("show")}function wg(){mt&&(le.on=!0,le.stage="whisk",le.prog=0,le.acc=0,le.idle=0,le.wx=le.wz=0,le.base.set(kh.x,.75,-5.5),st.visible=!1,le.g.position.copy(le.base),le.g.visible=!0,le.foam.material.opacity=0,le.foam.scale.setScalar(.3),le.liq.material.color.set("#3f5f2c"),le.whisk.position.set(0,.07,0),le.whisk.visible=!0,xs(null),z("poem").classList.remove("show"),setTimeout(()=>{le.on&&le.stage==="whisk"&&Zr("\u7528\u624B\u6307\u5728\u7897\u4E0A\u756B\u5708\uFF0C\u5237\u51FA\u7D30\u7D30\u7684\u6CE1\u6CAB")},900))}function p4(n){let e=n.clientX-le.lx,t=n.clientY-le.ly,i=Math.hypot(e,t);le.lx=n.clientX,le.ly=n.clientY,le.prog=Math.min(1,le.prog+i/(Math.min(innerWidth,innerHeight)*5.5)),le.acc+=i,le.idle=0,le.wx=Dt(le.wx+e*7e-4,-.05,.05),le.wz=Dt(le.wz+t*7e-4,-.05,.05),le.acc>38&&(le.acc=0,O.ctx&&O.on&&O.ctx.state==="running"&&es(O.ctx.currentTime,.12,3800+Math.random()*800,1.4,.045,.15)),le.prog>=1&&le.stage==="whisk"&&(le.stage="ready",Zr("\u6CE1\u6CAB\u7D30\u7D30\u7684\u3002\u6367\u8D77\u4F86\uFF0C\u559D\u4E00\u53E3\u3002"),z("teaDrink").classList.remove("hidden"))}z("teaDrink").onclick=()=>{z("teaDrink").classList.add("hidden"),Zr(""),le.stage="sip",le.t=0};function Sg(){st.visible=!0,le.on=!1,le.stage="",le.g.visible=!1,Zr(""),z("teaDrink").classList.add("hidden"),le.down=null}function m4(n,e){if(le.on){if(le.foam.material.opacity=Math.min(1,le.prog*1.25),le.foam.scale.setScalar(.3+.7*Math.min(1,le.prog*1.1)),le.liq.material.color.set("#3f5f2c").lerp(eg.set("#9dbb5e"),le.prog),le.stage==="whisk")le.wx*=1-n*4,le.wz*=1-n*4,le.whisk.position.set(le.wx,.07,le.wz),le.whisk.rotation.z=le.wx*4,le.whisk.rotation.x=-le.wz*4,le.idle+=n,le.idle>9&&le.prog<1&&(le.idle=0,Zr("\u6162\u6162\u756B\u5708\u5C31\u597D\uFF0C\u4E0D\u7528\u6025"));else if(le.stage==="ready")le.whisk.position.lerp(g4.set(.22,0,-.12),n*3),le.whisk.rotation.set(0,0,0);else if(le.stage==="sip"){le.t+=n;let t=Math.min(1,le.t/1.5),i=t*t*(3-2*t);le.whisk.visible=!1,le.g.position.set(le.base.x-.04*i,le.base.y+.75*i,le.base.z-.55*i),le.g.rotation.x=-.35*i,le.t>1&&!le.sipped&&(le.sipped=!0,O.ctx&&O.on&&O.ctx.state==="running"&&es(O.ctx.currentTime,.55,900,.7,.05,.2,"lowpass")),le.t>2&&(le.sipped=!1,le.g.rotation.x=0,Sg(),ft("tea"),Zr("\u5FAE\u82E6\uFF0C\u7136\u5F8C\u56DE\u7518\u3002"),setTimeout(()=>{le.on||(Zr(""),mt&&setTimeout(()=>{mt&&!le.on&&!en.mode&&xs("choices")},700))},3800))}}}var g4=new b,u1=0;function v4(n,e){let t=performance.now(),i=na(),s=st.position,r=co();t>Bs.next&&(Bs.on=!Bs.on,vg(),Gs(),Jr(),!Bs.on&&it==="summer"&&i>=12&&i<17.5&&Math.random()<.6&&u4()),t>pn.until&&(pn.target=0),(it!=="summer"||xt>.3)&&(pn.target=0),pn.a+=(pn.target-pn.a)*(1-Math.exp(-n*.35)),pn.mesh.material.opacity=pn.a,pn.mesh.visible=pn.a>.01,pn.a>.25&&r&&ft("rainbow");for(let c of gg)c.material.opacity=dn*.32,c.visible=dn>.01,c.position.x+=n*.12,c.position.x>14&&(c.position.x=-14);dn>.5&&r&&ft("mist");let a=it==="summer"&&fl.frog;ms.g.visible=a,a&&(Math.hypot(s.x-ms.g.position.x,s.z-ms.g.position.z)<3&&(r&&ft("frog"),ms.croakT-=n,ms.croakT<=0&&(ms.croakT=5+Math.random()*5,O.ctx&&O.on&&O.ctx.state==="running"&&J1(O.ctx.currentTime+.02),ms.g.scale.y=1.15)),ms.g.scale.y+=(1-ms.g.scale.y)*n*6),ri.g.visible=it==="summer",ri.g.visible&&(t>ri.next&&(ri.next=t+6e3+Math.random()*11e3,ri.sway=1,op()),ri.sway*=1-n*.8,ri.bell.rotation.z=Math.sin(e*5)*.25*ri.sway+Math.sin(e*.8)*.03,ri.paper.rotation.y=Math.sin(e*3)*.6*ri.sway,ri.paper.rotation.x=Math.sin(e*4.3)*.3*ri.sway);let o=it==="autumn"&&fl.dragon&&i>=15.5&&i<=18.7&&xt<.5;for(let c of xg)if(c.g.visible=o,!!o){if(c.hover>0)c.hover-=n,c.x+=Math.sin(e*9+c.ph)*.002,c.y+=Math.sin(e*7+c.ph)*.0015;else{let h=c.tx-c.x,u=c.ty-c.y,f=c.tz-c.z,d=Math.hypot(h,u,f);if(d<.08)c.hover=.5+Math.random()*1.8,c.tx=-10+Math.random()*20,c.ty=.4+Math.random()*.9,c.tz=-2.5+Math.random()*11.5;else{let g=Math.min(d,2.4*n);c.x+=h/d*g,c.y+=u/d*g,c.z+=f/d*g,c.g.rotation.y=Math.atan2(h,f)}}c.g.position.set(c.x,c.y,c.z),c.wings.forEach((h,u)=>h.rotation.y=Math.sin(e*60+u)*.35),r&&l1(c.g.position)&&Math.hypot(s.x-c.x,s.z-c.z)<9&&ft("dragonfly")}let l=_d;if(l.state==="none"&&!l.done&&fl.tanuki&&i>=16.5&&i<=19.3&&(l.spot=c1[Math.floor(Math.random()*c1.length)],l.state="peek",l.t=0,l.g.visible=!0),l.state!=="none"&&l.spot){let c=l.spot;l.t+=n;let h=0;if(l.state==="peek")h=Math.min(1,l.t/1.5),h>=1&&(l.state="watch",l.t=0);else if(l.state==="watch"){h=1;let u=Math.atan2(s.x-c.x,s.z-c.z)-c.ry;l.head.rotation.y=Dt(((u+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,-.8,.8),l1(l.g.position)&&(l.seen+=n,l.seen>1.2&&r&&ft("tanuki")),(Math.hypot(s.x-c.x,s.z-c.z)<7||l.t>60)&&(l.state="hide",l.t=0)}else l.state==="hide"&&(h=1-Math.min(1,l.t/.5),h<=0&&(l.state="none",l.done=!0,l.g.visible=!1));l.g.position.set(c.x+c.dx*(1-h)*.8,0,c.z+c.dz*(1-h)*.8),l.g.rotation.y=c.ry}yi.board.material[4].emissiveIntensity=xt*.35,mt&&r&&xt>.6&&(wi.illum>.93&&wt.moonUp>.5&&ft("fullmoon"),it==="winter"&&ft("snowsit")),mt&&r&&performance.now()-Yd>2e4&&(it==="spring"&&xt<.5&&ft("sakura"),it==="summer"&&pi.visible&&ft("rainsit"),it==="autumn"&&xt<.5&&ft("momiji")),Il.visible&&r&&ft("fireflies"),$i.kind==="lantern"&&(Ji.lanterns.forEach((c,h)=>{c.lm.emissiveIntensity=.35+1.4*xt+Math.sin(e*2+c.ph)*.05,c.g.rotation.z=Math.sin(e*.9+c.ph)*.03}),Ji.glows.forEach(c=>c.material.opacity=.08+.5*xt),!$i.preview&&xt>.5&&(u1+=n,u1>5&&ft("lantern"))),$i.kind==="mid-autumn"&&!$i.preview&&Ji.center&&Math.hypot(s.x-Ji.center.x,s.z-Ji.center.z)<3.5&&ft("mid-autumn");for(let c of Ji.strips)c.g.rotation.z=Math.sin(e*1.3+c.ph)*.08}var ai=new b;function x4(n,e,t){let i=1-Math.exp(-n*9),s=ie.arms[0],r=ie.arms[1],a=st.position,o=pi.visible&&!mt&&!ti&&a.y<.3&&!Oe.on;ie.umbK+=((o?1:0)-ie.umbK)*(1-Math.exp(-n*4)),ie.umb.visible=ie.umbK>.05,ie.umb.scale.set(.3+.7*ie.umbK,ie.umbK,.3+.7*ie.umbK);let l=xt>.45&&!mt&&!Oe.on;ie.lan.visible=l,ie.lanLight.intensity=l?1.5+Math.sin(e*9)*.08+Math.sin(e*14)*.05:0;let c=it==="summer"&&!o&&!ti&&!mt;ie.fan.visible=c,!t&&!mt&&!Oe.on&&!ie.anim&&(ie.idleT+=n,ie.idleT>7&&(ie.idleT=-(4+Math.random()*5),$h(["stretch","sky","crouch"][Math.floor(Math.random()*3)]))),(t||mt)&&(ie.idleT=0,ie.anim&&ie.anim!=="bow"&&ie.anim!=="wash"&&(ie.anim=null));let h=.1,u=-.08,f=.1,d=.08,g=0,x=Math.sin(e*1.6)*.006,m=0,p=0,y=!1;if(t&&!mt&&(x=Math.abs(Math.sin(Us))*.045,p=Math.sin(Us)*.06,h=.1+Math.sin(Us)*.45,f=.1-Math.sin(Us)*.45),ti&&(h=-.75,u=.12,f=-.7,d=-.12,m=t?.1+Math.sin(Us*.5)*.03:.06,t&&(h+=Math.sin(Us*.5)*.12)),c&&(h=-.45+Math.sin(e*(t?7:3.5))*.2,u=1),ie.umbK>.05&&(h=-1.15,u=.3),l&&(f=-.55,d=.05),mt&&(x=-.05,y=!0,h=-.5,u=.2,f=-.5,d=-.2,m=.04),ie.anim){ie.animT+=n;let v=ie.animT,w=C=>Math.sin(Math.min(1,v/C)*Math.PI);if(ie.anim==="bow"){let C=w(1.5);m=.5*C,g=.25*C,h=f=-.2*C+.1,v>1.5&&(ie.anim=null)}else if(ie.anim==="wash"){let C=Math.min(1,v/.4)*Math.min(1,(2.4-v)/.4);h=f=-1.05*C+.1*(1-C),u=.42*C,d=-.42*C,g=.25*C,m=.08*C,v>2.4&&(ie.anim=null)}else if(ie.anim==="stretch"){let C=w(2.4);h=f=-2.9*C+.1*(1-C),u=-.25*C,d=.25*C,g=-.35*C,x+=.03*C,v>2.4&&(ie.anim=null)}else if(ie.anim==="sky")g=-.6*(Math.min(1,v/.8)*Math.min(1,(3.6-v)/.8)),v>3.6&&(ie.anim=null);else if(ie.anim==="crouch"){let C=Math.min(1,v/.6)*Math.min(1,(3.4-v)/.6);x=-.17*C,m=.22*C,g=.4*C,h=f=-.55*C+.1*(1-C),v>3.4&&(ie.anim=null)}}if(ei.position.y+=(x-ei.position.y)*i,ei.rotation.x+=(m-ei.rotation.x)*i,ei.rotation.z+=(p-ei.rotation.z)*i,s.rotation.x+=(h-s.rotation.x)*i,s.rotation.z+=(u-s.rotation.z)*i,r.rotation.x+=(f-r.rotation.x)*i,r.rotation.z+=(d-r.rotation.z)*i,ie.head.rotation.x+=(g-ie.head.rotation.x)*i,ie.legs.visible=y,ie.feet.forEach(v=>v.visible=!y),ie.scarf.visible&&(ie.scarfTail.rotation.z=.15+Math.sin(e*2.2)*.06+(t?Math.sin(Us)*.12:0)),it==="winter"&&!le.on&&(ie.breathT-=n,ie.breathT<=0)){ie.breathT=3.2+Math.random()*.8;let v=ie.fog.find(w=>w.t>=1.6)||ie.fog[0];v.sp.material.map||(v.sp.material.map=ta,v.sp.material.needsUpdate=!0),ie.head.localToWorld(ai.set(0,-.06,.24)),v.sp.position.copy(ai),v.t=0,v.sp.visible=!0}for(let v of ie.fog){if(v.t>=1.6){v.sp.visible=!1;continue}v.t+=n;let w=v.t/1.6;v.sp.position.y+=n*.12;let C=ai.set(Math.sin(st.rotation.y),0,Math.cos(st.rotation.y));v.sp.position.addScaledVector(C,n*.18),v.sp.scale.setScalar(.08+w*.3),v.sp.material.opacity=.32*(1-w)}if(it==="spring"&&!mt&&a.y<.3&&(ie.petalT-=n,ie.petalT<=0&&(ie.petalT=18+Math.random()*25,ie.petals.length<5))){let v=.08+Math.random()*.24,w=Math.random()*6.28,C=new W(new us(.045,6),new Dn({color:["#f6c3d0","#f9dbe3","#fff4f6"][Math.floor(Math.random()*3)],side:Ft}));C.position.set(Math.cos(w)*v,.21+.1-v*(.2/.38)+.004,Math.sin(w)*v),C.rotation.set(-Math.PI/2+.48*Math.cos(w)*0,Math.random()*6,0),C.lookAt(ie.head.localToWorld(new b(Math.cos(w)*v*3,2,Math.sin(w)*v*3))),ie.head.add(C),ie.petals.push(C)}}function y4(n){if(!O.ctx||!O.on||O.ctx.state!=="running")return;let e=O.ctx.currentTime;if(n==="gravel")Aw();else if(n==="wood"){let t=.8+Math.random()*.4;es(e,.04,1700,2.2,.016*t,.08),ts(230,170,e,.07,.017*t,"sine",.1)}else n==="stone"?(ts(150,95,e,.09,.06,"sine",.15),es(e,.06,650,1,.03,.1,"lowpass")):es(e,.08,900,.8,.022,.05,"lowpass")}function lp(){if(Oe.on||le.on)return;gt.on=!0,Dl(),z("poem").classList.remove("show");let n=st.position;xt>.5&&gn.visible?(gt.yaw=Math.atan2(gn.position.x-n.x,gn.position.z-n.z),gt.pitch=Math.min(.9,Math.atan2(gn.position.y-n.y,Math.hypot(gn.position.x-n.x,gn.position.z-n.z))+.25)):pn.a>.1?(gt.yaw=Math.atan2(-4-n.x,82-n.z),gt.pitch=.25):(gt.yaw=mt?0:st.rotation.y,gt.pitch=.6),gt.fov=ut.fov,st.visible=!1,document.body.classList.add("gazing"),z("gazeHint").classList.add("show"),setTimeout(()=>z("gazeHint").classList.remove("show"),4200),ft("sky"),xt>.6&&co()&&ft("stars")}function ho(){gt.on&&(gt.on=!1,Is.said={},z("skyLine").classList.remove("show"),st.visible=!le.on,document.body.classList.remove("gazing"),cu(),z("gazeHint").classList.remove("show"))}z("gazeBtn").onclick=lp;z("gazeBack").onclick=ho;z("zoomIn").onclick=()=>{gt.on?gt.fov=Dt(gt.fov*.8,18,75):Fi=Dt(Fi*.8,2.6,16)};z("zoomOut").onclick=()=>{gt.on?gt.fov=Dt(gt.fov*1.25,18,75):Fi=Dt(Fi*1.25,2.6,16)};addEventListener("keydown",n=>{n.code==="KeyG"&&(gt.on?ho():lp()),(n.code==="Equal"||n.code==="NumpadAdd")&&z("zoomIn").click(),(n.code==="Minus"||n.code==="NumpadSubtract")&&z("zoomOut").click()});var M4=(()=>{let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");for(let s=0;s<22;s++){let r=24+Math.random()*80,a=50+Math.random()*30-Math.abs(r-64)*.25,o=12+Math.random()*20,l=t.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,a,o,0,7),t.fill()}let i=new ui(e);return i.colorSpace=tn,i})(),Tg=[];for(let n=0;n<20;n++){let e=new Wi({map:M4,transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),t=new hs(e),i=Math.random()*Math.PI*2,s=40+Math.random()*45;t.position.set(Math.cos(i)*s,24+Math.random()*26,Math.sin(i)*s);let r=18+Math.random()*22;t.scale.set(r,r*.5,1),t.renderOrder=-5,Re.add(t),Tg.push({sp:t,a:i,r:s,sp0:.004+Math.random()*.004})}var kn={m:null,t:9,next:performance.now()+15e3};{let n=new Pt;n.setAttribute("position",new Je([0,0,0,0,0,0],3)),kn.m=new Ho(n,new lr({color:"#ffffff",transparent:!0,opacity:0,fog:!1})),kn.m.frustumCulled=!1,Re.add(kn.m)}var fn={g:new Fe,t:99,next:performance.now()+2e4,dir:new b};{let n=new Dn({color:"#2d2a28",side:Ft,fog:!1});for(let e=0;e<6;e++){let t=new Fe;for(let r of[-1,1]){let a=new W(new On(.9,.18),n);a.position.x=r*.42,a.rotation.z=r*.25,t.add(a)}let i=Math.ceil(e/2),s=e%2?1:-1;t.position.set(s*i*1.6,0,-i*1.4),fn.g.add(t)}fn.g.visible=!1,Re.add(fn.g)}var E4=[[5.58,0,"\u7375\u6236\u5EA7","\u4ECA\u665A\u7684\u7375\u6236\u5EA7\uFF0C\u548C\u4E00\u5343\u5E74\u524D\u7684\u4EBA\u770B\u5230\u7684\uFF0C\u5E7E\u4E4E\u4E00\u6A23\u3002"],[6.75,-16.7,"\u5929\u72FC\u661F","\u5929\u72FC\u661F\uFF0C\u662F\u591C\u7A7A\u88E1\u6700\u4EAE\u7684\u6046\u661F\u3002"],[3.79,24.1,"\u6634\u5BBF\u661F\u5718","\u6634\u5BBF\u661F\u5718\uFF0C\u4E00\u5C0F\u7FA4\u64E0\u5728\u4E00\u8D77\u7684\u661F\u661F\uFF0C\u50CF\u5728\u8AAA\u6084\u6084\u8A71\u3002"],[12.3,56.5,"\u5317\u6597\u4E03\u661F","\u5317\u6597\u4E03\u661F\u7684\u52FA\u53E3\uFF0C\u6307\u8457\u5317\u6975\u661F\u7684\u65B9\u5411\u3002"],[2.53,89.26,"\u5317\u6975\u661F","\u5317\u6975\u661F\u7684\u9AD8\u5EA6\uFF0C\u525B\u597D\u7B49\u65BC\u9019\u88E1\u7684\u7DEF\u5EA6\uFF1A23.5 \u5EA6\u3002"],[.95,60.5,"\u4ED9\u540E\u5EA7","\u4ED9\u540E\u5EA7\u50CF\u4E00\u500B\u5927\u5927\u7684 W\uFF0C\u6574\u591C\u7E5E\u8457\u5317\u6975\u661F\u8F49\u3002"],[16.9,-30,"\u5929\u880D\u5EA7","\u5929\u880D\u5EA7\u7684\u5FC3\u81DF\u662F\u4E00\u9846\u7D05\u8272\u7684\u661F\uFF0C\u53EB\u5FC3\u5BBF\u4E8C\u3002"],[18.62,38.8,"\u7E54\u5973\u661F","\u7E54\u5973\u548C\u725B\u90CE\uFF0C\u9694\u8457\u9280\u6CB3\uFF0C\u4E00\u5E74\u898B\u4E00\u6B21\u3002"],[19.85,8.9,"\u725B\u90CE\u661F","\u725B\u90CE\u661F\u5728\u9280\u6CB3\u7684\u53E6\u4E00\u908A\uFF0C\u9060\u9060\u671B\u8457\u7E54\u5973\u3002"],[10.3,19,"\u7345\u5B50\u5EA7","\u7345\u5B50\u5EA7\u7684\u982D\uFF0C\u50CF\u4E00\u500B\u53CD\u904E\u4F86\u7684\u554F\u865F\u3002"],[20.69,45.3,"\u5929\u9D5D\u5EA7","\u5929\u9D5D\u5EA7\u6CBF\u8457\u9280\u6CB3\u98DB\uFF0C\u5C3E\u5DF4\u90A3\u9846\u4EAE\u661F\u53EB\u5929\u6D25\u56DB\u3002"],[7.45,25,"\u96D9\u5B50\u5EA7","\u96D9\u5B50\u5EA7\u7684\u5169\u9846\u4EAE\u661F\uFF0C\u50CF\u4E26\u80A9\u7AD9\u8457\u7684\u5144\u5F1F\u3002"]].map(([n,e,t,i])=>({name:t,line:i,eq:new b(Math.cos(e*En)*Math.cos(n*15*En),Math.cos(e*En)*Math.sin(n*15*En),Math.sin(e*En))})),w4={\u91D1\u661F:()=>wt.sun.x>0?"\u90A3\u9846\u6700\u4EAE\u7684\u661F\uFF0C\u5176\u5BE6\u662F\u91D1\u661F\u3002\u6E05\u6668\u7684\u6642\u5019\uFF0C\u53EB\u555F\u660E\u661F\u3002":"\u90A3\u9846\u6700\u4EAE\u7684\u661F\uFF0C\u5176\u5BE6\u662F\u91D1\u661F\u3002\u508D\u665A\u7684\u6642\u5019\uFF0C\u53EB\u9577\u5E9A\u661F\u3002",\u6728\u661F:()=>"\u6728\u661F\u5F88\u4EAE\uFF0C\u537B\u4E0D\u592A\u9583\u720D\uFF0C\u56E0\u70BA\u5B83\u662F\u884C\u661F\u3002",\u706B\u661F:()=>"\u504F\u7D05\u7684\u90A3\u4E00\u9846\uFF0C\u662F\u706B\u661F\u3002",\u571F\u661F:()=>"\u571F\u661F\u7684\u5149\u5F88\u7A69\uFF0C\u5E36\u4E00\u9EDE\u6DE1\u9EC3\u3002"},Is={els:[],said:{},lastLine:0},Qi=new b,hd=new b;function S4(){let n=z("skyLabels");if(!n)return;if(!gt.on||xt<.6||Tr.uOp.value<.25){n.childElementCount&&(n.innerHTML=""),Is.els=[];return}let e=E4.map(a=>({name:a.name,line:a.line,v:a.eq.clone().applyMatrix4(wt.M)}));(wt.planetsEq||[]).forEach((a,o)=>{let l=pl[o].name;Rl.uOp.value>.3&&e.push({name:l,line:w4[l](),v:a.clone().applyMatrix4(wt.M),planet:!0})});let t=[];for(let a of e)a.v.y<.17||(Qi.copy(a.v).multiplyScalar(90).add(ut.position).project(ut),!(Qi.z>1||Math.abs(Qi.x)>.82||Math.abs(Qi.y)>.78)&&t.push({...a,x:Qi.x,y:Qi.y,d:Math.hypot(Qi.x,Qi.y*.8)-(a.planet&&a.name==="\u91D1\u661F"?.15:0)}));t.sort((a,o)=>a.d-o.d);let i=t.slice(0,2);for(;Is.els.length<2;){let a=document.createElement("div");a.className="skylab",n.appendChild(a),Is.els.push(a)}Is.els.forEach((a,o)=>{let l=i[o];if(!l){a.style.opacity=0;return}a.textContent=l.name,a.style.opacity=1,a.style.left=(l.x+1)/2*innerWidth+"px",a.style.top=(1-l.y)/2*innerHeight+"px"});let s=performance.now(),r=i[0];if(r&&r.d<.45&&!Is.said[r.name]&&s-Is.lastLine>7e3){Is.said[r.name]=1,Is.lastLine=s;let a=z("skyLine");a.textContent=r.line,a.classList.add("show"),clearTimeout(a._t),a._t=setTimeout(()=>a.classList.remove("show"),6500)}}function T4(n,e){Tr.uT.value=e,S4(),gn.visible&&(Qi.copy(gn.position).project(ut),hd.copy(gn.position).addScaledVector(wt.sun,10).project(ut),gn.material.rotation=Math.atan2(hd.y-Qi.y,(hd.x-Qi.x)*ut.aspect)-(wi.p<.5?0:Math.PI));let t=1-xt,i=performance.now(),s=Math.max(0,1-Math.abs(na()-17.8)/1.3)*t;for(let r of Tg){r.a+=n*r.sp0,r.sp.position.x=Math.cos(r.a)*r.r,r.sp.position.z=Math.sin(r.a)*r.r;let a=Rn==="sun"?.35:Rn==="cloud"||Rn==="rain"||Rn==="snow"?1.6:1;r.sp.material.opacity=Math.min(1,(.25+.55*t)*(it==="summer"&&pi.visible?1.15:1)*(1-dn*.6)*a);let o=a>1?.18:0;r.sp.material.color.setRGB(1-xt*.72-o,1-xt*.7-s*.15-o,1-xt*.62-s*.32-o*.8)}if(xt>.7&&i>kn.next){kn.next=i+(gt.on?12e3:3e4)+Math.random()*25e3,kn.t=0;let r=Math.random()*Math.PI*2;kn.p0=new b(Math.cos(r)*60,45+Math.random()*20,Math.sin(r)*60),kn.d=new b(-Math.sin(r)+Math.random()*.4,-.35,Math.cos(r)).normalize()}if(kn.t<1.2){kn.t+=n;let r=kn.t/1.2,a=kn.p0.clone().addScaledVector(kn.d,r*40),o=a.clone().addScaledVector(kn.d,-6),l=kn.m.geometry.attributes.position;l.setXYZ(0,o.x,o.y,o.z),l.setXYZ(1,a.x,a.y,a.z),l.needsUpdate=!0,kn.m.material.opacity=Math.sin(r*Math.PI)*.9,gt.on&&r>.3&&co()&&ft("meteor")}else kn.m.material.opacity=0;if(t>.6&&!pi.visible&&i>fn.next){fn.next=i+4e4+Math.random()*5e4,fn.t=0;let r=Math.random()*Math.PI*2;fn.p0=new b(Math.cos(r)*70,30+Math.random()*12,Math.sin(r)*70),fn.dir.set(-Math.cos(r),0,-Math.sin(r)),fn.g.lookAt(fn.p0.clone().sub(fn.dir)),fn.g.visible=!0}fn.g.visible&&(fn.t+=n,fn.g.position.copy(fn.p0).addScaledVector(fn.dir,fn.t*7),fn.g.children.forEach((r,a)=>r.children.forEach((o,l)=>o.rotation.z=(l?1:-1)*(.25+Math.sin(e*6+a)*.35))),fn.t>20&&(fn.g.visible=!1))}var Cd={sun:["\u6674","\u4ECA\u5929\u662F\u6674\u5929\uFF0C\u597D\u597D\u66EC\u4E00\u66EC\u3002"],cloud:["\u96F2","\u96F2\u591A\u4E00\u9EDE\u7684\u65E5\u5B50\uFF0C\u6162\u6162\u8D70\u5C31\u597D\u3002"],rain:["\u96E8","\u4E0B\u96E8\u7684\u65E5\u5B50\uFF0C\u5C31\u8B93\u5B83\u4E0B\u5427\u3002"],fog:["\u9727","\u9727\u6FDB\u6FDB\u7684\uFF0C\u770B\u4E0D\u6E05\u695A\u4E5F\u6C92\u95DC\u4FC2\u3002"],snow:["\u96EA","\u4E0B\u96EA\u4E86\uFF0C\u5B89\u5B89\u975C\u975C\u7684\u3002"]},pr=!1;function bg(n){pr=!!n,document.querySelectorAll("#moodPick [data-m]").forEach(e=>e.classList.toggle("on",e.dataset.m===Rn)),z("moodPick").classList.remove("hidden")}function zl(n){if(pr&&n&&!z("moodPick").classList.contains("stay")){_g=n,z("moodPick").classList.add("stay");return}z("moodPick").classList.add("hidden"),z("moodPick").classList.remove("stay");let e=n!==Rn;if(Rn=n,n?(pe.moods[ao()]=n,ln(),ft("mood"),z("moodBtn").textContent=Cd[n][0],e&&Ht(Cd[n][1],3800)):z("moodBtn").textContent="\u5FC3",e){let t=z("fade");pr?(Gs(),O.ctx&&Jr(),Qt.cubeDirty=!0,yl=""):(t.classList.add("on"),setTimeout(()=>{Gs(),O.ctx&&Jr(),Qt.cubeDirty=!0,yl="",t.classList.remove("on")},380))}pr&&(pr=!1,setTimeout(Ed,n?4200:400),setTimeout(Ww,n?9e3:5200),setTimeout(Mg,n?8800:5e3))}document.querySelectorAll("#moodPick [data-m]").forEach(n=>n.onclick=()=>zl(n.dataset.m));var _g=null;function f1(n,e,t){let i=z("fade");i.classList.add("on"),setTimeout(()=>{mt&&lo(),st.position.set(n,.75,e),Hh(),i.classList.remove("on"),setTimeout(t,450)},420)}document.querySelectorAll("#stayStep [data-st]").forEach(n=>n.onclick=()=>{let e=n.dataset.st,t=pr;e!=="walk"&&e!=="skip"&&(pr=!1),zl(_g),t&&e!=="walk"&&e!=="skip"&&setTimeout(Mg,9e3),O.on&&Xs(),e==="quiet"&&f1(ns,-6.15,()=>hg("t1")),e==="bowl"&&f1(An.x,An.z+.75,()=>{ou(),setTimeout(()=>{ct.on&&(uo(ct.list[0],.9),Ol("\u7B49\u8072\u97F3\u6162\u6162\u6563\u53BB\uFF0C\u518D\u6C7A\u5B9A\u8981\u4E0D\u8981\u6572\u4E0B\u4E00\u8072\u3002",6e3))},1800)}),e==="word"&&Fl("\u7559\u4E0B\u4E00\u53E5\u8A71","\u5E7E\u500B\u5B57\u5C31\u597D",40,"\u6536\u9032\u624B\u5E16",i=>{pe.notes.push({d:Date.now(),q:"\u4ECA\u5929\u60F3\u7559\u4E0B\u7684\u4E00\u53E5\u8A71",a:i}),ln(),ft("note"),Ht("\u6536\u9032\u624B\u5E16\u4E86\u3002",2400)})});z("moodSkip").onclick=()=>zl(Rn&&!pr?Rn:null);z("moodClear").onclick=()=>zl(null);z("moodBtn").onclick=()=>bg(!1);var Ui={on:!1,cap:"",seal:!0};function Rg(){Oe.on||(gt.on&&ho(),Ui.on=!0,Dl(),document.body.classList.add("photo"),z("phStamp").querySelector("small").textContent=Pd(),cp(),Ht("\u627E\u4E00\u500B\u559C\u6B61\u7684\u89D2\u5EA6",2400))}function b4(){Ui.on=!1,document.body.classList.remove("photo"),z("phCap").style.display="none",z("phStamp").style.display="none"}var Pd=()=>{let n=new Date;return n.getFullYear()+"."+(n.getMonth()+1)+"."+n.getDate()};function cp(){z("phCap").textContent=Ui.cap,z("phCap").style.display=Ui.cap?"block":"none",z("phStamp").style.display=Ui.seal?"flex":"none",z("phSeal").classList.toggle("on",Ui.seal)}z("photoBtn").onclick=Rg;z("phExit").onclick=b4;z("phSeal").onclick=()=>{Ui.seal=!Ui.seal,cp()};z("phCaption").onclick=()=>Fl("\u70BA\u9019\u5F35\u7167\u7247\u5BEB\u4E00\u53E5","\u5E7E\u500B\u5B57\u5C31\u597D",24,"\u597D",n=>{Ui.cap=n,cp()},!1);function _4(){Mi?Mi.render():li.render(Re,ut)}z("phShot").onclick=()=>{_4();let n=li.domElement,e=n.width,t=n.height,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");s.drawImage(n,0,0);let r=Math.min(e,t)/100;if(Ui.cap){s.save(),s.font=`600 ${5.2*r}px "Noto Serif TC","Songti TC",serif`,s.textAlign="center",s.textBaseline="top";let o=[...Ui.cap],l=e-9*r,c=8*r;s.shadowColor="rgba(255,255,255,.9)",s.shadowBlur=2.5*r,s.fillStyle="#2b2824",o.forEach((h,u)=>s.fillText(h,l,c+u*6.4*r)),s.restore()}if(Ui.seal){let o=9*r,l=5*r,c=t-5*r-o;s.fillStyle="rgba(163,63,44,.92)",s.beginPath(),s.roundRect?s.roundRect(l,c,o,o,1.2*r):s.rect(l,c,o,o),s.fill(),s.fillStyle="#fbf3e6",s.font=`600 ${5.6*r}px "Noto Serif TC",serif`,s.textAlign="center",s.textBaseline="middle",s.fillText("\u5EAD",l+o/2,c+o/2+.3*r),s.fillStyle="rgba(255,255,255,.92)",s.font=`${2.4*r}px "Noto Serif TC",serif`,s.textAlign="left",s.shadowColor="rgba(0,0,0,.5)",s.shadowBlur=r,s.fillText("\u67AF\u5C71\u6C34\u5C0F\u5EAD\u3000"+Pd(),l+o+2*r,c+o-1.5*r)}let a=i.toDataURL("image/jpeg",.92);z("phImg").src=a,z("phResult").classList.remove("hidden"),ft("photo"),z("phDownload").onclick=()=>{try{let o=document.createElement("a");o.href=a,o.download="\u67AF\u5C71\u6C34\u5C0F\u5EAD_"+Pd()+".jpg",document.body.appendChild(o),o.click(),o.remove()}catch{}},O.ctx&&O.on&&O.ctx.state==="running"&&es(O.ctx.currentTime,.06,3e3,1,.05,.05)};z("phClose").onclick=()=>z("phResult").classList.add("hidden");function R4(n){if(n.k)return n.k;let e=JSON.stringify(n.rocks);for(let t=0;t<wl.length;t++)if(JSON.stringify(wl[t].rocks)===e)return"d"+t;for(let t in Cl)if(JSON.stringify(Cl[t].rocks)===e)return t;return"x"}function Ag(){let n=fi.map(e=>{let t=R4(e),i=[t,Math.round(e.x*10),Math.round(e.z*10),Math.round((e.rot||0)*180/Math.PI%360),Math.round((e.scale||1)*100),e.seed||1].join(",");return t==="x"&&(i+=":"+Math.round(e.moss*100)+":"+e.rocks.map(s=>s.map(r=>Math.round(r*100)).join("_")).join("~")),i});return"KS1-"+btoa(unescape(encodeURIComponent(n.join(";")))).replace(/\+/g,"-").replace(/\//g,".").replace(/=+$/,"")}function Cg(n){n=String(n).trim();let e=n.match(/KS1-([A-Za-z0-9\-.]+)/);if(!e)return null;let t;try{let s=e[1].replace(/-/g,"+").replace(/\./g,"/");for(;s.length%4;)s+="=";t=decodeURIComponent(escape(atob(s)))}catch{return null}let i=[];for(let s of t.split(";").slice(0,20)){let[r,a,o]=s.split(":"),l=r.split(","),c=l[0],h=null;/^d[0-4]$/.test(c)?h=wl[+c[1]]:Cl[c]&&(h=Cl[c]);let u={k:c,x:Dt(+l[1]/10,Ge.x0+.5,Ge.x1-.5),z:Dt(+l[2]/10,Ge.z0+.5,Ge.z1-.5),rot:(+l[3]||0)*Math.PI/180,scale:Dt((+l[4]||100)/100,.6,1.8),seed:+l[5]||1};if(h)u.moss=h.moss,u.rocks=JSON.parse(JSON.stringify(h.rocks));else if(c==="x"&&a)u.moss=Dt(+a/100,.3,3),u.rocks=(o||"").split("~").filter(Boolean).slice(0,8).map(f=>f.split("_").map(d=>+d/100));else continue;u.rocks.every(f=>f.length===4&&f.every(d=>isFinite(d)))&&i.push(u)}return i.length?i:null}var Eh="share";function au(n){Eh=n;let e=z("codeText");n==="share"?(z("codeTitle").textContent="\u628A\u9019\u4E32\u4EE3\u78BC\u50B3\u7D66\u670B\u53CB\uFF0C\u4ED6\u5C31\u80FD\u770B\u5230\u4F60\u6392\u7684\u5EAD\u9662",e.value=Ag(),e.readOnly=!0,z("codeOk").textContent="\u8907\u88FD",z("codeNote").textContent="",ft("share")):n==="backup"?(z("codeTitle").textContent="\u9019\u662F\u4F60\u7684\u624B\u5E16\u5099\u4EFD\uFF0C\u8ACB\u6536\u5728\u5B89\u5168\u7684\u5730\u65B9",e.value=A4(),e.readOnly=!0,z("codeOk").textContent="\u8907\u88FD",z("codeNote").textContent="\u53EF\u4EE5\u8CBC\u5230\u8A18\u4E8B\u672C\u3001\u50B3\u7D66\u81EA\u5DF1\uFF0C\u6216\u5B58\u6210\u6A94\u6848\u3002\u63DB\u88DD\u7F6E\u6642\uFF0C\u7528\u300C\u9084\u539F\u624B\u5E16\u300D\u8CBC\u56DE\u4F86\u3002"):n==="restore"?(z("codeTitle").textContent="\u8CBC\u4E0A\u624B\u5E16\u5099\u4EFD",e.value="",e.readOnly=!1,z("codeOk").textContent="\u9084\u539F",z("codeNote").innerHTML='\u6703\u7528\u5099\u4EFD\u53D6\u4EE3\u9019\u53F0\u88DD\u7F6E\u76EE\u524D\u7684\u624B\u5E16\u3002\u4E5F\u53EF\u4EE5<a href="#" id="codePick">\u9078\u64C7\u5099\u4EFD\u6A94\u6848</a>\u3002',z("codePick").onclick=t=>{t.preventDefault(),z("codeFileIn").click()},setTimeout(()=>e.focus(),50)):(z("codeTitle").textContent="\u8CBC\u4E0A\u670B\u53CB\u7D66\u4F60\u7684\u5EAD\u9662\u4EE3\u78BC",e.value="",e.readOnly=!1,z("codeOk").textContent="\u5957\u7528",z("codeNote").textContent="\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662\u6703\u5148\u6536\u597D\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u63DB\u56DE\u4F86\u3002",setTimeout(()=>e.focus(),50)),z("codeFile").classList.toggle("hidden",n!=="backup"),z("codeModal").classList.remove("hidden")}z("codeCancel").onclick=()=>z("codeModal").classList.add("hidden");z("codeText").addEventListener("keydown",n=>n.stopPropagation());z("codeOk").onclick=async()=>{let n=z("codeText");if(Eh==="restore"){let t=C4(n.value);if(!t){z("codeNote").textContent="\u9019\u6BB5\u5099\u4EFD\u597D\u50CF\u4E0D\u5B8C\u6574\uFF0C\u518D\u78BA\u8A8D\u4E00\u4E0B\uFF1F";return}br(),_h($a+"-before-restore",Zh($a)||""),_h($a,JSON.stringify(t)),z("codeNote").textContent="\u9084\u539F\u597D\u4E86\uFF0C\u5EAD\u9662\u91CD\u65B0\u6574\u7406\u4E2D\u2026",setTimeout(()=>location.reload(),900);return}if(Eh==="share"||Eh==="backup"){n.select();let t=!1;try{await navigator.clipboard.writeText(n.value),t=!0}catch{try{t=document.execCommand("copy")}catch{}}z("codeNote").textContent=t?"\u5DF2\u8907\u88FD\u3002":"\u8ACB\u9577\u6309\u6216\u9078\u53D6\u4E0A\u9762\u7684\u4EE3\u78BC\uFF0C\u624B\u52D5\u8907\u88FD\u3002";return}let e=Cg(n.value);if(!e){z("codeNote").textContent="\u9019\u4E32\u4EE3\u78BC\u597D\u50CF\u4E0D\u592A\u5C0D\uFF0C\u518D\u78BA\u8A8D\u4E00\u4E0B\uFF1F";return}pe.layoutBackup||(pe.layoutBackup=JSON.parse(JSON.stringify(fi))),fi=e,Kr(),Vs(null),z("codeModal").classList.add("hidden"),hp(),ft("visitcode"),ln(),Ht("\u9019\u662F\u670B\u53CB\u7684\u5EAD\u9662\u3002\u6309\u300C\u5B8C\u6210\u300D\u5F8C\uFF0C\u6C99\u7D0B\u6703\u91CD\u65B0\u8019\u597D\u3002",4200)};function A4(){br();let n=JSON.parse(Zh($a)||"{}");n._v=1,n._at=Date.now();let e=new TextEncoder().encode(JSON.stringify(n)),t="";return e.forEach(i=>t+=String.fromCharCode(i)),"KSB1-"+btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function C4(n){try{let e=String(n).match(/KSB1-([A-Za-z0-9_\-]+)/);if(!e)return null;let t=atob(e[1].replace(/-/g,"+").replace(/_/g,"/")),i=JSON.parse(new TextDecoder().decode(Uint8Array.from(t,s=>s.charCodeAt(0))));return i&&typeof i=="object"&&(i.met||i.moods||i.notes)?i:null}catch{return null}}z("bakSave").onclick=()=>au("backup");z("bakLoad").onclick=()=>au("restore");z("codeFile").onclick=()=>{let n=new Date,e=document.createElement("a");e.href=URL.createObjectURL(new Blob([z("codeText").value],{type:"text/plain"})),e.download=`\u67AF\u5C71\u6C34\u5C0F\u5EAD_\u624B\u5E16\u5099\u4EFD_${n.getFullYear()}${String(n.getMonth()+1).padStart(2,"0")}${String(n.getDate()).padStart(2,"0")}.txt`,document.body.appendChild(e),e.click(),setTimeout(()=>{URL.revokeObjectURL(e.href),e.remove()},1e3),z("codeNote").textContent="\u5DF2\u5B58\u6210\u6A94\u6848\u3002"};z("codeFileIn").onchange=async n=>{let e=n.target.files[0];e&&(z("codeText").value=(await e.text()).trim(),n.target.value="")};function hp(){z("restoreMine").classList.toggle("hidden",!pe.layoutBackup)}z("shareCode").onclick=()=>au("share");z("enterCode").onclick=()=>au("enter");z("restoreMine").onclick=()=>{pe.layoutBackup&&(fi=pe.layoutBackup,delete pe.layoutBackup,Kr(),Vs(null),hp(),ln(),Ht("\u63DB\u56DE\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662\u4E86\u3002"))};hp();function Pg(){if(!O.ctx||!O.on||O.ctx.state!=="running")return;let n=O.ctx;for(let e=0;e<3;e++){let t=n.currentTime+.1+e*7.5,i=n.createGain();i.gain.value=.16,Ln(i,.8);for(let[s,r,a]of[[1,1,14],[1.007,.7,14],[2.01,.5,9],[2.76,.35,7],[3.42,.22,5],[5.03,.1,3]]){let o=n.createOscillator(),l=n.createGain();o.type="sine",o.frequency.value=98*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.02),l.gain.exponentialRampToValueAtTime(4e-4,t+a),o.connect(l),l.connect(i),o.start(t),o.stop(t+a+.1)}es(t,.12,500,1,.05,.5,"lowpass")}qs("\u665A\u9418")}function P4(){let n=new Date;n.getHours()===18&&n.getMinutes()===0&&pe.bellDay!==ao()&&(pe.bellDay=ao(),ln(),Pg(),Ht("\u9060\u8655\u50B3\u4F86\u665A\u9418\u3002",4500),ft("bansho"))}var Zi={t:99,next:performance.now()+15e3,dur:6,lastAudio:0};function D4(n){let e=performance.now();if(e>Zi.next&&(Zi.t=0,Zi.dur=5+Math.random()*3,Zi.next=e+2e4+Math.random()*35e3,it==="summer"&&setTimeout(op,700)),Zi.t<Zi.dur?(Zi.t+=n,Wr.value=Math.sin(Math.PI*Math.min(1,Zi.t/Zi.dur))**1.5):Wr.value=0,O.ctx&&O.wind&&e-Zi.lastAudio>200){Zi.lastAudio=e;let t=O.ctx.currentTime,i=eu[it].wind+(Rn==="cloud"||Rn==="snow"?.02:0);O.wind.gain.setTargetAtTime(i+Wr.value*.09,t,.3),O.rustle&&O.rustle.gain.setTargetAtTime(it==="winter"?Wr.value*.012:Wr.value*.05,t,.3)}}var An={x:qn+6.5*(Yn/8),z:-6.95},ct={on:!1,list:[],mode:"free",ptr:new Map,hits:[],listen:null,breath:null,rippleT:0};{let n=(()=>{let T=document.createElement("canvas");T.width=512,T.height=256;let U=T.getContext("2d");U.fillStyle="#808080",U.fillRect(0,0,512,256);for(let q=0;q<1500;q++){let se=Math.random()*512,ne=Math.random()*256,te=5+Math.random()*11,re=U.createRadialGradient(se,ne,0,se,ne,te);re.addColorStop(0,"rgba(40,40,40,.55)"),re.addColorStop(.7,"rgba(110,110,110,.2)"),re.addColorStop(1,"rgba(128,128,128,0)"),U.fillStyle=re,U.beginPath(),U.arc(se,ne,te,0,7),U.fill()}let V=U.getImageData(0,0,512,256).data,j=U.createImageData(512,256),F=(q,se)=>V[((se+256)%256*512+(q+512)%512)*4]/255;for(let q=0;q<256;q++)for(let se=0;se<512;se++){let ne=(F(se+1,q)-F(se-1,q))*3,te=(F(se,q+1)-F(se,q-1))*3,re=Math.hypot(ne,te,1),oe=(q*512+se)*4;j.data[oe]=(-ne/re*.5+.5)*255,j.data[oe+1]=(te/re*.5+.5)*255,j.data[oe+2]=(1/re*.5+.5)*255,j.data[oe+3]=255}U.putImageData(j,0,0);let X=new ui(T);return X.wrapS=$n,X})(),e=oi(512,256,(N,S,T)=>{for(let U=0;U<T;U++){let V=U/T,j=V<.25?.72+V:1,F=Math.abs(V-.49)<.025?1.18:1,X=.9+.1*Math.sin(V*40);for(let q=0;q<S;q+=4){let se=.94+Math.random()*.1,ne=j*F*X*se;N.fillStyle=`rgb(${Math.min(255,176*ne)},${Math.min(255,132*ne)},${Math.min(255,70*ne)})`,N.fillRect(q,U,4,1)}}N.fillStyle="rgba(60,38,18,.75)";for(let U of[.405,.448])N.fillRect(0,U*T,S,1.6);N.fillStyle="rgba(70,45,22,.6)";for(let U=4;U<S;U+=16)N.beginPath(),N.arc(U,.427*T,1.6,0,7),N.fill();for(let U=0;U<300;U++)N.fillStyle=`rgba(80,110,90,${Math.random()*.12})`,N.fillRect(Math.random()*S,T*.05+Math.random()*T*.2,3,2)});e.wrapS=$n;let t=[[0,0],[.35,0],[.6,.04],[.82,.14],[.95,.3],[1,.46],[.99,.56],[.965,.605],[.935,.615],[.912,.595],[.915,.5],[.875,.32],[.74,.16],[.48,.075],[0,.06]].map(([N,S])=>new ce(N,S)),i=new Go(t,72),s=new At({map:e,normalMap:n,normalScale:new ce(.8,.8),metalness:.88,roughness:.3,envMap:dt.env?null:Oh.texture,envMapIntensity:dt.env?1.9:1.3,side:Ft}),r=oi(256,256,(N,S,T)=>{N.fillStyle="#2f4466",N.fillRect(0,0,S,T);for(let U=0;U<T;U+=3)N.fillStyle=`rgba(255,255,255,${.03+Math.random()*.03})`,N.fillRect(0,U,S,1);for(let U=0;U<S;U+=3)N.fillStyle=`rgba(0,0,0,${.04+Math.random()*.04})`,N.fillRect(U,0,1,T);N.strokeStyle="rgba(225,215,190,.5)",N.lineWidth=2,N.strokeRect(14,14,S-28,T-28)},[1,1]),a=new Fe;a.position.set(An.x,.75,An.z),Re.add(a);let o=new W(new Vt(1.42,.075,.74,10,1,6),new At({map:r,roughness:.95}));{let N=o.geometry.attributes.position;for(let S=0;S<N.count;S++){let T=N.getX(S),U=N.getZ(S);if(N.getY(S)>0){let j=1-Math.pow(Math.abs(T)/.71,4)*.5-Math.pow(Math.abs(U)/.37,4)*.5;N.setY(S,.0375*Math.max(.2,j)+.012)}}o.geometry.computeVertexNormals()}o.position.y=.035,a.add(o);for(let[N,S]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let T=new W(new Xe(.018,8,6),me("#c9a14a"));T.position.set(N*.71,.06,S*.37),a.add(T)}let l=["#9c3a2e","#c08a2c","#3b5a7a","#4f6e45","#6e3f5c"],c=[.14,.123,.109,.096,.085],h=[196,220,246.94,293.66,329.63],u=[-60,-30,0,30,60].map(N=>N*Math.PI/180),f=u.map(N=>.58*Math.sin(N)),d=u.map(N=>.4-.58*Math.cos(N)),g=new Dn({visible:!1});c.forEach((N,S)=>{let T=new Fe;T.position.set(f[S],.08,d[S]),a.add(T);let U=new W(new cr(N*.5,N*.13,14,36),me(l[S],{r:.92}));U.rotation.x=Math.PI/2,U.position.y=N*.13,T.add(U);let V=new W(i,s);V.scale.set(N,N,N),V.position.y=N*.21,V.rotation.y=Math.random()*6,T.add(V);let j=new W(new us(N*.8,40),new At({color:"#2e3d3f",roughness:.06,metalness:.1,transparent:!0,opacity:.42,normalMap:to,normalScale:new ce(.12,.12),envMap:dt.env?null:Oh.texture,envMapIntensity:.45,depthWrite:!1}));j.rotation.x=-Math.PI/2,j.position.y=N*.21+N*.24,T.add(j);let F=new W(new nt(N*1.2,N*1.2,N*1.4,16),g);F.position.y=N*.5,T.add(F),F.userData.i=S,ct.hits.push(F),ct.list.push({g:T,bw:V,R:N,f:h[S],energy:0,rub:0,rubT:0,voice:null,silent:0,water:j,wy:j.position.y})});let x=new Fe;x.position.set(.05,.09,.25),x.rotation.y=.12,a.add(x);let m=new W(new nt(.011,.013,.27,10),me("#6b4a30",{r:.6}));m.rotation.z=Math.PI/2,x.add(m);let p=new W(new nt(.022,.022,.075,14),me("#8a6a4c",{r:1}));p.rotation.z=Math.PI/2,p.position.x=.12,x.add(p);let y=new Fe;y.position.set(.8,0,-.3),a.add(y);let v=new W(new nt(.06,.05,.022,20),me("#5b5048",{r:.55}));v.position.y=.011,y.add(v);let w=new W(new nt(.022,.024,.11,16),me("#efe6d2",{r:.6,extra:{emissive:new we("#ffb070"),emissiveIntensity:0}}));w.position.y=.077,y.add(w);let C=new W(new nt(.0015,.0015,.012,4),me("#222"));C.position.y=.138,y.add(C);let A=new W(new Xe(.012,12,8),new Dn({color:"#ffd38a",transparent:!0,opacity:.95}));A.scale.set(1,2.4,1),A.position.y=.156,A.visible=!1,y.add(A);let D=new Ha("#ffb35a",0,2.6,1.6);D.position.set(-.1,.17,.08),y.add(D),ct.candle={flame:A,light:D,lit:0,wax:w},Un(a),A.castShadow=!1,Ws.push({x:An.x-.35,z:An.z,r:.42},{x:An.x+.35,z:An.z,r:.42})}function uo(n,e=.8){if(n.energy=Math.max(n.energy,e),wr(n.g.getWorldPosition(ai).x,n.g.getWorldPosition(ai).y+n.wy+.003,ai.z,Math.max(.01,n.R*.72-.05)),!O.ctx||!O.on||O.ctx.state!=="running")return;let t=O.ctx,i=t.currentTime+.01,s=t.createGain();s.gain.value=e*.11*(.8+n.R*1.5),Ln(s,.7,"mus");let r=1+(n.R-.1)*6;for(let[a,o,l]of[[1,1,13],[1.0035,.8,13],[2.71,.5,8],[2.718,.3,8],[5.15,.22,4.2],[8.32,.09,2.2]]){let c=t.createOscillator(),h=t.createGain();c.type="sine",c.frequency.value=n.f*a,h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(o,i+.004),h.gain.exponentialRampToValueAtTime(25e-5,i+l*r),c.connect(h),h.connect(s),c.start(i),c.stop(i+l*r+.1)}es(i,.035,900,.8,.03*e,.3,"lowpass")}function I4(n){if(n.voice||!O.ctx||!O.on||O.ctx.state!=="running")return;let e=O.ctx,t=e.createGain();t.gain.value=0,Ln(t,.7,"mus");let i=[];for(let[o,l]of[[1,1],[1.0045,.75],[2.71,.28],[5.15,.06]]){let c=e.createOscillator(),h=e.createGain();c.type="sine",c.frequency.value=n.f*o,h.gain.value=l,c.connect(h),h.connect(t),c.start(),i.push(c)}let s=e.createBufferSource();s.buffer=O.noiseBuf,s.loop=!0;let r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=n.f*4,r.Q.value=3;let a=e.createGain();a.gain.value=.05,s.connect(r),r.connect(a),a.connect(t),s.start(),i.push(s),n.voice={out:t,os:i}}function Dg(n){if(!n.voice)return;let e=n.voice;n.voice=null;let t=O.ctx.currentTime;e.out.gain.cancelScheduledValues(t),e.out.gain.setTargetAtTime(0,t,.8),setTimeout(()=>{e.os.forEach(i=>{try{i.stop()}catch{}}),e.out.disconnect()},5e3)}function Ol(n,e=4200){let t=z("bowlHint");t.textContent=n,t.classList.add("show"),clearTimeout(t._t),e&&(t._t=setTimeout(()=>t.classList.remove("show"),e))}function ou(){Oe.on||le.on||(gt.on&&ho(),en.mode&&iu(),ct.on=!0,ct.mode="free",xs(null),z("poem").classList.remove("show"),st.visible=!1,document.body.classList.add("bowling"),lu("free"),Ol("\u9EDE\u4E00\u4E0B\u7F3D\uFF0C\u6216\u7528\u624B\u6307\u6CBF\u8457\u7F3D\u7DE3\u6162\u6162\u756B\u5708"),ft("bowls"),O.on&&Xs(),O.drone&&O.ctx&&O.drone.gain.setTargetAtTime(.025,O.ctx.currentTime,1))}function up(){ct.on&&(ct.on=!1,ct.list.forEach(n=>{n.rubT=0,Dg(n)}),ct.ptr.clear(),ct.breath=null,ct.listen=null,st.visible=!le.on,cu(),document.body.classList.remove("bowling"),z("bowlHint").classList.remove("show"),z("bowlCard").classList.add("hidden"),z("bowlBreath").classList.remove("show"),O.drone&&O.ctx&&O.drone.gain.setTargetAtTime(.055,O.ctx.currentTime,1),mt&&xs("choices"))}function lu(n){ct.mode=n,document.querySelectorAll("#bowlBar [data-bm]").forEach(e=>e.classList.toggle("on",e.dataset.bm===n)),z("bowlCard").classList.add("hidden"),z("bowlBreath").classList.remove("show"),ct.breath=null,ct.listen=null,n==="listen"&&Ig(),n==="breath"&&(ct.breath={t:0,n:0,phase:-1,seq:0},Ol("\u8DDF\u8457\u7F3D\u8072\uFF0C\u6162\u6162\u5730\u5438\u3001\u6162\u6162\u5730\u5410",4500)),n==="free"&&z("bowlHint").classList.remove("show")}function Ig(){z("bowlCard").classList.add("hidden"),Ol("\u5C08\u5FC3\u807D\u3002\u8072\u97F3\u5B8C\u5168\u6D88\u5931\u7684\u6642\u5019\uFF0C\u9EDE\u4E00\u4E0B\u756B\u9762\u3002",0),setTimeout(()=>{ct.mode!=="listen"||!ct.on||(uo(ct.list[0],.95),ct.listen={t0:performance.now(),done:!1})},1600)}function L4(){let n=ct.listen;if(!n||n.done)return;n.done=!0;let e=Math.round((performance.now()-n.t0)/1e3);pe.bowlListen=(pe.bowlListen||[]).concat(e).slice(-30),ln(),ft("bowllisten"),z("bowlHint").classList.remove("show"),z("bowlSecs").textContent=`\u4F60\u807D\u4E86 ${e} \u79D2\u3002`,z("bowlLine").textContent=["\u8072\u97F3\u6D88\u5931\u4E4B\u524D\uFF0C\u4F60\u4E00\u76F4\u5728\u9019\u88E1\u3002","\u807D\u898B\u5B89\u975C\uFF0C\u4E5F\u662F\u4E00\u7A2E\u807D\u898B\u3002","\u525B\u624D\u90A3\u6BB5\u6642\u9593\uFF0C\u53EA\u5C6C\u65BC\u4F60\u3002","\u9918\u97FB\u6162\u6162\u6563\u958B\uFF0C\u5FC3\u4E5F\u8DDF\u8457\u975C\u4E0B\u4F86\u3002"][Math.floor(Math.random()*4)],z("bowlCard").classList.remove("hidden")}z("bowlAgain").onclick=()=>Ig();z("bowlOk").onclick=()=>{z("bowlCard").classList.add("hidden"),lu("free")};document.querySelectorAll("#bowlBar [data-bm]").forEach(n=>n.onclick=()=>lu(n.dataset.bm));z("bowlExit").onclick=up;function U4(n){sp(n);let e=ru.intersectObjects(ct.hits,!1);return e.length?ct.list[e[0].object.userData.i]:null}function Lg(n){return n.g.getWorldPosition(ai),ai.y+=n.R*.4,ai.project(ut),[(ai.x+1)/2*innerWidth,(1-ai.y)/2*innerHeight]}function N4(n){if(ct.mode==="listen"){ct.listen&&!ct.listen.done&&L4();return}let e=U4(n);if(!e)return;let[t,i]=Lg(e);ct.ptr.set(n.pointerId,{b:e,moved:0,lx:n.clientX,ly:n.clientY,ang:Math.atan2(n.clientY-i,n.clientX-t),t:performance.now(),rub:!1})}function F4(n){let e=ct.ptr.get(n.pointerId);if(!e)return;let t=e.b,i=performance.now();e.moved+=Math.hypot(n.clientX-e.lx,n.clientY-e.ly),e.lx=n.clientX,e.ly=n.clientY;let[s,r]=Lg(t),a=Math.atan2(n.clientY-r,n.clientX-s),o=a-e.ang;o=((o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,e.ang=a;let l=Math.max(.008,(i-e.t)/1e3);e.t=i,e.moved>12&&(e.rub||(e.rub=!0,uo(t,.22),I4(t)),t.rubT=Math.min(1,t.rubT*.6+Math.min(1,Math.abs(o)/l*.16)*.4),ft("bowlrub"))}function z4(n){let e=ct.ptr.get(n.pointerId);e&&(ct.ptr.delete(n.pointerId),!e.rub&&e.moved<12&&uo(e.b,.85))}function O4(n,e){let t=ct.on;for(let s of ct.list){s.rubT*=Math.exp(-n*2.2),s.rub+=(s.rubT-s.rub)*(1-Math.exp(-n*5)),s.voice&&O.ctx&&(s.voice.out.gain.setTargetAtTime(s.rub*.12,O.ctx.currentTime,.12),s.rub<.01?(s.silent+=n,s.silent>2.5&&(Dg(s),s.silent=0)):s.silent=0),s.energy*=Math.exp(-n/3.5);let r=Math.max(s.energy*.6,s.rub);s.bw.scale.x=s.R*(1+Math.sin(e*70+s.f)*.006*r),s.bw.scale.z=s.R*(1+Math.cos(e*70+s.f)*.006*r),s.rub>.15&&Math.random()<n*3*s.rub&&(s.g.getWorldPosition(ai),wr(ai.x,ai.y+s.wy+.003,ai.z,Math.max(.01,s.R*(.3+.42*Math.random())-.05)))}{let s=ct.candle;s.lit+=((t?1:0)-s.lit)*(1-Math.exp(-n*(t?1.5:4))),s.flame.visible=s.lit>.05;let r=.85+.1*Math.sin(e*13)+.06*Math.sin(e*29+1)+.04*Math.random();s.light.intensity=s.lit*(.5+xt*4)*r,s.wax.material.emissiveIntensity=s.lit*.35*r,s.flame.scale.set(s.lit,s.lit*(2.2+.4*Math.sin(e*17)),s.lit),s.flame.position.x=Math.sin(e*5)*.0012}if(!t)return;let i=ct.breath;if(i){i.t+=n;let s=10,r=i.t%s,a=r<4,o=Math.floor(i.t/s),l=z("bowlBreath"),c=a?0:1;if(c!==i.phase&&(i.phase=c,l.textContent=a?"\u5438\u6C23\u2026\u2026":"\u5410\u6C23\u2026\u2026",l.classList.add("show"),!a)){let h=[0,1,2,3,4,3,2,1];uo(ct.list[h[i.seq%h.length]],.55),i.seq++,i.n++,i.n===3&&ft("bowlbreath"),i.n===10&&Ol("\u5F88\u597D\u3002\u53EF\u4EE5\u7E7C\u7E8C\uFF0C\u4E5F\u53EF\u4EE5\u505C\u5728\u9019\u88E1\u3002",5e3)}l.style.transform=`translate(-50%,-50%) scale(${a?.85+.3*(r/4):1.15-.3*((r-4)/6)})`}}pe.hints=pe.hints||{};Object.keys(pe.met||{}).length>4&&(pe.hints.walk=pe.hints.rake=pe.hints.sit=1);var Bt={cur:null,start:0,dist:0,lx:0,lz:0,gap:0,at:0};function Bl(){document.querySelectorAll(".glow").forEach(n=>n.classList.remove("glow"))}function B4(n,e,t){Bt.cur=n,z("hint").querySelector("span").textContent=e,z("hint").classList.add("show"),Bl(),t&&z(t).classList.add("glow")}function H4(){Bt.cur&&Bt.cur!=="after"&&(Bt.gap=performance.now()+1500),Bt.cur=null,z("hint").classList.remove("show"),Bl()}function ud(n,e){pe.hints[n]||(pe.hints[n]=1,ln(),Bl(),Bt.gap=performance.now()+(e?6e3:1800),e?(Bt.cur="after",z("hint").querySelector("span").textContent=e,z("hint").classList.add("show"),clearTimeout(Bt.at),Bt.at=setTimeout(()=>{Bt.cur==="after"&&(Bt.cur=null,z("hint").classList.remove("show"))},4800)):(Bt.cur=null,z("hint").classList.remove("show")))}z("hintX").onclick=()=>{pe.hints.walk=pe.hints.rake=pe.hints.sit=1,ln(),Bt.cur=null,z("hint").classList.remove("show"),Bl(),Ht("\u597D\uFF0C\u63A5\u4E0B\u4F86\u8B93\u4F60\u81EA\u5DF1\u6162\u6162\u901B\u3002",2600)};function k4(){let n=pe.hints;if(n.walk&&n.rake&&n.sit||!Md||!z("intro").classList.contains("fade"))return;let e=performance.now(),t=st.position;Bt.start||(Bt.start=e,Bt.lx=t.x,Bt.lz=t.z);let i=!z("moodPick").classList.contains("hidden")||Oe.on||ct.on||le.on||gt.on||wn.on||document.body.classList.contains("photo");if(n.walk||(Bt.dist+=Math.min(1,Math.hypot(t.x-Bt.lx,t.z-Bt.lz))),Bt.lx=t.x,Bt.lz=t.z,ti&&!n.rake){ud("rake","\u518D\u6309\u4E00\u6B21\u300C\u8019\u6C99\u300D\uFF0C\u5C31\u628A\u8019\u5B50\u6536\u8D77\u4F86\u3002");return}if(mt&&!n.sit){ud("sit","\u5750\u8457\u7684\u6642\u5019\uFF0C\u53EF\u4EE5\u51A5\u60F3\u3001\u9EDE\u8336\uFF0C\u6216\u6572\u4E00\u8072\u980C\u7F3D\u3002");return}if(i){Bt.cur&&Bt.cur!=="after"&&(Bt.cur=null,z("hint").classList.remove("show"),Bl());return}if(Bt.cur==="after"||e<Bt.gap)return;let s=null;if(n.walk)!n.sit&&xi==="sit"&&!mt?s=["sit",Hs?"\u9019\u88E1\u662F\u7DE3\u5074\uFF0C\u53EF\u4EE5\u5750\u4E0B\u4F86":"\u9019\u88E1\u662F\u7DE3\u5074\uFF0C\u53EF\u4EE5\u5750\u4E0B\u4F86\uFF08\u6309 E\uFF09","ctxBtn"]:!n.rake&&!ti&&t.y<.1&&Qa(t.x,t.z)&&(s=["rake",Hs?"\u6309\u4E0B\u300C\u8019\u6C99\u300D\uFF0C\u518D\u6162\u6162\u8D70\uFF0C\u770B\u770B\u8EAB\u5F8C\u7559\u4E0B\u4EC0\u9EBC":"\u6309\u4E0B\u300C\u8019\u6C99\u300D\uFF08\u6216 R\uFF09\uFF0C\u518D\u6162\u6162\u8D70\uFF0C\u770B\u770B\u8EAB\u5F8C\u7559\u4E0B\u4EC0\u9EBC","rakeBtn"]);else{if(Bt.dist>4){ud("walk");return}e-Bt.start>2e3&&(s=["walk",Hs?"\u7528\u624B\u6307\u5728\u756B\u9762\u5DE6\u534A\u908A\u62D6\u4E00\u62D6\uFF0C\u6162\u6162\u8D70":"\u7528 WASD \u6216\u65B9\u5411\u9375\uFF0C\u6162\u6162\u8D70\u4E00\u8D70",null])}s?Bt.cur!==s[0]&&B4(...s):Bt.cur&&H4()}function ul(n,e){if(zh(n,e)&&Qr(n,e)<.35)return .07;if(n>=qn&&n<=Er){if(e>=-7.6&&e<-5)return .75;if(e>=-5&&e<-4.3)return .4}return 0}function Ug(n,e){n=Dt(n,-11.7,11.7),e=Dt(e,-7.35,9.7);for(let t of[Ws,Nd])for(let i of t){let s=n-i.x,r=e-i.z,a=Math.hypot(s,r),o=i.r+.22;a<o&&a>1e-5&&(n=i.x+s/a*o,e=i.z+r/a*o)}return[n,e]}var mr=.32,Fi=Hs?9.5:10,gl=.4,Xh=Math.PI,gt={on:!1,yaw:0,pitch:.6,fov:55};function cu(){ut.fov=ut.aspect<.8?62:50,ut.updateProjectionMatrix()}cu();var qa=new b().copy(st.position),Ls=new b().copy(st.position);ut.position.set(st.position.x+2,5.5,Math.min(st.position.z+7,10.4));var ps=null,fd=0,d1=1,dd=new ce(st.position.x,st.position.z),Us=0,p1=new ka;function G4(n,e){let t=Wn.x+(gs.KeyD||gs.ArrowRight?1:0)-(gs.KeyA||gs.ArrowLeft?1:0),i=Wn.y+(gs.KeyW||gs.ArrowUp?1:0)-(gs.KeyS||gs.ArrowDown?1:0),s=Math.hypot(t,i);s>1&&(t/=s,i/=s);let r=s>.1&&!Oe.on;gt.on&&r&&ho(),mt&&r&&lo();let a=st.position;if(!mt&&r){let h=-Math.sin(mr),u=-Math.cos(mr),f=Math.cos(mr),d=-Math.sin(mr),g=f*t+h*i,x=d*t+u*i,m=Math.hypot(g,x);g/=m,x/=m;let p=(ti?1.7:2.7)*Math.min(1,s),[y,v]=Ug(a.x+g*p*n,a.z+x*p*n);id(y,v)?id(y,a.z)?id(a.x,v)||(a.z=v):a.x=y:(a.x=y,a.z=v),Xh=Math.atan2(g,x),Us+=n*p*3.6}mt&&(a.x+=(kh.x-a.x)*(1-Math.exp(-n*6)),a.z+=(kh.z-a.z)*(1-Math.exp(-n*6)));let o=Xh-st.rotation.y;o=((o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,st.rotation.y+=o*(1-Math.exp(-n*11));let l=ul(a.x,a.z);if(a.y+=(l-a.y)*(1-Math.exp(-n*14)),x4(n,e,r),!mt&&r&&a.y<.1&&!zh(a.x,a.z))if(ti){let h=st.rotation.y,u=a.x-Math.sin(h)*.75,f=a.z-Math.cos(h)*.75;Vw(u,f),Qa(u,f)?ps?Math.hypot(u-ps.x,f-ps.z)>.07&&(gw(ps.x,ps.z,u,f),ps={x:u,z:f}):ps={x:u,z:f}:ps=null}else Qa(a.x,a.z)&&(fd+=Math.hypot(a.x-dd.x,a.z-dd.y),fd>.4&&(fd=0,d1*=-1,vw(a.x,a.z,st.rotation.y,d1)));else r&&(ps=null);if(ti||(ps=null),r&&!mt){let h=Math.floor(Us/Math.PI);h!==ie.stepIdx&&(ie.stepIdx=h,y4(zh(a.x,a.z)&&Qr(a.x,a.z)<.35?"stone":a.y>.3?"wood":Qa(a.x,a.z)?"gravel":"soft"))}Cw(ti&&r&&!mt&&a.y<.1&&Qa(a.x,a.z)),dd.set(a.x,a.z),mt?ds("stand"):ze.present&&a.y>.5&&Math.hypot(a.x-ze.x,a.z-ze.z)<1.3?ds("cat"):a.y>.5&&Math.hypot(a.x-yi.x,a.z-yi.z)<1.5?ds("kuji"):a.y>.5&&Math.hypot(a.x-An.x,a.z-An.z)<1.5?ds("bowls"):$i.kind==="tanabata"&&Math.hypot(a.x-ja.x,a.z-ja.z)<1.6?ds("wish"):Math.hypot(a.x-Sn.x,a.z-Sn.z)<1.5?(xi=null,ds("lantern")):Math.hypot(a.x-Zm.x,a.z-Zm.z)<1?ds("wash"):Qr(a.x,a.z)<.9&&a.y<.2?ds("feed"):a.y>.6&&a.z>-6.3?ds("sit"):ds(null);let c=en.mode==="breath"?.3+3.9*en.v:sn.on?3.2+Math.sin(e*7)*.15+Math.sin(e*13)*.1:0;sn.light.intensity+=(c-sn.light.intensity)*(1-Math.exp(-n*(en.mode==="breath"?12:5))),sn.glowMat.emissiveIntensity=sn.light.intensity*.8,sn.halo.material.map||(sn.halo.material.map=ta,sn.halo.material.needsUpdate=!0);{let h=sn.light.intensity/4;sn.halo.material.opacity=Math.min(.85,h*.8),sn.halo.scale.setScalar(.8+h*1.6),sn.halo.visible=h>.02}if(Ns)for(let h of Xd){let u=h.m;if(h.rest>0){h.rest-=n,h.rest<=0&&qd(h);continue}u.position.y-=Ns.speed*n,u.position.x+=(Math.sin(e*1.2+h.ph)*Ns.sway+.18+Wr.value*1.4)*n,u.position.z+=Math.cos(e*.8+h.ph)*.22*n,u.rotation.x+=n*1.4,u.rotation.y+=n*.9;let f=ul(u.position.x,u.position.z)+.012;u.position.y<=f&&(u.position.y=f,u.rotation.set(-Math.PI/2,0,Se()*6),h.rest=8+Se()*12,f<.05&&Math.random()<.22&&di.length<ip&&Ul(u.position.x,u.position.z)&&(di.push({x:u.position.x,z:u.position.z,r:Math.random()*6.28,c:"#"+u.material.color.getHexString()}),su(),ln(),h.rest=.01))}if(pi.visible){for(let h=0;h<Hd;h++){let u=B1[h];u.y-=13*n,(u.y<ul(u.x,u.z)||u.z<-4.3&&u.x>qn-1.3&&u.x<Er+1.3&&u.y<4)&&(u.y=9+Se()*4,u.x=-14+Se()*28,u.z=-5+Se()*17);let f=h*6;Vr[f]=u.x,Vr[f+1]=u.y,Vr[f+2]=u.z,Vr[f+3]=u.x+.02,Vr[f+4]=u.y-.38,Vr[f+5]=u.z}kd.attributes.position.needsUpdate=!0}if(Pl.visible){for(let h=0;h<Gd;h++){let u=H1[h];u.y-=.65*n,u.x+=Math.sin(e*.8+u.ph)*.25*n,u.z+=Math.cos(e*.6+u.ph)*.12*n,(u.y<ul(u.x,u.z)||u.z<-4.3&&u.x>qn-1.3&&u.x<Er+1.3&&u.y<4)&&(u.y=8+Se()*3,u.x=-14+Se()*28,u.z=-5+Se()*17);let f=h*3;vh[f]=u.x,vh[f+1]=u.y,vh[f+2]=u.z}Vd.attributes.position.needsUpdate=!0}}var wh=null;function V4(n){let e=st.position;if(wh){ut.position.copy(wh.p),ut.lookAt(wh.l);return}if(ct.on){let h=ut.aspect<.9,u=h?new b(An.x+.05,2.75,An.z+1.45):new b(An.x,1.5,An.z+.88),f=h?new b(An.x+.05,.8,An.z-.05):new b(An.x,.8,An.z-.1);if(h){let d=2*Math.atan(.338/ut.aspect)*180/Math.PI;Math.abs(ut.fov-d)>.1&&(ut.fov=d,ut.updateProjectionMatrix())}ut.position.lerp(u,1-Math.exp(-n*4)),Ls.lerp(f,1-Math.exp(-n*5)),ut.lookAt(Ls);return}if(gt.on){let h=new b(e.x,e.y+(mt?.62:.95),e.z),u=Math.cos(gt.pitch);ut.position.lerp(h,1-Math.exp(-n*5)),Ls.lerp(h.clone().add(new b(Math.sin(gt.yaw)*u,Math.sin(gt.pitch),Math.cos(gt.yaw)*u).multiplyScalar(10)),1-Math.exp(-n*6)),ut.lookAt(Ls),ut.fov+=(gt.fov-ut.fov)*(1-Math.exp(-n*6)),ut.updateProjectionMatrix();return}if(Oe.on){let h=Oe.cam;if(ut.position.lerp(new b(h.x,h.h,h.z+h.h*.38),1-Math.exp(-n*5)),Ls.lerp(new b(h.x,0,h.z),1-Math.exp(-n*5)),ut.lookAt(Ls),Oe.sel){let u=Oe.sel.userData.c;$r.position.set(u.x,.04,u.z),$r.scale.setScalar(u.moss*(u.scale||1)+.3)}return}let t=1-Math.exp(-n*6);qa.lerp(new b(e.x,e.y+.7,e.z),t);let i,s;if(mt)if(le.on){let h=le.base;i=new b(h.x,h.y+.95,h.z-.7),s=new b(h.x,h.y+.06,h.z+.05)}else if(en.mode==="breath"){let h=Sn.x-e.x,u=Sn.z-e.z,f=Math.hypot(h,u);i=new b(e.x-h/f*2,e.y+1.7,Math.max(-7.3,e.z-u/f*2)),s=new b(Sn.x,1,Sn.z)}else i=new b(e.x,e.y+2.1,-7.25),s=new b(e.x,.15+pn.a*9,e.z+7.5);else{i=new b(qa.x+Math.sin(mr)*Fi,Math.max(.45,qa.y+Fi*Math.tan(gl)),qa.z+Math.cos(mr)*Fi);let h=i.x,u=i.z;i.x=Dt(i.x,-12.3,12.5),i.z=Math.min(i.z,10.4);let f=Math.hypot(h-i.x,u-i.z);i.y+=f*.35,i.z<-4.1&&i.x>qn-1.6&&i.x<Er+1.6&&(i.y=Math.min(i.y,3.45),i.z=Math.max(i.z,-7.3)),s=gl<.3?qa.clone().add(new b(0,(.3-gl)*9,0)):qa}ut.position.lerp(i,1-Math.exp(-n*(mt?1.6:4))),Ls.lerp(s,1-Math.exp(-n*(mt?1.6:6))),ut.lookAt(Ls);let r=ut.position.x,a=ut.position.z,o=e.x-r,l=e.z-a,c=o*o+l*l||1;for(let h of I1){let u=((h.position.x-r)*o+(h.position.z-a)*l)/c,f=r+o*Dt(u,0,1)-h.position.x,d=a+l*Dt(u,0,1)-h.position.z,x=u>-.1&&u<1.05&&Math.hypot(f,d)<.6&&ut.position.z<-4.3||u>0&&u<1&&Math.hypot(f,d)<.45||mt&&Math.abs(h.position.x-e.x)<1.6?.15:1,m=h.material;m.opacity+=(x-m.opacity)*(1-Math.exp(-n*10)),m.depthWrite=m.opacity>.9}}function Ng(){let n=Math.min(p1.getDelta(),.05),e=p1.elapsedTime;if(G4(n,e),V4(n),L1.value=e,fh+=n,fh>2&&(fh=0,Sr==="auto"&&Gs()),Hw(e),kw(performance.now(),n),lw(n),cw(n,e),pw(!1),i4(n,e),o4(n,e),l4(n,e),v4(n,e),m4(n,e),T4(n,e),D4(n),O4(n,e),k4(),(fh|0)===0&&Math.random()<.02&&P4(),O.ctx&&O.trickle){let i=Math.hypot(st.position.x-mn.x,st.position.z-mn.z);O.trickle.gain.setTargetAtTime(.06*Math.max(0,1-i/6),O.ctx.currentTime,.3)}let t=performance.now();yr&&t-km>90&&(Sl.needsUpdate=!0,yr=!1,km=t),Pw(t),wn.done||(Mi?(vl&&(vl.enabled=mt&&!le.on&&!Oe.on),qh&&(qh.uniforms.uTime.value=e),Mi.render()):li.render(Re,ut)),g1&&(g1=!1,window.__zgReady=!0,requestAnimationFrame(()=>{let i=z("loading");i&&(i.classList.add("done"),setTimeout(()=>i.remove(),1e3))})),X4(t),requestAnimationFrame(Ng)}var W4={uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 c=texture2D(tDiffuse,vUv);float v=smoothstep(0.95,0.32,length(vUv-0.5));c.rgb*=mix(0.78,1.0,v);c.rgb+= (h(vUv*1000.+uTime)-0.5)*0.018*(c.rgb+0.15);gl_FragColor=c;}"},Mi=null,pd=null,m1=null,vl=null,qh=null;dt.post&&(Mi=new rh(li),dt.ao?(pd=new hh(Re,ut,innerWidth,innerHeight),Object.assign(pd.configuration,{aoRadius:1.4,distanceFalloff:.9,intensity:2.4,halfRes:dt.ao===1,aoSamples:dt.ao===1?8:16,denoiseSamples:dt.ao===1?4:8,denoiseRadius:dt.ao===1?8:12,gammaCorrection:!1,color:new we("#1c1712")}),Mi.addPass(pd)):Mi.addPass(new ah(Re,ut)),dt.bloom&&(m1=new Wa(new ce(innerWidth/2,innerHeight/2),.5,.55,.95),Mi.addPass(m1)),dt.dof&&(vl=new lh(Re,ut,{focus:9,aperture:9e-4,maxblur:.005}),vl.enabled=!1,Mi.addPass(vl)),qh=new Va(W4),Mi.addPass(qh),Mi.addPass(new oh));document.querySelectorAll("#qBtns button").forEach(n=>{n.classList.toggle("on",n.dataset.q===vr),n.onclick=()=>Fg(n.dataset.q)});function Fg(n){if(n===vr)return;pe.quality=n,br(),Nl();let e=z("fade");e.textContent="\u63DB\u6210\u300C"+Sh[n].name+"\u300D\u756B\u8CEA\u2026",e.classList.add("on","msg"),setTimeout(()=>{try{location.reload()}catch{}},350),setTimeout(()=>{e.classList.remove("on","msg"),e.textContent="",Ht("\u91CD\u65B0\u6253\u958B\u9801\u9762\u5F8C\uFF0C\u5C31\u6703\u63DB\u6210\u300C"+Sh[n].name+"\u300D\u756B\u8CEA",4200)},3500)}var Gn={t0:0,frames:0,low:0,asked:!1,started:!1};z("startBtn").addEventListener("click",()=>{Gn.started=!0,Gn.t0=performance.now()+2500,Gn.frames=0});function X4(n){if(!(!Gn.started||Gn.asked||vr==="low"||document.hidden||wn.on)){if(n<Gn.t0){Gn.frames=0;return}if(Gn.frames++,n-Gn.t0>5e3){let e=Gn.frames*1e3/(n-Gn.t0);Gn.t0=n,Gn.frames=0,e<22?(Gn.low++,Gn.low>=2&&(Gn.asked=!0,z("perfTip").classList.add("show"))):Gn.low=0}}}z("perfYes").onclick=()=>Fg(vr==="high"?"mid":"low");z("perfNo").onclick=()=>z("perfTip").classList.remove("show");addEventListener("resize",()=>{ut.aspect=innerWidth/innerHeight,cu(),li.setSize(innerWidth,innerHeight),Mi&&Mi.setSize(innerWidth,innerHeight)});Dd(na(),!0);var g1=!0;location.search.includes("dev")&&(window.__camdbg=()=>[ut.position.toArray().map(n=>+n.toFixed(2)),Ls.toArray().map(n=>+n.toFixed(2))],window.__g={dbg:()=>({star:Tr.uOp.value,mw:Vh.uOp.value,pl:Rl.uOp.value,NIGHT:xt,MIST:dn,moonUp:wt.moonUp,illum:wi.illum}),gaze:gt,astro:tp,sunTimes:ng,skyMatrix:np,ASTRO:wt,updateAstro:lg,lightHour:ig,startGaze:lp,endGaze:ho,drawKuji:Eg,startTea:wg,KUJI:yi,LANTERN:Sn,POND:_t,TSUKUBAI:mn,player:st,sit:Hh,stand:lo,bowls:ct,startBowls:ou,endBowls:up,setBowlMode:lu,bowlStrike:uo,BOWLS:An,applySeason:n=>{Ll=!0,Zd(n)},setTime:n=>{Sr=n,Gs()},setYaw:n=>{mr=n},setDist:n=>{Fi=n},TODAY:fl,tea:le,rainbow:pn,cat:ze,AV:ie,setMood:zl,templeBell:Pg,openBook:ap,startPhoto:Rg,encodeLayout:Ag,decodeLayout:Cg,playAnim:$h,rainOn:n=>{Bs.on=n,Bs.next=performance.now()+1e9,Gs()},cam:(n,e)=>{wh=n?{p:new b(...n),l:new b(...e)}:null}});Ng();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.6.9
  *)
*/
