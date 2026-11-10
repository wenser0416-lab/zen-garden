var wg=0,od=1,bg=2;var Zp=1,Du=2,Ji=3,Ii=0,ln=1,yt=2;var ii=0,kr=1,Ms=2,ld=3,cd=4,_g=5,Zs=100,Ag=101,Rg=102,hd=103,ud=104,Cg=200,Pg=201,Dg=202,Lg=203,Gh=204,Vh=205,Ig=206,Ug=207,Ng=208,Fg=209,zg=210,Bg=211,Og=212,Hg=213,kg=214,Gg=0,Vg=1,Wg=2,Sl=3,Xg=4,qg=5,Yg=6,Zg=7,Qp=0,Qg=1,Jg=2,xs=0,Lu=1,Iu=2,Uu=3,io=4,Kg=5,Nu=6;var Jp=300,Wr=301,Xr=302,Wh=303,Xh=304,nc=306,Yn=1e3,Fn=1001,qh=1002,vt=1003,fd=1004;var ah=1005;var Ht=1006,jg=1007;var za=1008;var ys=1009,$g=1010,ev=1011,Fu=1012,Kp=1013,ni=1014,Pi=1015,Zt=1016,jp=1017,$p=1018,ji=1020,tv=1021,on=1023,nv=1024,iv=1025,Di=1026,Es=1027,zu=1028,em=1029,sv=1030,tm=1031,nm=1033,oh=33776,lh=33777,ch=33778,hh=33779,dd=35840,pd=35841,md=35842,gd=35843,im=36196,vd=37492,xd=37496,yd=37808,Md=37809,Ed=37810,Sd=37811,Td=37812,wd=37813,bd=37814,_d=37815,Ad=37816,Rd=37817,Cd=37818,Pd=37819,Dd=37820,Ld=37821,uh=36492,Id=36494,Ud=36495,rv=36283,Nd=36284,Fd=36285,zd=36286;var Tl=2300,wl=2301,fh=2302,Bd=2400,Od=2401,Hd=2402;var sm=3e3,Ks=3001,av=3200,so=3201,rm=0,ov=1,zn="",Lt="srgb",$i="srgb-linear",Bu="display-p3",ic="display-p3-linear",bl="linear",At="srgb",_l="rec709",Al="p3";var vr=7680;var kd=519,lv=512,cv=513,hv=514,am=515,uv=516,fv=517,dv=518,pv=519,Yh=35044;var Gd="300 es",Zh=1035,Ki=2e3,Rl=2001,Ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,Pa=Math.PI/180,Ba=180/Math.PI;function Li(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function Ou(n,e){return(n%e+e)%e}function mv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function gv(n,e,t){return n!==e?(t-n)/(e-n):0}function Da(n,e,t){return(1-t)*n+t*e}function vv(n,e,t,i){return Da(n,e,1-Math.exp(-t*i))}function xv(n,e=1){return e-Math.abs(Ou(n,e*2)-e)}function yv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ev(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sv(n,e){return n+Math.random()*(e-n)}function Tv(n){return n*(.5-Math.random())}function wv(n){n!==void 0&&(Vd=n);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bv(n){return n*Pa}function _v(n){return n*Ba}function Qh(n){return(n&n-1)===0&&n!==0}function Av(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rv(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var In={DEG2RAD:Pa,RAD2DEG:Ba,generateUUID:Li,clamp:an,euclideanModulo:Ou,mapLinear:mv,inverseLerp:gv,lerp:Da,damp:vv,pingpong:xv,smoothstep:yv,smootherstep:Mv,randInt:Ev,randFloat:Sv,randFloatSpread:Tv,seededRandom:wv,degToRad:bv,radToDeg:_v,isPowerOfTwo:Qh,ceilPowerOfTwo:Av,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:Rv,normalize:wt,denormalize:Ci},j=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],M=s[7],A=s[2],_=s[5],C=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*m+o*v+l*_,r[6]=a*p+o*M+l*C,r[1]=c*x+h*y+u*A,r[4]=c*m+h*v+u*_,r[7]=c*p+h*M+u*C,r[2]=f*x+d*y+g*A,r[5]=f*m+d*v+g*_,r[8]=f*p+d*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dh.makeScale(e,t)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dh=new rt;function om(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cv(){let n=Oa("canvas");return n.style.display="block",n}var Wd={};function La(n){n in Wd||(Wd[n]=!0,console.warn(n))}var Xd=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qd=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vo={[$i]:{transfer:bl,primaries:_l,toReference:n=>n,fromReference:n=>n},[Lt]:{transfer:At,primaries:_l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ic]:{transfer:bl,primaries:Al,toReference:n=>n.applyMatrix3(qd),fromReference:n=>n.applyMatrix3(Xd)},[Bu]:{transfer:At,primaries:Al,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qd),fromReference:n=>n.applyMatrix3(Xd).convertLinearToSRGB()}},Pv=new Set([$i,ic]),xt={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Pv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Vo[e].toReference,s=Vo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vo[n].primaries},getTransfer:function(n){return n===zn?bl:Vo[n].transfer}};function Gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ph(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xr,Pl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Oa("canvas")),xr.width=e.width,xr.height=e.height;let i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gr(t[i]/255)*255):t[i]=Gr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dv=0,Dl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mh(s[a].image)):r.push(mh(s[a]))}else r=mh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lv=0,Bn=class n extends Ss{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fn,s=Fn,r=Ht,a=za,o=on,l=ys,c=n.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Li(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ks?Lt:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?Ks:sm}set encoding(e){La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ks?Lt:zn}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Jp;Bn.DEFAULT_ANISOTROPY=1;var Ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(d+1)/2,A=(p+1)/2,_=(h+f)/4,C=(u+x)/4,N=(g+m)/4;return v>M&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=_/i,r=C/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=_/s,r=N/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=N/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jh=class extends Ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(La("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ks?Lt:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rt=class extends Jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ll=class extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kh=class extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Il=class extends Rt{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLMultipleRenderTargets=!0;let r=this.texture;this.texture=[];for(let a=0;a<i;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.texture.length;s<r;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},Zn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),_=Math.atan2(A,p*y);m=Math.sin(m*_)/A,o=Math.sin(o*_)/A}let M=o*y;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gh=new S,Yd=new Zn,es=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Xo.subVectors(this.max,Ma),yr.subVectors(e.a,Ma),Mr.subVectors(e.b,Ma),Er.subVectors(e.c,Ma),ds.subVectors(Mr,yr),ps.subVectors(Er,Mr),Vs.subVectors(yr,Er);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Vs.z,Vs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Vs.z,0,-Vs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Vs.y,Vs.x,0];return!vh(t,yr,Mr,Er,Xo)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,yr,Mr,Er,Xo))?!1:(qo.crossVectors(ds,ps),t=[qo.x,qo.y,qo.z],vh(t,yr,Mr,Er,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xi=[new S,new S,new S,new S,new S,new S,new S,new S],fi=new S,Wo=new es,yr=new S,Mr=new S,Er=new S,ds=new S,ps=new S,Vs=new S,Ma=new S,Xo=new S,qo=new S,Ws=new S;function vh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ws.fromArray(n,r);let o=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),h=i.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Iv=new es,Ea=new S,xh=new S,gi=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Iv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(xh)),this.expandByPoint(Ea.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new S,yh=new S,Yo=new S,ms=new S,Mh=new S,Zo=new S,Eh=new S,qr=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yh.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yo),o=ms.dot(this.direction),l=-ms.dot(Yo),c=ms.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(Yo,f),d}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let i=qi.dot(this.direction),s=qi.dot(qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,s,r){Mh.subVectors(t,e),Zo.subVectors(i,e),Eh.crossVectors(Mh,Zo);let a=this.direction.dot(Eh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ms.subVectors(this.origin,e);let l=o*this.direction.dot(Zo.crossVectors(ms,Zo));if(l<0)return null;let c=o*this.direction.dot(Mh.cross(ms));if(c<0||l+c>a)return null;let h=-o*ms.dot(Eh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uv,e,Nv)}lookAt(e,t,i){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),gs.crossVectors(i,Xn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),gs.crossVectors(i,Xn)),gs.normalize(),Qo.crossVectors(Xn,gs),s[0]=gs.x,s[4]=Qo.x,s[8]=Xn.x,s[1]=gs.y,s[5]=Qo.y,s[9]=Xn.y,s[2]=gs.z,s[6]=Qo.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],v=i[7],M=i[11],A=i[15],_=s[0],C=s[4],N=s[8],E=s[12],w=s[1],L=s[5],z=s[9],Q=s[13],P=s[2],O=s[6],X=s[10],$=s[14],J=s[3],Z=s[7],ie=s[11],ae=s[15];return r[0]=a*_+o*w+l*P+c*J,r[4]=a*C+o*L+l*O+c*Z,r[8]=a*N+o*z+l*X+c*ie,r[12]=a*E+o*Q+l*$+c*ae,r[1]=h*_+u*w+f*P+d*J,r[5]=h*C+u*L+f*O+d*Z,r[9]=h*N+u*z+f*X+d*ie,r[13]=h*E+u*Q+f*$+d*ae,r[2]=g*_+x*w+m*P+p*J,r[6]=g*C+x*L+m*O+p*Z,r[10]=g*N+x*z+m*X+p*ie,r[14]=g*E+x*Q+m*$+p*ae,r[3]=y*_+v*w+M*P+A*J,r[7]=y*C+v*L+M*O+A*Z,r[11]=y*N+v*z+M*X+A*ie,r[15]=y*E+v*Q+M*$+A*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+x*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,M=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,A=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,_=t*y+i*v+s*M+r*A;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/_;return e[0]=y*C,e[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*C,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*C,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*C,e[4]=v*C,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*C,e[8]=M*C,e[9]=(g*u*r-h*x*r-g*i*d+t*x*d+h*i*p-t*u*p)*C,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*C,e[12]=A*C,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,M=l*u,A=i.x,_=i.y,C=i.z;return s[0]=(1-(x+p))*A,s[1]=(d+M)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(d-M)*_,s[5]=(1-(f+p))*_,s[6]=(m+y)*_,s[7]=0,s[8]=(g+v)*C,s[9]=(m-y)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Sr.set(s[0],s[1],s[2]).length(),a=Sr.set(s[4],s[5],s[6]).length(),o=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);let c=1/r,h=1/a,u=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ki){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(o===Ki)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rl)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ki){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,d=(i+s)*h,g,x;if(o===Ki)g=(a+r)*u,x=-2*u;else if(o===Rl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Sr=new S,di=new Ie,Uv=new S(0,0,0),Nv=new S(1,1,1),gs=new S,Qo=new S,Xn=new S,Zd=new Ie,Qd=new Zn,Ts=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ts.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fv=0,Jd=new S,Tr=new Zn,Yi=new Ie,Jo=new S,Sa=new S,zv=new S,Bv=new Zn,Kd=new S(1,0,0),jd=new S(0,1,0),$d=new S(0,0,1),Ov={type:"added"},Hv={type:"removed"},cn=class n extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new Ts,i=new Zn,s=new S(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new rt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Sa,Jo,this.up):Yi.lookAt(Jo,Sa,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ov)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};cn.DEFAULT_UP=new S(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new S,Zi=new S,Sh=new S,Qi=new S,wr=new S,br=new S,ep=new S,Th=new S,wh=new S,bh=new S,Ko=!1,Js=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),Zi.subVectors(i,t),Sh.subVectors(e,t);let a=pi.dot(pi),o=pi.dot(Zi),l=pi.dot(Sh),c=Zi.dot(Zi),h=Zi.dot(Sh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,i,s,r,a,o,l){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Zi.subVectors(e,t),pi.cross(Zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),pi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;wr.subVectors(s,i),br.subVectors(r,i),Th.subVectors(e,i);let l=wr.dot(Th),c=br.dot(Th);if(l<=0&&c<=0)return t.copy(i);wh.subVectors(e,s);let h=wr.dot(wh),u=br.dot(wh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(wr,a);bh.subVectors(e,r);let d=wr.dot(bh),g=br.dot(bh);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(br,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ep.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(ep,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(wr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},jo={h:0,s:0,l:0};function _h(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=Ou(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=_h(a,r,e+1/3),this.g=_h(a,r,e),this.b=_h(a,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=lm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=ph(e.r),this.g=ph(e.g),this.b=ph(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return xt.fromWorkingColorSpace(En.copy(this),e),Math.round(an(En.r*255,0,255))*65536+Math.round(an(En.g*255,0,255))*256+Math.round(an(En.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Lt){xt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(jo);let i=Da(vs.h,jo.h,t),s=Da(vs.s,jo.s,t),r=Da(vs.l,jo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new ce;ce.NAMES=lm;var kv=0,Ui=class extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=kr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==Zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ln=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new S,$o=new j,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}};var Ul=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Nl=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ue=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Gv=0,ti=new Ie,Ah=new cn,_r=new S,qn=new es,Ta=new es,rn=new S,ft=class n extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?Nl:Ul)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(qn.min,Ta.min),qn.expandByPoint(rn),rn.addVectors(qn.max,Ta.max),qn.expandByPoint(rn)):(qn.expandByPoint(Ta.min),qn.expandByPoint(Ta.max))}qn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(e,c),rn.add(_r)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new S,h[w]=new S;let u=new S,f=new S,d=new S,g=new j,x=new j,m=new j,p=new S,y=new S;function v(w,L,z){u.fromArray(s,w*3),f.fromArray(s,L*3),d.fromArray(s,z*3),g.fromArray(a,w*2),x.fromArray(a,L*2),m.fromArray(a,z*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(Q),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(Q),c[w].add(p),c[L].add(p),c[z].add(p),h[w].add(y),h[L].add(y),h[z].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,L=M.length;w<L;++w){let z=M[w],Q=z.start,P=z.count;for(let O=Q,X=Q+P;O<X;O+=3)v(i[O+0],i[O+1],i[O+2])}let A=new S,_=new S,C=new S,N=new S;function E(w){C.fromArray(r,w*3),N.copy(C);let L=c[w];A.copy(L),A.sub(C.multiplyScalar(C.dot(L))).normalize(),_.crossVectors(N,L);let Q=_.dot(h[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=Q}for(let w=0,L=M.length;w<L;++w){let z=M[w],Q=z.start,P=z.count;for(let O=Q,X=Q+P;O<X;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new S,r=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tp=new Ie,Xs=new qr,el=new gi,np=new S,Ar=new S,Rr=new S,Cr=new S,Rh=new S,tl=new S,nl=new j,il=new j,sl=new j,ip=new S,sp=new S,rp=new S,rl=new S,al=new S,B=class extends cn{constructor(e=new ft,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Rh.fromBufferAttribute(u,e),a?tl.addScaledVector(Rh,h):tl.addScaledVector(Rh.sub(t),h))}t.add(tl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(el.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(el,np)===null||Xs.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(tp),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,A=v;M<A;M+=3){let _=o.getX(M),C=o.getX(M+1),N=o.getX(M+2);s=ol(this,p,e,i,c,h,u,_,C,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);s=ol(this,a,e,i,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,A=v;M<A;M+=3){let _=M,C=M+1,N=M+2;s=ol(this,p,e,i,c,h,u,_,C,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,M=m+2;s=ol(this,a,e,i,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Vv(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ii,o),l===null)return null;al.copy(o),al.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:n}}function ol(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ar),n.getVertexPosition(l,Rr),n.getVertexPosition(c,Cr);let h=Vv(n,e,t,i,Ar,Rr,Cr,rl);if(h){s&&(nl.fromBufferAttribute(s,o),il.fromBufferAttribute(s,l),sl.fromBufferAttribute(s,c),h.uv=Js.getInterpolation(rl,Ar,Rr,Cr,nl,il,sl,new j)),r&&(nl.fromBufferAttribute(r,o),il.fromBufferAttribute(r,l),sl.fromBufferAttribute(r,c),h.uv1=Js.getInterpolation(rl,Ar,Rr,Cr,nl,il,sl,new j),h.uv2=h.uv1),a&&(ip.fromBufferAttribute(a,o),sp.fromBufferAttribute(a,l),rp.fromBufferAttribute(a,c),h.normal=Js.getInterpolation(rl,Ar,Rr,Cr,ip,sp,rp,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};Js.getNormal(Ar,Rr,Cr,u.normal),h.face=u}return h}var Et=class n extends ft{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(x,m,p,y,v,M,A,_,C,N,E){let w=M/C,L=A/N,z=M/2,Q=A/2,P=_/2,O=C+1,X=N+1,$=0,J=0,Z=new S;for(let ie=0;ie<X;ie++){let ae=ie*L-Q;for(let ye=0;ye<O;ye++){let Y=ye*w-z;Z[x]=Y*y,Z[m]=ae*v,Z[p]=P,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=_>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ye/C),u.push(1-ie/N),$+=1}}for(let ie=0;ie<N;ie++)for(let ae=0;ae<C;ae++){let ye=f+ae+O*ie,Y=f+ae+O*(ie+1),ee=f+(ae+1)+O*(ie+1),ve=f+(ae+1)+O*ie;l.push(ye,Y,ve),l.push(Y,ee,ve),J+=6}o.addGroup(d,J,E),d+=J,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=Yr(n[t]);for(let s in i)e[s]=i[s]}return e}function Wv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cm(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}var ai={clone:Yr,merge:Dn},Xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xv,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Fl=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Sn=class extends Fl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pr=-90,Dr=1,ka=class extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(Pr,Dr,e,t);s.layers=this.layers,this.add(s);let r=new Sn(Pr,Dr,e,t);r.layers=this.layers,this.add(r);let a=new Sn(Pr,Dr,e,t);a.layers=this.layers,this.add(a);let o=new Sn(Pr,Dr,e,t);o.layers=this.layers,this.add(o);let l=new Sn(Pr,Dr,e,t);l.layers=this.layers,this.add(l);let c=new Sn(Pr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zl=class extends Bn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ga=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(La("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ks?Lt:zn),this.texture=new zl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ii});r.uniforms.tEquirect.value=t;let a=new B(s,r),o=t.minFilter;return t.minFilter===za&&(t.minFilter=Ht),new ka(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Ch=new S,Yv=new S,Zv=new rt,mi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ch.subVectors(i,t).cross(Yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ch),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zv.getNormalMatrix(e),s=this.coplanarPoint(Ch).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new gi,ll=new S,js=class{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+a,f+h,m+g,M+y).normalize(),i[3].setComponents(l-a,f-h,m-g,M-y).normalize(),i[4].setComponents(l-o,f-u,m-x,M-v).normalize(),t===Ki)i[5].setComponents(l+o,f+u,m+x,M+v).normalize();else if(t===Rl)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qv(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var un=class n extends ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let v=0;v<c;v++){let M=v*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,M=y+c*(p+1),A=y+1+c*(p+1),_=y+1+c*p;d.push(v,M,_),d.push(M,A,_)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`
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
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Qx=`struct PhysicalMaterial {
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
}`,Jx=`
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ay=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
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
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uy=`float getShadowMask() {
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,nM=`#if DEPTH_PACKING == 3200
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
}`,iM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,fM=`#define LAMBERT
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
}`,dM=`#define MATCAP
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
}`,pM=`#define MATCAP
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
}`,mM=`#define NORMAL
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
}`,gM=`#define NORMAL
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
}`,vM=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
}`,EM=`#define TOON
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
}`,SM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,_M=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Jv,alphahash_pars_fragment:Kv,alphamap_fragment:jv,alphamap_pars_fragment:$v,alphatest_fragment:ex,alphatest_pars_fragment:tx,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:rx,begin_vertex:ax,beginnormal_vertex:ox,bsdfs:lx,iridescence_fragment:cx,bumpmap_pars_fragment:hx,clipping_planes_fragment:ux,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:vx,color_vertex:xx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:Sx,displacementmap_vertex:Tx,emissivemap_fragment:wx,emissivemap_pars_fragment:bx,colorspace_fragment:_x,colorspace_pars_fragment:Ax,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Vx,envmap_vertex:Lx,fog_vertex:Ix,fog_pars_vertex:Ux,fog_fragment:Nx,fog_pars_fragment:Fx,gradientmap_pars_fragment:zx,lightmap_fragment:Bx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:kx,lights_pars_begin:Gx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:qx,lights_phong_pars_fragment:Yx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Qx,lights_fragment_begin:Jx,lights_fragment_maps:Kx,lights_fragment_end:jx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:sy,map_particle_fragment:ry,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphcolor_vertex:cy,morphnormal_vertex:hy,morphtarget_pars_vertex:uy,morphtarget_vertex:fy,normal_fragment_begin:dy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:vy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Sy,opaque_fragment:Ty,packing:wy,premultiplied_alpha_fragment:by,project_vertex:_y,dithering_fragment:Ay,dithering_pars_fragment:Ry,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Ly,shadowmap_vertex:Iy,shadowmask_pars_fragment:Uy,skinbase_vertex:Ny,skinning_pars_vertex:Fy,skinning_vertex:zy,skinnormal_vertex:By,specularmap_fragment:Oy,specularmap_pars_fragment:Hy,tonemapping_fragment:ky,tonemapping_pars_fragment:Gy,transmission_fragment:Vy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:qy,uv_vertex:Yy,worldpos_vertex:Zy,background_vert:Qy,background_frag:Jy,backgroundCube_vert:Ky,backgroundCube_frag:jy,cube_vert:$y,cube_frag:eM,depth_vert:tM,depth_frag:nM,distanceRGBA_vert:iM,distanceRGBA_frag:sM,equirect_vert:rM,equirect_frag:aM,linedashed_vert:oM,linedashed_frag:lM,meshbasic_vert:cM,meshbasic_frag:hM,meshlambert_vert:uM,meshlambert_frag:fM,meshmatcap_vert:dM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:gM,meshphong_vert:vM,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:MM,meshtoon_vert:EM,meshtoon_frag:SM,points_vert:TM,points_frag:wM,shadow_vert:bM,shadow_frag:_M,sprite_vert:AM,sprite_frag:RM},ue={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ri={basic:{uniforms:Dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ce(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Dn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Dn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ce(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Dn([ue.points,ue.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Dn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Dn([ue.common,ue.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Dn([ue.sprite,ue.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Dn([ue.common,ue.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Dn([ue.lights,ue.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ri.physical={uniforms:Dn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var cl={r:0,b:0,g:0};function CM(n,e,t,i,s,r,a){let o=new ce(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===nc)?(h===void 0&&(h=new B(new Et(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Yr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,_,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=xt.getTransfer(v.colorSpace)!==At,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new B(new un(2,2),new pt({name:"BackgroundMaterial",uniforms:Yr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=xt.getTransfer(v.colorSpace)!==At,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(cl,cm(n)),i.buffers.color.setClear(cl.r,cl.g,cl.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function PM(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(P,O,X,$,J){let Z=!1;if(a){let ie=x($,X,O);c!==ie&&(c=ie,d(c.object)),Z=p(P,$,X,J),Z&&y(P,$,X,J)}else{let ie=O.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==ie)&&(c.geometry=$.id,c.program=X.id,c.wireframe=ie,Z=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,N(P,O,X,$),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,O,X){let $=X.wireframe===!0,J=o[P.id];J===void 0&&(J={},o[P.id]=J);let Z=J[O.id];Z===void 0&&(Z={},J[O.id]=Z);let ie=Z[$];return ie===void 0&&(ie=m(f()),Z[$]=ie),ie}function m(P){let O=[],X=[],$=[];for(let J=0;J<s;J++)O[J]=0,X[J]=0,$[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:$,object:P,attributes:{},index:null}}function p(P,O,X,$){let J=c.attributes,Z=O.attributes,ie=0,ae=X.getAttributes();for(let ye in ae)if(ae[ye].location>=0){let ee=J[ye],ve=Z[ye];if(ve===void 0&&(ye==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),ye==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),ee===void 0||ee.attribute!==ve||ve&&ee.data!==ve.data)return!0;ie++}return c.attributesNum!==ie||c.index!==$}function y(P,O,X,$){let J={},Z=O.attributes,ie=0,ae=X.getAttributes();for(let ye in ae)if(ae[ye].location>=0){let ee=Z[ye];ee===void 0&&(ye==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),ye==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let ve={};ve.attribute=ee,ee&&ee.data&&(ve.data=ee.data),J[ye]=ve,ie++}c.attributes=J,c.attributesNum=ie,c.index=$}function v(){let P=c.newAttributes;for(let O=0,X=P.length;O<X;O++)P[O]=0}function M(P){A(P,0)}function A(P,O){let X=c.newAttributes,$=c.enabledAttributes,J=c.attributeDivisors;X[P]=1,$[P]===0&&(n.enableVertexAttribArray(P),$[P]=1),J[P]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),J[P]=O)}function _(){let P=c.newAttributes,O=c.enabledAttributes;for(let X=0,$=O.length;X<$;X++)O[X]!==P[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function C(P,O,X,$,J,Z,ie){ie===!0?n.vertexAttribIPointer(P,O,X,J,Z):n.vertexAttribPointer(P,O,X,$,J,Z)}function N(P,O,X,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=$.attributes,Z=X.getAttributes(),ie=O.defaultAttributeValues;for(let ae in Z){let ye=Z[ae];if(ye.location>=0){let Y=J[ae];if(Y===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let ee=Y.normalized,ve=Y.itemSize,Pe=t.get(Y);if(Pe===void 0)continue;let Ce=Pe.buffer,Ye=Pe.type,Je=Pe.bytesPerElement,Oe=i.isWebGL2===!0&&(Ye===n.INT||Ye===n.UNSIGNED_INT||Y.gpuType===Kp);if(Y.isInterleavedBufferAttribute){let mt=Y.data,H=mt.stride,An=Y.offset;if(mt.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ye.locationSize;Ne++)A(ye.location+Ne,mt.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ne=0;Ne<ye.locationSize;Ne++)M(ye.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ne=0;Ne<ye.locationSize;Ne++)C(ye.location+Ne,ve/ye.locationSize,Ye,ee,H*Je,(An+ve/ye.locationSize*Ne)*Je,Oe)}else{if(Y.isInstancedBufferAttribute){for(let mt=0;mt<ye.locationSize;mt++)A(ye.location+mt,Y.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let mt=0;mt<ye.locationSize;mt++)M(ye.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let mt=0;mt<ye.locationSize;mt++)C(ye.location+mt,ve/ye.locationSize,Ye,ee,ve*Je,ve/ye.locationSize*mt*Je,Oe)}}else if(ie!==void 0){let ee=ie[ae];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(ye.location,ee);break;case 3:n.vertexAttrib3fv(ye.location,ee);break;case 4:n.vertexAttrib4fv(ye.location,ee);break;default:n.vertexAttrib1fv(ye.location,ee)}}}}_()}function E(){z();for(let P in o){let O=o[P];for(let X in O){let $=O[X];for(let J in $)g($[J].object),delete $[J];delete O[X]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;let O=o[P.id];for(let X in O){let $=O[X];for(let J in $)g($[J].object),delete $[J];delete O[X]}delete o[P.id]}function L(P){for(let O in o){let X=o[O];if(X[P.id]===void 0)continue;let $=X[P.id];for(let J in $)g($[J].object),delete $[J];delete X[P.id]}}function z(){Q(),h=!0,c!==l&&(c=l,d(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:M,disableUnusedAttributes:_}}function DM(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function LM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=a||e.has("OES_texture_float"),A=v&&M,_=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:_}}function IM(n){let e=this,t=null,i=0,s=!1,r=!1,a=new mi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,M=p.clippingState||null;l.value=M,M=h(g,f,v,d);for(let A=0;A!==v;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==x;++v,M+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function UM(n){let e=new WeakMap;function t(a,o){return o===Wh?a.mapping=Wr:o===Xh&&(a.mapping=Xr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wh||o===Xh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ga(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ws=class extends Fl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Br=4,ap=[.125,.215,.35,.446,.526,.582],Qs=20,Ph=new ws,op=new ce,Dh=null,Lh=0,Ih=0,Ys=(1+Math.sqrt(5))/2,Lr=1/Ys,lp=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Ys,Lr),new S(0,Ys,-Lr),new S(Lr,0,Ys),new S(-Lr,0,Ys),new S(Ys,Lr,0),new S(-Ys,Lr,0)],Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Dh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Lh,Ih),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Zt,format:on,colorSpace:$i,depthBuffer:!1},s=cp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NM(r)),this._blurMaterial=FM(r,e,t)}return s}_compileMaterial(e){let t=new B(this._lodPlanes[0],e);this._renderer.compile(t,Ph)}_sceneToCubeUV(e,t,i,s){let o=new Sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(op),h.toneMapping=xs,h.autoClear=!1;let d=new Ln({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new B(new Et,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(op),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;hl(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Wr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;hl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ph)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(s-1)%lp.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new B(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let p=[],y=0;for(let C=0;C<Qs;++C){let N=C/x,E=Math.exp(-N*N/2);p.push(E),C===0?y+=E:C<m&&(y+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let M=this._sizeLods[s],A=3*M*(s>v-Br?s-v+Br:0),_=4*(this._cubeSize-M);hl(t,A,_,3*M,2*M),l.setRenderTarget(t),l.render(u,Ph)}};function NM(n){let e=[],t=[],i=[],s=n,r=n-Br+1+ap.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Br?l=ap[a-n+Br-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let _=0;_<d;_++){let C=_%3*2/3-1,N=_>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];y.set(E,x*g*_),v.set(f,m*g*_);let w=[_,_,_,_,_,_];M.set(w,p*g*_)}let A=new ft;A.setAttribute("position",new zt(y,x)),A.setAttribute("uv",new zt(v,m)),A.setAttribute("faceIndex",new zt(M,p)),e.push(A),s>Br&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cp(n,e,t){let i=new Rt(n,e,t);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function FM(n,e,t){let i=new Float32Array(Qs),s=new S(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function hp(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function up(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}function zM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wh||l===Xh,h=l===Wr||l===Xr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Zr(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Zr(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function BM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function OM(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,M=y.length;v<M;v+=3){let A=y[v+0],_=y[v+1],C=y[v+2];f.push(A,_,_,C,C,A)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let A=v+0,_=v+1,C=v+2;f.push(A,_,_,C,C,A)}}else return;let m=new(om(f)?Nl:Ul)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function HM(n,e,t,i){let s=i.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){n.drawElements(r,g,o,d*l),t.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*l,x),t.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function kM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function GM(n,e){return n[0]-e[0]}function VM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function WM(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let P=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],N=0;y===!0&&(N=1),v===!0&&(N=2),M===!0&&(N=3);let E=h.attributes.position.count*N,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let L=new Float32Array(E*w*4*g),z=new Ll(L,E,w,g);z.type=Pi,z.needsUpdate=!0;let Q=N*4;for(let O=0;O<g;O++){let X=A[O],$=_[O],J=C[O],Z=E*w*4*O;for(let ie=0;ie<X.count;ie++){let ae=ie*Q;y===!0&&(a.fromBufferAttribute(X,ie),L[Z+ae+0]=a.x,L[Z+ae+1]=a.y,L[Z+ae+2]=a.z,L[Z+ae+3]=0),v===!0&&(a.fromBufferAttribute($,ie),L[Z+ae+4]=a.x,L[Z+ae+5]=a.y,L[Z+ae+6]=a.z,L[Z+ae+7]=0),M===!0&&(a.fromBufferAttribute(J,ie),L[Z+ae+8]=a.x,L[Z+ae+9]=a.y,L[Z+ae+10]=a.z,L[Z+ae+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:z,size:new j(E,w)},r.set(h,x),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<d;v++){let M=g[v];M[0]=v,M[1]=f[v]}g.sort(VM);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(GM);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=o[v],A=M[0],_=M[1];A!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+v)!==x[A]&&h.setAttribute("morphTarget"+v,x[A]),m&&h.getAttribute("morphNormal"+v)!==m[A]&&h.setAttribute("morphNormal"+v,m[A]),s[v]=_,p+=_):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function XM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var bs=class extends Bn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Di,h!==Di&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Di&&(i=ni),i===void 0&&h===Es&&(i=ji),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},um=new Bn,fm=new bs(1,1);fm.compareFunction=am;var dm=new Ll,pm=new Kh,mm=new zl,fp=[],dp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function ea(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=fp[s];if(r===void 0&&(r=new Float32Array(s),fp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sc(n,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function ZM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function QM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function JM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;gp.set(i),n.uniformMatrix2fv(this.addr,!1,gp),Kt(t,i)}}function KM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;mp.set(i),n.uniformMatrix3fv(this.addr,!1,mp),Kt(t,i)}}function jM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;pp.set(i),n.uniformMatrix4fv(this.addr,!1,pp),Kt(t,i)}}function $M(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function t1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function n1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function i1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function o1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?fm:um;t.setTexture2D(e||r,s)}function l1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pm,s)}function c1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mm,s)}function h1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dm,s)}function u1(n){switch(n){case 5126:return qM;case 35664:return YM;case 35665:return ZM;case 35666:return QM;case 35674:return JM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return $M;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}function f1(n,e){n.uniform1fv(this.addr,e)}function d1(n,e){let t=ea(e,this.size,2);n.uniform2fv(this.addr,t)}function p1(n,e){let t=ea(e,this.size,3);n.uniform3fv(this.addr,t)}function m1(n,e){let t=ea(e,this.size,4);n.uniform4fv(this.addr,t)}function g1(n,e){let t=ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v1(n,e){let t=ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x1(n,e){let t=ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function y1(n,e){n.uniform1iv(this.addr,e)}function M1(n,e){n.uniform2iv(this.addr,e)}function E1(n,e){n.uniform3iv(this.addr,e)}function S1(n,e){n.uniform4iv(this.addr,e)}function T1(n,e){n.uniform1uiv(this.addr,e)}function w1(n,e){n.uniform2uiv(this.addr,e)}function b1(n,e){n.uniform3uiv(this.addr,e)}function _1(n,e){n.uniform4uiv(this.addr,e)}function A1(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||um,r[a])}function R1(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pm,r[a])}function C1(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||mm,r[a])}function P1(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dm,r[a])}function D1(n){switch(n){case 5126:return f1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return S1;case 5125:return T1;case 36294:return w1;case 36295:return b1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return P1}}var jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=u1(t.type)}},$h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D1(t.type)}},eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Uh=/(\w+)(\])?(\[|\.)?/g;function vp(n,e){n.seq.push(e),n.map[e.id]=e}function L1(n,e,t){let i=n.name,s=i.length;for(Uh.lastIndex=0;;){let r=Uh.exec(i),a=Uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vp(t,c===void 0?new jh(o,n,e):new $h(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new eu(o),vp(t,u)),t=u}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);L1(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function xp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var I1=37297,U1=0;function N1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function F1(n){let e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n),i;switch(e===t?i="":e===Al&&t===_l?i="LinearDisplayP3ToLinearSRGB":e===_l&&t===Al&&(i="LinearSRGBToLinearDisplayP3"),n){case $i:case ic:return[i,"LinearTransferOETF"];case Lt:case Bu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+N1(n.getShaderSource(e),a)}else return s}function z1(n,e){let t=F1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B1(n,e){let t;switch(e){case Lu:t="Linear";break;case Iu:t="Reinhard";break;case Uu:t="OptimizedCineon";break;case io:t="ACESFilmic";break;case Nu:t="AgX";break;case Kg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function H1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Or).join(`
`)}function k1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Or(n){return n!==""}function Mp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V1=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(n){return n.replace(V1,X1)}var W1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X1(n,e){let t=je[e];if(t===void 0){let i=W1.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}var q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(n){return n.replace(q1,Y1)}function Y1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Q1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Xr&&(e="ENVMAP_MODE_REFRACTION"),e}function K1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qp:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case Jg:e="ENVMAP_BLENDING_ADD";break}return e}function j1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Z1(t),c=Q1(t),h=J1(t),u=K1(t),f=j1(t),d=t.isWebGL2?"":O1(t),g=H1(t),x=k1(r),m=s.createProgram(),p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Or).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Or).join(`
`),y.length>0&&(y+=`
`)):(p=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),y=[d,Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?je.tonemapping_pars_fragment:"",t.toneMapping!==xs?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=tu(a),a=Mp(a,t),a=Ep(a,t),o=tu(o),o=Mp(o,t),o=Ep(o,t),a=Sp(a),o=Sp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+p+a,A=v+y+o,_=xp(s,s.VERTEX_SHADER,M),C=xp(s,s.FRAGMENT_SHADER,A);s.attachShader(m,_),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(z){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(_).trim(),O=s.getShaderInfoLog(C).trim(),X=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,_,C);else{let J=yp(s,_,"vertex"),Z=yp(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+J+`
`+Z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||O==="")&&($=!1);$&&(z.diagnostics={runnable:X,programLog:Q,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:y}})}s.deleteShader(_),s.deleteShader(C),E=new Vr(s,m),w=G1(s,m)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,I1)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=C,this}var eE=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new iu(e),t.set(e,i)),i}},iu=class{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}};function tE(n,e,t,i,s,r,a){let o=new Ha,l=new nu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,w,L,z,Q){let P=z.fog,O=Q.geometry,X=E.isMeshStandardMaterial?z.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),J=$&&$.mapping===nc?$.image.height:null,Z=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=ie!==void 0?ie.length:0,ye=0;O.morphAttributes.position!==void 0&&(ye=1),O.morphAttributes.normal!==void 0&&(ye=2),O.morphAttributes.color!==void 0&&(ye=3);let Y,ee,ve,Pe;if(Z){let Rn=Ri[Z];Y=Rn.vertexShader,ee=Rn.fragmentShader}else Y=E.vertexShader,ee=E.fragmentShader,l.update(E),ve=l.getVertexShaderID(E),Pe=l.getFragmentShaderID(E);let Ce=n.getRenderTarget(),Ye=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,Oe=!!E.map,mt=!!E.matcap,H=!!$,An=!!E.aoMap,Ne=!!E.lightMap,We=!!E.bumpMap,be=!!E.normalMap,Bt=!!E.displacementMap,$e=!!E.emissiveMap,R=!!E.metalnessMap,T=!!E.roughnessMap,G=E.anisotropy>0,se=E.clearcoat>0,ne=E.iridescence>0,re=E.sheen>0,_e=E.transmission>0,ge=G&&!!E.anisotropyMap,Me=se&&!!E.clearcoatMap,Be=se&&!!E.clearcoatNormalMap,et=se&&!!E.clearcoatRoughnessMap,te=ne&&!!E.iridescenceMap,Tt=ne&&!!E.iridescenceThicknessMap,lt=re&&!!E.sheenColorMap,Ve=re&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Ee=!!E.specularColorMap,Ke=!!E.specularIntensityMap,Mt=_e&&!!E.transmissionMap,Gt=_e&&!!E.thicknessMap,it=!!E.gradientMap,he=!!E.alphaMap,I=E.alphaTest>0,pe=!!E.alphaHash,me=!!E.extensions,He=!!O.attributes.uv1,Fe=!!O.attributes.uv2,Ct=!!O.attributes.uv3,Pt=xs;return E.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Pt=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:ee,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:Pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Je,instancing:Ye,instancingColor:Ye&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:$i,map:Oe,matcap:mt,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:J,aoMap:An,lightMap:Ne,bumpMap:We,normalMap:be,displacementMap:f&&Bt,emissiveMap:$e,normalMapObjectSpace:be&&E.normalMapType===ov,normalMapTangentSpace:be&&E.normalMapType===rm,metalnessMap:R,roughnessMap:T,anisotropy:G,anisotropyMap:ge,clearcoat:se,clearcoatMap:Me,clearcoatNormalMap:Be,clearcoatRoughnessMap:et,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Tt,sheen:re,sheenColorMap:lt,sheenRoughnessMap:Ve,specularMap:Le,specularColorMap:Ee,specularIntensityMap:Ke,transmission:_e,transmissionMap:Mt,thicknessMap:Gt,gradientMap:it,opaque:E.transparent===!1&&E.blending===kr,alphaMap:he,alphaTest:I,alphaHash:pe,combine:E.combine,mapUv:Oe&&x(E.map.channel),aoMapUv:An&&x(E.aoMap.channel),lightMapUv:Ne&&x(E.lightMap.channel),bumpMapUv:We&&x(E.bumpMap.channel),normalMapUv:be&&x(E.normalMap.channel),displacementMapUv:Bt&&x(E.displacementMap.channel),emissiveMapUv:$e&&x(E.emissiveMap.channel),metalnessMapUv:R&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:ge&&x(E.anisotropyMap.channel),clearcoatMapUv:Me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(E.sheenRoughnessMap.channel),specularMapUv:Le&&x(E.specularMap.channel),specularColorMapUv:Ee&&x(E.specularColorMap.channel),specularIntensityMapUv:Ke&&x(E.specularIntensityMap.channel),transmissionMapUv:Mt&&x(E.transmissionMap.channel),thicknessMapUv:Gt&&x(E.thicknessMap.channel),alphaMapUv:he&&x(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(be||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:Fe,vertexUv3s:Ct,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(Oe||he),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===At,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yt,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:me&&E.extensions.derivatives===!0,extensionFragDepth:me&&E.extensions.fragDepth===!0,extensionDrawBuffers:me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)w.push(L),w.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(y(w,E),v(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function y(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function v(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){let w=g[E.type],L;if(w){let z=Ri[w];L=ai.clone(z.uniforms)}else L=E.uniforms;return L}function A(E,w){let L;for(let z=0,Q=c.length;z<Q;z++){let P=c[z];if(P.cacheKey===w){L=P,++L.usedTimes;break}}return L===void 0&&(L=new $1(n,w,E,r),c.push(L)),L}function _(E){if(--E.usedTimes===0){let w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:_,releaseShaderCache:C,programs:c,dispose:N}}function nE(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function iE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||iE),i.length>1&&i.sort(f||wp),s.length>1&&s.sort(f||wp)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function sE(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new bp,n.set(i,[a])):s>=r.length?(a=new bp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ce};break;case"SpotLight":t={position:new S,direction:new S,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function aE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var oE=0;function lE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cE(n,e){let t=new rE,i=aE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new S);let r=new S,a=new Ie,o=new Ie;function l(h,u){let f=0,d=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,M=0,A=0,_=0,C=0,N=0,E=0;h.sort(lE);let w=u===!0?Math.PI:1;for(let z=0,Q=h.length;z<Q;z++){let P=h[z],O=P.color,X=P.intensity,$=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*X*w,d+=O.g*X*w,g+=O.b*X*w;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(P.sh.coefficients[Z],X);E++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){let ie=P.shadow,ae=i.get(P);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,s.directionalShadow[x]=ae,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=P.shadow.matrix,M++}s.directional[x]=Z,x++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(X*w),Z.distance=$,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,s.spot[p]=Z;let ie=P.shadow;if(P.map&&(s.spotLightMap[C]=P.map,C++,ie.updateMatrices(P),P.castShadow&&N++),s.spotLightMatrix[p]=ie.matrix,P.castShadow){let ae=i.get(P);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,s.spotShadow[p]=ae,s.spotShadowMap[p]=J,_++}p++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(O).multiplyScalar(X),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=Z,y++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*w),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let ie=P.shadow,ae=i.get(P);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,s.pointShadow[m]=ae,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=P.shadow.matrix,A++}s.point[m]=Z,m++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(X*w),Z.groundColor.copy(P.groundColor).multiplyScalar(X*w),s.hemi[v]=Z,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let L=s.hash;(L.directionalLength!==x||L.pointLength!==m||L.spotLength!==p||L.rectAreaLength!==y||L.hemiLength!==v||L.numDirectionalShadows!==M||L.numPointShadows!==A||L.numSpotShadows!==_||L.numSpotMaps!==C||L.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=_,s.spotShadowMap.length=_,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=_+C-N,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=E,L.directionalLength=x,L.pointLength=m,L.spotLength=p,L.rectAreaLength=y,L.hemiLength=v,L.numDirectionalShadows=M,L.numPointShadows=A,L.numSpotShadows=_,L.numSpotMaps=C,L.numLightProbes=E,s.version=oE++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let M=h[y];if(M.isDirectionalLight){let A=s.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(M.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let A=s.rectArea[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let A=s.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function _p(n,e){let t=new cE(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hE(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new _p(n,e),t.set(r,[l])):a>=o.length?(l=new _p(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var $s=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},su=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fE=`uniform sampler2D shadow_pass;
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
}`;function dE(n,e,t){let i=new js,s=new j,r=new j,a=new Ft,o=new $s({depthPacking:so}),l=new su,c={},h=t.maxTextureSize,u={[Ii]:ln,[ln]:Ii,[yt]:yt},f=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:uE,fragmentShader:fE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new B(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zp;let p=this.type;this.render=function(_,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;let E=n.getRenderTarget(),w=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ii),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Q=p!==Ji&&this.type===Ji,P=p===Ji&&this.type!==Ji;for(let O=0,X=_.length;O<X;O++){let $=_[O],J=$.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Z=J.getFrameExtents();if(s.multiply(Z),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,J.mapSize.y=r.y)),J.map===null||Q===!0||P===!0){let ae=this.type!==Ji?{minFilter:vt,magFilter:vt}:{};J.map!==null&&J.map.dispose(),J.map=new Rt(s.x,s.y,ae),J.map.texture.name=$.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let ie=J.getViewportCount();for(let ae=0;ae<ie;ae++){let ye=J.getViewport(ae);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),z.viewport(a),J.updateMatrices($,ae),i=J.getFrustum(),M(C,N,J.camera,$,this.type)}J.isPointLightShadow!==!0&&this.type===Ji&&y(J,N),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,w,L)};function y(_,C){let N=e.update(x);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Rt(s.x,s.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(C,null,N,f,x,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(C,null,N,d,x,null)}function v(_,C,N,E){let w=null,L=N.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(L!==void 0)w=L;else if(w=N.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let z=w.uuid,Q=C.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let O=P[Q];O===void 0&&(O=w.clone(),P[Q]=O,C.addEventListener("dispose",A)),w=O}if(w.visible=C.visible,w.wireframe=C.wireframe,E===Ji?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let z=n.properties.get(w);z.light=N}return w}function M(_,C,N,E,w){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&w===Ji)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld);let Q=e.update(_),P=_.material;if(Array.isArray(P)){let O=Q.groups;for(let X=0,$=O.length;X<$;X++){let J=O[X],Z=P[J.materialIndex];if(Z&&Z.visible){let ie=v(_,Z,E,w);_.onBeforeShadow(n,_,C,N,Q,ie,J),n.renderBufferDirect(N,null,Q,ie,_,J),_.onAfterShadow(n,_,C,N,Q,ie,J)}}}else if(P.visible){let O=v(_,P,E,w);_.onBeforeShadow(n,_,C,N,Q,O,null),n.renderBufferDirect(N,null,Q,O,_,null),_.onAfterShadow(n,_,C,N,Q,O,null)}}let z=_.children;for(let Q=0,P=z.length;Q<P;Q++)M(z[Q],C,N,E,w)}function A(_){_.target.removeEventListener("dispose",A);for(let N in c){let E=c[N],w=_.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function pE(n,e,t){let i=t.isWebGL2;function s(){let I=!1,pe=new Ft,me=null,He=new Ft(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!I&&(n.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){I=Fe},setClear:function(Fe,Ct,Pt,nn,Rn){Rn===!0&&(Fe*=nn,Ct*=nn,Pt*=nn),pe.set(Fe,Ct,Pt,nn),He.equals(pe)===!1&&(n.clearColor(Fe,Ct,Pt,nn),He.copy(pe))},reset:function(){I=!1,me=null,He.set(-1,0,0,0)}}}function r(){let I=!1,pe=null,me=null,He=null;return{setTest:function(Fe){Fe?Je(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Fe){pe!==Fe&&!I&&(n.depthMask(Fe),pe=Fe)},setFunc:function(Fe){if(me!==Fe){switch(Fe){case Gg:n.depthFunc(n.NEVER);break;case Vg:n.depthFunc(n.ALWAYS);break;case Wg:n.depthFunc(n.LESS);break;case Sl:n.depthFunc(n.LEQUAL);break;case Xg:n.depthFunc(n.EQUAL);break;case qg:n.depthFunc(n.GEQUAL);break;case Yg:n.depthFunc(n.GREATER);break;case Zg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Fe}},setLocked:function(Fe){I=Fe},setClear:function(Fe){He!==Fe&&(n.clearDepth(Fe),He=Fe)},reset:function(){I=!1,pe=null,me=null,He=null}}}function a(){let I=!1,pe=null,me=null,He=null,Fe=null,Ct=null,Pt=null,nn=null,Rn=null;return{setTest:function(Dt){I||(Dt?Je(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Dt){pe!==Dt&&!I&&(n.stencilMask(Dt),pe=Dt)},setFunc:function(Dt,Cn,Ai){(me!==Dt||He!==Cn||Fe!==Ai)&&(n.stencilFunc(Dt,Cn,Ai),me=Dt,He=Cn,Fe=Ai)},setOp:function(Dt,Cn,Ai){(Ct!==Dt||Pt!==Cn||nn!==Ai)&&(n.stencilOp(Dt,Cn,Ai),Ct=Dt,Pt=Cn,nn=Ai)},setLocked:function(Dt){I=Dt},setClear:function(Dt){Rn!==Dt&&(n.clearStencil(Dt),Rn=Dt)},reset:function(){I=!1,pe=null,me=null,He=null,Fe=null,Ct=null,Pt=null,nn=null,Rn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,A=null,_=null,C=null,N=null,E=new ce(0,0,0),w=0,L=!1,z=null,Q=null,P=null,O=null,X=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Z=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=Z>=1):ie.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=Z>=2);let ae=null,ye={},Y=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ve=new Ft().fromArray(Y),Pe=new Ft().fromArray(ee);function Ce(I,pe,me,He){let Fe=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(I,Ct),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<me;Pt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,He,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(pe+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Ct}let Ye={};Ye[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ye[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ye[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ye[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Je(n.DEPTH_TEST),l.setFunc(Sl),$e(!1),R(od),Je(n.CULL_FACE),be(ii);function Je(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function Oe(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function mt(I,pe){return d[I]!==pe?(n.bindFramebuffer(I,pe),d[I]=pe,i&&(I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=pe),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function H(I,pe){let me=x,He=!1;if(I)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),I.isWebGLMultipleRenderTargets){let Fe=I.texture;if(me.length!==Fe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,Pt=Fe.length;Ct<Pt;Ct++)me[Ct]=n.COLOR_ATTACHMENT0+Ct;me.length=Fe.length,He=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,He=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,He=!0);He&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function An(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let Ne={[Zs]:n.FUNC_ADD,[Ag]:n.FUNC_SUBTRACT,[Rg]:n.FUNC_REVERSE_SUBTRACT};if(i)Ne[hd]=n.MIN,Ne[ud]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ne[hd]=I.MIN_EXT,Ne[ud]=I.MAX_EXT)}let We={[Cg]:n.ZERO,[Pg]:n.ONE,[Dg]:n.SRC_COLOR,[Gh]:n.SRC_ALPHA,[zg]:n.SRC_ALPHA_SATURATE,[Ng]:n.DST_COLOR,[Ig]:n.DST_ALPHA,[Lg]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[Fg]:n.ONE_MINUS_DST_COLOR,[Ug]:n.ONE_MINUS_DST_ALPHA,[Bg]:n.CONSTANT_COLOR,[Og]:n.ONE_MINUS_CONSTANT_COLOR,[Hg]:n.CONSTANT_ALPHA,[kg]:n.ONE_MINUS_CONSTANT_ALPHA};function be(I,pe,me,He,Fe,Ct,Pt,nn,Rn,Dt){if(I===ii){p===!0&&(Oe(n.BLEND),p=!1);return}if(p===!1&&(Je(n.BLEND),p=!0),I!==_g){if(I!==y||Dt!==L){if((v!==Zs||_!==Zs)&&(n.blendEquation(n.FUNC_ADD),v=Zs,_=Zs),Dt)switch(I){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ms:n.blendFunc(n.ONE,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ms:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,A=null,C=null,N=null,E.set(0,0,0),w=0,y=I,L=Dt}return}Fe=Fe||pe,Ct=Ct||me,Pt=Pt||He,(pe!==v||Fe!==_)&&(n.blendEquationSeparate(Ne[pe],Ne[Fe]),v=pe,_=Fe),(me!==M||He!==A||Ct!==C||Pt!==N)&&(n.blendFuncSeparate(We[me],We[He],We[Ct],We[Pt]),M=me,A=He,C=Ct,N=Pt),(nn.equals(E)===!1||Rn!==w)&&(n.blendColor(nn.r,nn.g,nn.b,Rn),E.copy(nn),w=Rn),y=I,L=!1}function Bt(I,pe){I.side===yt?Oe(n.CULL_FACE):Je(n.CULL_FACE);let me=I.side===ln;pe&&(me=!me),$e(me),I.blending===kr&&I.transparent===!1?be(ii):be(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let He=I.stencilWrite;c.setTest(He),He&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),G(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Je(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){z!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),z=I)}function R(I){I!==wg?(Je(n.CULL_FACE),I!==Q&&(I===od?n.cullFace(n.BACK):I===bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),Q=I}function T(I){I!==P&&(J&&n.lineWidth(I),P=I)}function G(I,pe,me){I?(Je(n.POLYGON_OFFSET_FILL),(O!==pe||X!==me)&&(n.polygonOffset(pe,me),O=pe,X=me)):Oe(n.POLYGON_OFFSET_FILL)}function se(I){I?Je(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function ne(I){I===void 0&&(I=n.TEXTURE0+$-1),ae!==I&&(n.activeTexture(I),ae=I)}function re(I,pe,me){me===void 0&&(ae===null?me=n.TEXTURE0+$-1:me=ae);let He=ye[me];He===void 0&&(He={type:void 0,texture:void 0},ye[me]=He),(He.type!==I||He.texture!==pe)&&(ae!==me&&(n.activeTexture(me),ae=me),n.bindTexture(I,pe||Ye[I]),He.type=I,He.texture=pe)}function _e(){let I=ye[ae];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(I){ve.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ve.copy(I))}function Mt(I){Pe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Pe.copy(I))}function Gt(I,pe){let me=u.get(pe);me===void 0&&(me=new WeakMap,u.set(pe,me));let He=me.get(I);He===void 0&&(He=n.getUniformBlockIndex(pe,I.name),me.set(I,He))}function it(I,pe){let He=u.get(pe).get(I);h.get(pe)!==He&&(n.uniformBlockBinding(pe,He,I.__bindingPointIndex),h.set(pe,He))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ae=null,ye={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,A=null,_=null,C=null,N=null,E=new ce(0,0,0),w=0,L=!1,z=null,Q=null,P=null,O=null,X=null,ve.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Je,disable:Oe,bindFramebuffer:mt,drawBuffers:H,useProgram:An,setBlending:be,setMaterial:Bt,setFlipSided:$e,setCullFace:R,setLineWidth:T,setPolygonOffset:G,setScissorTest:se,activeTexture:ne,bindTexture:re,unbindTexture:_e,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:Le,texImage3D:Ee,updateUBOMapping:Gt,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Ve,texSubImage2D:Be,texSubImage3D:et,compressedTexSubImage2D:te,compressedTexSubImage3D:Tt,scissor:Ke,viewport:Mt,reset:he}}function mE(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return d?new OffscreenCanvas(R,T):Oa("canvas")}function x(R,T,G,se){let ne=1;if((R.width>se||R.height>se)&&(ne=se/Math.max(R.width,R.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let re=T?Cl:Math.floor,_e=re(ne*R.width),ge=re(ne*R.height);u===void 0&&(u=g(_e,ge));let Me=G?g(_e,ge):u;return Me.width=_e,Me.height=ge,Me.getContext("2d").drawImage(R,0,0,_e,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+ge+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Qh(R.width)&&Qh(R.height)}function p(R){return o?!1:R.wrapS!==Fn||R.wrapT!==Fn||R.minFilter!==vt&&R.minFilter!==Ht}function y(R,T){return R.generateMipmaps&&T&&R.minFilter!==vt&&R.minFilter!==Ht}function v(R){n.generateMipmap(R)}function M(R,T,G,se,ne=!1){if(o===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=T;if(T===n.RED&&(G===n.FLOAT&&(re=n.R32F),G===n.HALF_FLOAT&&(re=n.R16F),G===n.UNSIGNED_BYTE&&(re=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(re=n.R8UI),G===n.UNSIGNED_SHORT&&(re=n.R16UI),G===n.UNSIGNED_INT&&(re=n.R32UI),G===n.BYTE&&(re=n.R8I),G===n.SHORT&&(re=n.R16I),G===n.INT&&(re=n.R32I)),T===n.RG&&(G===n.FLOAT&&(re=n.RG32F),G===n.HALF_FLOAT&&(re=n.RG16F),G===n.UNSIGNED_BYTE&&(re=n.RG8)),T===n.RGBA){let _e=ne?bl:xt.getTransfer(se);G===n.FLOAT&&(re=n.RGBA32F),G===n.HALF_FLOAT&&(re=n.RGBA16F),G===n.UNSIGNED_BYTE&&(re=_e===At?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(R,T,G){return y(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==vt&&R.minFilter!==Ht?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function _(R){return R===vt||R===fd||R===ah?n.NEAREST:n.LINEAR}function C(R){let T=R.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&h.delete(T)}function N(R){let T=R.target;T.removeEventListener("dispose",N),L(T)}function E(R){let T=i.get(R);if(T.__webglInit===void 0)return;let G=R.source,se=f.get(G);if(se){let ne=se[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(R),Object.keys(se).length===0&&f.delete(G)}i.remove(R)}function w(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let G=R.source,se=f.get(G);delete se[T.__cacheKey],a.memory.textures--}function L(R){let T=R.texture,G=i.get(R),se=i.get(T);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let re=0;re<G.__webglFramebuffer[ne].length;re++)n.deleteFramebuffer(G.__webglFramebuffer[ne][re]);else n.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)n.deleteFramebuffer(G.__webglFramebuffer[ne]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,re=T.length;ne<re;ne++){let _e=i.get(T[ne]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(T[ne])}i.remove(T),i.remove(R)}let z=0;function Q(){z=0}function P(){let R=z;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function O(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function X(R,T){let G=i.get(R);if(R.isVideoTexture&&Bt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,R,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function $(R,T){let G=i.get(R);if(R.version>0&&G.__version!==R.version){ve(G,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function J(R,T){let G=i.get(R);if(R.version>0&&G.__version!==R.version){ve(G,R,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function Z(R,T){let G=i.get(R);if(R.version>0&&G.__version!==R.version){Pe(G,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}let ie={[Yn]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[qh]:n.MIRRORED_REPEAT},ae={[vt]:n.NEAREST,[fd]:n.NEAREST_MIPMAP_NEAREST,[ah]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[jg]:n.LINEAR_MIPMAP_NEAREST,[za]:n.LINEAR_MIPMAP_LINEAR},ye={[lv]:n.NEVER,[pv]:n.ALWAYS,[cv]:n.LESS,[am]:n.LEQUAL,[hv]:n.EQUAL,[dv]:n.GEQUAL,[uv]:n.GREATER,[fv]:n.NOTEQUAL};function Y(R,T,G){if(G?(n.texParameteri(R,n.TEXTURE_WRAP_S,ie[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ie[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ie[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ae[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ae[T.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==Fn||T.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_(T.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_(T.minFilter)),T.minFilter!==vt&&T.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ye[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let se=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===vt||T.minFilter!==ah&&T.minFilter!==za||T.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Zt&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ee(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C));let se=T.source,ne=f.get(se);ne===void 0&&(ne={},f.set(se,ne));let re=O(T);if(re!==R.__cacheKey){ne[re]===void 0&&(ne[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[re].usedTimes++;let _e=ne[R.__cacheKey];_e!==void 0&&(ne[R.__cacheKey].usedTimes--,_e.usedTimes===0&&w(T)),R.__cacheKey=re,R.__webglTexture=ne[re].texture}return G}function ve(R,T,G){let se=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=n.TEXTURE_3D);let ne=ee(R,T),re=T.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+G);let _e=i.get(re);if(re.version!==_e.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);let ge=xt.getPrimaries(xt.workingColorSpace),Me=T.colorSpace===zn?null:xt.getPrimaries(T.colorSpace),Be=T.colorSpace===zn||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let et=p(T)&&m(T.image)===!1,te=x(T.image,et,!1,s.maxTextureSize);te=$e(T,te);let Tt=m(te)||o,lt=r.convert(T.format,T.colorSpace),Ve=r.convert(T.type),Le=M(T.internalFormat,lt,Ve,T.colorSpace,T.isVideoTexture);Y(se,T,Tt);let Ee,Ke=T.mipmaps,Mt=o&&T.isVideoTexture!==!0&&Le!==im,Gt=_e.__version===void 0||ne===!0,it=A(T,te,Tt);if(T.isDepthTexture)Le=n.DEPTH_COMPONENT,o?T.type===Pi?Le=n.DEPTH_COMPONENT32F:T.type===ni?Le=n.DEPTH_COMPONENT24:T.type===ji?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:T.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Di&&Le===n.DEPTH_COMPONENT&&T.type!==Fu&&T.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ni,Ve=r.convert(T.type)),T.format===Es&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,T.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ji,Ve=r.convert(T.type))),Gt&&(Mt?t.texStorage2D(n.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Le,te.width,te.height,0,lt,Ve,null));else if(T.isDataTexture)if(Ke.length>0&&Tt){Mt&&Gt&&t.texStorage2D(n.TEXTURE_2D,it,Le,Ke[0].width,Ke[0].height);for(let he=0,I=Ke.length;he<I;he++)Ee=Ke[he],Mt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ee.width,Ee.height,lt,Ve,Ee.data):t.texImage2D(n.TEXTURE_2D,he,Le,Ee.width,Ee.height,0,lt,Ve,Ee.data);T.generateMipmaps=!1}else Mt?(Gt&&t.texStorage2D(n.TEXTURE_2D,it,Le,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,lt,Ve,te.data)):t.texImage2D(n.TEXTURE_2D,0,Le,te.width,te.height,0,lt,Ve,te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Mt&&Gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,Le,Ke[0].width,Ke[0].height,te.depth);for(let he=0,I=Ke.length;he<I;he++)Ee=Ke[he],T.format!==on?lt!==null?Mt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,te.depth,lt,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Le,Ee.width,Ee.height,te.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,te.depth,lt,Ve,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Le,Ee.width,Ee.height,te.depth,0,lt,Ve,Ee.data)}else{Mt&&Gt&&t.texStorage2D(n.TEXTURE_2D,it,Le,Ke[0].width,Ke[0].height);for(let he=0,I=Ke.length;he<I;he++)Ee=Ke[he],T.format!==on?lt!==null?Mt?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ee.width,Ee.height,lt,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ee.width,Ee.height,lt,Ve,Ee.data):t.texImage2D(n.TEXTURE_2D,he,Le,Ee.width,Ee.height,0,lt,Ve,Ee.data)}else if(T.isDataArrayTexture)Mt?(Gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,Le,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,lt,Ve,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,lt,Ve,te.data);else if(T.isData3DTexture)Mt?(Gt&&t.texStorage3D(n.TEXTURE_3D,it,Le,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,lt,Ve,te.data)):t.texImage3D(n.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,lt,Ve,te.data);else if(T.isFramebufferTexture){if(Gt)if(Mt)t.texStorage2D(n.TEXTURE_2D,it,Le,te.width,te.height);else{let he=te.width,I=te.height;for(let pe=0;pe<it;pe++)t.texImage2D(n.TEXTURE_2D,pe,Le,he,I,0,lt,Ve,null),he>>=1,I>>=1}}else if(Ke.length>0&&Tt){Mt&&Gt&&t.texStorage2D(n.TEXTURE_2D,it,Le,Ke[0].width,Ke[0].height);for(let he=0,I=Ke.length;he<I;he++)Ee=Ke[he],Mt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,lt,Ve,Ee):t.texImage2D(n.TEXTURE_2D,he,Le,lt,Ve,Ee);T.generateMipmaps=!1}else Mt?(Gt&&t.texStorage2D(n.TEXTURE_2D,it,Le,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Ve,te)):t.texImage2D(n.TEXTURE_2D,0,Le,lt,Ve,te);y(T,Tt)&&v(se),_e.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Pe(R,T,G){if(T.image.length!==6)return;let se=ee(R,T),ne=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let re=i.get(ne);if(ne.version!==re.__version||se===!0){t.activeTexture(n.TEXTURE0+G);let _e=xt.getPrimaries(xt.workingColorSpace),ge=T.colorSpace===zn?null:xt.getPrimaries(T.colorSpace),Me=T.colorSpace===zn||_e===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Be=T.isCompressedTexture||T.image[0].isCompressedTexture,et=T.image[0]&&T.image[0].isDataTexture,te=[];for(let he=0;he<6;he++)!Be&&!et?te[he]=x(T.image[he],!1,!0,s.maxCubemapSize):te[he]=et?T.image[he].image:T.image[he],te[he]=$e(T,te[he]);let Tt=te[0],lt=m(Tt)||o,Ve=r.convert(T.format,T.colorSpace),Le=r.convert(T.type),Ee=M(T.internalFormat,Ve,Le,T.colorSpace),Ke=o&&T.isVideoTexture!==!0,Mt=re.__version===void 0||se===!0,Gt=A(T,Tt,lt);Y(n.TEXTURE_CUBE_MAP,T,lt);let it;if(Be){Ke&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Gt,Ee,Tt.width,Tt.height);for(let he=0;he<6;he++){it=te[he].mipmaps;for(let I=0;I<it.length;I++){let pe=it[I];T.format!==on?Ve!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,0,0,pe.width,pe.height,Ve,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,0,0,pe.width,pe.height,Ve,Le,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,Ee,pe.width,pe.height,0,Ve,Le,pe.data)}}}else{it=T.mipmaps,Ke&&Mt&&(it.length>0&&Gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Gt,Ee,te[0].width,te[0].height));for(let he=0;he<6;he++)if(et){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,te[he].width,te[he].height,Ve,Le,te[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ee,te[he].width,te[he].height,0,Ve,Le,te[he].data);for(let I=0;I<it.length;I++){let me=it[I].image[he].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,0,0,me.width,me.height,Ve,Le,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,Ee,me.width,me.height,0,Ve,Le,me.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ve,Le,te[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ee,Ve,Le,te[he]);for(let I=0;I<it.length;I++){let pe=it[I];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,0,0,Ve,Le,pe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,Ee,Ve,Le,pe.image[he])}}}y(T,lt)&&v(n.TEXTURE_CUBE_MAP),re.__version=ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ce(R,T,G,se,ne,re){let _e=r.convert(G.format,G.colorSpace),ge=r.convert(G.type),Me=M(G.internalFormat,_e,ge,G.colorSpace);if(!i.get(T).__hasExternalTextures){let et=Math.max(1,T.width>>re),te=Math.max(1,T.height>>re);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,Me,et,te,T.depth,0,_e,ge,null):t.texImage2D(ne,re,Me,et,te,0,_e,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),be(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,0,We(T)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(R,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let se=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||be(T)){let ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Pi?se=n.DEPTH_COMPONENT32F:ne.type===ni&&(se=n.DEPTH_COMPONENT24));let re=We(T);be(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,se,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,se,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){let se=We(T);G&&be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,T.width,T.height):be(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let se=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<se.length;ne++){let re=se[ne],_e=r.convert(re.format,re.colorSpace),ge=r.convert(re.type),Me=M(re.internalFormat,_e,ge,re.colorSpace),Be=We(T);G&&be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Me,T.width,T.height):be(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Me,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);let se=i.get(T.depthTexture).__webglTexture,ne=We(T);if(T.depthTexture.format===Di)be(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(T.depthTexture.format===Es)be(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Oe(R){let T=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Je(T.__webglFramebuffer,R)}else if(G){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]=n.createRenderbuffer(),Ye(T.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Ye(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(R,T,G){let se=i.get(R);T!==void 0&&Ce(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Oe(R)}function H(R){let T=R.texture,G=i.get(R),se=i.get(T);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=T.version,a.memory.textures++);let ne=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,_e=m(R)||o;if(ne){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Me=0;Me<T.mipmaps.length;Me++)G.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else G.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)G.__webglFramebuffer[ge]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(re)if(s.drawBuffers){let ge=R.texture;for(let Me=0,Be=ge.length;Me<Be;Me++){let et=i.get(ge[Me]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&be(R)===!1){let ge=re?T:[T];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){let Be=ge[Me];G.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Me]);let et=r.convert(Be.format,Be.colorSpace),te=r.convert(Be.type),Tt=M(Be.internalFormat,et,te,Be.colorSpace,R.isXRRenderTarget===!0),lt=We(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,Tt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,G.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Y(n.TEXTURE_CUBE_MAP,T,_e);for(let ge=0;ge<6;ge++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)Ce(G.__webglFramebuffer[ge][Me],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else Ce(G.__webglFramebuffer[ge],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(T,_e)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let ge=R.texture;for(let Me=0,Be=ge.length;Me<Be;Me++){let et=ge[Me],te=i.get(et);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Y(n.TEXTURE_2D,et,_e),Ce(G.__webglFramebuffer,R,et,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),y(et,_e)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ge=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,se.__webglTexture),Y(ge,T,_e),o&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)Ce(G.__webglFramebuffer[Me],R,T,n.COLOR_ATTACHMENT0,ge,Me);else Ce(G.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,ge,0);y(T,_e)&&v(ge),t.unbindTexture()}R.depthBuffer&&Oe(R)}function An(R){let T=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ne=G.length;se<ne;se++){let re=G[se];if(y(re,T)){let _e=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(re).__webglTexture;t.bindTexture(_e,ge),v(_e),t.unbindTexture()}}}function Ne(R){if(o&&R.samples>0&&be(R)===!1){let T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,se=R.height,ne=n.COLOR_BUFFER_BIT,re=[],_e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(R),Me=R.isWebGLMultipleRenderTargets===!0;if(Me)for(let Be=0;Be<T.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){re.push(n.COLOR_ATTACHMENT0+Be),R.depthBuffer&&re.push(_e);let et=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(et===!1&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Be]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),Me){let te=i.get(T[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,G,se,0,0,G,se,ne,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Be=0;Be<T.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Be]);let et=i.get(T[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function We(R){return Math.min(s.maxSamples,R.samples)}function be(R){let T=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(R){let T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function $e(R,T){let G=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zh||G!==$i&&G!==zn&&(xt.getTransfer(G)===At?o===!1?e.has("EXT_sRGB")===!0&&se===on?(R.format=Zh,R.minFilter=Ht,R.generateMipmaps=!1):T=Pl.sRGBToLinear(T):(se!==on||ne!==ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=mt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=An,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=be}function gE(n,e,t){let i=t.isWebGL2;function s(r,a=zn){let o,l=xt.getTransfer(a);if(r===ys)return n.UNSIGNED_BYTE;if(r===jp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return n.UNSIGNED_SHORT_5_5_5_1;if(r===$g)return n.BYTE;if(r===ev)return n.SHORT;if(r===Fu)return n.UNSIGNED_SHORT;if(r===Kp)return n.INT;if(r===ni)return n.UNSIGNED_INT;if(r===Pi)return n.FLOAT;if(r===Zt)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===tv)return n.ALPHA;if(r===on)return n.RGBA;if(r===nv)return n.LUMINANCE;if(r===iv)return n.LUMINANCE_ALPHA;if(r===Di)return n.DEPTH_COMPONENT;if(r===Es)return n.DEPTH_STENCIL;if(r===Zh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zu)return n.RED;if(r===em)return n.RED_INTEGER;if(r===sv)return n.RG;if(r===tm)return n.RG_INTEGER;if(r===nm)return n.RGBA_INTEGER;if(r===oh||r===lh||r===ch||r===hh)if(l===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===oh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ch)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===oh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ch)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dd||r===pd||r===md||r===gd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===dd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===md)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===im)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vd||r===xd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===vd)return l===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===xd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yd||r===Md||r===Ed||r===Sd||r===Td||r===wd||r===bd||r===_d||r===Ad||r===Rd||r===Cd||r===Pd||r===Dd||r===Ld)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===yd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Md)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Td)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_d)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uh||r===Id||r===Ud)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===uh)return l===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Id)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rv||r===Nd||r===Fd||r===zd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===uh)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Nd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ru=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Re=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vE={type:"move"},Ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},au=class extends Ss{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=t.getContextAttributes(),m=null,p=null,y=[],v=[],M=new j,A=null,_=new Sn;_.layers.enable(1),_.viewport=new Ft;let C=new Sn;C.layers.enable(2),C.viewport=new Ft;let N=[_,C],E=new ru;E.layers.enable(1),E.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=y[Y];return ee===void 0&&(ee=new Ia,y[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=y[Y];return ee===void 0&&(ee=new Ia,y[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=y[Y];return ee===void 0&&(ee=new Ia,y[Y]=ee),ee.getHandSpace()};function z(Y){let ee=v.indexOf(Y.inputSource);if(ee===-1)return;let ve=y[ee];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",P);for(let Y=0;Y<y.length;Y++){let ee=v[Y];ee!==null&&(v[Y]=null,y[Y].disconnect(ee))}w=null,L=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Rt(d.framebufferWidth,d.framebufferHeight,{format:on,type:ys,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,ve=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?Es:Di,ve=x.stencil?ji:ni);let Ce={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Rt(f.textureWidth,f.textureHeight,{format:on,type:ys,depthTexture:new bs(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ye=e.properties.get(p);Ye.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(Y){for(let ee=0;ee<Y.removed.length;ee++){let ve=Y.removed[ee],Pe=v.indexOf(ve);Pe>=0&&(v[Pe]=null,y[Pe].disconnect(ve))}for(let ee=0;ee<Y.added.length;ee++){let ve=Y.added[ee],Pe=v.indexOf(ve);if(Pe===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=v.length){v.push(ve),Pe=Ye;break}else if(v[Ye]===null){v[Ye]=ve,Pe=Ye;break}if(Pe===-1)break}let Ce=y[Pe];Ce&&Ce.connect(ve)}}let O=new S,X=new S;function $(Y,ee,ve){O.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);let Pe=O.distanceTo(X),Ce=ee.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Je=Ce[14]/(Ce[10]-1),Oe=Ce[14]/(Ce[10]+1),mt=(Ce[9]+1)/Ce[5],H=(Ce[9]-1)/Ce[5],An=(Ce[8]-1)/Ce[0],Ne=(Ye[8]+1)/Ye[0],We=Je*An,be=Je*Ne,Bt=Pe/(-An+Ne),$e=Bt*-An;ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let R=Je+Bt,T=Oe+Bt,G=We-$e,se=be+(Pe-$e),ne=mt*Oe/T*R,re=H*Oe/T*R;Y.projectionMatrix.makePerspective(G,se,ne,re,R,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;E.near=C.near=_.near=Y.near,E.far=C.far=_.far=Y.far,(w!==E.near||L!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,L=E.far);let ee=Y.parent,ve=E.cameras;J(E,ee);for(let Pe=0;Pe<ve.length;Pe++)J(ve[Pe],ee);ve.length===2?$(E,_,C):E.projectionMatrix.copy(_.projectionMatrix),Z(Y,E,ee)};function Z(Y,ee,ve){ve===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ba*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)};let ie=null;function ae(Y,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Pe=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,Pe=!0);for(let Ce=0;Ce<ve.length;Ce++){let Ye=ve[Ce],Je=null;if(d!==null)Je=d.getViewport(Ye);else{let mt=u.getViewSubImage(f,Ye);Je=mt.viewport,Ce===0&&(e.setRenderTargetTextures(p,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(p))}let Oe=N[Ce];Oe===void 0&&(Oe=new Sn,Oe.layers.enable(Ce),Oe.viewport=new Ft,N[Ce]=Oe),Oe.matrix.fromArray(Ye.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ye.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Je.x,Je.y,Je.width,Je.height),Ce===0&&(E.matrix.copy(Oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Pe===!0&&E.cameras.push(Oe)}}for(let ve=0;ve<y.length;ve++){let Pe=v[ve],Ce=y[ve];Pe!==null&&Ce!==void 0&&Ce.update(Pe,ee,c||a)}ie&&ie(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let ye=new hm;ye.setAnimationLoop(ae),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}};function xE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yE(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let M=v.program;i.uniformBlockBinding(y,M)}function c(y,v){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(y,A);let _=e.render.frame;r[y.id]!==_&&(f(y),r[y.id]=_)}function h(y){let v=u();y.__bindingPointIndex=v;let M=n.createBuffer(),A=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let _=0,C=M.length;_<C;_++){let N=Array.isArray(M[_])?M[_]:[M[_]];for(let E=0,w=N.length;E<w;E++){let L=N[E];if(d(L,_,E,A)===!0){let z=L.__offset,Q=Array.isArray(L.value)?L.value:[L.value],P=0;for(let O=0;O<Q.length;O++){let X=Q[O],$=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+P,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,M,A){let _=y.value,C=v+"_"+M;if(A[C]===void 0)return typeof _=="number"||typeof _=="boolean"?A[C]=_:A[C]=_.clone(),!0;{let N=A[C];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return A[C]=_,!0}else if(N.equals(_)===!1)return N.copy(_),!0}return!1}function g(y){let v=y.uniforms,M=0,A=16;for(let C=0,N=v.length;C<N;C++){let E=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,L=E.length;w<L;w++){let z=E[w],Q=Array.isArray(z.value)?z.value:[z.value];for(let P=0,O=Q.length;P<O;P++){let X=Q[P],$=x(X),J=M%A;J!==0&&A-J<$.boundary&&(M+=A-J),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=$.storage}}}let _=M%A;return _>0&&(M+=A-_),y.__size=M,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Va=class{constructor(e={}){let{canvas:t=Cv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=xs,this.toneMappingExposure=1;let v=this,M=!1,A=0,_=0,C=null,N=-1,E=null,w=new Ft,L=new Ft,z=null,Q=new ce(0),P=0,O=t.width,X=t.height,$=1,J=null,Z=null,ie=new Ft(0,0,O,X),ae=new Ft(0,0,O,X),ye=!1,Y=new js,ee=!1,ve=!1,Pe=null,Ce=new Ie,Ye=new j,Je=new S,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return C===null?$:1}let H=i;function An(b,F){for(let V=0;V<b.length;V++){let W=b[V],k=t.getContext(W,F);if(k!==null)return k}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",pe,!1),H===null){let F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),H=An(F,b),H===null)throw An(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,We,be,Bt,$e,R,T,G,se,ne,re,_e,ge,Me,Be,et,te,Tt,lt,Ve,Le,Ee,Ke,Mt;function Gt(){Ne=new BM(H),We=new LM(H,Ne,e),Ne.init(We),Ee=new gE(H,Ne,We),be=new pE(H,Ne,We),Bt=new kM(H),$e=new nE,R=new mE(H,Ne,be,$e,We,Ee,Bt),T=new UM(v),G=new zM(v),se=new Qv(H,We),Ke=new PM(H,Ne,se,We),ne=new OM(H,se,Bt,Ke),re=new XM(H,ne,se,Bt),lt=new WM(H,We,R),et=new IM($e),_e=new tE(v,T,G,Ne,We,Ke,et),ge=new xE(v,$e),Me=new sE,Be=new hE(Ne,We),Tt=new CM(v,T,G,be,re,f,l),te=new dE(v,re,We),Mt=new yE(H,Bt,We,be),Ve=new DM(H,Ne,Bt,We),Le=new HM(H,Ne,Bt,We),Bt.programs=_e.programs,v.capabilities=We,v.extensions=Ne,v.properties=$e,v.renderLists=Me,v.shadowMap=te,v.state=be,v.info=Bt}Gt();let it=new au(v,H);this.xr=it,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(O,X,!1))},this.getSize=function(b){return b.set(O,X)},this.setSize=function(b,F,V=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,X=F,t.width=Math.floor(b*$),t.height=Math.floor(F*$),V===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(O*$,X*$).floor()},this.setDrawingBufferSize=function(b,F,V){O=b,X=F,$=V,t.width=Math.floor(b*V),t.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,F,V,W){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,F,V,W),be.viewport(w.copy(ie).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,F,V,W){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,F,V,W),be.scissor(L.copy(ae).multiplyScalar($).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){be.setScissorTest(ye=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(b=!0,F=!0,V=!0){let W=0;if(b){let k=!1;if(C!==null){let xe=C.texture.format;k=xe===nm||xe===tm||xe===em}if(k){let xe=C.texture.type,Ae=xe===ys||xe===ni||xe===Fu||xe===ji||xe===jp||xe===$p,ze=Tt.getClearColor(),ke=Tt.getClearAlpha(),tt=ze.r,Xe=ze.g,Ze=ze.b;Ae?(d[0]=tt,d[1]=Xe,d[2]=Ze,d[3]=ke,H.clearBufferuiv(H.COLOR,0,d)):(g[0]=tt,g[1]=Xe,g[2]=Ze,g[3]=ke,H.clearBufferiv(H.COLOR,0,g))}else W|=H.COLOR_BUFFER_BIT}F&&(W|=H.DEPTH_BUFFER_BIT),V&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Me.dispose(),Be.dispose(),$e.dispose(),T.dispose(),G.dispose(),re.dispose(),Ke.dispose(),Mt.dispose(),_e.dispose(),it.dispose(),it.removeEventListener("sessionstart",Rn),it.removeEventListener("sessionend",Dt),Pe&&(Pe.dispose(),Pe=null),Cn.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let b=Bt.autoReset,F=te.enabled,V=te.autoUpdate,W=te.needsUpdate,k=te.type;Gt(),Bt.autoReset=b,te.enabled=F,te.autoUpdate=V,te.needsUpdate=W,te.type=k}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){let F=b.target;F.removeEventListener("dispose",me),He(F)}function He(b){Fe(b),$e.remove(b)}function Fe(b){let F=$e.get(b).programs;F!==void 0&&(F.forEach(function(V){_e.releaseProgram(V)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,W,k,xe){F===null&&(F=Oe);let Ae=k.isMesh&&k.matrixWorld.determinant()<0,ze=Mg(b,F,V,W,k);be.setMaterial(W,Ae);let ke=V.index,tt=1;if(W.wireframe===!0){if(ke=ne.getWireframeAttribute(V),ke===void 0)return;tt=2}let Xe=V.drawRange,Ze=V.attributes.position,Wt=Xe.start*tt,Wn=(Xe.start+Xe.count)*tt;xe!==null&&(Wt=Math.max(Wt,xe.start*tt),Wn=Math.min(Wn,(xe.start+xe.count)*tt)),ke!==null?(Wt=Math.max(Wt,0),Wn=Math.min(Wn,ke.count)):Ze!=null&&(Wt=Math.max(Wt,0),Wn=Math.min(Wn,Ze.count));let sn=Wn-Wt;if(sn<0||sn===1/0)return;Ke.setup(k,W,ze,V,ke);let Wi,Ot=Ve;if(ke!==null&&(Wi=se.get(ke),Ot=Le,Ot.setIndex(Wi)),k.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*mt()),Ot.setMode(H.LINES)):Ot.setMode(H.TRIANGLES);else if(k.isLine){let st=W.linewidth;st===void 0&&(st=1),be.setLineWidth(st*mt()),k.isLineSegments?Ot.setMode(H.LINES):k.isLineLoop?Ot.setMode(H.LINE_LOOP):Ot.setMode(H.LINE_STRIP)}else k.isPoints?Ot.setMode(H.POINTS):k.isSprite&&Ot.setMode(H.TRIANGLES);if(k.isBatchedMesh)Ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ot.renderInstances(Wt,sn,k.count);else if(V.isInstancedBufferGeometry){let st=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,nh=Math.min(V.instanceCount,st);Ot.renderInstances(Wt,sn,nh)}else Ot.render(Wt,sn)};function Ct(b,F,V){b.transparent===!0&&b.side===yt&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,Go(b,F,V),b.side=Ii,b.needsUpdate=!0,Go(b,F,V),b.side=yt):Go(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),m=Be.get(V),m.init(),y.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),b!==V&&b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);let W=new Set;return b.traverse(function(k){let xe=k.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let ze=xe[Ae];Ct(ze,V,k),W.add(ze)}else Ct(xe,V,k),W.add(xe)}),y.pop(),m=null,W},this.compileAsync=function(b,F,V=null){let W=this.compile(b,F,V);return new Promise(k=>{function xe(){if(W.forEach(function(Ae){$e.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){k(b);return}setTimeout(xe,10)}Ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Pt=null;function nn(b){Pt&&Pt(b)}function Rn(){Cn.stop()}function Dt(){Cn.start()}let Cn=new hm;Cn.setAnimationLoop(nn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(b){Pt=b,it.setAnimationLoop(b),b===null?Cn.stop():Cn.start()},it.addEventListener("sessionstart",Rn),it.addEventListener("sessionend",Dt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,C),m=Be.get(b,y.length),m.init(),y.push(m),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,ee=et.init(this.clippingPlanes,ve),x=Me.get(b,p.length),x.init(),p.push(x),Ai(b,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(J,Z),this.info.render.frame++,ee===!0&&et.beginShadows();let V=m.state.shadowsArray;if(te.render(V,b,F),ee===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(x,b),m.setupLights(v._useLegacyLights),F.isArrayCamera){let W=F.cameras;for(let k=0,xe=W.length;k<xe;k++){let Ae=W[k];td(x,b,Ae,Ae.viewport)}}else td(x,b,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,F),Ke.resetDefaultState(),N=-1,E=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ai(b,F,V,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){W&&Je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);let Ae=re.update(b),ze=b.material;ze.visible&&x.push(b,Ae,ze,V,Je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let Ae=re.update(b),ze=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Je.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Je.copy(Ae.boundingSphere.center)),Je.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(ze)){let ke=Ae.groups;for(let tt=0,Xe=ke.length;tt<Xe;tt++){let Ze=ke[tt],Wt=ze[Ze.materialIndex];Wt&&Wt.visible&&x.push(b,Ae,Wt,V,Je.z,Ze)}}else ze.visible&&x.push(b,Ae,ze,V,Je.z,null)}}let xe=b.children;for(let Ae=0,ze=xe.length;Ae<ze;Ae++)Ai(xe[Ae],F,V,W)}function td(b,F,V,W){let k=b.opaque,xe=b.transmissive,Ae=b.transparent;m.setupLightsView(V),ee===!0&&et.setGlobalState(v.clippingPlanes,V),xe.length>0&&yg(k,xe,F,V),W&&be.viewport(w.copy(W)),k.length>0&&ko(k,F,V),xe.length>0&&ko(xe,F,V),Ae.length>0&&ko(Ae,F,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function yg(b,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let xe=We.isWebGL2;Pe===null&&(Pe=new Rt(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Zt:ys,minFilter:za,samples:xe?4:0})),v.getDrawingBufferSize(Ye),xe?Pe.setSize(Ye.x,Ye.y):Pe.setSize(Cl(Ye.x),Cl(Ye.y));let Ae=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(Q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let ze=v.toneMapping;v.toneMapping=xs,ko(b,V,W),R.updateMultisampleRenderTarget(Pe),R.updateRenderTargetMipmap(Pe);let ke=!1;for(let tt=0,Xe=F.length;tt<Xe;tt++){let Ze=F[tt],Wt=Ze.object,Wn=Ze.geometry,sn=Ze.material,Wi=Ze.group;if(sn.side===yt&&Wt.layers.test(W.layers)){let Ot=sn.side;sn.side=ln,sn.needsUpdate=!0,nd(Wt,V,W,Wn,sn,Wi),sn.side=Ot,sn.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(Pe),R.updateRenderTargetMipmap(Pe)),v.setRenderTarget(Ae),v.setClearColor(Q,P),v.toneMapping=ze}function ko(b,F,V){let W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,xe=b.length;k<xe;k++){let Ae=b[k],ze=Ae.object,ke=Ae.geometry,tt=W===null?Ae.material:W,Xe=Ae.group;ze.layers.test(V.layers)&&nd(ze,F,V,ke,tt,Xe)}}function nd(b,F,V,W,k,xe){b.onBeforeRender(v,F,V,W,k,xe),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(v,F,V,W,b,xe),k.transparent===!0&&k.side===yt&&k.forceSinglePass===!1?(k.side=ln,k.needsUpdate=!0,v.renderBufferDirect(V,F,W,k,b,xe),k.side=Ii,k.needsUpdate=!0,v.renderBufferDirect(V,F,W,k,b,xe),k.side=yt):v.renderBufferDirect(V,F,W,k,b,xe),b.onAfterRender(v,F,V,W,k,xe)}function Go(b,F,V){F.isScene!==!0&&(F=Oe);let W=$e.get(b),k=m.state.lights,xe=m.state.shadowsArray,Ae=k.state.version,ze=_e.getParameters(b,k.state,xe,F,V),ke=_e.getProgramCacheKey(ze),tt=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?G:T).get(b.envMap||W.environment),tt===void 0&&(b.addEventListener("dispose",me),tt=new Map,W.programs=tt);let Xe=tt.get(ke);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===Ae)return sd(b,ze),Xe}else ze.uniforms=_e.getUniforms(b),b.onBuild(V,ze,v),b.onBeforeCompile(ze,v),Xe=_e.acquireProgram(ze,ke),tt.set(ke,Xe),W.uniforms=ze.uniforms;let Ze=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=et.uniform),sd(b,ze),W.needsLights=Sg(b),W.lightsStateVersion=Ae,W.needsLights&&(Ze.ambientLightColor.value=k.state.ambient,Ze.lightProbe.value=k.state.probe,Ze.directionalLights.value=k.state.directional,Ze.directionalLightShadows.value=k.state.directionalShadow,Ze.spotLights.value=k.state.spot,Ze.spotLightShadows.value=k.state.spotShadow,Ze.rectAreaLights.value=k.state.rectArea,Ze.ltc_1.value=k.state.rectAreaLTC1,Ze.ltc_2.value=k.state.rectAreaLTC2,Ze.pointLights.value=k.state.point,Ze.pointLightShadows.value=k.state.pointShadow,Ze.hemisphereLights.value=k.state.hemi,Ze.directionalShadowMap.value=k.state.directionalShadowMap,Ze.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ze.spotShadowMap.value=k.state.spotShadowMap,Ze.spotLightMatrix.value=k.state.spotLightMatrix,Ze.spotLightMap.value=k.state.spotLightMap,Ze.pointShadowMap.value=k.state.pointShadowMap,Ze.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function id(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Vr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function sd(b,F){let V=$e.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Mg(b,F,V,W,k){F.isScene!==!0&&(F=Oe),R.resetTextureUnits();let xe=F.fog,Ae=W.isMeshStandardMaterial?F.environment:null,ze=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$i,ke=(W.isMeshStandardMaterial?G:T).get(W.envMap||Ae),tt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ze=!!V.morphAttributes.position,Wt=!!V.morphAttributes.normal,Wn=!!V.morphAttributes.color,sn=xs;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(sn=v.toneMapping);let Wi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ot=Wi!==void 0?Wi.length:0,st=$e.get(W),nh=m.state.lights;if(ee===!0&&(ve===!0||b!==E)){let ei=b===E&&W.id===N;et.setState(W,b,ei)}let Vt=!1;W.version===st.__version?(st.needsLights&&st.lightsStateVersion!==nh.state.version||st.outputColorSpace!==ze||k.isBatchedMesh&&st.batching===!1||!k.isBatchedMesh&&st.batching===!0||k.isInstancedMesh&&st.instancing===!1||!k.isInstancedMesh&&st.instancing===!0||k.isSkinnedMesh&&st.skinning===!1||!k.isSkinnedMesh&&st.skinning===!0||k.isInstancedMesh&&st.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&st.instancingColor===!1&&k.instanceColor!==null||st.envMap!==ke||W.fog===!0&&st.fog!==xe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==et.numPlanes||st.numIntersection!==et.numIntersection)||st.vertexAlphas!==tt||st.vertexTangents!==Xe||st.morphTargets!==Ze||st.morphNormals!==Wt||st.morphColors!==Wn||st.toneMapping!==sn||We.isWebGL2===!0&&st.morphTargetsCount!==Ot)&&(Vt=!0):(Vt=!0,st.__version=W.version);let ks=st.currentProgram;Vt===!0&&(ks=Go(W,F,k));let rd=!1,ya=!1,ih=!1,yn=ks.getUniforms(),Gs=st.uniforms;if(be.useProgram(ks.program)&&(rd=!0,ya=!0,ih=!0),W.id!==N&&(N=W.id,ya=!0),rd||E!==b){yn.setValue(H,"projectionMatrix",b.projectionMatrix),yn.setValue(H,"viewMatrix",b.matrixWorldInverse);let ei=yn.map.cameraPosition;ei!==void 0&&ei.setValue(H,Je.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&yn.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yn.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ya=!0,ih=!0)}if(k.isSkinnedMesh){yn.setOptional(H,k,"bindMatrix"),yn.setOptional(H,k,"bindMatrixInverse");let ei=k.skeleton;ei&&(We.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),yn.setValue(H,"boneTexture",ei.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(yn.setOptional(H,k,"batchingTexture"),yn.setValue(H,"batchingTexture",k._matricesTexture,R));let sh=V.morphAttributes;if((sh.position!==void 0||sh.normal!==void 0||sh.color!==void 0&&We.isWebGL2===!0)&&lt.update(k,V,ks),(ya||st.receiveShadow!==k.receiveShadow)&&(st.receiveShadow=k.receiveShadow,yn.setValue(H,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gs.envMap.value=ke,Gs.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ya&&(yn.setValue(H,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&Eg(Gs,ih),xe&&W.fog===!0&&ge.refreshFogUniforms(Gs,xe),ge.refreshMaterialUniforms(Gs,W,$,X,Pe),Vr.upload(H,id(st),Gs,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vr.upload(H,id(st),Gs,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yn.setValue(H,"center",k.center),yn.setValue(H,"modelViewMatrix",k.modelViewMatrix),yn.setValue(H,"normalMatrix",k.normalMatrix),yn.setValue(H,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ei=W.uniformsGroups;for(let rh=0,Tg=ei.length;rh<Tg;rh++)if(We.isWebGL2){let ad=ei[rh];Mt.update(ad,ks),Mt.bind(ad,ks)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ks}function Eg(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Sg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,V){$e.get(b.texture).__webglTexture=F,$e.get(b.depthTexture).__webglTexture=V;let W=$e.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){let V=$e.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){C=b,A=F,_=V;let W=!0,k=null,xe=!1,Ae=!1;if(b){let ke=$e.get(b);ke.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(H.FRAMEBUFFER,null),W=!1):ke.__webglFramebuffer===void 0?R.setupRenderTarget(b):ke.__hasExternalTextures&&R.rebindTextures(b,$e.get(b.texture).__webglTexture,$e.get(b.depthTexture).__webglTexture);let tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ae=!0);let Xe=$e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?k=Xe[F][V]:k=Xe[F],xe=!0):We.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?k=$e.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?k=Xe[V]:k=Xe,w.copy(b.viewport),L.copy(b.scissor),z=b.scissorTest}else w.copy(ie).multiplyScalar($).floor(),L.copy(ae).multiplyScalar($).floor(),z=ye;if(be.bindFramebuffer(H.FRAMEBUFFER,k)&&We.drawBuffers&&W&&be.drawBuffers(b,k),be.viewport(w),be.scissor(L),be.setScissorTest(z),xe){let ke=$e.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,ke.__webglTexture,V)}else if(Ae){let ke=$e.get(b.texture),tt=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,V||0,tt)}N=-1},this.readRenderTargetPixels=function(b,F,V,W,k,xe,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){be.bindFramebuffer(H.FRAMEBUFFER,ze);try{let ke=b.texture,tt=ke.format,Xe=ke.type;if(tt!==on&&Ee.convert(tt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ze=Xe===Zt&&(Ne.has("EXT_color_buffer_half_float")||We.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Xe!==ys&&Ee.convert(Xe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Pi&&(We.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&V>=0&&V<=b.height-k&&H.readPixels(F,V,W,k,Ee.convert(tt),Ee.convert(Xe),xe)}finally{let ke=C!==null?$e.get(C).__webglFramebuffer:null;be.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(b,F,V=0){let W=Math.pow(2,-V),k=Math.floor(F.image.width*W),xe=Math.floor(F.image.height*W);R.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,V,0,0,b.x,b.y,k,xe),be.unbindTexture()},this.copyTextureToTexture=function(b,F,V,W=0){let k=F.image.width,xe=F.image.height,Ae=Ee.convert(V.format),ze=Ee.convert(V.type);R.setTexture2D(V,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,b.x,b.y,k,xe,Ae,ze,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Ae,F.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,W,b.x,b.y,Ae,ze,F.image),W===0&&V.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V,W,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,ze=b.max.z-b.min.z+1,ke=Ee.convert(W.format),tt=Ee.convert(W.type),Xe;if(W.isData3DTexture)R.setTexture3D(W,0),Xe=H.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Xe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let Ze=H.getParameter(H.UNPACK_ROW_LENGTH),Wt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Wn=H.getParameter(H.UNPACK_SKIP_PIXELS),sn=H.getParameter(H.UNPACK_SKIP_ROWS),Wi=H.getParameter(H.UNPACK_SKIP_IMAGES),Ot=V.isCompressedTexture?V.mipmaps[k]:V.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?H.texSubImage3D(Xe,k,F.x,F.y,F.z,xe,Ae,ze,ke,tt,Ot.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Xe,k,F.x,F.y,F.z,xe,Ae,ze,ke,Ot.data)):H.texSubImage3D(Xe,k,F.x,F.y,F.z,xe,Ae,ze,ke,tt,Ot),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ze),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Wt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wn),H.pixelStorei(H.UNPACK_SKIP_ROWS,sn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Wi),k===0&&W.generateMipmaps&&H.generateMipmap(Xe),be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){A=0,_=0,C=null,be.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bu?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===ic?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?Ks:sm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ks?Lt:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ou=class extends Va{};ou.prototype.isWebGL1Renderer=!0;var Bl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wa=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},lu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new S,Ol=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vi=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir,wa=new S,Ur=new S,Nr=new S,Fr=new j,ba=new j,gm=new Ie,ul=new S,_a=new S,fl=new S,Ap=new j,Nh=new j,Rp=new j,Ni=class extends cn{constructor(e=new vi){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lu(t,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new Ol(i,3,0,!1)),Ir.setAttribute("uv",new Ol(i,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),gm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;dl(ul.set(-.5,-.5,0),Nr,a,Ur,s,r),dl(_a.set(.5,-.5,0),Nr,a,Ur,s,r),dl(fl.set(.5,.5,0),Nr,a,Ur,s,r),Ap.set(0,0),Nh.set(1,0),Rp.set(1,1);let o=e.ray.intersectTriangle(ul,_a,fl,!1,wa);if(o===null&&(dl(_a.set(-.5,.5,0),Nr,a,Ur,s,r),Nh.set(0,1),o=e.ray.intersectTriangle(ul,fl,_a,!1,wa),o===null))return;let l=e.ray.origin.distanceTo(wa);l<e.near||l>e.far||t.push({distance:l,point:wa.clone(),uv:Js.getInterpolation(wa,ul,_a,fl,Ap,Nh,Rp,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function dl(n,e,t,i,s,r){Fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ba.x=r*Fr.x-s*Fr.y,ba.y=s*Fr.x+r*Fr.y):ba.copy(Fr),n.copy(e),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(gm)}var Hl=class extends Bn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=vt,h=vt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kl=class extends zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new Ie,Cp=new Ie,pl=[],Pp=new es,ME=new Ie,Aa=new B,Ra=new gi,_s=class extends B{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ME)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Pp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Ra.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),Cp.multiplyMatrices(i,zr),Aa.matrixWorld=Cp,Aa.raycast(e,pl);for(let a=0,o=pl.length;a<o;a++){let l=pl[a];l.instanceId=r,l.object=this,t.push(l)}pl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dp=new S,Lp=new S,Ip=new Ie,Fh=new qr,ml=new gi,Xa=class extends cn{constructor(e=new ft,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Dp.fromBufferAttribute(t,s-1),Lp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Dp.distanceTo(Lp);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),ml.radius+=r,e.ray.intersectsSphere(ml)===!1)return;Ip.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(Ip);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,u=new S,f=new S,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=p,M=y-1;v<M;v+=d){let A=g.getX(v),_=g.getX(v+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,_),Fh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=p,M=y-1;v<M;v+=d){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Fh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(f);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Up=new S,Np=new S,Qr=class extends Xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Up.fromBufferAttribute(t,s),Np.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Up.distanceTo(Np);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var er=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fp=new Ie,cu=new qr,gl=new gi,vl=new S,Jr=class extends cn{constructor(e=new ft,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;Fp.copy(s).invert(),cu.copy(e.ray).applyMatrix4(Fp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);vl.fromBufferAttribute(u,m),zp(vl,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)vl.fromBufferAttribute(u,g),zp(vl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zp(n,e,t,i,s,r,a){let o=cu.distanceSqToPoint(n);if(o<t){let l=new S;cu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Qn=class extends Bn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new j:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,s=[],r=[],a=[],o=new S,l=new Ie;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new S)}r[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(an(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qa=class extends si{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new j,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hu=class extends qa{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ku(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var xl=new S,zh=new ku,Bh=new ku,Oh=new ku,Kr=class extends si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new S){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xl.subVectors(s[0],s[1]).add(s[0]),c=xl);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),zh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Bh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Oh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Bh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Oh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(zh.calc(l),Bh.calc(l),Oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bp(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function EE(n,e){let t=1-n;return t*t*e}function SE(n,e){return 2*(1-n)*n*e}function TE(n,e){return n*n*e}function Ua(n,e,t,i){return EE(n,e)+SE(n,t)+TE(n,i)}function wE(n,e){let t=1-n;return t*t*t*e}function bE(n,e){let t=1-n;return 3*t*t*n*e}function _E(n,e){return 3*(1-n)*n*n*e}function AE(n,e){return n*n*n*e}function Na(n,e,t,i,s){return wE(n,e)+bE(n,t)+_E(n,i)+AE(n,s)}var Gl=class extends si{constructor(e=new j,t=new j,i=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new j){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uu=class extends si{constructor(e=new S,t=new S,i=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vl=class extends si{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fu=class extends si{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends si{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xl=class extends si{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y),Ua(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Bp(o,l.x,c.x,h.x,u.x),Bp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new j().fromArray(s))}return this}},du=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:Kr,CubicBezierCurve:Gl,CubicBezierCurve3:uu,EllipseCurve:qa,LineCurve:Vl,LineCurve3:fu,QuadraticBezierCurve:Wl,QuadraticBezierCurve3:Xl,SplineCurve:ql}),pu=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new du[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new du[s.type]().fromJSON(s))}return this}},Yl=class extends pu{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Vl(this.currentPoint.clone(),new j(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Wl(this.currentPoint.clone(),new j(e,t),new j(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Gl(this.currentPoint.clone(),new j(e,t),new j(i,s),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ql(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new qa(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zl=class n extends ft{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=an(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,f=new j,d=new S,g=new S,x=new S,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let v=i+y*h*s,M=Math.sin(v),A=Math.cos(v);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*M,u.y=e[_].y,u.z=e[_].x*A,a.push(u.x,u.y,u.z),f.x=y/t,f.y=_/(e.length-1),o.push(f.x,f.y);let C=l[3*_+0]*M,N=l[3*_+1],E=l[3*_+0]*A;c.push(C,N,E)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let M=v+y*e.length,A=M,_=M+e.length,C=M+e.length+1,N=M+1;r.push(A,_,N),r.push(C,N,_)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var ts=class n extends ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new S,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qe=class n extends ft{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(d,2));function y(){let M=new S,A=new S,_=0,C=(t-e)/i;for(let N=0;N<=r;N++){let E=[],w=N/r,L=w*(t-e)+e;for(let z=0;z<=s;z++){let Q=z/s,P=Q*l+o,O=Math.sin(P),X=Math.cos(P);A.x=L*O,A.y=-w*i+m,A.z=L*X,u.push(A.x,A.y,A.z),M.set(O,C,X).normalize(),f.push(M.x,M.y,M.z),d.push(Q,1-w),E.push(g++)}x.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){let w=x[E][N],L=x[E+1][N],z=x[E+1][N+1],Q=x[E][N+1];h.push(w,L,Q),h.push(L,z,Q),_+=6}c.addGroup(p,_,0),p+=_}function v(M){let A=g,_=new j,C=new S,N=0,E=M===!0?e:t,w=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;let L=g;for(let z=0;z<=s;z++){let P=z/s*l+o,O=Math.cos(P),X=Math.sin(P);C.x=E*X,C.y=m*w,C.z=E*O,u.push(C.x,C.y,C.z),f.push(0,w,0),_.x=O*.5+.5,_.y=X*.5*w+.5,d.push(_.x,_.y),g++}for(let z=0;z<s;z++){let Q=A+z,P=L+z;M===!0?h.push(P,P+1,Q):h.push(P+1,P,Q),N+=3}c.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xi=class n extends Qe{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mu=class n extends ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new S,M=new S,A=new S;for(let _=0;_<t.length;_+=3)d(t[_+0],v),d(t[_+1],M),d(t[_+2],A),l(v,M,A,y)}function l(y,v,M,A){let _=A+1,C=[];for(let N=0;N<=_;N++){C[N]=[];let E=y.clone().lerp(M,N/_),w=v.clone().lerp(M,N/_),L=_-N;for(let z=0;z<=L;z++)z===0&&N===_?C[N][z]=E:C[N][z]=E.clone().lerp(w,z/L)}for(let N=0;N<_;N++)for(let E=0;E<2*(_-N)-1;E++){let w=Math.floor(E/2);E%2===0?(f(C[N][w+1]),f(C[N+1][w]),f(C[N][w])):(f(C[N][w+1]),f(C[N+1][w+1]),f(C[N+1][w]))}}function c(y){let v=new S;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(y),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let y=new S;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let M=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(M,1-A)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],M=a[y+2],A=a[y+4],_=Math.max(v,M,A),C=Math.min(v,M,A);_>.9&&C<.1&&(v<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let M=y*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){let y=new S,v=new S,M=new S,A=new S,_=new j,C=new j,N=new j;for(let E=0,w=0;E<r.length;E+=9,w+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),_.set(a[w+0],a[w+1]),C.set(a[w+2],a[w+3]),N.set(a[w+4],a[w+5]),A.copy(y).add(v).add(M).divideScalar(3);let L=m(A);x(_,w+0,y,L),x(C,w+2,v,L),x(N,w+4,M,L)}}function x(y,v,M,A){A<0&&y.x===1&&(a[v]=y.x-1),M.x===0&&M.z===0&&(a[v]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Ya=class extends Yl{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Yl().fromJSON(s))}return this}},RE={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=vm(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=IE(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Za(r,a,t,o,l,d,0),a}};function vm(n,e,t,i,s){let r,a;if(s===WE(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Op(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Op(r,n[r],n[r+1],a);return a&&rc(a,a.next)&&(Ja(a),a=a.next),a}function tr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rc(t,t.next)||kt(t.prev,t,t.next)===0)){if(Ja(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Za(n,e,t,i,s,r,a){if(!n)return;!a&&r&&BE(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?PE(n,i,s,r):CE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Ja(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=DE(tr(n),e,t),Za(n,e,t,i,s,r,2)):a===2&&LE(n,e,t,i,s,r):Za(tr(n),e,t,i,s,r,1);break}}}function CE(n){let e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Hr(s,o,r,l,a,c,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function PE(n,e,t,i){let s=n.prev,r=n,a=n.next;if(kt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=gu(d,g,e,t,i),y=gu(x,m,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Hr(o,h,l,u,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Hr(o,h,l,u,c,f,M.x,M.y)&&kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Hr(o,h,l,u,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Hr(o,h,l,u,c,f,M.x,M.y)&&kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function DE(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!rc(s,r)&&xm(s,i,i.next,r)&&Qa(s,r)&&Qa(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Ja(i),Ja(i.next),i=n=r),i=i.next}while(i!==n);return tr(i)}function LE(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kE(a,o)){let l=ym(a,o);a=tr(a,a.next),l=tr(l,l.next),Za(a,e,t,i,s,r,0),Za(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function IE(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=vm(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(HE(c));for(s.sort(UE),r=0;r<s.length;r++)t=NE(s[r],t);return t}function UE(n,e){return n.x-e.x}function NE(n,e){let t=FE(n,e);if(!t)return e;let i=ym(t,n);return tr(i,i.next),tr(t,t.next)}function FE(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Hr(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Qa(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&zE(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function zE(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function BE(n,e,t,i){let s=n;do s.z===0&&(s.z=gu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,OE(s)}function OE(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function gu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function HE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hr(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function kE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!GE(n,e)&&(Qa(n,e)&&Qa(e,n)&&VE(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||rc(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rc(n,e){return n.x===e.x&&n.y===e.y}function xm(n,e,t,i){let s=Ml(kt(n,e,t)),r=Ml(kt(n,e,i)),a=Ml(kt(t,i,n)),o=Ml(kt(t,i,e));return!!(s!==r&&a!==o||s===0&&yl(n,t,e)||r===0&&yl(n,i,e)||a===0&&yl(t,n,i)||o===0&&yl(t,e,i))}function yl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ml(n){return n>0?1:n<0?-1:0}function GE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&xm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qa(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function VE(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ym(n,e){let t=new vu(n.i,n.x,n.y),i=new vu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Op(n,e,t,i){let s=new vu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ja(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function WE(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Fa=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Hp(e),kp(i,e);let a=e.length;t.forEach(Hp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,kp(i,t[l]);let o=RE.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Hp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function kp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ri=class n extends mu{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ka=class n extends ft{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new S,g=new j;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,v=y,M=y+i+1,A=y+i+2,_=y+1;o.push(v,M,_),o.push(M,A,_)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ql=class n extends ft{constructor(e=new Ya([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Fa.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Fa.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=Fa.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+u,M=y[1]+u,A=y[2]+u;i.push(v,M,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return XE(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function XE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var De=class n extends ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,f=new S,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let _=A/t;u.x=-e*Math.cos(s+_*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+_*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(_+M,1-v),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let v=h[p][y+1],M=h[p][y],A=h[p+1][y],_=h[p+1][y+1];(p!==0||a>0)&&d.push(v,M,_),(p!==i-1||l<Math.PI)&&d.push(M,A,_)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nr=class n extends ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ja=class n extends ft{constructor(e=new Xl(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new j,h=new S,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(d,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),p()}function m(v){h=e.getPointAt(v/t,h);let M=a.normals[v],A=a.binormals[v];for(let _=0;_<=s;_++){let C=_/s*Math.PI*2,N=Math.sin(C),E=-Math.cos(C);l.x=E*M.x+N*A.x,l.y=E*M.y+N*A.y,l.z=E*M.z+N*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let A=(s+1)*(v-1)+(M-1),_=(s+1)*v+(M-1),C=(s+1)*v+M,N=(s+1)*(v-1)+M;g.push(A,_,N),g.push(_,C,N)}}function y(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new du[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Jl=class extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dt=class extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rm,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function El(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var jr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xu=class extends jr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bd,endingEnd:Bd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Od:r=e,o=2*t-i;break;case Hd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Od:a=e,l=2*i-t;break;case Hd:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+y*a[c+A]+v*a[l+A]+M*a[u+A];return r}},yu=class extends jr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Mu=class extends jr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=El(t,this.TimeBufferType),this.values=El(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:El(e.times,Array),values:El(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tl:t=this.InterpolantFactoryMethodDiscrete;break;case wl:t=this.InterpolantFactoryMethodLinear;break;case fh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tl;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qE(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=wl;var ir=class extends yi{};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Tl;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Eu=class extends yi{};Eu.prototype.ValueTypeName="color";var Su=class extends yi{};Su.prototype.ValueTypeName="number";var Tu=class extends jr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},$a=class extends yi{InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.DefaultInterpolation=wl;$a.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends yi{};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Tl;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var wu=class extends yi{};wu.prototype.ValueTypeName="vector";var Gp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},bu=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},YE=new bu,eo=class{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var _u=class extends eo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gp.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Oa("img");function l(){h(),Gp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Kl=class extends eo{constructor(e){super(e)}load(e,t,i,s){let r=new Bn,a=new _u(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},to=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},jl=class extends to{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Hh=new Ie,Vp=new S,Wp=new S,$l=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Xp=new Ie,Ca=new S,kh=new S,Au=class extends $l{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),kh.copy(i.position),kh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kh),i.updateMatrixWorld(),s.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Xp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xp)}},no=class extends to{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ru=class extends $l{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ec=class extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $r=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=qp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function qp(){return(typeof performance>"u"?Date:performance).now()}var Gu="\\[\\]\\.:\\/",ZE=new RegExp("["+Gu+"]","g"),Vu="[^"+Gu+"]",QE="[^"+Gu.replace("\\.","")+"]",JE=/((?:WC+[\/:])*)/.source.replace("WC",Vu),KE=/(WCOD+)?/.source.replace("WCOD",QE),jE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),$E=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),eS=new RegExp("^"+JE+KE+jE+$E+"$"),tS=["material","materials","bones","map"],Cu=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZE,"")}static parseTrackName(e){let t=eS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Cu;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $T=new Float32Array(1);var tc=class{constructor(e,t,i=0,s=1/0){this.ray=new qr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Pu(e,this,i,t),i.sort(Yp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Pu(e[s],this,i,t);return i.sort(Yp),i}};function Yp(n,e){return n.distance-e.distance}function Pu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Pu(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ac={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iS=new ws(-1,1,1,-1,0,1),Wu=class extends ft{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}},sS=new Wu,Fi=class{constructor(e){this._mesh=new B(sS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ta=class extends fn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ro=class extends fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},oc=class extends fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new j);this._width=i.width,this._height=i.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ta(ac),this.copyPass.material.blending=ii,this.clock=new $r}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ro!==void 0&&(a instanceof ro?i=!0:a instanceof oc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cc=class extends fn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Mm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var na=class n extends fn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(r,a,{type:Zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Rt(r,a,{type:Zt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Rt(r,a,{type:Zt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Mm;this.highPassUniforms=ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ac;this.copyUniforms=ai.clone(h.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new Ln,this.fsQuad=new Fi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};na.BlurDirectionX=new j(1,0);na.BlurDirectionY=new j(0,1);var Em={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hc=class extends fn{constructor(){super();let e=Em;this.uniforms=ai.clone(e.uniforms),this.material=new Jl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sm={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var uc=class extends fn{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Rt(1,1,{minFilter:vt,magFilter:vt,type:Zt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new $s,this.materialDepth.depthPacking=so,this.materialDepth.blending=ii;let o=Sm,l=ai.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=t.aspect,l.aperture.value=r,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new pt({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new Fi(this.materialBokeh),this._oldClearColor=new ce}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var ao=class n extends B{constructor(){let e=n.SkyShader,t=new pt({name:e.name,uniforms:ai.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ln,depthWrite:!1});super(new Et(1,1,1),t),this.isSky=!0}};ao.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new S},up:{value:new S(0,1,0)}},vertexShader:`
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

		}`};var oo=new ft;oo.setAttribute("position",new zt(new Float32Array([-1,-1,3,-1,-1,3]),2));oo.setAttribute("uv",new zt(new Float32Array([0,0,2,0,0,2]),2));oo.boundingSphere=new gi;oo.computeBoundingSphere=function(){};var rS=new ws,Rs=class{constructor(e){this._mesh=new B(oo,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,rS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}},aS={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new Ie},viewMat:{value:new Ie},projViewMat:{value:new Ie},projectionMatrixInv:{value:new Ie},viewMatrixInv:{value:new Ie},cameraPos:{value:new S},resolution:{value:new j},time:{value:0},samples:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},logDepth:{value:!1},ortho:{value:!1},screenSpaceRadius:{value:!1},frame:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
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
}`},oS={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},transparencyDWFalse:{value:null},transparencyDWTrue:{value:null},transparencyDWTrueDepth:{value:null},transparencyAware:{value:!1},projMat:{value:new Ie},viewMat:{value:new Ie},projectionMatrixInv:{value:new Ie},viewMatrixInv:{value:new Ie},cameraPos:{value:new S},resolution:{value:new j},color:{value:new S(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:10},renderMode:{value:0},gammaCorrection:{value:!1},logDepth:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    `},lS={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new Ie},viewMat:{value:new Ie},projectionMatrixInv:{value:new Ie},viewMatrixInv:{value:new Ie},cameraPos:{value:new S},resolution:{value:new j},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},logDepth:{value:!1},screenSpaceRadius:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    `},cS={uniforms:{sceneDepth:{value:null},resolution:{value:new j},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new Ie},projectionMatrixInv:{value:new Ie},logDepth:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    }`},wm="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",Bw=Uint8Array.from(atob(wm),n=>n.charCodeAt(0));var hS=Uint8Array.from(atob(wm),n=>n.charCodeAt(0));function bm(n,e,t){if(e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)){let r=e.getQueryParameter(n,e.QUERY_RESULT)/1e6;t.lastTime=r}else setTimeout(()=>{bm(n,e,t)},1)}var fc=class extends fn{constructor(e,t,i=512,s=512){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.configuration=new Proxy({aoSamples:16,aoRadius:5,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,color:new ce(0,0,0),gammaCorrection:!0,logarithmicDepthBuffer:!1,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,autoRenderBeauty:!0,colorMultiply:!0,transparencyAware:!1,stencil:!1,accumulate:!1},{set:(r,a,o)=>{let l=r[a];return r[a]=o,o.equals?o.equals(l)||this.firstFrame():l!==o&&this.firstFrame(),a==="aoSamples"&&l!==o&&this.configureAOPass(this.configuration.logarithmicDepthBuffer),a==="denoiseSamples"&&l!==o&&this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),a==="halfRes"&&l!==o&&(this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.setSize(this.width,this.height)),a==="depthAwareUpsampling"&&l!==o&&this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),a==="transparencyAware"&&l!==o&&(this.autoDetectTransparency=!1,this.configureTransparencyTarget()),a==="stencil"&&l!==o&&(this.beautyRenderTarget.dispose(),this.beautyRenderTarget=new Rt(this.width,this.height,{minFilter:Ht,magFilter:vt,type:Zt,format:on,stencilBuffer:o}),this.beautyRenderTarget.depthTexture=new bs(this.width,this.height,o?ji:ni),this.beautyRenderTarget.depthTexture.format=o?Es:Di),!0}}),this.samples=[],this.samplesDenoise=[],this.autoDetectTransparency=!0,this.frame=0,this.lastViewMatrix=new Ie,this.lastProjectionMatrix=new Ie,this.beautyRenderTarget=new Rt(this.width,this.height,{minFilter:Ht,magFilter:vt,type:Zt,format:on,stencilBuffer:!1}),this.beautyRenderTarget.depthTexture=new bs(this.width,this.height,ni),this.beautyRenderTarget.depthTexture.format=Di,this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.detectTransparency(),this.configureTransparencyTarget(),this.writeTargetInternal=new Rt(this.width,this.height,{minFilter:Ht,magFilter:Ht,depthBuffer:!1}),this.readTargetInternal=new Rt(this.width,this.height,{minFilter:Ht,magFilter:Ht,depthBuffer:!1}),this.accumulationRenderTarget=new Rt(this.width,this.height,{minFilter:Ht,magFilter:Ht,depthBuffer:!1,format:on,type:Zt,stencilBuffer:!1,depthBuffer:!1,alpha:!0}),this.bluenoise=new Hl(hS,128,128),this.accumulationQuad=new Rs(new pt({uniforms:{frame:{value:0},tDiffuse:{value:null}},transparent:!0,opacity:1,vertexShader:`
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
                `})),this.bluenoise.colorSpace=zn,this.bluenoise.wrapS=Yn,this.bluenoise.wrapT=Yn,this.bluenoise.minFilter=vt,this.bluenoise.magFilter=vt,this.bluenoise.needsUpdate=!0,this.lastTime=0,this._r=new j,this._c=new ce}configureHalfResTargets(){this.firstFrame(),this.configuration.halfRes?(this.depthDownsampleTarget="160">161?new Rt(this.width/2,this.height/2,{count:2}):new Il(this.width/2,this.height/2,2),"160"<=161&&(this.depthDownsampleTarget.textures=this.depthDownsampleTarget.texture),this.depthDownsampleTarget.textures[0].format=zu,this.depthDownsampleTarget.textures[0].type=Pi,this.depthDownsampleTarget.textures[0].minFilter=vt,this.depthDownsampleTarget.textures[0].magFilter=vt,this.depthDownsampleTarget.textures[0].depthBuffer=!1,this.depthDownsampleTarget.textures[1].format=on,this.depthDownsampleTarget.textures[1].type=Zt,this.depthDownsampleTarget.textures[1].minFilter=vt,this.depthDownsampleTarget.textures[1].magFilter=vt,this.depthDownsampleTarget.textures[1].depthBuffer=!1,this.depthDownsampleQuad=new Rs(new pt(cS))):(this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null))}detectTransparency(){if(this.autoDetectTransparency){let e=!1;this.scene.traverse(t=>{t.material&&t.material.transparent&&(e=!0)}),this.configuration.transparencyAware=e}}configureTransparencyTarget(){this.configuration.transparencyAware?(this.transparencyRenderTargetDWFalse=new Rt(this.width,this.height,{minFilter:Ht,magFilter:vt,type:Zt,format:on}),this.transparencyRenderTargetDWTrue=new Rt(this.width,this.height,{minFilter:Ht,magFilter:vt,type:Zt,format:on}),this.transparencyRenderTargetDWTrue.depthTexture=new bs(this.width,this.height,ni),this.depthCopyPass=new Rs(new pt({uniforms:{depthTexture:{value:this.beautyRenderTarget.depthTexture}},vertexShader:`
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
            `}))):(this.transparencyRenderTargetDWFalse&&(this.transparencyRenderTargetDWFalse.dispose(),this.transparencyRenderTargetDWFalse=null),this.transparencyRenderTargetDWTrue&&(this.transparencyRenderTargetDWTrue.dispose(),this.transparencyRenderTargetDWTrue=null),this.depthCopyPass&&(this.depthCopyPass.dispose(),this.depthCopyPass=null))}renderTransparency(e){let t=this.scene.background,i=e.getClearColor(new ce),s=e.getClearAlpha(),r=new Map,a=e.autoClearDepth;this.scene.traverse(o=>{r.set(o,o.visible)}),this.scene.background=null,e.autoClearDepth=!1,e.setClearColor(new ce(0,0,0),0),this.depthCopyPass.material.uniforms.depthTexture.value=this.beautyRenderTarget.depthTexture,e.setRenderTarget(this.transparencyRenderTargetDWFalse),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&(o.material.transparent&&!o.material.depthWrite&&!o.userData.treatAsOpaque||!!o.userData.cannotReceiveAO))}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),e.setRenderTarget(this.transparencyRenderTargetDWTrue),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&o.material.transparent&&o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),this.scene.traverse(o=>{o.visible=r.get(o)}),e.setClearColor(i,s),this.scene.background=t,e.autoClearDepth=a}configureSampleDependentPasses(){this.firstFrame(),this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer)}configureAOPass(e=!1){this.firstFrame(),this.samples=this.generateHemisphereSamples(this.configuration.aoSamples);let t={...aS};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new pt(t)):this.effectShaderQuad=new Rs(new pt(t))}configureDenoisePass(e=!1){this.firstFrame(),this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);let t={...lS};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.denoiseSamples),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.poissonBlurQuad?(this.poissonBlurQuad.material.dispose(),this.poissonBlurQuad.material=new pt(t)):this.poissonBlurQuad=new Rs(new pt(t))}configureEffectCompositer(e=!1){this.firstFrame();let t={...oS};e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&this.configuration.depthAwareUpsampling&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectCompositerQuad?(this.effectCompositerQuad.material.dispose(),this.effectCompositerQuad.material=new pt(t)):this.effectCompositerQuad=new Rs(new pt(t))}generateHemisphereSamples(e){let t=[];for(let i=0;i<e;i++){let s=2.399963*i,r=Math.sqrt(i+.5)/Math.sqrt(e),a=r*Math.cos(s),o=r*Math.sin(s),l=Math.sqrt(1-(a*a+o*o));t.push(new S(a,o,l))}return t}generateDenoiseSamples(e,t){let i=2*Math.PI*t/e,s=1/e,r=s,a=[],o=s,l=0;for(let c=0;c<e;c++)a.push(new j(Math.cos(l),Math.sin(l)).multiplyScalar(Math.pow(o,.75))),o+=r,l+=i;return a}setSize(e,t){this.firstFrame(),this.width=e,this.height=t;let i=this.configuration.halfRes?.5:1;this.beautyRenderTarget.setSize(e,t),this.writeTargetInternal.setSize(e*i,t*i),this.readTargetInternal.setSize(e*i,t*i),this.accumulationRenderTarget.setSize(e*i,t*i),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(e*i,t*i),this.configuration.transparencyAware&&(this.transparencyRenderTargetDWFalse.setSize(e,t),this.transparencyRenderTargetDWTrue.setSize(e,t))}firstFrame(){this.needsFrame=!0}render(e,t,i,s,r){e.capabilities.logarithmicDepthBuffer!==this.configuration.logarithmicDepthBuffer&&(this.configuration.logarithmicDepthBuffer=e.capabilities.logarithmicDepthBuffer,this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer)),this.detectTransparency(),this.camera.updateMatrixWorld(),this.lastViewMatrix.equals(this.camera.matrixWorldInverse)&&this.lastProjectionMatrix.equals(this.camera.projectionMatrix)&&this.configuration.accumulate&&!this.needsFrame?this.frame++:(e.setRenderTarget(this.accumulationRenderTarget),e.clear(!0,!0,!0),this.frame=0,this.needsFrame=!1),this.lastViewMatrix.copy(this.camera.matrixWorldInverse),this.lastProjectionMatrix.copy(this.camera.projectionMatrix);let a,o,l;this.debugMode&&(a=e.getContext(),o=a.getExtension("EXT_disjoint_timer_query_webgl2"),o===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.configuration.autoRenderBeauty&&(e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera),this.configuration.transparencyAware&&this.renderTransparency(e)),this.debugMode&&(l=a.createQuery(),a.beginQuery(o.TIME_ELAPSED_EXT,l));let c=e.xr.enabled;e.xr.enabled=!1,this._r.set(this.width,this.height);let h=this.configuration.aoRadius;if(this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(h*=.5),this.frame<1024/this.configuration.aoSamples){this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.logarithmicDepthBuffer,this.depthDownsampleQuad.render(e)),this.effectShaderQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new S),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=h,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectShaderQuad.material.uniforms.frame.value=this.frame,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);for(let f=0;f<this.configuration.denoiseIterations;f++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new S),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=h,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=f,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);e.setRenderTarget(this.accumulationRenderTarget);let u=e.autoClear;e.autoClear=!1,this.accumulationQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.accumulationQuad.material.uniforms.frame.value=this.frame,this.accumulationQuad.render(e),e.autoClear=u}this.configuration.transparencyAware&&(this.effectCompositerQuad.material.uniforms.transparencyDWFalse.value=this.transparencyRenderTargetDWFalse.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrue.value=this.transparencyRenderTargetDWTrue.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrueDepth.value=this.transparencyRenderTargetDWTrue.depthTexture,this.effectCompositerQuad.material.uniforms.transparencyAware.value=!0),this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectCompositerQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=h,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.accumulationRenderTarget.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new S),this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.renderToScreen?null:t),this.effectCompositerQuad.render(e),this.debugMode&&(a.endQuery(o.TIME_ELAPSED_EXT),bm(l,a,this)),e.xr.enabled=c}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Low"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Medium"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12):e==="High"?(this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6):e==="Ultra"&&(this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6)}};var ga=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,wc={low:{name:"\u7701\u96FB",dpr:1,shadow:1024,post:!1,ao:0,bloom:!1,dof:!1,leaves:0,hedgeLeaves:0,shells:0,rockDetail:1,smoothRocks:!1,env:!1,gravelW:1200,cube:64,waterN:!1,grass:!1},mid:{name:"\u6A19\u6E96",dpr:1.5,shadow:2048,post:!0,ao:1,bloom:!0,dof:!1,leaves:650,hedgeLeaves:110,shells:3,rockDetail:5,smoothRocks:!0,env:!0,gravelW:1600,cube:128,waterN:!0,grass:!0},high:{name:"\u7CBE\u7DFB",dpr:2,shadow:4096,post:!0,ao:2,bloom:!0,dof:!0,leaves:1300,hedgeLeaves:230,shells:5,rockDetail:8,smoothRocks:!0,env:!0,gravelW:2e3,cube:192,waterN:!0,grass:!0}},Is=null;try{Is=(JSON.parse(localStorage.getItem("karesansui-v1")||"{}")||{}).quality}catch{}wc[Is]||(Is=ga?"mid":"high");var nt=wc[Is],U=n=>document.getElementById(n),D={ctx:null,on:!0};function Wc(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var le=Wc(20261110),gt=(n,e,t)=>Math.max(e,Math.min(t,n));function Eo(n,e,t){let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function ci(n,e,t=0){let i=n.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),a=i.getY(s),o=i.getZ(s),l=1+(Eo(Math.round(r*50)+t,Math.round(a*50),Math.round(o*50))-.5)*e;i.setXYZ(s,r*l,a*l,o*l)}return n.computeVertexNormals(),n}var oe=(n,e={})=>new dt({color:n,roughness:e.r??.9,metalness:0,flatShading:!!e.flat,side:e.side??Ii,...e.extra||{}});function xn(n,e=!0,t=!0){n.traverse(i=>{i.isMesh&&(i.castShadow=e,i.receiveShadow=t)})}var Vn=new Va({canvas:U("c"),antialias:!0});Vn.setPixelRatio(Math.min(devicePixelRatio,nt.dpr));Vn.setSize(innerWidth,innerHeight);Vn.shadowMap.enabled=!0;Vn.shadowMap.type=Du;Vn.toneMapping=io;Vn.toneMappingExposure=1.05;var uS=new Kl;function pr(n,e,t=!0){let i=uS.load(n);return i.wrapS=i.wrapT=Yn,e&&i.repeat.set(e[0],e[1]),t&&(i.colorSpace=Lt),i.anisotropy=8,i}var fe=new Wa,s0=new ce("#dde4e2");fe.background=s0;fe.fog=new Bl(s0,30,75);var bc=new B(new De(150,32,16),new pt({side:ln,depthWrite:!1,fog:!1,uniforms:{top:{value:new ce("#9fb6cc")},bottom:{value:new ce("#dde4e2")}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top;uniform vec3 bottom;varying vec3 vP;void main(){float t=smoothstep(-0.02,0.55,vP.y);gl_FragColor=vec4(mix(bottom,top,t),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));bc.renderOrder=-10;fe.add(bc);var Hi=null,rf=null,r0=null,Xu=null,_c="";if(nt.env){Hi=new ao,Hi.scale.setScalar(100),Hi.material.uniforms.envGain={value:.05},Hi.material.fragmentShader=Hi.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform float envGain;`).replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min(retColor*envGain,vec3(3.0)), 1.0 );"),rf=new Wa,rf.add(Hi),r0=new Zr(Vn);let n=Hi.material.uniforms;n.turbidity.value=5,n.rayleigh.value=1.4,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.8}function a0(n,e){if(!nt.env)return;let t=Math.round(n*4)/4+"|"+Ge+"|"+(Nn>.3);if(!e&&t===_c)return;_c=t;let i=(n-6)/12*Math.PI,s=new S(.9*Math.cos(i),Math.sin(i),.45).normalize();Hi.material.uniforms.sunPosition.value.copy(s),Hi.material.uniforms.turbidity.value=Nn>.3?12:Ge==="summer"?8:5,Hi.material.uniforms.envGain.value=.045*Math.max(.12,Math.min(1,s.y*3+.35));let r=Xu;Xu=r0.fromScene(rf,.02),fe.environment=Xu.texture,r&&r.dispose()}var St=new Sn(50,innerWidth/innerHeight,.1,200),gc=new jl("#eef3f6","#6a6656",1.15);fe.add(gc);var Kn=new ec("#fff1dc",1.9);Kn.position.set(-13,26,-5);Kn.castShadow=!0;Kn.shadow.mapSize.set(nt.shadow,nt.shadow);Object.assign(Kn.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:70});Kn.shadow.bias=-5e-4;Kn.shadow.normalBias=.03;fe.add(Kn);var o0="karesansui-v1",l0="karesansui-v1-gravel";function c0(n){try{return localStorage.getItem(n)}catch{return null}}function h0(n,e){try{return localStorage.setItem(n,e),!0}catch{return!1}}var de={};try{de=JSON.parse(c0(o0)||"{}")||{}}catch{de={}}var u0=Date.now(),Ac=de.last||0,Sf=!Ac||u0-Ac>1800*1e3,ua=(de.visits||0)+(Sf?1:0),af=Ac?(u0-Ac)/864e5:0,of=1+Math.min(.3,(ua-1)*.012),_m=0,Am=0,jt=null;de.moods=de.moods&&typeof de.moods=="object"?de.moods:{};de.notes=Array.isArray(de.notes)?de.notes:[];de.days=Array.isArray(de.days)?de.days:[];{let n=new Date,e=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();de.days.includes(e)||de.days.push(e),de.days.length>800&&(de.days=de.days.slice(-800))}var ar={value:0},po={mist:mc("mist")<.4,dragon:mc("dragonfly")<.6,frog:mc("frog")<.55,tanuki:mc("tanuki")<.18},cs=Object.assign({music:75,amb:75,on:!0},de.vol||{});D.on=cs.on!==!1;var we={x0:-12,x1:12,z0:-3.5,z1:10};we.w=we.x1-we.x0;we.d=we.z1-we.z0;var Ls=nt.gravelW,So=Math.round(Ls*we.d/we.w),mn=Ls/we.w,mo=.18,or={x:-10.6,z:8.4},en={x:10.2,z:8.4},Qt={x:-10.35,z:-2.3},at={x:7,z:7.15,rx:2.45,rz:1.4},To=n=>1+.08*Math.sin(3*n+1)+.05*Math.sin(5*n+.3);function Xc(n,e){let t=(n-at.x)/at.rx,i=(e-at.z)/at.rz;return Math.hypot(t,i)/To(Math.atan2(i,t))}var hr=(n,e)=>(Xc(n,e)-1)*(at.rx+at.rz)/2,ra=[[5.05,6.85],[6.05,7.45],[7.15,7],[8.25,7.5],[9.15,7.05]],wo=[{k:"d0",x:-7.2,z:-.6,moss:1.9,rot:0,scale:1,seed:7,rocks:[[-.4,-.4,2.5,.62],[.5,.1,1.7,.55],[-1.1,.4,1.1,.5],[.2,1.05,.75,.5],[1.1,-.55,.6,.42]]},{k:"d1",x:-2.4,z:.8,moss:1.25,rot:0,scale:1,seed:38,rocks:[[-.2,-.2,1.5,.5],[.5,.35,.85,.45],[-.55,.5,.5,.4]]},{k:"d2",x:-5.2,z:5.6,moss:.95,rot:0,scale:1,seed:69,rocks:[[0,0,1.15,.85]]},{k:"d3",x:2.4,z:3.2,moss:1.05,rot:0,scale:1,seed:100,rocks:[[-.2,-.1,.75,.6],[.45,.45,.5,.45]]},{k:"d4",x:6.8,z:-.8,moss:.7,rot:0,scale:1,seed:131,rocks:[[0,0,.55,.5]]}],Hn=Array.isArray(de.layout)&&de.layout.length<=24?de.layout:JSON.parse(JSON.stringify(wo)),f0=()=>JSON.stringify(Hn.map(n=>[n.x.toFixed(2),n.z.toFixed(2),(n.rot||0).toFixed(2),(n.scale||1).toFixed(2),n.seed,n.moss]));function fS(){return[...Hn.map(n=>({x:n.x,z:n.z,R:n.moss*(n.scale||1)+.12})),{x:or.x,z:or.z,R:.75},{x:en.x,z:en.z,R:.55},{x:Qt.x-.35,z:Qt.z-.1,R:.95}]}var va=document.createElement("canvas");va.width=Ls;va.height=So;var Us=va.getContext("2d"),qc=document.createElement("canvas");qc.width=Ls;qc.height=So;function d0(){let n=Us.createImageData(Ls,So),e=n.data,t=mo*6,i=fS(),s=(at.rx+at.rz)/2;for(let r=0;r<So;r++){let a=we.z0+(r+.5)/mn;for(let o=0;o<Ls;o++){let l=we.x0+(o+.5)/mn,c=1e9;for(let p=0;p<i.length;p++){let y=i[p],v=l-y.x,M=a-y.z,A=Math.sqrt(v*v+M*M)-y.R;A<c&&(c=A)}let h=(l-at.x)/at.rx,u=(a-at.z)/at.rz,f=(Math.sqrt(h*h+u*u)/To(Math.atan2(u,h))-1)*s-.38;f<c&&(c=f);let d;if(c<0)d=.94;else{let y=(c<t?c/mo:(a+.28*Math.sin(l*.33+.6)+.1*Math.sin(l*1.1))/mo)*Math.PI*2;d=.9+.075*Math.cos(y)+.045*Math.sin(y)}let g=(Math.random()-.5)*.09;Math.random()<.012&&(g-=.13);let x=d+g,m=(r*Ls+o)*4;e[m]=226*x,e[m+1]=223*x,e[m+2]=215*x,e[m+3]=255}}Us.putImageData(n,0,0),qc.getContext("2d").drawImage(va,0,0)}d0();var dS=!1;try{let n=JSON.parse(c0(l0)||"null");if(n&&n.sig===f0()&&n.img){let e=new Image;e.onload=()=>{Us.drawImage(e,0,0,Ls,So),Ns=!0,dS=!0},e.src=n.img}}catch{}var Rc=document.createElement("canvas");Rc.width=Rc.height=64;{let n=Rc.getContext("2d"),e=n.createImageData(64,64);for(let t=0;t<4096;t++){let i=.955+(Math.random()-.5)*.09;Math.random()<.012&&(i-=.13),e.data[t*4]=226*i,e.data[t*4+1]=223*i,e.data[t*4+2]=215*i,e.data[t*4+3]=255}n.putImageData(e,0,0)}var pS=Us.createPattern(Rc,"repeat");function p0(n,e,t,i,s,r,a=0){let o=document.createElement("canvas");o.width=n,o.height=e;let l=o.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,n,e),l.fillStyle="#000",l.beginPath();for(let h=0;h<=96;h++){let u=h/96*Math.PI*2,f=To(u)+a,d=at.x+Math.cos(u)*at.rx*f,g=at.z+Math.sin(u)*at.rz*f,x=(d-t)/s*n,m=(g-i)/r*e;h?l.lineTo(x,m):l.moveTo(x,m)}return l.fill(),new Qn(o)}var bo=new Qn(va);bo.colorSpace=Lt;bo.anisotropy=Vn.capabilities.getMaxAnisotropy();var fa=new B(new un(we.w,we.d),new dt({map:bo,bumpMap:bo,bumpScale:2.5,roughness:.96,alphaMap:p0(800,450,we.x0,we.z0,we.w,we.d),alphaTest:.5}));fa.rotation.x=-Math.PI/2;fa.position.set((we.x0+we.x1)/2,0,(we.z0+we.z1)/2);fa.receiveShadow=!0;fe.add(fa);var Ns=!1,Rm=0,as=new B(new un(90,90),oe("#737a58",{r:1,extra:{alphaMap:p0(1024,1024,-45,-45,90,90,.02),alphaTest:.5}}));as.rotation.x=-Math.PI/2;as.position.y=-.02;as.receiveShadow=!0;fe.add(as);var Cm=nt.grass?pr("assets/grass_d.jpg",[22,22]):null,mS=nt.grass?pr("assets/grass_n.jpg",[22,22],!1):null,gS=oe("#9c978d",{r:1});[[we.x0-.08,(we.z0+we.z1)/2,.16,we.d+.32],[we.x1+.08,(we.z0+we.z1)/2,.16,we.d+.32],[0,we.z1+.08,we.w,.16],[0,we.z0-.06,we.w,.12]].forEach(([n,e,t,i])=>{let s=new B(new Et(t,.07,i),gS);s.position.set(n,.035,e),s.receiveShadow=!0,fe.add(s)});function $n(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Qn(s);return r.colorSpace=Lt,r.wrapS=r.wrapT=Yn,i&&r.repeat.set(i[0],i[1]),r.anisotropy=8,r}var vS=$n(256,256,(n,e,t)=>{for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=70+Math.random()*14;n.fillStyle=`rgb(${r},${r+4},${r+8})`,n.fillRect(s*128,i*128,128,128)}for(let i=0;i<1200;i++)n.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,n.fillRect(Math.random()*e,Math.random()*t,2,2);n.strokeStyle="#33373b",n.lineWidth=4;for(let i=0;i<=2;i++)n.beginPath(),n.moveTo(i*128,0),n.lineTo(i*128,t),n.stroke(),n.beginPath(),n.moveTo(0,i*128),n.lineTo(e,i*128),n.stroke()},[24/.8,4.3/.8]),Tf=new B(new Et(24,.04,4.3),new dt({map:vS,roughness:.75}));Tf.position.set(0,0,-5.65);Tf.receiveShadow=!0;fe.add(Tf);var _o=oe("#5b7a3a",{r:1}),wf=oe("#4a6a32",{r:1}),Os=[],bf=[],ha=new Re;fe.add(ha);var m0=new Ln({visible:!1});function g0(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Math.floor(t),a=n-i,o=e-s,l=t-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),f=In.lerp,d=(g,x,m)=>Eo(i+g,s+x,r+m);return f(f(f(d(0,0,0),d(1,0,0),c),f(d(0,1,0),d(1,1,0),c),h),f(f(d(0,0,1),d(1,0,1),c),f(d(0,1,1),d(1,1,1),c),h),u)}function aa(n,e,t,i=4){let s=.5,r=1,a=0;for(let o=0;o<i;o++)a+=s*g0(n*r,e*r,t*r),r*=2.03,s*=.5;return a}var vc={};function xS(n){if(vc[n])return vc[n];let e=new ri(1,nt.rockDetail);e.deleteAttribute("normal"),e.deleteAttribute("uv");let t=yS(e),i=t.attributes.position,s=new Float32Array(i.count*3),r=n*.37,a=[],o=Wc(n*13+5),l=[];for(let h=0;h<5;h++){let u=o()*6.283,f=(o()-.35)*1.4,d=Math.cos(u)*Math.cos(f),g=Math.sin(f),x=Math.sin(u)*Math.cos(f);l.push([d,g,x,.55+o()*.3])}for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getY(h),d=i.getZ(h),g=aa(u*1.2+r,f*1.2,d*1.2+r,4),x=aa(u*4+r,f*4,d*4,3),m=1+(g-.5)*.55+(x-.5)*.12,p=1-.42*((f+1)/2);u*=m*p,d*=m*p*.78,f*=.95+.1*g0(u*2+r,0,d*2),f<-.7&&(f=-.7+(f+.7)*.3);for(let[y,v,M,A]of l){let _=u*y+f*v+d*M-A;_>0&&(u-=y*_*.92,f-=v*_*.92,d-=M*_*.92)}i.setXYZ(h,u,f,d),a.push(g)}t.computeVertexNormals();let c=t.attributes.normal;for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getY(h),d=i.getZ(h),g=.85+.25*aa(u*6+r,f*6,d*6,3)+(a[h]-.5)*.35,x=g*.62,m=g*.63,p=g*.66,y=aa(u*3.1+9,f*3.1,d*3.1+r,3);if(c.getY(h)>.25&&y>.6){let v=Math.min(1,(y-.6)*6);x=In.lerp(x,.62,v*.6),m=In.lerp(m,.66,v*.6),p=In.lerp(p,.48,v*.6)}c.getY(h)>.55&&aa(u*5,f*5+r,d*5,2)>.58&&(x*=.75,m*=.95,p*=.62),s[h*3]=x,s[h*3+1]=m,s[h*3+2]=p}return t.setAttribute("color",new zt(s,3)),vc[n]=t,t}function yS(n){let e=n.attributes.position,t=new Map,i=[],s=[];for(let a=0;a<e.count;a++){let o=Math.round(e.getX(a)*1e4)+","+Math.round(e.getY(a)*1e4)+","+Math.round(e.getZ(a)*1e4),l=t.get(o);l===void 0&&(l=i.length/3,t.set(o,l),i.push(e.getX(a),e.getY(a),e.getZ(a))),s.push(l)}let r=new ft;return r.setAttribute("position",new Ue(i,3)),r.setIndex(s),r}var MS=(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createImageData(256,256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=aa(a/9,r/9,3.3,3)*.55+Math.random()*.45,l=(r*256+a)*4;i.data[l]=i.data[l+1]=i.data[l+2]=o*255,i.data[l+3]=255}t.putImageData(i,0,0);let s=new Qn(e);return s.wrapS=s.wrapT=Yn,s.repeat.set(3,3),s})(),Yc=[];for(let n=1;n<=nt.shells;n++)Yc.push(new dt({color:"#5b7a3a",alphaMap:MS,alphaTest:.25+.6*n/(nt.shells+1),roughness:1}));var ES=new dt({vertexColors:!0,roughness:.86,metalness:0});function SS(n){let e=new ri(1,1),t=e.attributes.position;for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),a=t.getZ(i),o=1+(Eo(Math.round(s*40)+n,Math.round(r*40),Math.round(a*40))-.5)*.55,l=1-.45*((r+1)/2);t.setXYZ(i,s*o*l,r*(.9+.2*Eo(n,Math.round(s*40),Math.round(a*40))),a*o*l*.75)}return e.computeVertexNormals(),e}function TS(n,e){let t=new Re,i=Wc(n.seed||e*31+7);t.position.set(n.x,0,n.z),t.rotation.y=n.rot||0,t.scale.setScalar(n.scale||1);let s=new B(ci(new De(1,22,12),.35,n.seed||e),(n.seed||e)%2?wf:_o);s.scale.set(n.moss*of,.22,n.moss*.86*of),s.rotation.y=i()*3,s.position.y=-.03,s.receiveShadow=!0,t.add(s),Yc.forEach((a,o)=>{let l=new B(s.geometry,a);l.scale.set(s.scale.x*(1+.016*(o+1)),s.scale.y*(1+.1*(o+1)),s.scale.z*(1+.016*(o+1))),l.rotation.y=s.rotation.y,l.position.y=-.03+.004*(o+1),l.receiveShadow=!0,t.add(l)}),n.rocks.forEach(([a,o,l,c],h)=>{let u=.22+i()*.08,f=nt.smoothRocks?new B(xS(((n.seed||e)*7+h*13)%997),(()=>{let d=ES.clone();return d.color.setRGB(.34+u*.8,.34+u*.8,.35+u*.8),d})()):new B(SS((n.seed||e)*7+h*13),new dt({color:new ce(u,u*1.02,u*1.05),roughness:.95,flatShading:!0}));f.scale.set(c,l/2,c),f.position.set(a,l/2-.15,o),f.rotation.set((i()-.5)*.18,i()*6.28,(i()-.5)*.18),f.castShadow=f.receiveShadow=!0,t.add(f)});let r=new B(new Qe(n.moss*1.05+.2,n.moss*1.05+.2,1.2,16),m0);return r.position.y=.5,t.add(r),t.userData.c=n,t.userData.hit=r,t}function ur(){for(;ha.children.length;)ha.children.pop().traverse(e=>{e.isMesh&&(!Object.values(vc).includes(e.geometry)&&!Yc.includes(e.material)&&e.geometry.dispose(),e.material!==m0&&e.material!==_o&&e.material!==wf&&e.material.dispose())});Hn.forEach((n,e)=>ha.add(TS(n,e))),bf=Hn.map(n=>({x:n.x,z:n.z,r:n.moss*(n.scale||1)*.85*Math.min(of,1.12)}))}ur();var Zw=$n(512,184,(n,e,t)=>{let s=t/8;for(let r=0;r<8;r++){let a=le()*18;n.fillStyle=`rgb(${128+a},${94+a*.8},${62+a*.6})`,n.fillRect(0,r*s,e,s);for(let o=0;o<26;o++){n.strokeStyle=`rgba(70,45,25,${.05+le()*.08})`,n.lineWidth=1;let l=r*s+le()*s;n.beginPath(),n.moveTo(0,l),n.bezierCurveTo(e*.3,l+le()*3-1.5,e*.7,l+le()*3-1.5,e,l),n.stroke()}n.fillStyle="rgba(50,32,18,.55)",n.fillRect(0,r*s,e,1.5)}},[5.5,1.8]),wS=pr("assets/wood_d.jpg",[4,.9]),bS=pr("assets/wood_b.jpg",[4,.9],!1),_S=pr("assets/wood_r.jpg",[4,.9],!1),v0=new dt({map:wS,bumpMap:bS,bumpScale:1.2,roughnessMap:_S,roughness:.85,color:"#a07a55"}),Zc=oe("#4e3626",{r:.8}),x0=pr("assets/wood_d.jpg",[.25,2.2]);x0.rotation=Math.PI/2;var y0=new dt({map:x0,color:"#6b4c36",roughness:.75}),AS=oe("#ebe6da",{r:1}),Fs=new Re;fe.add(Fs);var M0,E0,bn=-10.05,zs=12.05,Vi=(bn+zs)/2,_n=zs-bn;function ui(n,e,t,i,s,r,a,o=Fs){let l=new B(new Et(n,e,t),i);return l.position.set(s,r,a),o.add(l),l}ui(_n,.12,2.6,v0,Vi,.69,-6.3);ui(_n,.1,.7,v0,Vi,.35,-4.65);ui(_n-.2,.6,2.3,oe("#2a2521"),Vi,.3,-6.4);for(let n=bn+.5;n<=zs;n+=2.2)ui(.12,.3,.12,Zc,n,.15,-4.65);var _f=[];for(let n=0;n<=8;n++)_f.push(bn+n*(_n/8));var S0=[];_f.forEach(n=>{let e=ui(.2,3.8,.2,y0.clone(),n,1.9,-5.2);e.material.transparent=!0,S0.push(e),Os.push({x:n,z:-5.2,r:.14})});ui(_n+.3,.26,.24,Zc,Vi,3.72,-5.2);ui(_n,3.8,5.9,AS,Vi,1.9,-10.57);var Pm=$n(256,448,(n,e,t)=>{n.fillStyle="#f4f0e5",n.fillRect(0,0,e,t);for(let s=0;s<1800;s++)n.fillStyle=`rgba(170,160,140,${Math.random()*.07})`,n.fillRect(Math.random()*e,Math.random()*t,2,2);let i="#5e4330";n.fillStyle="#7b5b3f",n.fillRect(12,360,232,78),n.fillStyle=i,n.fillRect(0,0,e,10),n.fillRect(0,0,12,t),n.fillRect(e-12,0,12,t),n.fillRect(0,t-10,e,10),n.fillRect(0,354,e,8);for(let s=1;s<4;s++)n.fillRect(12+s*58-2,10,4,344);for(let s=1;s<6;s++)n.fillRect(12,10+s*57.3-2,232,4)},[15,1]),Af=new B(new un(_n,2.55),new dt({map:Pm,roughness:.95,emissive:new ce("#ffc274"),emissiveMap:Pm,emissiveIntensity:0}));Af.position.set(Vi,2.025,-7.6);Fs.add(Af);ui(_n+.1,.14,.12,Zc,Vi,3.33,-7.56);ui(_n+.1,.16,.12,Zc,Vi,.77,-7.56);_f.forEach(n=>ui(.16,3.1,.16,y0,n,2.3,-7.56));var Rf=new B(new un(_n+2.7,3.4),oe("#6e5038",{r:.85}));Rf.rotation.x=Math.PI/2;Rf.position.set(Vi,3.87,-5.95);Fs.add(Rf);{let n=bn-1.35,e=zs+1.35,t=-4.3,i=-14.7,s=3.95,r=6.7,a=-9.5,o=-5.4,l=7.4,c=[],h=(_,C,N)=>c.push(..._,...C,...N),u=[n,s,t],f=[e,s,t],d=[n,s,i],g=[e,s,i],x=[o,r,a],m=[l,r,a];h(u,f,m),h(u,m,x),h(g,d,x),h(g,x,m),h(d,u,x),h(f,g,m);let p=new ft;p.setAttribute("position",new Ue(c,3)),p.computeVertexNormals();{let _=p.attributes.position,C=[];for(let N=0;N<_.count;N+=3){let E=new S().fromBufferAttribute(_,N),w=new S().fromBufferAttribute(_,N+1),L=new S().fromBufferAttribute(_,N+2),z=w.clone().sub(E).cross(L.clone().sub(E));for(let Q of[E,w,L]){let P=Math.abs(z.x)>Math.abs(z.z)?Q.z:Q.x;C.push(P/.3,Q.y/.24)}}p.setAttribute("uv",new Ue(C,2))}let y=(_,C)=>{let N=Math.pow(Math.abs(Math.cos(Math.PI*_)),.6),E=C<.12?(.12-C)*4:0;return N*.8+E},v=(()=>{let C=document.createElement("canvas");C.width=C.height=128;let N=C.getContext("2d"),E=N.createImageData(128,128);for(let L=0;L<128;L++)for(let z=0;z<128;z++){let Q=z/128,P=L/128,O=1/128,X=(y(Q+O,P)-y(Q-O,P))*14,$=(y(Q,P+O)-y(Q,P-O))*14,J=Math.hypot(X,$,1),Z=(L*128+z)*4;E.data[Z]=(-X/J*.5+.5)*255,E.data[Z+1]=($/J*.5+.5)*255,E.data[Z+2]=(1/J*.5+.5)*255,E.data[Z+3]=255}N.putImageData(E,0,0);let w=new Qn(C);return w.wrapS=w.wrapT=Yn,w})(),M=$n(128,128,(_,C,N)=>{for(let E=0;E<N;E++)for(let w=0;w<C;w++){let L=.82+.18*Math.pow(Math.abs(Math.cos(Math.PI*w/C)),.6)-(E<14?.12:0)+(Math.random()-.5)*.05;_.fillStyle=`rgb(${74*L},${76*L},${82*L})`,_.fillRect(w,E,1,1)}}),A=new B(p,new dt({map:M,normalMap:v,normalScale:new j(.9,.9),roughness:.55,metalness:.05,side:yt}));Fs.add(A),M0=p,E0=[l-o+.6,(o+l)/2,r+.08,a],ui(e-n+.1,.22,.2,oe("#2d2824"),Vi,3.88,t),ui(l-o+.6,.3,.45,oe("#2d2824"),(o+l)/2,r+.08,a)}xn(Fs);var lf=[],cf,hf=[],xc=ci(new ri(1,2),.3,9),os=[],Ao=oe("#f4f7fa",{r:.95}),T0={value:0};function RS(n){let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(128/2,128/2),i.fillStyle="#fff",i.strokeStyle="rgba(110,110,110,.5)",i.lineWidth=2,i.lineCap="round",n==="maple"){i.beginPath();let r=[];for(let a=0;a<10;a++){let o=-Math.PI/2+a/10*Math.PI*2,l=[1,0,.92,0,.78,0,.78,0,.92,0][a],c=a%2?20:56*l;r.push([Math.cos(o)*c,Math.sin(o)*c+6])}i.moveTo(r[0][0],r[0][1]);for(let a=1;a<=10;a++){let o=r[a%10],l=r[a-1];i.quadraticCurveTo(l[0]*.9+o[0]*.1,l[1]*.9+o[1]*.1,o[0],o[1])}i.fill();for(let a=0;a<10;a+=2)i.beginPath(),i.moveTo(0,8),i.lineTo(r[a][0]*.8,r[a][1]*.8),i.stroke();i.beginPath(),i.moveTo(0,8),i.lineTo(0,60),i.stroke()}else if(n==="ginkgo"){i.beginPath(),i.moveTo(0,52),i.arc(0,52,96,-Math.PI/2-.95,-Math.PI/2+.95),i.closePath(),i.fill(),i.globalCompositeOperation="destination-out",i.beginPath(),i.moveTo(0,-44),i.lineTo(-7,-26),i.lineTo(7,-26),i.fill(),i.globalCompositeOperation="source-over";for(let r=-4;r<=4;r++){let a=-Math.PI/2+r*.2;i.beginPath(),i.moveTo(0,52),i.lineTo(Math.cos(a)*90,52+Math.sin(a)*90),i.stroke()}}else if(n==="sakura")for(let[r,a,o]of[[-20,-14,22],[22,-6,20],[-2,24,21]]){for(let l=0;l<5;l++){let c=l/5*Math.PI*2;i.beginPath(),i.ellipse(r+Math.cos(c)*o*.55,a+Math.sin(c)*o*.55,o*.52,o*.4,c,0,7),i.fill()}i.fillStyle="rgba(150,150,150,.9)",i.beginPath(),i.arc(r,a,o*.22,0,7),i.fill(),i.fillStyle="#fff"}else if(n==="needle"){i.strokeStyle="#fff",i.lineWidth=3;for(let r=0;r<34;r++){let a=-Math.PI/2+(Math.random()-.5)*1.5,o=40+Math.random()*24;i.beginPath(),i.moveTo(0,54),i.lineTo(Math.cos(a)*o,54+Math.sin(a)*o*1.6),i.stroke()}}else{i.beginPath(),i.moveTo(0,-58),i.bezierCurveTo(40,-30,36,30,0,58),i.bezierCurveTo(-36,30,-40,-30,0,-58),i.fill(),i.beginPath(),i.moveTo(0,-50),i.lineTo(0,56),i.stroke();for(let r=-3;r<=3;r++)i.beginPath(),i.moveTo(0,r*14),i.lineTo(r%2?22:-22,r*14-12),i.stroke()}let s=new Qn(t);return s.colorSpace=Lt,s.anisotropy=4,s}var Dm={},Lm={},w0=new un(1,1);function b0(n){return Dm[n]||(Dm[n]=RS(n))}function _0(n){return Lm[n]||(Lm[n]=new $s({depthPacking:so,map:b0(n),alphaTest:.45,side:yt}))}function Cc(n,e="#ffffff"){let t=new dt({map:b0(n),alphaTest:.45,side:yt,roughness:.78,color:e});return t.onBeforeCompile=i=>{i.uniforms.uWind=T0,i.uniforms.uGust=ar,i.vertexShader=`uniform float uWind;uniform float uGust;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
vec3 ip=vec3(instanceMatrix[3]);float w=(sin(uWind*1.6+ip.x*1.3+ip.z*0.9)*0.6+sin(uWind*2.7+ip.y*2.3)*0.4)*(1.0+uGust*2.6);transformed+=vec3(w*0.07,w*0.04,w*0.06)*(position.y+0.5);
#endif`)},t.customProgramCacheKey=()=>"leafwind",t}var Pc=new Ie,Dc=new Zn,Lc=new Ts,Ic=new S,Uc=new S,Im=new ce;function Nc(n,e,t,i,s,r,a,o=Math.random){if(!s||!e.length)return null;let l=new _s(w0,a||Cc(t),s);l.customDepthMaterial=_0(t);let c=e.reduce((h,u)=>h+u.sx*u.sz,0);for(let h=0;h<s;h++){let u=o()*c,f=e[0];for(let v of e)if(u-=v.sx*v.sz,u<=0){f=v;break}let d=o()*2-1,g=o()*2-1,x=o()*2-1,m=Math.hypot(d,g,x)||1;d/=m,g=g/m*.85+.15,x/=m;let p=.8+o()*.3;Ic.set(f.x+d*f.sx*p,f.y+g*f.sy*p,f.z+x*f.sz*p),Lc.set(o()*6.28,o()*6.28,o()*6.28),Dc.setFromEuler(Lc);let y=r*(.75+o()*.5);Uc.set(y,y,y),Pc.compose(Ic,Dc,Uc),l.setMatrixAt(h,Pc),Im.set(i[Math.floor(o()*i.length)]).multiplyScalar(.82+o()*.32),l.setColorAt(h,Im)}return l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}var Si=null,A0=[];{let r=function(a,o,l,c,h){let u=new Re,f=new B(new Qe(.16,.24,l,8),s);f.position.y=l/2,u.add(f);let d=new ce(h),g=nt.leaves?d.clone().multiplyScalar(.62):d,x=oe("#"+g.getHexString(),{r:1});hf.push({mat:x,base:g.clone()});let m=[];for(let p=0;p<4;p++){let y=c*(.65+le()*.45),v=new B(xc,x);v.scale.set(y,y*.85,y),v.position.set((le()-.5)*c,l+(le()-.2)*c*.7,(le()-.5)*c),m.push({x:v.position.x,y:v.position.y,z:v.position.z,sx:y,sy:y*.85,sz:y}),nt.leaves&&v.scale.multiplyScalar(.84),u.add(v)}if(nt.leaves){let p=Cc("broad","#"+d.getHexString());hf.push({mat:p,base:d.clone()}),Nc(u,m,"broad",["#ffffff","#e9f0dc","#d6e3c4","#f4f0d8"],Math.round(nt.leaves*1.2),.34,p)}u.position.set(a,0,o),xn(u),fe.add(u)},n=ci(new ri(1,2),.25,3),e=[];for(let a=-14;a<=12;a+=1.45)e.push([-13.9,a]);for(let a=-12.6;a<=13.5;a+=1.45)e.push([a,12]);for(let a=-3.6;a<=11;a+=1.45)e.push([14,a]);let t=new _s(n,oe("#ffffff",{r:1}),e.length),i=new Ie;if(e.forEach(([a,o],l)=>{let c=1.05+le()*.3;i.compose(new S(a+(le()-.5)*.3,.95+le()*.2,o+(le()-.5)*.3),new Zn().setFromEuler(new Ts(0,le()*6,0)),new S(c,1.15+le()*.3,c)),t.setMatrixAt(l,i);let h=new ce().setHSL(.27+le()*.04,.38+le()*.1,.25+le()*.06);lf.push(h),t.setColorAt(l,h)}),t.castShadow=t.receiveShadow=!0,fe.add(t),cf=t,nt.hedgeLeaves){let a=new Ie,o=new S,l=new Zn,c=new S,h=[];for(let d=0;d<e.length;d++)t.getMatrixAt(d,a),a.decompose(o,l,c),h.push({x:o.x,y:o.y,z:o.z,sx:c.x,sy:c.y,sz:c.z,i:d});let u=e.length*nt.hedgeLeaves;Si=new _s(w0,Cc("broad"),u),Si.customDepthMaterial=_0("broad");let f=0;for(let d of h)for(let g=0;g<nt.hedgeLeaves;g++){let x=Math.random()*2-1,m=Math.random()*2-1,p=Math.random()*2-1,y=Math.hypot(x,m,p)||1;x/=y,m/=y,p/=y,m<-.3&&(m=-m*.5);let v=.93+Math.random()*.14;Ic.set(d.x+x*d.sx*v,d.y+m*d.sy*v,d.z+p*d.sz*v),Lc.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),Dc.setFromEuler(Lc);let M=.2+Math.random()*.12;Uc.set(M,M,M),Pc.compose(Ic,Dc,Uc),Si.setMatrixAt(f,Pc);let A=lf[d.i].clone().multiplyScalar(1.15+Math.random()*.45);A0.push(A),Si.setColorAt(f,A),f++}Si.castShadow=Si.receiveShadow=!0,fe.add(Si)}let s=oe("#5a4636");[[-16,-9.5,4.5,2.2],[-16.5,-1,5,2.4],[-8.5,16.5,4.4,2.1],[7.5,16.8,4.6,2.2],[17,6,4.3,2.2],[17,-1.5,4.8,2.3],[-6,-17,5.5,2.6],[3,-17.5,5.8,2.8],[11,-16.5,5,2.4]].forEach(([a,o,l,c])=>{let h=new ce().setHSL(.26+le()*.06,.35+le()*.15,.22+le()*.08);r(a,o,l,c,"#"+h.getHexString())})}var qu={sakura:["#f3a6bd","#f7c2d2","#ec8fac"],sakuraL:["#f8d3de","#f5bfd0","#fbe4ec"],aomomiji:["#8cc24d","#79b03f","#a3d062"],momiji:["#c4412a","#d65a2c","#b8332a"],momijiO:["#e0782e","#d9602c","#e89a3a"],ginkgo:["#e8b92f","#f0c93f","#ddaa25"],umeP:["#e9879f","#f2a5b8","#d96f8c"],umeW:["#fbf7f2","#f3ece6","#ffffff"]},Fc={},ho=n=>Fc[n]||(Fc[n]=oe(n,{r:1})),Um=n=>Fc["e"+n]||(Fc["e"+n]=oe(n,{r:1,extra:{emissive:new ce(n),emissiveIntensity:.22}}));function ki(n,e,t,i,s){let r=n.distanceTo(e),a=new B(new Qe(i,t,r,6),s);return a.position.copy(n).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),e.clone().sub(n).normalize()),a}function CS(n,e){let t=Wc(e),i=new Re,s=n.startsWith("ume"),r=n.startsWith("sakura"),a=n==="ginkgo",o=n==="bare",l=ho(s||r?"#4a3a35":"#5a4636"),c=a?3:s?1.3:2;i.add(ki(new S(0,0,0),new S((t()-.5)*.3,c,(t()-.5)*.3),.27,.16,l));let h=[],u=a?4:6;for(let f=0;f<u;f++){let d=f/u*Math.PI*2+t()*.6,g=(a?1:1.5)+t()*.6,x=(a?1.2:s?.95:.7)+t()*.4,m=new S(0,c*(.78+t()*.2),0),p=new S(Math.cos(d),x,Math.sin(d)).normalize(),y=m.clone().addScaledVector(p,g);if(i.add(ki(m,y,.08,.04,l)),h.push({st:m,en:y}),o||s)for(let v=0;v<2;v++){let M=p.clone().add(new S((t()-.5)*1,.35,(t()-.5)*1)).normalize(),A=y.clone().addScaledVector(M,.5+t()*.45);i.add(ki(y,A,.035,.014,l)),h.push({st:y,en:A})}}if(s){let f=qu[n],d=h.length*9,g=new _s(new ri(.06,0),oe("#ffffff",{r:.8}),d),x=new Ie,m=new ce,p=0;for(let y of h)for(let v=0;v<9;v++){let M=.25+t()*.85,A=y.st.clone().lerp(y.en,Math.min(M,1)).add(new S((t()-.5)*.12,(t()-.5)*.12,(t()-.5)*.12)),_=.8+t()*.6;x.makeScale(_,_,_).setPosition(A),g.setMatrixAt(p,x),m.set(f[p%3]),g.setColorAt(p,m),p++}i.add(g)}else if(a){let f=qu.ginkgo,d=[];for(let g=0;g<5;g++){let x=1.3-g*.2;for(let m=0;m<2;m++){let p=new B(xc,ho(f[(g+m)%3]));p.scale.set(x,x*.85,x),p.position.set((t()-.5)*.6,c*.75+g*.7,(t()-.5)*.6),d.push({x:p.position.x,y:p.position.y,z:p.position.z,sx:x,sy:x*.85,sz:x}),nt.leaves&&p.scale.multiplyScalar(.82),i.add(p)}}nt.leaves&&Nc(i,d,"ginkgo",f,nt.leaves,.3,null,t)}else if(!o){let f=qu[n],d=n==="aomomiji"||n.startsWith("momiji")?.72:.8,g=r?1.05:.95,x=[];for(let p of h)for(let y=0;y<2;y++){let v=g*(.7+t()*.4),M=new B(xc,(r?Um:ho)(f[Math.floor(t()*3)]));M.scale.set(v,v*d,v),M.position.copy(p.en).add(new S((t()-.5)*.7,(t()-.3)*.5,(t()-.5)*.7)),x.push({x:M.position.x,y:M.position.y,z:M.position.z,sx:v,sy:v*d,sz:v}),nt.leaves&&M.scale.multiplyScalar(.8),i.add(M)}let m=new B(xc,(r?Um:ho)(f[0]));if(m.scale.set(1.1,.9*d/.8,1.1),m.position.set(0,c+1.3,0),x.push({x:0,y:c+1.3,z:0,sx:1.1,sy:.9*d/.8,sz:1.1}),nt.leaves&&m.scale.multiplyScalar(.8),i.add(m),nt.leaves){let p=r?"sakura":"maple";Nc(i,x,p,f,Math.round(nt.leaves*(r?1.1:1.25)),r?.32:.27,p==="sakura"?(()=>{let y=Cc("sakura");return y.emissive=new ce("#f7c9d4"),y.emissiveIntensity=.18,y})():null,t)}}return xn(i),i}var R0=[{x:15.4,z:3,s:1.35,k:{spring:"sakura",summer:"aomomiji",autumn:"momiji",winter:"umeP"}},{x:-15.6,z:-5.5,s:1.3,k:{spring:"sakura",summer:"aomomiji",autumn:"ginkgo",winter:"bare"}},{x:-15.3,z:5.5,s:1.3,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momijiO",winter:"umeW"}},{x:15.6,z:10.4,s:1.2,k:{spring:"aomomiji",summer:"aomomiji",autumn:"ginkgo",winter:"bare"}},{x:-12.5,z:14.6,s:1.5,k:{spring:"sakuraL",summer:"aomomiji",autumn:"ginkgo",winter:"umeW"}},{x:-4,z:14.4,s:1.6,k:{spring:"sakura",summer:"aomomiji",autumn:"momiji",winter:"bare"}},{x:4,z:14.6,s:1.55,k:{spring:"sakura",summer:"aomomiji",autumn:"momijiO",winter:"umeP"}},{x:11.5,z:14.8,s:1.5,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momiji",winter:"bare"}},{x:-12,z:-15.8,s:1.4,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momijiO",winter:"umeP"}}];R0.forEach((n,e)=>{n.vars={};let t=le()*6;for(let i of new Set(Object.values(n.k))){let s=CS(i,1e3+e*17+i.length);s.position.set(n.x,0,n.z),s.scale.setScalar(n.s),s.rotation.y=t,s.visible=!1,fe.add(s),n.vars[i]=s}});var Cf=new Re;fe.add(Cf);{let n=oe("#3d6a33",{r:1}),e=ci(new ri(1,1),.3,4),t=ci(new ri(1,1),.22,8),i=[["#6f8fd6","#5d7cc9","#8aa3e0"],["#8f7fd2","#a08ad8","#7b6cc4"],["#d98fb8","#c97aa8","#e6a6c8"]],s=[];for(let r=-2;r<=9.5;r+=1.55)s.push([-12.75,r]);for(let r=-9.5;r<=8.5;r+=2)s.push([r,10.85]);for(let r=-2.5;r<=7;r+=1.7)s.push([12.8,r]);s.forEach(([r,a])=>{let o=new Re,l=i[Math.floor(le()*3)],c=new B(e,n);c.scale.set(.62,.45,.62),c.position.y=.4,o.add(c);for(let h=0;h<6;h++){let u=new B(t,ho(l[h%3])),f=.17+le()*.08;u.scale.set(f,f*.9,f);let d=le()*6.28,g=.22+le()*.28;u.position.set(Math.cos(d)*g,.58+le()*.3,Math.sin(d)*g),o.add(u)}o.position.set(r,0,a),o.rotation.y=le()*6,xn(o),Cf.add(o)})}{let n=new B(M0,Ao);n.position.y=.09,n.receiveShadow=!0,Fs.add(n),os.push(n);let[e,t,i,s]=E0,r=new B(new Et(e,.14,.55),Ao);r.position.set(t,i+.2,s),Fs.add(r),os.push(r)}var Pf=ga?350:600,rr=new Float32Array(Pf*6),C0=[];for(let n=0;n<Pf;n++)C0.push({x:-14+le()*28,y:le()*12,z:-5+le()*17});var Df=new ft;Df.setAttribute("position",new zt(rr,3));var Gn=new Qr(Df,new As({color:"#a9b8be",transparent:!0,opacity:.5}));Gn.frustumCulled=!1;fe.add(Gn);var Lf=ga?450:800,yc=new Float32Array(Lf*3),P0=[];for(let n=0;n<Lf;n++)P0.push({x:-14+le()*28,y:le()*10,z:-5+le()*17,ph:le()*10});var If=new ft;If.setAttribute("position",new zt(yc,3));var mr=$n(32,32,n=>{let e=n.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,32,32)}),Io=new Jr(If,new er({size:.11,map:mr,transparent:!0,depthWrite:!1}));Io.frustumCulled=!1;fe.add(Io);{let n=new Re,e=new Kr([new S(0,0,0),new S(.25,.9,.1),new S(.05,1.7,-.15),new S(.6,2.4,0),new S(.9,2.7,.1)]);n.add(new B(new ja(e,24,.13,8),oe("#5b4434")));let t=oe("#2e4b2e",{r:1}),i=ci(new De(1,14,8),.3,5);[[.9,2.8,.1,.95],[-.3,2,.35,.7],[1.15,1.8,-.25,.65],[.3,3.25,.05,.55],[-.45,2.6,-.3,.5]].forEach(([r,a,o,l])=>{let c=new B(i,t);c.scale.set(l,l*.38,l*.9),c.position.set(r,a,o),n.add(c);let h=new B(i,Ao);h.scale.set(l*.9,l*.2,l*.8),h.position.set(r,a+l*.24,o),n.add(h),os.push(h),nt.leaves&&Nc(n,[{x:r,y:a+l*.05,z:o,sx:l*1.02,sy:l*.36,sz:l*.92}],"needle",["#3a5e34","#2f5030","#4a6d3a"],Math.round(nt.leaves*.18),.3)});{let r=new S(.35,4.6,.05),a=ki(new S(.35,0,.05),r,.045,.035,oe("#b39461"));n.add(a),os.push(a);let o=[];for(let u=0;u<20;u++){let f=u/20*Math.PI*2;o.push(r.x,r.y,r.z,.35+Math.cos(f)*1.75,1.55+Math.sin(u*1.7)*.1,.05+Math.sin(f)*1.6)}let l=new ft;l.setAttribute("position",new Ue(o,3));let c=new Qr(l,new As({color:"#c4a873"}));n.add(c),os.push(c);let h=new B(new xi(.12,.3,8),oe("#b39461"));h.position.copy(r).add(new S(0,.12,0)),n.add(h),os.push(h)}let s=new B(ci(new De(1,16,8),.3,2),_o);s.scale.set(.75,.18,.7),s.position.y=-.03,n.add(s),n.position.set(or.x,0,or.z),n.rotation.y=.6,xn(n),fe.add(n),Os.push({x:or.x,z:or.z,r:.55})}var Ut={on:!1};{let n=new Re,e=oe("#8f8b83",{r:1,flat:!0}),t=(s,r)=>{let a=new B(s,e);return a.position.y=r,n.add(a),a};t(new Qe(.34,.38,.18,6),.09),t(new Qe(.11,.14,.75,8),.55),t(new Qe(.32,.26,.13,6),.98);for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,a=t(new Et(.06,.32,.06),1.2);a.position.x=Math.cos(r)*.17,a.position.z=Math.sin(r)*.17}Ut.glowMat=new dt({color:"#3a332a",emissive:"#ffb85c",emissiveIntensity:0,roughness:1});let i=new B(new Et(.22,.24,.22),Ut.glowMat);i.position.y=1.2,n.add(i),t(new xi(.5,.32,6),1.52),t(new De(.07,8,6),1.73);{let s=new B(new xi(.46,.2,6),Ao);s.position.y=1.63,n.add(s),os.push(s);let r=new B(new Qe(.3,.31,.05,6),Ao);r.position.y=1.07,n.add(r),os.push(r)}Ut.light=new no("#ffb35a",0,7,1.6),Ut.light.position.y=1.2,n.add(Ut.light),Ut.halo=new Ni(new vi({map:null,color:"#ffbf6a",transparent:!0,opacity:0,depthWrite:!1,blending:Ms})),Ut.halo.position.y=1.2,n.add(Ut.halo),n.position.set(en.x,0,en.z),xn(n),i.castShadow=!1,fe.add(n),Os.push({x:en.x,z:en.z,r:.42})}var D0=32,hn={t:Math.random()*20,phase:"fill",angle:.32,pivot:null,pour:null,stream:null},Nm={x:Qt.x,z:Qt.z+.8};{let n=Qt,e=oe("#8d8981",{r:1,flat:!0}),t=oe("#9aa45a",{r:.65}),i=oe("#6f7a3c",{r:.7}),s=new Re;s.position.set(n.x,0,n.z),fe.add(s);let r=new B(ci(new Qe(.42,.5,.5,14),.12,4),e);r.position.y=.25,s.add(r),hn.basinWater=new B(new ts(.29,28),new dt({color:"#2b4547",roughness:.08,metalness:.3,normalMap:go,normalScale:new j(.2,.2)})),hn.basinWater.rotation.x=-Math.PI/2,hn.basinWater.position.y=.505,s.add(hn.basinWater);let a=(y,v,M,A,_)=>{let C=new B(ci(new Qe(y,y*1.1,v,10),.2,_),e);return C.position.set(M,v/2-.03,A),s.add(C),C};a(.34,.12,0,.8,11),a(.22,.22,-.62,.35,12),a(.2,.18,.6,.4,13);let o=new Re;o.position.set(.05,.53,0),o.rotation.y=.5,s.add(o);let l=new B(new Qe(.012,.012,.75,6),oe("#c9b48a"));l.rotation.z=Math.PI/2,o.add(l);let c=new B(new Qe(.06,.055,.08,10,1,!0),oe("#c9b48a",{side:yt}));c.position.set(.36,.03,0),o.add(c);let h=-.3,u=-.02;s.add(ki(new S(h,0,-.85),new S(h,1.25,-.85),.045,.04,t)),s.add(ki(new S(h,1.16,-.88),new S(h,1.13,u),.035,.035,t)),hn.stream=new B(new Qe(.012,.016,.26,6),new dt({color:"#dfeef2",transparent:!0,opacity:.55,roughness:.1})),hn.stream.position.set(h,.99,u),s.add(hn.stream);let f=-.75,d=.72;[[-.11],[.11]].forEach(([y])=>s.add(ki(new S(f,0,y),new S(f,.8,y),.03,.028,i)));let g=new Re;g.position.set(f,d,0),s.add(g),hn.pivot=g;let x=new B(new Qe(.055,.058,.92,12),t);x.rotation.z=Math.PI/2,g.add(x);let m=new B(new ts(.045,12),oe("#2d2a20"));m.position.x=.461,m.rotation.y=Math.PI/2,g.add(m);for(let y of[-.2,.15]){let v=new B(new nr(.058,.008,6,14),i);v.position.x=y,v.rotation.y=Math.PI/2,g.add(v)}hn.pour=new B(new Qe(.014,.02,.22,6),hn.stream.material),hn.pour.visible=!1,s.add(hn.pour);let p=new B(ci(new ri(.28,1),.25,21),e);p.scale.set(1,.95,.9),p.position.set(f-.45,.25,0),s.add(p),xn(s),Os.push({x:n.x,z:n.z,r:.5},{x:n.x-.95,z:n.z,r:.42},{x:n.x+h,z:n.z-.85,r:.15})}function PS(n){let e=hn;if(e.t+=n,e.phase==="fill"){let i=Math.min(1,e.t/D0);e.angle=.32-.24*Math.pow(i,1.6),i>=1&&(e.phase="tip",e.t=0)}else if(e.phase==="tip"){let i=Math.min(1,e.t/.4);e.angle=.08-.66*(1-Math.pow(1-i,3)),i>=1&&(e.phase="pour",e.t=0,YS())}else if(e.phase==="pour")e.angle=-.58+Math.sin(e.t*20)*.01,e.t>.75&&(e.phase="back",e.t=0);else if(e.phase==="back"){let i=Math.min(1,e.t/.22);e.angle=-.58+.98*i*i,i>=1&&(e.phase="bounce",e.t=0,D.ctx&&D.on&&D.ctx.state==="running"&&qS())}else e.phase==="bounce"&&(e.angle=.32+.08*Math.exp(-e.t*9)*Math.cos(e.t*30),e.t>.6&&(e.phase="fill",e.t=0));e.pivot.rotation.z=e.angle;let t=e.phase==="pour";if(e.pour.visible=t,t){let i=-.75+Math.cos(e.angle)*.46,s=.72+Math.sin(e.angle)*.46;e.pour.position.set(i+.03,s-.11,0),Math.random()<.3&&da(Qt.x+i*.5,.51,Qt.z,.18)}}var bt={fish:[],pellets:[],ripples:[],cubeT:-1e9,cubeDirty:!0},zc=(n,e)=>ra.some(([t,i])=>Math.hypot(n-t,e-i)<.42),Yu=(n,e)=>hr(n,e)<.12&&!zc(n,e),go=nt.waterN?pr("assets/water_n.jpg",[.6,.6],!1):null,L0=new Ga(nt.cube),Uf=new ka(.1,120,L0);Uf.position.set(at.x,.08,at.z);fe.add(Uf);{let e=[];for(let u=0;u<96;u++){let f=u/96*Math.PI*2,d=To(f);e.push([at.x+Math.cos(f)*at.rx*d,at.z+Math.sin(f)*at.rz*d])}let t=u=>{let f=new Ya(e.map(([g,x])=>new j(g,-x))),d=new Ql(f,2);return d.rotateX(-Math.PI/2),d.translate(0,u,0),d};bt.water=new B(t(-.07),new dt({color:"#21403d",roughness:.05,metalness:.35,transparent:!0,opacity:.8,envMap:L0.texture,envMapIntensity:1.1,depthWrite:!1,normalMap:go,normalScale:new j(.28,.28)})),bt.water.renderOrder=2,fe.add(bt.water);let i=new B(t(-.55),oe("#33402f",{r:1}));i.receiveShadow=!0,fe.add(i);let s=[];for(let u=0;u<96;u++){let[f,d]=e[u],[g,x]=e[(u+1)%96];s.push(f,0,d,g,0,x,g,-.56,x,f,0,d,g,-.56,x,f,-.56,d)}let r=new ft;r.setAttribute("position",new Ue(s,3)),r.computeVertexNormals();let a=new B(r,oe("#4b4a3b",{r:1,side:yt}));fe.add(a);let o=new Re;fe.add(o);for(let u=0;u<34;u++){let f=u/34*Math.PI*2+(le()-.5)*.08,d=To(f)*(1.02+le()*.05),g=at.x+Math.cos(f)*at.rx*d,x=at.z+Math.sin(f)*at.rz*d;if(Math.hypot(g-ra[0][0],x-ra[0][1])<.45||Math.hypot(g-ra[4][0],x-ra[4][1])<.45)continue;let m=.42+le()*.15,p=new B(ci(new ri(1,1),.3,u+40),new dt({color:new ce(m,m*.99,m*.95),roughness:1,flatShading:!0})),y=.16+le()*.14;p.scale.set(y*1.3,y*.6,y),p.position.set(g,.02,x),p.rotation.y=f,o.add(p)}xn(o,!0,!0);let l=oe("#a39e94",{r:1,flat:!0});ra.forEach(([u,f],d)=>{let g=new B(ci(new Qe(.34,.38,.16,12),.18,60+d),l);g.position.set(u,-.02,f),g.rotation.y=le()*3,g.castShadow=g.receiveShadow=!0,fe.add(g)}),[["#f4f1ea","#d8452c"],["#e88a2a","#f3b552"],["#f4f1ea","#222222"],["#d23a26","#f4f1ea"],["#efd04a","#f7e9a8"],["#f4f1ea","#e06a2a"]].forEach(([u,f],d)=>{let g=new Re,x=oe(u,{r:.5}),m=oe(f,{r:.5}),p=new B(new De(1,14,10),x);p.scale.set(.075,.05,.24),g.add(p);let y=new B(new De(1,10,8),m);y.scale.set(.06,.035,.1),y.position.set(0,.022,.04+le()*.05),g.add(y);let v=new Re;v.position.z=-.22,g.add(v);let M=new B(new De(1,10,6),x);M.scale.set(.08,.012,.075),M.position.z=-.06,v.add(M);for(let N of[-1,1]){let E=new B(new De(1,8,6),x);E.scale.set(.045,.008,.03),E.position.set(N*.075,-.01,.08),E.rotation.y=N*.6,g.add(E)}let A=.8+le()*.45;g.scale.setScalar(A);let _=le()*6.28,C={g,tail:v,x:at.x+Math.cos(_)*.8,z:at.z+Math.sin(_)*.5,h:le()*6.28,tx:at.x,tz:at.z,ph:le()*6,sp:.25+le()*.12};g.position.set(C.x,-.24-d*.015,C.z),fe.add(g),bt.fish.push(C)});let h=new Ka(.85,1,40);h.rotateX(-Math.PI/2);for(let u=0;u<18;u++){let f=new B(h,new Ln({color:"#e8f0ee",transparent:!0,opacity:0,depthWrite:!1}));f.visible=!1,f.renderOrder=3,fe.add(f),bt.ripples.push({m:f,t:0,life:1})}}function da(n,e,t,i=.5){let s=bt.ripples.find(r=>!r.m.visible)||bt.ripples[0];s.m.position.set(n,e+.004,t),s.t=0,s.life=1.2+i,s.size=i,s.m.visible=!0}function Zu(n=.7){for(let e=0;e<20;e++){let t=Math.random()*6.28,i=Math.sqrt(Math.random())*n,s=at.x+Math.cos(t)*at.rx*i,r=at.z+Math.sin(t)*at.rz*i;if(Xc(s,r)<n)return[s,r]}return[at.x,at.z]}function DS(n,e){for(let t of bt.fish){let i=t.tx,s=t.tz,r=!1;if(bt.pellets.length){let u=null,f=1e9;for(let d of bt.pellets){let g=Math.hypot(d.m.position.x-t.x,d.m.position.z-t.z);g<f&&(f=g,u=d)}i=u.m.position.x,s=u.m.position.z,r=!0,f<.12&&(u.dead=!0,da(i,-.07,s,.22),QS())}else Math.hypot(i-t.x,s-t.z)<.3&&([t.tx,t.tz]=Zu());let o=((Math.atan2(i-t.x,s-t.z)-t.h+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;t.h+=gt(o,-1,1)*n*(r?2.6:1.3);let l=t.sp*(r?2.2:1)*(Ge==="winter"?.6:1),c=t.x+Math.sin(t.h)*l*n,h=t.z+Math.cos(t.h)*l*n;Xc(c,h)<.86?(t.x=c,t.z=h):(t.h+=n*2.5,[t.tx,t.tz]=Zu(.5)),t.g.position.x=t.x,t.g.position.z=t.z,t.g.rotation.y=t.h,t.tail.rotation.y=Math.sin(e*(r?14:7)+t.ph)*.45}bt.pellets=bt.pellets.filter(t=>(t.life-=n,t.dead||t.life<=0?(fe.remove(t.m),!1):(t.m.position.y=-.065+Math.sin(e*3+t.ph)*.004,!0))),go&&(go.offset.x+=n*.012,go.offset.y+=n*.007);for(let t of bt.ripples){if(!t.m.visible)continue;t.t+=n;let i=t.t/t.life;if(i>=1){t.m.visible=!1;continue}t.m.scale.setScalar(.05+t.size*i),t.m.material.opacity=.55*(1-i)}if(Gn.visible&&Math.random()<n*7){let[t,i]=Zu(.95);da(t,-.07,i,.25)}}var LS=new De(.025,6,4),IS=oe("#c49a5e");function US(){ct("koi");let n=qe.position,e=qe.rotation.y,t=n.x+Math.sin(e)*.8,i=n.z+Math.cos(e)*.8;for(let s=0;s<20&&hr(t,i)>-.25;s++)t+=(at.x-t)*.15,i+=(at.z-i)*.15;for(let s=0;s<6;s++){let r=t+(Math.random()-.5)*.5,a=i+(Math.random()-.5)*.4;if(Xc(r,a)>.9)continue;let o=new B(LS,IS);o.position.set(r,-.065,a),fe.add(o),bt.pellets.push({m:o,life:30,ph:Math.random()*6}),setTimeout(()=>da(r,-.07,a,.15),s*90)}if(D.ctx&&D.on){let s=D.ctx.currentTime;for(let r=0;r<4;r++)_i(900+Math.random()*500,300,s+r*.08,.06,.02,"sine",.3)}_t("\u6492\u4E0B\u4E00\u9EDE\u98FC\u6599\u3002")}function NS(){ct("wash"),Gc=Math.atan2(Qt.x-qe.position.x,Qt.z-qe.position.z),Qc("wash"),da(Qt.x,.51,Qt.z,.25),setTimeout(()=>da(Qt.x+.08,.51,Qt.z-.05,.2),300),ZS(),_t(Ge==="winter"?"\u6C34\u5F88\u51B0\uFF0C\u5FC3\u4E5F\u9192\u4E86\u3002":Ge==="summer"?"\u6DBC\u6DBC\u7684\uFF0C\u597D\u8212\u670D\u3002":"\u6E05\u6C34\u6D41\u904E\u6307\u5C16\u3002",2800)}function FS(n){let e=performance.now();if(!n&&!bt.cubeDirty&&e-bt.cubeT<2e4)return;bt.cubeDirty=!1,bt.cubeT=e,bt.water.visible=!1;let t=bt.fish.map(i=>i.g.visible);bt.fish.forEach(i=>i.g.visible=!1),Uf.update(Vn,fe),bt.water.visible=!0,bt.fish.forEach((i,s)=>i.g.visible=t[s])}var qe=new Re,Tn=new Re;qe.add(Tn);fe.add(qe);var q={arms:[],petals:[],anim:null,animT:0,idleT:0,breathT:0,petalT:20,stepIdx:0};{let n=oe("#f0d6b8",{r:.8}),e=oe("#c8a464",{r:.95});q.robeM=new dt({color:"#3f4f6e",roughness:.9}),q.obiM=oe("#93402d"),q.yukata=$n(256,256,(p,y,v)=>{p.fillStyle="#2c4a78",p.fillRect(0,0,y,v),p.strokeStyle="rgba(240,244,250,.75)",p.lineWidth=2.5;for(let M=0;M<v;M+=32)for(let A=M/32%2?16:0;A<y;A+=32)p.beginPath(),p.arc(A,M,10,0,Math.PI*2),p.stroke(),p.beginPath(),p.moveTo(A-10,M),p.lineTo(A+10,M),p.moveTo(A,M-10),p.lineTo(A,M+10),p.stroke()},[2,1.5]);let t=(p,y,v,M,A,_=Tn)=>{let C=new B(p,y);return C.position.set(v,M,A),_.add(C),C};q.body=t(new Qe(.17,.28,.5,16),q.robeM,0,.32,0),t(new Qe(.205,.215,.065,16),q.obiM,0,.43,0);for(let p of[-1,1]){let y=t(new Et(.03,.16,.012),oe("#f2ede2"),p*.045,.52,.168);y.rotation.z=p*.5,y.rotation.x=-.25}q.head=new Re,q.head.position.set(0,.74,0),Tn.add(q.head),t(new De(.2,22,16),n,0,0,0,q.head);let i=new De(.022,8,6),s=oe("#1d1a17",{r:.4});t(i,s,.07,.02,.18,q.head),t(i,s,-.07,.02,.18,q.head);let r=new De(.03,8,6),a=oe("#e9a597");t(r,a,.115,-.04,.15,q.head),t(r,a,-.115,-.04,.15,q.head),q.hat=t(new xi(.38,.2,24),e,0,.21,0,q.head);for(let p of[1,-1]){let y=new Re;y.position.set(p*.2,.5,.02),Tn.add(y),t(new De(1,12,10),q.robeM,0,-.08,0,y).scale.set(.078,.13,.08);let M=t(new De(.035,10,8),n,0,-.2,.02,y);y.userData.hand=M,q.arms.push(y)}let o=new De(.06,8,6),l=oe("#2b2622");q.feet=[t(o,l,.09,.04,.06),t(o,l,-.09,.04,.06)],q.feet.forEach(p=>p.scale.set(1,.6,1.4)),q.legs=new Re,Tn.add(q.legs);for(let p of[-1,1]){let y=t(new De(1,14,10),q.robeM,p*.07,.06,.13,q.legs);y.scale.set(.17,.065,.08),y.rotation.y=p*.45}q.legs.visible=!1,q.scarf=new Re,Tn.add(q.scarf);let c=oe("#a8382c",{r:.95}),h=t(new nr(.135,.04,8,20),c,0,.575,0,q.scarf);h.rotation.x=Math.PI/2,h.scale.set(1,1,.8);let u=t(new Et(.07,.2,.03),c,.08,.47,.15,q.scarf);u.rotation.z=.15,q.scarfTail=u,q.fan=new Re,q.arms[0].userData.hand.add(q.fan),t(new Qe(.009,.009,.14,6),oe("#c9b48a"),0,-.06,.02,q.fan);let f=$n(128,128,(p,y,v)=>{p.fillStyle="#f4efe2",p.beginPath(),p.arc(64,64,62,0,7),p.fill(),p.fillStyle="#d8573a",p.beginPath(),p.arc(78,52,18,0,7),p.fill(),p.strokeStyle="#5d7fb0",p.lineWidth=4;for(let M=0;M<3;M++)p.beginPath(),p.arc(64,100+M*7,40,Math.PI*1.15,Math.PI*1.85),p.stroke()}),d=t(new ts(.14,24),new dt({map:f,side:yt,roughness:.9}),0,-.24,.03,q.fan);d.rotation.y=Math.PI/2+.5,q.fan.visible=!1,q.umb=new Re,q.umb.position.set(.13,.42,.1),Tn.add(q.umb),t(new Qe(.012,.012,1.05,6),oe("#5a3f2c"),0,.48,0,q.umb);let g=$n(256,64,(p,y,v)=>{p.fillStyle="#c79a52",p.fillRect(0,0,y,v),p.strokeStyle="rgba(90,60,30,.6)",p.lineWidth=2;for(let M=0;M<24;M++)p.beginPath(),p.moveTo(M*y/24,0),p.lineTo(M*y/24,v),p.stroke();p.fillStyle="rgba(160,50,40,.8)",p.fillRect(0,v-12,y,7)}),x=t(new xi(.6,.24,24,1,!0),new dt({map:g,side:yt,roughness:.6}),0,.98,0,q.umb);t(new De(.03,8,6),oe("#3a2a20"),0,1.1,0,q.umb),q.umb.visible=!1,q.umbK=0,q.lan=new Re,q.lan.position.set(-.22,.24,.24),Tn.add(q.lan),t(new Qe(.004,.004,.12,4),oe("#2b2622"),0,.06,0,q.lan),q.lanM=new dt({color:"#f3e6c8",emissive:new ce("#ffb35a"),emissiveIntensity:1.2,roughness:.8}),t(new De(1,14,10),q.lanM,0,-.06,0,q.lan).scale.set(.065,.09,.065);for(let p of[.03,-.15])t(new Qe(.035,.035,.02,10),oe("#1d1a17"),0,p,0,q.lan);q.lanLight=new no("#ffb35a",0,3.8,1.5),q.lanLight.position.set(-.22,.18,.24),Tn.add(q.lanLight),q.lan.visible=!1,q.fog=[];for(let p=0;p<4;p++){let y=new Ni(new vi({map:null,color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));y.visible=!1,fe.add(y),q.fog.push({sp:y,t:9})}}function zS(n){let e={spring:["#efe2e6","#b65a6a"],summer:["#ffffff","#d9a54a"],autumn:["#b9592c","#3a302a"],winter:["#3f4f6e","#93402d"]}[n];q.robeM.color.set(e[0]),q.robeM.map=n==="summer"?q.yukata:null,q.robeM.needsUpdate=!0,q.obiM.color.set(e[1]),q.scarf.visible=n==="winter",n!=="spring"&&(q.petals.forEach(t=>q.hat.parent.remove(t)),q.petals.length=0)}function Qc(n){q.anim=n,q.animT=0,q.idleT=0}var Cs=new Re;Tn.add(Cs);{let n=oe("#a27b50",{r:.8}),e=new S(.21,.42,.06),t=new S(0,.07,-.75),i=e.distanceTo(t),s=new B(new Qe(.018,.018,i,6),n);s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new S(0,1,0),e.clone().sub(t).normalize()),Cs.add(s);let r=new B(new Et(.95,.05,.06),n);r.position.copy(t),Cs.add(r);for(let a=-2;a<=2;a++){let o=new B(new Et(.025,.08,.025),n);o.position.set(a*mo,.02,-.75),Cs.add(o)}Cs.visible=!1}xn(qe,!0,!1);qe.position.set(.5,0,5.2);qe.rotation.y=Math.PI;var Nf=[];{let n=new un(.15,.1);for(let e=0;e<32;e++){let t=new B(n,new dt({color:"#ffffff",side:yt,roughness:.9}));fe.add(t);let i={m:t,ph:le()*10,rest:0};Ff(i,!0),Nf.push(i)}}function Ff(n,e){n.m.position.set(-10+le()*22,e?le()*7:5+le()*2.5,-3.2+le()*13),n.m.rotation.set(le()*6,le()*6,le()*6),n.rest=0}var Bc=(n,e)=>[(n-we.x0)*mn,(e-we.z0)*mn],uo=(n,e)=>n>we.x0+.05&&n<we.x1-.05&&e>we.z0+.05&&e<we.z1-.05;function BS(n,e,t,i){let[s,r]=Bc(n,e),[a,o]=Bc(t,i),l=a-s,c=o-r,h=Math.hypot(l,c);if(h<.5)return;let u=l/h,f=c/h,d=-f,g=u;s-=u*3,r-=f*3;let x=Us,m=mo*mn;x.save(),x.lineCap="butt",x.strokeStyle=pS,x.lineWidth=m*5.3,x.beginPath(),x.moveTo(s,r),x.lineTo(a,o),x.stroke();for(let p=-2;p<=2;p++){let y=p*m+(Math.random()-.5)*.5;x.strokeStyle="rgba(118,112,102,0.45)",x.lineWidth=m*.38,x.beginPath(),x.moveTo(s+d*y,r+g*y),x.lineTo(a+d*y,o+g*y),x.stroke();let v=y+m*.36;x.strokeStyle="rgba(255,255,255,0.42)",x.lineWidth=m*.2,x.beginPath(),x.moveTo(s+d*v,r+g*v),x.lineTo(a+d*v,o+g*v),x.stroke()}x.restore(),Ns=!0,tn(!0)}function OS(n,e,t,i){let[s,r]=Bc(n+Math.cos(t)*.09*i,e-Math.sin(t)*.09*i),a=Us;a.save(),a.translate(s,r),a.rotate(Math.atan2(Math.cos(t),Math.sin(t))),a.fillStyle="rgba(105,99,90,0.2)",a.beginPath(),a.ellipse(0,0,.11*mn,.06*mn,0,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.18)",a.beginPath(),a.ellipse(.01*mn,.035*mn,.09*mn,.025*mn,0,0,Math.PI*2),a.fill(),a.restore(),Ns=!0,tn(!0)}var Oi={};addEventListener("keydown",n=>{Oi[n.code]=!0,n.code==="KeyR"&&N0(),(n.code==="KeyE"||n.code==="Space")&&(n.preventDefault(),z0())});addEventListener("keyup",n=>{Oi[n.code]=!1});var gn={id:null,ox:0,oy:0,x:0,y:0};var wi=U("joy"),I0=U("knob"),pa=U("c");ga&&wi.classList.remove("hidden");var lo=50;function HS(){wi.style.left="34px",wi.style.top="",wi.style.bottom="34px",I0.style.transform="",wi.classList.remove("active")}pa.addEventListener("pointerdown",n=>{try{pa.setPointerCapture(n.pointerId)}catch{}if(No(),Te.on){mT(n);return}if(K.on&&K.stage==="whisk"){K.down=n.pointerId,K.lx=n.clientX,K.ly=n.clientY;return}if(n.pointerType!=="mouse"&&n.clientX<innerWidth*.5&&gn.id===null)gn.id=n.pointerId,gn.ox=n.clientX,gn.oy=n.clientY,gn.x=gn.y=0,wi.style.left=n.clientX-60+"px",wi.style.top=n.clientY-60+"px",wi.style.bottom="auto",wi.classList.add("active");else if(Ps.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ps.size===2){let[e,t]=[...Ps.values()];oa.d0=Math.hypot(e.x-t.x,e.y-t.y)||1,oa.v0=ot.on?ot.fov:hi}});pa.addEventListener("pointermove",n=>{if(Te.on){gT(n);return}if(K.on&&K.down===n.pointerId){FT(n);return}if(n.pointerId===gn.id){let e=n.clientX-gn.ox,t=n.clientY-gn.oy,i=Math.hypot(e,t);i>lo&&(e*=lo/i,t*=lo/i),gn.x=e/lo,gn.y=-t/lo,I0.style.transform=`translate(${e}px,${t}px)`}else if(Ps.has(n.pointerId)){let e=Ps.get(n.pointerId),t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,Ps.size>=2){let[s,r]=[...Ps.values()],a=Math.hypot(s.x-r.x,s.y-r.y)||1;ot.on?ot.fov=gt(oa.v0*oa.d0/a,18,75):hi=gt(oa.v0*oa.d0/a,2.6,16)}else ot.on?(ot.yaw-=t*.005,ot.pitch=gt(ot.pitch+i*.004,-.15,1.45)):(Ds-=t*.006,yo=gt(yo+i*.004,.02,1.25))}});function U0(n){if(Te.on){vT(n);return}if(K.down===n.pointerId){K.down=null;return}n.pointerId===gn.id&&(gn.id=null,gn.x=gn.y=0,HS()),Ps.delete(n.pointerId)}pa.addEventListener("pointerup",U0);pa.addEventListener("pointercancel",U0);pa.addEventListener("wheel",n=>{if(n.preventDefault(),Te.on){Te.cam.h=gt(Te.cam.h+n.deltaY*.02,10,40);return}if(ot.on){ot.fov=gt(ot.fov+n.deltaY*.03,18,75);return}hi=gt(hi*(1+n.deltaY*.001),2.6,16)},{passive:!1});var Ps=new Map,oa={d0:1,v0:10},On=!1,ht=!1,Ei=null,Fm=0;function _t(n,e=2600){let t=U("toast");t.textContent=n,t.classList.add("show"),clearTimeout(Fm),Fm=setTimeout(()=>t.classList.remove("show"),e)}function N0(){ht||(On=!On,Cs.visible=On,U("rakeBtn").classList.toggle("on",On),_t(On?"\u62D6\u8457\u8019\u5B50\u6162\u6162\u8D70\uFF0C\u8EAB\u5F8C\u6703\u7559\u4E0B\u6C99\u7D0B":"\u653E\u4E0B\u8019\u5B50"))}U("rakeBtn").onclick=N0;U("resetBtn").onclick=()=>{Us.drawImage(qc,0,0),Ns=!0,tn(!0),_t("\u767D\u7802\u56DE\u5230\u6700\u521D\u7684\u6A23\u5B50")};var F0={spring:["\u82B1\u958B\u4E86\uFF0C\u4E5F\u6703\u843D\u3002","\u82B1\u671F\u5F88\u77ED\uFF0C\u6240\u4EE5\u6162\u6162\u770B\u3002","\u98A8\u4E00\u5439\uFF0C\u4E0B\u8D77\u7C89\u7D05\u8272\u7684\u96EA\u3002","\u4EC0\u9EBC\u90FD\u4E0D\u7528\u505A\u3002"],summer:["\u96E8\u843D\u5728\u9752\u6953\u4E0A\u3002","\u7E61\u7403\u82B1\u5728\u96E8\u88E1\u6700\u597D\u770B\u3002","\u807D\u96E8\u3002","\u6FD5\u6FD5\u7684\uFF0C\u4E5F\u5F88\u597D\u3002"],autumn:["\u98A8\u5F88\u8F15\u3002","\u8449\u5B50\u7D05\u4E86\uFF0C\u4E0D\u6025\u8457\u6389\u3002","\u77F3\u982D\u5728\u9019\u88E1\uFF0C\u5DF2\u7D93\u5F88\u4E45\u4E86\u3002","\u6C99\u7D0B\u4E82\u4E86\uFF0C\u518D\u8019\u5C31\u597D\u3002"],winter:["\u96EA\u843D\u5728\u677E\u4E0A\uFF0C\u6C92\u6709\u8072\u97F3\u3002","\u6885\u82B1\u5148\u958B\u4E86\u3002","\u51B7\uFF0C\u4F46\u5F88\u4E7E\u6DE8\u3002","\u807D\uFF0C\u6C92\u6709\u8072\u97F3\u7684\u8072\u97F3\u3002"]};function z0(){Ei==="lantern"?(Ut.on=!Ut.on,_t(Ut.on?"\u71C8\u4EAE\u4E86":"\u71C8\u7184\u4E86")):Ei==="sit"?B0():Ei==="stand"?Uo():Ei==="wash"?NS():Ei==="feed"?US():Ei==="cat"?bT():Ei==="kuji"?UT():Ei==="wish"&&$c("\u5BEB\u4E00\u500B\u9858\u671B","\u639B\u5728\u7AF9\u5B50\u4E0A",16,"\u639B\u4E0A\u53BB",LT)}U("ctxBtn").onclick=z0;function B0(){ht=!0,On=!1,Cs.visible=!1,U("rakeBtn").classList.remove("on");let n=_n/8,e=gt(Math.round((qe.position.x-bn)/n-.5),0,7);Oc.set(bn+(e+.5)*n,.75,-5.3),Gc=0;let t=U("poem"),i=F0[Ge];t.textContent=i[Math.floor(Math.random()*i.length)],setTimeout(()=>t.classList.add("show"),900),ma(),Hs("choices"),wi.style.opacity="0",zf=performance.now(),document.body.classList.add("sitting")}var zf=0;function Uo(){ht&&performance.now()-zf>8e3&&setTimeout(TT,700),ht=!1,document.body.classList.remove("sitting"),U("poem").classList.remove("show"),It.mode&&qf(),K.on&&ag(),U("listenOverlay").classList.contains("show")&&K0(),Hs(null),wi.style.opacity=""}var Oc=new S;U("helpBtn").onclick=()=>{U("intro").classList.remove("fade")};U("how").innerHTML=(ga?["\u5DE6\u534A\u908A\u62D6\u66F3\u8D70\u8DEF\uFF0C\u53F3\u534A\u908A\u62D6\u66F3\u8F49\u8996\u89D2","\u300C\u8019\u6C99\u300D\u7559\u4E0B\u7D0B\u8DEF\uFF0C\u4E5F\u80FD\u6383\u6389\u843D\u8449","\u300C\u9020\u5EAD\u300D\uFF1A\u81EA\u5DF1\u64FA\u653E\u77F3\u982D","\u8D70\u8FD1\u7DE3\u5074\u3001\u71C8\u7C60\u3001\u624B\u6C34\u7F3D\u3001\u6C60\u908A\uFF0C\u53F3\u4E0B\u6703\u51FA\u73FE\u80FD\u505A\u7684\u4E8B","\u7DE3\u5074\u5DE6\u908A\u6709\u7C64\u7BB1\uFF0C\u6BCF\u5929\u53EF\u4EE5\u62BD\u4E00\u5F35","\u5B63\u7BC0\u8DDF\u8457\u65E5\u671F\uFF0C\u5149\u7DDA\u8DDF\u8457\u6642\u9593","\u53F3\u4E0A\u300C\u97F3\u300D\uFF1A\u97F3\u91CF\u8207\u7761\u524D\u6A21\u5F0F\u30FB\u5EFA\u8B70\u6234\u8033\u6A5F"]:["WASD\uFF0F\u65B9\u5411\u9375\u8D70\u8DEF\uFF0C\u6ED1\u9F20\u62D6\u66F3\u8F49\u8996\u89D2","R \u8019\u6C99\uFF08\u4E5F\u80FD\u6383\u843D\u8449\uFF09\u30FBE\uFF0F\u7A7A\u767D\u9375\uFF1A\u4E92\u52D5","\u300C\u9020\u5EAD\u300D\uFF1A\u81EA\u5DF1\u64FA\u653E\u77F3\u982D","\u8D70\u8FD1\u7DE3\u5074\u3001\u71C8\u7C60\u3001\u624B\u6C34\u7F3D\u3001\u6C60\u908A\uFF0C\u53F3\u4E0B\u6703\u51FA\u73FE\u80FD\u505A\u7684\u4E8B","\u5B63\u7BC0\u8DDF\u8457\u65E5\u671F\uFF0C\u5149\u7DDA\u8DDF\u8457\u6642\u9593\uFF081\uFF5E4\u3001T \u53EF\u5207\u63DB\uFF09","\u53F3\u4E0A\u300C\u97F3\u300D\uFF1A\u97F3\u91CF\u8207\u7761\u524D\u6A21\u5F0F\u30FB\u5EFA\u8B70\u6234\u8033\u6A5F"]).map(n=>`<li>${n}</li>`).join("");var zm=!1;U("startBtn").onclick=()=>{U("intro").classList.add("fade"),D.on&&gr(),!zm&&(zm=!0,setTimeout(()=>Qc("bow"),700),setTimeout(()=>cg(!0),900))};function ns(n){if(n===Ei)return;Ei=n;let e=U("ctxBtn");if(!n){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent={sit:"\u5750\u4E0B",stand:"\u8D77\u8EAB",kuji:"\u62BD\u7C64",wish:"\u5BEB\u9858\u671B",wash:"\u6D17\u624B",feed:"\u9935\u9B5A",cat:"\u6478\u6478\u8C93"}[n]||(Ut.on?"\u7184\u71C8":"\u9EDE\u71C8")}var Ro={spring:{name:"\u6625",title:"\u6625\u30FB\u6AFB\u82B1",text:"\u82B1\u671F\u77ED\u66AB\u537B\u6975\u81F4\u7D62\u721B\uFF0C\u8C61\u5FB5\u751F\u547D\u7684\u7121\u5E38\u3001\u9752\u6625\u8207\u65B0\u7684\u958B\u59CB\u3002",sky:"#e9e5e7",fog:[32,80],hemi:["#f4f1f4",1.2],sun:["#fff2e6",1.85],ground:"#7b8659",moss:["#6b8a40","#5a7a36"],gravel:"#ffffff",rough:.96,leaves:{cols:["#f6c3d0","#f9dbe3","#f2aec0","#ffffff"],size:.7,speed:.28,sway:.7}},summer:{name:"\u590F",title:"\u590F\u30FB\u7E61\u7403\u82B1\uFF0F\u9752\u6953",text:"\u6885\u96E8\u4E2D\u7DBB\u653E\u7684\u7E61\u7403\u82B1\uFF0C\u548C\u5145\u6EFF\u751F\u547D\u529B\u7684\u65B0\u7DA0\u6953\u8449\u3002",sky:"#cdd8d5",fog:[20,60],hemi:["#e3ecea",1.3],sun:["#f4f6f2",.85],ground:"#5e7547",moss:["#4f7a35","#40692c"],gravel:"#d9d9d5",rough:.75,leaves:null,rain:!0},autumn:{name:"\u79CB",title:"\u79CB\u30FB\u7D05\u8449\uFF0F\u9280\u674F",text:"\u6953\u8449\u8F49\u7D05\u3001\u9280\u674F\u67D3\u9EC3\uFF0C\u7D05\u9EC3\u4EA4\u7E54\u7684\u300C\u7D05\u8449\u72E9\u300D\u3002",sky:"#dde4e2",fog:[30,75],hemi:["#eef3f6",1.15],sun:["#ffe9cf",1.9],ground:"#7a7553",moss:["#62783a","#516a33"],gravel:"#ffffff",rough:.96,leaves:{cols:["#c4482b","#d6702c","#e3a23a","#b8392a","#e8bd34"],size:1,speed:.38,sway:.45}},winter:{name:"\u51AC",title:"\u51AC\u30FB\u677E\uFF0F\u6885",text:"\u5E38\u9752\u7684\u677E\u62AB\u4E0A\u96EA\u540A\uFF0C\u6885\u82B1\u5728\u5BD2\u51AC\u5C3E\u8072\u7387\u5148\u7DBB\u653E\uFF0C\u8C61\u5FB5\u5831\u6625\u3002",sky:"#e5eaee",fog:[24,65],hemi:["#f2f5f9",1.5],sun:["#eef3ff",1.6],ground:"#e3e7e9",moss:["#d6ddd8","#c9d3cc"],gravel:"#f7f9fb",rough:.96,leaves:null,snow:!0}},Ge="autumn",ss=null,Qu=new ce("#eef2f5");function Bf(n){Ge=n;let e=Ro[n];if(R0.forEach(i=>{for(let s in i.vars)i.vars[s].visible=s===i.k[n]}),Cf.visible=n==="summer",os.forEach(i=>i.visible=n==="winter"),fe.fog.near=e.fog[0],fe.fog.far=e.fog[1],as.material.color.set(e.ground),_o.color.set(e.moss[0]),wf.color.set(e.moss[1]),Yc.forEach((i,s)=>i.color.copy(_o.color).multiplyScalar(1+.07*(s+1))),Cm){let i=n==="winter";as.material.map=i?null:Cm,as.material.normalMap=i?null:mS,i||as.material.color.set({spring:"#d4dcbc",summer:"#b9c8a2",autumn:"#d0c7a2"}[n]),as.material.needsUpdate=!0}fa.material.color.set(e.gravel),fa.material.roughness=e.rough;let t=new ce;lf.forEach((i,s)=>{t.copy(i),Si&&t.multiplyScalar(.7),n==="winter"?t.lerp(Qu,.5):n==="summer"?t.offsetHSL(0,.06,-.02):n==="spring"&&t.offsetHSL(.01,0,.03),cf.setColorAt(s,t)}),cf.instanceColor.needsUpdate=!0,Si&&(A0.forEach((i,s)=>{t.copy(i),n==="winter"?t.lerp(Qu,.55):n==="summer"?t.offsetHSL(0,.06,-.02):n==="spring"&&t.offsetHSL(.01,.02,.04),Si.setColorAt(s,t)}),Si.instanceColor.needsUpdate=!0),hf.forEach(({mat:i,base:s})=>{i.color.copy(s),n==="winter"?i.color.lerp(Qu,.42):n==="spring"&&i.color.offsetHSL(.01,0,.03)}),ss=e.leaves,Nf.forEach((i,s)=>{i.m.visible=!!ss,ss&&(i.m.material.color.set(ss.cols[s%ss.cols.length]),i.m.scale.setScalar(ss.size),Ff(i,!0))}),Gn.visible=!!e.rain,Io.visible=!!e.snow,zS(n),window.__lightReady&&hs(),typeof bt<"u"&&(bt.cubeDirty=!0),D.ctx&&fr(),document.querySelectorAll("#seasons button").forEach(i=>i.classList.toggle("on",i.dataset.s===n))}var Hc=0;function uf(){let n=Ro[Ge];U("scTitle").textContent=n.title,U("scText").textContent=n.text;let e=U("seasonCard");e.classList.add("show"),clearTimeout(Hc),Hc=setTimeout(()=>e.classList.remove("show"),4500)}function Of(n){if(n===Ge)return uf();let e=U("fade");e.classList.add("on"),setTimeout(()=>{if(Bf(n),ht){let t=F0[n];U("poem").textContent=t[Math.floor(Math.random()*t.length)]}e.classList.remove("on"),uf()},380)}document.querySelectorAll("#seasons button").forEach(n=>n.onclick=()=>Of(n.dataset.s));addEventListener("keydown",n=>{let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);e>=0&&Of(["spring","summer","autumn","winter"][e])});{let n=new Date().getMonth()+1;Bf(n>=3&&n<=5?"spring":n>=6&&n<=8?"summer":n>=9&&n<=11?"autumn":"winter")}var kS=[0,1,5,7,8],Jc={spring:{density:.8,bell:.2,gap:[2.6,5.2],wind:.015,rain:0},summer:{density:.6,bell:.3,gap:[3.2,6.5],wind:0,rain:.075},autumn:{density:.7,bell:.35,gap:[3,6],wind:.04,rain:0},winter:{density:.5,bell:.6,gap:[4.5,8.5],wind:.06,rain:0}};function GS(n,e,t){let i=Math.floor(n.sampleRate*e),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){let a=s.getChannelData(r);for(let o=0;o<i;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/i,t)}return s}function wn(n,e,t="amb"){let i=D.bus[t];n.connect(i.dry);let s=D.ctx.createGain();s.gain.value=e,n.connect(s),s.connect(i.wet)}var Hf=1.6,VS=n=>Math.pow(n/100,1.6)*1.35;function kf(){if(!D.ctx)return;let n=D.ctx.currentTime;for(let[e,t]of[["mus",cs.music],["amb",cs.amb]]){let i=VS(t);D.bus[e].dry.gain.setTargetAtTime(i,n,.1),D.bus[e].wet.gain.setTargetAtTime(i,n,.1)}}function gr(){if(D.ctx){D.on&&D.ctx.state==="suspended"&&D.ctx.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;let e;try{e=new n}catch{return}D.ctx=e;let t=e.createGain();t.gain.value=0;let i=e.createDynamicsCompressor();i.threshold.value=-18,i.ratio.value=3,t.connect(i),i.connect(e.destination),D.master=t,D.verb=e.createConvolver(),D.verb.buffer=GS(e,4.8,2.4);let s=e.createGain();s.gain.value=.6,D.verb.connect(s),s.connect(t),D.dry=e.createGain(),D.dry.gain.value=.75,D.dry.connect(t),D.bus={};for(let l of["mus","amb"]){let c=e.createGain(),h=e.createGain();c.connect(D.dry),h.connect(D.verb),D.bus[l]={dry:c,wet:h}}kf();let r=e.createBuffer(1,e.sampleRate*3,e.sampleRate),a=r.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;D.noiseBuf=r;let o=()=>{let l=e.createBufferSource();return l.buffer=r,l.loop=!0,l.start(0,Math.random()*2),l};{let l=e.createGain();l.gain.value=.055,D.drone=l;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.4,c.connect(l),wn(l,.65,"mus"),[[73.42,"sine",.5],[73.62,"sine",.35],[110,"sine",.3],[146.83,"triangle",.1]].forEach(([g,x,m])=>{let p=e.createOscillator();p.type=x,p.frequency.value=g;let y=e.createGain();y.gain.value=m,p.connect(y),y.connect(c),p.start()});let h=e.createOscillator();h.frequency.value=.045;let u=e.createGain();u.gain.value=220,h.connect(u),u.connect(c.frequency),h.start();let f=e.createOscillator();f.frequency.value=.029;let d=e.createGain();d.gain.value=.022,f.connect(d),d.connect(l.gain),f.start()}{let l=o(),c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=380,c.Q.value=.7;let h=e.createOscillator();h.frequency.value=.07;let u=e.createGain();u.gain.value=180,h.connect(u),u.connect(c.frequency),h.start(),D.wind=e.createGain(),D.wind.gain.value=0,l.connect(c),c.connect(D.wind),wn(D.wind,.3)}{let l=o(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=900;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=5500,D.rain=e.createGain(),D.rain.gain.value=0,l.connect(c),c.connect(h),h.connect(D.rain),wn(D.rain,.25)}{let l=o(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=2200;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=4800,h.Q.value=.5;let u=e.createOscillator();u.frequency.value=7;let f=e.createGain();f.gain.value=1800,u.connect(f),f.connect(h.frequency),u.start(),D.rustle=e.createGain(),D.rustle.gain.value=0,l.connect(c),c.connect(h),h.connect(D.rustle),wn(D.rustle,.25)}{let l=o(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2300,c.Q.value=.8;let h=e.createOscillator();h.frequency.value=5.5;let u=e.createGain();u.gain.value=600,h.connect(u),u.connect(c.frequency),h.start(),D.trickle=e.createGain(),D.trickle.gain.value=0,l.connect(c),c.connect(D.trickle),wn(D.trickle,.35)}{let l=o(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2600,c.Q.value=.9;let h=e.createOscillator();h.frequency.value=3.2;let u=e.createGain();u.gain.value=700,h.connect(u),u.connect(c.frequency),h.start(),D.rake=e.createGain(),D.rake.gain.value=0,l.connect(c),c.connect(D.rake),wn(D.rake,.15),D.rakeOn=!1}fr(),D.on&&t.gain.linearRampToValueAtTime(Hf,e.currentTime+4),k0(),W0()}function fr(){if(!D.ctx)return;let n=Jc[Ge],e=D.ctx.currentTime;D.wind.gain.setTargetAtTime(n.wind,e,1.5),D.rain.gain.setTargetAtTime(Gn.visible?n.rain:0,e,1.5)}var vn={active:!1,set:new Set,timers:[]};function fs(n){vn.active&&vn.set.add(n)}function O0(n,e,t=1){let i=D.ctx,s=i.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.15*t,e+.006),s.gain.exponentialRampToValueAtTime(6e-4,e+3.3);let r=i.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(n*7,e),r.frequency.exponentialRampToValueAtTime(n*1.6,e+1.1);let a=i.createOscillator();a.type="triangle",a.frequency.setValueAtTime(n*1.008,e),a.frequency.exponentialRampToValueAtTime(n,e+.09);let o=i.createOscillator();o.type="sine",o.frequency.value=n*2.003;let l=i.createGain();l.gain.value=.22,a.connect(r),o.connect(l),l.connect(r),r.connect(s),wn(s,.5,"mus"),a.start(e),o.start(e),a.stop(e+3.5),o.stop(e+3.5),fs("\u53E4\u7B8F")}function ff(n,e,t=1,i=6,s="\u9418\u8072"){fs(s);let r=D.ctx,a=r.createGain();a.gain.value=t*.09,wn(a,.75,"mus"),[[1,1,1],[1.003,.6,1],[2.76,.4,.55],[5.4,.16,.35],[8.93,.07,.22]].forEach(([o,l,c])=>{let h=r.createOscillator();h.type="sine",h.frequency.value=n*o;let u=r.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+.01),u.gain.exponentialRampToValueAtTime(4e-4,e+i*c),h.connect(u),u.connect(a),h.start(e),h.stop(e+i*c+.1)})}function ma(){if(!D.ctx||!D.on)return;let n=D.ctx.currentTime+.05;ff(146.83,n,1.6,11,"\u980C\u7F3D"),ff(220.2,n+.02,.5,9,"\u980C\u7F3D")}var Ju=3,H0=n=>{let e=Math.floor(n/5),t=(n%5+5)%5;return 293.66*Math.pow(2,(kS[t]+12*e)/12)};function k0(){let n=Jc[Ge];if(D.ctx&&D.on&&D.ctx.state==="running"&&Math.random()<n.density){let e=D.ctx.currentTime+.05,t=1+Math.floor(Math.random()*3);for(let i=0;i<t;i++){Ju=gt(Ju+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)],-2,8);let s=H0(Ju);Math.random()<n.bell?ff(s,e,.7,5.5):O0(s,e,.75+Math.random()*.35),e+=.4+Math.random()*.8}}setTimeout(k0,(n.gap[0]+Math.random()*(n.gap[1]-n.gap[0]))*1e3*(ht?1.5:1))}function _i(n,e,t,i,s,r="sine",a=.3){let o=D.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(n,t),l.frequency.exponentialRampToValueAtTime(e,t+i),c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(s,t+.008),c.gain.exponentialRampToValueAtTime(3e-4,t+i),l.connect(c),wn(c,a),l.start(t),l.stop(t+i+.05)}function G0(n){let e=2400+Math.random()*1400,t=2+Math.floor(Math.random()*4);for(let i=0;i<t;i++)_i(e*(1+Math.random()*.1),e*1.5,n+i*.13,.09,.018,"sine",.35);fs("\u9CE5\u9CF4")}function WS(n){_i(1700+Math.random()*900,700,n,.12,.03,"sine",.5),fs("\u5C4B\u7C37\u6EF4\u6C34")}function XS(n){let e=4200+Math.random()*300;for(let t=0;t<3+Math.floor(Math.random()*4);t++)_i(e,e*.98,n+t*.16,.11,.008,"sine",.2);fs("\u9234\u87F2")}function V0(n){let e=230+Math.random()*60;for(let t=0;t<2+Math.floor(Math.random()*3);t++)_i(e*1.3,e,n+t*.22,.12,.03,"triangle",.3);fs("\u9752\u86D9")}function df(n){let e=ut>.5;Ge==="spring"&&!e?G0(n):Ge==="summer"?(Gn.visible?WS:V0)(n):(Ge==="autumn"||Ge==="spring"&&e)&&XS(n)}function W0(){D.ctx&&D.on&&D.ctx.state==="running"&&Math.random()<.6&&df(D.ctx.currentTime+.05),setTimeout(W0,1800+Math.random()*3500)}function qS(){let n=D.ctx,e=n.currentTime+.05;_i(420,260,e,.18,.12,"triangle",.7);let t=n.createBufferSource();t.buffer=D.noiseBuf;let i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=4;let s=n.createGain();s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(5e-4,e+.08),t.connect(i),i.connect(s),wn(s,.7),t.start(e,Math.random()*2),t.stop(e+.1),fs("\u9E7F\u5A01\u3057\uFF08\u7AF9\u7B52\u6572\u77F3\uFF09")}function Gi(n,e,t,i,s,r=.4,a="bandpass"){let o=D.ctx,l=o.createBufferSource();l.buffer=D.noiseBuf;let c=o.createBiquadFilter();c.type=a,c.frequency.value=t,c.Q.value=i;let h=o.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(s,n+.03),h.gain.setTargetAtTime(0,n+e*.5,e*.25),l.connect(c),c.connect(h),wn(h,r),l.start(n,Math.random()*2),l.stop(n+e+.3)}function YS(){!D.ctx||!D.on||D.ctx.state!=="running"||Gi(D.ctx.currentTime,.8,1300,1.2,.07,.4)}function ZS(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx.currentTime;Gi(n,1.3,1800,.7,.09,.4);for(let e=0;e<5;e++)_i(1400+Math.random()*1200,500,n+.1+Math.random()*.8,.1,.02,"sine",.4)}function QS(){!D.ctx||!D.on||D.ctx.state!=="running"||_i(650,170,D.ctx.currentTime,.12,.045,"sine",.4)}function JS(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx,e=n.currentTime,t=n.createBufferSource();t.buffer=D.noiseBuf,t.playbackRate.value=.8+Math.random()*.4;let i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=1600+Math.random()*900,i.Q.value=1.1;let s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.09,e+.015),s.gain.exponentialRampToValueAtTime(5e-4,e+.16),t.connect(i),i.connect(s),wn(s,.1),t.start(e,Math.random()*2.5),t.stop(e+.2)}function KS(n){!D.ctx||n===D.rakeOn||(D.rakeOn=n,D.rake.gain.setTargetAtTime(n?.055:0,D.ctx.currentTime,.08))}function Gf(n,e,t){if(D.on=n,cs.on=n,U("soundBtn").classList.toggle("off",!n),U("muteBtn").textContent=n?"\u958B":"\u95DC",U("muteBtn").classList.toggle("on",n),typeof tn=="function"&&tn(),!D.ctx){n&&!t&&gr();return}n&&D.ctx.state==="suspended"&&D.ctx.resume(),D.master.gain.cancelScheduledValues(D.ctx.currentTime),D.master.gain.setTargetAtTime(n?Hf:0,D.ctx.currentTime,.6),e||_t(n?"\u8072\u97F3\u958B\u555F":"\u5B89\u975C\u6A21\u5F0F")}function No(){U("soundPanel").classList.add("hidden")}U("soundBtn").onclick=n=>{n.stopPropagation(),U("soundPanel").classList.toggle("hidden")};U("muteBtn").onclick=()=>Gf(!D.on,!0);U("volMusic").value=cs.music;U("volAmb").value=cs.amb;U("volMusic").oninput=n=>{cs.music=+n.target.value,D.on&&gr(),kf(),tn()};U("volAmb").oninput=n=>{cs.amb=+n.target.value,D.on&&gr(),kf(),tn()};Gf(D.on,!0,!0);var $t={on:!1,end:0,fading:!1,done:!1,lastTxt:""};function Vf(){let n=U("sleepBtn");if(!$t.on){n.textContent="\u7761\u524D\u6A21\u5F0F\u30FB10 \u5206\u9418\u5F8C\u6162\u6162\u5B89\u975C",n.classList.remove("on");return}if(n.classList.add("on"),$t.fading){n.textContent="\u6B63\u5728\u6162\u6162\u5B89\u975C\u2026\uFF08\u9EDE\u4E00\u4E0B\u53D6\u6D88\uFF09";return}let e=Math.max(0,Math.ceil(($t.end-performance.now())/1e3)),t=Math.floor(e/60)+":"+String(e%60).padStart(2,"0");t!==$t.lastTxt&&(n.textContent=`\u7761\u524D\u6A21\u5F0F ${t}\uFF08\u9EDE\u4E00\u4E0B\u53D6\u6D88\uFF09`,$t.lastTxt=t)}function X0(){let n=U("sleepOverlay");n.style.transition="opacity 1.5s",n.classList.remove("show"),setTimeout(()=>{n.style.transition=""},1600),$t.on=!1,$t.fading=!1,$t.done=!1,Vf(),D.ctx&&D.on&&(D.ctx.resume(),D.master.gain.cancelScheduledValues(D.ctx.currentTime),D.master.gain.setTargetAtTime(Hf,D.ctx.currentTime,1))}U("sleepBtn").onclick=()=>{if($t.on){X0(),_t("\u53D6\u6D88\u7761\u524D\u6A21\u5F0F");return}$t.on=!0,$t.end=performance.now()+10*6e4,D.on&&gr(),Vf(),_t("\u5341\u5206\u9418\u5F8C\uFF0C\u5EAD\u9662\u6703\u6162\u6162\u5B89\u975C\u4E0B\u4F86\u3002",3200)};U("sleepOverlay").addEventListener("pointerdown",X0);function jS(n){if($t.on&&(Vf(),!$t.fading&&n>=$t.end)){if($t.fading=!0,No(),ht&&Uo(),D.ctx){let e=D.ctx.currentTime;D.master.gain.cancelScheduledValues(e),D.master.gain.setValueAtTime(D.master.gain.value,e),D.master.gain.linearRampToValueAtTime(0,e+90)}U("sleepOverlay").classList.add("show"),setTimeout(()=>{$t.fading&&($t.done=!0,D.ctx&&D.ctx.suspend())},92e3)}}document.addEventListener("visibilitychange",()=>{D.ctx&&(document.hidden?D.ctx.suspend():D.on&&D.ctx.resume())});var ut=0,Bs="auto",Ku=null,ju=["auto",6.6,12,17.9,22],$S={auto:"\u6642",6.6:"\u6668",12:"\u5348",17.9:"\u660F",22:"\u591C"},eT={auto:"\u8DDF\u8457\u73FE\u5728\u7684\u6642\u9593",6.6:"\u6E05\u6668",12:"\u6B63\u5348",17.9:"\u9EC3\u660F",22:"\u591C\u665A"},dc=[{h:0,n:1},{h:4.8,n:1},{h:6.2,n:.18,sky:["#e9c2ae",.6],sun:["#ffad78",.85],sm:.55,hm:.75},{h:8,n:0,sky:["#f3e6d6",.15],sun:["#fff0dc",.3],sm:.95,hm:.95},{h:12,n:0},{h:16,n:0,sky:["#f0e2cc",.15],sun:["#ffe2bd",.4],sm:.95,hm:.95},{h:17.8,n:.18,sky:["#e8a57f",.6],sun:["#ff9152",.85],sm:.65,hm:.7},{h:19.2,n:1},{h:24,n:1}],ls={on:Math.random()<.6,next:0},tT=new ce("#1a2232"),nT=new ce("#a3b6dc"),iT=new ce("#7d8db0"),la=new ce,q0=new ce;function Bm(n,e){let t=new ce(e.sky);n.sky&&t.lerp(la.set(n.sky[0]),n.sky[1]),t.lerp(tT,n.n);let i=new ce(e.sun[0]);n.sun&&i.lerp(la.set(n.sun[0]),n.sun[1]),i.lerp(nT,n.n);let s=new ce(e.hemi[0]).lerp(iT,n.n);return{sky:t,sc:i,hc:s,si:In.lerp(e.sun[1]*(n.sm??1),.5,n.n),hi:In.lerp(e.hemi[1]*(n.hm??1),.42,n.n),n:n.n}}function Fo(){if(Bs!=="auto")return Bs;let n=new Date;return n.getHours()+n.getMinutes()/60}var Co=(()=>{let n=29.530588853,e=Date.UTC(2e3,0,6,18,14)/864e5,t=(Date.now()/864e5-e)/n%1;return t<0&&(t+=1),{p:t,illum:(1-Math.cos(2*Math.PI*t))/2}})(),Y0=document.createElement("canvas");function Z0(n){let e=n?256:128,t=Y0;t.width=t.height=e;let i=t.getContext("2d"),s=Math.cos(2*Math.PI*Co.p),r=Co.p<.5,a=null;n&&(i.drawImage(n,n.width*.25,0,n.width*.5,n.height,0,0,e,e),a=i.getImageData(0,0,e,e).data);let o=i.createImageData(e,e);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(c+.5)/e*2-1,u=(l+.5)/e*2-1,f=h*h+u*u,d=(l*e+c)*4;if(f>1){o.data[d+3]=0;continue}let g=Math.sqrt(1-u*u),x=r?h>g*s:h<-g*s,m=.9+.1*Math.sin(h*9+u*5)*Math.sin(u*11-h*3),p=Math.min(1,(1-Math.sqrt(f))*18),y=a?.55+.6*(a[d]/255):m;x?(o.data[d]=Math.min(255,248*y),o.data[d+1]=Math.min(255,243*y),o.data[d+2]=Math.min(255,226*y),o.data[d+3]=255*p):(o.data[d]=60,o.data[d+1]=68,o.data[d+2]=88,o.data[d+3]=70*p)}i.putImageData(o,0,0)}Z0(null);var Wf=new Qn(Y0);Wf.colorSpace=Lt;{let n=new Image;n.onload=()=>{Z0(n),Wf.needsUpdate=!0},n.src="assets/moon.jpg"}var jn=new Ni(new vi({map:Wf,fog:!1,transparent:!0,depthWrite:!1}));jn.scale.set(4.6,4.6,1);jn.position.set(-18,11,60);fe.add(jn);var Po=new Ni(new vi({map:mr,color:"#dfe6ff",fog:!1,transparent:!0,depthWrite:!1}));Po.scale.set(16,16,1);Po.position.copy(jn.position);fe.add(Po);var Om=new ce("#e9edee"),Nn=0,Hm=(()=>{let e=new Float32Array(1260);for(let s=0;s<420;s++){let r=le()*Math.PI*2,a=.12+le()*1.3,o=95;e[s*3]=Math.cos(r)*Math.cos(a)*o,e[s*3+1]=Math.sin(a)*o,e[s*3+2]=Math.sin(r)*Math.cos(a)*o}let t=new ft;t.setAttribute("position",new zt(e,3));let i=new Jr(t,new er({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1}));return fe.add(i),i})(),Kc=40,Mc=new Float32Array(Kc*3),Ec=new Float32Array(Kc*3),Q0=[];for(let n=0;n<Kc;n++){let e=le(),t,i;e<.4?(t=-12.6+le()*1.2,i=-2+le()*12):e<.7?(t=-10+le()*20,i=10.2+le()*1.2):(t=11.8+le()*1.2,i=-2+le()*10),Q0.push({x:t,z:i,y:.3+le()*1.4,p1:le()*10,p2:le()*10,sp:.6+le()*.8})}var Do=new ft;Do.setAttribute("position",new zt(Mc,3));Do.setAttribute("color",new zt(Ec,3));var zo=new Jr(Do,new er({size:.38,map:mr,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ms}));zo.frustumCulled=!1;fe.add(zo);function hs(){let n=Ro[Ge],e=Fo(),t=0;for(;t<dc.length-2&&dc[t+1].h<=e;)t++;let i=dc[t],s=dc[t+1],r=gt((e-i.h)/(s.h-i.h),0,1),a=Bm(i,n),o=Bm(s,n),l=a.sky.clone().lerp(o.sky,r);fe.background.copy(l),fe.fog.color.copy(l),Nn=CT(e),jt==="fog"&&(Nn=Math.max(Nn,.82)),Nn>0&&(fe.fog.color.lerp(Om,Nn*.6),fe.background.lerp(Om,Nn*.45)),fe.fog.near=In.lerp(n.fog[0],1.5,Nn),fe.fog.far=In.lerp(n.fog[1],24,Nn),Kn.color.copy(a.sc).lerp(o.sc,r),Kn.intensity=In.lerp(a.si,o.si,r),gc.color.copy(a.hc).lerp(o.hc,r),gc.intensity=In.lerp(a.hi,o.hi,r)*(nt.env?.55:1),ut=In.lerp(a.n,o.n,r),Kn.intensity*=1-ut*.5*(1-Co.illum);let c=jt==="cloud"?.55:jt==="rain"?.7:jt==="snow"?.5:0;c&&(Kn.intensity*=1-c*.7,gc.intensity*=1+c*.15,la.set(ut>.5?"#1a1f27":"#c4cacc"),fe.background.lerp(la,c*.6),fe.fog.color.lerp(la,c*.6)),jt==="sun"&&(Kn.intensity*=1.08);let h=gt((e-6)/12,0,1)*Math.PI,u=new S(22*Math.cos(h),5+24*Math.sin(h),12),f=new S(-12,24,16);Kn.position.copy(u).lerp(f,ut),bc.material.uniforms.bottom.value.copy(fe.fog.color),bc.material.uniforms.top.value.copy(fe.fog.color).lerp(la.set(ut>.5?"#0c1220":"#8fb0cf"),.55*(1-Nn*.8)).lerp(q0.set("#e9a07a"),Math.max(0,1-Math.abs(e-17.8)/1.2)*.25*(1-ut)),a0(e),jn.material.opacity=ut,jn.visible=ut>.02,Po.material.opacity=ut*(.12+.3*Co.illum),Po.visible=jn.visible,Hm.material.opacity=Math.max(0,ut*1.2-.2),Hm.visible=ut>.2,Af.material.emissiveIntensity=ut*.55,Gn.visible=jt==="rain"||!jt&&!!n.rain&&ut<.4&&ls.on,Io.visible=!!n.snow||jt==="snow",zo.visible=Ge==="summer"&&ut>=.4&&!Gn.visible;let d=ut>.3;d!==Ku&&((Ku!==null||d)&&(Ut.on=d),Ku=d,D.ctx&&fr()),U("timeBtn").textContent=$S[Bs]||"\u6642",document.body.classList.toggle("night",ut>.5)}window.__lightReady=!0;hs();var pc=0;function sT(n){if(zo.visible){for(let e=0;e<Kc;e++){let t=Q0[e],i=e*3;Mc[i]=t.x+Math.sin(n*.3*t.sp+t.p1)*.9,Mc[i+1]=t.y+Math.sin(n*.5*t.sp+t.p2)*.35,Mc[i+2]=t.z+Math.cos(n*.25*t.sp+t.p2)*.9;let s=Math.pow(Math.max(0,Math.sin(n*1.3*t.sp+t.p1*3)),4)*ut;Ec[i]=1*s,Ec[i+1]=1*s,Ec[i+2]=.4*s}Do.attributes.position.needsUpdate=!0,Do.attributes.color.needsUpdate=!0}}U("timeBtn").onclick=()=>{let n=ju.indexOf(Bs),e=ju[(n+1)%ju.length],t=U("fade");t.classList.add("on"),setTimeout(()=>{Bs=e,hs(),bt.cubeDirty=!0,t.classList.remove("on"),_t(eT[e]+(e==="auto"?"\uFF08\u73FE\u5728 "+new Date().toTimeString().slice(0,5)+"\uFF09":""))},380)};addEventListener("keydown",n=>{n.code==="KeyT"&&U("timeBtn").click()});var Xf=!1;function pf(){let n=new Date().getMonth()+1;return n>=3&&n<=5?"spring":n>=6&&n<=8?"summer":n>=9&&n<=11?"autumn":"winter"}setInterval(()=>{!Xf&&pf()!==Ge&&Of(pf())},6e4);document.querySelectorAll("#seasons button").forEach(n=>n.addEventListener("click",()=>{Xf=!0}));var It={mode:null,end:0,start:0,v:0,lastInfo:""};function Hs(n){U("sitPanel").classList.toggle("hidden",!n),U("sitChoices").classList.toggle("hidden",n!=="choices"),U("sitRunning").classList.toggle("hidden",n!=="running")}function rT(n){if(D.on&&gr(),U("poem").classList.remove("show"),n==="listen"){oT();return}if(n==="leaf"){yT();return}if(n==="tea"){NT();return}It.start=performance.now(),n==="breath"?(It.mode="breath",U("breathDot").classList.add("show"),U("sitInfo").textContent=""):(It.mode="timer",It.mins=parseInt(n.slice(1)),It.end=It.start+It.mins*6e4,ma()),Hs("running")}function qf(){It.mode==="breath"&&(U("breathDot").classList.remove("show"),D.drone&&D.drone.gain.setTargetAtTime(.055,D.ctx.currentTime,1)),It.mode=null,Hs(ht?"choices":null)}function aT(n,e){if(It.mode==="timer"){let t=It.end-n;if(t<=0){ma(),setTimeout(ma,2600),_t("\u6642\u9593\u5230\u4E86\uFF0C\u6162\u6162\u56DE\u4F86\u3002",3500),de.zazenMin=(de.zazenMin||0)+It.mins,ct("zazen"),qf();return}let i=Math.ceil(t/1e3),s=Math.floor(i/60)+":"+String(i%60).padStart(2,"0");s!==It.lastInfo&&(U("sitInfo").textContent=s,It.lastInfo=s)}else if(It.mode==="breath"){let t=(n-It.start)/1e3%10,i=r=>.5-.5*Math.cos(Math.PI*r);It.v=t<4?i(t/4):1-i((t-4)/6);let s=U("breathDot");s.style.transform=`translateX(-50%) scale(${.55+.65*It.v})`,s.style.opacity=.25+.45*It.v,D.drone&&D.ctx&&D.drone.gain.setTargetAtTime(.035+.06*It.v,D.ctx.currentTime,.25)}}document.querySelectorAll("#sitChoices button").forEach(n=>n.onclick=()=>rT(n.dataset.m));U("sitStop").onclick=()=>qf();function oT(){D.on?gr():Gf(!0),vn.active=!0,vn.set.clear(),Hs(null),U("listenOverlay").classList.add("show"),U("listenText").innerHTML="\u9589\u4E0A\u773C\u775B\u3002<br>\u6578\u4E00\u6578\uFF0C\u807D\u5230\u5E7E\u7A2E\u8072\u97F3\u3002",U("listenBack").textContent="\u63D0\u65E9\u7D50\u675F",setTimeout(ma,600);let e=(t,i)=>vn.timers.push(setTimeout(()=>{vn.active&&D.ctx&&t()},i));e(()=>df(D.ctx.currentTime+.05),9e3+Math.random()*5e3),e(()=>{hn.t=Math.max(hn.t,D0-2),hn.phase=hn.phase==="fill"?"fill":hn.phase},2e4+Math.random()*12e3),e(()=>df(D.ctx.currentTime+.05),4e4+Math.random()*8e3),vn.timers.push(setTimeout(J0,6e4))}function J0(){vn.active&&(vn.active=!1,vn.timers.forEach(clearTimeout),vn.timers=[],ma(),ct("listen"),U("listenText").innerHTML="\u807D\u5230\u5E7E\u7A2E\u5462\uFF1F",U("listenBack").textContent="\u56DE\u5230\u5EAD\u9662",vn.timers.push(setTimeout(()=>{let n=Jc[Ge],e=[];n.wind>0&&e.push("\u98A8"),Gn.visible&&e.push("\u96E8"),vn.set.forEach(t=>{t!=="\u980C\u7F3D"&&e.push(t)}),e.push("\u4F4E\u4F4E\u7684\u3001\u50CF\u547C\u5438\u4E00\u6A23\u7684\u6301\u7E8C\u97F3"),U("listenText").innerHTML="\u9019\u4E00\u5206\u9418\uFF0C\u5EAD\u9662\u88E1\u6709<br><b>"+e.join("\u3001")+"</b><br><br>\u4E5F\u8A31\uFF0C\u9084\u6709\u4F60\u81EA\u5DF1\u7684\u547C\u5438\u3002"},3500)))}function K0(){vn.active=!1,vn.timers.forEach(clearTimeout),vn.timers=[],U("listenOverlay").classList.remove("show"),Hs(ht?"choices":null)}U("listenBack").onclick=()=>{vn.active?J0():K0()};var Yf=140,kn=(Array.isArray(de.fallen)?de.fallen:[]).filter(n=>Array.isArray(n)).map(n=>({x:n[0],z:n[1],r:n[2],c:n[3]}));function Bo(n,e){if(!uo(n,e)||hr(n,e)<.45||Math.hypot(n-Qt.x,e-Qt.z)<1.2)return!1;for(let t of bf)if(Math.hypot(n-t.x,e-t.z)<t.r+.15)return!1;return!0}var j0=new un(.16,.11);j0.rotateX(-Math.PI/2);var rs=new _s(j0,new dt({color:"#ffffff",side:yt,roughness:.9}),Yf);rs.receiveShadow=!0;rs.frustumCulled=!1;fe.add(rs);function jc(){let n=new Ie,e=new Zn,t=new ce,i=new Ts,s=new S(1,1,1),r=new S;kn.forEach((a,o)=>{i.set(0,a.r,0),e.setFromEuler(i),n.compose(r.set(a.x,.012,a.z),e,s),rs.setMatrixAt(o,n),t.set(a.c||"#c4482b"),rs.setColorAt(o,t)}),rs.count=kn.length,rs.instanceMatrix.needsUpdate=!0,rs.instanceColor&&(rs.instanceColor.needsUpdate=!0)}var mf=0;if(Sf&&af>.4&&Ro[Ge].leaves){let n=Math.min(70,Math.round(af*9)),e=Ro[Ge].leaves.cols;for(let t=0;t<n&&kn.length<Yf;t++)for(let i=0;i<8;i++){let s=we.x0+.4+Math.random()*(we.w-.8),r=we.z0+.4+Math.random()*(we.d-.8);if(Bo(s,r)){kn.push({x:s,z:r,r:Math.random()*6.28,c:e[Math.floor(Math.random()*e.length)]}),mf++;break}}}kn=kn.filter(n=>Bo(n.x,n.z));jc();function lT(n,e){let t=!1;for(let i=kn.length-1;i>=0;i--){let s=kn[i];Math.hypot(s.x-n,s.z-e)<.52&&(kn.splice(i,1),t=!0)}t&&(jc(),tn())}if(Sf&&Ge==="winter"&&Math.random()<.6){let n=Us,e=we.z0+2+Math.random()*(we.d-4),t=1+Math.random()*1.5,i=Math.random()*6,s=Math.random()<.5?1:-1,r=1;for(let a=we.x0+.3;a<we.x1-.3;a+=.22){let o=s>0?a:we.x1+we.x0-a,l=e+Math.sin(o*.35+i)*t,c=Math.atan2(Math.cos(o*.35+i)*t*.35,1)*s;if(!Bo(o,l))continue;r*=-1;let[h,u]=Bc(o-Math.sin(c)*.05*r,l+Math.cos(c)*.05*r);n.save(),n.translate(h,u),n.rotate(s>0?c:Math.PI+c),n.fillStyle="rgba(105,99,92,0.28)",n.beginPath(),n.ellipse(0,0,.045*mn,.04*mn,0,0,7),n.fill();for(let f=-1.5;f<=1.5;f++)n.beginPath(),n.ellipse(.06*mn,f*.028*mn,.016*mn,.014*mn,0,0,7),n.fill();n.restore()}Ns=!0}U("visitNote").textContent=ua<=1?"\u7B2C\u4E00\u6B21\u4F86":`\u7B2C ${ua} \u6B21\u4F86`;function xa(){de.visits=ua,de.last=Date.now(),de.layout=Hn,de.fallen=kn.map(n=>[+n.x.toFixed(2),+n.z.toFixed(2),+n.r.toFixed(2),n.c]),de.vol=cs,h0(o0,JSON.stringify(de))}function Oo(){try{h0(l0,JSON.stringify({sig:f0(),img:va.toDataURL("image/jpeg",.8)}))}catch{}}function tn(n){clearTimeout(_m),_m=setTimeout(xa,1500),n&&(clearTimeout(Am),Am=setTimeout(Oo,4e3))}addEventListener("pagehide",()=>{xa(),Oo()});document.addEventListener("visibilitychange",()=>{document.hidden&&(xa(),Oo())});xa();function cT(){ua>1&&af>3?_t(mf?"\u597D\u4E45\u4E0D\u898B\u3002\u767D\u7802\u4E0A\u7A4D\u4E86\u4E00\u4E9B\u843D\u8449\u3002":"\u597D\u4E45\u4E0D\u898B\u3002",3800):mf>4&&_t("\u767D\u7802\u4E0A\u7A4D\u4E86\u4E00\u4E9B\u843D\u8449\uFF0C\u8981\u8019\u4E00\u8019\u55CE\uFF1F",3800)}var Te={on:!1,sel:null,drag:null,off:new S,cam:{x:0,z:3.4,h:22},pan:null},dr=new B(new Ka(1,1.07,56),new Ln({color:"#a33f2c",transparent:!0,opacity:.9,depthWrite:!1}));dr.rotation.x=-Math.PI/2;dr.visible=!1;dr.renderOrder=3;fe.add(dr);var Zf=new tc,hT=new mi(new S(0,1,0),0),km=new j;function $0(n){km.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Zf.setFromCamera(km,St)}function eg(n){$0(n);let e=new S;return Zf.ray.intersectPlane(hT,e)?e:null}function uT(n){$0(n);let e=Zf.intersectObjects(ha.children.map(t=>t.userData.hit),!1);return e.length?e[0].object.parent:null}function fT(n){return ha.children.find(e=>e.userData.c===n)||null}function us(n){Te.sel=n,dr.visible=!!n,document.querySelectorAll("#editBar [data-op]").forEach(e=>{e.dataset.op!=="default"&&(e.disabled=!n)})}function vo(n,e,t){let i=n.moss*(n.scale||1);if(e<we.x0+i*.55||e>we.x1-i*.55||t<we.z0+i*.55||t>we.z1-i*.55||hr(e,t)<i*.75+.35)return!1;for(let s of[or,en,Qt])if(Math.hypot(e-s.x,t-s.z)<i+.55)return!1;return!0}function dT(){ht&&Uo(),U("askCard").classList.remove("show"),Te.on=!0,On=!1,Cs.visible=!1,U("rakeBtn").classList.remove("on"),document.body.classList.add("editing"),Te.cam.h=St.aspect<.8?30:21,Te.cam.x=0,Te.cam.z=3.4,us(null),_t("\u62D6\u52D5\u77F3\u982D\uFF0C\u6392\u51FA\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662",3e3)}function pT(){Te.on=!1,us(null),document.body.classList.remove("editing"),_t("\u91CD\u65B0\u8019\u7802\u4E2D\u2026",1200),setTimeout(()=>{d0(),Ns=!0,ur(),kn=kn.filter(t=>Bo(t.x,t.z)),jc();let[n,e]=gg(qe.position.x,qe.position.z);qe.position.x=n,qe.position.z=e,ct("garden"),xa(),Oo(),_t("\u6C99\u7D0B\u91CD\u65B0\u8019\u597D\u4E86")},80)}function mT(n){let e=uT(n);if(e){us(e);let t=eg(n),i=e.userData.c;Te.drag={id:n.pointerId},Te.off.set(i.x-(t?t.x:i.x),0,i.z-(t?t.z:i.z))}else Te.pan={id:n.pointerId,lx:n.clientX,ly:n.clientY,moved:0}}function gT(n){if(Te.drag&&n.pointerId===Te.drag.id&&Te.sel){let e=eg(n);if(!e)return;let t=Te.sel.userData.c,i=e.x+Te.off.x,s=e.z+Te.off.z;vo(t,i,s)?(t.x=i,t.z=s,Te.sel.position.set(i,0,s)):vo(t,i,t.z)?(t.x=i,Te.sel.position.x=i):vo(t,t.x,s)&&(t.z=s,Te.sel.position.z=s)}else if(Te.pan&&n.pointerId===Te.pan.id){let e=n.clientX-Te.pan.lx,t=n.clientY-Te.pan.ly,i=Te.cam.h*.0021;Te.pan.moved+=Math.abs(e)+Math.abs(t),Te.pan.lx=n.clientX,Te.pan.ly=n.clientY,Te.cam.x=gt(Te.cam.x-e*i,-12,12),Te.cam.z=gt(Te.cam.z-t*i,-4,11)}}function vT(n){Te.drag&&n.pointerId===Te.drag.id&&(Te.drag=null),Te.pan&&n.pointerId===Te.pan.id&&(Te.pan.moved<6&&us(null),Te.pan=null)}var Lo={tall:{moss:.85,rocks:[[0,0,1.9,.55]]},trio:{moss:1.5,rocks:[[0,-.2,2,.55],[-.75,.3,1.1,.48],[.75,.35,.85,.45]]},flat:{moss:.9,rocks:[[0,0,.45,.95]]},moss:{moss:1,rocks:[]}};function xT(n){if(Hn.length>=20){_t("\u77F3\u982D\u5DF2\u7D93\u5920\u591A\u4E86");return}let e=Lo[n],t={k:n,x:0,z:0,moss:e.moss,rot:Math.random()*6.28,scale:1,seed:1+Math.floor(Math.random()*1e6),rocks:JSON.parse(JSON.stringify(e.rocks))},i=!1;for(let s=0;s<9&&!i;s+=.6)for(let r=0;r<12&&!i;r++){let a=Te.cam.x+Math.cos(r/12*6.28)*s,o=Te.cam.z+Math.sin(r/12*6.28)*s;vo(t,a,o)&&(t.x=a,t.z=o,i=!0)}if(!i){_t("\u627E\u4E0D\u5230\u7A7A\u4F4D\uFF0C\u5148\u79FB\u958B\u4E00\u4E9B\u77F3\u982D");return}Hn.push(t),ur(),us(fT(t))}document.querySelectorAll("#editBar [data-add]").forEach(n=>n.onclick=()=>xT(n.dataset.add));document.querySelectorAll("#editBar [data-op]").forEach(n=>n.onclick=()=>{let e=n.dataset.op;if(e==="default"){Hn=JSON.parse(JSON.stringify(wo)),ur(),us(null),_t("\u77F3\u982D\u56DE\u5230\u539F\u672C\u7684\u4F4D\u7F6E");return}if(!Te.sel)return;let t=Te.sel,i=t.userData.c;if(e==="rot")i.rot=(i.rot||0)+Math.PI/6,t.rotation.y=i.rot;else if(e==="smaller"||e==="bigger"){let s=gt((i.scale||1)+(e==="bigger"?.15:-.15),.6,1.8),r=i.scale||1;i.scale=s,vo(i,i.x,i.z)||(i.scale=r,_t("\u9019\u88E1\u653E\u4E0D\u4E0B\u66F4\u5927\u7684\u4E86")),t.scale.setScalar(i.scale)}else e==="del"&&(Hn.splice(Hn.indexOf(i),1),ur(),us(null))});U("editDone").onclick=pT;U("editBtn").onclick=dT;var Sc=[],gf=null;function $c(n,e,t,i,s,r){U("keepRow").style.display=r?"flex":"none",U("keepChk").checked=!1,U("leafModalTitle").textContent=n;let a=U("leafInput");a.placeholder=e,a.maxLength=t,a.value="",U("leafOk").textContent=i,gf=s,U("leafModal").classList.remove("hidden"),setTimeout(()=>a.focus(),50)}function yT(){$c("\u5728\u8449\u5B50\u4E0A\u5BEB\u4E00\u500B\u8A5E","\u4E00\u500B\u8A5E\u5C31\u597D",10,"\u653E\u4E0B",n=>{U("keepChk").checked&&(de.notes.push({d:Date.now(),q:"\u5BEB\u5728\u8449\u5B50\u4E0A",a:n}),tn(),ct("note")),ET(n)},!0)}function Qf(){U("leafModal").classList.add("hidden"),U("leafInput").blur()}U("leafCancel").onclick=Qf;U("leafOk").onclick=()=>{let n=U("leafInput").value.trim();Qf(),n&&gf&&gf(n)};U("leafInput").addEventListener("keydown",n=>{n.stopPropagation(),n.key==="Enter"&&U("leafOk").click(),n.key==="Escape"&&Qf()});function MT(n){let e=document.createElement("canvas");e.width=320,e.height=200;let t=e.getContext("2d"),i={spring:"#f2b3c4",summer:"#7fae4a",autumn:"#cf5530",winter:"#e2d6b0"}[Ge],s=Ge==="autumn"||Ge==="summer";t.fillStyle=i,t.beginPath(),t.moveTo(14,100),t.bezierCurveTo(70,10,240,8,308,100),t.bezierCurveTo(240,192,70,190,14,100),t.fill(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=3,t.beginPath(),t.moveTo(14,100),t.lineTo(306,100),t.stroke(),t.lineWidth=1.5;for(let o=1;o<6;o++){let l=20+o*48;t.beginPath(),t.moveTo(l,100),t.quadraticCurveTo(l+20,70,l+34,40+o*2),t.moveTo(l,100),t.quadraticCurveTo(l+20,130,l+34,160-o*2),t.stroke()}t.strokeStyle=i,t.lineWidth=5,t.beginPath(),t.moveTo(16,100),t.lineTo(0,108),t.stroke();let r=n.length<=3?56:n.length<=5?44:n.length<=7?34:28;t.font=`600 ${r}px "Noto Serif TC","Songti TC",serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle=s?"rgba(255,248,236,.96)":"rgba(43,36,32,.92)",t.fillText(n,162,102);let a=new Qn(e);return a.colorSpace=Lt,a}function ET(n){de.leafCount=(de.leafCount||0)+1,ct("leaf");let e=new Re,t=new B(new un(1.3,.81),new dt({map:MT(n),transparent:!0,alphaTest:.05,side:yt,roughness:.85}));t.castShadow=!0,e.add(t),e.rotation.y=Math.PI;let i=qe.position;e.position.set(i.x+.2,i.y+2,i.z+.9),fe.add(e),Sc.push({grp:e,m:t,state:"fall",t:0,ph:Math.random()*6,vx:0,vz:0}),D.ctx&&D.on&&O0(H0(3),D.ctx.currentTime+.05,.6),U("poem").classList.remove("show")}function ST(n,e){for(let t=Sc.length-1;t>=0;t--){let i=Sc[t],s=i.grp;if(i.t+=n,i.state==="fall"){s.position.y-=.3*n,s.position.z+=.24*n,s.position.x+=Math.sin(e*1.1+i.ph)*.35*n;let r=fo(s.position.x,s.position.z)+.02,a=gt((s.position.y-r)/.9,0,1);i.m.rotation.x=In.lerp(-Math.PI/2+.12,-.35+Math.sin(e*1.6+i.ph)*.35,a),s.rotation.y=Math.PI+Math.sin(e*.7+i.ph)*.35*a,s.position.y<=r&&(s.position.y=r,i.m.rotation.x=-Math.PI/2+.12,i.state="rest",i.t=0)}else if(i.state==="rest"){if(i.t>14&&(i.state="wind",i.t=0,D.ctx&&D.wind)){let r=D.ctx.currentTime;D.wind.gain.setTargetAtTime(.12,r,.4),setTimeout(()=>fr(),2500)}}else{let r=Math.min(1,i.t/1.5);s.position.x+=1.6*r*n,s.position.z+=.9*r*n,s.position.y+=.35*r*n,i.m.rotation.x=-Math.PI/2+i.t*2.5,i.m.material.opacity=Math.max(0,1-i.t/3.5),i.t>3.5&&(fe.remove(s),i.m.geometry.dispose(),i.m.material.map.dispose(),i.m.material.dispose(),Sc.splice(t,1))}}}var Gm={spring:["\u6700\u8FD1\uFF0C\u6709\u4EC0\u9EBC\u6B63\u5728\u4F60\u5FC3\u88E1\u6162\u6162\u767C\u82BD\uFF1F","\u5982\u679C\u4ECA\u5929\u662F\u4E00\u500B\u65B0\u7684\u958B\u59CB\uFF0C\u4F60\u60F3\u5F9E\u54EA\u4E00\u4EF6\u5C0F\u4E8B\u958B\u59CB\uFF1F","\u6709\u4EC0\u9EBC\u7F8E\u597D\u7684\u4E8B\uFF0C\u662F\u4F60\u6700\u8FD1\u5DEE\u9EDE\u932F\u904E\u7684\uFF1F"],summer:["\u6700\u8FD1\u8B93\u4F60\u60B6\u60B6\u7684\uFF0C\u662F\u4EC0\u9EBC\uFF1F\u5B83\u9700\u8981\u4E00\u5834\u96E8\u55CE\uFF1F","\u9019\u9663\u5B50\uFF0C\u4F60\u89BA\u5F97\u81EA\u5DF1\u5728\u54EA\u88E1\u9577\u5927\u4E86\u4E00\u9EDE\uFF1F","\u5982\u679C\u53EF\u4EE5\u8B93\u96E8\u5E36\u8D70\u4E00\u4EF6\u4E8B\uFF0C\u4F60\u60F3\u4EA4\u7D66\u5B83\u4EC0\u9EBC\uFF1F"],autumn:["\u9019\u9663\u5B50\uFF0C\u6709\u4EC0\u9EBC\u662F\u4F60\u6E96\u5099\u653E\u4E0B\u7684\uFF1F","\u4ECA\u5E74\u5230\u73FE\u5728\uFF0C\u4F60\u6536\u7A6B\u4E86\u4EC0\u9EBC\uFF1F\u54EA\u6015\u5F88\u5C0F\u3002","\u6709\u4EC0\u9EBC\u4E8B\uFF0C\u4F60\u60F3\u6162\u6162\u4F86\u5C31\u597D\uFF1F"],winter:["\u5B89\u975C\u4E0B\u4F86\u7684\u6642\u5019\uFF0C\u4F60\u6700\u5E38\u60F3\u8D77\u8AB0\uFF1F","\u73FE\u5728\u7684\u4F60\uFF0C\u9700\u8981\u4EC0\u9EBC\u6A23\u7684\u6EAB\u6696\uFF1F","\u9019\u500B\u51AC\u5929\uFF0C\u6709\u4EC0\u9EBC\u4E00\u76F4\u966A\u8457\u4F60\uFF1F"],dawn:["\u4ECA\u5929\u9192\u4F86\u6642\uFF0C\u4F60\u7684\u7B2C\u4E00\u500B\u5FF5\u982D\u662F\u4EC0\u9EBC\uFF1F"],day:["\u4ECA\u5929\u6709\u4EC0\u9EBC\u4E8B\uFF0C\u8B93\u4F60\u60F3\u6162\u4E0B\u4F86\uFF1F"],dusk:["\u4ECA\u5929\u6709\u6C92\u6709\u4E00\u500B\u7247\u523B\uFF0C\u503C\u5F97\u8A18\u4F4F\uFF1F"],night:["\u7761\u524D\uFF0C\u60F3\u5C0D\u4ECA\u5929\u7684\u81EA\u5DF1\u8AAA\u4EC0\u9EBC\uFF1F"]},Vm="",Wm=0;function TT(){let n=Fo(),e=n>=4.5&&n<9?"dawn":n<16&&n>=9?"day":n>=16&&n<19?"dusk":"night",t=[...Gm[Ge],...Gm[e]].filter(s=>s!==Vm),i=t[Math.floor(Math.random()*t.length)];Vm=i,U("askText").textContent=i,U("askCard").classList.add("show"),clearTimeout(Wm),Wm=setTimeout(()=>U("askCard").classList.remove("show"),14e3)}U("askOk").onclick=()=>{U("askCard").classList.remove("show")};U("askWrite").onclick=()=>{let n=U("askText").textContent;U("askCard").classList.remove("show"),$c("\u5BEB\u4E0B\u4F60\u7684\u56DE\u7B54","\u5E7E\u500B\u5B57\u5C31\u597D",60,"\u6536\u9032\u624B\u5E16",e=>{de.notes.push({d:Date.now(),q:n,a:e}),de.notes.length>300&&de.notes.shift(),tn(),ct("note"),_t("\u6536\u9032\u624B\u5E16\u4E86\u3002")},!1)};var Se={present:Math.random()<.45||location.search.includes("cat"),x:0,z:-6.85,g:null,head:null,tail:null,body:null,eyesOpen:null,eyesShut:null,ears:[],awake:0,purrT:0,twitch:0};if(Se.present){let n=_n/8,e=[0,2,3,4,5,6,7][Math.floor(Math.random()*7)];Se.x=bn+(e+.5)*n+(Math.random()-.5)*.6;let t=[{b:"#e49a52",s:"#c06f31",l:"#f8ecdb",k:"tabby"},{b:"#9a9893",s:"#64625e",l:"#efece6",k:"tabby"},{b:"#2b2827",s:null,l:"#f5f2ec",k:"tux"},{b:"#f6f1e8",s:null,l:"#fbf8f2",k:"calico"},{b:"#f1e6d3",s:"#e0c69e",l:"#fbf6ee",k:"tabby"}],i=t[Math.floor(Math.random()*t.length)],s=w=>(L,z,Q)=>{if(L.fillStyle=i.b,L.fillRect(0,0,z,Q),i.k==="tabby"){L.strokeStyle=i.s,L.globalAlpha=.55,L.lineCap="round";for(let P=1;P<20;P++){let O=P*Q/20+(Math.random()-.5)*3;L.lineWidth=1.5+Math.random()*2.5,L.beginPath(),L.moveTo(w?z*.42:0,O);for(let X=w?z*.42:0;X<=z*1.08;X+=12)L.lineTo(X,O+Math.sin(X*.08+P)*2.5);L.stroke()}L.globalAlpha=1}if(i.k==="calico")for(let[P,O]of w?[["#d98b3d",5],["#2f2b28",4]]:[["#d98b3d",2],["#2f2b28",1]])for(let X=0;X<O;X++)L.fillStyle=P,L.beginPath(),L.ellipse(w?Math.random()*z:z*.55+Math.random()*z*.4,Math.random()*Q*.5,18+Math.random()*16,12+Math.random()*10,Math.random()*3,0,7),L.fill();if(w){let P=L.createLinearGradient(z*.05,0,z*.45,0);P.addColorStop(0,"rgba(0,0,0,0)"),P.addColorStop(.3,i.l),P.addColorStop(.7,i.l),P.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=P,L.fillRect(z*.05,0,z*.4,Q)}for(let P=0;P<1500;P++)L.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.05)`,L.fillRect(Math.random()*z,Math.random()*Q,1,3)},r=$n(256,128,s(!0)),a=$n(256,128,s(!1));a.wrapS=Yn,r.wrapS=Yn;let o=new dt({map:r,roughness:.95}),l=oe(i.l,{r:.95}),c=oe("#e7a1a1",{r:.7}),h=oe("#1b1817",{r:.35}),u=new Ln({color:"#ffffff"}),f=new Re,d=new De(1,28,20);d.rotateX(Math.PI/2);let g=new B(d,o);if(g.scale.set(.24,.15,.27),g.position.y=.14,f.add(g),i.k==="tux"||i.k==="calico"){let w=new B(new De(1,16,12),l);w.scale.set(.12,.1,.1),w.position.set(.04,.12,.17),f.add(w)}for(let[w,L]of[[.07,.25],[-.03,.255]]){let z=new B(new De(1,12,10),i.k==="tabby"&&i.b!=="#f1e6d3"?o:l);z.scale.set(.042,.03,.06),z.position.set(w,.03,L),f.add(z)}let x=new Kr([new S(-.02,.1,-.25),new S(-.2,.07,-.15),new S(-.25,.05,.05),new S(-.15,.045,.22),new S(.03,.045,.3)]),m=new ja(x,40,.034,10);{let w=m.attributes.position;for(let L=0;L<w.count;L++){let z=Math.floor(L/11)/40,Q=1-z*.35,P=x.getPointAt(Math.min(1,z));w.setXYZ(L,P.x+(w.getX(L)-P.x)*Q,P.y+(w.getY(L)-P.y)*Q,P.z+(w.getZ(L)-P.z)*Q)}m.computeVertexNormals()}let p=new Re;f.add(p);let y=new B(m,o);p.add(y);let v=new B(new De(.023,10,8),i.k==="tux"?h:o);v.position.copy(x.getPointAt(1)),p.add(v);let M=new Re;M.position.set(.11,.16,.2),M.rotation.set(.05,.45,.18),f.add(M);let A=new dt({map:a,roughness:.95}),_=new B(new De(.115,24,18),A);_.scale.set(1.12,.94,1),M.add(_);for(let w of[-1,1]){let L=new B(new De(.038,12,10),l);L.position.set(w*.033,-.035,.088),L.scale.set(1,.85,.8),M.add(L)}let C=new B(new De(.012,8,6),c);C.scale.set(1.3,.8,.8),C.position.set(0,-.012,.113),M.add(C);for(let w of[-1,1]){let L=new Re;L.position.set(w*.068,.078,-.01),L.rotation.set(-.15,0,-w*.32),M.add(L),Se.ears.push(L);let z=new B(new xi(.046,.088,12),A);z.scale.z=.55,z.position.y=.035,L.add(z);let Q=new B(new xi(.03,.06,10),c);Q.scale.z=.4,Q.position.set(0,.03,.012),L.add(Q)}Se.eyesShut=new Re,Se.eyesOpen=new Re,M.add(Se.eyesShut),M.add(Se.eyesOpen);for(let w of[-1,1]){let L=new B(new nr(.017,.0035,6,14,Math.PI),h);L.rotation.z=Math.PI,L.position.set(w*.043,.016,.104),L.rotation.y=w*.25,Se.eyesShut.add(L);let z=new B(new De(1,12,10),h);z.scale.set(.017,.022,.01),z.position.set(w*.043,.012,.103),Se.eyesOpen.add(z);let Q=new B(new De(.0045,6,4),u);Q.position.set(w*.043+.005,.02,.112),Se.eyesOpen.add(Q)}Se.eyesOpen.visible=!1;let N=[];for(let w of[-1,1])for(let L of[-.008,.006])N.push(w*.05,-.02,.1,w*.13,-.02+L*2.2,.085);let E=new ft;E.setAttribute("position",new Ue(N,3)),M.add(new Qr(E,new As({color:"#f2efe8",transparent:!0,opacity:.7}))),f.scale.setScalar(1.15),f.position.set(Se.x,.75,Se.z),f.rotation.y=(Math.random()-.5)*1,xn(f),fe.add(f),Object.assign(Se,{g:f,head:M,tail:p,body:g}),Os.push({x:Se.x,z:Se.z,r:.32})}function Xm(n,e,t,i,s=3.4){let r=Math.max(2,Math.round(s/1.15));for(let[a,o,l,c]of[["lowpass",300,.7,.5],["bandpass",720,1.1,.42],["bandpass",1500,1.6,.12]]){let h=n.createBufferSource();h.buffer=t,h.loop=!0;let u=n.createBiquadFilter();u.type=a,u.frequency.value=o,u.Q.value=l;let f=n.createGain();f.gain.value=.55;let d=n.createOscillator();d.type="sine",d.frequency.value=25;let g=n.createGain();g.gain.value=.45,d.connect(g),g.connect(f.gain);let x=n.createGain();x.gain.setValueAtTime(0,i);for(let m=0;m<r;m++){let p=i+m*(s/r),y=s/r,v=m%2===0;x.gain.linearRampToValueAtTime(c*(v?.75:1),p+y*.18),x.gain.linearRampToValueAtTime(c*(v?.6:.85),p+y*.8),x.gain.linearRampToValueAtTime(c*.25,p+y*.98)}x.gain.linearRampToValueAtTime(0,i+s+.15),h.connect(u),u.connect(f),f.connect(x),x.connect(e),h.start(i,Math.random()*2),d.start(i),h.stop(i+s+.3),d.stop(i+s+.3)}}function wT(n,e,t){let i=.62+Math.random()*.18,s=520+Math.random()*120,r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(s*.95,t),r.frequency.linearRampToValueAtTime(s*1.45,t+i*.35),r.frequency.linearRampToValueAtTime(s*1.1,t+i*.8),r.frequency.linearRampToValueAtTime(s*.85,t+i);let a=n.createOscillator();a.frequency.value=6;let o=n.createGain();o.gain.value=9,a.connect(o),o.connect(r.frequency);let l=n.createGain();l.gain.value=1;for(let[h,u,f]of[[900,6,.9],[1800,8,.55],[3e3,9,.22]]){let d=n.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(h*.8,t),d.frequency.linearRampToValueAtTime(h*1.15,t+i*.4),d.frequency.linearRampToValueAtTime(h*.9,t+i),d.Q.value=u;let g=n.createGain();g.gain.value=f,r.connect(d),d.connect(g),g.connect(l)}let c=n.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.32,t+.06),c.gain.setValueAtTime(.32,t+i*.55),c.gain.exponentialRampToValueAtTime(.001,t+i),l.connect(c),c.connect(e),r.start(t),a.start(t),r.stop(t+i+.05),a.stop(t+i+.05)}function bT(){if(ct("catpet"),Se.purrT=3.4,_t(["\u547C\u5695\u2026\u2026\u547C\u5695\u2026\u2026","\u8C93\u7787\u8D77\u4E86\u773C\u775B\u3002","\u7260\u7FFB\u4E86\u500B\u8EAB\uFF0C\u53C8\u7761\u4E86\u3002","\u55B5\uFF5E","\u7260\u628A\u982D\u9760\u904E\u4F86\u4E86\u3002"][Math.floor(Math.random()*5)],2800),D.ctx&&D.on&&D.ctx.state==="running"){let n=D.ctx,e=n.currentTime+.03,t=n.createGain();t.gain.value=1,wn(t,.12),Math.random()<.5?(wT(n,t,e),Xm(n,t,D.noiseBuf,e+.75,3.2)):Xm(n,t,D.noiseBuf,e,3.4),setTimeout(()=>t.disconnect(),5e3)}}function _T(n,e){if(!Se.present)return;let t=qe.position,i=Math.hypot(t.x-Se.x,t.z-Se.z)<2.4&&t.y>.5;if(i&&ct("cat"),Se.awake+=((i||Se.purrT>0?1:0)-Se.awake)*(1-Math.exp(-n*3)),Se.body.scale.y=.15*(1+Math.sin(e*1.5)*.035),Se.head.position.y=.16+Se.awake*.06,Se.head.rotation.x=.05-Se.awake*.22,Se.head.rotation.z=.18*(1-Se.awake),i){let s=Math.atan2(t.x-Se.x,t.z-Se.z)-Se.g.rotation.y;Se.head.rotation.y+=(gt(((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,-.9,.9)-Se.head.rotation.y)*n*3}else Se.head.rotation.y+=(.45-Se.head.rotation.y)*n*2;Se.eyesOpen.visible=Se.awake>.5&&Se.purrT<=0,Se.eyesShut.visible=!Se.eyesOpen.visible,Se.twitch-=n,Se.twitch<=0&&(Se.twitch=3+Math.random()*6,Se.earT=.25),Se.earT>0?(Se.earT-=n,Se.ears[Math.random()<.5?0:1].rotation.x=-.15-Math.sin(Se.earT*40)*.25):Se.ears.forEach(s=>s.rotation.x+=(-.15-s.rotation.x)*n*6),Se.tail.rotation.y=Math.sin(e*(Se.purrT>0?3:.7))*(Se.purrT>0?.12:.03),Se.purrT>0&&(Se.purrT-=n)}var lr={g:null,state:"perch",t:0,home:new S(en.x,1.79,en.z),away:new S(en.x+5,6.5,en.z+7),wings:[],enabled:Math.random()<.7};{let n=new Re,e=oe("#8a6a4a",{r:.9}),t=oe("#6e5338"),i=oe("#e9dccb"),s=new B(new De(1,10,8),e);s.scale.set(.055,.05,.075),n.add(s);let r=new B(new De(1,10,8),i);r.scale.set(.04,.035,.05),r.position.set(0,-.015,.02),n.add(r);let a=new B(new De(.035,10,8),e);a.position.set(0,.045,.05),n.add(a),lr.head=a;let o=new B(new xi(.01,.03,5),oe("#d89b3a"));o.rotation.x=Math.PI/2,o.position.set(0,.04,.09),n.add(o);let l=new B(new Et(.03,.006,.06),t);l.position.set(0,.01,-.08),l.rotation.x=.4,n.add(l);for(let c of[-1,1]){let h=new B(new Et(.07,.005,.05),t);h.position.set(c*.045,.015,0),n.add(h),lr.wings.push(h)}n.position.copy(lr.home),n.rotation.y=Math.PI,xn(n,!0,!1),fe.add(n),lr.g=n}function AT(n,e){if(!(lr.enabled&&Ge==="spring"&&ut<.5)){lr.g.visible=!1;return}let i=lr,s=qe.position;i.t+=n;let r=Math.hypot(s.x-en.x,s.z-en.z);if(i.state==="perch")r<6&&Ho()&&ct("bird"),i.g.visible=!0,i.g.position.copy(i.home),i.g.position.y+=Math.max(0,Math.sin(e*5))*0,Math.random()<n*.5&&(i.g.rotation.y+=(Math.random()-.5)*1.6),i.head.rotation.y=Math.sin(e*2.3)*.4,i.wings.forEach(a=>a.rotation.z=0),r<2.6&&(i.state="fly",i.t=0,D.ctx&&D.on&&D.ctx.state==="running"&&G0(D.ctx.currentTime+.02));else if(i.state==="fly"||i.state==="back"){let a=Math.min(1,i.t/2.4),o=i.state==="fly"?a:1-a,l=o*o*(3-2*o);i.g.position.lerpVectors(i.home,i.away,l),i.g.position.y+=Math.sin(l*Math.PI)*.8,i.g.rotation.y=Math.atan2(i.away.x-i.home.x,i.away.z-i.home.z)+(i.state==="back"?Math.PI:0),i.wings.forEach((c,h)=>c.rotation.z=Math.sin(e*38)*.9*(h?1:-1)),a>=1&&(i.state==="fly"?(i.state="gone",i.t=0,i.g.visible=!1):(i.state="perch",i.t=0))}else i.state==="gone"&&i.t>40&&r>5&&(i.state="back",i.t=0,i.g.visible=!0)}de.met=de.met||{};var qm={first:"\u7B2C\u4E00\u6B21\u8D70\u9032\u5EAD\u9662",bird:"\u71C8\u7C60\u4E0A\u7684\u5C0F\u9CE5",cat:"\u7DE3\u5074\u7761\u8457\u7684\u8C93",catpet:"\u6478\u4E86\u6478\u8C93",frog:"\u624B\u6C34\u7F3D\u908A\u7684\u9752\u86D9",furin:"\u807D\u898B\u98A8\u9234",dragonfly:"\u9EC3\u660F\u7684\u7D05\u873B\u8713",rainbow:"\u96E8\u5F8C\u7684\u5F69\u8679",mist:"\u6E05\u6668\u7684\u8584\u9727",tanuki:"\u4E00\u9583\u800C\u904E\u7684\u5C0F\u72F8\u8C93",fullmoon:"\u6EFF\u6708\u4E0B\u5750\u5728\u7DE3\u5074",snowsit:"\u96EA\u591C\u5750\u5728\u7DE3\u5074",sakura:"\u5750\u770B\u4E00\u5834\u6AFB\u82B1",rainsit:"\u5750\u8457\u807D\u4E86\u4E00\u5834\u96E8",momiji:"\u5750\u770B\u7D05\u8449",fireflies:"\u590F\u591C\u7684\u87A2\u706B\u87F2",koi:"\u9935\u4E86\u9326\u9BC9",wash:"\u5728\u624B\u6C34\u7F3D\u6D17\u4E86\u624B",leaf:"\u5BEB\u4E0B\u7B2C\u4E00\u7247\u8449\u5B50",tea:"\u9EDE\u4E86\u4E00\u7897\u8336",omikuji:"\u62BD\u4E86\u4E00\u5F35\u7C64",listen:"\u9589\u4E0A\u773C\u775B\u807D\u4E86\u4E00\u5206\u9418",zazen:"\u975C\u5750\u5230\u980C\u7F3D\u97FF\u8D77",garden:"\u6392\u4E86\u81EA\u5DF1\u7684\u5EAD\u9662",sky:"\u62AC\u982D\u671B\u8457\u5929\u7A7A",mood:"\u8A18\u4E0B\u4E86\u5FC3\u60C5\u5929\u6C23",note:"\u6536\u9032\u4E00\u53E5\u81EA\u5DF1\u7684\u8A71",photo:"\u62CD\u4E0B\u4E00\u5F35\u5EAD\u9662",bansho:"\u807D\u898B\u508D\u665A\u7684\u9418\u8072",share:"\u628A\u5EAD\u9662\u5206\u4EAB\u7D66\u5225\u4EBA",visitcode:"\u770B\u4E86\u5225\u4EBA\u7684\u5EAD\u9662",stars:"\u591C\u88E1\u671B\u8457\u6EFF\u5929\u661F\u661F",meteor:"\u770B\u898B\u4E00\u9846\u6D41\u661F","mid-autumn":"\u4E2D\u79CB\u7684\u7CF0\u5B50\u8207\u8292\u8349",lantern:"\u5143\u5BB5\u5C4B\u7C37\u4E0B\u7684\u71C8",tanabata:"\u4E03\u5915\u5BEB\u4E86\u4E00\u500B\u9858\u671B"};function Ho(){return!Xf&&Bs==="auto"&&Ge===pf()}function ct(n){de.met[n]||(de.met[n]=Date.now(),de.bookNew=!0,U("bookDot").classList.add("on"),tn())}var co="met",tg={sun:"#e6b84a",cloud:"#a7b0b5",rain:"#5f86b0",fog:"#cfd5d6",snow:"#eef3f7"};function Jf(n){No(),de.bookNew=!1,U("bookDot").classList.remove("on"),tn(),n&&(co=n),document.querySelectorAll("#bookTabs button").forEach(s=>s.classList.toggle("on",s.dataset.t===co)),U("bookStats").textContent=`\u4F86\u904E ${ua} \u6B21\u30FB\u5BEB\u904E ${de.leafCount||0} \u7247\u8449\u5B50\u30FB\u975C\u5750 ${de.zazenMin||0} \u5206\u9418`;let e=U("bookList"),t=U("bookYear");e.style.display="",t.style.display="none";let i=s=>{let r=new Date(s);return`${r.getMonth()+1}\u6708${r.getDate()}\u65E5`};if(co==="met"){let s=Object.entries(de.met).filter(([r])=>qm[r]).sort((r,a)=>r[1]-a[1]);e.innerHTML=s.map(([r,a])=>`<li><span class="d">${i(a)}</span>${qm[r]}</li>`).join("")+'<li class="blank">\u3000</li><li class="blank">\u3000</li><li class="blank">\u3000</li>'}else if(co==="mood"){let s=Object.keys(de.moods).sort((r,a)=>new Date(r.replace(/-/g,"/"))-new Date(a.replace(/-/g,"/"))).slice(-28);e.innerHTML=s.length?'<li class="moodrow">'+s.map(r=>{let a=de.moods[r],o=r.split("-");return`<span class="mchip" style="background:${tg[a]}"><b>${Mf[a][0]}</b><i>${o[1]}/${o[2]}</i></span>`}).join("")+"</li>":'<li class="empty">\u9084\u6C92\u6709\u8A18\u4E0B\u5FC3\u60C5\u5929\u6C23\u3002</li>'}else co==="notes"?e.innerHTML=de.notes.length?de.notes.slice().reverse().map(s=>`<li class="note"><span class="d">${i(s.d)}</span><small>${Ym(s.q||"")}</small><span>${Ym(s.a)}</span></li>`).join(""):'<li class="empty">\u9084\u6C92\u6709\u6536\u9032\u4F86\u7684\u77ED\u53E5\u3002\u8D77\u8EAB\u6642\u7684\u63D0\u554F\uFF0C\u53EF\u4EE5\u6309\u300C\u5BEB\u4E0B\u4F86\u300D\u3002</li>':(e.style.display="none",t.style.display="block",RT());U("book").classList.remove("hidden")}var Ym=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.querySelectorAll("#bookTabs button").forEach(n=>n.onclick=()=>Jf(n.dataset.t));function RT(){let n=U("yearCanvas"),e=Math.min(2,devicePixelRatio||1),t=Math.min(280,innerWidth*.72);n.width=t*e,n.height=t*e,n.style.width=t+"px",n.style.height=t+"px";let i=n.getContext("2d");i.scale(e,e),i.clearRect(0,0,t,t);let s=new Date,r=s.getFullYear(),a=r%4===0&&r%100!==0||r%400===0?366:365,o=t/2,l=t/2,c=t*.4,h=new Set(de.days.filter(f=>f.startsWith(r+"-"))),u=0;for(let f=0;f<a;f++){let d=new Date(r,0,1+f),g=r+"-"+(d.getMonth()+1)+"-"+d.getDate(),x=f/a*Math.PI*2-Math.PI/2,m=o+Math.cos(x)*c,p=l+Math.sin(x)*c,y=h.has(g),v=de.moods[g];y&&u++,i.beginPath(),i.arc(m,p,y?3.6:1.6,0,7),i.fillStyle=y?v?tg[v]:"#6e5038":"rgba(110,100,85,.25)",i.fill(),y&&v==="snow"&&(i.strokeStyle="#9aa6ad",i.lineWidth=.8,i.stroke()),d.toDateString()===s.toDateString()&&(i.beginPath(),i.arc(m,p,7,0,7),i.strokeStyle="#a33f2c",i.lineWidth=1.4,i.stroke())}i.fillStyle="#8a7f72",i.font='11px "Noto Serif TC",serif',i.textAlign="center",i.textBaseline="middle";for(let f=0;f<12;f++){let d=(new Date(r,f,15)-new Date(r,0,1))/864e5,g=d/a*Math.PI*2-Math.PI/2;i.fillText(f+1+"\u6708",o+Math.cos(g)*(c-22),l+Math.sin(g)*(c-22))}i.fillStyle="#2b2824",i.font='600 22px "Noto Serif TC",serif',i.fillText(r,o,l-10),i.font='13px "Noto Serif TC",serif',i.fillStyle="#6e655a",i.fillText(`\u4F86\u904E ${u} \u5929`,o,l+16)}U("bookBtn").onclick=n=>{n.stopPropagation(),Jf()};U("bookClose").onclick=()=>U("book").classList.add("hidden");de.bookNew&&U("bookDot").classList.add("on");ct("first");function mc(n){let e=new Date,t=e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate(),i=0;for(let s of n)i=(i*31+s.charCodeAt(0))%9973;return Eo(t%10007,i,t%97)}function CT(n){return!po.mist||n<4.6||n>9.6?0:n<6.6?In.smoothstep(n,4.6,6.2):1-In.smoothstep(n,7.2,9.6)}var Zm=new js,Qm=new Ie;function Jm(n){return Qm.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),Zm.setFromProjectionMatrix(Qm),Zm.containsPoint(n)}var ng=[];for(let n=0;n<12;n++){let e=new Ni(new vi({map:mr,color:"#f2f4f3",transparent:!0,opacity:0,depthWrite:!1}));e.scale.set(9+le()*5,2.4+le()*1.2,1),e.position.set(-13+le()*26,.5+le()*.8,-3+le()*13),fe.add(e),ng.push(e)}var qt={a:0,target:0,until:0,mesh:null};{let i=[],s=[],r=[];for(let l=0;l<=72;l++){let c=l/72*Math.PI;for(let[h,u]of[[30,0],[33.5,1]])i.push(Math.cos(c)*h,Math.sin(c)*h,0),s.push(l/72,u)}for(let l=0;l<72;l++){let c=l*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}let a=new ft;a.setAttribute("position",new Ue(i,3)),a.setAttribute("uv",new Ue(s,2)),a.setIndex(r);let o=$n(4,64,(l,c,h)=>{let u=l.createLinearGradient(0,h,0,0);[["rgba(150,80,200,0)",0],["rgba(140,90,220,.8)",.12],["rgba(80,120,230,.85)",.28],["rgba(90,190,120,.85)",.46],["rgba(240,220,90,.9)",.62],["rgba(245,150,70,.9)",.78],["rgba(230,80,70,.8)",.9],["rgba(230,80,70,0)",1]].forEach(([f,d])=>u.addColorStop(d,f)),l.fillStyle=u,l.fillRect(0,0,c,h)});o.wrapS=o.wrapT=Fn,qt.mesh=new B(a,new Ln({map:o,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:yt})),qt.mesh.position.set(-4,-14,82),qt.mesh.scale.set(1.1,1,1),qt.mesh.visible=!1,fe.add(qt.mesh)}function PT(){qt.target=.42,qt.until=performance.now()+15e4}function ig(){ls.next=performance.now()+(ls.on?180+Math.random()*180:120+Math.random()*120)*1e3}ig();var Bi={g:null,croakT:3};{let n=new Re,e=oe("#5f8f3a",{r:.6}),t=oe("#a9c46a",{r:.6}),i=oe("#151512",{r:.3}),s=new B(new De(1,12,10),e);s.scale.set(.07,.045,.08),s.position.y=.04,n.add(s);let r=new B(new De(1,10,8),t);r.scale.set(.055,.03,.06),r.position.set(0,.025,.02),n.add(r);for(let a of[-1,1]){let o=new B(new De(.02,8,6),e);o.position.set(a*.035,.085,.045),n.add(o);let l=new B(new De(.01,6,4),i);l.position.set(a*.04,.09,.06),n.add(l);let c=new B(new De(1,8,6),e);c.scale.set(.03,.02,.05),c.position.set(a*.065,.02,-.03),n.add(c)}n.position.set(Qt.x+.6,.22,Qt.z+.4),n.rotation.y=-.6,xn(n,!0,!1),fe.add(n),Bi.g=n}var Un={g:null,sway:0,next:performance.now()+5e3};{let n=new Re,e=_n/8;n.position.set(bn+4.5*e+.3,3.86,-4.72);let t=new B(new Qe(.003,.003,.42,4),oe("#e8e2d2"));t.position.y=-.21,n.add(t);let i=new Re;i.position.y=-.42,n.add(i),Un.bell=i;let s=new B(new De(.07,16,10,0,Math.PI*2,0,Math.PI*.55),new dt({color:"#cfe4ee",transparent:!0,opacity:.55,roughness:.05,metalness:.1,side:yt}));s.position.y=-.07,i.add(s);let r=new B(new De(.012,6,4),oe("#c0392b"));r.position.set(0,-.035,.06),i.add(r);let a=new B(new Qe(.002,.002,.16,4),oe("#e8e2d2"));a.position.y=-.15,i.add(a);let o=new B(new un(.06,.2),oe("#d9eef2",{side:yt}));o.position.y=-.32,i.add(o),Un.paper=o,fe.add(n),Un.g=n}function Kf(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx.currentTime,e=2150+Math.random()*450;for(let[t,i,s]of[[1,.05,1.8],[2.41,.022,1],[3.95,.01,.6]]){let r=D.ctx.createOscillator(),a=D.ctx.createGain();r.type="sine",r.frequency.value=e*t,a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(i,n+.004),a.gain.exponentialRampToValueAtTime(2e-4,n+s),r.connect(a),wn(a,.55),r.start(n),r.stop(n+s+.1)}if(Math.random()<.5){let t=n+.22+Math.random()*.2,i=D.ctx.createOscillator(),s=D.ctx.createGain();i.type="sine",i.frequency.value=e*1.06,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.03,t+.004),s.gain.exponentialRampToValueAtTime(2e-4,t+1.2),i.connect(s),wn(s,.55),i.start(t),i.stop(t+1.3)}fs("\u98A8\u9234"),Ge==="summer"&&Ho()&&ct("furin")}var sg=[];for(let n=0;n<7;n++){let e=new Re,t=oe("#c63b25",{r:.5}),i=new Ln({color:"#f3f0e6",transparent:!0,opacity:.35,side:yt,depthWrite:!1}),s=new B(new Qe(.008,.005,.14,6),t);s.rotation.x=Math.PI/2,s.position.z=-.04,e.add(s);let r=new B(new De(.014,8,6),t);r.position.z=.035,e.add(r);let a=[];for(let[o,l]of[[-1,.012],[1,.012],[-1,-.012],[1,-.012]]){let c=new B(new un(.08,.018),i);c.rotation.x=-Math.PI/2,c.position.set(o*.042,.004,l),e.add(c),a.push(c)}e.scale.setScalar(1.8),e.visible=!1,fe.add(e),sg.push({g:e,wings:a,x:-6+le()*12,y:.8,z:le()*8,tx:0,ty:.8,tz:3,hover:0,ph:le()*6})}var vf={g:null,state:"none",t:0,seen:0,done:!1,spot:null};{let n=new Re,e=oe("#7a5a3c",{r:.95}),t=oe("#a07a52",{r:.95}),i=oe("#2a221b",{r:.8}),s=oe("#e6dac4",{r:.9}),r=new B(new De(1,14,10),e);r.scale.set(.17,.15,.21),r.position.y=.15,n.add(r);let a=new Re;a.position.set(0,.27,.17),n.add(a),vf.head=a,a.add(new B(new De(.11,14,12),t));for(let h of[-1,1]){let u=new B(new De(1,10,8),i);u.scale.set(.045,.032,.03),u.position.set(h*.045,.01,.085),a.add(u);let f=new B(new De(.011,6,4),oe("#0c0b0a",{r:.2}));f.position.set(h*.045,.015,.112),a.add(f);let d=new B(new De(.03,8,6),i);d.position.set(h*.07,.085,-.01),a.add(d)}let o=new B(new De(.04,10,8),s);o.position.set(0,-.03,.1),a.add(o);let l=new B(new De(.012,6,4),i);l.position.set(0,-.015,.14),a.add(l);let c=new B(new Qe(.05,.035,.22,10),e);c.rotation.x=1.1,c.position.set(0,.1,-.22),n.add(c),n.scale.setScalar(1.35),n.visible=!1,xn(n,!0,!1),fe.add(n),vf.g=n}var Km=[{x:-12.3,z:4.4,ry:Math.PI/2,dx:-1,dz:0},{x:-2.5,z:10.55,ry:Math.PI,dx:0,dz:1},{x:12.3,z:1.6,ry:-Math.PI/2,dx:1,dz:0}],rg={"mid-autumn":["\u4E2D\u79CB","\u7DE3\u5074\u4E0A\u64FA\u4E86\u7CF0\u5B50\u548C\u8292\u8349\uFF0C\u665A\u4E0A\u8A18\u5F97\u62AC\u982D\u770B\u770B\u6708\u4EAE\u3002"],lantern:["\u5143\u5BB5","\u5C4B\u7C37\u4E0B\u639B\u8D77\u4E86\u71C8\uFF0C\u591C\u88E1\u6703\u4EAE\u8D77\u4F86\u3002"],tanabata:["\u4E03\u5915","\u7AF9\u5B50\u4E0A\u639B\u8457\u9858\u671B\uFF0C\u4F60\u4E5F\u5BEB\u4E00\u5F35\u5427\u3002"]},bi=(()=>{let n=location.hash.slice(1);if(rg[n])return{kind:n,preview:!0};try{let e=new Intl.DateTimeFormat("zh-TW-u-ca-chinese",{month:"numeric",day:"numeric"}).formatToParts(new Date),t=(e.find(r=>r.type==="month")||{}).value||"",i=parseInt(t.replace(/\D/g,"")),s=parseInt((e.find(r=>r.type==="day")||{}).value);if(!/閏|bis/.test(t)){if(i===8&&s>=13&&s<=16)return{kind:"mid-autumn"};if(i===1&&s>=13&&s<=16)return{kind:"lantern"};if(i===7&&s>=5&&s<=8)return{kind:"tanabata"}}}catch{}return{kind:null}})(),Ti={lanterns:[],glows:[],strips:[]},ca={x:11.15,z:-2.85};if(bi.kind==="mid-autumn"){let n=new Re,e=_n/8;n.position.set(bn+3.5*e,.75,-6.75);let t=oe("#d8bc8a",{r:.8}),i=oe("#f7f3ea",{r:.7}),s=new B(new Et(.34,.12,.34),t);s.position.y=.06,n.add(s);let r=new B(new Et(.4,.02,.4),t);r.position.y=.13,n.add(r);let a=new De(.045,12,10);[[3,.185],[2,.255],[1,.325]].forEach(([h,u])=>{for(let f=0;f<h;f++)for(let d=0;d<h;d++){let g=new B(a,i);g.position.set((f-(h-1)/2)*.088,u,(d-(h-1)/2)*.088),n.add(g)}});let o=new B(new Qe(.06,.075,.34,12),oe("#4a3b30",{r:.4}));o.position.set(.55,.17,.05),n.add(o);let l=oe("#b9a477"),c=oe("#e3d6b5",{r:1});for(let h=0;h<6;h++){let u=(h/6-.5)*1.4,f=new S(.55+Math.sin(u)*.35,1.05+le()*.25,.05+Math.cos(u*2)*.08);n.add(ki(new S(.55,.3,.05),f,.006,.004,l));let d=new B(new De(1,8,6),c);d.scale.set(.035,.16,.035),d.position.copy(f).add(new S(Math.sin(u)*.06,.08,0)),d.rotation.z=-u*.6-.3,n.add(d)}xn(n),fe.add(n),Ti.center=n.position.clone()}if(bi.kind==="lantern"){let n=_n/8,e=oe("#1c1a18");for(let t=0;t<8;t++){let i=bn+(t+.5)*n,s=new Re;s.position.set(i,3.86,-4.62);let r=new B(new Qe(.004,.004,.4,4),e);r.position.y=-.2,s.add(r);let a=new dt({color:"#c8382a",emissive:new ce("#ff6a3a"),emissiveIntensity:.5,roughness:.8}),o=new B(new De(1,16,12),a);o.scale.set(.2,.25,.2),o.position.y=-.62,s.add(o);for(let h of[-.38,-.86]){let u=new B(new Qe(.08,.08,.04,12),e);u.position.y=h,s.add(u)}let l=new B(new Qe(.012,.02,.18,6),oe("#d9a531"));l.position.y=-.97,s.add(l);let c=new Ni(new vi({map:mr,color:"#ff9a5a",transparent:!0,opacity:.2,depthWrite:!1,blending:Ms}));c.scale.set(1.3,1.3,1),c.position.y=-.62,s.add(c),fe.add(s),Ti.lanterns.push({g:s,lm:a,ph:le()*6}),Ti.glows.push(c)}}function DT(n,e){let t=document.createElement("canvas");t.width=64,t.height=256;let i=t.getContext("2d");if(i.fillStyle=e,i.fillRect(0,0,64,256),i.fillStyle="rgba(255,255,255,.25)",i.fillRect(0,0,64,6),n){let r=[...n].slice(0,16),a=r.length<=6?30:r.length<=10?22:16;i.font=`600 ${a}px "Noto Serif TC",serif`,i.fillStyle="rgba(40,32,28,.88)",i.textAlign="center",i.textBaseline="top",r.forEach((o,l)=>i.fillText(o,32,14+l*(a+2)))}let s=new Qn(t);return s.colorSpace=Lt,s}var jm=["#f2c94c","#e87a7a","#7fb3e0","#9ccf8a","#f3f0e8","#c9a0dc"],xf=[];function yf(n,e){let t=xf[e%xf.length],i=jm[Math.floor(Math.random()*jm.length)],s=new Re;s.position.copy(t).add(new S((Math.random()-.5)*.3,0,(Math.random()-.5)*.3));let r=new B(new un(.11,.42),new dt({map:DT(n,i),side:yt,roughness:.9}));r.position.y=-.24,s.add(r),s.rotation.y=Math.random()*6,fe.add(s),Ti.strips.push({g:s,ph:Math.random()*6})}if(bi.kind==="tanabata"){let n=new Re,e=oe("#7f9a4a",{r:.6}),t=oe("#6f9a3e",{r:.8,side:yt});n.position.set(ca.x,0,ca.z);let i=new S(.25,3.9,.05);n.add(ki(new S(0,0,0),i,.06,.03,e));for(let a=1;a<9;a++){let o=new B(new nr(.055-a*.003,.01,5,12),e);o.rotation.x=Math.PI/2,o.position.set(i.x*a/9,i.y*a/9,i.z*a/9),n.add(o)}let s=new un(.06,.32);s.translate(0,.16,0);for(let a=0;a<7;a++){let o=1.6+a*.33,l=a*2.3,c=new S(i.x*o/3.9,o,0),h=c.clone().add(new S(Math.cos(l)*.75,.25,Math.sin(l)*.75));n.add(ki(c,h,.014,.008,e)),xf.push(h.clone().add(n.position));for(let u=0;u<6;u++){let f=new B(s,t);f.position.copy(c).lerp(h,.4+u*.12),f.rotation.set(.9+Math.random()*.8,Math.random()*6,.4),n.add(f)}}xn(n),fe.add(n),Os.push({x:ca.x,z:ca.z,r:.3});for(let a=0;a<9;a++)yf("",a);let r=new Date().getFullYear();de.wishes=de.wishes&&de.wishes.year===r?de.wishes:{year:r,list:[]},de.wishes.list.forEach((a,o)=>yf(a,o+3))}function LT(n){yf(n,Ti.strips.length+2),bi.preview||(de.wishes.list.push(n),ct("tanabata"),tn()),_t("\u9858\u671B\u639B\u4E0A\u53BB\u4E86\u3002",2600),D.ctx&&D.on&&Kf()}function IT(){if(!bi.kind)return;let[n,e]=rg[bi.kind];U("scTitle").textContent=n,U("scText").textContent=e;let t=U("seasonCard");t.classList.add("show"),clearTimeout(Hc),Hc=setTimeout(()=>t.classList.remove("show"),6e3)}var oi={x:bn+1.5*(_n/8),z:-6.95};{let n=new Re;n.position.set(oi.x,.75,oi.z);let e=oe("#b48a55",{r:.75}),t=oe("#5a3f2c",{r:.8}),i=oe("#a8352a",{r:.7}),s=new B(new Qe(.15,.16,.42,6),e);s.position.y=.21,n.add(s);let r=new B(new Qe(.162,.162,.06,6),i);r.position.y=.3,n.add(r);let a=new B(new Qe(.16,.16,.03,6),t);a.position.y=.435,n.add(a);let o=new B(new Et(.016,.2,.016),oe("#ecdcb5"));o.position.set(.03,.52,0),o.rotation.z=.18,n.add(o);let l=$n(256,384,(d,g,x)=>{d.fillStyle="#f3ead6",d.fillRect(0,0,g,x),d.strokeStyle="#6e5038",d.lineWidth=14,d.strokeRect(7,7,g-14,x-14),d.fillStyle="#a8352a",d.font='600 150px "Noto Serif TC",serif',d.textAlign="center",d.textBaseline="middle",d.fillText("\u7C64",g/2,x*.4),d.fillStyle="#4a3b30",d.font='600 34px "Noto Serif TC",serif',d.fillText("\u6BCF\u65E5\u4E00\u5F35",g/2,x*.78)});l.wrapS=l.wrapT=Fn;let c=new B(new Et(.04,.75,.04),t);c.position.set(-.38,.375,.05),n.add(c);let h=new B(new Et(.34,.5,.025),[t,t,t,t,new dt({map:l,roughness:.85,emissive:new ce("#fff3dc"),emissiveMap:l,emissiveIntensity:0}),t]);h.position.set(-.38,.95,.07),h.rotation.y=.15,n.add(h),oi.board=h;let u=new B(new Et(.44,.03,.12),t);u.position.set(-.38,1.22,.07),u.rotation.y=.15,n.add(u);let f=.48;for(let d of[-.25,.25]){let g=new B(new Et(.035,.62,.035),t);g.position.set(f+d,.31,0),n.add(g)}for(let d of[.42,.58]){let g=new B(new Qe(.006,.006,.5,4),oe("#d9c8a0"));g.rotation.z=Math.PI/2,g.position.set(f,d,0),n.add(g);for(let x=0;x<5;x++){let m=new B(new Et(.035,.06,.012),oe("#fbf8f0",{r:.9}));m.position.set(f-.2+x*.1+(Math.random()-.5)*.03,d-.035,0),m.rotation.z=(Math.random()-.5)*.5,n.add(m)}}xn(n),fe.add(n),Os.push({x:oi.x,z:oi.z,r:.2},{x:oi.x+f,z:oi.z,r:.25},{x:oi.x-.38,z:oi.z+.05,r:.18})}var $u=["\u4ECA\u5929\u8A18\u5F97\u559D\u6C34\u3002","\u4ECA\u5929\u53EF\u4EE5\u5C0D\u81EA\u5DF1\u5BEC\u5BB9\u4E00\u9EDE\u3002","\u6162\u6162\u4F86\uFF0C\u4E5F\u662F\u4E00\u7A2E\u524D\u9032\u3002","\u7D2F\u4E86\u5C31\u4F11\u606F\uFF0C\u4E0D\u7528\u89E3\u91CB\u3002","\u4ECA\u5929\u627E\u4E00\u500B\u4EBA\uFF0C\u8AAA\u8072\u8B1D\u8B1D\u3002","\u62AC\u982D\u770B\u770B\u5929\u7A7A\u5427\u3002","\u6709\u4E9B\u4E8B\uFF0C\u653E\u8457\u4E5F\u6C92\u95DC\u4FC2\u3002","\u4ECA\u5929\u597D\u597D\u5403\u4E00\u9813\u98EF\u3002","\u4F60\u5DF2\u7D93\u505A\u5F97\u5F88\u597D\u4E86\u3002","\u8D70\u6162\u4E00\u9EDE\uFF0C\u6703\u770B\u898B\u66F4\u591A\u3002","\u4ECA\u5929\u65E9\u4E00\u9EDE\u7761\u3002","\u7559\u4E00\u9EDE\u6642\u9593\u7D66\u81EA\u5DF1\u3002","\u4E0D\u5B8C\u7F8E\uFF0C\u4E5F\u5F88\u597D\u3002","\u4ECA\u5929\u5C0D\u8EAB\u908A\u7684\u4EBA\u7B11\u4E00\u4E0B\u3002","\u6DF1\u547C\u5438\u4E09\u6B21\uFF0C\u518D\u958B\u59CB\u3002","\u60F3\u5FF5\u8AB0\uFF0C\u5C31\u8DDF\u4ED6\u8AAA\u5427\u3002","\u4ECA\u5929\u4E0D\u7528\u6025\u8457\u56DE\u7B54\u3002","\u628A\u4E00\u4EF6\u5C0F\u4E8B\u505A\u597D\u5C31\u597D\u3002","\u4F60\u7684\u52AA\u529B\uFF0C\u6709\u4EBA\u770B\u898B\u3002","\u8AAA\u300C\u6211\u4E0D\u77E5\u9053\u300D\uFF0C\u4E5F\u6C92\u95DC\u4FC2\u3002","\u4E0B\u96E8\u5929\uFF0C\u4E5F\u6709\u4E0B\u96E8\u5929\u7684\u597D\u3002","\u7D66\u4ECA\u5929\u7684\u81EA\u5DF1\u4E00\u9EDE\u638C\u8072\u3002","\u4ECA\u5929\u51FA\u53BB\u8D70\u4E00\u8D70\u3002","\u5148\u7167\u9867\u597D\u81EA\u5DF1\u3002","\u6709\u9EDE\u4E82\uFF0C\u4E5F\u662F\u751F\u6D3B\u7684\u6A23\u5B50\u3002","\u4ECA\u5929\u807D\u4E00\u9996\u559C\u6B61\u7684\u6B4C\u3002","\u8A18\u5F97\u4F38\u5C55\u4E00\u4E0B\u80A9\u8180\u3002","\u5C11\u770B\u4E00\u9EDE\u87A2\u5E55\uFF0C\u591A\u770B\u4E00\u9EDE\u9060\u65B9\u3002"];function kc(){let n=new Date;return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()}function UT(){let n=kc(),e=!1;if(de.kuji&&de.kuji.date===n)e=!0;else{let i;do i=Math.floor(Math.random()*$u.length);while(de.kuji&&i===de.kuji.i&&$u.length>1);de.kuji={date:n,i},ct("omikuji"),tn()}if(D.ctx&&D.on&&D.ctx.state==="running"){let i=D.ctx.currentTime;for(let s=0;s<7;s++)_i(380+Math.random()*160,300,i+s*.07,.05,.04,"triangle",.2);Gi(i+.7,.35,4200,.8,.03,.2)}let t=new Date;U("kujiText").textContent=$u[de.kuji.i],U("kujiDate").textContent=`${t.getMonth()+1}\u6708${t.getDate()}\u65E5`,U("kujiNote").textContent=e?"\u4ECA\u5929\u5DF2\u7D93\u62BD\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\u770B\u770B\u3002":"",setTimeout(()=>U("kujiCard").classList.add("show"),e?0:650)}U("kujiOk").onclick=()=>U("kujiCard").classList.remove("show");var K={on:!1,stage:"",prog:0,g:null,foam:null,liq:null,whisk:null,down:null,lx:0,ly:0,acc:0,t:0,base:new S,wx:0,wz:0,idle:0};{let n=new Re,e=[[0,0],[.045,0],[.05,.012],[.09,.03],[.108,.07],[.112,.11],[.103,.108],[.088,.06],[.045,.034],[0,.03]].map(([h,u])=>new j(h,u)),t=new B(new Zl(e,40),new dt({color:"#4a3326",roughness:.35,metalness:.05,side:yt}));n.add(t),K.liq=new B(new ts(.099,36),new dt({color:"#3f5f2c",roughness:.3})),K.liq.rotation.x=-Math.PI/2,K.liq.position.y=.094,n.add(K.liq);let i=$n(128,128,(h,u,f)=>{h.fillStyle="#b8cf7a",h.fillRect(0,0,u,f);for(let d=0;d<900;d++){let g=Math.random()*2.2+.4;h.fillStyle=`rgba(${225+Math.random()*30},240,${190+Math.random()*30},${.25+Math.random()*.4})`,h.beginPath(),h.arc(Math.random()*u,Math.random()*f,g,0,7),h.fill()}});K.foam=new B(new ts(.098,36),new dt({map:i,transparent:!0,opacity:0,roughness:.9})),K.foam.rotation.x=-Math.PI/2,K.foam.position.y=.097,n.add(K.foam);let s=new Re,r=oe("#dcc58f",{r:.7}),a=new B(new Qe(.011,.012,.09,10),r);a.position.y=.115,s.add(a);let o=new B(new Qe(.03,.011,.07,18,1,!0),oe("#efe2bd",{side:yt}));o.position.y=.035,s.add(o),s.position.set(0,.07,0),n.add(s),K.whisk=s;let l=new B(new Qe(.035,.035,.06,18),oe("#1d1a18",{r:.25}));l.position.set(-.2,.03,-.05),n.add(l);let c=new B(new Et(.17,.005,.012),r);c.position.set(.2,.004,.1),c.rotation.y=.4,n.add(c),n.scale.setScalar(1.6),n.visible=!1,xn(n),fe.add(n),K.g=n}function cr(n){let e=U("teaHint");if(!n){e.classList.remove("show");return}e.textContent=n,e.classList.add("show")}function NT(){ht&&(K.on=!0,K.stage="whisk",K.prog=0,K.acc=0,K.idle=0,K.wx=K.wz=0,K.base.set(Oc.x,.75,-5.5),qe.visible=!1,K.g.position.copy(K.base),K.g.visible=!0,K.foam.material.opacity=0,K.foam.scale.setScalar(.3),K.liq.material.color.set("#3f5f2c"),K.whisk.position.set(0,.07,0),K.whisk.visible=!0,Hs(null),U("poem").classList.remove("show"),setTimeout(()=>{K.on&&K.stage==="whisk"&&cr("\u7528\u624B\u6307\u5728\u7897\u4E0A\u756B\u5708\uFF0C\u5237\u51FA\u7D30\u7D30\u7684\u6CE1\u6CAB")},900))}function FT(n){let e=n.clientX-K.lx,t=n.clientY-K.ly,i=Math.hypot(e,t);K.lx=n.clientX,K.ly=n.clientY,K.prog=Math.min(1,K.prog+i/(Math.min(innerWidth,innerHeight)*5.5)),K.acc+=i,K.idle=0,K.wx=gt(K.wx+e*7e-4,-.05,.05),K.wz=gt(K.wz+t*7e-4,-.05,.05),K.acc>38&&(K.acc=0,D.ctx&&D.on&&D.ctx.state==="running"&&Gi(D.ctx.currentTime,.12,3800+Math.random()*800,1.4,.045,.15)),K.prog>=1&&K.stage==="whisk"&&(K.stage="ready",cr("\u6CE1\u6CAB\u7D30\u7D30\u7684\u3002\u6367\u8D77\u4F86\uFF0C\u559D\u4E00\u53E3\u3002"),U("teaDrink").classList.remove("hidden"))}U("teaDrink").onclick=()=>{U("teaDrink").classList.add("hidden"),cr(""),K.stage="sip",K.t=0};function ag(){qe.visible=!0,K.on=!1,K.stage="",K.g.visible=!1,cr(""),U("teaDrink").classList.add("hidden"),K.down=null}function zT(n,e){if(K.on){if(K.foam.material.opacity=Math.min(1,K.prog*1.25),K.foam.scale.setScalar(.3+.7*Math.min(1,K.prog*1.1)),K.liq.material.color.set("#3f5f2c").lerp(q0.set("#9dbb5e"),K.prog),K.stage==="whisk")K.wx*=1-n*4,K.wz*=1-n*4,K.whisk.position.set(K.wx,.07,K.wz),K.whisk.rotation.z=K.wx*4,K.whisk.rotation.x=-K.wz*4,K.idle+=n,K.idle>9&&K.prog<1&&(K.idle=0,cr("\u6162\u6162\u756B\u5708\u5C31\u597D\uFF0C\u4E0D\u7528\u6025"));else if(K.stage==="ready")K.whisk.position.lerp(BT.set(.22,0,-.12),n*3),K.whisk.rotation.set(0,0,0);else if(K.stage==="sip"){K.t+=n;let t=Math.min(1,K.t/1.5),i=t*t*(3-2*t);K.whisk.visible=!1,K.g.position.set(K.base.x-.04*i,K.base.y+.75*i,K.base.z-.55*i),K.g.rotation.x=-.35*i,K.t>1&&!K.sipped&&(K.sipped=!0,D.ctx&&D.on&&D.ctx.state==="running"&&Gi(D.ctx.currentTime,.55,900,.7,.05,.2,"lowpass")),K.t>2&&(K.sipped=!1,K.g.rotation.x=0,ag(),ct("tea"),cr("\u5FAE\u82E6\uFF0C\u7136\u5F8C\u56DE\u7518\u3002"),setTimeout(()=>{K.on||(cr(""),ht&&setTimeout(()=>{ht&&!K.on&&!It.mode&&Hs("choices")},700))},3800))}}}var BT=new S,$m=0;function OT(n,e){let t=performance.now(),i=Fo(),s=qe.position,r=Ho();t>ls.next&&(ls.on=!ls.on,ig(),hs(),fr(),!ls.on&&Ge==="summer"&&i>=12&&i<17.5&&Math.random()<.6&&PT()),t>qt.until&&(qt.target=0),(Ge!=="summer"||ut>.3)&&(qt.target=0),qt.a+=(qt.target-qt.a)*(1-Math.exp(-n*.35)),qt.mesh.material.opacity=qt.a,qt.mesh.visible=qt.a>.01,qt.a>.25&&r&&ct("rainbow");for(let c of ng)c.material.opacity=Nn*.32,c.visible=Nn>.01,c.position.x+=n*.12,c.position.x>14&&(c.position.x=-14);Nn>.5&&r&&ct("mist");let a=Ge==="summer"&&po.frog;Bi.g.visible=a,a&&(Math.hypot(s.x-Bi.g.position.x,s.z-Bi.g.position.z)<3&&(r&&ct("frog"),Bi.croakT-=n,Bi.croakT<=0&&(Bi.croakT=5+Math.random()*5,D.ctx&&D.on&&D.ctx.state==="running"&&V0(D.ctx.currentTime+.02),Bi.g.scale.y=1.15)),Bi.g.scale.y+=(1-Bi.g.scale.y)*n*6),Un.g.visible=Ge==="summer",Un.g.visible&&(t>Un.next&&(Un.next=t+6e3+Math.random()*11e3,Un.sway=1,Kf()),Un.sway*=1-n*.8,Un.bell.rotation.z=Math.sin(e*5)*.25*Un.sway+Math.sin(e*.8)*.03,Un.paper.rotation.y=Math.sin(e*3)*.6*Un.sway,Un.paper.rotation.x=Math.sin(e*4.3)*.3*Un.sway);let o=Ge==="autumn"&&po.dragon&&i>=15.5&&i<=18.7&&ut<.5;for(let c of sg)if(c.g.visible=o,!!o){if(c.hover>0)c.hover-=n,c.x+=Math.sin(e*9+c.ph)*.002,c.y+=Math.sin(e*7+c.ph)*.0015;else{let h=c.tx-c.x,u=c.ty-c.y,f=c.tz-c.z,d=Math.hypot(h,u,f);if(d<.08)c.hover=.5+Math.random()*1.8,c.tx=-10+Math.random()*20,c.ty=.4+Math.random()*.9,c.tz=-2.5+Math.random()*11.5;else{let g=Math.min(d,2.4*n);c.x+=h/d*g,c.y+=u/d*g,c.z+=f/d*g,c.g.rotation.y=Math.atan2(h,f)}}c.g.position.set(c.x,c.y,c.z),c.wings.forEach((h,u)=>h.rotation.y=Math.sin(e*60+u)*.35),r&&Jm(c.g.position)&&Math.hypot(s.x-c.x,s.z-c.z)<9&&ct("dragonfly")}let l=vf;if(l.state==="none"&&!l.done&&po.tanuki&&i>=16.5&&i<=19.3&&(l.spot=Km[Math.floor(Math.random()*Km.length)],l.state="peek",l.t=0,l.g.visible=!0),l.state!=="none"&&l.spot){let c=l.spot;l.t+=n;let h=0;if(l.state==="peek")h=Math.min(1,l.t/1.5),h>=1&&(l.state="watch",l.t=0);else if(l.state==="watch"){h=1;let u=Math.atan2(s.x-c.x,s.z-c.z)-c.ry;l.head.rotation.y=gt(((u+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,-.8,.8),Jm(l.g.position)&&(l.seen+=n,l.seen>1.2&&r&&ct("tanuki")),(Math.hypot(s.x-c.x,s.z-c.z)<7||l.t>60)&&(l.state="hide",l.t=0)}else l.state==="hide"&&(h=1-Math.min(1,l.t/.5),h<=0&&(l.state="none",l.done=!0,l.g.visible=!1));l.g.position.set(c.x+c.dx*(1-h)*.8,0,c.z+c.dz*(1-h)*.8),l.g.rotation.y=c.ry}oi.board.material[4].emissiveIntensity=ut*.35,ht&&r&&ut>.6&&(Co.illum>.93&&ct("fullmoon"),Ge==="winter"&&ct("snowsit")),ht&&r&&performance.now()-zf>2e4&&(Ge==="spring"&&ut<.5&&ct("sakura"),Ge==="summer"&&Gn.visible&&ct("rainsit"),Ge==="autumn"&&ut<.5&&ct("momiji")),zo.visible&&r&&ct("fireflies"),bi.kind==="lantern"&&(Ti.lanterns.forEach((c,h)=>{c.lm.emissiveIntensity=.35+1.4*ut+Math.sin(e*2+c.ph)*.05,c.g.rotation.z=Math.sin(e*.9+c.ph)*.03}),Ti.glows.forEach(c=>c.material.opacity=.08+.5*ut),!bi.preview&&ut>.5&&($m+=n,$m>5&&ct("lantern"))),bi.kind==="mid-autumn"&&!bi.preview&&Ti.center&&Math.hypot(s.x-Ti.center.x,s.z-Ti.center.z)<3.5&&ct("mid-autumn");for(let c of Ti.strips)c.g.rotation.z=Math.sin(e*1.3+c.ph)*.08}var ef=new S;function HT(n,e,t){let i=1-Math.exp(-n*9),s=q.arms[0],r=q.arms[1],a=qe.position,o=Gn.visible&&!ht&&!On&&a.y<.3&&!Te.on;q.umbK+=((o?1:0)-q.umbK)*(1-Math.exp(-n*4)),q.umb.visible=q.umbK>.05,q.umb.scale.set(.3+.7*q.umbK,q.umbK,.3+.7*q.umbK);let l=ut>.45&&!ht&&!Te.on;q.lan.visible=l,q.lanLight.intensity=l?1.5+Math.sin(e*9)*.08+Math.sin(e*14)*.05:0;let c=Ge==="summer"&&!o&&!On&&!ht;q.fan.visible=c,!t&&!ht&&!Te.on&&!q.anim&&(q.idleT+=n,q.idleT>7&&(q.idleT=-(4+Math.random()*5),Qc(["stretch","sky","crouch"][Math.floor(Math.random()*3)]))),(t||ht)&&(q.idleT=0,q.anim&&q.anim!=="bow"&&q.anim!=="wash"&&(q.anim=null));let h=.1,u=-.08,f=.1,d=.08,g=0,x=Math.sin(e*1.6)*.006,m=0,p=0,y=!1;if(t&&!ht&&(x=Math.abs(Math.sin(is))*.045,p=Math.sin(is)*.06,h=.1+Math.sin(is)*.45,f=.1-Math.sin(is)*.45),On&&(h=-.75,u=.12,f=-.7,d=-.12,m=t?.1+Math.sin(is*.5)*.03:.06,t&&(h+=Math.sin(is*.5)*.12)),c&&(h=-.45+Math.sin(e*(t?7:3.5))*.2,u=1),q.umbK>.05&&(h=-1.15,u=.3),l&&(f=-.55,d=.05),ht&&(x=-.05,y=!0,h=-.5,u=.2,f=-.5,d=-.2,m=.04),q.anim){q.animT+=n;let v=q.animT,M=A=>Math.sin(Math.min(1,v/A)*Math.PI);if(q.anim==="bow"){let A=M(1.5);m=.5*A,g=.25*A,h=f=-.2*A+.1,v>1.5&&(q.anim=null)}else if(q.anim==="wash"){let A=Math.min(1,v/.4)*Math.min(1,(2.4-v)/.4);h=f=-1.05*A+.1*(1-A),u=.42*A,d=-.42*A,g=.25*A,m=.08*A,v>2.4&&(q.anim=null)}else if(q.anim==="stretch"){let A=M(2.4);h=f=-2.9*A+.1*(1-A),u=-.25*A,d=.25*A,g=-.35*A,x+=.03*A,v>2.4&&(q.anim=null)}else if(q.anim==="sky")g=-.6*(Math.min(1,v/.8)*Math.min(1,(3.6-v)/.8)),v>3.6&&(q.anim=null);else if(q.anim==="crouch"){let A=Math.min(1,v/.6)*Math.min(1,(3.4-v)/.6);x=-.17*A,m=.22*A,g=.4*A,h=f=-.55*A+.1*(1-A),v>3.4&&(q.anim=null)}}if(Tn.position.y+=(x-Tn.position.y)*i,Tn.rotation.x+=(m-Tn.rotation.x)*i,Tn.rotation.z+=(p-Tn.rotation.z)*i,s.rotation.x+=(h-s.rotation.x)*i,s.rotation.z+=(u-s.rotation.z)*i,r.rotation.x+=(f-r.rotation.x)*i,r.rotation.z+=(d-r.rotation.z)*i,q.head.rotation.x+=(g-q.head.rotation.x)*i,q.legs.visible=y,q.feet.forEach(v=>v.visible=!y),q.scarf.visible&&(q.scarfTail.rotation.z=.15+Math.sin(e*2.2)*.06+(t?Math.sin(is)*.12:0)),Ge==="winter"&&!K.on&&(q.breathT-=n,q.breathT<=0)){q.breathT=3.2+Math.random()*.8;let v=q.fog.find(M=>M.t>=1.6)||q.fog[0];v.sp.material.map||(v.sp.material.map=mr,v.sp.material.needsUpdate=!0),q.head.localToWorld(ef.set(0,-.06,.24)),v.sp.position.copy(ef),v.t=0,v.sp.visible=!0}for(let v of q.fog){if(v.t>=1.6){v.sp.visible=!1;continue}v.t+=n;let M=v.t/1.6;v.sp.position.y+=n*.12;let A=ef.set(Math.sin(qe.rotation.y),0,Math.cos(qe.rotation.y));v.sp.position.addScaledVector(A,n*.18),v.sp.scale.setScalar(.08+M*.3),v.sp.material.opacity=.32*(1-M)}if(Ge==="spring"&&!ht&&a.y<.3&&(q.petalT-=n,q.petalT<=0&&(q.petalT=18+Math.random()*25,q.petals.length<5))){let v=.08+Math.random()*.24,M=Math.random()*6.28,A=new B(new ts(.045,6),new Ln({color:["#f6c3d0","#f9dbe3","#fff4f6"][Math.floor(Math.random()*3)],side:yt}));A.position.set(Math.cos(M)*v,.21+.1-v*(.2/.38)+.004,Math.sin(M)*v),A.rotation.set(-Math.PI/2+.48*Math.cos(M)*0,Math.random()*6,0),A.lookAt(q.head.localToWorld(new S(Math.cos(M)*v*3,2,Math.sin(M)*v*3))),q.head.add(A),q.petals.push(A)}}function kT(n){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let e=D.ctx.currentTime;if(n==="gravel")JS();else if(n==="wood"){let t=.8+Math.random()*.4;Gi(e,.04,1700,2.2,.016*t,.08),_i(230,170,e,.07,.017*t,"sine",.1)}else n==="stone"?(_i(150,95,e,.09,.06,"sine",.15),Gi(e,.06,650,1,.03,.1,"lowpass")):Gi(e,.08,900,.8,.022,.05,"lowpass")}function og(){if(Te.on||K.on)return;ot.on=!0,No(),U("poem").classList.remove("show");let n=qe.position;ut>.5&&jn.visible?(ot.yaw=Math.atan2(jn.position.x-n.x,jn.position.z-n.z),ot.pitch=Math.min(.9,Math.atan2(jn.position.y-n.y,Math.hypot(jn.position.x-n.x,jn.position.z-n.z))+.25)):qt.a>.1?(ot.yaw=Math.atan2(-4-n.x,82-n.z),ot.pitch=.25):(ot.yaw=ht?0:qe.rotation.y,ot.pitch=.6),ot.fov=St.fov,qe.visible=!1,document.body.classList.add("gazing"),U("gazeHint").classList.add("show"),setTimeout(()=>U("gazeHint").classList.remove("show"),4200),ct("sky"),ut>.6&&Ho()&&ct("stars")}function eh(){ot.on&&(ot.on=!1,qe.visible=!K.on,document.body.classList.remove("gazing"),ed(),U("gazeHint").classList.remove("show"))}U("gazeBtn").onclick=og;U("gazeBack").onclick=eh;U("zoomIn").onclick=()=>{ot.on?ot.fov=gt(ot.fov*.8,18,75):hi=gt(hi*.8,2.6,16)};U("zoomOut").onclick=()=>{ot.on?ot.fov=gt(ot.fov*1.25,18,75):hi=gt(hi*1.25,2.6,16)};addEventListener("keydown",n=>{n.code==="KeyG"&&(ot.on?eh():og()),(n.code==="Equal"||n.code==="NumpadAdd")&&U("zoomIn").click(),(n.code==="Minus"||n.code==="NumpadSubtract")&&U("zoomOut").click()});var GT=(()=>{let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");for(let s=0;s<22;s++){let r=24+Math.random()*80,a=50+Math.random()*30-Math.abs(r-64)*.25,o=12+Math.random()*20,l=t.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,a,o,0,7),t.fill()}let i=new Qn(e);return i.colorSpace=Lt,i})(),lg=[];for(let n=0;n<20;n++){let e=new vi({map:GT,transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),t=new Ni(e),i=Math.random()*Math.PI*2,s=40+Math.random()*45;t.position.set(Math.cos(i)*s,24+Math.random()*26,Math.sin(i)*s);let r=18+Math.random()*22;t.scale.set(r,r*.5,1),t.renderOrder=-5,fe.add(t),lg.push({sp:t,a:i,r:s,sp0:.004+Math.random()*.004})}var dn={m:null,t:9,next:performance.now()+15e3};{let n=new ft;n.setAttribute("position",new Ue([0,0,0,0,0,0],3)),dn.m=new Xa(n,new As({color:"#ffffff",transparent:!0,opacity:0,fog:!1})),dn.m.frustumCulled=!1,fe.add(dn.m)}var Xt={g:new Re,t:99,next:performance.now()+2e4,dir:new S};{let n=new Ln({color:"#2d2a28",side:yt,fog:!1});for(let e=0;e<6;e++){let t=new Re;for(let r of[-1,1]){let a=new B(new un(.9,.18),n);a.position.x=r*.42,a.rotation.z=r*.25,t.add(a)}let i=Math.ceil(e/2),s=e%2?1:-1;t.position.set(s*i*1.6,0,-i*1.4),Xt.g.add(t)}Xt.g.visible=!1,fe.add(Xt.g)}function VT(n,e){let t=1-ut,i=performance.now(),s=Math.max(0,1-Math.abs(Fo()-17.8)/1.3)*t;for(let r of lg){r.a+=n*r.sp0,r.sp.position.x=Math.cos(r.a)*r.r,r.sp.position.z=Math.sin(r.a)*r.r;let a=jt==="sun"?.35:jt==="cloud"||jt==="rain"||jt==="snow"?1.6:1;r.sp.material.opacity=Math.min(1,(.25+.55*t)*(Ge==="summer"&&Gn.visible?1.15:1)*(1-Nn*.6)*a);let o=a>1?.18:0;r.sp.material.color.setRGB(1-ut*.72-o,1-ut*.7-s*.15-o,1-ut*.62-s*.32-o*.8)}if(ut>.7&&i>dn.next){dn.next=i+(ot.on?12e3:3e4)+Math.random()*25e3,dn.t=0;let r=Math.random()*Math.PI*2;dn.p0=new S(Math.cos(r)*60,45+Math.random()*20,Math.sin(r)*60),dn.d=new S(-Math.sin(r)+Math.random()*.4,-.35,Math.cos(r)).normalize()}if(dn.t<1.2){dn.t+=n;let r=dn.t/1.2,a=dn.p0.clone().addScaledVector(dn.d,r*40),o=a.clone().addScaledVector(dn.d,-6),l=dn.m.geometry.attributes.position;l.setXYZ(0,o.x,o.y,o.z),l.setXYZ(1,a.x,a.y,a.z),l.needsUpdate=!0,dn.m.material.opacity=Math.sin(r*Math.PI)*.9,ot.on&&r>.3&&Ho()&&ct("meteor")}else dn.m.material.opacity=0;if(t>.6&&!Gn.visible&&i>Xt.next){Xt.next=i+4e4+Math.random()*5e4,Xt.t=0;let r=Math.random()*Math.PI*2;Xt.p0=new S(Math.cos(r)*70,30+Math.random()*12,Math.sin(r)*70),Xt.dir.set(-Math.cos(r),0,-Math.sin(r)),Xt.g.lookAt(Xt.p0.clone().sub(Xt.dir)),Xt.g.visible=!0}Xt.g.visible&&(Xt.t+=n,Xt.g.position.copy(Xt.p0).addScaledVector(Xt.dir,Xt.t*7),Xt.g.children.forEach((r,a)=>r.children.forEach((o,l)=>o.rotation.z=(l?1:-1)*(.25+Math.sin(e*6+a)*.35))),Xt.t>20&&(Xt.g.visible=!1))}var Mf={sun:["\u6674","\u4ECA\u5929\u662F\u6674\u5929\uFF0C\u597D\u597D\u66EC\u4E00\u66EC\u3002"],cloud:["\u96F2","\u96F2\u591A\u4E00\u9EDE\u7684\u65E5\u5B50\uFF0C\u6162\u6162\u8D70\u5C31\u597D\u3002"],rain:["\u96E8","\u4E0B\u96E8\u7684\u65E5\u5B50\uFF0C\u5C31\u8B93\u5B83\u4E0B\u5427\u3002"],fog:["\u9727","\u9727\u6FDB\u6FDB\u7684\uFF0C\u770B\u4E0D\u6E05\u695A\u4E5F\u6C92\u95DC\u4FC2\u3002"],snow:["\u96EA","\u4E0B\u96EA\u4E86\uFF0C\u5B89\u5B89\u975C\u975C\u7684\u3002"]},xo=!1;function cg(n){xo=!!n,document.querySelectorAll("#moodPick [data-m]").forEach(e=>e.classList.toggle("on",e.dataset.m===jt)),U("moodPick").classList.remove("hidden")}function th(n){U("moodPick").classList.add("hidden");let e=n!==jt;if(jt=n,n?(de.moods[kc()]=n,tn(),ct("mood"),U("moodBtn").textContent=Mf[n][0],e&&_t(Mf[n][1],3800)):U("moodBtn").textContent="\u5FC3",e){let t=U("fade");xo?(hs(),D.ctx&&fr(),bt.cubeDirty=!0,_c=""):(t.classList.add("on"),setTimeout(()=>{hs(),D.ctx&&fr(),bt.cubeDirty=!0,_c="",t.classList.remove("on")},380))}xo&&(xo=!1,setTimeout(uf,n?4200:400),setTimeout(cT,n?9e3:5200),setTimeout(IT,n?8800:5e3))}document.querySelectorAll("#moodPick [data-m]").forEach(n=>n.onclick=()=>th(n.dataset.m));U("moodSkip").onclick=()=>th(jt&&!xo?jt:null);U("moodClear").onclick=()=>th(null);U("moodBtn").onclick=()=>cg(!1);var li={on:!1,cap:"",seal:!0};function hg(){Te.on||(ot.on&&eh(),li.on=!0,No(),document.body.classList.add("photo"),U("phStamp").querySelector("small").textContent=Ef(),jf(),_t("\u627E\u4E00\u500B\u559C\u6B61\u7684\u89D2\u5EA6",2400))}function WT(){li.on=!1,document.body.classList.remove("photo"),U("phCap").style.display="none",U("phStamp").style.display="none"}var Ef=()=>{let n=new Date;return n.getFullYear()+"."+(n.getMonth()+1)+"."+n.getDate()};function jf(){U("phCap").textContent=li.cap,U("phCap").style.display=li.cap?"block":"none",U("phStamp").style.display=li.seal?"flex":"none",U("phSeal").classList.toggle("on",li.seal)}U("photoBtn").onclick=hg;U("phExit").onclick=WT;U("phSeal").onclick=()=>{li.seal=!li.seal,jf()};U("phCaption").onclick=()=>$c("\u70BA\u9019\u5F35\u7167\u7247\u5BEB\u4E00\u53E5","\u5E7E\u500B\u5B57\u5C31\u597D",24,"\u597D",n=>{li.cap=n,jf()},!1);function XT(){Jn?Jn.render():Vn.render(fe,St)}U("phShot").onclick=()=>{XT();let n=Vn.domElement,e=n.width,t=n.height,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");s.drawImage(n,0,0);let r=Math.min(e,t)/100;if(li.cap){s.save(),s.font=`600 ${5.2*r}px "Noto Serif TC","Songti TC",serif`,s.textAlign="center",s.textBaseline="top";let o=[...li.cap],l=e-9*r,c=8*r;s.shadowColor="rgba(255,255,255,.9)",s.shadowBlur=2.5*r,s.fillStyle="#2b2824",o.forEach((h,u)=>s.fillText(h,l,c+u*6.4*r)),s.restore()}if(li.seal){let o=9*r,l=5*r,c=t-5*r-o;s.fillStyle="rgba(163,63,44,.92)",s.beginPath(),s.roundRect?s.roundRect(l,c,o,o,1.2*r):s.rect(l,c,o,o),s.fill(),s.fillStyle="#fbf3e6",s.font=`600 ${5.6*r}px "Noto Serif TC",serif`,s.textAlign="center",s.textBaseline="middle",s.fillText("\u5EAD",l+o/2,c+o/2+.3*r),s.fillStyle="rgba(255,255,255,.92)",s.font=`${2.4*r}px "Noto Serif TC",serif`,s.textAlign="left",s.shadowColor="rgba(0,0,0,.5)",s.shadowBlur=r,s.fillText("\u67AF\u5C71\u6C34\u5C0F\u5EAD\u3000"+Ef(),l+o+2*r,c+o-1.5*r)}let a=i.toDataURL("image/jpeg",.92);U("phImg").src=a,U("phResult").classList.remove("hidden"),ct("photo"),U("phDownload").onclick=()=>{try{let o=document.createElement("a");o.href=a,o.download="\u67AF\u5C71\u6C34\u5C0F\u5EAD_"+Ef()+".jpg",document.body.appendChild(o),o.click(),o.remove()}catch{}},D.ctx&&D.on&&D.ctx.state==="running"&&Gi(D.ctx.currentTime,.06,3e3,1,.05,.05)};U("phClose").onclick=()=>U("phResult").classList.add("hidden");function qT(n){if(n.k)return n.k;let e=JSON.stringify(n.rocks);for(let t=0;t<wo.length;t++)if(JSON.stringify(wo[t].rocks)===e)return"d"+t;for(let t in Lo)if(JSON.stringify(Lo[t].rocks)===e)return t;return"x"}function ug(){let n=Hn.map(e=>{let t=qT(e),i=[t,Math.round(e.x*10),Math.round(e.z*10),Math.round((e.rot||0)*180/Math.PI%360),Math.round((e.scale||1)*100),e.seed||1].join(",");return t==="x"&&(i+=":"+Math.round(e.moss*100)+":"+e.rocks.map(s=>s.map(r=>Math.round(r*100)).join("_")).join("~")),i});return"KS1-"+btoa(unescape(encodeURIComponent(n.join(";")))).replace(/\+/g,"-").replace(/\//g,".").replace(/=+$/,"")}function fg(n){n=String(n).trim();let e=n.match(/KS1-([A-Za-z0-9\-.]+)/);if(!e)return null;let t;try{let s=e[1].replace(/-/g,"+").replace(/\./g,"/");for(;s.length%4;)s+="=";t=decodeURIComponent(escape(atob(s)))}catch{return null}let i=[];for(let s of t.split(";").slice(0,20)){let[r,a,o]=s.split(":"),l=r.split(","),c=l[0],h=null;/^d[0-4]$/.test(c)?h=wo[+c[1]]:Lo[c]&&(h=Lo[c]);let u={k:c,x:gt(+l[1]/10,we.x0+.5,we.x1-.5),z:gt(+l[2]/10,we.z0+.5,we.z1-.5),rot:(+l[3]||0)*Math.PI/180,scale:gt((+l[4]||100)/100,.6,1.8),seed:+l[5]||1};if(h)u.moss=h.moss,u.rocks=JSON.parse(JSON.stringify(h.rocks));else if(c==="x"&&a)u.moss=gt(+a/100,.3,3),u.rocks=(o||"").split("~").filter(Boolean).slice(0,8).map(f=>f.split("_").map(d=>+d/100));else continue;u.rocks.every(f=>f.length===4&&f.every(d=>isFinite(d)))&&i.push(u)}return i.length?i:null}var dg="share";function pg(n){dg=n;let e=U("codeText");n==="share"?(U("codeTitle").textContent="\u628A\u9019\u4E32\u4EE3\u78BC\u50B3\u7D66\u670B\u53CB\uFF0C\u4ED6\u5C31\u80FD\u770B\u5230\u4F60\u6392\u7684\u5EAD\u9662",e.value=ug(),e.readOnly=!0,U("codeOk").textContent="\u8907\u88FD",U("codeNote").textContent="",ct("share")):(U("codeTitle").textContent="\u8CBC\u4E0A\u670B\u53CB\u7D66\u4F60\u7684\u5EAD\u9662\u4EE3\u78BC",e.value="",e.readOnly=!1,U("codeOk").textContent="\u5957\u7528",U("codeNote").textContent="\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662\u6703\u5148\u6536\u597D\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u63DB\u56DE\u4F86\u3002",setTimeout(()=>e.focus(),50)),U("codeModal").classList.remove("hidden")}U("codeCancel").onclick=()=>U("codeModal").classList.add("hidden");U("codeText").addEventListener("keydown",n=>n.stopPropagation());U("codeOk").onclick=async()=>{let n=U("codeText");if(dg==="share"){n.select();let t=!1;try{await navigator.clipboard.writeText(n.value),t=!0}catch{try{t=document.execCommand("copy")}catch{}}U("codeNote").textContent=t?"\u5DF2\u8907\u88FD\u3002":"\u8ACB\u9577\u6309\u6216\u9078\u53D6\u4E0A\u9762\u7684\u4EE3\u78BC\uFF0C\u624B\u52D5\u8907\u88FD\u3002";return}let e=fg(n.value);if(!e){U("codeNote").textContent="\u9019\u4E32\u4EE3\u78BC\u597D\u50CF\u4E0D\u592A\u5C0D\uFF0C\u518D\u78BA\u8A8D\u4E00\u4E0B\uFF1F";return}de.layoutBackup||(de.layoutBackup=JSON.parse(JSON.stringify(Hn))),Hn=e,ur(),us(null),U("codeModal").classList.add("hidden"),$f(),ct("visitcode"),tn(),_t("\u9019\u662F\u670B\u53CB\u7684\u5EAD\u9662\u3002\u6309\u300C\u5B8C\u6210\u300D\u5F8C\uFF0C\u6C99\u7D0B\u6703\u91CD\u65B0\u8019\u597D\u3002",4200)};function $f(){U("restoreMine").classList.toggle("hidden",!de.layoutBackup)}U("shareCode").onclick=()=>pg("share");U("enterCode").onclick=()=>pg("enter");U("restoreMine").onclick=()=>{de.layoutBackup&&(Hn=de.layoutBackup,delete de.layoutBackup,ur(),us(null),$f(),tn(),_t("\u63DB\u56DE\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662\u4E86\u3002"))};$f();function mg(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx;for(let e=0;e<3;e++){let t=n.currentTime+.1+e*7.5,i=n.createGain();i.gain.value=.16,wn(i,.8);for(let[s,r,a]of[[1,1,14],[1.007,.7,14],[2.01,.5,9],[2.76,.35,7],[3.42,.22,5],[5.03,.1,3]]){let o=n.createOscillator(),l=n.createGain();o.type="sine",o.frequency.value=98*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.02),l.gain.exponentialRampToValueAtTime(4e-4,t+a),o.connect(l),l.connect(i),o.start(t),o.stop(t+a+.1)}Gi(t,.12,500,1,.05,.5,"lowpass")}fs("\u665A\u9418")}function YT(){let n=new Date;n.getHours()===18&&n.getMinutes()===0&&de.bellDay!==kc()&&(de.bellDay=kc(),tn(),mg(),_t("\u9060\u8655\u50B3\u4F86\u665A\u9418\u3002",4500),ct("bansho"))}var Mi={t:99,next:performance.now()+15e3,dur:6,lastAudio:0};function ZT(n){let e=performance.now();if(e>Mi.next&&(Mi.t=0,Mi.dur=5+Math.random()*3,Mi.next=e+2e4+Math.random()*35e3,Ge==="summer"&&setTimeout(Kf,700)),Mi.t<Mi.dur?(Mi.t+=n,ar.value=Math.sin(Math.PI*Math.min(1,Mi.t/Mi.dur))**1.5):ar.value=0,D.ctx&&D.wind&&e-Mi.lastAudio>200){Mi.lastAudio=e;let t=D.ctx.currentTime,i=Jc[Ge].wind+(jt==="cloud"||jt==="snow"?.02:0);D.wind.gain.setTargetAtTime(i+ar.value*.09,t,.3),D.rustle&&D.rustle.gain.setTargetAtTime(Ge==="winter"?ar.value*.012:ar.value*.05,t,.3)}}function fo(n,e){if(zc(n,e)&&hr(n,e)<.35)return .07;if(n>=bn&&n<=zs){if(e>=-7.6&&e<-5)return .75;if(e>=-5&&e<-4.3)return .4}return 0}function gg(n,e){n=gt(n,-11.7,11.7),e=gt(e,-7.35,9.7);for(let t of[Os,bf])for(let i of t){let s=n-i.x,r=e-i.z,a=Math.hypot(s,r),o=i.r+.22;a<o&&a>1e-5&&(n=i.x+s/a*o,e=i.z+r/a*o)}return[n,e]}var Ds=.32,hi=ga?9.5:10,yo=.4,Gc=Math.PI,ot={on:!1,yaw:0,pitch:.6,fov:55};function ed(){St.fov=St.aspect<.8?62:50,St.updateProjectionMatrix()}ed();var ia=new S().copy(qe.position),sa=new S().copy(qe.position);St.position.set(qe.position.x+2,5.5,Math.min(qe.position.z+7,10.4));var zi=null,tf=0,e0=1,nf=new j(qe.position.x,qe.position.z),is=0,t0=new $r;function QT(n,e){let t=gn.x+(Oi.KeyD||Oi.ArrowRight?1:0)-(Oi.KeyA||Oi.ArrowLeft?1:0),i=gn.y+(Oi.KeyW||Oi.ArrowUp?1:0)-(Oi.KeyS||Oi.ArrowDown?1:0),s=Math.hypot(t,i);s>1&&(t/=s,i/=s);let r=s>.1&&!Te.on;ot.on&&r&&eh(),ht&&r&&Uo();let a=qe.position;if(!ht&&r){let h=-Math.sin(Ds),u=-Math.cos(Ds),f=Math.cos(Ds),d=-Math.sin(Ds),g=f*t+h*i,x=d*t+u*i,m=Math.hypot(g,x);g/=m,x/=m;let p=(On?1.7:2.7)*Math.min(1,s),[y,v]=gg(a.x+g*p*n,a.z+x*p*n);Yu(y,v)?Yu(y,a.z)?Yu(a.x,v)||(a.z=v):a.x=y:(a.x=y,a.z=v),Gc=Math.atan2(g,x),is+=n*p*3.6}ht&&(a.x+=(Oc.x-a.x)*(1-Math.exp(-n*6)),a.z+=(Oc.z-a.z)*(1-Math.exp(-n*6)));let o=Gc-qe.rotation.y;o=((o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,qe.rotation.y+=o*(1-Math.exp(-n*11));let l=fo(a.x,a.z);if(a.y+=(l-a.y)*(1-Math.exp(-n*14)),HT(n,e,r),!ht&&r&&a.y<.1&&!zc(a.x,a.z))if(On){let h=qe.rotation.y,u=a.x-Math.sin(h)*.75,f=a.z-Math.cos(h)*.75;lT(u,f),uo(u,f)?zi?Math.hypot(u-zi.x,f-zi.z)>.07&&(BS(zi.x,zi.z,u,f),zi={x:u,z:f}):zi={x:u,z:f}:zi=null}else uo(a.x,a.z)&&(tf+=Math.hypot(a.x-nf.x,a.z-nf.y),tf>.4&&(tf=0,e0*=-1,OS(a.x,a.z,qe.rotation.y,e0)));else r&&(zi=null);if(On||(zi=null),r&&!ht){let h=Math.floor(is/Math.PI);h!==q.stepIdx&&(q.stepIdx=h,kT(zc(a.x,a.z)&&hr(a.x,a.z)<.35?"stone":a.y>.3?"wood":uo(a.x,a.z)?"gravel":"soft"))}KS(On&&r&&!ht&&a.y<.1&&uo(a.x,a.z)),nf.set(a.x,a.z),ht?ns("stand"):Se.present&&a.y>.5&&Math.hypot(a.x-Se.x,a.z-Se.z)<1.3?ns("cat"):a.y>.5&&Math.hypot(a.x-oi.x,a.z-oi.z)<1.5?ns("kuji"):bi.kind==="tanabata"&&Math.hypot(a.x-ca.x,a.z-ca.z)<1.6?ns("wish"):Math.hypot(a.x-en.x,a.z-en.z)<1.5?(Ei=null,ns("lantern")):Math.hypot(a.x-Nm.x,a.z-Nm.z)<1?ns("wash"):hr(a.x,a.z)<.9&&a.y<.2?ns("feed"):a.y>.6&&a.z>-6.3?ns("sit"):ns(null);let c=It.mode==="breath"?.3+3.9*It.v:Ut.on?3.2+Math.sin(e*7)*.15+Math.sin(e*13)*.1:0;Ut.light.intensity+=(c-Ut.light.intensity)*(1-Math.exp(-n*(It.mode==="breath"?12:5))),Ut.glowMat.emissiveIntensity=Ut.light.intensity*.8,Ut.halo.material.map||(Ut.halo.material.map=mr,Ut.halo.material.needsUpdate=!0);{let h=Ut.light.intensity/4;Ut.halo.material.opacity=Math.min(.85,h*.8),Ut.halo.scale.setScalar(.8+h*1.6),Ut.halo.visible=h>.02}if(ss)for(let h of Nf){let u=h.m;if(h.rest>0){h.rest-=n,h.rest<=0&&Ff(h);continue}u.position.y-=ss.speed*n,u.position.x+=(Math.sin(e*1.2+h.ph)*ss.sway+.18+ar.value*1.4)*n,u.position.z+=Math.cos(e*.8+h.ph)*.22*n,u.rotation.x+=n*1.4,u.rotation.y+=n*.9;let f=fo(u.position.x,u.position.z)+.012;u.position.y<=f&&(u.position.y=f,u.rotation.set(-Math.PI/2,0,le()*6),h.rest=8+le()*12,f<.05&&Math.random()<.22&&kn.length<Yf&&Bo(u.position.x,u.position.z)&&(kn.push({x:u.position.x,z:u.position.z,r:Math.random()*6.28,c:"#"+u.material.color.getHexString()}),jc(),tn(),h.rest=.01))}if(Gn.visible){for(let h=0;h<Pf;h++){let u=C0[h];u.y-=13*n,(u.y<fo(u.x,u.z)||u.z<-4.3&&u.x>bn-1.3&&u.x<zs+1.3&&u.y<4)&&(u.y=9+le()*4,u.x=-14+le()*28,u.z=-5+le()*17);let f=h*6;rr[f]=u.x,rr[f+1]=u.y,rr[f+2]=u.z,rr[f+3]=u.x+.02,rr[f+4]=u.y-.38,rr[f+5]=u.z}Df.attributes.position.needsUpdate=!0}if(Io.visible){for(let h=0;h<Lf;h++){let u=P0[h];u.y-=.65*n,u.x+=Math.sin(e*.8+u.ph)*.25*n,u.z+=Math.cos(e*.6+u.ph)*.12*n,(u.y<fo(u.x,u.z)||u.z<-4.3&&u.x>bn-1.3&&u.x<zs+1.3&&u.y<4)&&(u.y=8+le()*3,u.x=-14+le()*28,u.z=-5+le()*17);let f=h*3;yc[f]=u.x,yc[f+1]=u.y,yc[f+2]=u.z}If.attributes.position.needsUpdate=!0}}var Tc=null;function JT(n){let e=qe.position;if(Tc){St.position.copy(Tc.p),St.lookAt(Tc.l);return}if(ot.on){let h=new S(e.x,e.y+(ht?.62:.95),e.z),u=Math.cos(ot.pitch);St.position.lerp(h,1-Math.exp(-n*5)),sa.lerp(h.clone().add(new S(Math.sin(ot.yaw)*u,Math.sin(ot.pitch),Math.cos(ot.yaw)*u).multiplyScalar(10)),1-Math.exp(-n*6)),St.lookAt(sa),St.fov+=(ot.fov-St.fov)*(1-Math.exp(-n*6)),St.updateProjectionMatrix();return}if(Te.on){let h=Te.cam;if(St.position.lerp(new S(h.x,h.h,h.z+h.h*.38),1-Math.exp(-n*5)),sa.lerp(new S(h.x,0,h.z),1-Math.exp(-n*5)),St.lookAt(sa),Te.sel){let u=Te.sel.userData.c;dr.position.set(u.x,.04,u.z),dr.scale.setScalar(u.moss*(u.scale||1)+.3)}return}let t=1-Math.exp(-n*6);ia.lerp(new S(e.x,e.y+.7,e.z),t);let i,s;if(ht)if(K.on){let h=K.base;i=new S(h.x,h.y+.95,h.z-.7),s=new S(h.x,h.y+.06,h.z+.05)}else if(It.mode==="breath"){let h=en.x-e.x,u=en.z-e.z,f=Math.hypot(h,u);i=new S(e.x-h/f*2,e.y+1.7,Math.max(-7.3,e.z-u/f*2)),s=new S(en.x,1,en.z)}else i=new S(e.x,e.y+2.1,-7.25),s=new S(e.x,.15+qt.a*9,e.z+7.5);else{i=new S(ia.x+Math.sin(Ds)*hi,Math.max(.45,ia.y+hi*Math.tan(yo)),ia.z+Math.cos(Ds)*hi);let h=i.x,u=i.z;i.x=gt(i.x,-12.3,12.5),i.z=Math.min(i.z,10.4);let f=Math.hypot(h-i.x,u-i.z);i.y+=f*.35,i.z<-4.1&&i.x>bn-1.6&&i.x<zs+1.6&&(i.y=Math.min(i.y,3.45),i.z=Math.max(i.z,-7.3)),s=yo<.3?ia.clone().add(new S(0,(.3-yo)*9,0)):ia}St.position.lerp(i,1-Math.exp(-n*(ht?1.6:4))),sa.lerp(s,1-Math.exp(-n*(ht?1.6:6))),St.lookAt(sa);let r=St.position.x,a=St.position.z,o=e.x-r,l=e.z-a,c=o*o+l*l||1;for(let h of S0){let u=((h.position.x-r)*o+(h.position.z-a)*l)/c,f=r+o*gt(u,0,1)-h.position.x,d=a+l*gt(u,0,1)-h.position.z,x=u>-.1&&u<1.05&&Math.hypot(f,d)<.6&&St.position.z<-4.3||u>0&&u<1&&Math.hypot(f,d)<.45||ht&&Math.abs(h.position.x-e.x)<1.6?.15:1,m=h.material;m.opacity+=(x-m.opacity)*(1-Math.exp(-n*10)),m.depthWrite=m.opacity>.9}}function vg(){let n=Math.min(t0.getDelta(),.05),e=t0.elapsedTime;if(QT(n,e),JT(n),T0.value=e,pc+=n,pc>2&&(pc=0,Bs==="auto"&&hs()),sT(e),aT(performance.now(),n),PS(n),DS(n,e),FS(!1),ST(n,e),_T(n,e),AT(n,e),OT(n,e),zT(n,e),VT(n,e),ZT(n),(pc|0)===0&&Math.random()<.02&&YT(),D.ctx&&D.trickle){let i=Math.hypot(qe.position.x-Qt.x,qe.position.z-Qt.z);D.trickle.gain.setTargetAtTime(.06*Math.max(0,1-i/6),D.ctx.currentTime,.3)}let t=performance.now();Ns&&t-Rm>90&&(bo.needsUpdate=!0,Ns=!1,Rm=t),jS(t),$t.done||(Jn?(Mo&&(Mo.enabled=ht&&!K.on&&!Te.on),Vc&&(Vc.uniforms.uTime.value=e),Jn.render()):Vn.render(fe,St)),i0&&(i0=!1,requestAnimationFrame(()=>{let i=U("loading");i&&i.remove()})),jT(t),requestAnimationFrame(vg)}var KT={uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 c=texture2D(tDiffuse,vUv);float v=smoothstep(0.95,0.32,length(vUv-0.5));c.rgb*=mix(0.78,1.0,v);c.rgb+= (h(vUv*1000.+uTime)-0.5)*0.018*(c.rgb+0.15);gl_FragColor=c;}"},Jn=null,sf=null,n0=null,Mo=null,Vc=null;nt.post&&(Jn=new lc(Vn),nt.ao?(sf=new fc(fe,St,innerWidth,innerHeight),Object.assign(sf.configuration,{aoRadius:1.4,distanceFalloff:.9,intensity:2.4,halfRes:nt.ao===1,aoSamples:nt.ao===1?8:16,denoiseSamples:nt.ao===1?4:8,denoiseRadius:nt.ao===1?8:12,gammaCorrection:!1,color:new ce("#1c1712")}),Jn.addPass(sf)):Jn.addPass(new cc(fe,St)),nt.bloom&&(n0=new na(new j(innerWidth/2,innerHeight/2),.5,.55,.95),Jn.addPass(n0)),nt.dof&&(Mo=new uc(fe,St,{focus:9,aperture:9e-4,maxblur:.005}),Mo.enabled=!1,Jn.addPass(Mo)),Vc=new ta(KT),Jn.addPass(Vc),Jn.addPass(new hc));document.querySelectorAll("#qBtns button").forEach(n=>{n.classList.toggle("on",n.dataset.q===Is),n.onclick=()=>xg(n.dataset.q)});function xg(n){if(n===Is)return;de.quality=n,xa(),Oo();let e=U("fade");e.textContent="\u63DB\u6210\u300C"+wc[n].name+"\u300D\u756B\u8CEA\u2026",e.classList.add("on","msg"),setTimeout(()=>{try{location.reload()}catch{}},350),setTimeout(()=>{e.classList.remove("on","msg"),e.textContent="",_t("\u91CD\u65B0\u6253\u958B\u9801\u9762\u5F8C\uFF0C\u5C31\u6703\u63DB\u6210\u300C"+wc[n].name+"\u300D\u756B\u8CEA",4200)},3500)}var pn={t0:0,frames:0,low:0,asked:!1,started:!1};U("startBtn").addEventListener("click",()=>{pn.started=!0,pn.t0=performance.now()+2500,pn.frames=0});function jT(n){if(!(!pn.started||pn.asked||Is==="low"||document.hidden||$t.on)){if(n<pn.t0){pn.frames=0;return}if(pn.frames++,n-pn.t0>5e3){let e=pn.frames*1e3/(n-pn.t0);pn.t0=n,pn.frames=0,e<22?(pn.low++,pn.low>=2&&(pn.asked=!0,U("perfTip").classList.add("show"))):pn.low=0}}}U("perfYes").onclick=()=>xg(Is==="high"?"mid":"low");U("perfNo").onclick=()=>U("perfTip").classList.remove("show");addEventListener("resize",()=>{St.aspect=innerWidth/innerHeight,ed(),Vn.setSize(innerWidth,innerHeight),Jn&&Jn.setSize(innerWidth,innerHeight)});a0(Fo(),!0);var i0=!0;location.search.includes("dev")&&(window.__g={player:qe,sit:B0,stand:Uo,applySeason:Bf,setTime:n=>{Bs=n,hs()},setYaw:n=>{Ds=n},setDist:n=>{hi=n},TODAY:po,tea:K,rainbow:qt,cat:Se,AV:q,setMood:th,templeBell:mg,openBook:Jf,startPhoto:hg,encodeLayout:ug,decodeLayout:fg,playAnim:Qc,rainOn:n=>{ls.on=n,ls.next=performance.now()+1e9,hs()},cam:(n,e)=>{Tc=n?{p:new S(...n),l:new S(...e)}:null}});vg();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
