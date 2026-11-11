var Ug=0,vd=1,Ng=2;var sm=1,Ou=2,ns=3,zi=0,cn=1,Mt=2;var ai=0,qr=1,_s=2,xd=3,yd=4,Fg=5,tr=100,zg=101,Bg=102,Md=103,Ed=104,Hg=200,Og=201,kg=202,Gg=203,Kh=204,jh=205,Vg=206,Wg=207,Xg=208,qg=209,Yg=210,Zg=211,Qg=212,Jg=213,Kg=214,jg=0,$g=1,ev=2,Al=3,tv=4,nv=5,iv=6,sv=7,rm=0,rv=1,av=2,ws=0,ku=1,Gu=2,Vu=3,lo=4,ov=5,Wu=6;var am=300,Qr=301,Jr=302,$h=303,eu=304,oc=306,Un=1e3,On=1001,tu=1002,yt=1003,Td=1004;var mh=1005;var kt=1006,lv=1007;var Ga=1008;var bs=1009,cv=1010,hv=1011,Xu=1012,om=1013,ri=1014,Ui=1015,Qt=1016,lm=1017,cm=1018,ss=1020,uv=1021,ln=1023,fv=1024,dv=1025,Ni=1026,Rs=1027,qu=1028,hm=1029,pv=1030,um=1031,fm=1033,gh=33776,vh=33777,xh=33778,yh=33779,Sd=35840,wd=35841,bd=35842,_d=35843,dm=36196,Rd=37492,Ad=37496,Cd=37808,Pd=37809,Dd=37810,Ld=37811,Id=37812,Ud=37813,Nd=37814,Fd=37815,zd=37816,Bd=37817,Hd=37818,Od=37819,kd=37820,Gd=37821,Mh=36492,Vd=36494,Wd=36495,mv=36283,Xd=36284,qd=36285,Yd=36286;var Cl=2300,Pl=2301,Eh=2302,Zd=2400,Qd=2401,Jd=2402;var pm=3e3,sr=3001,gv=3200,co=3201,mm=0,vv=1,kn="",Ut="srgb",rs="srgb-linear",Yu="display-p3",lc="display-p3-linear",Dl="linear",At="srgb",Ll="rec709",Il="p3";var Tr=7680;var Kd=519,xv=512,yv=513,Mv=514,gm=515,Ev=516,Tv=517,Sv=518,wv=519,nu=35044;var jd="300 es",iu=1035,is=2e3,Ul=2001,As=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$d=1234567,Na=Math.PI/180,Va=180/Math.PI;function Fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function Zu(n,e){return(n%e+e)%e}function bv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _v(n,e,t){return n!==e?(t-n)/(e-n):0}function Fa(n,e,t){return(1-t)*n+t*e}function Rv(n,e,t,i){return Fa(n,e,1-Math.exp(-t*i))}function Av(n,e=1){return e-Math.abs(Zu(n,e*2)-e)}function Cv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lv(n,e){return n+Math.random()*(e-n)}function Iv(n){return n*(.5-Math.random())}function Uv(n){n!==void 0&&($d=n);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nv(n){return n*Na}function Fv(n){return n*Va}function su(n){return(n&n-1)===0&&n!==0}function zv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bv(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Nn={DEG2RAD:Na,RAD2DEG:Va,generateUUID:Fi,clamp:on,euclideanModulo:Zu,mapLinear:bv,inverseLerp:_v,lerp:Fa,damp:Rv,pingpong:Av,smoothstep:Cv,smootherstep:Pv,randInt:Dv,randFloat:Lv,randFloatSpread:Iv,seededRandom:Uv,degToRad:Nv,radToDeg:Fv,isPowerOfTwo:su,ceilPowerOfTwo:zv,floorPowerOfTwo:Nl,setQuaternionFromProperEuler:Bv,normalize:bt,denormalize:Ii},$=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],M=s[7],R=s[2],_=s[5],C=s[8];return r[0]=a*x+o*y+l*R,r[3]=a*m+o*v+l*_,r[6]=a*p+o*M+l*C,r[1]=c*x+h*y+u*R,r[4]=c*m+h*v+u*_,r[7]=c*p+h*M+u*C,r[2]=f*x+d*y+g*R,r[5]=f*m+d*v+g*_,r[8]=f*p+d*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Th.makeScale(e,t)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Th=new ct;function vm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hv(){let n=Wa("canvas");return n.style.display="block",n}var ep={};function za(n){n in ep||(ep[n]=!0,console.warn(n))}var tp=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),np=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[rs]:{transfer:Dl,primaries:Ll,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:At,primaries:Ll,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lc]:{transfer:Dl,primaries:Il,toReference:n=>n.applyMatrix3(np),fromReference:n=>n.applyMatrix3(tp)},[Yu]:{transfer:At,primaries:Il,toReference:n=>n.convertSRGBToLinear().applyMatrix3(np),fromReference:n=>n.applyMatrix3(tp).convertLinearToSRGB()}},Ov=new Set([rs,lc]),Et={enabled:!0,_workingColorSpace:rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ov.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Qo[e].toReference,s=Qo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qo[n].primaries},getTransfer:function(n){return n===kn?Dl:Qo[n].transfer}};function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,Fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Wa("canvas")),Sr.width=e.width,Sr.height=e.height;let i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yr(t[i]/255)*255):t[i]=Yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kv=0,zl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wh(s[a].image)):r.push(wh(s[a]))}else r=wh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gv=0,Gn=class n extends As{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=On,s=On,r=kt,a=Ga,o=ln,l=bs,c=n.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Fi(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===sr?Ut:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?sr:pm}set encoding(e){za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Ut:kn}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=am;Gn.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(d+1)/2,R=(p+1)/2,_=(h+f)/4,C=(u+x)/4,I=(g+m)/4;return v>M&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=_/i,r=C/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=_/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=I/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ru=class extends As{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Ut:kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ct=class extends ru{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Bl=class extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var au=class extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hl=class extends Ct{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLMultipleRenderTargets=!0;let r=this.texture;this.texture=[];for(let a=0;a<i;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.texture.length;s<r;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},jn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),_=Math.atan2(R,p*y);m=Math.sin(m*_)/R,o=Math.sin(o*_)/R}let M=o*y;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ip.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bh=new S,ip=new jn,as=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Ko.subVectors(this.max,ba),wr.subVectors(e.a,ba),br.subVectors(e.b,ba),_r.subVectors(e.c,ba),ys.subVectors(br,wr),Ms.subVectors(_r,br),Js.subVectors(wr,_r);let t=[0,-ys.z,ys.y,0,-Ms.z,Ms.y,0,-Js.z,Js.y,ys.z,0,-ys.x,Ms.z,0,-Ms.x,Js.z,0,-Js.x,-ys.y,ys.x,0,-Ms.y,Ms.x,0,-Js.y,Js.x,0];return!_h(t,wr,br,_r,Ko)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,wr,br,_r,Ko))?!1:(jo.crossVectors(ys,Ms),t=[jo.x,jo.y,jo.z],_h(t,wr,br,_r,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ki=[new S,new S,new S,new S,new S,new S,new S,new S],gi=new S,Jo=new as,wr=new S,br=new S,_r=new S,ys=new S,Ms=new S,Js=new S,ba=new S,Ko=new S,jo=new S,Ks=new S;function _h(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ks.fromArray(n,r);let o=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),l=e.dot(Ks),c=t.dot(Ks),h=i.dot(Ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vv=new as,_a=new S,Rh=new S,Mi=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_a,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Rh)),this.expandByPoint(_a.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new S,Ah=new S,$o=new S,Es=new S,Ch=new S,el=new S,Ph=new S,Kr=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ah.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Es.copy(this.origin).sub(Ah);let r=e.distanceTo(t)*.5,a=-this.direction.dot($o),o=Es.dot(this.direction),l=-Es.dot($o),c=Es.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ah).addScaledVector($o,f),d}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let i=ji.dot(this.direction),s=ji.dot(ji)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,s,r){Ch.subVectors(t,e),el.subVectors(i,e),Ph.crossVectors(Ch,el);let a=this.direction.dot(Ph),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Es.subVectors(this.origin,e);let l=o*this.direction.dot(el.crossVectors(Es,el));if(l<0)return null;let c=o*this.direction.dot(Ch.cross(Es));if(c<0||l+c>a)return null;let h=-o*Es.dot(Ph);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wv,e,Xv)}lookAt(e,t,i){let s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ts.crossVectors(i,Jn),Ts.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ts.crossVectors(i,Jn)),Ts.normalize(),tl.crossVectors(Jn,Ts),s[0]=Ts.x,s[4]=tl.x,s[8]=Jn.x,s[1]=Ts.y,s[5]=tl.y,s[9]=Jn.y,s[2]=Ts.z,s[6]=tl.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],v=i[7],M=i[11],R=i[15],_=s[0],C=s[4],I=s[8],E=s[12],T=s[1],P=s[5],F=s[9],Y=s[13],L=s[2],H=s[6],O=s[10],K=s[14],J=s[3],Q=s[7],ee=s[11],re=s[15];return r[0]=a*_+o*T+l*L+c*J,r[4]=a*C+o*P+l*H+c*Q,r[8]=a*I+o*F+l*O+c*ee,r[12]=a*E+o*Y+l*K+c*re,r[1]=h*_+u*T+f*L+d*J,r[5]=h*C+u*P+f*H+d*Q,r[9]=h*I+u*F+f*O+d*ee,r[13]=h*E+u*Y+f*K+d*re,r[2]=g*_+x*T+m*L+p*J,r[6]=g*C+x*P+m*H+p*Q,r[10]=g*I+x*F+m*O+p*ee,r[14]=g*E+x*Y+m*K+p*re,r[3]=y*_+v*T+M*L+R*J,r[7]=y*C+v*P+M*H+R*Q,r[11]=y*I+v*F+M*O+R*ee,r[15]=y*E+v*Y+M*K+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+x*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,M=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,R=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,_=t*y+i*v+s*M+r*R;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/_;return e[0]=y*C,e[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*C,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*C,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*C,e[4]=v*C,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*C,e[8]=M*C,e[9]=(g*u*r-h*x*r-g*i*d+t*x*d+h*i*p-t*u*p)*C,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*C,e[12]=R*C,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,M=l*u,R=i.x,_=i.y,C=i.z;return s[0]=(1-(x+p))*R,s[1]=(d+M)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(d-M)*_,s[5]=(1-(f+p))*_,s[6]=(m+y)*_,s[7]=0,s[8]=(g+v)*C,s[9]=(m-y)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Rr.set(s[0],s[1],s[2]).length(),a=Rr.set(s[4],s[5],s[6]).length(),o=Rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vi.copy(this);let c=1/r,h=1/a,u=1/o;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,t.setFromRotationMatrix(vi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=is){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(o===is)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ul)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=is){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,d=(i+s)*h,g,x;if(o===is)g=(a+r)*u,x=-2*u;else if(o===Ul)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Rr=new S,vi=new Ie,Wv=new S(0,0,0),Xv=new S(1,1,1),Ts=new S,tl=new S,Jn=new S,sp=new Ie,rp=new jn,Cs=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cs.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qv=0,ap=new S,Ar=new jn,$i=new Ie,nl=new S,Ra=new S,Yv=new S,Zv=new jn,op=new S(1,0,0),lp=new S(0,1,0),cp=new S(0,0,1),Qv={type:"added"},Jv={type:"removed"},hn=class n extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new Cs,i=new jn,s=new S(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ct}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nl.copy(e):nl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ra,nl,this.up):$i.lookAt(nl,Ra,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix($i),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,Yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};hn.DEFAULT_UP=new S(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new S,es=new S,Dh=new S,ts=new S,Cr=new S,Pr=new S,hp=new S,Lh=new S,Ih=new S,Uh=new S,il=!1,ir=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xi.subVectors(s,t),es.subVectors(i,t),Dh.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(es),l=xi.dot(Dh),c=es.dot(es),h=es.dot(Dh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getUV(e,t,i,s,r,a,o,l){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(a,ts.y),l.addScaledVector(o,ts.z),l)}static isFrontFacing(e,t,i,s){return xi.subVectors(i,t),es.subVectors(e,t),xi.cross(es).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),es.subVectors(this.a,this.b),xi.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Cr.subVectors(s,i),Pr.subVectors(r,i),Lh.subVectors(e,i);let l=Cr.dot(Lh),c=Pr.dot(Lh);if(l<=0&&c<=0)return t.copy(i);Ih.subVectors(e,s);let h=Cr.dot(Ih),u=Pr.dot(Ih);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Cr,a);Uh.subVectors(e,r);let d=Cr.dot(Uh),g=Pr.dot(Uh);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Pr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return hp.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(hp,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(Cr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=Zu(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Nh(a,r,e+1/3),this.g=Nh(a,r,e),this.b=Nh(a,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=xm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Sh(e.r),this.g=Sh(e.g),this.b=Sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Et.fromWorkingColorSpace(_n.copy(this),e),Math.round(on(_n.r*255,0,255))*65536+Math.round(on(_n.g*255,0,255))*256+Math.round(on(_n.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Ut){Et.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(sl);let i=Fa(Ss.h,sl.h,t),s=Fa(Ss.s,sl.s,t),r=Fa(Ss.l,sl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ce;ce.NAMES=xm;var Kv=0,Bi=class extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=qr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=jh,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kh&&(i.blendSrc=this.blendSrc),this.blendDst!==jh&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new S,rl=new $,Bt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rl.fromBufferAttribute(this,t),rl.applyMatrix3(e),this.setXY(t,rl.x,rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}};var Ol=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var kl=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ue=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var jv=0,si=new Ie,Fh=new hn,Dr=new S,Kn=new as,Aa=new as,an=new S,pt=class n extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?kl:Ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Kn.min,Aa.min),Kn.expandByPoint(an),an.addVectors(Kn.max,Aa.max),Kn.expandByPoint(an)):(Kn.expandByPoint(Aa.min),Kn.expandByPoint(Aa.max))}Kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(e,c),an.add(Dr)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new S,h[T]=new S;let u=new S,f=new S,d=new S,g=new $,x=new $,m=new $,p=new S,y=new S;function v(T,P,F){u.fromArray(s,T*3),f.fromArray(s,P*3),d.fromArray(s,F*3),g.fromArray(a,T*2),x.fromArray(a,P*2),m.fromArray(a,F*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(Y),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(Y),c[T].add(p),c[P].add(p),c[F].add(p),h[T].add(y),h[P].add(y),h[F].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,P=M.length;T<P;++T){let F=M[T],Y=F.start,L=F.count;for(let H=Y,O=Y+L;H<O;H+=3)v(i[H+0],i[H+1],i[H+2])}let R=new S,_=new S,C=new S,I=new S;function E(T){C.fromArray(r,T*3),I.copy(C);let P=c[T];R.copy(P),R.sub(C.multiplyScalar(C.dot(P))).normalize(),_.crossVectors(I,P);let Y=_.dot(h[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=Y}for(let T=0,P=M.length;T<P;++T){let F=M[T],Y=F.start,L=F.count;for(let H=Y,O=Y+L;H<O;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new S,r=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Bt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},up=new Ie,js=new Kr,al=new Mi,fp=new S,Lr=new S,Ir=new S,Ur=new S,zh=new S,ol=new S,ll=new $,cl=new $,hl=new $,dp=new S,pp=new S,mp=new S,ul=new S,fl=new S,z=class extends hn{constructor(e=new pt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(zh.fromBufferAttribute(u,e),a?ol.addScaledVector(zh,h):ol.addScaledVector(zh.sub(t),h))}t.add(ol)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(al.containsPoint(js.origin)===!1&&(js.intersectSphere(al,fp)===null||js.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(up.copy(r).invert(),js.copy(e.ray).applyMatrix4(up),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,R=v;M<R;M+=3){let _=o.getX(M),C=o.getX(M+1),I=o.getX(M+2);s=dl(this,p,e,i,c,h,u,_,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);s=dl(this,a,e,i,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,R=v;M<R;M+=3){let _=M,C=M+1,I=M+2;s=dl(this,p,e,i,c,h,u,_,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,M=m+2;s=dl(this,a,e,i,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $v(n,e,t,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===zi,o),l===null)return null;fl.copy(o),fl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fl);return c<t.near||c>t.far?null:{distance:c,point:fl.clone(),object:n}}function dl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Lr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Ur);let h=$v(n,e,t,i,Lr,Ir,Ur,ul);if(h){s&&(ll.fromBufferAttribute(s,o),cl.fromBufferAttribute(s,l),hl.fromBufferAttribute(s,c),h.uv=ir.getInterpolation(ul,Lr,Ir,Ur,ll,cl,hl,new $)),r&&(ll.fromBufferAttribute(r,o),cl.fromBufferAttribute(r,l),hl.fromBufferAttribute(r,c),h.uv1=ir.getInterpolation(ul,Lr,Ir,Ur,ll,cl,hl,new $),h.uv2=h.uv1),a&&(dp.fromBufferAttribute(a,o),pp.fromBufferAttribute(a,l),mp.fromBufferAttribute(a,c),h.normal=ir.getInterpolation(ul,Lr,Ir,Ur,dp,pp,mp,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};ir.getNormal(Lr,Ir,Ur,u.normal),h.face=u}return h}var Tt=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(x,m,p,y,v,M,R,_,C,I,E){let T=M/C,P=R/I,F=M/2,Y=R/2,L=_/2,H=C+1,O=I+1,K=0,J=0,Q=new S;for(let ee=0;ee<O;ee++){let re=ee*P-Y;for(let ye=0;ye<H;ye++){let Z=ye*T-F;Q[x]=Z*y,Q[m]=re*v,Q[p]=L,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=_>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ye/C),u.push(1-ee/I),K+=1}}for(let ee=0;ee<I;ee++)for(let re=0;re<C;re++){let ye=f+re+H*ee,Z=f+re+H*(ee+1),te=f+(re+1)+H*(ee+1),ve=f+(re+1)+H*ee;l.push(ye,Z,ve),l.push(Z,te,ve),J+=6}o.addGroup(d,J,E),d+=J,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function In(n){let e={};for(let t=0;t<n.length;t++){let i=jr(n[t]);for(let s in i)e[s]=i[s]}return e}function ex(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ym(n){return n.getRenderTarget()===null?n.outputColorSpace:Et.workingColorSpace}var ci={clone:jr,merge:In},tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Gl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=class extends Gl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Fr=1,qa=class extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);let a=new Rn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);let o=new Rn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);let l=new Rn(Nr,Fr,e,t);l.layers=this.layers,this.add(l);let c=new Rn(Nr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===is)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vl=class extends Gn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sr?Ut:kn),this.texture=new Vl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ai});r.uniforms.tEquirect.value=t;let a=new z(s,r),o=t.minFilter;return t.minFilter===Ga&&(t.minFilter=kt),new qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Bh=new S,ix=new S,sx=new ct,yi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Bh.subVectors(i,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Bh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sx.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$s=new Mi,pl=new S,rr=class{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=is){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+a,f+h,m+g,M+y).normalize(),i[3].setComponents(l-a,f-h,m-g,M-y).normalize(),i[4].setComponents(l-o,f-u,m-x,M-v).normalize(),t===is)i[5].setComponents(l+o,f+u,m+x,M+v).normalize();else if(t===Ul)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(pl.x=s.normal.x>0?e.max.x:e.min.x,pl.y=s.normal.y>0?e.max.y:e.min.y,pl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var mn=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let v=0;v<c;v++){let M=v*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,M=y+c*(p+1),R=y+1+c*(p+1),_=y+1+c*p;d.push(v,M,_),d.push(M,R,_)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
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
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
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
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cx=`#define PI 3.141592653589793
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
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`
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
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`struct PhysicalMaterial {
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
}`,ay=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gy=`#if defined( USE_POINTS_UV )
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
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
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
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,Cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wy=`float getShadowMask() {
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
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,fM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,pM=`#define DISTANCE
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,EM=`#define LAMBERT
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
}`,TM=`#define LAMBERT
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
}`,SM=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,bM=`#define NORMAL
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
}`,_M=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,CM=`#define STANDARD
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
}`,PM=`#define STANDARD
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
}`,DM=`#define TOON
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
}`,LM=`#define TOON
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
}`,IM=`uniform float size;
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
}`,UM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,FM=`uniform vec3 color;
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
}`,zM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:ax,alphahash_pars_fragment:ox,alphamap_fragment:lx,alphamap_pars_fragment:cx,alphatest_fragment:hx,alphatest_pars_fragment:ux,aomap_fragment:fx,aomap_pars_fragment:dx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:vx,bsdfs:xx,iridescence_fragment:yx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:wx,color_fragment:bx,color_pars_fragment:_x,color_pars_vertex:Rx,color_vertex:Ax,common:Cx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Ix,emissivemap_fragment:Ux,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:zx,envmap_fragment:Bx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Ox,envmap_pars_vertex:kx,envmap_physical_pars_fragment:$x,envmap_vertex:Gx,fog_vertex:Vx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_fragment:Zx,lightmap_pars_fragment:Qx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Kx,lights_pars_begin:jx,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:ay,lights_fragment_maps:oy,lights_fragment_end:ly,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:xy,morphcolor_vertex:yy,morphnormal_vertex:My,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:Sy,normal_fragment_maps:wy,normal_pars_fragment:by,normal_pars_vertex:_y,normal_vertex:Ry,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Cy,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Ly,opaque_fragment:Iy,packing:Uy,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:zy,dithering_pars_fragment:By,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Gy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:qy,skinning_vertex:Yy,skinnormal_vertex:Zy,specularmap_fragment:Qy,specularmap_pars_fragment:Jy,tonemapping_fragment:Ky,tonemapping_pars_fragment:jy,transmission_fragment:$y,transmission_pars_fragment:eM,uv_pars_fragment:tM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:sM,background_vert:rM,background_frag:aM,backgroundCube_vert:oM,backgroundCube_frag:lM,cube_vert:cM,cube_frag:hM,depth_vert:uM,depth_frag:fM,distanceRGBA_vert:dM,distanceRGBA_frag:pM,equirect_vert:mM,equirect_frag:gM,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:yM,meshbasic_frag:MM,meshlambert_vert:EM,meshlambert_frag:TM,meshmatcap_vert:SM,meshmatcap_frag:wM,meshnormal_vert:bM,meshnormal_frag:_M,meshphong_vert:RM,meshphong_frag:AM,meshphysical_vert:CM,meshphysical_frag:PM,meshtoon_vert:DM,meshtoon_frag:LM,points_vert:IM,points_frag:UM,shadow_vert:NM,shadow_frag:FM,sprite_vert:zM,sprite_frag:BM},fe={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Li={basic:{uniforms:In([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:In([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ce(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:In([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:In([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:In([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ce(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:In([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:In([fe.points,fe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:In([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:In([fe.common,fe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:In([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:In([fe.sprite,fe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:In([fe.common,fe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:In([fe.lights,fe.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Li.physical={uniforms:In([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var ml={r:0,b:0,g:0};function HM(n,e,t,i,s,r,a){let o=new ce(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===oc)?(h===void 0&&(h=new z(new Tt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:jr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,_,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Et.getTransfer(v.colorSpace)!==At,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new z(new mn(2,2),new mt({name:"BackgroundMaterial",uniforms:jr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Et.getTransfer(v.colorSpace)!==At,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ml,ym(n)),i.buffers.color.setClear(ml.r,ml.g,ml.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function OM(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,H,O,K,J){let Q=!1;if(a){let ee=x(K,O,H);c!==ee&&(c=ee,d(c.object)),Q=p(L,K,O,J),Q&&y(L,K,O,J)}else{let ee=H.wireframe===!0;(c.geometry!==K.id||c.program!==O.id||c.wireframe!==ee)&&(c.geometry=K.id,c.program=O.id,c.wireframe=ee,Q=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,I(L,H,O,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,H,O){let K=O.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Q=J[H.id];Q===void 0&&(Q={},J[H.id]=Q);let ee=Q[K];return ee===void 0&&(ee=m(f()),Q[K]=ee),ee}function m(L){let H=[],O=[],K=[];for(let J=0;J<s;J++)H[J]=0,O[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,H,O,K){let J=c.attributes,Q=H.attributes,ee=0,re=O.getAttributes();for(let ye in re)if(re[ye].location>=0){let te=J[ye],ve=Q[ye];if(ve===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),te===void 0||te.attribute!==ve||ve&&te.data!==ve.data)return!0;ee++}return c.attributesNum!==ee||c.index!==K}function y(L,H,O,K){let J={},Q=H.attributes,ee=0,re=O.getAttributes();for(let ye in re)if(re[ye].location>=0){let te=Q[ye];te===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let ve={};ve.attribute=te,te&&te.data&&(ve.data=te.data),J[ye]=ve,ee++}c.attributes=J,c.attributesNum=ee,c.index=K}function v(){let L=c.newAttributes;for(let H=0,O=L.length;H<O;H++)L[H]=0}function M(L){R(L,0)}function R(L,H){let O=c.newAttributes,K=c.enabledAttributes,J=c.attributeDivisors;O[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),J[L]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),J[L]=H)}function _(){let L=c.newAttributes,H=c.enabledAttributes;for(let O=0,K=H.length;O<K;O++)H[O]!==L[O]&&(n.disableVertexAttribArray(O),H[O]=0)}function C(L,H,O,K,J,Q,ee){ee===!0?n.vertexAttribIPointer(L,H,O,J,Q):n.vertexAttribPointer(L,H,O,K,J,Q)}function I(L,H,O,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=K.attributes,Q=O.getAttributes(),ee=H.defaultAttributeValues;for(let re in Q){let ye=Q[re];if(ye.location>=0){let Z=J[re];if(Z===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let te=Z.normalized,ve=Z.itemSize,De=t.get(Z);if(De===void 0)continue;let Ce=De.buffer,Ze=De.type,je=De.bytesPerElement,Oe=i.isWebGL2===!0&&(Ze===n.INT||Ze===n.UNSIGNED_INT||Z.gpuType===om);if(Z.isInterleavedBufferAttribute){let gt=Z.data,k=gt.stride,Cn=Z.offset;if(gt.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ye.locationSize;Ne++)R(ye.location+Ne,gt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ne=0;Ne<ye.locationSize;Ne++)M(ye.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ne=0;Ne<ye.locationSize;Ne++)C(ye.location+Ne,ve/ye.locationSize,Ze,te,k*je,(Cn+ve/ye.locationSize*Ne)*je,Oe)}else{if(Z.isInstancedBufferAttribute){for(let gt=0;gt<ye.locationSize;gt++)R(ye.location+gt,Z.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let gt=0;gt<ye.locationSize;gt++)M(ye.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let gt=0;gt<ye.locationSize;gt++)C(ye.location+gt,ve/ye.locationSize,Ze,te,ve*je,ve/ye.locationSize*gt*je,Oe)}}else if(ee!==void 0){let te=ee[re];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(ye.location,te);break;case 3:n.vertexAttrib3fv(ye.location,te);break;case 4:n.vertexAttrib4fv(ye.location,te);break;default:n.vertexAttrib1fv(ye.location,te)}}}}_()}function E(){F();for(let L in o){let H=o[L];for(let O in H){let K=H[O];for(let J in K)g(K[J].object),delete K[J];delete H[O]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;let H=o[L.id];for(let O in H){let K=H[O];for(let J in K)g(K[J].object),delete K[J];delete H[O]}delete o[L.id]}function P(L){for(let H in o){let O=o[H];if(O[L.id]===void 0)continue;let K=O[L.id];for(let J in K)g(K[J].object),delete K[J];delete O[L.id]}}function F(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Y,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:M,disableUnusedAttributes:_}}function kM(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function GM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=a||e.has("OES_texture_float"),R=v&&M,_=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:_}}function VM(n){let e=this,t=null,i=0,s=!1,r=!1,a=new yi,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,M=p.clippingState||null;l.value=M,M=h(g,f,v,d);for(let R=0;R!==v;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==x;++v,M+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function WM(n){let e=new WeakMap;function t(a,o){return o===$h?a.mapping=Qr:o===eu&&(a.mapping=Jr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===$h||o===eu)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ya(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ps=class extends Gl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vr=4,gp=[.125,.215,.35,.446,.526,.582],nr=20,Hh=new Ps,vp=new ce,Oh=null,kh=0,Gh=0,er=(1+Math.sqrt(5))/2,zr=1/er,xp=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,er,zr),new S(0,er,-zr),new S(zr,0,er),new S(-zr,0,er),new S(er,zr,0),new S(-er,zr,0)],$r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,kh,Gh),e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Qt,format:ln,colorSpace:rs,depthBuffer:!1},s=yp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XM(r)),this._blurMaterial=qM(r,e,t)}return s}_compileMaterial(e){let t=new z(this._lodPlanes[0],e);this._renderer.compile(t,Hh)}_sceneToCubeUV(e,t,i,s){let o=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vp),h.toneMapping=ws,h.autoClear=!1;let d=new pn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new z(new Tt,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(vp),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;gl(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qr||e.mapping===Jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new z(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;gl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Hh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xp[(s-1)%xp.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new z(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*nr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):nr;m>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);let p=[],y=0;for(let C=0;C<nr;++C){let I=C/x,E=Math.exp(-I*I/2);p.push(E),C===0?y+=E:C<m&&(y+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let M=this._sizeLods[s],R=3*M*(s>v-Vr?s-v+Vr:0),_=4*(this._cubeSize-M);gl(t,R,_,3*M,2*M),l.setRenderTarget(t),l.render(u,Hh)}};function XM(n){let e=[],t=[],i=[],s=n,r=n-Vr+1+gp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Vr?l=gp[a-n+Vr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let _=0;_<d;_++){let C=_%3*2/3-1,I=_>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(E,x*g*_),v.set(f,m*g*_);let T=[_,_,_,_,_,_];M.set(T,p*g*_)}let R=new pt;R.setAttribute("position",new Bt(y,x)),R.setAttribute("uv",new Bt(v,m)),R.setAttribute("faceIndex",new Bt(M,p)),e.push(R),s>Vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yp(n,e,t){let i=new Ct(n,e,t);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qM(n,e,t){let i=new Float32Array(nr),s=new S(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Mp(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ep(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Qu(){return`

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
	`}function YM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===$h||l===eu,h=l===Qr||l===Jr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new $r(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new $r(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ZM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function QM(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,M=y.length;v<M;v+=3){let R=y[v+0],_=y[v+1],C=y[v+2];f.push(R,_,_,C,C,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let R=v+0,_=v+1,C=v+2;f.push(R,_,_,C,C,R)}}else return;let m=new(vm(f)?kl:Ol)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function JM(n,e,t,i){let s=i.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){n.drawElements(r,g,o,d*l),t.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*l,x),t.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function KM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function jM(n,e){return n[0]-e[0]}function $M(n,e){return Math.abs(e[1])-Math.abs(n[1])}function e1(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],I=0;y===!0&&(I=1),v===!0&&(I=2),M===!0&&(I=3);let E=h.attributes.position.count*I,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let P=new Float32Array(E*T*4*g),F=new Bl(P,E,T,g);F.type=Ui,F.needsUpdate=!0;let Y=I*4;for(let H=0;H<g;H++){let O=R[H],K=_[H],J=C[H],Q=E*T*4*H;for(let ee=0;ee<O.count;ee++){let re=ee*Y;y===!0&&(a.fromBufferAttribute(O,ee),P[Q+re+0]=a.x,P[Q+re+1]=a.y,P[Q+re+2]=a.z,P[Q+re+3]=0),v===!0&&(a.fromBufferAttribute(K,ee),P[Q+re+4]=a.x,P[Q+re+5]=a.y,P[Q+re+6]=a.z,P[Q+re+7]=0),M===!0&&(a.fromBufferAttribute(J,ee),P[Q+re+8]=a.x,P[Q+re+9]=a.y,P[Q+re+10]=a.z,P[Q+re+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:F,size:new $(E,T)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<d;v++){let M=g[v];M[0]=v,M[1]=f[v]}g.sort($M);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(jM);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=o[v],R=M[0],_=M[1];R!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+v)!==x[R]&&h.setAttribute("morphTarget"+v,x[R]),m&&h.getAttribute("morphNormal"+v)!==m[R]&&h.setAttribute("morphNormal"+v,m[R]),s[v]=_,p+=_):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function t1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ds=class extends Gn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ni&&(i=ri),i===void 0&&h===Rs&&(i=ss),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Em=new Gn,Tm=new Ds(1,1);Tm.compareFunction=gm;var Sm=new Bl,wm=new au,bm=new Vl,Tp=[],Sp=[],wp=new Float32Array(16),bp=new Float32Array(9),_p=new Float32Array(4);function aa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Tp[s];if(r===void 0&&(r=new Float32Array(s),Tp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=Sp[e];t===void 0&&(t=new Int32Array(e),Sp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function a1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,i))return;_p.set(i),n.uniformMatrix2fv(this.addr,!1,_p),$t(t,i)}}function o1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,i))return;bp.set(i),n.uniformMatrix3fv(this.addr,!1,bp),$t(t,i)}}function l1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,i))return;wp.set(i),n.uniformMatrix4fv(this.addr,!1,wp),$t(t,i)}}function c1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function v1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Tm:Em;t.setTexture2D(e||r,s)}function x1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wm,s)}function y1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bm,s)}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sm,s)}function E1(n){switch(n){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return a1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return h1;case 35668:case 35672:return u1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}function T1(n,e){n.uniform1fv(this.addr,e)}function S1(n,e){let t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function w1(n,e){let t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function b1(n,e){let t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function _1(n,e){let t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function R1(n,e){let t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A1(n,e){let t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C1(n,e){n.uniform1iv(this.addr,e)}function P1(n,e){n.uniform2iv(this.addr,e)}function D1(n,e){n.uniform3iv(this.addr,e)}function L1(n,e){n.uniform4iv(this.addr,e)}function I1(n,e){n.uniform1uiv(this.addr,e)}function U1(n,e){n.uniform2uiv(this.addr,e)}function N1(n,e){n.uniform3uiv(this.addr,e)}function F1(n,e){n.uniform4uiv(this.addr,e)}function z1(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Em,r[a])}function B1(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wm,r[a])}function H1(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bm,r[a])}function O1(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sm,r[a])}function k1(n){switch(n){case 5126:return T1;case 35664:return S1;case 35665:return w1;case 35666:return b1;case 35674:return _1;case 35675:return R1;case 35676:return A1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return D1;case 35669:case 35673:return L1;case 5125:return I1;case 36294:return U1;case 36295:return N1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return O1}}var ou=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}},lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k1(t.type)}},cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Vh=/(\w+)(\])?(\[|\.)?/g;function Rp(n,e){n.seq.push(e),n.map[e.id]=e}function G1(n,e,t){let i=n.name,s=i.length;for(Vh.lastIndex=0;;){let r=Vh.exec(i),a=Vh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rp(t,c===void 0?new ou(o,n,e):new lu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new cu(o),Rp(t,u)),t=u}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);G1(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ap(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var V1=37297,W1=0;function X1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function q1(n){let e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n),i;switch(e===t?i="":e===Il&&t===Ll?i="LinearDisplayP3ToLinearSRGB":e===Ll&&t===Il&&(i="LinearSRGBToLinearDisplayP3"),n){case rs:case lc:return[i,"LinearTransferOETF"];case Ut:case Yu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X1(n.getShaderSource(e),a)}else return s}function Y1(n,e){let t=q1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Z1(n,e){let t;switch(e){case ku:t="Linear";break;case Gu:t="Reinhard";break;case Vu:t="OptimizedCineon";break;case lo:t="ACESFilmic";break;case Wu:t="AgX";break;case ov:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function J1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wr).join(`
`)}function K1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function j1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wr(n){return n!==""}function Pp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(n){return n.replace($1,tE)}var eE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tE(n,e){let t=et[e];if(t===void 0){let i=eE.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}var nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(n){return n.replace(nE,iE)}function iE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ns&&(e="SHADOWMAP_TYPE_VSM"),e}function rE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case Jr:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aE(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Jr&&(e="ENVMAP_MODE_REFRACTION"),e}function oE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rm:e="ENVMAP_BLENDING_MULTIPLY";break;case rv:e="ENVMAP_BLENDING_MIX";break;case av:e="ENVMAP_BLENDING_ADD";break}return e}function lE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cE(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=sE(t),c=rE(t),h=aE(t),u=oE(t),f=lE(t),d=t.isWebGL2?"":Q1(t),g=J1(t),x=K1(r),m=s.createProgram(),p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),y.length>0&&(y+=`
`)):(p=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),y=[d,Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?et.tonemapping_pars_fragment:"",t.toneMapping!==ws?Z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=hu(a),a=Pp(a,t),a=Dp(a,t),o=hu(o),o=Pp(o,t),o=Dp(o,t),a=Lp(a),o=Lp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+p+a,R=v+y+o,_=Ap(s,s.VERTEX_SHADER,M),C=Ap(s,s.FRAGMENT_SHADER,R);s.attachShader(m,_),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(F){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(_).trim(),H=s.getShaderInfoLog(C).trim(),O=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,_,C);else{let J=Cp(s,_,"vertex"),Q=Cp(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+J+`
`+Q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||H==="")&&(K=!1);K&&(F.diagnostics={runnable:O,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:H,prefix:y}})}s.deleteShader(_),s.deleteShader(C),E=new Zr(s,m),T=j1(s,m)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,V1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=C,this}var hE=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fu(e),t.set(e,i)),i}},fu=class{constructor(e){this.id=hE++,this.code=e,this.usedTimes=0}};function uE(n,e,t,i,s,r,a){let o=new Xa,l=new uu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,T,P,F,Y){let L=F.fog,H=Y.geometry,O=E.isMeshStandardMaterial?F.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||O),J=K&&K.mapping===oc?K.image.height:null,Q=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=ee!==void 0?ee.length:0,ye=0;H.morphAttributes.position!==void 0&&(ye=1),H.morphAttributes.normal!==void 0&&(ye=2),H.morphAttributes.color!==void 0&&(ye=3);let Z,te,ve,De;if(Q){let Pn=Li[Q];Z=Pn.vertexShader,te=Pn.fragmentShader}else Z=E.vertexShader,te=E.fragmentShader,l.update(E),ve=l.getVertexShaderID(E),De=l.getFragmentShaderID(E);let Ce=n.getRenderTarget(),Ze=Y.isInstancedMesh===!0,je=Y.isBatchedMesh===!0,Oe=!!E.map,gt=!!E.matcap,k=!!K,Cn=!!E.aoMap,Ne=!!E.lightMap,qe=!!E.bumpMap,_e=!!E.normalMap,Ht=!!E.displacementMap,tt=!!E.emissiveMap,A=!!E.metalnessMap,w=!!E.roughnessMap,V=E.anisotropy>0,ae=E.clearcoat>0,se=E.iridescence>0,oe=E.sheen>0,Re=E.transmission>0,ge=V&&!!E.anisotropyMap,Me=ae&&!!E.clearcoatMap,Be=ae&&!!E.clearcoatNormalMap,nt=ae&&!!E.clearcoatRoughnessMap,ne=se&&!!E.iridescenceMap,wt=se&&!!E.iridescenceThicknessMap,ft=oe&&!!E.sheenColorMap,Xe=oe&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Ee=!!E.specularColorMap,$e=!!E.specularIntensityMap,St=Re&&!!E.transmissionMap,Vt=Re&&!!E.thicknessMap,ot=!!E.gradientMap,ue=!!E.alphaMap,U=E.alphaTest>0,pe=!!E.alphaHash,me=!!E.extensions,ke=!!H.attributes.uv1,Fe=!!H.attributes.uv2,Dt=!!H.attributes.uv3,Lt=ws;return E.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Lt=n.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Z,fragmentShader:te,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:De,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:je,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:rs,map:Oe,matcap:gt,envMap:k,envMapMode:k&&K.mapping,envMapCubeUVHeight:J,aoMap:Cn,lightMap:Ne,bumpMap:qe,normalMap:_e,displacementMap:f&&Ht,emissiveMap:tt,normalMapObjectSpace:_e&&E.normalMapType===vv,normalMapTangentSpace:_e&&E.normalMapType===mm,metalnessMap:A,roughnessMap:w,anisotropy:V,anisotropyMap:ge,clearcoat:ae,clearcoatMap:Me,clearcoatNormalMap:Be,clearcoatRoughnessMap:nt,iridescence:se,iridescenceMap:ne,iridescenceThicknessMap:wt,sheen:oe,sheenColorMap:ft,sheenRoughnessMap:Xe,specularMap:Le,specularColorMap:Ee,specularIntensityMap:$e,transmission:Re,transmissionMap:St,thicknessMap:Vt,gradientMap:ot,opaque:E.transparent===!1&&E.blending===qr,alphaMap:ue,alphaTest:U,alphaHash:pe,combine:E.combine,mapUv:Oe&&x(E.map.channel),aoMapUv:Cn&&x(E.aoMap.channel),lightMapUv:Ne&&x(E.lightMap.channel),bumpMapUv:qe&&x(E.bumpMap.channel),normalMapUv:_e&&x(E.normalMap.channel),displacementMapUv:Ht&&x(E.displacementMap.channel),emissiveMapUv:tt&&x(E.emissiveMap.channel),metalnessMapUv:A&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:ge&&x(E.anisotropyMap.channel),clearcoatMapUv:Me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(E.sheenRoughnessMap.channel),specularMapUv:Le&&x(E.specularMap.channel),specularColorMapUv:Ee&&x(E.specularColorMap.channel),specularIntensityMapUv:$e&&x(E.specularIntensityMap.channel),transmissionMapUv:St&&x(E.transmissionMap.channel),thicknessMapUv:Vt&&x(E.thicknessMap.channel),alphaMapUv:ue&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Fe,vertexUv3s:Dt,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(Oe||ue),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===At,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mt,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:me&&E.extensions.derivatives===!0,extensionFragDepth:me&&E.extensions.fragDepth===!0,extensionDrawBuffers:me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)T.push(P),T.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(T,E),v(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function y(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){let T=g[E.type],P;if(T){let F=Li[T];P=ci.clone(F.uniforms)}else P=E.uniforms;return P}function R(E,T){let P;for(let F=0,Y=c.length;F<Y;F++){let L=c[F];if(L.cacheKey===T){P=L,++P.usedTimes;break}}return P===void 0&&(P=new cE(n,T,E,r),c.push(P)),P}function _(E){if(--E.usedTimes===0){let T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:_,releaseShaderCache:C,programs:c,dispose:I}}function fE(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function dE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Np(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||dE),i.length>1&&i.sort(f||Up),s.length>1&&s.sort(f||Up)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function pE(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Np,n.set(i,[a])):s>=r.length?(a=new Np,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function mE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ce};break;case"SpotLight":t={position:new S,direction:new S,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function gE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var vE=0;function xE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yE(n,e){let t=new mE,i=gE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new S);let r=new S,a=new Ie,o=new Ie;function l(h,u){let f=0,d=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,M=0,R=0,_=0,C=0,I=0,E=0;h.sort(xE);let T=u===!0?Math.PI:1;for(let F=0,Y=h.length;F<Y;F++){let L=h[F],H=L.color,O=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=H.r*O*T,d+=H.g*O*T,g+=H.b*O*T;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(L.sh.coefficients[Q],O);E++}else if(L.isDirectionalLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let ee=L.shadow,re=i.get(L);re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,M++}s.directional[x]=Q,x++}else if(L.isSpotLight){let Q=t.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(H).multiplyScalar(O*T),Q.distance=K,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,s.spot[p]=Q;let ee=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,ee.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[p]=ee.matrix,L.castShadow){let re=i.get(L);re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=J,_++}p++}else if(L.isRectAreaLight){let Q=t.get(L);Q.color.copy(H).multiplyScalar(O),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=Q,y++}else if(L.isPointLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*T),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let ee=L.shadow,re=i.get(L);re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,re.shadowCameraNear=ee.camera.near,re.shadowCameraFar=ee.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=Q,m++}else if(L.isHemisphereLight){let Q=t.get(L);Q.skyColor.copy(L.color).multiplyScalar(O*T),Q.groundColor.copy(L.groundColor).multiplyScalar(O*T),s.hemi[v]=Q,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let P=s.hash;(P.directionalLength!==x||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==y||P.hemiLength!==v||P.numDirectionalShadows!==M||P.numPointShadows!==R||P.numSpotShadows!==_||P.numSpotMaps!==C||P.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=_,s.spotShadowMap.length=_,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=_+C-I,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=E,P.directionalLength=x,P.pointLength=m,P.spotLength=p,P.rectAreaLength=y,P.hemiLength=v,P.numDirectionalShadows=M,P.numPointShadows=R,P.numSpotShadows=_,P.numSpotMaps=C,P.numLightProbes=E,s.version=vE++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let M=h[y];if(M.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(M.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let R=s.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Fp(n,e){let t=new yE(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ME(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Fp(n,e),t.set(r,[l])):a>=o.length?(l=new Fp(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var ar=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},du=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`;function SE(n,e,t){let i=new rr,s=new $,r=new $,a=new zt,o=new ar({depthPacking:co}),l=new du,c={},h=t.maxTextureSize,u={[zi]:cn,[cn]:zi,[Mt]:Mt},f=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:EE,fragmentShader:TE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new z(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sm;let p=this.type;this.render=function(_,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;let E=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ai),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=p!==ns&&this.type===ns,L=p===ns&&this.type!==ns;for(let H=0,O=_.length;H<O;H++){let K=_[H],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Q=J.getFrameExtents();if(s.multiply(Q),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,J.mapSize.y=r.y)),J.map===null||Y===!0||L===!0){let re=this.type!==ns?{minFilter:yt,magFilter:yt}:{};J.map!==null&&J.map.dispose(),J.map=new Ct(s.x,s.y,re),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let ee=J.getViewportCount();for(let re=0;re<ee;re++){let ye=J.getViewport(re);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),F.viewport(a),J.updateMatrices(K,re),i=J.getFrustum(),M(C,I,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===ns&&y(J,I),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,T,P)};function y(_,C){let I=e.update(x);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Ct(s.x,s.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(C,null,I,f,x,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(C,null,I,d,x,null)}function v(_,C,I,E){let T=null,P=I.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(P!==void 0)T=P;else if(T=I.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=T.uuid,Y=C.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let H=L[Y];H===void 0&&(H=T.clone(),L[Y]=H,C.addEventListener("dispose",R)),T=H}if(T.visible=C.visible,T.wireframe=C.wireframe,E===ns?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let F=n.properties.get(T);F.light=I}return T}function M(_,C,I,E,T){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&T===ns)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,_.matrixWorld);let Y=e.update(_),L=_.material;if(Array.isArray(L)){let H=Y.groups;for(let O=0,K=H.length;O<K;O++){let J=H[O],Q=L[J.materialIndex];if(Q&&Q.visible){let ee=v(_,Q,E,T);_.onBeforeShadow(n,_,C,I,Y,ee,J),n.renderBufferDirect(I,null,Y,ee,_,J),_.onAfterShadow(n,_,C,I,Y,ee,J)}}}else if(L.visible){let H=v(_,L,E,T);_.onBeforeShadow(n,_,C,I,Y,H,null),n.renderBufferDirect(I,null,Y,H,_,null),_.onAfterShadow(n,_,C,I,Y,H,null)}}let F=_.children;for(let Y=0,L=F.length;Y<L;Y++)M(F[Y],C,I,E,T)}function R(_){_.target.removeEventListener("dispose",R);for(let I in c){let E=c[I],T=_.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function wE(n,e,t){let i=t.isWebGL2;function s(){let U=!1,pe=new zt,me=null,ke=new zt(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!U&&(n.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){U=Fe},setClear:function(Fe,Dt,Lt,sn,Pn){Pn===!0&&(Fe*=sn,Dt*=sn,Lt*=sn),pe.set(Fe,Dt,Lt,sn),ke.equals(pe)===!1&&(n.clearColor(Fe,Dt,Lt,sn),ke.copy(pe))},reset:function(){U=!1,me=null,ke.set(-1,0,0,0)}}}function r(){let U=!1,pe=null,me=null,ke=null;return{setTest:function(Fe){Fe?je(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Fe){pe!==Fe&&!U&&(n.depthMask(Fe),pe=Fe)},setFunc:function(Fe){if(me!==Fe){switch(Fe){case jg:n.depthFunc(n.NEVER);break;case $g:n.depthFunc(n.ALWAYS);break;case ev:n.depthFunc(n.LESS);break;case Al:n.depthFunc(n.LEQUAL);break;case tv:n.depthFunc(n.EQUAL);break;case nv:n.depthFunc(n.GEQUAL);break;case iv:n.depthFunc(n.GREATER);break;case sv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Fe}},setLocked:function(Fe){U=Fe},setClear:function(Fe){ke!==Fe&&(n.clearDepth(Fe),ke=Fe)},reset:function(){U=!1,pe=null,me=null,ke=null}}}function a(){let U=!1,pe=null,me=null,ke=null,Fe=null,Dt=null,Lt=null,sn=null,Pn=null;return{setTest:function(It){U||(It?je(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(It){pe!==It&&!U&&(n.stencilMask(It),pe=It)},setFunc:function(It,Dn,Di){(me!==It||ke!==Dn||Fe!==Di)&&(n.stencilFunc(It,Dn,Di),me=It,ke=Dn,Fe=Di)},setOp:function(It,Dn,Di){(Dt!==It||Lt!==Dn||sn!==Di)&&(n.stencilOp(It,Dn,Di),Dt=It,Lt=Dn,sn=Di)},setLocked:function(It){U=It},setClear:function(It){Pn!==It&&(n.clearStencil(It),Pn=It)},reset:function(){U=!1,pe=null,me=null,ke=null,Fe=null,Dt=null,Lt=null,sn=null,Pn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,R=null,_=null,C=null,I=null,E=new ce(0,0,0),T=0,P=!1,F=null,Y=null,L=null,H=null,O=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Q=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),J=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),J=Q>=2);let re=null,ye={},Z=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ve=new zt().fromArray(Z),De=new zt().fromArray(te);function Ce(U,pe,me,ke){let Fe=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(U,Dt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<me;Lt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(pe+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Dt}let Ze={};Ze[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ze[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ze[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ze[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),je(n.DEPTH_TEST),l.setFunc(Al),tt(!1),A(vd),je(n.CULL_FACE),_e(ai);function je(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function Oe(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function gt(U,pe){return d[U]!==pe?(n.bindFramebuffer(U,pe),d[U]=pe,i&&(U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=pe),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function k(U,pe){let me=x,ke=!1;if(U)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),U.isWebGLMultipleRenderTargets){let Fe=U.texture;if(me.length!==Fe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,Lt=Fe.length;Dt<Lt;Dt++)me[Dt]=n.COLOR_ATTACHMENT0+Dt;me.length=Fe.length,ke=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,ke=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Cn(U){return m!==U?(n.useProgram(U),m=U,!0):!1}let Ne={[tr]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};if(i)Ne[Md]=n.MIN,Ne[Ed]=n.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Ne[Md]=U.MIN_EXT,Ne[Ed]=U.MAX_EXT)}let qe={[Hg]:n.ZERO,[Og]:n.ONE,[kg]:n.SRC_COLOR,[Kh]:n.SRC_ALPHA,[Yg]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[Vg]:n.DST_ALPHA,[Gg]:n.ONE_MINUS_SRC_COLOR,[jh]:n.ONE_MINUS_SRC_ALPHA,[qg]:n.ONE_MINUS_DST_COLOR,[Wg]:n.ONE_MINUS_DST_ALPHA,[Zg]:n.CONSTANT_COLOR,[Qg]:n.ONE_MINUS_CONSTANT_COLOR,[Jg]:n.CONSTANT_ALPHA,[Kg]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(U,pe,me,ke,Fe,Dt,Lt,sn,Pn,It){if(U===ai){p===!0&&(Oe(n.BLEND),p=!1);return}if(p===!1&&(je(n.BLEND),p=!0),U!==Fg){if(U!==y||It!==P){if((v!==tr||_!==tr)&&(n.blendEquation(n.FUNC_ADD),v=tr,_=tr),It)switch(U){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _s:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _s:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,R=null,C=null,I=null,E.set(0,0,0),T=0,y=U,P=It}return}Fe=Fe||pe,Dt=Dt||me,Lt=Lt||ke,(pe!==v||Fe!==_)&&(n.blendEquationSeparate(Ne[pe],Ne[Fe]),v=pe,_=Fe),(me!==M||ke!==R||Dt!==C||Lt!==I)&&(n.blendFuncSeparate(qe[me],qe[ke],qe[Dt],qe[Lt]),M=me,R=ke,C=Dt,I=Lt),(sn.equals(E)===!1||Pn!==T)&&(n.blendColor(sn.r,sn.g,sn.b,Pn),E.copy(sn),T=Pn),y=U,P=!1}function Ht(U,pe){U.side===Mt?Oe(n.CULL_FACE):je(n.CULL_FACE);let me=U.side===cn;pe&&(me=!me),tt(me),U.blending===qr&&U.transparent===!1?_e(ai):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let ke=U.stencilWrite;c.setTest(ke),ke&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?je(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){F!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),F=U)}function A(U){U!==Ug?(je(n.CULL_FACE),U!==Y&&(U===vd?n.cullFace(n.BACK):U===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),Y=U}function w(U){U!==L&&(J&&n.lineWidth(U),L=U)}function V(U,pe,me){U?(je(n.POLYGON_OFFSET_FILL),(H!==pe||O!==me)&&(n.polygonOffset(pe,me),H=pe,O=me)):Oe(n.POLYGON_OFFSET_FILL)}function ae(U){U?je(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function se(U){U===void 0&&(U=n.TEXTURE0+K-1),re!==U&&(n.activeTexture(U),re=U)}function oe(U,pe,me){me===void 0&&(re===null?me=n.TEXTURE0+K-1:me=re);let ke=ye[me];ke===void 0&&(ke={type:void 0,texture:void 0},ye[me]=ke),(ke.type!==U||ke.texture!==pe)&&(re!==me&&(n.activeTexture(me),re=me),n.bindTexture(U,pe||Ze[U]),ke.type=U,ke.texture=pe)}function Re(){let U=ye[re];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(U){ve.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ve.copy(U))}function St(U){De.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Vt(U,pe){let me=u.get(pe);me===void 0&&(me=new WeakMap,u.set(pe,me));let ke=me.get(U);ke===void 0&&(ke=n.getUniformBlockIndex(pe,U.name),me.set(U,ke))}function ot(U,pe){let ke=u.get(pe).get(U);h.get(pe)!==ke&&(n.uniformBlockBinding(pe,ke,U.__bindingPointIndex),h.set(pe,ke))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},re=null,ye={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,R=null,_=null,C=null,I=null,E=new ce(0,0,0),T=0,P=!1,F=null,Y=null,L=null,H=null,O=null,ve.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:je,disable:Oe,bindFramebuffer:gt,drawBuffers:k,useProgram:Cn,setBlending:_e,setMaterial:Ht,setFlipSided:tt,setCullFace:A,setLineWidth:w,setPolygonOffset:V,setScissorTest:ae,activeTexture:se,bindTexture:oe,unbindTexture:Re,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:Le,texImage3D:Ee,updateUBOMapping:Vt,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Xe,texSubImage2D:Be,texSubImage3D:nt,compressedTexSubImage2D:ne,compressedTexSubImage3D:wt,scissor:$e,viewport:St,reset:ue}}function bE(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return d?new OffscreenCanvas(A,w):Wa("canvas")}function x(A,w,V,ae){let se=1;if((A.width>ae||A.height>ae)&&(se=ae/Math.max(A.width,A.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let oe=w?Nl:Math.floor,Re=oe(se*A.width),ge=oe(se*A.height);u===void 0&&(u=g(Re,ge));let Me=V?g(Re,ge):u;return Me.width=Re,Me.height=ge,Me.getContext("2d").drawImage(A,0,0,Re,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Re+"x"+ge+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return su(A.width)&&su(A.height)}function p(A){return o?!1:A.wrapS!==On||A.wrapT!==On||A.minFilter!==yt&&A.minFilter!==kt}function y(A,w){return A.generateMipmaps&&w&&A.minFilter!==yt&&A.minFilter!==kt}function v(A){n.generateMipmap(A)}function M(A,w,V,ae,se=!1){if(o===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=w;if(w===n.RED&&(V===n.FLOAT&&(oe=n.R32F),V===n.HALF_FLOAT&&(oe=n.R16F),V===n.UNSIGNED_BYTE&&(oe=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(oe=n.R8UI),V===n.UNSIGNED_SHORT&&(oe=n.R16UI),V===n.UNSIGNED_INT&&(oe=n.R32UI),V===n.BYTE&&(oe=n.R8I),V===n.SHORT&&(oe=n.R16I),V===n.INT&&(oe=n.R32I)),w===n.RG&&(V===n.FLOAT&&(oe=n.RG32F),V===n.HALF_FLOAT&&(oe=n.RG16F),V===n.UNSIGNED_BYTE&&(oe=n.RG8)),w===n.RGBA){let Re=se?Dl:Et.getTransfer(ae);V===n.FLOAT&&(oe=n.RGBA32F),V===n.HALF_FLOAT&&(oe=n.RGBA16F),V===n.UNSIGNED_BYTE&&(oe=Re===At?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function R(A,w,V){return y(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==yt&&A.minFilter!==kt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function _(A){return A===yt||A===Td||A===mh?n.NEAREST:n.LINEAR}function C(A){let w=A.target;w.removeEventListener("dispose",C),E(w),w.isVideoTexture&&h.delete(w)}function I(A){let w=A.target;w.removeEventListener("dispose",I),P(w)}function E(A){let w=i.get(A);if(w.__webglInit===void 0)return;let V=A.source,ae=f.get(V);if(ae){let se=ae[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(A),Object.keys(ae).length===0&&f.delete(V)}i.remove(A)}function T(A){let w=i.get(A);n.deleteTexture(w.__webglTexture);let V=A.source,ae=f.get(V);delete ae[w.__cacheKey],a.memory.textures--}function P(A){let w=A.texture,V=i.get(A),ae=i.get(w);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(V.__webglFramebuffer[se]))for(let oe=0;oe<V.__webglFramebuffer[se].length;oe++)n.deleteFramebuffer(V.__webglFramebuffer[se][oe]);else n.deleteFramebuffer(V.__webglFramebuffer[se]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[se])}else{if(Array.isArray(V.__webglFramebuffer))for(let se=0;se<V.__webglFramebuffer.length;se++)n.deleteFramebuffer(V.__webglFramebuffer[se]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let se=0,oe=w.length;se<oe;se++){let Re=i.get(w[se]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(w[se])}i.remove(w),i.remove(A)}let F=0;function Y(){F=0}function L(){let A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function H(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function O(A,w){let V=i.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,A,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function K(A,w){let V=i.get(A);if(A.version>0&&V.__version!==A.version){ve(V,A,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function J(A,w){let V=i.get(A);if(A.version>0&&V.__version!==A.version){ve(V,A,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function Q(A,w){let V=i.get(A);if(A.version>0&&V.__version!==A.version){De(V,A,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}let ee={[Un]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[tu]:n.MIRRORED_REPEAT},re={[yt]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[mh]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[lv]:n.LINEAR_MIPMAP_NEAREST,[Ga]:n.LINEAR_MIPMAP_LINEAR},ye={[xv]:n.NEVER,[wv]:n.ALWAYS,[yv]:n.LESS,[gm]:n.LEQUAL,[Mv]:n.EQUAL,[Sv]:n.GEQUAL,[Ev]:n.GREATER,[Tv]:n.NOTEQUAL};function Z(A,w,V){if(V?(n.texParameteri(A,n.TEXTURE_WRAP_S,ee[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ee[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ee[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,re[w.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==On||w.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,_(w.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,_(w.minFilter)),w.minFilter!==yt&&w.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===yt||w.minFilter!==mh&&w.minFilter!==Ga||w.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Qt&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function te(A,w){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",C));let ae=w.source,se=f.get(ae);se===void 0&&(se={},f.set(ae,se));let oe=H(w);if(oe!==A.__cacheKey){se[oe]===void 0&&(se[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[oe].usedTimes++;let Re=se[A.__cacheKey];Re!==void 0&&(se[A.__cacheKey].usedTimes--,Re.usedTimes===0&&T(w)),A.__cacheKey=oe,A.__webglTexture=se[oe].texture}return V}function ve(A,w,V){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);let se=te(A,w),oe=w.source;t.bindTexture(ae,A.__webglTexture,n.TEXTURE0+V);let Re=i.get(oe);if(oe.version!==Re.__version||se===!0){t.activeTexture(n.TEXTURE0+V);let ge=Et.getPrimaries(Et.workingColorSpace),Me=w.colorSpace===kn?null:Et.getPrimaries(w.colorSpace),Be=w.colorSpace===kn||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let nt=p(w)&&m(w.image)===!1,ne=x(w.image,nt,!1,s.maxTextureSize);ne=tt(w,ne);let wt=m(ne)||o,ft=r.convert(w.format,w.colorSpace),Xe=r.convert(w.type),Le=M(w.internalFormat,ft,Xe,w.colorSpace,w.isVideoTexture);Z(ae,w,wt);let Ee,$e=w.mipmaps,St=o&&w.isVideoTexture!==!0&&Le!==dm,Vt=Re.__version===void 0||se===!0,ot=R(w,ne,wt);if(w.isDepthTexture)Le=n.DEPTH_COMPONENT,o?w.type===Ui?Le=n.DEPTH_COMPONENT32F:w.type===ri?Le=n.DEPTH_COMPONENT24:w.type===ss?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:w.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ni&&Le===n.DEPTH_COMPONENT&&w.type!==Xu&&w.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ri,Xe=r.convert(w.type)),w.format===Rs&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,w.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ss,Xe=r.convert(w.type))),Vt&&(St?t.texStorage2D(n.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Le,ne.width,ne.height,0,ft,Xe,null));else if(w.isDataTexture)if($e.length>0&&wt){St&&Vt&&t.texStorage2D(n.TEXTURE_2D,ot,Le,$e[0].width,$e[0].height);for(let ue=0,U=$e.length;ue<U;ue++)Ee=$e[ue],St?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,ft,Xe,Ee.data):t.texImage2D(n.TEXTURE_2D,ue,Le,Ee.width,Ee.height,0,ft,Xe,Ee.data);w.generateMipmaps=!1}else St?(Vt&&t.texStorage2D(n.TEXTURE_2D,ot,Le,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ft,Xe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ne.width,ne.height,0,ft,Xe,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){St&&Vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Le,$e[0].width,$e[0].height,ne.depth);for(let ue=0,U=$e.length;ue<U;ue++)Ee=$e[ue],w.format!==ln?ft!==null?St?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Ee.width,Ee.height,ne.depth,ft,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Le,Ee.width,Ee.height,ne.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Ee.width,Ee.height,ne.depth,ft,Xe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Le,Ee.width,Ee.height,ne.depth,0,ft,Xe,Ee.data)}else{St&&Vt&&t.texStorage2D(n.TEXTURE_2D,ot,Le,$e[0].width,$e[0].height);for(let ue=0,U=$e.length;ue<U;ue++)Ee=$e[ue],w.format!==ln?ft!==null?St?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,ft,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,ft,Xe,Ee.data):t.texImage2D(n.TEXTURE_2D,ue,Le,Ee.width,Ee.height,0,ft,Xe,Ee.data)}else if(w.isDataArrayTexture)St?(Vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Le,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ft,Xe,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ft,Xe,ne.data);else if(w.isData3DTexture)St?(Vt&&t.texStorage3D(n.TEXTURE_3D,ot,Le,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ft,Xe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ft,Xe,ne.data);else if(w.isFramebufferTexture){if(Vt)if(St)t.texStorage2D(n.TEXTURE_2D,ot,Le,ne.width,ne.height);else{let ue=ne.width,U=ne.height;for(let pe=0;pe<ot;pe++)t.texImage2D(n.TEXTURE_2D,pe,Le,ue,U,0,ft,Xe,null),ue>>=1,U>>=1}}else if($e.length>0&&wt){St&&Vt&&t.texStorage2D(n.TEXTURE_2D,ot,Le,$e[0].width,$e[0].height);for(let ue=0,U=$e.length;ue<U;ue++)Ee=$e[ue],St?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ft,Xe,Ee):t.texImage2D(n.TEXTURE_2D,ue,Le,ft,Xe,Ee);w.generateMipmaps=!1}else St?(Vt&&t.texStorage2D(n.TEXTURE_2D,ot,Le,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Xe,ne)):t.texImage2D(n.TEXTURE_2D,0,Le,ft,Xe,ne);y(w,wt)&&v(ae),Re.__version=oe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function De(A,w,V){if(w.image.length!==6)return;let ae=te(A,w),se=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+V);let oe=i.get(se);if(se.version!==oe.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);let Re=Et.getPrimaries(Et.workingColorSpace),ge=w.colorSpace===kn?null:Et.getPrimaries(w.colorSpace),Me=w.colorSpace===kn||Re===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Be=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let ue=0;ue<6;ue++)!Be&&!nt?ne[ue]=x(w.image[ue],!1,!0,s.maxCubemapSize):ne[ue]=nt?w.image[ue].image:w.image[ue],ne[ue]=tt(w,ne[ue]);let wt=ne[0],ft=m(wt)||o,Xe=r.convert(w.format,w.colorSpace),Le=r.convert(w.type),Ee=M(w.internalFormat,Xe,Le,w.colorSpace),$e=o&&w.isVideoTexture!==!0,St=oe.__version===void 0||ae===!0,Vt=R(w,wt,ft);Z(n.TEXTURE_CUBE_MAP,w,ft);let ot;if(Be){$e&&St&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,Ee,wt.width,wt.height);for(let ue=0;ue<6;ue++){ot=ne[ue].mipmaps;for(let U=0;U<ot.length;U++){let pe=ot[U];w.format!==ln?Xe!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,pe.width,pe.height,Xe,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,pe.width,pe.height,Xe,Le,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,Ee,pe.width,pe.height,0,Xe,Le,pe.data)}}}else{ot=w.mipmaps,$e&&St&&(ot.length>0&&Vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,Ee,ne[0].width,ne[0].height));for(let ue=0;ue<6;ue++)if(nt){$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ne[ue].width,ne[ue].height,Xe,Le,ne[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ee,ne[ue].width,ne[ue].height,0,Xe,Le,ne[ue].data);for(let U=0;U<ot.length;U++){let me=ot[U].image[ue].image;$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,me.width,me.height,Xe,Le,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,Ee,me.width,me.height,0,Xe,Le,me.data)}}else{$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Xe,Le,ne[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ee,Xe,Le,ne[ue]);for(let U=0;U<ot.length;U++){let pe=ot[U];$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,Xe,Le,pe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,Ee,Xe,Le,pe.image[ue])}}}y(w,ft)&&v(n.TEXTURE_CUBE_MAP),oe.__version=se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ce(A,w,V,ae,se,oe){let Re=r.convert(V.format,V.colorSpace),ge=r.convert(V.type),Me=M(V.internalFormat,Re,ge,V.colorSpace);if(!i.get(w).__hasExternalTextures){let nt=Math.max(1,w.width>>oe),ne=Math.max(1,w.height>>oe);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,oe,Me,nt,ne,w.depth,0,Re,ge,null):t.texImage2D(se,oe,Me,nt,ne,0,Re,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),_e(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,i.get(V).__webglTexture,0,qe(w)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,i.get(V).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ae=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||_e(w)){let se=w.depthTexture;se&&se.isDepthTexture&&(se.type===Ui?ae=n.DEPTH_COMPONENT32F:se.type===ri&&(ae=n.DEPTH_COMPONENT24));let oe=qe(w);_e(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,ae,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ae,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let ae=qe(w);V&&_e(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,w.width,w.height):_e(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let ae=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<ae.length;se++){let oe=ae[se],Re=r.convert(oe.format,oe.colorSpace),ge=r.convert(oe.type),Me=M(oe.internalFormat,Re,ge,oe.colorSpace),Be=qe(w);V&&_e(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Me,w.width,w.height):_e(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);let ae=i.get(w.depthTexture).__webglTexture,se=qe(w);if(w.depthTexture.format===Ni)_e(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(w.depthTexture.format===Rs)_e(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(A){let w=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");je(w.__webglFramebuffer,A)}else if(V){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ze(w.__webglDepthbuffer[ae],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ze(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(A,w,V){let ae=i.get(A);w!==void 0&&Ce(ae.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(A)}function k(A){let w=A.texture,V=i.get(A),ae=i.get(w);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,a.memory.textures++);let se=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Re=m(A)||o;if(se){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let Me=0;Me<w.mipmaps.length;Me++)V.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else V.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)V.__webglFramebuffer[ge]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(oe)if(s.drawBuffers){let ge=A.texture;for(let Me=0,Be=ge.length;Me<Be;Me++){let nt=i.get(ge[Me]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&_e(A)===!1){let ge=oe?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){let Be=ge[Me];V.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);let nt=r.convert(Be.format,Be.colorSpace),ne=r.convert(Be.type),wt=M(Be.internalFormat,nt,ne,Be.colorSpace,A.isXRRenderTarget===!0),ft=qe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,wt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Z(n.TEXTURE_CUBE_MAP,w,Re);for(let ge=0;ge<6;ge++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Ce(V.__webglFramebuffer[ge][Me],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else Ce(V.__webglFramebuffer[ge],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(w,Re)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let ge=A.texture;for(let Me=0,Be=ge.length;Me<Be;Me++){let nt=ge[Me],ne=i.get(nt);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Z(n.TEXTURE_2D,nt,Re),Ce(V.__webglFramebuffer,A,nt,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),y(nt,Re)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ge=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ae.__webglTexture),Z(ge,w,Re),o&&w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Ce(V.__webglFramebuffer[Me],A,w,n.COLOR_ATTACHMENT0,ge,Me);else Ce(V.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,ge,0);y(w,Re)&&v(ge),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Cn(A){let w=m(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,se=V.length;ae<se;ae++){let oe=V[ae];if(y(oe,w)){let Re=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(oe).__webglTexture;t.bindTexture(Re,ge),v(Re),t.unbindTexture()}}}function Ne(A){if(o&&A.samples>0&&_e(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,ae=A.height,se=n.COLOR_BUFFER_BIT,oe=[],Re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),Me=A.isWebGLMultipleRenderTargets===!0;if(Me)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){oe.push(n.COLOR_ATTACHMENT0+Be),A.depthBuffer&&oe.push(Re);let nt=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(nt===!1&&(A.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Be]),nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),Me){let ne=i.get(w[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,V,ae,0,0,V,ae,se,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Be]);let nt=i.get(w[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function qe(A){return Math.min(s.maxSamples,A.samples)}function _e(A){let w=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(A){let w=a.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function tt(A,w){let V=A.colorSpace,ae=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===iu||V!==rs&&V!==kn&&(Et.getTransfer(V)===At?o===!1?e.has("EXT_sRGB")===!0&&ae===ln?(A.format=iu,A.minFilter=kt,A.generateMipmaps=!1):w=Fl.sRGBToLinear(w):(ae!==ln||se!==bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=gt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Cn,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=_e}function _E(n,e,t){let i=t.isWebGL2;function s(r,a=kn){let o,l=Et.getTransfer(a);if(r===bs)return n.UNSIGNED_BYTE;if(r===lm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===cm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===cv)return n.BYTE;if(r===hv)return n.SHORT;if(r===Xu)return n.UNSIGNED_SHORT;if(r===om)return n.INT;if(r===ri)return n.UNSIGNED_INT;if(r===Ui)return n.FLOAT;if(r===Qt)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===uv)return n.ALPHA;if(r===ln)return n.RGBA;if(r===fv)return n.LUMINANCE;if(r===dv)return n.LUMINANCE_ALPHA;if(r===Ni)return n.DEPTH_COMPONENT;if(r===Rs)return n.DEPTH_STENCIL;if(r===iu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===qu)return n.RED;if(r===hm)return n.RED_INTEGER;if(r===pv)return n.RG;if(r===um)return n.RG_INTEGER;if(r===fm)return n.RGBA_INTEGER;if(r===gh||r===vh||r===xh||r===yh)if(l===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===gh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===gh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===wd||r===bd||r===_d)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Sd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_d)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rd||r===Ad)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rd)return l===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ad)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cd||r===Pd||r===Dd||r===Ld||r===Id||r===Ud||r===Nd||r===Fd||r===zd||r===Bd||r===Hd||r===Od||r===kd||r===Gd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Cd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ld)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Id)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ud)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Od)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gd)return l===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mh||r===Vd||r===Wd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Mh)return l===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mv||r===Xd||r===qd||r===Yd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Mh)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ss?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var pu=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Se=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},RE={type:"move"},Ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Se;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mu=class extends As{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=t.getContextAttributes(),m=null,p=null,y=[],v=[],M=new $,R=null,_=new Rn;_.layers.enable(1),_.viewport=new zt;let C=new Rn;C.layers.enable(2),C.viewport=new zt;let I=[_,C],E=new pu;E.layers.enable(1),E.layers.enable(2);let T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=y[Z];return te===void 0&&(te=new Ba,y[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=y[Z];return te===void 0&&(te=new Ba,y[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=y[Z];return te===void 0&&(te=new Ba,y[Z]=te),te.getHandSpace()};function F(Z){let te=v.indexOf(Z.inputSource);if(te===-1)return;let ve=y[te];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",L);for(let Z=0;Z<y.length;Z++){let te=v[Z];te!==null&&(v[Z]=null,y[Z].disconnect(te))}T=null,P=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let te={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ct(d.framebufferWidth,d.framebufferHeight,{format:ln,type:bs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,ve=null,De=null;x.depth&&(De=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Rs:Ni,ve=x.stencil?ss:ri);let Ce={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Ct(f.textureWidth,f.textureHeight,{format:ln,type:bs,depthTexture:new Ds(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ze=e.properties.get(p);Ze.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Z){for(let te=0;te<Z.removed.length;te++){let ve=Z.removed[te],De=v.indexOf(ve);De>=0&&(v[De]=null,y[De].disconnect(ve))}for(let te=0;te<Z.added.length;te++){let ve=Z.added[te],De=v.indexOf(ve);if(De===-1){for(let Ze=0;Ze<y.length;Ze++)if(Ze>=v.length){v.push(ve),De=Ze;break}else if(v[Ze]===null){v[Ze]=ve,De=Ze;break}if(De===-1)break}let Ce=y[De];Ce&&Ce.connect(ve)}}let H=new S,O=new S;function K(Z,te,ve){H.setFromMatrixPosition(te.matrixWorld),O.setFromMatrixPosition(ve.matrixWorld);let De=H.distanceTo(O),Ce=te.projectionMatrix.elements,Ze=ve.projectionMatrix.elements,je=Ce[14]/(Ce[10]-1),Oe=Ce[14]/(Ce[10]+1),gt=(Ce[9]+1)/Ce[5],k=(Ce[9]-1)/Ce[5],Cn=(Ce[8]-1)/Ce[0],Ne=(Ze[8]+1)/Ze[0],qe=je*Cn,_e=je*Ne,Ht=De/(-Cn+Ne),tt=Ht*-Cn;te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(tt),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let A=je+Ht,w=Oe+Ht,V=qe-tt,ae=_e+(De-tt),se=gt*Oe/w*A,oe=k*Oe/w*A;Z.projectionMatrix.makePerspective(V,ae,se,oe,A,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function J(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;E.near=C.near=_.near=Z.near,E.far=C.far=_.far=Z.far,(T!==E.near||P!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,P=E.far);let te=Z.parent,ve=E.cameras;J(E,te);for(let De=0;De<ve.length;De++)J(ve[De],te);ve.length===2?K(E,_,C):E.projectionMatrix.copy(_.projectionMatrix),Q(Z,E,te)};function Q(Z,te,ve){ve===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Va*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let ee=null;function re(Z,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let De=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,De=!0);for(let Ce=0;Ce<ve.length;Ce++){let Ze=ve[Ce],je=null;if(d!==null)je=d.getViewport(Ze);else{let gt=u.getViewSubImage(f,Ze);je=gt.viewport,Ce===0&&(e.setRenderTargetTextures(p,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(p))}let Oe=I[Ce];Oe===void 0&&(Oe=new Rn,Oe.layers.enable(Ce),Oe.viewport=new zt,I[Ce]=Oe),Oe.matrix.fromArray(Ze.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ze.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(je.x,je.y,je.width,je.height),Ce===0&&(E.matrix.copy(Oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),De===!0&&E.cameras.push(Oe)}}for(let ve=0;ve<y.length;ve++){let De=v[ve],Ce=y[ve];De!==null&&Ce!==void 0&&Ce.update(De,te,c||a)}ee&&ee(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let ye=new Mm;ye.setAnimationLoop(re),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}};function AE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ym(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CE(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let M=v.program;i.uniformBlockBinding(y,M)}function c(y,v){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let R=v.program;i.updateUBOMapping(y,R);let _=e.render.frame;r[y.id]!==_&&(f(y),r[y.id]=_)}function h(y){let v=u();y.__bindingPointIndex=v;let M=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],M=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let _=0,C=M.length;_<C;_++){let I=Array.isArray(M[_])?M[_]:[M[_]];for(let E=0,T=I.length;E<T;E++){let P=I[E];if(d(P,_,E,R)===!0){let F=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value],L=0;for(let H=0;H<Y.length;H++){let O=Y[H],K=x(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,F+L,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,M,R){let _=y.value,C=v+"_"+M;if(R[C]===void 0)return typeof _=="number"||typeof _=="boolean"?R[C]=_:R[C]=_.clone(),!0;{let I=R[C];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[C]=_,!0}else if(I.equals(_)===!1)return I.copy(_),!0}return!1}function g(y){let v=y.uniforms,M=0,R=16;for(let C=0,I=v.length;C<I;C++){let E=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,P=E.length;T<P;T++){let F=E[T],Y=Array.isArray(F.value)?F.value:[F.value];for(let L=0,H=Y.length;L<H;L++){let O=Y[L],K=x(O),J=M%R;J!==0&&R-J<K.boundary&&(M+=R-J),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=K.storage}}}let _=M%R;return _>0&&(M+=R-_),y.__size=M,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Za=class{constructor(e={}){let{canvas:t=Hv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=ws,this.toneMappingExposure=1;let v=this,M=!1,R=0,_=0,C=null,I=-1,E=null,T=new zt,P=new zt,F=null,Y=new ce(0),L=0,H=t.width,O=t.height,K=1,J=null,Q=null,ee=new zt(0,0,H,O),re=new zt(0,0,H,O),ye=!1,Z=new rr,te=!1,ve=!1,De=null,Ce=new Ie,Ze=new $,je=new S,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return C===null?K:1}let k=i;function Cn(b,B){for(let W=0;W<b.length;W++){let X=b[W],G=t.getContext(X,B);if(G!==null)return G}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",pe,!1),k===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),k=Cn(B,b),k===null)throw Cn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,qe,_e,Ht,tt,A,w,V,ae,se,oe,Re,ge,Me,Be,nt,ne,wt,ft,Xe,Le,Ee,$e,St;function Vt(){Ne=new ZM(k),qe=new GM(k,Ne,e),Ne.init(qe),Ee=new _E(k,Ne,qe),_e=new wE(k,Ne,qe),Ht=new KM(k),tt=new fE,A=new bE(k,Ne,_e,tt,qe,Ee,Ht),w=new WM(v),V=new YM(v),ae=new rx(k,qe),$e=new OM(k,Ne,ae,qe),se=new QM(k,ae,Ht,$e),oe=new t1(k,se,ae,Ht),ft=new e1(k,qe,A),nt=new VM(tt),Re=new uE(v,w,V,Ne,qe,$e,nt),ge=new AE(v,tt),Me=new pE,Be=new ME(Ne,qe),wt=new HM(v,w,V,_e,oe,f,l),ne=new SE(v,oe,qe),St=new CE(k,Ht,qe,_e),Xe=new kM(k,Ne,Ht,qe),Le=new JM(k,Ne,Ht,qe),Ht.programs=Re.programs,v.capabilities=qe,v.extensions=Ne,v.properties=tt,v.renderLists=Me,v.shadowMap=ne,v.state=_e,v.info=Ht}Vt();let ot=new mu(v,k);this.xr=ot,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(H,O,!1))},this.getSize=function(b){return b.set(H,O)},this.setSize=function(b,B,W=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,O=B,t.width=Math.floor(b*K),t.height=Math.floor(B*K),W===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(H*K,O*K).floor()},this.setDrawingBufferSize=function(b,B,W){H=b,O=B,K=W,t.width=Math.floor(b*W),t.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,B,W,X){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,B,W,X),_e.viewport(T.copy(ee).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,B,W,X){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,B,W,X),_e.scissor(P.copy(re).multiplyScalar(K).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){_e.setScissorTest(ye=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(b=!0,B=!0,W=!0){let X=0;if(b){let G=!1;if(C!==null){let xe=C.texture.format;G=xe===fm||xe===um||xe===hm}if(G){let xe=C.texture.type,Ae=xe===bs||xe===ri||xe===Xu||xe===ss||xe===lm||xe===cm,ze=wt.getClearColor(),Ge=wt.getClearAlpha(),it=ze.r,Ye=ze.g,Qe=ze.b;Ae?(d[0]=it,d[1]=Ye,d[2]=Qe,d[3]=Ge,k.clearBufferuiv(k.COLOR,0,d)):(g[0]=it,g[1]=Ye,g[2]=Qe,g[3]=Ge,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}B&&(X|=k.DEPTH_BUFFER_BIT),W&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Me.dispose(),Be.dispose(),tt.dispose(),w.dispose(),V.dispose(),oe.dispose(),$e.dispose(),St.dispose(),Re.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Pn),ot.removeEventListener("sessionend",It),De&&(De.dispose(),De=null),Dn.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let b=Ht.autoReset,B=ne.enabled,W=ne.autoUpdate,X=ne.needsUpdate,G=ne.type;Vt(),Ht.autoReset=b,ne.enabled=B,ne.autoUpdate=W,ne.needsUpdate=X,ne.type=G}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){let B=b.target;B.removeEventListener("dispose",me),ke(B)}function ke(b){Fe(b),tt.remove(b)}function Fe(b){let B=tt.get(b).programs;B!==void 0&&(B.forEach(function(W){Re.releaseProgram(W)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,X,G,xe){B===null&&(B=Oe);let Ae=G.isMesh&&G.matrixWorld.determinant()<0,ze=Pg(b,B,W,X,G);_e.setMaterial(X,Ae);let Ge=W.index,it=1;if(X.wireframe===!0){if(Ge=se.getWireframeAttribute(W),Ge===void 0)return;it=2}let Ye=W.drawRange,Qe=W.attributes.position,Xt=Ye.start*it,Qn=(Ye.start+Ye.count)*it;xe!==null&&(Xt=Math.max(Xt,xe.start*it),Qn=Math.min(Qn,(xe.start+xe.count)*it)),Ge!==null?(Xt=Math.max(Xt,0),Qn=Math.min(Qn,Ge.count)):Qe!=null&&(Xt=Math.max(Xt,0),Qn=Math.min(Qn,Qe.count));let rn=Qn-Xt;if(rn<0||rn===1/0)return;$e.setup(G,X,ze,W,Ge);let Ji,Ot=Xe;if(Ge!==null&&(Ji=ae.get(Ge),Ot=Le,Ot.setIndex(Ji)),G.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*gt()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if(G.isLine){let lt=X.linewidth;lt===void 0&&(lt=1),_e.setLineWidth(lt*gt()),G.isLineSegments?Ot.setMode(k.LINES):G.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else G.isPoints?Ot.setMode(k.POINTS):G.isSprite&&Ot.setMode(k.TRIANGLES);if(G.isBatchedMesh)Ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ot.renderInstances(Xt,rn,G.count);else if(W.isInstancedBufferGeometry){let lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,uh=Math.min(W.instanceCount,lt);Ot.renderInstances(Xt,rn,uh)}else Ot.render(Xt,rn)};function Dt(b,B,W){b.transparent===!0&&b.side===Mt&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Zo(b,B,W),b.side=zi,b.needsUpdate=!0,Zo(b,B,W),b.side=Mt):Zo(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),m=Be.get(W),m.init(),y.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);let X=new Set;return b.traverse(function(G){let xe=G.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let ze=xe[Ae];Dt(ze,W,G),X.add(ze)}else Dt(xe,W,G),X.add(xe)}),y.pop(),m=null,X},this.compileAsync=function(b,B,W=null){let X=this.compile(b,B,W);return new Promise(G=>{function xe(){if(X.forEach(function(Ae){tt.get(Ae).currentProgram.isReady()&&X.delete(Ae)}),X.size===0){G(b);return}setTimeout(xe,10)}Ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Lt=null;function sn(b){Lt&&Lt(b)}function Pn(){Dn.stop()}function It(){Dn.start()}let Dn=new Mm;Dn.setAnimationLoop(sn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(b){Lt=b,ot.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},ot.addEventListener("sessionstart",Pn),ot.addEventListener("sessionend",It),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(B),B=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,C),m=Be.get(b,y.length),m.init(),y.push(m),Ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,te=nt.init(this.clippingPlanes,ve),x=Me.get(b,p.length),x.init(),p.push(x),Di(b,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(J,Q),this.info.render.frame++,te===!0&&nt.beginShadows();let W=m.state.shadowsArray;if(ne.render(W,b,B),te===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(x,b),m.setupLights(v._useLegacyLights),B.isArrayCamera){let X=B.cameras;for(let G=0,xe=X.length;G<xe;G++){let Ae=X[G];ud(x,b,Ae,Ae.viewport)}}else ud(x,b,B);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,B),$e.resetDefaultState(),I=-1,E=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Di(b,B,W,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){X&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);let Ae=oe.update(b),ze=b.material;ze.visible&&x.push(b,Ae,ze,W,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let Ae=oe.update(b),ze=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),je.copy(Ae.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(ze)){let Ge=Ae.groups;for(let it=0,Ye=Ge.length;it<Ye;it++){let Qe=Ge[it],Xt=ze[Qe.materialIndex];Xt&&Xt.visible&&x.push(b,Ae,Xt,W,je.z,Qe)}}else ze.visible&&x.push(b,Ae,ze,W,je.z,null)}}let xe=b.children;for(let Ae=0,ze=xe.length;Ae<ze;Ae++)Di(xe[Ae],B,W,X)}function ud(b,B,W,X){let G=b.opaque,xe=b.transmissive,Ae=b.transparent;m.setupLightsView(W),te===!0&&nt.setGlobalState(v.clippingPlanes,W),xe.length>0&&Cg(G,xe,B,W),X&&_e.viewport(T.copy(X)),G.length>0&&Yo(G,B,W),xe.length>0&&Yo(xe,B,W),Ae.length>0&&Yo(Ae,B,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Cg(b,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let xe=qe.isWebGL2;De===null&&(De=new Ct(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Qt:bs,minFilter:Ga,samples:xe?4:0})),v.getDrawingBufferSize(Ze),xe?De.setSize(Ze.x,Ze.y):De.setSize(Nl(Ze.x),Nl(Ze.y));let Ae=v.getRenderTarget();v.setRenderTarget(De),v.getClearColor(Y),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let ze=v.toneMapping;v.toneMapping=ws,Yo(b,W,X),A.updateMultisampleRenderTarget(De),A.updateRenderTargetMipmap(De);let Ge=!1;for(let it=0,Ye=B.length;it<Ye;it++){let Qe=B[it],Xt=Qe.object,Qn=Qe.geometry,rn=Qe.material,Ji=Qe.group;if(rn.side===Mt&&Xt.layers.test(X.layers)){let Ot=rn.side;rn.side=cn,rn.needsUpdate=!0,fd(Xt,W,X,Qn,rn,Ji),rn.side=Ot,rn.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(De),A.updateRenderTargetMipmap(De)),v.setRenderTarget(Ae),v.setClearColor(Y,L),v.toneMapping=ze}function Yo(b,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let G=0,xe=b.length;G<xe;G++){let Ae=b[G],ze=Ae.object,Ge=Ae.geometry,it=X===null?Ae.material:X,Ye=Ae.group;ze.layers.test(W.layers)&&fd(ze,B,W,Ge,it,Ye)}}function fd(b,B,W,X,G,xe){b.onBeforeRender(v,B,W,X,G,xe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(v,B,W,X,b,xe),G.transparent===!0&&G.side===Mt&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,v.renderBufferDirect(W,B,X,G,b,xe),G.side=zi,G.needsUpdate=!0,v.renderBufferDirect(W,B,X,G,b,xe),G.side=Mt):v.renderBufferDirect(W,B,X,G,b,xe),b.onAfterRender(v,B,W,X,G,xe)}function Zo(b,B,W){B.isScene!==!0&&(B=Oe);let X=tt.get(b),G=m.state.lights,xe=m.state.shadowsArray,Ae=G.state.version,ze=Re.getParameters(b,G.state,xe,B,W),Ge=Re.getProgramCacheKey(ze),it=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?V:w).get(b.envMap||X.environment),it===void 0&&(b.addEventListener("dispose",me),it=new Map,X.programs=it);let Ye=it.get(Ge);if(Ye!==void 0){if(X.currentProgram===Ye&&X.lightsStateVersion===Ae)return pd(b,ze),Ye}else ze.uniforms=Re.getUniforms(b),b.onBuild(W,ze,v),b.onBeforeCompile(ze,v),Ye=Re.acquireProgram(ze,Ge),it.set(Ge,Ye),X.uniforms=ze.uniforms;let Qe=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Qe.clippingPlanes=nt.uniform),pd(b,ze),X.needsLights=Lg(b),X.lightsStateVersion=Ae,X.needsLights&&(Qe.ambientLightColor.value=G.state.ambient,Qe.lightProbe.value=G.state.probe,Qe.directionalLights.value=G.state.directional,Qe.directionalLightShadows.value=G.state.directionalShadow,Qe.spotLights.value=G.state.spot,Qe.spotLightShadows.value=G.state.spotShadow,Qe.rectAreaLights.value=G.state.rectArea,Qe.ltc_1.value=G.state.rectAreaLTC1,Qe.ltc_2.value=G.state.rectAreaLTC2,Qe.pointLights.value=G.state.point,Qe.pointLightShadows.value=G.state.pointShadow,Qe.hemisphereLights.value=G.state.hemi,Qe.directionalShadowMap.value=G.state.directionalShadowMap,Qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Qe.spotShadowMap.value=G.state.spotShadowMap,Qe.spotLightMatrix.value=G.state.spotLightMatrix,Qe.spotLightMap.value=G.state.spotLightMap,Qe.pointShadowMap.value=G.state.pointShadowMap,Qe.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ye,X.uniformsList=null,Ye}function dd(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Zr.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function pd(b,B){let W=tt.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Pg(b,B,W,X,G){B.isScene!==!0&&(B=Oe),A.resetTextureUnits();let xe=B.fog,Ae=X.isMeshStandardMaterial?B.environment:null,ze=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:rs,Ge=(X.isMeshStandardMaterial?V:w).get(X.envMap||Ae),it=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Qe=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,Qn=!!W.morphAttributes.color,rn=ws;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(rn=v.toneMapping);let Ji=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=Ji!==void 0?Ji.length:0,lt=tt.get(X),uh=m.state.lights;if(te===!0&&(ve===!0||b!==E)){let ii=b===E&&X.id===I;nt.setState(X,b,ii)}let Wt=!1;X.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==uh.state.version||lt.outputColorSpace!==ze||G.isBatchedMesh&&lt.batching===!1||!G.isBatchedMesh&&lt.batching===!0||G.isInstancedMesh&&lt.instancing===!1||!G.isInstancedMesh&&lt.instancing===!0||G.isSkinnedMesh&&lt.skinning===!1||!G.isSkinnedMesh&&lt.skinning===!0||G.isInstancedMesh&&lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&lt.instancingColor===!1&&G.instanceColor!==null||lt.envMap!==Ge||X.fog===!0&&lt.fog!==xe||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==nt.numPlanes||lt.numIntersection!==nt.numIntersection)||lt.vertexAlphas!==it||lt.vertexTangents!==Ye||lt.morphTargets!==Qe||lt.morphNormals!==Xt||lt.morphColors!==Qn||lt.toneMapping!==rn||qe.isWebGL2===!0&&lt.morphTargetsCount!==Ot)&&(Wt=!0):(Wt=!0,lt.__version=X.version);let Zs=lt.currentProgram;Wt===!0&&(Zs=Zo(X,B,G));let md=!1,wa=!1,fh=!1,wn=Zs.getUniforms(),Qs=lt.uniforms;if(_e.useProgram(Zs.program)&&(md=!0,wa=!0,fh=!0),X.id!==I&&(I=X.id,wa=!0),md||E!==b){wn.setValue(k,"projectionMatrix",b.projectionMatrix),wn.setValue(k,"viewMatrix",b.matrixWorldInverse);let ii=wn.map.cameraPosition;ii!==void 0&&ii.setValue(k,je.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&wn.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wn.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,wa=!0,fh=!0)}if(G.isSkinnedMesh){wn.setOptional(k,G,"bindMatrix"),wn.setOptional(k,G,"bindMatrixInverse");let ii=G.skeleton;ii&&(qe.floatVertexTextures?(ii.boneTexture===null&&ii.computeBoneTexture(),wn.setValue(k,"boneTexture",ii.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(wn.setOptional(k,G,"batchingTexture"),wn.setValue(k,"batchingTexture",G._matricesTexture,A));let dh=W.morphAttributes;if((dh.position!==void 0||dh.normal!==void 0||dh.color!==void 0&&qe.isWebGL2===!0)&&ft.update(G,W,Zs),(wa||lt.receiveShadow!==G.receiveShadow)&&(lt.receiveShadow=G.receiveShadow,wn.setValue(k,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qs.envMap.value=Ge,Qs.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),wa&&(wn.setValue(k,"toneMappingExposure",v.toneMappingExposure),lt.needsLights&&Dg(Qs,fh),xe&&X.fog===!0&&ge.refreshFogUniforms(Qs,xe),ge.refreshMaterialUniforms(Qs,X,K,O,De),Zr.upload(k,dd(lt),Qs,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Zr.upload(k,dd(lt),Qs,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wn.setValue(k,"center",G.center),wn.setValue(k,"modelViewMatrix",G.modelViewMatrix),wn.setValue(k,"normalMatrix",G.normalMatrix),wn.setValue(k,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let ii=X.uniformsGroups;for(let ph=0,Ig=ii.length;ph<Ig;ph++)if(qe.isWebGL2){let gd=ii[ph];St.update(gd,Zs),St.bind(gd,Zs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zs}function Dg(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Lg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,W){tt.get(b.texture).__webglTexture=B,tt.get(b.depthTexture).__webglTexture=W;let X=tt.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){let W=tt.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){C=b,R=B,_=W;let X=!0,G=null,xe=!1,Ae=!1;if(b){let Ge=tt.get(b);Ge.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Ge.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ge.__hasExternalTextures&&A.rebindTextures(b,tt.get(b.texture).__webglTexture,tt.get(b.depthTexture).__webglTexture);let it=b.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ae=!0);let Ye=tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?G=Ye[B][W]:G=Ye[B],xe=!0):qe.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?G=tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[W]:G=Ye,T.copy(b.viewport),P.copy(b.scissor),F=b.scissorTest}else T.copy(ee).multiplyScalar(K).floor(),P.copy(re).multiplyScalar(K).floor(),F=ye;if(_e.bindFramebuffer(k.FRAMEBUFFER,G)&&qe.drawBuffers&&X&&_e.drawBuffers(b,G),_e.viewport(T),_e.scissor(P),_e.setScissorTest(F),xe){let Ge=tt.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ge.__webglTexture,W)}else if(Ae){let Ge=tt.get(b.texture),it=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.__webglTexture,W||0,it)}I=-1},this.readRenderTargetPixels=function(b,B,W,X,G,xe,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){_e.bindFramebuffer(k.FRAMEBUFFER,ze);try{let Ge=b.texture,it=Ge.format,Ye=Ge.type;if(it!==ln&&Ee.convert(it)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Ye===Qt&&(Ne.has("EXT_color_buffer_half_float")||qe.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Ye!==bs&&Ee.convert(Ye)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Ui&&(qe.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&W>=0&&W<=b.height-G&&k.readPixels(B,W,X,G,Ee.convert(it),Ee.convert(Ye),xe)}finally{let Ge=C!==null?tt.get(C).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(b,B,W=0){let X=Math.pow(2,-W),G=Math.floor(B.image.width*X),xe=Math.floor(B.image.height*X);A.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,b.x,b.y,G,xe),_e.unbindTexture()},this.copyTextureToTexture=function(b,B,W,X=0){let G=B.image.width,xe=B.image.height,Ae=Ee.convert(W.format),ze=Ee.convert(W.type);A.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,b.x,b.y,G,xe,Ae,ze,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Ae,B.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,b.x,b.y,Ae,ze,B.image),X===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,ze=b.max.z-b.min.z+1,Ge=Ee.convert(X.format),it=Ee.convert(X.type),Ye;if(X.isData3DTexture)A.setTexture3D(X,0),Ye=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ye=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let Qe=k.getParameter(k.UNPACK_ROW_LENGTH),Xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qn=k.getParameter(k.UNPACK_SKIP_PIXELS),rn=k.getParameter(k.UNPACK_SKIP_ROWS),Ji=k.getParameter(k.UNPACK_SKIP_IMAGES),Ot=W.isCompressedTexture?W.mipmaps[G]:W.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?k.texSubImage3D(Ye,G,B.x,B.y,B.z,xe,Ae,ze,Ge,it,Ot.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ye,G,B.x,B.y,B.z,xe,Ae,ze,Ge,Ot.data)):k.texSubImage3D(Ye,G,B.x,B.y,B.z,xe,Ae,ze,Ge,it,Ot),k.pixelStorei(k.UNPACK_ROW_LENGTH,Qe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qn),k.pixelStorei(k.UNPACK_SKIP_ROWS,rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ji),G===0&&X.generateMipmaps&&k.generateMipmap(Ye),_e.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){R=0,_=0,C=null,_e.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yu?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===lc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?sr:pm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Ut:rs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},gu=class extends Za{};gu.prototype.isWebGL1Renderer=!0;var Wl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qa=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},vu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new S,Xl=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ei=class extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Ca=new S,Hr=new S,Or=new S,kr=new $,Pa=new $,_m=new Ie,vl=new S,Da=new S,xl=new S,zp=new $,Wh=new $,Bp=new $,Hi=class extends hn{constructor(e=new Ei){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vu(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new Xl(i,3,0,!1)),Br.setAttribute("uv",new Xl(i,2,3,!1))}this.geometry=Br,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),_m.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;yl(vl.set(-.5,-.5,0),Or,a,Hr,s,r),yl(Da.set(.5,-.5,0),Or,a,Hr,s,r),yl(xl.set(.5,.5,0),Or,a,Hr,s,r),zp.set(0,0),Wh.set(1,0),Bp.set(1,1);let o=e.ray.intersectTriangle(vl,Da,xl,!1,Ca);if(o===null&&(yl(Da.set(-.5,.5,0),Or,a,Hr,s,r),Wh.set(0,1),o=e.ray.intersectTriangle(vl,xl,Da,!1,Ca),o===null))return;let l=e.ray.origin.distanceTo(Ca);l<e.near||l>e.far||t.push({distance:l,point:Ca.clone(),uv:ir.getInterpolation(Ca,vl,Da,xl,zp,Wh,Bp,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yl(n,e,t,i,s,r){kr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Pa.x=r*kr.x-s*kr.y,Pa.y=s*kr.x+r*kr.y):Pa.copy(kr),n.copy(e),n.x+=Pa.x,n.y+=Pa.y,n.applyMatrix4(_m)}var ql=class extends Gn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=yt,h=yt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yl=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new Ie,Hp=new Ie,Ml=[],Op=new as,PE=new Ie,La=new z,Ia=new Mi,Ls=class extends z{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,PE)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new as),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),Op.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Op)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),Ia.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),Hp.multiplyMatrices(i,Gr),La.matrixWorld=Hp,La.raycast(e,Ml);for(let a=0,o=Ml.length;a<o;a++){let l=Ml[a];l.instanceId=r,l.object=this,t.push(l)}Ml.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Is=class extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kp=new S,Gp=new S,Vp=new Ie,Xh=new Kr,El=new Mi,Ja=class extends hn{constructor(e=new pt,t=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)kp.fromBufferAttribute(t,s-1),Gp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=kp.distanceTo(Gp);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;Vp.copy(s).invert(),Xh.copy(e.ray).applyMatrix4(Vp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,u=new S,f=new S,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=p,M=y-1;v<M;v+=d){let R=g.getX(v),_=g.getX(v+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,_),Xh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=p,M=y-1;v<M;v+=d){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Xh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(f);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Wp=new S,Xp=new S,ea=class extends Ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wp.fromBufferAttribute(t,s),Xp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var or=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qp=new Ie,xu=new Kr,Tl=new Mi,Sl=new S,ta=class extends hn{constructor(e=new pt,t=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),Tl.radius+=r,e.ray.intersectsSphere(Tl)===!1)return;qp.copy(s).invert(),xu.copy(e.ray).applyMatrix4(qp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Sl.fromBufferAttribute(u,m),Yp(Sl,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Sl.fromBufferAttribute(u,g),Yp(Sl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yp(n,e,t,i,s,r,a){let o=xu.distanceSqToPoint(n);if(o<t){let l=new S;xu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Vn=class extends Gn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new $:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,s=[],r=[],a=[],o=new S,l=new Ie;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new S)}r[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(on(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(on(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ka=class extends oi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new $,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yu=class extends Ka{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ju(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var wl=new S,qh=new Ju,Yh=new Ju,Zh=new Ju,na=class extends oi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new S){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wl.subVectors(s[0],s[1]).add(s[0]),c=wl);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),qh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Yh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Zh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Yh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Zh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(qh.calc(l),Yh.calc(l),Zh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zp(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function DE(n,e){let t=1-n;return t*t*e}function LE(n,e){return 2*(1-n)*n*e}function IE(n,e){return n*n*e}function Ha(n,e,t,i){return DE(n,e)+LE(n,t)+IE(n,i)}function UE(n,e){let t=1-n;return t*t*t*e}function NE(n,e){let t=1-n;return 3*t*t*n*e}function FE(n,e){return 3*(1-n)*n*n*e}function zE(n,e){return n*n*n*e}function Oa(n,e,t,i,s){return UE(n,e)+NE(n,t)+FE(n,i)+zE(n,s)}var Zl=class extends oi{constructor(e=new $,t=new $,i=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new $){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Oa(e,s.x,r.x,a.x,o.x),Oa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mu=class extends oi{constructor(e=new S,t=new S,i=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Oa(e,s.x,r.x,a.x,o.x),Oa(e,s.y,r.y,a.y,o.y),Oa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ql=class extends oi{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends oi{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends oi{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ha(e,s.x,r.x,a.x),Ha(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends oi{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ha(e,s.x,r.x,a.x),Ha(e,s.y,r.y,a.y),Ha(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Zp(o,l.x,c.x,h.x,u.x),Zp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new $().fromArray(s))}return this}},Tu=Object.freeze({__proto__:null,ArcCurve:yu,CatmullRomCurve3:na,CubicBezierCurve:Zl,CubicBezierCurve3:Mu,EllipseCurve:Ka,LineCurve:Ql,LineCurve3:Eu,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:Kl,SplineCurve:jl}),Su=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}},$l=class extends Su{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ql(this.currentPoint.clone(),new $(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Jl(this.currentPoint.clone(),new $(e,t),new $(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Zl(this.currentPoint.clone(),new $(e,t),new $(i,s),new $(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Ka(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ja=class n extends pt{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=on(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,f=new $,d=new S,g=new S,x=new S,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let v=i+y*h*s,M=Math.sin(v),R=Math.cos(v);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*M,u.y=e[_].y,u.z=e[_].x*R,a.push(u.x,u.y,u.z),f.x=y/t,f.y=_/(e.length-1),o.push(f.x,f.y);let C=l[3*_+0]*M,I=l[3*_+1],E=l[3*_+0]*R;c.push(C,I,E)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let M=v+y*e.length,R=M,_=M+e.length,C=M+e.length+1,I=M+1;r.push(R,_,I),r.push(C,I,_)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Oi=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new S,h=new $;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},He=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(d,2));function y(){let M=new S,R=new S,_=0,C=(t-e)/i;for(let I=0;I<=r;I++){let E=[],T=I/r,P=T*(t-e)+e;for(let F=0;F<=s;F++){let Y=F/s,L=Y*l+o,H=Math.sin(L),O=Math.cos(L);R.x=P*H,R.y=-T*i+m,R.z=P*O,u.push(R.x,R.y,R.z),M.set(H,C,O).normalize(),f.push(M.x,M.y,M.z),d.push(Y,1-T),E.push(g++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let T=x[E][I],P=x[E+1][I],F=x[E+1][I+1],Y=x[E][I+1];h.push(T,P,Y),h.push(P,F,Y),_+=6}c.addGroup(p,_,0),p+=_}function v(M){let R=g,_=new $,C=new S,I=0,E=M===!0?e:t,T=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let L=F/s*l+o,H=Math.cos(L),O=Math.sin(L);C.x=E*O,C.y=m*T,C.z=E*H,u.push(C.x,C.y,C.z),f.push(0,T,0),_.x=H*.5+.5,_.y=O*.5*T+.5,d.push(_.x,_.y),g++}for(let F=0;F<s;F++){let Y=R+F,L=P+F;M===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),I+=3}c.addGroup(p,I,M===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class n extends He{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wu=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new S,M=new S,R=new S;for(let _=0;_<t.length;_+=3)d(t[_+0],v),d(t[_+1],M),d(t[_+2],R),l(v,M,R,y)}function l(y,v,M,R){let _=R+1,C=[];for(let I=0;I<=_;I++){C[I]=[];let E=y.clone().lerp(M,I/_),T=v.clone().lerp(M,I/_),P=_-I;for(let F=0;F<=P;F++)F===0&&I===_?C[I][F]=E:C[I][F]=E.clone().lerp(T,F/P)}for(let I=0;I<_;I++)for(let E=0;E<2*(_-I)-1;E++){let T=Math.floor(E/2);E%2===0?(f(C[I][T+1]),f(C[I+1][T]),f(C[I][T])):(f(C[I][T+1]),f(C[I+1][T+1]),f(C[I+1][T]))}}function c(y){let v=new S;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(y),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let y=new S;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let M=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(M,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],M=a[y+2],R=a[y+4],_=Math.max(v,M,R),C=Math.min(v,M,R);_>.9&&C<.1&&(v<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let M=y*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){let y=new S,v=new S,M=new S,R=new S,_=new $,C=new $,I=new $;for(let E=0,T=0;E<r.length;E+=9,T+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),_.set(a[T+0],a[T+1]),C.set(a[T+2],a[T+3]),I.set(a[T+4],a[T+5]),R.copy(y).add(v).add(M).divideScalar(3);let P=m(R);x(_,T+0,y,P),x(C,T+2,v,P),x(I,T+4,M,P)}}function x(y,v,M,R){R<0&&y.x===1&&(a[v]=y.x-1),M.x===0&&M.z===0&&(a[v]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var $a=class extends $l{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $l().fromJSON(s))}return this}},BE={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Rm(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=VE(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return eo(r,a,t,o,l,d,0),a}};function Rm(n,e,t,i,s){let r,a;if(s===eT(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Qp(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Qp(r,n[r],n[r+1],a);return a&&hc(a,a.next)&&(no(a),a=a.next),a}function lr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(hc(t,t.next)||Gt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function eo(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ZE(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?OE(n,i,s,r):HE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),no(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=kE(lr(n),e,t),eo(n,e,t,i,s,r,2)):a===2&&GE(n,e,t,i,s,r):eo(lr(n),e,t,i,s,r,1);break}}}function HE(n){let e=n.prev,t=n,i=n.next;if(Gt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Xr(s,o,r,l,a,c,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function OE(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=bu(d,g,e,t,i),y=bu(x,m,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Xr(o,h,l,u,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Xr(o,h,l,u,c,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Xr(o,h,l,u,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Xr(o,h,l,u,c,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function kE(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!hc(s,r)&&Am(s,i,i.next,r)&&to(s,r)&&to(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),no(i),no(i.next),i=n=r),i=i.next}while(i!==n);return lr(i)}function GE(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&KE(a,o)){let l=Cm(a,o);a=lr(a,a.next),l=lr(l,l.next),eo(a,e,t,i,s,r,0),eo(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function VE(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Rm(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(JE(c));for(s.sort(WE),r=0;r<s.length;r++)t=XE(s[r],t);return t}function WE(n,e){return n.x-e.x}function XE(n,e){let t=qE(n,e);if(!t)return e;let i=Cm(t,n);return lr(i,i.next),lr(t,t.next)}function qE(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Xr(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),to(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&YE(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function YE(n,e){return Gt(n.prev,n,e.prev)<0&&Gt(e.next,n,n.next)<0}function ZE(n,e,t,i){let s=n;do s.z===0&&(s.z=bu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,QE(s)}function QE(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function bu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function JE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xr(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function KE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!jE(n,e)&&(to(n,e)&&to(e,n)&&$E(n,e)&&(Gt(n.prev,n,e.prev)||Gt(n,e.prev,e))||hc(n,e)&&Gt(n.prev,n,n.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function hc(n,e){return n.x===e.x&&n.y===e.y}function Am(n,e,t,i){let s=_l(Gt(n,e,t)),r=_l(Gt(n,e,i)),a=_l(Gt(t,i,n)),o=_l(Gt(t,i,e));return!!(s!==r&&a!==o||s===0&&bl(n,t,e)||r===0&&bl(n,i,e)||a===0&&bl(t,n,i)||o===0&&bl(t,e,i))}function bl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _l(n){return n>0?1:n<0?-1:0}function jE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Am(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function to(n,e){return Gt(n.prev,n,n.next)<0?Gt(n,e,n.next)>=0&&Gt(n,n.prev,e)>=0:Gt(n,e,n.prev)<0||Gt(n,n.next,e)<0}function $E(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cm(n,e){let t=new _u(n.i,n.x,n.y),i=new _u(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Qp(n,e,t,i){let s=new _u(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function no(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _u(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eT(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var ka=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Jp(e),Kp(i,e);let a=e.length;t.forEach(Jp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Kp(i,t[l]);let o=BE.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var li=class n extends wu{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var io=class n extends pt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new S,g=new $;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,v=y,M=y+i+1,R=y+i+2,_=y+1;o.push(v,M,_),o.push(M,R,_)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ec=class n extends pt{constructor(e=new $a([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;ka.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];ka.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=ka.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+u,M=y[1]+u,R=y[2]+u;i.push(v,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return tT(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function tT(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Pe=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,f=new S,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let _=R/t;u.x=-e*Math.cos(s+_*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+_*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(_+M,1-v),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let v=h[p][y+1],M=h[p][y],R=h[p+1][y],_=h[p+1][y+1];(p!==0||a>0)&&d.push(v,M,_),(p!==i-1||l<Math.PI)&&d.push(M,R,_)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Us=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var so=class n extends pt{constructor(e=new Kl(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new $,h=new S,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(d,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),p()}function m(v){h=e.getPointAt(v/t,h);let M=a.normals[v],R=a.binormals[v];for(let _=0;_<=s;_++){let C=_/s*Math.PI*2,I=Math.sin(C),E=-Math.cos(C);l.x=E*M.x+I*R.x,l.y=E*M.y+I*R.y,l.z=E*M.z+I*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let R=(s+1)*(v-1)+(M-1),_=(s+1)*v+(M-1),C=(s+1)*v+M,I=(s+1)*(v-1)+M;g.push(R,_,I),g.push(_,C,I)}}function y(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Tu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var tc=class extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ht=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mm,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Rl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ia=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ru=class extends ia{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zd,endingEnd:Zd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qd:r=e,o=2*t-i;break;case Jd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qd:a=e,l=2*i-t;break;case Jd:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+v*a[l+R]+M*a[u+R];return r}},Au=class extends ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Cu=class extends ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rl(t,this.TimeBufferType),this.values=Rl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rl(e.times,Array),values:Rl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ru(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cl:t=this.InterpolantFactoryMethodDiscrete;break;case Pl:t=this.InterpolantFactoryMethodLinear;break;case Eh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cl;case this.InterpolantFactoryMethodLinear:return Pl;case this.InterpolantFactoryMethodSmooth:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Eh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Pl;var cr=class extends Si{};cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Cl;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pu=class extends Si{};Pu.prototype.ValueTypeName="color";var Du=class extends Si{};Du.prototype.ValueTypeName="number";var Lu=class extends ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)jn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ro=class extends Si{InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.DefaultInterpolation=Pl;ro.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Si{};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Cl;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Iu=class extends Si{};Iu.prototype.ValueTypeName="vector";var jp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Uu=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},iT=new Uu,ao=class{constructor(e){this.manager=e!==void 0?e:iT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nu=class extends ao{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=jp.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Wa("img");function l(){h(),jp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var nc=class extends ao{constructor(e){super(e)}load(e,t,i,s){let r=new Gn,a=new Nu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},oo=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ic=class extends oo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qh=new Ie,$p=new S,em=new S,sc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$p.setFromMatrixPosition(e.matrixWorld),t.position.copy($p),em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(em),t.updateMatrixWorld(),Qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tm=new Ie,Ua=new S,Jh=new S,Fu=class extends sc{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ua.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ua),Jh.copy(i.position),Jh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jh),i.updateMatrixWorld(),s.makeTranslation(-Ua.x,-Ua.y,-Ua.z),tm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tm)}},sa=class extends oo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zu=class extends sc{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rc=class extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new zu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nm(){return(typeof performance>"u"?Date:performance).now()}var Ku="\\[\\]\\.:\\/",sT=new RegExp("["+Ku+"]","g"),ju="[^"+Ku+"]",rT="[^"+Ku.replace("\\.","")+"]",aT=/((?:WC+[\/:])*)/.source.replace("WC",ju),oT=/(WCOD+)?/.source.replace("WCOD",rT),lT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),cT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),hT=new RegExp("^"+aT+oT+lT+cT+"$"),uT=["material","materials","bones","map"],Bu=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sT,"")}static parseTrackName(e){let t=hT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);uT.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Bu;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gw=new Float32Array(1);var ac=class{constructor(e,t,i=0,s=1/0){this.ray=new Kr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Hu(e,this,i,t),i.sort(im),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Hu(e[s],this,i,t);return i.sort(im),i}};function im(n,e){return n.distance-e.distance}function Hu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Hu(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dT=new Ps(-1,1,1,-1,0,1),$u=class extends pt{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}},pT=new $u,ki=class{constructor(e){this._mesh=new z(pT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oa=class extends gn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ci.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ki(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ho=class extends gn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fc=class extends gn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var dc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new $);this._width=i.width,this._height=i.height,t=new Ct(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oa(uc),this.copyPass.material.blending=ai,this.clock=new ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ho!==void 0&&(a instanceof ho?i=!0:a instanceof fc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pc=class extends gn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Pm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class n extends gn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ct(r,a,{type:Qt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ct(r,a,{type:Qt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ct(r,a,{type:Qt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Pm;this.highPassUniforms=ci.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=uc;this.copyUniforms=ci.clone(h.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_s,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new pn,this.fsQuad=new ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};la.BlurDirectionX=new $(1,0);la.BlurDirectionY=new $(0,1);var Dm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var mc=class extends gn{constructor(){super();let e=Dm;this.uniforms=ci.clone(e.uniforms),this.material=new tc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ku?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lm={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var gc=class extends gn{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Ct(1,1,{minFilter:yt,magFilter:yt,type:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ar,this.materialDepth.depthPacking=co,this.materialDepth.blending=ai;let o=Lm,l=ci.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=t.aspect,l.aperture.value=r,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new mt({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new ki(this.materialBokeh),this._oldClearColor=new ce}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var uo=class n extends z{constructor(){let e=n.SkyShader,t=new mt({name:e.name,uniforms:ci.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:cn,depthWrite:!1});super(new Tt(1,1,1),t),this.isSky=!0}};uo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new S},up:{value:new S(0,1,0)}},vertexShader:`
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

		}`};var fo=new pt;fo.setAttribute("position",new Bt(new Float32Array([-1,-1,3,-1,-1,3]),2));fo.setAttribute("uv",new Bt(new Float32Array([0,0,2,0,0,2]),2));fo.boundingSphere=new Mi;fo.computeBoundingSphere=function(){};var mT=new Ps,Ns=class{constructor(e){this._mesh=new z(fo,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,mT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}},gT={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new Ie},viewMat:{value:new Ie},projViewMat:{value:new Ie},projectionMatrixInv:{value:new Ie},viewMatrixInv:{value:new Ie},cameraPos:{value:new S},resolution:{value:new $},time:{value:0},samples:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},logDepth:{value:!1},ortho:{value:!1},screenSpaceRadius:{value:!1},frame:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
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
}`},vT={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},transparencyDWFalse:{value:null},transparencyDWTrue:{value:null},transparencyDWTrueDepth:{value:null},transparencyAware:{value:!1},projMat:{value:new Ie},viewMat:{value:new Ie},projectionMatrixInv:{value:new Ie},viewMatrixInv:{value:new Ie},cameraPos:{value:new S},resolution:{value:new $},color:{value:new S(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:10},renderMode:{value:0},gammaCorrection:{value:!1},logDepth:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    `},xT={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new Ie},viewMat:{value:new Ie},projectionMatrixInv:{value:new Ie},viewMatrixInv:{value:new Ie},cameraPos:{value:new S},resolution:{value:new $},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},logDepth:{value:!1},screenSpaceRadius:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    `},yT={uniforms:{sceneDepth:{value:null},resolution:{value:new $},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new Ie},projectionMatrixInv:{value:new Ie},logDepth:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    }`},Um="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",tb=Uint8Array.from(atob(Um),n=>n.charCodeAt(0));var MT=Uint8Array.from(atob(Um),n=>n.charCodeAt(0));function Nm(n,e,t){if(e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)){let r=e.getQueryParameter(n,e.QUERY_RESULT)/1e6;t.lastTime=r}else setTimeout(()=>{Nm(n,e,t)},1)}var vc=class extends gn{constructor(e,t,i=512,s=512){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.configuration=new Proxy({aoSamples:16,aoRadius:5,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,color:new ce(0,0,0),gammaCorrection:!0,logarithmicDepthBuffer:!1,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,autoRenderBeauty:!0,colorMultiply:!0,transparencyAware:!1,stencil:!1,accumulate:!1},{set:(r,a,o)=>{let l=r[a];return r[a]=o,o.equals?o.equals(l)||this.firstFrame():l!==o&&this.firstFrame(),a==="aoSamples"&&l!==o&&this.configureAOPass(this.configuration.logarithmicDepthBuffer),a==="denoiseSamples"&&l!==o&&this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),a==="halfRes"&&l!==o&&(this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.setSize(this.width,this.height)),a==="depthAwareUpsampling"&&l!==o&&this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),a==="transparencyAware"&&l!==o&&(this.autoDetectTransparency=!1,this.configureTransparencyTarget()),a==="stencil"&&l!==o&&(this.beautyRenderTarget.dispose(),this.beautyRenderTarget=new Ct(this.width,this.height,{minFilter:kt,magFilter:yt,type:Qt,format:ln,stencilBuffer:o}),this.beautyRenderTarget.depthTexture=new Ds(this.width,this.height,o?ss:ri),this.beautyRenderTarget.depthTexture.format=o?Rs:Ni),!0}}),this.samples=[],this.samplesDenoise=[],this.autoDetectTransparency=!0,this.frame=0,this.lastViewMatrix=new Ie,this.lastProjectionMatrix=new Ie,this.beautyRenderTarget=new Ct(this.width,this.height,{minFilter:kt,magFilter:yt,type:Qt,format:ln,stencilBuffer:!1}),this.beautyRenderTarget.depthTexture=new Ds(this.width,this.height,ri),this.beautyRenderTarget.depthTexture.format=Ni,this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.detectTransparency(),this.configureTransparencyTarget(),this.writeTargetInternal=new Ct(this.width,this.height,{minFilter:kt,magFilter:kt,depthBuffer:!1}),this.readTargetInternal=new Ct(this.width,this.height,{minFilter:kt,magFilter:kt,depthBuffer:!1}),this.accumulationRenderTarget=new Ct(this.width,this.height,{minFilter:kt,magFilter:kt,depthBuffer:!1,format:ln,type:Qt,stencilBuffer:!1,depthBuffer:!1,alpha:!0}),this.bluenoise=new ql(MT,128,128),this.accumulationQuad=new Ns(new mt({uniforms:{frame:{value:0},tDiffuse:{value:null}},transparent:!0,opacity:1,vertexShader:`
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
                `})),this.bluenoise.colorSpace=kn,this.bluenoise.wrapS=Un,this.bluenoise.wrapT=Un,this.bluenoise.minFilter=yt,this.bluenoise.magFilter=yt,this.bluenoise.needsUpdate=!0,this.lastTime=0,this._r=new $,this._c=new ce}configureHalfResTargets(){this.firstFrame(),this.configuration.halfRes?(this.depthDownsampleTarget="160">161?new Ct(this.width/2,this.height/2,{count:2}):new Hl(this.width/2,this.height/2,2),"160"<=161&&(this.depthDownsampleTarget.textures=this.depthDownsampleTarget.texture),this.depthDownsampleTarget.textures[0].format=qu,this.depthDownsampleTarget.textures[0].type=Ui,this.depthDownsampleTarget.textures[0].minFilter=yt,this.depthDownsampleTarget.textures[0].magFilter=yt,this.depthDownsampleTarget.textures[0].depthBuffer=!1,this.depthDownsampleTarget.textures[1].format=ln,this.depthDownsampleTarget.textures[1].type=Qt,this.depthDownsampleTarget.textures[1].minFilter=yt,this.depthDownsampleTarget.textures[1].magFilter=yt,this.depthDownsampleTarget.textures[1].depthBuffer=!1,this.depthDownsampleQuad=new Ns(new mt(yT))):(this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null))}detectTransparency(){if(this.autoDetectTransparency){let e=!1;this.scene.traverse(t=>{t.material&&t.material.transparent&&(e=!0)}),this.configuration.transparencyAware=e}}configureTransparencyTarget(){this.configuration.transparencyAware?(this.transparencyRenderTargetDWFalse=new Ct(this.width,this.height,{minFilter:kt,magFilter:yt,type:Qt,format:ln}),this.transparencyRenderTargetDWTrue=new Ct(this.width,this.height,{minFilter:kt,magFilter:yt,type:Qt,format:ln}),this.transparencyRenderTargetDWTrue.depthTexture=new Ds(this.width,this.height,ri),this.depthCopyPass=new Ns(new mt({uniforms:{depthTexture:{value:this.beautyRenderTarget.depthTexture}},vertexShader:`
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
            `}))):(this.transparencyRenderTargetDWFalse&&(this.transparencyRenderTargetDWFalse.dispose(),this.transparencyRenderTargetDWFalse=null),this.transparencyRenderTargetDWTrue&&(this.transparencyRenderTargetDWTrue.dispose(),this.transparencyRenderTargetDWTrue=null),this.depthCopyPass&&(this.depthCopyPass.dispose(),this.depthCopyPass=null))}renderTransparency(e){let t=this.scene.background,i=e.getClearColor(new ce),s=e.getClearAlpha(),r=new Map,a=e.autoClearDepth;this.scene.traverse(o=>{r.set(o,o.visible)}),this.scene.background=null,e.autoClearDepth=!1,e.setClearColor(new ce(0,0,0),0),this.depthCopyPass.material.uniforms.depthTexture.value=this.beautyRenderTarget.depthTexture,e.setRenderTarget(this.transparencyRenderTargetDWFalse),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&(o.material.transparent&&!o.material.depthWrite&&!o.userData.treatAsOpaque||!!o.userData.cannotReceiveAO))}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),e.setRenderTarget(this.transparencyRenderTargetDWTrue),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&o.material.transparent&&o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),this.scene.traverse(o=>{o.visible=r.get(o)}),e.setClearColor(i,s),this.scene.background=t,e.autoClearDepth=a}configureSampleDependentPasses(){this.firstFrame(),this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer)}configureAOPass(e=!1){this.firstFrame(),this.samples=this.generateHemisphereSamples(this.configuration.aoSamples);let t={...gT};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new mt(t)):this.effectShaderQuad=new Ns(new mt(t))}configureDenoisePass(e=!1){this.firstFrame(),this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);let t={...xT};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.denoiseSamples),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.poissonBlurQuad?(this.poissonBlurQuad.material.dispose(),this.poissonBlurQuad.material=new mt(t)):this.poissonBlurQuad=new Ns(new mt(t))}configureEffectCompositer(e=!1){this.firstFrame();let t={...vT};e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&this.configuration.depthAwareUpsampling&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectCompositerQuad?(this.effectCompositerQuad.material.dispose(),this.effectCompositerQuad.material=new mt(t)):this.effectCompositerQuad=new Ns(new mt(t))}generateHemisphereSamples(e){let t=[];for(let i=0;i<e;i++){let s=2.399963*i,r=Math.sqrt(i+.5)/Math.sqrt(e),a=r*Math.cos(s),o=r*Math.sin(s),l=Math.sqrt(1-(a*a+o*o));t.push(new S(a,o,l))}return t}generateDenoiseSamples(e,t){let i=2*Math.PI*t/e,s=1/e,r=s,a=[],o=s,l=0;for(let c=0;c<e;c++)a.push(new $(Math.cos(l),Math.sin(l)).multiplyScalar(Math.pow(o,.75))),o+=r,l+=i;return a}setSize(e,t){this.firstFrame(),this.width=e,this.height=t;let i=this.configuration.halfRes?.5:1;this.beautyRenderTarget.setSize(e,t),this.writeTargetInternal.setSize(e*i,t*i),this.readTargetInternal.setSize(e*i,t*i),this.accumulationRenderTarget.setSize(e*i,t*i),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(e*i,t*i),this.configuration.transparencyAware&&(this.transparencyRenderTargetDWFalse.setSize(e,t),this.transparencyRenderTargetDWTrue.setSize(e,t))}firstFrame(){this.needsFrame=!0}render(e,t,i,s,r){e.capabilities.logarithmicDepthBuffer!==this.configuration.logarithmicDepthBuffer&&(this.configuration.logarithmicDepthBuffer=e.capabilities.logarithmicDepthBuffer,this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer)),this.detectTransparency(),this.camera.updateMatrixWorld(),this.lastViewMatrix.equals(this.camera.matrixWorldInverse)&&this.lastProjectionMatrix.equals(this.camera.projectionMatrix)&&this.configuration.accumulate&&!this.needsFrame?this.frame++:(e.setRenderTarget(this.accumulationRenderTarget),e.clear(!0,!0,!0),this.frame=0,this.needsFrame=!1),this.lastViewMatrix.copy(this.camera.matrixWorldInverse),this.lastProjectionMatrix.copy(this.camera.projectionMatrix);let a,o,l;this.debugMode&&(a=e.getContext(),o=a.getExtension("EXT_disjoint_timer_query_webgl2"),o===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.configuration.autoRenderBeauty&&(e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera),this.configuration.transparencyAware&&this.renderTransparency(e)),this.debugMode&&(l=a.createQuery(),a.beginQuery(o.TIME_ELAPSED_EXT,l));let c=e.xr.enabled;e.xr.enabled=!1,this._r.set(this.width,this.height);let h=this.configuration.aoRadius;if(this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(h*=.5),this.frame<1024/this.configuration.aoSamples){this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.logarithmicDepthBuffer,this.depthDownsampleQuad.render(e)),this.effectShaderQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new S),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=h,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectShaderQuad.material.uniforms.frame.value=this.frame,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);for(let f=0;f<this.configuration.denoiseIterations;f++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new S),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=h,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=f,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);e.setRenderTarget(this.accumulationRenderTarget);let u=e.autoClear;e.autoClear=!1,this.accumulationQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.accumulationQuad.material.uniforms.frame.value=this.frame,this.accumulationQuad.render(e),e.autoClear=u}this.configuration.transparencyAware&&(this.effectCompositerQuad.material.uniforms.transparencyDWFalse.value=this.transparencyRenderTargetDWFalse.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrue.value=this.transparencyRenderTargetDWTrue.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrueDepth.value=this.transparencyRenderTargetDWTrue.depthTexture,this.effectCompositerQuad.material.uniforms.transparencyAware.value=!0),this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectCompositerQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=h,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.accumulationRenderTarget.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new S),this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.renderToScreen?null:t),this.effectCompositerQuad.render(e),this.debugMode&&(a.endQuery(o.TIME_ELAPSED_EXT),Nm(l,a,this)),e.xr.enabled=c}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Low"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Medium"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12):e==="High"?(this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6):e==="Ultra"&&(this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6)}};var Ea=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Cc={low:{name:"\u7701\u96FB",dpr:1,shadow:1024,post:!1,ao:0,bloom:!1,dof:!1,leaves:0,hedgeLeaves:0,shells:0,rockDetail:1,smoothRocks:!1,env:!1,gravelW:1200,cube:64,waterN:!1,grass:!1},mid:{name:"\u6A19\u6E96",dpr:1.5,shadow:2048,post:!0,ao:1,bloom:!0,dof:!1,leaves:650,hedgeLeaves:110,shells:3,rockDetail:5,smoothRocks:!0,env:!0,gravelW:1600,cube:128,waterN:!0,grass:!0},high:{name:"\u7CBE\u7DFB",dpr:2,shadow:4096,post:!0,ao:2,bloom:!0,dof:!0,leaves:1300,hedgeLeaves:230,shells:5,rockDetail:8,smoothRocks:!0,env:!0,gravelW:2e3,cube:192,waterN:!0,grass:!0}},Os=null;try{Os=(JSON.parse(localStorage.getItem("karesansui-v1")||"{}")||{}).quality}catch{}Cc[Os]||(Os=Ea?"mid":"high");var st=Cc[Os],N=n=>document.getElementById(n),D={ctx:null,on:!0};function Jc(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var le=Jc(20261110),xt=(n,e,t)=>Math.max(e,Math.min(t,n));function bo(n,e,t){let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function di(n,e,t=0){let i=n.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),a=i.getY(s),o=i.getZ(s),l=1+(bo(Math.round(r*50)+t,Math.round(a*50),Math.round(o*50))-.5)*e;i.setXYZ(s,r*l,a*l,o*l)}return n.computeVertexNormals(),n}var ie=(n,e={})=>new ht({color:n,roughness:e.r??.9,metalness:0,flatShading:!!e.flat,side:e.side??zi,...e.extra||{}});function dn(n,e=!0,t=!0){n.traverse(i=>{i.isMesh&&(i.castShadow=e,i.receiveShadow=t)})}var Zn=new Za({canvas:N("c"),antialias:!0});Zn.setPixelRatio(Math.min(devicePixelRatio,st.dpr));Zn.setSize(innerWidth,innerHeight);Zn.shadowMap.enabled=!0;Zn.shadowMap.type=Ou;Zn.toneMapping=lo;Zn.toneMappingExposure=1.05;var ET=new nc;function Mr(n,e,t=!0){let i=ET.load(n);return i.wrapS=i.wrapT=Un,e&&i.repeat.set(e[0],e[1]),t&&(i.colorSpace=Ut),i.anisotropy=8,i}var de=new Qa,p0=new ce("#dde4e2");de.background=p0;de.fog=new Wl(p0,30,75);var Pc=new z(new Pe(150,32,16),new mt({side:cn,depthWrite:!1,fog:!1,uniforms:{top:{value:new ce("#9fb6cc")},bottom:{value:new ce("#dde4e2")}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top;uniform vec3 bottom;varying vec3 vP;void main(){float t=smoothstep(-0.02,0.55,vP.y);gl_FragColor=vec4(mix(bottom,top,t),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));Pc.renderOrder=-10;de.add(Pc);var qi=null,df=null,m0=null,ef=null,Dc="";if(st.env){qi=new uo,qi.scale.setScalar(100),qi.material.uniforms.envGain={value:.05},qi.material.fragmentShader=qi.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform float envGain;`).replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min(retColor*envGain,vec3(3.0)), 1.0 );"),df=new Qa,df.add(qi),m0=new $r(Zn);let n=qi.material.uniforms;n.turbidity.value=5,n.rayleigh.value=1.4,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.8}function g0(n,e){if(!st.env)return;let t=Math.round(n*4)/4+"|"+Ve+"|"+(zn>.3);if(!e&&t===Dc)return;Dc=t;let i=(n-6)/12*Math.PI,s=new S(.9*Math.cos(i),Math.sin(i),.45).normalize();qi.material.uniforms.sunPosition.value.copy(s),qi.material.uniforms.turbidity.value=zn>.3?12:Ve==="summer"?8:5,qi.material.uniforms.envGain.value=.045*Math.max(.12,Math.min(1,s.y*3+.35));let r=ef;ef=m0.fromScene(df,.02),de.environment=ef.texture,r&&r.dispose()}var vt=new Rn(50,innerWidth/innerHeight,.1,200),Ec=new ic("#eef3f6","#6a6656",1.15);de.add(Ec);var ei=new rc("#fff1dc",1.9);ei.position.set(-13,26,-5);ei.castShadow=!0;ei.shadow.mapSize.set(st.shadow,st.shadow);Object.assign(ei.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:70});ei.shadow.bias=-5e-4;ei.shadow.normalBias=.03;de.add(ei);var v0="karesansui-v1",x0="karesansui-v1-gravel";function y0(n){try{return localStorage.getItem(n)}catch{return null}}function M0(n,e){try{return localStorage.setItem(n,e),!0}catch{return!1}}var he={};try{he=JSON.parse(y0(v0)||"{}")||{}}catch{he={}}var E0=Date.now(),Lc=he.last||0,Df=!Lc||E0-Lc>1800*1e3,va=(he.visits||0)+(Df?1:0),pf=Lc?(E0-Lc)/864e5:0,mf=1+Math.min(.3,(va-1)*.012),Fm=0,zm=0,en=null;he.moods=he.moods&&typeof he.moods=="object"?he.moods:{};he.notes=Array.isArray(he.notes)?he.notes:[];he.days=Array.isArray(he.days)?he.days:[];{let n=new Date,e=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();he.days.includes(e)||he.days.push(e),he.days.length>800&&(he.days=he.days.slice(-800))}var fr={value:0},yo={mist:Mc("mist")<.4,dragon:Mc("dragonfly")<.6,frog:Mc("frog")<.55,tanuki:Mc("tanuki")<.18},ps=Object.assign({music:75,amb:75,on:!0},he.vol||{});D.on=ps.on!==!1;var be={x0:-12,x1:12,z0:-3.5,z1:10};be.w=be.x1-be.x0;be.d=be.z1-be.z0;var Hs=st.gravelW,_o=Math.round(Hs*be.d/be.w),yn=Hs/be.w,Mo=.18,dr={x:-10.6,z:8.4},nn={x:10.2,z:8.4},Jt={x:-10.35,z:-2.3},ut={x:7,z:7.15,rx:2.45,rz:1.4},Ro=n=>1+.08*Math.sin(3*n+1)+.05*Math.sin(5*n+.3);function Kc(n,e){let t=(n-ut.x)/ut.rx,i=(e-ut.z)/ut.rz;return Math.hypot(t,i)/Ro(Math.atan2(i,t))}var gr=(n,e)=>(Kc(n,e)-1)*(ut.rx+ut.rz)/2,ha=[[5.05,6.85],[6.05,7.45],[7.15,7],[8.25,7.5],[9.15,7.05]],Ao=[{k:"d0",x:-7.2,z:-.6,moss:1.9,rot:0,scale:1,seed:7,rocks:[[-.4,-.4,2.5,.62],[.5,.1,1.7,.55],[-1.1,.4,1.1,.5],[.2,1.05,.75,.5],[1.1,-.55,.6,.42]]},{k:"d1",x:-2.4,z:.8,moss:1.25,rot:0,scale:1,seed:38,rocks:[[-.2,-.2,1.5,.5],[.5,.35,.85,.45],[-.55,.5,.5,.4]]},{k:"d2",x:-5.2,z:5.6,moss:.95,rot:0,scale:1,seed:69,rocks:[[0,0,1.15,.85]]},{k:"d3",x:2.4,z:3.2,moss:1.05,rot:0,scale:1,seed:100,rocks:[[-.2,-.1,.75,.6],[.45,.45,.5,.45]]},{k:"d4",x:6.8,z:-.8,moss:.7,rot:0,scale:1,seed:131,rocks:[[0,0,.55,.5]]}],Xn=Array.isArray(he.layout)&&he.layout.length<=24?he.layout:JSON.parse(JSON.stringify(Ao)),T0=()=>JSON.stringify(Xn.map(n=>[n.x.toFixed(2),n.z.toFixed(2),(n.rot||0).toFixed(2),(n.scale||1).toFixed(2),n.seed,n.moss]));function TT(){return[...Xn.map(n=>({x:n.x,z:n.z,R:n.moss*(n.scale||1)+.12})),{x:dr.x,z:dr.z,R:.75},{x:nn.x,z:nn.z,R:.55},{x:Jt.x-.35,z:Jt.z-.1,R:.95}]}var Ta=document.createElement("canvas");Ta.width=Hs;Ta.height=_o;var ks=Ta.getContext("2d"),jc=document.createElement("canvas");jc.width=Hs;jc.height=_o;function S0(){let n=ks.createImageData(Hs,_o),e=n.data,t=Mo*6,i=TT(),s=(ut.rx+ut.rz)/2;for(let r=0;r<_o;r++){let a=be.z0+(r+.5)/yn;for(let o=0;o<Hs;o++){let l=be.x0+(o+.5)/yn,c=1e9;for(let p=0;p<i.length;p++){let y=i[p],v=l-y.x,M=a-y.z,R=Math.sqrt(v*v+M*M)-y.R;R<c&&(c=R)}let h=(l-ut.x)/ut.rx,u=(a-ut.z)/ut.rz,f=(Math.sqrt(h*h+u*u)/Ro(Math.atan2(u,h))-1)*s-.38;f<c&&(c=f);let d;if(c<0)d=.94;else{let y=(c<t?c/Mo:(a+.28*Math.sin(l*.33+.6)+.1*Math.sin(l*1.1))/Mo)*Math.PI*2;d=.9+.075*Math.cos(y)+.045*Math.sin(y)}let g=(Math.random()-.5)*.09;Math.random()<.012&&(g-=.13);let x=d+g,m=(r*Hs+o)*4;e[m]=226*x,e[m+1]=223*x,e[m+2]=215*x,e[m+3]=255}}ks.putImageData(n,0,0),jc.getContext("2d").drawImage(Ta,0,0)}S0();var ST=!1;try{let n=JSON.parse(y0(x0)||"null");if(n&&n.sig===T0()&&n.img){let e=new Image;e.onload=()=>{ks.drawImage(e,0,0,Hs,_o),Gs=!0,ST=!0},e.src=n.img}}catch{}var Ic=document.createElement("canvas");Ic.width=Ic.height=64;{let n=Ic.getContext("2d"),e=n.createImageData(64,64);for(let t=0;t<4096;t++){let i=.955+(Math.random()-.5)*.09;Math.random()<.012&&(i-=.13),e.data[t*4]=226*i,e.data[t*4+1]=223*i,e.data[t*4+2]=215*i,e.data[t*4+3]=255}n.putImageData(e,0,0)}var wT=ks.createPattern(Ic,"repeat");function w0(n,e,t,i,s,r,a=0){let o=document.createElement("canvas");o.width=n,o.height=e;let l=o.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,n,e),l.fillStyle="#000",l.beginPath();for(let h=0;h<=96;h++){let u=h/96*Math.PI*2,f=Ro(u)+a,d=ut.x+Math.cos(u)*ut.rx*f,g=ut.z+Math.sin(u)*ut.rz*f,x=(d-t)/s*n,m=(g-i)/r*e;h?l.lineTo(x,m):l.moveTo(x,m)}return l.fill(),new Vn(o)}var Co=new Vn(Ta);Co.colorSpace=Ut;Co.anisotropy=Zn.capabilities.getMaxAnisotropy();var xa=new z(new mn(be.w,be.d),new ht({map:Co,bumpMap:Co,bumpScale:2.5,roughness:.96,alphaMap:w0(800,450,be.x0,be.z0,be.w,be.d),alphaTest:.5}));xa.rotation.x=-Math.PI/2;xa.position.set((be.x0+be.x1)/2,0,(be.z0+be.z1)/2);xa.receiveShadow=!0;de.add(xa);var Gs=!1,Bm=0,us=new z(new mn(90,90),ie("#737a58",{r:1,extra:{alphaMap:w0(1024,1024,-45,-45,90,90,.02),alphaTest:.5}}));us.rotation.x=-Math.PI/2;us.position.y=-.02;us.receiveShadow=!0;de.add(us);var Hm=st.grass?Mr("assets/grass_d.jpg",[22,22]):null,bT=st.grass?Mr("assets/grass_n.jpg",[22,22],!1):null,_T=ie("#9c978d",{r:1});[[be.x0-.08,(be.z0+be.z1)/2,.16,be.d+.32],[be.x1+.08,(be.z0+be.z1)/2,.16,be.d+.32],[0,be.z1+.08,be.w,.16],[0,be.z0-.06,be.w,.12]].forEach(([n,e,t,i])=>{let s=new z(new Tt(t,.07,i),_T);s.position.set(n,.035,e),s.receiveShadow=!0,de.add(s)});function Hn(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Vn(s);return r.colorSpace=Ut,r.wrapS=r.wrapT=Un,i&&r.repeat.set(i[0],i[1]),r.anisotropy=8,r}var RT=Hn(256,256,(n,e,t)=>{for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=70+Math.random()*14;n.fillStyle=`rgb(${r},${r+4},${r+8})`,n.fillRect(s*128,i*128,128,128)}for(let i=0;i<1200;i++)n.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,n.fillRect(Math.random()*e,Math.random()*t,2,2);n.strokeStyle="#33373b",n.lineWidth=4;for(let i=0;i<=2;i++)n.beginPath(),n.moveTo(i*128,0),n.lineTo(i*128,t),n.stroke(),n.beginPath(),n.moveTo(0,i*128),n.lineTo(e,i*128),n.stroke()},[24/.8,4.3/.8]),Lf=new z(new Tt(24,.04,4.3),new ht({map:RT,roughness:.75}));Lf.position.set(0,0,-5.65);Lf.receiveShadow=!0;de.add(Lf);var Po=ie("#5b7a3a",{r:1}),If=ie("#4a6a32",{r:1}),vs=[],Uf=[],ma=new Se;de.add(ma);var b0=new pn({visible:!1});function _0(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Math.floor(t),a=n-i,o=e-s,l=t-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),f=Nn.lerp,d=(g,x,m)=>bo(i+g,s+x,r+m);return f(f(f(d(0,0,0),d(1,0,0),c),f(d(0,1,0),d(1,1,0),c),h),f(f(d(0,0,1),d(1,0,1),c),f(d(0,1,1),d(1,1,1),c),h),u)}function ua(n,e,t,i=4){let s=.5,r=1,a=0;for(let o=0;o<i;o++)a+=s*_0(n*r,e*r,t*r),r*=2.03,s*=.5;return a}var Tc={};function AT(n){if(Tc[n])return Tc[n];let e=new li(1,st.rockDetail);e.deleteAttribute("normal"),e.deleteAttribute("uv");let t=CT(e),i=t.attributes.position,s=new Float32Array(i.count*3),r=n*.37,a=[],o=Jc(n*13+5),l=[];for(let h=0;h<5;h++){let u=o()*6.283,f=(o()-.35)*1.4,d=Math.cos(u)*Math.cos(f),g=Math.sin(f),x=Math.sin(u)*Math.cos(f);l.push([d,g,x,.55+o()*.3])}for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getY(h),d=i.getZ(h),g=ua(u*1.2+r,f*1.2,d*1.2+r,4),x=ua(u*4+r,f*4,d*4,3),m=1+(g-.5)*.55+(x-.5)*.12,p=1-.42*((f+1)/2);u*=m*p,d*=m*p*.78,f*=.95+.1*_0(u*2+r,0,d*2),f<-.7&&(f=-.7+(f+.7)*.3);for(let[y,v,M,R]of l){let _=u*y+f*v+d*M-R;_>0&&(u-=y*_*.92,f-=v*_*.92,d-=M*_*.92)}i.setXYZ(h,u,f,d),a.push(g)}t.computeVertexNormals();let c=t.attributes.normal;for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getY(h),d=i.getZ(h),g=.85+.25*ua(u*6+r,f*6,d*6,3)+(a[h]-.5)*.35,x=g*.62,m=g*.63,p=g*.66,y=ua(u*3.1+9,f*3.1,d*3.1+r,3);if(c.getY(h)>.25&&y>.6){let v=Math.min(1,(y-.6)*6);x=Nn.lerp(x,.62,v*.6),m=Nn.lerp(m,.66,v*.6),p=Nn.lerp(p,.48,v*.6)}c.getY(h)>.55&&ua(u*5,f*5+r,d*5,2)>.58&&(x*=.75,m*=.95,p*=.62),s[h*3]=x,s[h*3+1]=m,s[h*3+2]=p}return t.setAttribute("color",new Bt(s,3)),Tc[n]=t,t}function CT(n){let e=n.attributes.position,t=new Map,i=[],s=[];for(let a=0;a<e.count;a++){let o=Math.round(e.getX(a)*1e4)+","+Math.round(e.getY(a)*1e4)+","+Math.round(e.getZ(a)*1e4),l=t.get(o);l===void 0&&(l=i.length/3,t.set(o,l),i.push(e.getX(a),e.getY(a),e.getZ(a))),s.push(l)}let r=new pt;return r.setAttribute("position",new Ue(i,3)),r.setIndex(s),r}var PT=(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createImageData(256,256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=ua(a/9,r/9,3.3,3)*.55+Math.random()*.45,l=(r*256+a)*4;i.data[l]=i.data[l+1]=i.data[l+2]=o*255,i.data[l+3]=255}t.putImageData(i,0,0);let s=new Vn(e);return s.wrapS=s.wrapT=Un,s.repeat.set(3,3),s})(),$c=[];for(let n=1;n<=st.shells;n++)$c.push(new ht({color:"#5b7a3a",alphaMap:PT,alphaTest:.25+.6*n/(st.shells+1),roughness:1}));var DT=new ht({vertexColors:!0,roughness:.86,metalness:0});function LT(n){let e=new li(1,1),t=e.attributes.position;for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),a=t.getZ(i),o=1+(bo(Math.round(s*40)+n,Math.round(r*40),Math.round(a*40))-.5)*.55,l=1-.45*((r+1)/2);t.setXYZ(i,s*o*l,r*(.9+.2*bo(n,Math.round(s*40),Math.round(a*40))),a*o*l*.75)}return e.computeVertexNormals(),e}function IT(n,e){let t=new Se,i=Jc(n.seed||e*31+7);t.position.set(n.x,0,n.z),t.rotation.y=n.rot||0,t.scale.setScalar(n.scale||1);let s=new z(di(new Pe(1,22,12),.35,n.seed||e),(n.seed||e)%2?If:Po);s.scale.set(n.moss*mf,.22,n.moss*.86*mf),s.rotation.y=i()*3,s.position.y=-.03,s.receiveShadow=!0,t.add(s),$c.forEach((a,o)=>{let l=new z(s.geometry,a);l.scale.set(s.scale.x*(1+.016*(o+1)),s.scale.y*(1+.1*(o+1)),s.scale.z*(1+.016*(o+1))),l.rotation.y=s.rotation.y,l.position.y=-.03+.004*(o+1),l.receiveShadow=!0,t.add(l)}),n.rocks.forEach(([a,o,l,c],h)=>{let u=.22+i()*.08,f=st.smoothRocks?new z(AT(((n.seed||e)*7+h*13)%997),(()=>{let d=DT.clone();return d.color.setRGB(.34+u*.8,.34+u*.8,.35+u*.8),d})()):new z(LT((n.seed||e)*7+h*13),new ht({color:new ce(u,u*1.02,u*1.05),roughness:.95,flatShading:!0}));f.scale.set(c,l/2,c),f.position.set(a,l/2-.15,o),f.rotation.set((i()-.5)*.18,i()*6.28,(i()-.5)*.18),f.castShadow=f.receiveShadow=!0,t.add(f)});let r=new z(new He(n.moss*1.05+.2,n.moss*1.05+.2,1.2,16),b0);return r.position.y=.5,t.add(r),t.userData.c=n,t.userData.hit=r,t}function vr(){for(;ma.children.length;)ma.children.pop().traverse(e=>{e.isMesh&&(!Object.values(Tc).includes(e.geometry)&&!$c.includes(e.material)&&e.geometry.dispose(),e.material!==b0&&e.material!==Po&&e.material!==If&&e.material.dispose())});Xn.forEach((n,e)=>ma.add(IT(n,e))),Uf=Xn.map(n=>({x:n.x,z:n.z,r:n.moss*(n.scale||1)*.85*Math.min(mf,1.12)}))}vr();var ub=Hn(512,184,(n,e,t)=>{let s=t/8;for(let r=0;r<8;r++){let a=le()*18;n.fillStyle=`rgb(${128+a},${94+a*.8},${62+a*.6})`,n.fillRect(0,r*s,e,s);for(let o=0;o<26;o++){n.strokeStyle=`rgba(70,45,25,${.05+le()*.08})`,n.lineWidth=1;let l=r*s+le()*s;n.beginPath(),n.moveTo(0,l),n.bezierCurveTo(e*.3,l+le()*3-1.5,e*.7,l+le()*3-1.5,e,l),n.stroke()}n.fillStyle="rgba(50,32,18,.55)",n.fillRect(0,r*s,e,1.5)}},[5.5,1.8]),UT=Mr("assets/wood_d.jpg",[4,.9]),NT=Mr("assets/wood_b.jpg",[4,.9],!1),FT=Mr("assets/wood_r.jpg",[4,.9],!1),R0=new ht({map:UT,bumpMap:NT,bumpScale:1.2,roughnessMap:FT,roughness:.85,color:"#a07a55"}),eh=ie("#4e3626",{r:.8}),A0=Mr("assets/wood_d.jpg",[.25,2.2]);A0.rotation=Math.PI/2;var C0=new ht({map:A0,color:"#6b4c36",roughness:.75}),zT=ie("#ebe6da",{r:1}),Vs=new Se;de.add(Vs);var P0,D0,Tn=-10.05,Ws=12.05,Zi=(Tn+Ws)/2,Sn=Ws-Tn;function mi(n,e,t,i,s,r,a,o=Vs){let l=new z(new Tt(n,e,t),i);return l.position.set(s,r,a),o.add(l),l}mi(Sn,.12,2.6,R0,Zi,.69,-6.3);mi(Sn,.1,.7,R0,Zi,.35,-4.65);mi(Sn-.2,.6,2.3,ie("#2a2521"),Zi,.3,-6.4);for(let n=Tn+.5;n<=Ws;n+=2.2)mi(.12,.3,.12,eh,n,.15,-4.65);var Nf=[];for(let n=0;n<=8;n++)Nf.push(Tn+n*(Sn/8));var L0=[];Nf.forEach(n=>{let e=mi(.2,3.8,.2,C0.clone(),n,1.9,-5.2);e.material.transparent=!0,L0.push(e),vs.push({x:n,z:-5.2,r:.14})});mi(Sn+.3,.26,.24,eh,Zi,3.72,-5.2);mi(Sn,3.8,5.9,zT,Zi,1.9,-10.57);var Om=Hn(256,448,(n,e,t)=>{n.fillStyle="#f4f0e5",n.fillRect(0,0,e,t);for(let s=0;s<1800;s++)n.fillStyle=`rgba(170,160,140,${Math.random()*.07})`,n.fillRect(Math.random()*e,Math.random()*t,2,2);let i="#5e4330";n.fillStyle="#7b5b3f",n.fillRect(12,360,232,78),n.fillStyle=i,n.fillRect(0,0,e,10),n.fillRect(0,0,12,t),n.fillRect(e-12,0,12,t),n.fillRect(0,t-10,e,10),n.fillRect(0,354,e,8);for(let s=1;s<4;s++)n.fillRect(12+s*58-2,10,4,344);for(let s=1;s<6;s++)n.fillRect(12,10+s*57.3-2,232,4)},[15,1]),Ff=new z(new mn(Sn,2.55),new ht({map:Om,roughness:.95,emissive:new ce("#ffc274"),emissiveMap:Om,emissiveIntensity:0}));Ff.position.set(Zi,2.025,-7.6);Vs.add(Ff);mi(Sn+.1,.14,.12,eh,Zi,3.33,-7.56);mi(Sn+.1,.16,.12,eh,Zi,.77,-7.56);Nf.forEach(n=>mi(.16,3.1,.16,C0,n,2.3,-7.56));var zf=new z(new mn(Sn+2.7,3.4),ie("#6e5038",{r:.85}));zf.rotation.x=Math.PI/2;zf.position.set(Zi,3.87,-5.95);Vs.add(zf);{let n=Tn-1.35,e=Ws+1.35,t=-4.3,i=-14.7,s=3.95,r=6.7,a=-9.5,o=-5.4,l=7.4,c=[],h=(_,C,I)=>c.push(..._,...C,...I),u=[n,s,t],f=[e,s,t],d=[n,s,i],g=[e,s,i],x=[o,r,a],m=[l,r,a];h(u,f,m),h(u,m,x),h(g,d,x),h(g,x,m),h(d,u,x),h(f,g,m);let p=new pt;p.setAttribute("position",new Ue(c,3)),p.computeVertexNormals();{let _=p.attributes.position,C=[];for(let I=0;I<_.count;I+=3){let E=new S().fromBufferAttribute(_,I),T=new S().fromBufferAttribute(_,I+1),P=new S().fromBufferAttribute(_,I+2),F=T.clone().sub(E).cross(P.clone().sub(E));for(let Y of[E,T,P]){let L=Math.abs(F.x)>Math.abs(F.z)?Y.z:Y.x;C.push(L/.3,Y.y/.24)}}p.setAttribute("uv",new Ue(C,2))}let y=(_,C)=>{let I=Math.pow(Math.abs(Math.cos(Math.PI*_)),.6),E=C<.12?(.12-C)*4:0;return I*.8+E},v=(()=>{let C=document.createElement("canvas");C.width=C.height=128;let I=C.getContext("2d"),E=I.createImageData(128,128);for(let P=0;P<128;P++)for(let F=0;F<128;F++){let Y=F/128,L=P/128,H=1/128,O=(y(Y+H,L)-y(Y-H,L))*14,K=(y(Y,L+H)-y(Y,L-H))*14,J=Math.hypot(O,K,1),Q=(P*128+F)*4;E.data[Q]=(-O/J*.5+.5)*255,E.data[Q+1]=(K/J*.5+.5)*255,E.data[Q+2]=(1/J*.5+.5)*255,E.data[Q+3]=255}I.putImageData(E,0,0);let T=new Vn(C);return T.wrapS=T.wrapT=Un,T})(),M=Hn(128,128,(_,C,I)=>{for(let E=0;E<I;E++)for(let T=0;T<C;T++){let P=.82+.18*Math.pow(Math.abs(Math.cos(Math.PI*T/C)),.6)-(E<14?.12:0)+(Math.random()-.5)*.05;_.fillStyle=`rgb(${74*P},${76*P},${82*P})`,_.fillRect(T,E,1,1)}}),R=new z(p,new ht({map:M,normalMap:v,normalScale:new $(.9,.9),roughness:.55,metalness:.05,side:Mt}));Vs.add(R),P0=p,D0=[l-o+.6,(o+l)/2,r+.08,a],mi(e-n+.1,.22,.2,ie("#2d2824"),Zi,3.88,t),mi(l-o+.6,.3,.45,ie("#2d2824"),(o+l)/2,r+.08,a)}dn(Vs);var gf=[],vf,xf=[],Sc=di(new li(1,2),.3,9),fs=[],Do=ie("#f4f7fa",{r:.95}),I0={value:0};function BT(n){let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(128/2,128/2),i.fillStyle="#fff",i.strokeStyle="rgba(110,110,110,.5)",i.lineWidth=2,i.lineCap="round",n==="maple"){i.beginPath();let r=[];for(let a=0;a<10;a++){let o=-Math.PI/2+a/10*Math.PI*2,l=[1,0,.92,0,.78,0,.78,0,.92,0][a],c=a%2?20:56*l;r.push([Math.cos(o)*c,Math.sin(o)*c+6])}i.moveTo(r[0][0],r[0][1]);for(let a=1;a<=10;a++){let o=r[a%10],l=r[a-1];i.quadraticCurveTo(l[0]*.9+o[0]*.1,l[1]*.9+o[1]*.1,o[0],o[1])}i.fill();for(let a=0;a<10;a+=2)i.beginPath(),i.moveTo(0,8),i.lineTo(r[a][0]*.8,r[a][1]*.8),i.stroke();i.beginPath(),i.moveTo(0,8),i.lineTo(0,60),i.stroke()}else if(n==="ginkgo"){i.beginPath(),i.moveTo(0,52),i.arc(0,52,96,-Math.PI/2-.95,-Math.PI/2+.95),i.closePath(),i.fill(),i.globalCompositeOperation="destination-out",i.beginPath(),i.moveTo(0,-44),i.lineTo(-7,-26),i.lineTo(7,-26),i.fill(),i.globalCompositeOperation="source-over";for(let r=-4;r<=4;r++){let a=-Math.PI/2+r*.2;i.beginPath(),i.moveTo(0,52),i.lineTo(Math.cos(a)*90,52+Math.sin(a)*90),i.stroke()}}else if(n==="sakura")for(let[r,a,o]of[[-20,-14,22],[22,-6,20],[-2,24,21]]){for(let l=0;l<5;l++){let c=l/5*Math.PI*2;i.beginPath(),i.ellipse(r+Math.cos(c)*o*.55,a+Math.sin(c)*o*.55,o*.52,o*.4,c,0,7),i.fill()}i.fillStyle="rgba(150,150,150,.9)",i.beginPath(),i.arc(r,a,o*.22,0,7),i.fill(),i.fillStyle="#fff"}else if(n==="needle"){i.strokeStyle="#fff",i.lineWidth=3;for(let r=0;r<34;r++){let a=-Math.PI/2+(Math.random()-.5)*1.5,o=40+Math.random()*24;i.beginPath(),i.moveTo(0,54),i.lineTo(Math.cos(a)*o,54+Math.sin(a)*o*1.6),i.stroke()}}else{i.beginPath(),i.moveTo(0,-58),i.bezierCurveTo(40,-30,36,30,0,58),i.bezierCurveTo(-36,30,-40,-30,0,-58),i.fill(),i.beginPath(),i.moveTo(0,-50),i.lineTo(0,56),i.stroke();for(let r=-3;r<=3;r++)i.beginPath(),i.moveTo(0,r*14),i.lineTo(r%2?22:-22,r*14-12),i.stroke()}let s=new Vn(t);return s.colorSpace=Ut,s.anisotropy=4,s}var km={},Gm={},U0=new mn(1,1);function N0(n){return km[n]||(km[n]=BT(n))}function F0(n){return Gm[n]||(Gm[n]=new ar({depthPacking:co,map:N0(n),alphaTest:.45,side:Mt}))}function Uc(n,e="#ffffff"){let t=new ht({map:N0(n),alphaTest:.45,side:Mt,roughness:.78,color:e});return t.onBeforeCompile=i=>{i.uniforms.uWind=I0,i.uniforms.uGust=fr,i.vertexShader=`uniform float uWind;uniform float uGust;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
vec3 ip=vec3(instanceMatrix[3]);float w=(sin(uWind*1.6+ip.x*1.3+ip.z*0.9)*0.6+sin(uWind*2.7+ip.y*2.3)*0.4)*(1.0+uGust*2.6);transformed+=vec3(w*0.07,w*0.04,w*0.06)*(position.y+0.5);
#endif`)},t.customProgramCacheKey=()=>"leafwind",t}var Nc=new Ie,Fc=new jn,zc=new Cs,Bc=new S,Hc=new S,Vm=new ce;function Oc(n,e,t,i,s,r,a,o=Math.random){if(!s||!e.length)return null;let l=new Ls(U0,a||Uc(t),s);l.customDepthMaterial=F0(t);let c=e.reduce((h,u)=>h+u.sx*u.sz,0);for(let h=0;h<s;h++){let u=o()*c,f=e[0];for(let v of e)if(u-=v.sx*v.sz,u<=0){f=v;break}let d=o()*2-1,g=o()*2-1,x=o()*2-1,m=Math.hypot(d,g,x)||1;d/=m,g=g/m*.85+.15,x/=m;let p=.8+o()*.3;Bc.set(f.x+d*f.sx*p,f.y+g*f.sy*p,f.z+x*f.sz*p),zc.set(o()*6.28,o()*6.28,o()*6.28),Fc.setFromEuler(zc);let y=r*(.75+o()*.5);Hc.set(y,y,y),Nc.compose(Bc,Fc,Hc),l.setMatrixAt(h,Nc),Vm.set(i[Math.floor(o()*i.length)]).multiplyScalar(.82+o()*.32),l.setColorAt(h,Vm)}return l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}var bi=null,z0=[];{let r=function(a,o,l,c,h){let u=new Se,f=new z(new He(.16,.24,l,8),s);f.position.y=l/2,u.add(f);let d=new ce(h),g=st.leaves?d.clone().multiplyScalar(.62):d,x=ie("#"+g.getHexString(),{r:1});xf.push({mat:x,base:g.clone()});let m=[];for(let p=0;p<4;p++){let y=c*(.65+le()*.45),v=new z(Sc,x);v.scale.set(y,y*.85,y),v.position.set((le()-.5)*c,l+(le()-.2)*c*.7,(le()-.5)*c),m.push({x:v.position.x,y:v.position.y,z:v.position.z,sx:y,sy:y*.85,sz:y}),st.leaves&&v.scale.multiplyScalar(.84),u.add(v)}if(st.leaves){let p=Uc("broad","#"+d.getHexString());xf.push({mat:p,base:d.clone()}),Oc(u,m,"broad",["#ffffff","#e9f0dc","#d6e3c4","#f4f0d8"],Math.round(st.leaves*1.2),.34,p)}u.position.set(a,0,o),dn(u),de.add(u)},n=di(new li(1,2),.25,3),e=[];for(let a=-14;a<=12;a+=1.45)e.push([-13.9,a]);for(let a=-12.6;a<=13.5;a+=1.45)e.push([a,12]);for(let a=-3.6;a<=11;a+=1.45)e.push([14,a]);let t=new Ls(n,ie("#ffffff",{r:1}),e.length),i=new Ie;if(e.forEach(([a,o],l)=>{let c=1.05+le()*.3;i.compose(new S(a+(le()-.5)*.3,.95+le()*.2,o+(le()-.5)*.3),new jn().setFromEuler(new Cs(0,le()*6,0)),new S(c,1.15+le()*.3,c)),t.setMatrixAt(l,i);let h=new ce().setHSL(.27+le()*.04,.38+le()*.1,.25+le()*.06);gf.push(h),t.setColorAt(l,h)}),t.castShadow=t.receiveShadow=!0,de.add(t),vf=t,st.hedgeLeaves){let a=new Ie,o=new S,l=new jn,c=new S,h=[];for(let d=0;d<e.length;d++)t.getMatrixAt(d,a),a.decompose(o,l,c),h.push({x:o.x,y:o.y,z:o.z,sx:c.x,sy:c.y,sz:c.z,i:d});let u=e.length*st.hedgeLeaves;bi=new Ls(U0,Uc("broad"),u),bi.customDepthMaterial=F0("broad");let f=0;for(let d of h)for(let g=0;g<st.hedgeLeaves;g++){let x=Math.random()*2-1,m=Math.random()*2-1,p=Math.random()*2-1,y=Math.hypot(x,m,p)||1;x/=y,m/=y,p/=y,m<-.3&&(m=-m*.5);let v=.93+Math.random()*.14;Bc.set(d.x+x*d.sx*v,d.y+m*d.sy*v,d.z+p*d.sz*v),zc.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),Fc.setFromEuler(zc);let M=.2+Math.random()*.12;Hc.set(M,M,M),Nc.compose(Bc,Fc,Hc),bi.setMatrixAt(f,Nc);let R=gf[d.i].clone().multiplyScalar(1.15+Math.random()*.45);z0.push(R),bi.setColorAt(f,R),f++}bi.castShadow=bi.receiveShadow=!0,de.add(bi)}let s=ie("#5a4636");[[-16,-9.5,4.5,2.2],[-16.5,-1,5,2.4],[-8.5,16.5,4.4,2.1],[7.5,16.8,4.6,2.2],[17,6,4.3,2.2],[17,-1.5,4.8,2.3],[-6,-17,5.5,2.6],[3,-17.5,5.8,2.8],[11,-16.5,5,2.4]].forEach(([a,o,l,c])=>{let h=new ce().setHSL(.26+le()*.06,.35+le()*.15,.22+le()*.08);r(a,o,l,c,"#"+h.getHexString())})}var tf={sakura:["#f3a6bd","#f7c2d2","#ec8fac"],sakuraL:["#f8d3de","#f5bfd0","#fbe4ec"],aomomiji:["#8cc24d","#79b03f","#a3d062"],momiji:["#c4412a","#d65a2c","#b8332a"],momijiO:["#e0782e","#d9602c","#e89a3a"],ginkgo:["#e8b92f","#f0c93f","#ddaa25"],umeP:["#e9879f","#f2a5b8","#d96f8c"],umeW:["#fbf7f2","#f3ece6","#ffffff"]},kc={},go=n=>kc[n]||(kc[n]=ie(n,{r:1})),Wm=n=>kc["e"+n]||(kc["e"+n]=ie(n,{r:1,extra:{emissive:new ce(n),emissiveIntensity:.22}}));function Yi(n,e,t,i,s){let r=n.distanceTo(e),a=new z(new He(i,t,r,6),s);return a.position.copy(n).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),e.clone().sub(n).normalize()),a}function HT(n,e){let t=Jc(e),i=new Se,s=n.startsWith("ume"),r=n.startsWith("sakura"),a=n==="ginkgo",o=n==="bare",l=go(s||r?"#4a3a35":"#5a4636"),c=a?3:s?1.3:2;i.add(Yi(new S(0,0,0),new S((t()-.5)*.3,c,(t()-.5)*.3),.27,.16,l));let h=[],u=a?4:6;for(let f=0;f<u;f++){let d=f/u*Math.PI*2+t()*.6,g=(a?1:1.5)+t()*.6,x=(a?1.2:s?.95:.7)+t()*.4,m=new S(0,c*(.78+t()*.2),0),p=new S(Math.cos(d),x,Math.sin(d)).normalize(),y=m.clone().addScaledVector(p,g);if(i.add(Yi(m,y,.08,.04,l)),h.push({st:m,en:y}),o||s)for(let v=0;v<2;v++){let M=p.clone().add(new S((t()-.5)*1,.35,(t()-.5)*1)).normalize(),R=y.clone().addScaledVector(M,.5+t()*.45);i.add(Yi(y,R,.035,.014,l)),h.push({st:y,en:R})}}if(s){let f=tf[n],d=h.length*9,g=new Ls(new li(.06,0),ie("#ffffff",{r:.8}),d),x=new Ie,m=new ce,p=0;for(let y of h)for(let v=0;v<9;v++){let M=.25+t()*.85,R=y.st.clone().lerp(y.en,Math.min(M,1)).add(new S((t()-.5)*.12,(t()-.5)*.12,(t()-.5)*.12)),_=.8+t()*.6;x.makeScale(_,_,_).setPosition(R),g.setMatrixAt(p,x),m.set(f[p%3]),g.setColorAt(p,m),p++}i.add(g)}else if(a){let f=tf.ginkgo,d=[];for(let g=0;g<5;g++){let x=1.3-g*.2;for(let m=0;m<2;m++){let p=new z(Sc,go(f[(g+m)%3]));p.scale.set(x,x*.85,x),p.position.set((t()-.5)*.6,c*.75+g*.7,(t()-.5)*.6),d.push({x:p.position.x,y:p.position.y,z:p.position.z,sx:x,sy:x*.85,sz:x}),st.leaves&&p.scale.multiplyScalar(.82),i.add(p)}}st.leaves&&Oc(i,d,"ginkgo",f,st.leaves,.3,null,t)}else if(!o){let f=tf[n],d=n==="aomomiji"||n.startsWith("momiji")?.72:.8,g=r?1.05:.95,x=[];for(let p of h)for(let y=0;y<2;y++){let v=g*(.7+t()*.4),M=new z(Sc,(r?Wm:go)(f[Math.floor(t()*3)]));M.scale.set(v,v*d,v),M.position.copy(p.en).add(new S((t()-.5)*.7,(t()-.3)*.5,(t()-.5)*.7)),x.push({x:M.position.x,y:M.position.y,z:M.position.z,sx:v,sy:v*d,sz:v}),st.leaves&&M.scale.multiplyScalar(.8),i.add(M)}let m=new z(Sc,(r?Wm:go)(f[0]));if(m.scale.set(1.1,.9*d/.8,1.1),m.position.set(0,c+1.3,0),x.push({x:0,y:c+1.3,z:0,sx:1.1,sy:.9*d/.8,sz:1.1}),st.leaves&&m.scale.multiplyScalar(.8),i.add(m),st.leaves){let p=r?"sakura":"maple";Oc(i,x,p,f,Math.round(st.leaves*(r?1.1:1.25)),r?.32:.27,p==="sakura"?(()=>{let y=Uc("sakura");return y.emissive=new ce("#f7c9d4"),y.emissiveIntensity=.18,y})():null,t)}}return dn(i),i}var B0=[{x:15.4,z:3,s:1.35,k:{spring:"sakura",summer:"aomomiji",autumn:"momiji",winter:"umeP"}},{x:-15.6,z:-5.5,s:1.3,k:{spring:"sakura",summer:"aomomiji",autumn:"ginkgo",winter:"bare"}},{x:-15.3,z:5.5,s:1.3,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momijiO",winter:"umeW"}},{x:15.6,z:10.4,s:1.2,k:{spring:"aomomiji",summer:"aomomiji",autumn:"ginkgo",winter:"bare"}},{x:-12.5,z:14.6,s:1.5,k:{spring:"sakuraL",summer:"aomomiji",autumn:"ginkgo",winter:"umeW"}},{x:-4,z:14.4,s:1.6,k:{spring:"sakura",summer:"aomomiji",autumn:"momiji",winter:"bare"}},{x:4,z:14.6,s:1.55,k:{spring:"sakura",summer:"aomomiji",autumn:"momijiO",winter:"umeP"}},{x:11.5,z:14.8,s:1.5,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momiji",winter:"bare"}},{x:-12,z:-15.8,s:1.4,k:{spring:"sakuraL",summer:"aomomiji",autumn:"momijiO",winter:"umeP"}}];B0.forEach((n,e)=>{n.vars={};let t=le()*6;for(let i of new Set(Object.values(n.k))){let s=HT(i,1e3+e*17+i.length);s.position.set(n.x,0,n.z),s.scale.setScalar(n.s),s.rotation.y=t,s.visible=!1,de.add(s),n.vars[i]=s}});var Bf=new Se;de.add(Bf);{let n=ie("#3d6a33",{r:1}),e=di(new li(1,1),.3,4),t=di(new li(1,1),.22,8),i=[["#6f8fd6","#5d7cc9","#8aa3e0"],["#8f7fd2","#a08ad8","#7b6cc4"],["#d98fb8","#c97aa8","#e6a6c8"]],s=[];for(let r=-2;r<=9.5;r+=1.55)s.push([-12.75,r]);for(let r=-9.5;r<=8.5;r+=2)s.push([r,10.85]);for(let r=-2.5;r<=7;r+=1.7)s.push([12.8,r]);s.forEach(([r,a])=>{let o=new Se,l=i[Math.floor(le()*3)],c=new z(e,n);c.scale.set(.62,.45,.62),c.position.y=.4,o.add(c);for(let h=0;h<6;h++){let u=new z(t,go(l[h%3])),f=.17+le()*.08;u.scale.set(f,f*.9,f);let d=le()*6.28,g=.22+le()*.28;u.position.set(Math.cos(d)*g,.58+le()*.3,Math.sin(d)*g),o.add(u)}o.position.set(r,0,a),o.rotation.y=le()*6,dn(o),Bf.add(o)})}{let n=new z(P0,Do);n.position.y=.09,n.receiveShadow=!0,Vs.add(n),fs.push(n);let[e,t,i,s]=D0,r=new z(new Tt(e,.14,.55),Do);r.position.set(t,i+.2,s),Vs.add(r),fs.push(r)}var Hf=Ea?350:600,ur=new Float32Array(Hf*6),H0=[];for(let n=0;n<Hf;n++)H0.push({x:-14+le()*28,y:le()*12,z:-5+le()*17});var Of=new pt;Of.setAttribute("position",new Bt(ur,3));var Yn=new ea(Of,new Is({color:"#a9b8be",transparent:!0,opacity:.5}));Yn.frustumCulled=!1;de.add(Yn);var kf=Ea?450:800,wc=new Float32Array(kf*3),O0=[];for(let n=0;n<kf;n++)O0.push({x:-14+le()*28,y:le()*10,z:-5+le()*17,ph:le()*10});var Gf=new pt;Gf.setAttribute("position",new Bt(wc,3));var Er=Hn(32,32,n=>{let e=n.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,32,32)}),zo=new ta(Gf,new or({size:.11,map:Er,transparent:!0,depthWrite:!1}));zo.frustumCulled=!1;de.add(zo);{let n=new Se,e=new na([new S(0,0,0),new S(.25,.9,.1),new S(.05,1.7,-.15),new S(.6,2.4,0),new S(.9,2.7,.1)]);n.add(new z(new so(e,24,.13,8),ie("#5b4434")));let t=ie("#2e4b2e",{r:1}),i=di(new Pe(1,14,8),.3,5);[[.9,2.8,.1,.95],[-.3,2,.35,.7],[1.15,1.8,-.25,.65],[.3,3.25,.05,.55],[-.45,2.6,-.3,.5]].forEach(([r,a,o,l])=>{let c=new z(i,t);c.scale.set(l,l*.38,l*.9),c.position.set(r,a,o),n.add(c);let h=new z(i,Do);h.scale.set(l*.9,l*.2,l*.8),h.position.set(r,a+l*.24,o),n.add(h),fs.push(h),st.leaves&&Oc(n,[{x:r,y:a+l*.05,z:o,sx:l*1.02,sy:l*.36,sz:l*.92}],"needle",["#3a5e34","#2f5030","#4a6d3a"],Math.round(st.leaves*.18),.3)});{let r=new S(.35,4.6,.05),a=Yi(new S(.35,0,.05),r,.045,.035,ie("#b39461"));n.add(a),fs.push(a);let o=[];for(let u=0;u<20;u++){let f=u/20*Math.PI*2;o.push(r.x,r.y,r.z,.35+Math.cos(f)*1.75,1.55+Math.sin(u*1.7)*.1,.05+Math.sin(f)*1.6)}let l=new pt;l.setAttribute("position",new Ue(o,3));let c=new ea(l,new Is({color:"#c4a873"}));n.add(c),fs.push(c);let h=new z(new Ti(.12,.3,8),ie("#b39461"));h.position.copy(r).add(new S(0,.12,0)),n.add(h),fs.push(h)}let s=new z(di(new Pe(1,16,8),.3,2),Po);s.scale.set(.75,.18,.7),s.position.y=-.03,n.add(s),n.position.set(dr.x,0,dr.z),n.rotation.y=.6,dn(n),de.add(n),vs.push({x:dr.x,z:dr.z,r:.55})}var Nt={on:!1};{let n=new Se,e=ie("#8f8b83",{r:1,flat:!0}),t=(s,r)=>{let a=new z(s,e);return a.position.y=r,n.add(a),a};t(new He(.34,.38,.18,6),.09),t(new He(.11,.14,.75,8),.55),t(new He(.32,.26,.13,6),.98);for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4,a=t(new Tt(.06,.32,.06),1.2);a.position.x=Math.cos(r)*.17,a.position.z=Math.sin(r)*.17}Nt.glowMat=new ht({color:"#3a332a",emissive:"#ffb85c",emissiveIntensity:0,roughness:1});let i=new z(new Tt(.22,.24,.22),Nt.glowMat);i.position.y=1.2,n.add(i),t(new Ti(.5,.32,6),1.52),t(new Pe(.07,8,6),1.73);{let s=new z(new Ti(.46,.2,6),Do);s.position.y=1.63,n.add(s),fs.push(s);let r=new z(new He(.3,.31,.05,6),Do);r.position.y=1.07,n.add(r),fs.push(r)}Nt.light=new sa("#ffb35a",0,7,1.6),Nt.light.position.y=1.2,n.add(Nt.light),Nt.halo=new Hi(new Ei({map:null,color:"#ffbf6a",transparent:!0,opacity:0,depthWrite:!1,blending:_s})),Nt.halo.position.y=1.2,n.add(Nt.halo),n.position.set(nn.x,0,nn.z),dn(n),i.castShadow=!1,de.add(n),vs.push({x:nn.x,z:nn.z,r:.42})}var k0=32,un={t:Math.random()*20,phase:"fill",angle:.32,pivot:null,pour:null,stream:null},Xm={x:Jt.x,z:Jt.z+.8};{let n=Jt,e=ie("#8d8981",{r:1,flat:!0}),t=ie("#9aa45a",{r:.65}),i=ie("#6f7a3c",{r:.7}),s=new Se;s.position.set(n.x,0,n.z),de.add(s);let r=new z(di(new He(.42,.5,.5,14),.12,4),e);r.position.y=.25,s.add(r),un.basinWater=new z(new Oi(.29,28),new ht({color:"#2b4547",roughness:.08,metalness:.3,normalMap:ga,normalScale:new $(.2,.2)})),un.basinWater.rotation.x=-Math.PI/2,un.basinWater.position.y=.505,s.add(un.basinWater);let a=(y,v,M,R,_)=>{let C=new z(di(new He(y,y*1.1,v,10),.2,_),e);return C.position.set(M,v/2-.03,R),s.add(C),C};a(.34,.12,0,.8,11),a(.22,.22,-.62,.35,12),a(.2,.18,.6,.4,13);let o=new Se;o.position.set(.05,.53,0),o.rotation.y=.5,s.add(o);let l=new z(new He(.012,.012,.75,6),ie("#c9b48a"));l.rotation.z=Math.PI/2,o.add(l);let c=new z(new He(.06,.055,.08,10,1,!0),ie("#c9b48a",{side:Mt}));c.position.set(.36,.03,0),o.add(c);let h=-.3,u=-.02;s.add(Yi(new S(h,0,-.85),new S(h,1.25,-.85),.045,.04,t)),s.add(Yi(new S(h,1.16,-.88),new S(h,1.13,u),.035,.035,t)),un.stream=new z(new He(.012,.016,.26,6),new ht({color:"#dfeef2",transparent:!0,opacity:.55,roughness:.1})),un.stream.position.set(h,.99,u),s.add(un.stream);let f=-.75,d=.72;[[-.11],[.11]].forEach(([y])=>s.add(Yi(new S(f,0,y),new S(f,.8,y),.03,.028,i)));let g=new Se;g.position.set(f,d,0),s.add(g),un.pivot=g;let x=new z(new He(.055,.058,.92,12),t);x.rotation.z=Math.PI/2,g.add(x);let m=new z(new Oi(.045,12),ie("#2d2a20"));m.position.x=.461,m.rotation.y=Math.PI/2,g.add(m);for(let y of[-.2,.15]){let v=new z(new Us(.058,.008,6,14),i);v.position.x=y,v.rotation.y=Math.PI/2,g.add(v)}un.pour=new z(new He(.014,.02,.22,6),un.stream.material),un.pour.visible=!1,s.add(un.pour);let p=new z(di(new li(.28,1),.25,21),e);p.scale.set(1,.95,.9),p.position.set(f-.45,.25,0),s.add(p),dn(s),vs.push({x:n.x,z:n.z,r:.5},{x:n.x-.95,z:n.z,r:.42},{x:n.x+h,z:n.z-.85,r:.15})}function OT(n){let e=un;if(e.t+=n,e.phase==="fill"){let i=Math.min(1,e.t/k0);e.angle=.32-.24*Math.pow(i,1.6),i>=1&&(e.phase="tip",e.t=0)}else if(e.phase==="tip"){let i=Math.min(1,e.t/.4);e.angle=.08-.66*(1-Math.pow(1-i,3)),i>=1&&(e.phase="pour",e.t=0,iS())}else if(e.phase==="pour")e.angle=-.58+Math.sin(e.t*20)*.01,e.t>.75&&(e.phase="back",e.t=0);else if(e.phase==="back"){let i=Math.min(1,e.t/.22);e.angle=-.58+.98*i*i,i>=1&&(e.phase="bounce",e.t=0,D.ctx&&D.on&&D.ctx.state==="running"&&nS())}else e.phase==="bounce"&&(e.angle=.32+.08*Math.exp(-e.t*9)*Math.cos(e.t*30),e.t>.6&&(e.phase="fill",e.t=0));e.pivot.rotation.z=e.angle;let t=e.phase==="pour";if(e.pour.visible=t,t){let i=-.75+Math.cos(e.angle)*.46,s=.72+Math.sin(e.angle)*.46;e.pour.position.set(i+.03,s-.11,0),Math.random()<.3&&Xs(Jt.x+i*.5,.51,Jt.z,.18)}}var _t={fish:[],pellets:[],ripples:[],cubeT:-1e9,cubeDirty:!0},Gc=(n,e)=>ha.some(([t,i])=>Math.hypot(n-t,e-i)<.42),nf=(n,e)=>gr(n,e)<.12&&!Gc(n,e),ga=st.waterN?Mr("assets/water_n.jpg",[.6,.6],!1):null,Vc=new Ya(st.cube),Vf=new qa(.1,120,Vc);Vf.position.set(ut.x,.08,ut.z);de.add(Vf);{let e=[];for(let u=0;u<96;u++){let f=u/96*Math.PI*2,d=Ro(f);e.push([ut.x+Math.cos(f)*ut.rx*d,ut.z+Math.sin(f)*ut.rz*d])}let t=u=>{let f=new $a(e.map(([g,x])=>new $(g,-x))),d=new ec(f,2);return d.rotateX(-Math.PI/2),d.translate(0,u,0),d};_t.water=new z(t(-.07),new ht({color:"#21403d",roughness:.05,metalness:.35,transparent:!0,opacity:.8,envMap:Vc.texture,envMapIntensity:1.1,depthWrite:!1,normalMap:ga,normalScale:new $(.28,.28)})),_t.water.renderOrder=2,de.add(_t.water);let i=new z(t(-.55),ie("#33402f",{r:1}));i.receiveShadow=!0,de.add(i);let s=[];for(let u=0;u<96;u++){let[f,d]=e[u],[g,x]=e[(u+1)%96];s.push(f,0,d,g,0,x,g,-.56,x,f,0,d,g,-.56,x,f,-.56,d)}let r=new pt;r.setAttribute("position",new Ue(s,3)),r.computeVertexNormals();let a=new z(r,ie("#4b4a3b",{r:1,side:Mt}));de.add(a);let o=new Se;de.add(o);for(let u=0;u<34;u++){let f=u/34*Math.PI*2+(le()-.5)*.08,d=Ro(f)*(1.02+le()*.05),g=ut.x+Math.cos(f)*ut.rx*d,x=ut.z+Math.sin(f)*ut.rz*d;if(Math.hypot(g-ha[0][0],x-ha[0][1])<.45||Math.hypot(g-ha[4][0],x-ha[4][1])<.45)continue;let m=.42+le()*.15,p=new z(di(new li(1,1),.3,u+40),new ht({color:new ce(m,m*.99,m*.95),roughness:1,flatShading:!0})),y=.16+le()*.14;p.scale.set(y*1.3,y*.6,y),p.position.set(g,.02,x),p.rotation.y=f,o.add(p)}dn(o,!0,!0);let l=ie("#a39e94",{r:1,flat:!0});ha.forEach(([u,f],d)=>{let g=new z(di(new He(.34,.38,.16,12),.18,60+d),l);g.position.set(u,-.02,f),g.rotation.y=le()*3,g.castShadow=g.receiveShadow=!0,de.add(g)}),[["#f4f1ea","#d8452c"],["#e88a2a","#f3b552"],["#f4f1ea","#222222"],["#d23a26","#f4f1ea"],["#efd04a","#f7e9a8"],["#f4f1ea","#e06a2a"]].forEach(([u,f],d)=>{let g=new Se,x=ie(u,{r:.5}),m=ie(f,{r:.5}),p=new z(new Pe(1,14,10),x);p.scale.set(.075,.05,.24),g.add(p);let y=new z(new Pe(1,10,8),m);y.scale.set(.06,.035,.1),y.position.set(0,.022,.04+le()*.05),g.add(y);let v=new Se;v.position.z=-.22,g.add(v);let M=new z(new Pe(1,10,6),x);M.scale.set(.08,.012,.075),M.position.z=-.06,v.add(M);for(let I of[-1,1]){let E=new z(new Pe(1,8,6),x);E.scale.set(.045,.008,.03),E.position.set(I*.075,-.01,.08),E.rotation.y=I*.6,g.add(E)}let R=.8+le()*.45;g.scale.setScalar(R);let _=le()*6.28,C={g,tail:v,x:ut.x+Math.cos(_)*.8,z:ut.z+Math.sin(_)*.5,h:le()*6.28,tx:ut.x,tz:ut.z,ph:le()*6,sp:.25+le()*.12};g.position.set(C.x,-.24-d*.015,C.z),de.add(g),_t.fish.push(C)});let h=new io(.85,1,40);h.rotateX(-Math.PI/2);for(let u=0;u<18;u++){let f=new z(h,new pn({color:"#e8f0ee",transparent:!0,opacity:0,depthWrite:!1}));f.visible=!1,f.renderOrder=3,de.add(f),_t.ripples.push({m:f,t:0,life:1})}}function Xs(n,e,t,i=.5){let s=_t.ripples.find(r=>!r.m.visible)||_t.ripples[0];s.m.position.set(n,e+.004,t),s.t=0,s.life=1.2+i,s.size=i,s.m.visible=!0}function sf(n=.7){for(let e=0;e<20;e++){let t=Math.random()*6.28,i=Math.sqrt(Math.random())*n,s=ut.x+Math.cos(t)*ut.rx*i,r=ut.z+Math.sin(t)*ut.rz*i;if(Kc(s,r)<n)return[s,r]}return[ut.x,ut.z]}function kT(n,e){for(let t of _t.fish){let i=t.tx,s=t.tz,r=!1;if(_t.pellets.length){let u=null,f=1e9;for(let d of _t.pellets){let g=Math.hypot(d.m.position.x-t.x,d.m.position.z-t.z);g<f&&(f=g,u=d)}i=u.m.position.x,s=u.m.position.z,r=!0,f<.12&&(u.dead=!0,Xs(i,-.07,s,.22),rS())}else Math.hypot(i-t.x,s-t.z)<.3&&([t.tx,t.tz]=sf());let o=((Math.atan2(i-t.x,s-t.z)-t.h+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;t.h+=xt(o,-1,1)*n*(r?2.6:1.3);let l=t.sp*(r?2.2:1)*(Ve==="winter"?.6:1),c=t.x+Math.sin(t.h)*l*n,h=t.z+Math.cos(t.h)*l*n;Kc(c,h)<.86?(t.x=c,t.z=h):(t.h+=n*2.5,[t.tx,t.tz]=sf(.5)),t.g.position.x=t.x,t.g.position.z=t.z,t.g.rotation.y=t.h,t.tail.rotation.y=Math.sin(e*(r?14:7)+t.ph)*.45}_t.pellets=_t.pellets.filter(t=>(t.life-=n,t.dead||t.life<=0?(de.remove(t.m),!1):(t.m.position.y=-.065+Math.sin(e*3+t.ph)*.004,!0))),ga&&(ga.offset.x+=n*.012,ga.offset.y+=n*.007);for(let t of _t.ripples){if(!t.m.visible)continue;t.t+=n;let i=t.t/t.life;if(i>=1){t.m.visible=!1;continue}t.m.scale.setScalar(.05+t.size*i),t.m.material.opacity=.55*(1-i)}if(Yn.visible&&Math.random()<n*7){let[t,i]=sf(.95);Xs(t,-.07,i,.25)}}var GT=new Pe(.025,6,4),VT=ie("#c49a5e");function WT(){Je("koi");let n=We.position,e=We.rotation.y,t=n.x+Math.sin(e)*.8,i=n.z+Math.cos(e)*.8;for(let s=0;s<20&&gr(t,i)>-.25;s++)t+=(ut.x-t)*.15,i+=(ut.z-i)*.15;for(let s=0;s<6;s++){let r=t+(Math.random()-.5)*.5,a=i+(Math.random()-.5)*.4;if(Kc(r,a)>.9)continue;let o=new z(GT,VT);o.position.set(r,-.065,a),de.add(o),_t.pellets.push({m:o,life:30,ph:Math.random()*6}),setTimeout(()=>Xs(r,-.07,a,.15),s*90)}if(D.ctx&&D.on){let s=D.ctx.currentTime;for(let r=0;r<4;r++)Pi(900+Math.random()*500,300,s+r*.08,.06,.02,"sine",.3)}Rt("\u6492\u4E0B\u4E00\u9EDE\u98FC\u6599\u3002")}function XT(){Je("wash"),Zc=Math.atan2(Jt.x-We.position.x,Jt.z-We.position.z),th("wash"),Xs(Jt.x,.51,Jt.z,.25),setTimeout(()=>Xs(Jt.x+.08,.51,Jt.z-.05,.2),300),sS(),Rt(Ve==="winter"?"\u6C34\u5F88\u51B0\uFF0C\u5FC3\u4E5F\u9192\u4E86\u3002":Ve==="summer"?"\u6DBC\u6DBC\u7684\uFF0C\u597D\u8212\u670D\u3002":"\u6E05\u6C34\u6D41\u904E\u6307\u5C16\u3002",2800)}function qT(n){let e=performance.now();if(!n&&!_t.cubeDirty&&e-_t.cubeT<2e4)return;_t.cubeDirty=!1,_t.cubeT=e,_t.water.visible=!1;let t=_t.fish.map(i=>i.g.visible);_t.fish.forEach(i=>i.g.visible=!1),Vf.update(Zn,de),_t.water.visible=!0,_t.fish.forEach((i,s)=>i.g.visible=t[s])}var We=new Se,An=new Se;We.add(An);de.add(We);var q={arms:[],petals:[],anim:null,animT:0,idleT:0,breathT:0,petalT:20,stepIdx:0};{let n=ie("#f0d6b8",{r:.8}),e=ie("#c8a464",{r:.95});q.robeM=new ht({color:"#3f4f6e",roughness:.9}),q.obiM=ie("#93402d"),q.yukata=Hn(256,256,(p,y,v)=>{p.fillStyle="#2c4a78",p.fillRect(0,0,y,v),p.strokeStyle="rgba(240,244,250,.75)",p.lineWidth=2.5;for(let M=0;M<v;M+=32)for(let R=M/32%2?16:0;R<y;R+=32)p.beginPath(),p.arc(R,M,10,0,Math.PI*2),p.stroke(),p.beginPath(),p.moveTo(R-10,M),p.lineTo(R+10,M),p.moveTo(R,M-10),p.lineTo(R,M+10),p.stroke()},[2,1.5]);let t=(p,y,v,M,R,_=An)=>{let C=new z(p,y);return C.position.set(v,M,R),_.add(C),C};q.body=t(new He(.17,.28,.5,16),q.robeM,0,.32,0),t(new He(.205,.215,.065,16),q.obiM,0,.43,0);for(let p of[-1,1]){let y=t(new Tt(.03,.16,.012),ie("#f2ede2"),p*.045,.52,.168);y.rotation.z=p*.5,y.rotation.x=-.25}q.head=new Se,q.head.position.set(0,.74,0),An.add(q.head),t(new Pe(.2,22,16),n,0,0,0,q.head);let i=new Pe(.022,8,6),s=ie("#1d1a17",{r:.4});t(i,s,.07,.02,.18,q.head),t(i,s,-.07,.02,.18,q.head);let r=new Pe(.03,8,6),a=ie("#e9a597");t(r,a,.115,-.04,.15,q.head),t(r,a,-.115,-.04,.15,q.head),q.hat=t(new Ti(.38,.2,24),e,0,.21,0,q.head);for(let p of[1,-1]){let y=new Se;y.position.set(p*.2,.5,.02),An.add(y),t(new Pe(1,12,10),q.robeM,0,-.08,0,y).scale.set(.078,.13,.08);let M=t(new Pe(.035,10,8),n,0,-.2,.02,y);y.userData.hand=M,q.arms.push(y)}let o=new Pe(.06,8,6),l=ie("#2b2622");q.feet=[t(o,l,.09,.04,.06),t(o,l,-.09,.04,.06)],q.feet.forEach(p=>p.scale.set(1,.6,1.4)),q.legs=new Se,An.add(q.legs);for(let p of[-1,1]){let y=t(new Pe(1,14,10),q.robeM,p*.07,.06,.13,q.legs);y.scale.set(.17,.065,.08),y.rotation.y=p*.45}q.legs.visible=!1,q.scarf=new Se,An.add(q.scarf);let c=ie("#a8382c",{r:.95}),h=t(new Us(.135,.04,8,20),c,0,.575,0,q.scarf);h.rotation.x=Math.PI/2,h.scale.set(1,1,.8);let u=t(new Tt(.07,.2,.03),c,.08,.47,.15,q.scarf);u.rotation.z=.15,q.scarfTail=u,q.fan=new Se,q.arms[0].userData.hand.add(q.fan),t(new He(.009,.009,.14,6),ie("#c9b48a"),0,-.06,.02,q.fan);let f=Hn(128,128,(p,y,v)=>{p.fillStyle="#f4efe2",p.beginPath(),p.arc(64,64,62,0,7),p.fill(),p.fillStyle="#d8573a",p.beginPath(),p.arc(78,52,18,0,7),p.fill(),p.strokeStyle="#5d7fb0",p.lineWidth=4;for(let M=0;M<3;M++)p.beginPath(),p.arc(64,100+M*7,40,Math.PI*1.15,Math.PI*1.85),p.stroke()}),d=t(new Oi(.14,24),new ht({map:f,side:Mt,roughness:.9}),0,-.24,.03,q.fan);d.rotation.y=Math.PI/2+.5,q.fan.visible=!1,q.umb=new Se,q.umb.position.set(.13,.42,.1),An.add(q.umb),t(new He(.012,.012,1.05,6),ie("#5a3f2c"),0,.48,0,q.umb);let g=Hn(256,64,(p,y,v)=>{p.fillStyle="#c79a52",p.fillRect(0,0,y,v),p.strokeStyle="rgba(90,60,30,.6)",p.lineWidth=2;for(let M=0;M<24;M++)p.beginPath(),p.moveTo(M*y/24,0),p.lineTo(M*y/24,v),p.stroke();p.fillStyle="rgba(160,50,40,.8)",p.fillRect(0,v-12,y,7)}),x=t(new Ti(.6,.24,24,1,!0),new ht({map:g,side:Mt,roughness:.6}),0,.98,0,q.umb);t(new Pe(.03,8,6),ie("#3a2a20"),0,1.1,0,q.umb),q.umb.visible=!1,q.umbK=0,q.lan=new Se,q.lan.position.set(-.22,.24,.24),An.add(q.lan),t(new He(.004,.004,.12,4),ie("#2b2622"),0,.06,0,q.lan),q.lanM=new ht({color:"#f3e6c8",emissive:new ce("#ffb35a"),emissiveIntensity:1.2,roughness:.8}),t(new Pe(1,14,10),q.lanM,0,-.06,0,q.lan).scale.set(.065,.09,.065);for(let p of[.03,-.15])t(new He(.035,.035,.02,10),ie("#1d1a17"),0,p,0,q.lan);q.lanLight=new sa("#ffb35a",0,3.8,1.5),q.lanLight.position.set(-.22,.18,.24),An.add(q.lanLight),q.lan.visible=!1,q.fog=[];for(let p=0;p<4;p++){let y=new Hi(new Ei({map:null,color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));y.visible=!1,de.add(y),q.fog.push({sp:y,t:9})}}function YT(n){let e={spring:["#efe2e6","#b65a6a"],summer:["#ffffff","#d9a54a"],autumn:["#b9592c","#3a302a"],winter:["#3f4f6e","#93402d"]}[n];q.robeM.color.set(e[0]),q.robeM.map=n==="summer"?q.yukata:null,q.robeM.needsUpdate=!0,q.obiM.color.set(e[1]),q.scarf.visible=n==="winter",n!=="spring"&&(q.petals.forEach(t=>q.hat.parent.remove(t)),q.petals.length=0)}function th(n){q.anim=n,q.animT=0,q.idleT=0}var Fs=new Se;An.add(Fs);{let n=ie("#a27b50",{r:.8}),e=new S(.21,.42,.06),t=new S(0,.07,-.75),i=e.distanceTo(t),s=new z(new He(.018,.018,i,6),n);s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new S(0,1,0),e.clone().sub(t).normalize()),Fs.add(s);let r=new z(new Tt(.95,.05,.06),n);r.position.copy(t),Fs.add(r);for(let a=-2;a<=2;a++){let o=new z(new Tt(.025,.08,.025),n);o.position.set(a*Mo,.02,-.75),Fs.add(o)}Fs.visible=!1}dn(We,!0,!1);We.position.set(.5,0,5.2);We.rotation.y=Math.PI;var Wf=[];{let n=new mn(.15,.1);for(let e=0;e<32;e++){let t=new z(n,new ht({color:"#ffffff",side:Mt,roughness:.9}));de.add(t);let i={m:t,ph:le()*10,rest:0};Xf(i,!0),Wf.push(i)}}function Xf(n,e){n.m.position.set(-10+le()*22,e?le()*7:5+le()*2.5,-3.2+le()*13),n.m.rotation.set(le()*6,le()*6,le()*6),n.rest=0}var Wc=(n,e)=>[(n-be.x0)*yn,(e-be.z0)*yn],vo=(n,e)=>n>be.x0+.05&&n<be.x1-.05&&e>be.z0+.05&&e<be.z1-.05;function ZT(n,e,t,i){let[s,r]=Wc(n,e),[a,o]=Wc(t,i),l=a-s,c=o-r,h=Math.hypot(l,c);if(h<.5)return;let u=l/h,f=c/h,d=-f,g=u;s-=u*3,r-=f*3;let x=ks,m=Mo*yn;x.save(),x.lineCap="butt",x.strokeStyle=wT,x.lineWidth=m*5.3,x.beginPath(),x.moveTo(s,r),x.lineTo(a,o),x.stroke();for(let p=-2;p<=2;p++){let y=p*m+(Math.random()-.5)*.5;x.strokeStyle="rgba(118,112,102,0.45)",x.lineWidth=m*.38,x.beginPath(),x.moveTo(s+d*y,r+g*y),x.lineTo(a+d*y,o+g*y),x.stroke();let v=y+m*.36;x.strokeStyle="rgba(255,255,255,0.42)",x.lineWidth=m*.2,x.beginPath(),x.moveTo(s+d*v,r+g*v),x.lineTo(a+d*v,o+g*v),x.stroke()}x.restore(),Gs=!0,Kt(!0)}function QT(n,e,t,i){let[s,r]=Wc(n+Math.cos(t)*.09*i,e-Math.sin(t)*.09*i),a=ks;a.save(),a.translate(s,r),a.rotate(Math.atan2(Math.cos(t),Math.sin(t))),a.fillStyle="rgba(105,99,90,0.2)",a.beginPath(),a.ellipse(0,0,.11*yn,.06*yn,0,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.18)",a.beginPath(),a.ellipse(.01*yn,.035*yn,.09*yn,.025*yn,0,0,Math.PI*2),a.fill(),a.restore(),Gs=!0,Kt(!0)}var Xi={};addEventListener("keydown",n=>{Xi[n.code]=!0,n.code==="KeyR"&&W0(),(n.code==="KeyE"||n.code==="Space")&&(n.preventDefault(),q0())});addEventListener("keyup",n=>{Xi[n.code]=!1});var Mn={id:null,ox:0,oy:0,x:0,y:0};var Ri=N("joy"),G0=N("knob"),ya=N("c");Ea&&Ri.classList.remove("hidden");var po=50;function JT(){Ri.style.left="34px",Ri.style.top="",Ri.style.bottom="34px",G0.style.transform="",Ri.classList.remove("active")}ya.addEventListener("pointerdown",n=>{try{ya.setPointerCapture(n.pointerId)}catch{}if(Ho(),we.on){bS(n);return}if(Ke.on){lw(n);return}if(j.on&&j.stage==="whisk"){j.down=n.pointerId,j.lx=n.clientX,j.ly=n.clientY;return}if(n.pointerType!=="mouse"&&n.clientX<innerWidth*.5&&Mn.id===null)Mn.id=n.pointerId,Mn.ox=n.clientX,Mn.oy=n.clientY,Mn.x=Mn.y=0,Ri.style.left=n.clientX-60+"px",Ri.style.top=n.clientY-60+"px",Ri.style.bottom="auto",Ri.classList.add("active");else if(zs.set(n.pointerId,{x:n.clientX,y:n.clientY}),zs.size===2){let[e,t]=[...zs.values()];fa.d0=Math.hypot(e.x-t.x,e.y-t.y)||1,fa.v0=at.on?at.fov:pi}});ya.addEventListener("pointermove",n=>{if(we.on){_S(n);return}if(Ke.on){cw(n);return}if(j.on&&j.down===n.pointerId){qS(n);return}if(n.pointerId===Mn.id){let e=n.clientX-Mn.ox,t=n.clientY-Mn.oy,i=Math.hypot(e,t);i>po&&(e*=po/i,t*=po/i),Mn.x=e/po,Mn.y=-t/po,G0.style.transform=`translate(${e}px,${t}px)`}else if(zs.has(n.pointerId)){let e=zs.get(n.pointerId),t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,zs.size>=2){let[s,r]=[...zs.values()],a=Math.hypot(s.x-r.x,s.y-r.y)||1;at.on?at.fov=xt(fa.v0*fa.d0/a,18,75):pi=xt(fa.v0*fa.d0/a,2.6,16)}else at.on?(at.yaw-=t*.005,at.pitch=xt(at.pitch+i*.004,-.15,1.45)):(Bs-=t*.006,So=xt(So+i*.004,.02,1.25))}});function V0(n){if(we.on){RS(n);return}if(Ke.on){hw(n);return}if(j.down===n.pointerId){j.down=null;return}n.pointerId===Mn.id&&(Mn.id=null,Mn.x=Mn.y=0,JT()),zs.delete(n.pointerId)}ya.addEventListener("pointerup",V0);ya.addEventListener("pointercancel",V0);ya.addEventListener("wheel",n=>{if(n.preventDefault(),we.on){we.cam.h=xt(we.cam.h+n.deltaY*.02,10,40);return}if(at.on){at.fov=xt(at.fov+n.deltaY*.03,18,75);return}pi=xt(pi*(1+n.deltaY*.001),2.6,16)},{passive:!1});var zs=new Map,fa={d0:1,v0:10},Wn=!1,rt=!1,hi=null,qm=0;function Rt(n,e=2600){let t=N("toast");t.textContent=n,t.classList.add("show"),clearTimeout(qm),qm=setTimeout(()=>t.classList.remove("show"),e)}function W0(){rt||(Wn=!Wn,Fs.visible=Wn,N("rakeBtn").classList.toggle("on",Wn),Rt(Wn?"\u62D6\u8457\u8019\u5B50\u6162\u6162\u8D70\uFF0C\u8EAB\u5F8C\u6703\u7559\u4E0B\u6C99\u7D0B":"\u653E\u4E0B\u8019\u5B50"))}N("rakeBtn").onclick=W0;N("resetBtn").onclick=()=>{ks.drawImage(jc,0,0),Gs=!0,Kt(!0),Rt("\u767D\u7802\u56DE\u5230\u6700\u521D\u7684\u6A23\u5B50")};var X0={spring:["\u82B1\u958B\u4E86\uFF0C\u4E5F\u6703\u843D\u3002","\u82B1\u671F\u5F88\u77ED\uFF0C\u6240\u4EE5\u6162\u6162\u770B\u3002","\u98A8\u4E00\u5439\uFF0C\u4E0B\u8D77\u7C89\u7D05\u8272\u7684\u96EA\u3002","\u4EC0\u9EBC\u90FD\u4E0D\u7528\u505A\u3002"],summer:["\u96E8\u843D\u5728\u9752\u6953\u4E0A\u3002","\u7E61\u7403\u82B1\u5728\u96E8\u88E1\u6700\u597D\u770B\u3002","\u807D\u96E8\u3002","\u6FD5\u6FD5\u7684\uFF0C\u4E5F\u5F88\u597D\u3002"],autumn:["\u98A8\u5F88\u8F15\u3002","\u8449\u5B50\u7D05\u4E86\uFF0C\u4E0D\u6025\u8457\u6389\u3002","\u77F3\u982D\u5728\u9019\u88E1\uFF0C\u5DF2\u7D93\u5F88\u4E45\u4E86\u3002","\u6C99\u7D0B\u4E82\u4E86\uFF0C\u518D\u8019\u5C31\u597D\u3002"],winter:["\u96EA\u843D\u5728\u677E\u4E0A\uFF0C\u6C92\u6709\u8072\u97F3\u3002","\u6885\u82B1\u5148\u958B\u4E86\u3002","\u51B7\uFF0C\u4F46\u5F88\u4E7E\u6DE8\u3002","\u807D\uFF0C\u6C92\u6709\u8072\u97F3\u7684\u8072\u97F3\u3002"]};function q0(){hi==="lantern"?(Nt.on=!Nt.on,Rt(Nt.on?"\u71C8\u4EAE\u4E86":"\u71C8\u7184\u4E86")):hi==="sit"?yf():hi==="stand"?Bo():hi==="wash"?XT():hi==="feed"?WT():hi==="cat"?NS():hi==="kuji"?WS():hi==="bowls"?(rt||yf(),ld()):hi==="wish"&&oh("\u5BEB\u4E00\u500B\u9858\u671B","\u639B\u5728\u7AF9\u5B50\u4E0A",16,"\u639B\u4E0A\u53BB",GS)}N("ctxBtn").onclick=q0;function yf(){rt=!0,Wn=!1,Fs.visible=!1,N("rakeBtn").classList.remove("on");let n=Sn/8,e=xt(Math.round((We.position.x-Tn)/n-.5),0,7);Xc.set(Tn+(e+.5)*n,.75,-5.3),Zc=0;let t=N("poem"),i=X0[Ve];t.textContent=i[Math.floor(Math.random()*i.length)],setTimeout(()=>t.classList.add("show"),900),Ma(),Qi("choices"),Ri.style.opacity="0",qf=performance.now(),document.body.classList.add("sitting")}var qf=0;function Bo(){rt&&performance.now()-qf>8e3&&setTimeout(IS,700),rt=!1,document.body.classList.remove("sitting"),N("poem").classList.remove("show"),Pt.mode&&sh(),j.on&&dg(),Ke.on&&cd(),N("listenOverlay").classList.contains("show")&&rg(),Qi(null),Ri.style.opacity=""}var Xc=new S;N("helpBtn").onclick=()=>{N("intro").classList.remove("fade")};N("how").innerHTML=(Ea?["\u5DE6\u534A\u908A\u62D6\u66F3\u8D70\u8DEF\uFF0C\u53F3\u534A\u908A\u62D6\u66F3\u8F49\u8996\u89D2","\u300C\u8019\u6C99\u300D\u7559\u4E0B\u7D0B\u8DEF\uFF0C\u4E5F\u80FD\u6383\u6389\u843D\u8449","\u300C\u9020\u5EAD\u300D\uFF1A\u81EA\u5DF1\u64FA\u653E\u77F3\u982D","\u8D70\u8FD1\u7DE3\u5074\u3001\u71C8\u7C60\u3001\u624B\u6C34\u7F3D\u3001\u6C60\u908A\uFF0C\u53F3\u4E0B\u6703\u51FA\u73FE\u80FD\u505A\u7684\u4E8B","\u7DE3\u5074\u5DE6\u908A\u6709\u7C64\u7BB1\uFF0C\u6BCF\u5929\u53EF\u4EE5\u62BD\u4E00\u5F35","\u5B63\u7BC0\u8DDF\u8457\u65E5\u671F\uFF0C\u5149\u7DDA\u8DDF\u8457\u6642\u9593","\u53F3\u4E0A\u300C\u97F3\u300D\uFF1A\u97F3\u91CF\u8207\u7761\u524D\u6A21\u5F0F\u30FB\u5EFA\u8B70\u6234\u8033\u6A5F"]:["WASD\uFF0F\u65B9\u5411\u9375\u8D70\u8DEF\uFF0C\u6ED1\u9F20\u62D6\u66F3\u8F49\u8996\u89D2","R \u8019\u6C99\uFF08\u4E5F\u80FD\u6383\u843D\u8449\uFF09\u30FBE\uFF0F\u7A7A\u767D\u9375\uFF1A\u4E92\u52D5","\u300C\u9020\u5EAD\u300D\uFF1A\u81EA\u5DF1\u64FA\u653E\u77F3\u982D","\u8D70\u8FD1\u7DE3\u5074\u3001\u71C8\u7C60\u3001\u624B\u6C34\u7F3D\u3001\u6C60\u908A\uFF0C\u53F3\u4E0B\u6703\u51FA\u73FE\u80FD\u505A\u7684\u4E8B","\u5B63\u7BC0\u8DDF\u8457\u65E5\u671F\uFF0C\u5149\u7DDA\u8DDF\u8457\u6642\u9593\uFF081\uFF5E4\u3001T \u53EF\u5207\u63DB\uFF09","\u53F3\u4E0A\u300C\u97F3\u300D\uFF1A\u97F3\u91CF\u8207\u7761\u524D\u6A21\u5F0F\u30FB\u5EFA\u8B70\u6234\u8033\u6A5F"]).map(n=>`<li>${n}</li>`).join("");var Ym=!1;N("startBtn").onclick=()=>{N("intro").classList.add("fade"),D.on&&Ys(),!Ym&&(Ym=!0,setTimeout(()=>th("bow"),700),setTimeout(()=>gg(!0),900))};function Gi(n){if(n===hi)return;hi=n;let e=N("ctxBtn");if(!n){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent={sit:"\u5750\u4E0B",stand:"\u8D77\u8EAB",kuji:"\u62BD\u7C64",bowls:"\u980C\u7F3D",wish:"\u5BEB\u9858\u671B",wash:"\u6D17\u624B",feed:"\u9935\u9B5A",cat:"\u6478\u6478\u8C93"}[n]||(Nt.on?"\u7184\u71C8":"\u9EDE\u71C8")}var Lo={spring:{name:"\u6625",title:"\u6625\u30FB\u6AFB\u82B1",text:"\u82B1\u671F\u77ED\u66AB\u537B\u6975\u81F4\u7D62\u721B\uFF0C\u8C61\u5FB5\u751F\u547D\u7684\u7121\u5E38\u3001\u9752\u6625\u8207\u65B0\u7684\u958B\u59CB\u3002",sky:"#e9e5e7",fog:[32,80],hemi:["#f4f1f4",1.2],sun:["#fff2e6",1.85],ground:"#7b8659",moss:["#6b8a40","#5a7a36"],gravel:"#ffffff",rough:.96,leaves:{cols:["#f6c3d0","#f9dbe3","#f2aec0","#ffffff"],size:.7,speed:.28,sway:.7}},summer:{name:"\u590F",title:"\u590F\u30FB\u7E61\u7403\u82B1\uFF0F\u9752\u6953",text:"\u6885\u96E8\u4E2D\u7DBB\u653E\u7684\u7E61\u7403\u82B1\uFF0C\u548C\u5145\u6EFF\u751F\u547D\u529B\u7684\u65B0\u7DA0\u6953\u8449\u3002",sky:"#cdd8d5",fog:[20,60],hemi:["#e3ecea",1.3],sun:["#f4f6f2",.85],ground:"#5e7547",moss:["#4f7a35","#40692c"],gravel:"#d9d9d5",rough:.75,leaves:null,rain:!0},autumn:{name:"\u79CB",title:"\u79CB\u30FB\u7D05\u8449\uFF0F\u9280\u674F",text:"\u6953\u8449\u8F49\u7D05\u3001\u9280\u674F\u67D3\u9EC3\uFF0C\u7D05\u9EC3\u4EA4\u7E54\u7684\u300C\u7D05\u8449\u72E9\u300D\u3002",sky:"#dde4e2",fog:[30,75],hemi:["#eef3f6",1.15],sun:["#ffe9cf",1.9],ground:"#7a7553",moss:["#62783a","#516a33"],gravel:"#ffffff",rough:.96,leaves:{cols:["#c4482b","#d6702c","#e3a23a","#b8392a","#e8bd34"],size:1,speed:.38,sway:.45}},winter:{name:"\u51AC",title:"\u51AC\u30FB\u677E\uFF0F\u6885",text:"\u5E38\u9752\u7684\u677E\u62AB\u4E0A\u96EA\u540A\uFF0C\u6885\u82B1\u5728\u5BD2\u51AC\u5C3E\u8072\u7387\u5148\u7DBB\u653E\uFF0C\u8C61\u5FB5\u5831\u6625\u3002",sky:"#e5eaee",fog:[24,65],hemi:["#f2f5f9",1.5],sun:["#eef3ff",1.6],ground:"#e3e7e9",moss:["#d6ddd8","#c9d3cc"],gravel:"#f7f9fb",rough:.96,leaves:null,snow:!0}},Ve="autumn",cs=null,rf=new ce("#eef2f5");function Yf(n){Ve=n;let e=Lo[n];if(B0.forEach(i=>{for(let s in i.vars)i.vars[s].visible=s===i.k[n]}),Bf.visible=n==="summer",fs.forEach(i=>i.visible=n==="winter"),de.fog.near=e.fog[0],de.fog.far=e.fog[1],us.material.color.set(e.ground),Po.color.set(e.moss[0]),If.color.set(e.moss[1]),$c.forEach((i,s)=>i.color.copy(Po.color).multiplyScalar(1+.07*(s+1))),Hm){let i=n==="winter";us.material.map=i?null:Hm,us.material.normalMap=i?null:bT,i||us.material.color.set({spring:"#d4dcbc",summer:"#b9c8a2",autumn:"#d0c7a2"}[n]),us.material.needsUpdate=!0}xa.material.color.set(e.gravel),xa.material.roughness=e.rough;let t=new ce;gf.forEach((i,s)=>{t.copy(i),bi&&t.multiplyScalar(.7),n==="winter"?t.lerp(rf,.5):n==="summer"?t.offsetHSL(0,.06,-.02):n==="spring"&&t.offsetHSL(.01,0,.03),vf.setColorAt(s,t)}),vf.instanceColor.needsUpdate=!0,bi&&(z0.forEach((i,s)=>{t.copy(i),n==="winter"?t.lerp(rf,.55):n==="summer"?t.offsetHSL(0,.06,-.02):n==="spring"&&t.offsetHSL(.01,.02,.04),bi.setColorAt(s,t)}),bi.instanceColor.needsUpdate=!0),xf.forEach(({mat:i,base:s})=>{i.color.copy(s),n==="winter"?i.color.lerp(rf,.42):n==="spring"&&i.color.offsetHSL(.01,0,.03)}),cs=e.leaves,Wf.forEach((i,s)=>{i.m.visible=!!cs,cs&&(i.m.material.color.set(cs.cols[s%cs.cols.length]),i.m.scale.setScalar(cs.size),Xf(i,!0))}),Yn.visible=!!e.rain,zo.visible=!!e.snow,YT(n),window.__lightReady&&ms(),typeof _t<"u"&&(_t.cubeDirty=!0),D.ctx&&xr(),document.querySelectorAll("#seasons button").forEach(i=>i.classList.toggle("on",i.dataset.s===n))}var qc=0;function Mf(){let n=Lo[Ve];N("scTitle").textContent=n.title,N("scText").textContent=n.text;let e=N("seasonCard");e.classList.add("show"),clearTimeout(qc),qc=setTimeout(()=>e.classList.remove("show"),4500)}function Zf(n){if(n===Ve)return Mf();let e=N("fade");e.classList.add("on"),setTimeout(()=>{if(Yf(n),rt){let t=X0[n];N("poem").textContent=t[Math.floor(Math.random()*t.length)]}e.classList.remove("on"),Mf()},380)}document.querySelectorAll("#seasons button").forEach(n=>n.onclick=()=>Zf(n.dataset.s));addEventListener("keydown",n=>{let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(n.code);e>=0&&Zf(["spring","summer","autumn","winter"][e])});{let n=new Date().getMonth()+1;Yf(n>=3&&n<=5?"spring":n>=6&&n<=8?"summer":n>=9&&n<=11?"autumn":"winter")}var KT=[0,1,5,7,8],nh={spring:{density:.8,bell:.2,gap:[2.6,5.2],wind:.015,rain:0},summer:{density:.6,bell:.3,gap:[3.2,6.5],wind:0,rain:.075},autumn:{density:.7,bell:.35,gap:[3,6],wind:.04,rain:0},winter:{density:.5,bell:.6,gap:[4.5,8.5],wind:.06,rain:0}};function jT(n,e,t){let i=Math.floor(n.sampleRate*e),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){let a=s.getChannelData(r);for(let o=0;o<i;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/i,t)}return s}function fn(n,e,t="amb"){let i=D.bus[t];n.connect(i.dry);let s=D.ctx.createGain();s.gain.value=e,n.connect(s),s.connect(i.wet)}var Qf=1.6,$T=n=>Math.pow(n/100,1.6)*1.35;function Jf(){if(!D.ctx)return;let n=D.ctx.currentTime;for(let[e,t]of[["mus",ps.music],["amb",ps.amb]]){let i=$T(t);D.bus[e].dry.gain.setTargetAtTime(i,n,.1),D.bus[e].wet.gain.setTargetAtTime(i,n,.1)}}function Ys(){if(D.ctx){D.on&&D.ctx.state==="suspended"&&D.ctx.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;let e;try{e=new n}catch{return}D.ctx=e;let t=e.createGain();t.gain.value=0;let i=e.createDynamicsCompressor();i.threshold.value=-18,i.ratio.value=3,t.connect(i),i.connect(e.destination),D.master=t,D.verb=e.createConvolver(),D.verb.buffer=jT(e,4.8,2.4);let s=e.createGain();s.gain.value=.6,D.verb.connect(s),s.connect(t),D.dry=e.createGain(),D.dry.gain.value=.75,D.dry.connect(t),D.bus={};for(let l of["mus","amb"]){let c=e.createGain(),h=e.createGain();c.connect(D.dry),h.connect(D.verb),D.bus[l]={dry:c,wet:h}}Jf();let r=e.createBuffer(1,e.sampleRate*3,e.sampleRate),a=r.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;D.noiseBuf=r;let o=()=>{let l=e.createBufferSource();return l.buffer=r,l.loop=!0,l.start(0,Math.random()*2),l};{let l=e.createGain();l.gain.value=.055,D.drone=l;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.4,c.connect(l),fn(l,.65,"mus"),[[73.42,"sine",.5],[73.62,"sine",.35],[110,"sine",.3],[146.83,"triangle",.1]].forEach(([g,x,m])=>{let p=e.createOscillator();p.type=x,p.frequency.value=g;let y=e.createGain();y.gain.value=m,p.connect(y),y.connect(c),p.start()});let h=e.createOscillator();h.frequency.value=.045;let u=e.createGain();u.gain.value=220,h.connect(u),u.connect(c.frequency),h.start();let f=e.createOscillator();f.frequency.value=.029;let d=e.createGain();d.gain.value=.022,f.connect(d),d.connect(l.gain),f.start()}{let l=o(),c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=380,c.Q.value=.7;let h=e.createOscillator();h.frequency.value=.07;let u=e.createGain();u.gain.value=180,h.connect(u),u.connect(c.frequency),h.start(),D.wind=e.createGain(),D.wind.gain.value=0,l.connect(c),c.connect(D.wind),fn(D.wind,.3)}{let l=o(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=900;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=5500,D.rain=e.createGain(),D.rain.gain.value=0,l.connect(c),c.connect(h),h.connect(D.rain),fn(D.rain,.25)}{let l=o(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=2200;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=4800,h.Q.value=.5;let u=e.createOscillator();u.frequency.value=7;let f=e.createGain();f.gain.value=1800,u.connect(f),f.connect(h.frequency),u.start(),D.rustle=e.createGain(),D.rustle.gain.value=0,l.connect(c),c.connect(h),h.connect(D.rustle),fn(D.rustle,.25)}{let l=o(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2300,c.Q.value=.8;let h=e.createOscillator();h.frequency.value=5.5;let u=e.createGain();u.gain.value=600,h.connect(u),u.connect(c.frequency),h.start(),D.trickle=e.createGain(),D.trickle.gain.value=0,l.connect(c),c.connect(D.trickle),fn(D.trickle,.35)}{let l=o(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2600,c.Q.value=.9;let h=e.createOscillator();h.frequency.value=3.2;let u=e.createGain();u.gain.value=700,h.connect(u),u.connect(c.frequency),h.start(),D.rake=e.createGain(),D.rake.gain.value=0,l.connect(c),c.connect(D.rake),fn(D.rake,.15),D.rakeOn=!1}xr(),D.on&&t.gain.linearRampToValueAtTime(Qf,e.currentTime+4),Q0(),j0()}function xr(){if(!D.ctx)return;let n=nh[Ve],e=D.ctx.currentTime;D.wind.gain.setTargetAtTime(n.wind,e,1.5),D.rain.gain.setTargetAtTime(Yn.visible?n.rain:0,e,1.5)}var En={active:!1,set:new Set,timers:[]};function xs(n){En.active&&En.set.add(n)}function Y0(n,e,t=1){let i=D.ctx,s=i.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.15*t,e+.006),s.gain.exponentialRampToValueAtTime(6e-4,e+3.3);let r=i.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(n*7,e),r.frequency.exponentialRampToValueAtTime(n*1.6,e+1.1);let a=i.createOscillator();a.type="triangle",a.frequency.setValueAtTime(n*1.008,e),a.frequency.exponentialRampToValueAtTime(n,e+.09);let o=i.createOscillator();o.type="sine",o.frequency.value=n*2.003;let l=i.createGain();l.gain.value=.22,a.connect(r),o.connect(l),l.connect(r),r.connect(s),fn(s,.5,"mus"),a.start(e),o.start(e),a.stop(e+3.5),o.stop(e+3.5),xs("\u53E4\u7B8F")}function Ef(n,e,t=1,i=6,s="\u9418\u8072"){xs(s);let r=D.ctx,a=r.createGain();a.gain.value=t*.09,fn(a,.75,"mus"),[[1,1,1],[1.003,.6,1],[2.76,.4,.55],[5.4,.16,.35],[8.93,.07,.22]].forEach(([o,l,c])=>{let h=r.createOscillator();h.type="sine",h.frequency.value=n*o;let u=r.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+.01),u.gain.exponentialRampToValueAtTime(4e-4,e+i*c),h.connect(u),u.connect(a),h.start(e),h.stop(e+i*c+.1)})}function Ma(){if(!D.ctx||!D.on)return;let n=D.ctx.currentTime+.05;Ef(146.83,n,1.6,11,"\u980C\u7F3D"),Ef(220.2,n+.02,.5,9,"\u980C\u7F3D")}var af=3,Z0=n=>{let e=Math.floor(n/5),t=(n%5+5)%5;return 293.66*Math.pow(2,(KT[t]+12*e)/12)};function Q0(){let n=nh[Ve];if(D.ctx&&D.on&&D.ctx.state==="running"&&!Ke.on&&Math.random()<n.density){let e=D.ctx.currentTime+.05,t=1+Math.floor(Math.random()*3);for(let i=0;i<t;i++){af=xt(af+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)],-2,8);let s=Z0(af);Math.random()<n.bell?Ef(s,e,.7,5.5):Y0(s,e,.75+Math.random()*.35),e+=.4+Math.random()*.8}}setTimeout(Q0,(n.gap[0]+Math.random()*(n.gap[1]-n.gap[0]))*1e3*(rt?1.5:1))}function Pi(n,e,t,i,s,r="sine",a=.3){let o=D.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(n,t),l.frequency.exponentialRampToValueAtTime(e,t+i),c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(s,t+.008),c.gain.exponentialRampToValueAtTime(3e-4,t+i),l.connect(c),fn(c,a),l.start(t),l.stop(t+i+.05)}function J0(n){let e=2400+Math.random()*1400,t=2+Math.floor(Math.random()*4);for(let i=0;i<t;i++)Pi(e*(1+Math.random()*.1),e*1.5,n+i*.13,.09,.018,"sine",.35);xs("\u9CE5\u9CF4")}function eS(n){Pi(1700+Math.random()*900,700,n,.12,.03,"sine",.5),xs("\u5C4B\u7C37\u6EF4\u6C34")}function tS(n){let e=4200+Math.random()*300;for(let t=0;t<3+Math.floor(Math.random()*4);t++)Pi(e,e*.98,n+t*.16,.11,.008,"sine",.2);xs("\u9234\u87F2")}function K0(n){let e=230+Math.random()*60;for(let t=0;t<2+Math.floor(Math.random()*3);t++)Pi(e*1.3,e,n+t*.22,.12,.03,"triangle",.3);xs("\u9752\u86D9")}function Tf(n){let e=dt>.5;Ve==="spring"&&!e?J0(n):Ve==="summer"?(Yn.visible?eS:K0)(n):(Ve==="autumn"||Ve==="spring"&&e)&&tS(n)}function j0(){D.ctx&&D.on&&D.ctx.state==="running"&&Math.random()<.6&&Tf(D.ctx.currentTime+.05),setTimeout(j0,1800+Math.random()*3500)}function nS(){let n=D.ctx,e=n.currentTime+.05;Pi(420,260,e,.18,.12,"triangle",.7);let t=n.createBufferSource();t.buffer=D.noiseBuf;let i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=4;let s=n.createGain();s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(5e-4,e+.08),t.connect(i),i.connect(s),fn(s,.7),t.start(e,Math.random()*2),t.stop(e+.1),xs("\u9E7F\u5A01\u3057\uFF08\u7AF9\u7B52\u6572\u77F3\uFF09")}function Ci(n,e,t,i,s,r=.4,a="bandpass"){let o=D.ctx,l=o.createBufferSource();l.buffer=D.noiseBuf;let c=o.createBiquadFilter();c.type=a,c.frequency.value=t,c.Q.value=i;let h=o.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(s,n+.03),h.gain.setTargetAtTime(0,n+e*.5,e*.25),l.connect(c),c.connect(h),fn(h,r),l.start(n,Math.random()*2),l.stop(n+e+.3)}function iS(){!D.ctx||!D.on||D.ctx.state!=="running"||Ci(D.ctx.currentTime,.8,1300,1.2,.07,.4)}function sS(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx.currentTime;Ci(n,1.3,1800,.7,.09,.4);for(let e=0;e<5;e++)Pi(1400+Math.random()*1200,500,n+.1+Math.random()*.8,.1,.02,"sine",.4)}function rS(){!D.ctx||!D.on||D.ctx.state!=="running"||Pi(650,170,D.ctx.currentTime,.12,.045,"sine",.4)}function aS(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx,e=n.currentTime,t=n.createBufferSource();t.buffer=D.noiseBuf,t.playbackRate.value=.8+Math.random()*.4;let i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=1600+Math.random()*900,i.Q.value=1.1;let s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.09,e+.015),s.gain.exponentialRampToValueAtTime(5e-4,e+.16),t.connect(i),i.connect(s),fn(s,.1),t.start(e,Math.random()*2.5),t.stop(e+.2)}function oS(n){!D.ctx||n===D.rakeOn||(D.rakeOn=n,D.rake.gain.setTargetAtTime(n?.055:0,D.ctx.currentTime,.08))}function Kf(n,e,t){if(D.on=n,ps.on=n,N("soundBtn").classList.toggle("off",!n),N("muteBtn").textContent=n?"\u958B":"\u95DC",N("muteBtn").classList.toggle("on",n),typeof Kt=="function"&&Kt(),!D.ctx){n&&!t&&Ys();return}n&&D.ctx.state==="suspended"&&D.ctx.resume(),D.master.gain.cancelScheduledValues(D.ctx.currentTime),D.master.gain.setTargetAtTime(n?Qf:0,D.ctx.currentTime,.6),e||Rt(n?"\u8072\u97F3\u958B\u555F":"\u5B89\u975C\u6A21\u5F0F")}function Ho(){N("soundPanel").classList.add("hidden")}N("soundBtn").onclick=n=>{n.stopPropagation(),N("soundPanel").classList.toggle("hidden")};N("muteBtn").onclick=()=>Kf(!D.on,!0);N("volMusic").value=ps.music;N("volAmb").value=ps.amb;N("volMusic").oninput=n=>{ps.music=+n.target.value,D.on&&Ys(),Jf(),Kt()};N("volAmb").oninput=n=>{ps.amb=+n.target.value,D.on&&Ys(),Jf(),Kt()};Kf(D.on,!0,!0);var tn={on:!1,end:0,fading:!1,done:!1,lastTxt:""};function jf(){let n=N("sleepBtn");if(!tn.on){n.textContent="\u7761\u524D\u6A21\u5F0F\u30FB10 \u5206\u9418\u5F8C\u6162\u6162\u5B89\u975C",n.classList.remove("on");return}if(n.classList.add("on"),tn.fading){n.textContent="\u6B63\u5728\u6162\u6162\u5B89\u975C\u2026\uFF08\u9EDE\u4E00\u4E0B\u53D6\u6D88\uFF09";return}let e=Math.max(0,Math.ceil((tn.end-performance.now())/1e3)),t=Math.floor(e/60)+":"+String(e%60).padStart(2,"0");t!==tn.lastTxt&&(n.textContent=`\u7761\u524D\u6A21\u5F0F ${t}\uFF08\u9EDE\u4E00\u4E0B\u53D6\u6D88\uFF09`,tn.lastTxt=t)}function $0(){let n=N("sleepOverlay");n.style.transition="opacity 1.5s",n.classList.remove("show"),setTimeout(()=>{n.style.transition=""},1600),tn.on=!1,tn.fading=!1,tn.done=!1,jf(),D.ctx&&D.on&&(D.ctx.resume(),D.master.gain.cancelScheduledValues(D.ctx.currentTime),D.master.gain.setTargetAtTime(Qf,D.ctx.currentTime,1))}N("sleepBtn").onclick=()=>{if(tn.on){$0(),Rt("\u53D6\u6D88\u7761\u524D\u6A21\u5F0F");return}tn.on=!0,tn.end=performance.now()+10*6e4,D.on&&Ys(),jf(),Rt("\u5341\u5206\u9418\u5F8C\uFF0C\u5EAD\u9662\u6703\u6162\u6162\u5B89\u975C\u4E0B\u4F86\u3002",3200)};N("sleepOverlay").addEventListener("pointerdown",$0);function lS(n){if(tn.on&&(jf(),!tn.fading&&n>=tn.end)){if(tn.fading=!0,Ho(),rt&&Bo(),D.ctx){let e=D.ctx.currentTime;D.master.gain.cancelScheduledValues(e),D.master.gain.setValueAtTime(D.master.gain.value,e),D.master.gain.linearRampToValueAtTime(0,e+90)}N("sleepOverlay").classList.add("show"),setTimeout(()=>{tn.fading&&(tn.done=!0,D.ctx&&D.ctx.suspend())},92e3)}}document.addEventListener("visibilitychange",()=>{D.ctx&&(document.hidden?D.ctx.suspend():D.on&&D.ctx.resume())});var dt=0,qs="auto",of=null,lf=["auto",6.6,12,17.9,22],cS={auto:"\u6642",6.6:"\u6668",12:"\u5348",17.9:"\u660F",22:"\u591C"},hS={auto:"\u8DDF\u8457\u73FE\u5728\u7684\u6642\u9593",6.6:"\u6E05\u6668",12:"\u6B63\u5348",17.9:"\u9EC3\u660F",22:"\u591C\u665A"},xc=[{h:0,n:1},{h:4.8,n:1},{h:6.2,n:.18,sky:["#e9c2ae",.6],sun:["#ffad78",.85],sm:.55,hm:.75},{h:8,n:0,sky:["#f3e6d6",.15],sun:["#fff0dc",.3],sm:.95,hm:.95},{h:12,n:0},{h:16,n:0,sky:["#f0e2cc",.15],sun:["#ffe2bd",.4],sm:.95,hm:.95},{h:17.8,n:.18,sky:["#e8a57f",.6],sun:["#ff9152",.85],sm:.65,hm:.7},{h:19.2,n:1},{h:24,n:1}],ds={on:Math.random()<.6,next:0},uS=new ce("#1a2232"),fS=new ce("#a3b6dc"),dS=new ce("#7d8db0"),da=new ce,eg=new ce;function Zm(n,e){let t=new ce(e.sky);n.sky&&t.lerp(da.set(n.sky[0]),n.sky[1]),t.lerp(uS,n.n);let i=new ce(e.sun[0]);n.sun&&i.lerp(da.set(n.sun[0]),n.sun[1]),i.lerp(fS,n.n);let s=new ce(e.hemi[0]).lerp(dS,n.n);return{sky:t,sc:i,hc:s,si:Nn.lerp(e.sun[1]*(n.sm??1),.5,n.n),hi:Nn.lerp(e.hemi[1]*(n.hm??1),.42,n.n),n:n.n}}function Oo(){if(qs!=="auto")return qs;let n=new Date;return n.getHours()+n.getMinutes()/60}var Io=(()=>{let n=29.530588853,e=Date.UTC(2e3,0,6,18,14)/864e5,t=(Date.now()/864e5-e)/n%1;return t<0&&(t+=1),{p:t,illum:(1-Math.cos(2*Math.PI*t))/2}})(),tg=document.createElement("canvas");function ng(n){let e=n?256:128,t=tg;t.width=t.height=e;let i=t.getContext("2d"),s=Math.cos(2*Math.PI*Io.p),r=Io.p<.5,a=null;n&&(i.drawImage(n,n.width*.25,0,n.width*.5,n.height,0,0,e,e),a=i.getImageData(0,0,e,e).data);let o=i.createImageData(e,e);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(c+.5)/e*2-1,u=(l+.5)/e*2-1,f=h*h+u*u,d=(l*e+c)*4;if(f>1){o.data[d+3]=0;continue}let g=Math.sqrt(1-u*u),x=r?h>g*s:h<-g*s,m=.9+.1*Math.sin(h*9+u*5)*Math.sin(u*11-h*3),p=Math.min(1,(1-Math.sqrt(f))*18),y=a?.55+.6*(a[d]/255):m;x?(o.data[d]=Math.min(255,248*y),o.data[d+1]=Math.min(255,243*y),o.data[d+2]=Math.min(255,226*y),o.data[d+3]=255*p):(o.data[d]=60,o.data[d+1]=68,o.data[d+2]=88,o.data[d+3]=70*p)}i.putImageData(o,0,0)}ng(null);var $f=new Vn(tg);$f.colorSpace=Ut;{let n=new Image;n.onload=()=>{ng(n),$f.needsUpdate=!0},n.src="assets/moon.jpg"}var ti=new Hi(new Ei({map:$f,fog:!1,transparent:!0,depthWrite:!1}));ti.scale.set(4.6,4.6,1);ti.position.set(-18,11,60);de.add(ti);var Uo=new Hi(new Ei({map:Er,color:"#dfe6ff",fog:!1,transparent:!0,depthWrite:!1}));Uo.scale.set(16,16,1);Uo.position.copy(ti.position);de.add(Uo);var Qm=new ce("#e9edee"),zn=0,Jm=(()=>{let e=new Float32Array(1260);for(let s=0;s<420;s++){let r=le()*Math.PI*2,a=.12+le()*1.3,o=95;e[s*3]=Math.cos(r)*Math.cos(a)*o,e[s*3+1]=Math.sin(a)*o,e[s*3+2]=Math.sin(r)*Math.cos(a)*o}let t=new pt;t.setAttribute("position",new Bt(e,3));let i=new ta(t,new or({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1}));return de.add(i),i})(),ih=40,bc=new Float32Array(ih*3),_c=new Float32Array(ih*3),ig=[];for(let n=0;n<ih;n++){let e=le(),t,i;e<.4?(t=-12.6+le()*1.2,i=-2+le()*12):e<.7?(t=-10+le()*20,i=10.2+le()*1.2):(t=11.8+le()*1.2,i=-2+le()*10),ig.push({x:t,z:i,y:.3+le()*1.4,p1:le()*10,p2:le()*10,sp:.6+le()*.8})}var No=new pt;No.setAttribute("position",new Bt(bc,3));No.setAttribute("color",new Bt(_c,3));var ko=new ta(No,new or({size:.38,map:Er,vertexColors:!0,transparent:!0,depthWrite:!1,blending:_s}));ko.frustumCulled=!1;de.add(ko);function ms(){let n=Lo[Ve],e=Oo(),t=0;for(;t<xc.length-2&&xc[t+1].h<=e;)t++;let i=xc[t],s=xc[t+1],r=xt((e-i.h)/(s.h-i.h),0,1),a=Zm(i,n),o=Zm(s,n),l=a.sky.clone().lerp(o.sky,r);de.background.copy(l),de.fog.color.copy(l),zn=HS(e),en==="fog"&&(zn=Math.max(zn,.82)),zn>0&&(de.fog.color.lerp(Qm,zn*.6),de.background.lerp(Qm,zn*.45)),de.fog.near=Nn.lerp(n.fog[0],1.5,zn),de.fog.far=Nn.lerp(n.fog[1],24,zn),ei.color.copy(a.sc).lerp(o.sc,r),ei.intensity=Nn.lerp(a.si,o.si,r),Ec.color.copy(a.hc).lerp(o.hc,r),Ec.intensity=Nn.lerp(a.hi,o.hi,r)*(st.env?.55:1),dt=Nn.lerp(a.n,o.n,r),ei.intensity*=1-dt*.5*(1-Io.illum);let c=en==="cloud"?.55:en==="rain"?.7:en==="snow"?.5:0;c&&(ei.intensity*=1-c*.7,Ec.intensity*=1+c*.15,da.set(dt>.5?"#1a1f27":"#c4cacc"),de.background.lerp(da,c*.6),de.fog.color.lerp(da,c*.6)),en==="sun"&&(ei.intensity*=1.08);let h=xt((e-6)/12,0,1)*Math.PI,u=new S(22*Math.cos(h),5+24*Math.sin(h),12),f=new S(-12,24,16);ei.position.copy(u).lerp(f,dt),Pc.material.uniforms.bottom.value.copy(de.fog.color),Pc.material.uniforms.top.value.copy(de.fog.color).lerp(da.set(dt>.5?"#0c1220":"#8fb0cf"),.55*(1-zn*.8)).lerp(eg.set("#e9a07a"),Math.max(0,1-Math.abs(e-17.8)/1.2)*.25*(1-dt)),g0(e),ti.material.opacity=dt,ti.visible=dt>.02,Uo.material.opacity=dt*(.12+.3*Io.illum),Uo.visible=ti.visible,Jm.material.opacity=Math.max(0,dt*1.2-.2),Jm.visible=dt>.2,Ff.material.emissiveIntensity=dt*.55,Yn.visible=en==="rain"||!en&&!!n.rain&&dt<.4&&ds.on,zo.visible=!!n.snow||en==="snow",ko.visible=Ve==="summer"&&dt>=.4&&!Yn.visible;let d=dt>.3;d!==of&&((of!==null||d)&&(Nt.on=d),of=d,D.ctx&&xr()),N("timeBtn").textContent=cS[qs]||"\u6642",document.body.classList.toggle("night",dt>.5)}window.__lightReady=!0;ms();var yc=0;function pS(n){if(ko.visible){for(let e=0;e<ih;e++){let t=ig[e],i=e*3;bc[i]=t.x+Math.sin(n*.3*t.sp+t.p1)*.9,bc[i+1]=t.y+Math.sin(n*.5*t.sp+t.p2)*.35,bc[i+2]=t.z+Math.cos(n*.25*t.sp+t.p2)*.9;let s=Math.pow(Math.max(0,Math.sin(n*1.3*t.sp+t.p1*3)),4)*dt;_c[i]=1*s,_c[i+1]=1*s,_c[i+2]=.4*s}No.attributes.position.needsUpdate=!0,No.attributes.color.needsUpdate=!0}}N("timeBtn").onclick=()=>{let n=lf.indexOf(qs),e=lf[(n+1)%lf.length],t=N("fade");t.classList.add("on"),setTimeout(()=>{qs=e,ms(),_t.cubeDirty=!0,t.classList.remove("on"),Rt(hS[e]+(e==="auto"?"\uFF08\u73FE\u5728 "+new Date().toTimeString().slice(0,5)+"\uFF09":""))},380)};addEventListener("keydown",n=>{n.code==="KeyT"&&N("timeBtn").click()});var ed=!1;function Sf(){let n=new Date().getMonth()+1;return n>=3&&n<=5?"spring":n>=6&&n<=8?"summer":n>=9&&n<=11?"autumn":"winter"}setInterval(()=>{!ed&&Sf()!==Ve&&Zf(Sf())},6e4);document.querySelectorAll("#seasons button").forEach(n=>n.addEventListener("click",()=>{ed=!0}));var Pt={mode:null,end:0,start:0,v:0,lastInfo:""};function Qi(n){N("sitPanel").classList.toggle("hidden",!n),N("sitChoices").classList.toggle("hidden",n!=="choices"),N("sitRunning").classList.toggle("hidden",n!=="running")}function mS(n){if(D.on&&Ys(),N("poem").classList.remove("show"),n==="listen"){vS();return}if(n==="leaf"){CS();return}if(n==="tea"){XS();return}if(n==="bowls"){ld();return}Pt.start=performance.now(),n==="breath"?(Pt.mode="breath",N("breathDot").classList.add("show"),N("sitInfo").textContent=""):(Pt.mode="timer",Pt.mins=parseInt(n.slice(1)),Pt.end=Pt.start+Pt.mins*6e4,Ma()),Qi("running")}function sh(){Pt.mode==="breath"&&(N("breathDot").classList.remove("show"),D.drone&&D.drone.gain.setTargetAtTime(.055,D.ctx.currentTime,1)),Pt.mode=null,Qi(rt?"choices":null)}function gS(n,e){if(Pt.mode==="timer"){let t=Pt.end-n;if(t<=0){Ma(),setTimeout(Ma,2600),Rt("\u6642\u9593\u5230\u4E86\uFF0C\u6162\u6162\u56DE\u4F86\u3002",3500),he.zazenMin=(he.zazenMin||0)+Pt.mins,Je("zazen"),sh();return}let i=Math.ceil(t/1e3),s=Math.floor(i/60)+":"+String(i%60).padStart(2,"0");s!==Pt.lastInfo&&(N("sitInfo").textContent=s,Pt.lastInfo=s)}else if(Pt.mode==="breath"){let t=(n-Pt.start)/1e3%10,i=r=>.5-.5*Math.cos(Math.PI*r);Pt.v=t<4?i(t/4):1-i((t-4)/6);let s=N("breathDot");s.style.transform=`translateX(-50%) scale(${.55+.65*Pt.v})`,s.style.opacity=.25+.45*Pt.v,D.drone&&D.ctx&&D.drone.gain.setTargetAtTime(.035+.06*Pt.v,D.ctx.currentTime,.25)}}document.querySelectorAll("#sitChoices button").forEach(n=>n.onclick=()=>mS(n.dataset.m));N("sitStop").onclick=()=>sh();function vS(){D.on?Ys():Kf(!0),En.active=!0,En.set.clear(),Qi(null),N("listenOverlay").classList.add("show"),N("listenText").innerHTML="\u9589\u4E0A\u773C\u775B\u3002<br>\u6578\u4E00\u6578\uFF0C\u807D\u5230\u5E7E\u7A2E\u8072\u97F3\u3002",N("listenBack").textContent="\u63D0\u65E9\u7D50\u675F",setTimeout(Ma,600);let e=(t,i)=>En.timers.push(setTimeout(()=>{En.active&&D.ctx&&t()},i));e(()=>Tf(D.ctx.currentTime+.05),9e3+Math.random()*5e3),e(()=>{un.t=Math.max(un.t,k0-2),un.phase=un.phase==="fill"?"fill":un.phase},2e4+Math.random()*12e3),e(()=>Tf(D.ctx.currentTime+.05),4e4+Math.random()*8e3),En.timers.push(setTimeout(sg,6e4))}function sg(){En.active&&(En.active=!1,En.timers.forEach(clearTimeout),En.timers=[],Ma(),Je("listen"),N("listenText").innerHTML="\u807D\u5230\u5E7E\u7A2E\u5462\uFF1F",N("listenBack").textContent="\u56DE\u5230\u5EAD\u9662",En.timers.push(setTimeout(()=>{let n=nh[Ve],e=[];n.wind>0&&e.push("\u98A8"),Yn.visible&&e.push("\u96E8"),En.set.forEach(t=>{t!=="\u980C\u7F3D"&&e.push(t)}),e.push("\u4F4E\u4F4E\u7684\u3001\u50CF\u547C\u5438\u4E00\u6A23\u7684\u6301\u7E8C\u97F3"),N("listenText").innerHTML="\u9019\u4E00\u5206\u9418\uFF0C\u5EAD\u9662\u88E1\u6709<br><b>"+e.join("\u3001")+"</b><br><br>\u4E5F\u8A31\uFF0C\u9084\u6709\u4F60\u81EA\u5DF1\u7684\u547C\u5438\u3002"},3500)))}function rg(){En.active=!1,En.timers.forEach(clearTimeout),En.timers=[],N("listenOverlay").classList.remove("show"),Qi(rt?"choices":null)}N("listenBack").onclick=()=>{En.active?sg():rg()};var td=140,qn=(Array.isArray(he.fallen)?he.fallen:[]).filter(n=>Array.isArray(n)).map(n=>({x:n[0],z:n[1],r:n[2],c:n[3]}));function Go(n,e){if(!vo(n,e)||gr(n,e)<.45||Math.hypot(n-Jt.x,e-Jt.z)<1.2)return!1;for(let t of Uf)if(Math.hypot(n-t.x,e-t.z)<t.r+.15)return!1;return!0}var ag=new mn(.16,.11);ag.rotateX(-Math.PI/2);var hs=new Ls(ag,new ht({color:"#ffffff",side:Mt,roughness:.9}),td);hs.receiveShadow=!0;hs.frustumCulled=!1;de.add(hs);function rh(){let n=new Ie,e=new jn,t=new ce,i=new Cs,s=new S(1,1,1),r=new S;qn.forEach((a,o)=>{i.set(0,a.r,0),e.setFromEuler(i),n.compose(r.set(a.x,.012,a.z),e,s),hs.setMatrixAt(o,n),t.set(a.c||"#c4482b"),hs.setColorAt(o,t)}),hs.count=qn.length,hs.instanceMatrix.needsUpdate=!0,hs.instanceColor&&(hs.instanceColor.needsUpdate=!0)}var wf=0;if(Df&&pf>.4&&Lo[Ve].leaves){let n=Math.min(70,Math.round(pf*9)),e=Lo[Ve].leaves.cols;for(let t=0;t<n&&qn.length<td;t++)for(let i=0;i<8;i++){let s=be.x0+.4+Math.random()*(be.w-.8),r=be.z0+.4+Math.random()*(be.d-.8);if(Go(s,r)){qn.push({x:s,z:r,r:Math.random()*6.28,c:e[Math.floor(Math.random()*e.length)]}),wf++;break}}}qn=qn.filter(n=>Go(n.x,n.z));rh();function xS(n,e){let t=!1;for(let i=qn.length-1;i>=0;i--){let s=qn[i];Math.hypot(s.x-n,s.z-e)<.52&&(qn.splice(i,1),t=!0)}t&&(rh(),Kt())}if(Df&&Ve==="winter"&&Math.random()<.6){let n=ks,e=be.z0+2+Math.random()*(be.d-4),t=1+Math.random()*1.5,i=Math.random()*6,s=Math.random()<.5?1:-1,r=1;for(let a=be.x0+.3;a<be.x1-.3;a+=.22){let o=s>0?a:be.x1+be.x0-a,l=e+Math.sin(o*.35+i)*t,c=Math.atan2(Math.cos(o*.35+i)*t*.35,1)*s;if(!Go(o,l))continue;r*=-1;let[h,u]=Wc(o-Math.sin(c)*.05*r,l+Math.cos(c)*.05*r);n.save(),n.translate(h,u),n.rotate(s>0?c:Math.PI+c),n.fillStyle="rgba(105,99,92,0.28)",n.beginPath(),n.ellipse(0,0,.045*yn,.04*yn,0,0,7),n.fill();for(let f=-1.5;f<=1.5;f++)n.beginPath(),n.ellipse(.06*yn,f*.028*yn,.016*yn,.014*yn,0,0,7),n.fill();n.restore()}Gs=!0}N("visitNote").textContent=va<=1?"\u7B2C\u4E00\u6B21\u4F86":`\u7B2C ${va} \u6B21\u4F86`;function Sa(){he.visits=va,he.last=Date.now(),he.layout=Xn,he.fallen=qn.map(n=>[+n.x.toFixed(2),+n.z.toFixed(2),+n.r.toFixed(2),n.c]),he.vol=ps,M0(v0,JSON.stringify(he))}function Vo(){try{M0(x0,JSON.stringify({sig:T0(),img:Ta.toDataURL("image/jpeg",.8)}))}catch{}}function Kt(n){clearTimeout(Fm),Fm=setTimeout(Sa,1500),n&&(clearTimeout(zm),zm=setTimeout(Vo,4e3))}addEventListener("pagehide",()=>{Sa(),Vo()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Sa(),Vo())});Sa();function yS(){va>1&&pf>3?Rt(wf?"\u597D\u4E45\u4E0D\u898B\u3002\u767D\u7802\u4E0A\u7A4D\u4E86\u4E00\u4E9B\u843D\u8449\u3002":"\u597D\u4E45\u4E0D\u898B\u3002",3800):wf>4&&Rt("\u767D\u7802\u4E0A\u7A4D\u4E86\u4E00\u4E9B\u843D\u8449\uFF0C\u8981\u8019\u4E00\u8019\u55CE\uFF1F",3800)}var we={on:!1,sel:null,drag:null,off:new S,cam:{x:0,z:3.4,h:22},pan:null},yr=new z(new io(1,1.07,56),new pn({color:"#a33f2c",transparent:!0,opacity:.9,depthWrite:!1}));yr.rotation.x=-Math.PI/2;yr.visible=!1;yr.renderOrder=3;de.add(yr);var ah=new ac,MS=new yi(new S(0,1,0),0),Km=new $;function nd(n){Km.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),ah.setFromCamera(Km,vt)}function og(n){nd(n);let e=new S;return ah.ray.intersectPlane(MS,e)?e:null}function ES(n){nd(n);let e=ah.intersectObjects(ma.children.map(t=>t.userData.hit),!1);return e.length?e[0].object.parent:null}function TS(n){return ma.children.find(e=>e.userData.c===n)||null}function gs(n){we.sel=n,yr.visible=!!n,document.querySelectorAll("#editBar [data-op]").forEach(e=>{e.dataset.op!=="default"&&(e.disabled=!n)})}function Eo(n,e,t){let i=n.moss*(n.scale||1);if(e<be.x0+i*.55||e>be.x1-i*.55||t<be.z0+i*.55||t>be.z1-i*.55||gr(e,t)<i*.75+.35)return!1;for(let s of[dr,nn,Jt])if(Math.hypot(e-s.x,t-s.z)<i+.55)return!1;return!0}function SS(){rt&&Bo(),N("askCard").classList.remove("show"),we.on=!0,Wn=!1,Fs.visible=!1,N("rakeBtn").classList.remove("on"),document.body.classList.add("editing"),we.cam.h=vt.aspect<.8?30:21,we.cam.x=0,we.cam.z=3.4,gs(null),Rt("\u62D6\u52D5\u77F3\u982D\uFF0C\u6392\u51FA\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662",3e3)}function wS(){we.on=!1,gs(null),document.body.classList.remove("editing"),Rt("\u91CD\u65B0\u8019\u7802\u4E2D\u2026",1200),setTimeout(()=>{S0(),Gs=!0,vr(),qn=qn.filter(t=>Go(t.x,t.z)),rh();let[n,e]=_g(We.position.x,We.position.z);We.position.x=n,We.position.z=e,Je("garden"),Sa(),Vo(),Rt("\u6C99\u7D0B\u91CD\u65B0\u8019\u597D\u4E86")},80)}function bS(n){let e=ES(n);if(e){gs(e);let t=og(n),i=e.userData.c;we.drag={id:n.pointerId},we.off.set(i.x-(t?t.x:i.x),0,i.z-(t?t.z:i.z))}else we.pan={id:n.pointerId,lx:n.clientX,ly:n.clientY,moved:0}}function _S(n){if(we.drag&&n.pointerId===we.drag.id&&we.sel){let e=og(n);if(!e)return;let t=we.sel.userData.c,i=e.x+we.off.x,s=e.z+we.off.z;Eo(t,i,s)?(t.x=i,t.z=s,we.sel.position.set(i,0,s)):Eo(t,i,t.z)?(t.x=i,we.sel.position.x=i):Eo(t,t.x,s)&&(t.z=s,we.sel.position.z=s)}else if(we.pan&&n.pointerId===we.pan.id){let e=n.clientX-we.pan.lx,t=n.clientY-we.pan.ly,i=we.cam.h*.0021;we.pan.moved+=Math.abs(e)+Math.abs(t),we.pan.lx=n.clientX,we.pan.ly=n.clientY,we.cam.x=xt(we.cam.x-e*i,-12,12),we.cam.z=xt(we.cam.z-t*i,-4,11)}}function RS(n){we.drag&&n.pointerId===we.drag.id&&(we.drag=null),we.pan&&n.pointerId===we.pan.id&&(we.pan.moved<6&&gs(null),we.pan=null)}var Fo={tall:{moss:.85,rocks:[[0,0,1.9,.55]]},trio:{moss:1.5,rocks:[[0,-.2,2,.55],[-.75,.3,1.1,.48],[.75,.35,.85,.45]]},flat:{moss:.9,rocks:[[0,0,.45,.95]]},moss:{moss:1,rocks:[]}};function AS(n){if(Xn.length>=20){Rt("\u77F3\u982D\u5DF2\u7D93\u5920\u591A\u4E86");return}let e=Fo[n],t={k:n,x:0,z:0,moss:e.moss,rot:Math.random()*6.28,scale:1,seed:1+Math.floor(Math.random()*1e6),rocks:JSON.parse(JSON.stringify(e.rocks))},i=!1;for(let s=0;s<9&&!i;s+=.6)for(let r=0;r<12&&!i;r++){let a=we.cam.x+Math.cos(r/12*6.28)*s,o=we.cam.z+Math.sin(r/12*6.28)*s;Eo(t,a,o)&&(t.x=a,t.z=o,i=!0)}if(!i){Rt("\u627E\u4E0D\u5230\u7A7A\u4F4D\uFF0C\u5148\u79FB\u958B\u4E00\u4E9B\u77F3\u982D");return}Xn.push(t),vr(),gs(TS(t))}document.querySelectorAll("#editBar [data-add]").forEach(n=>n.onclick=()=>AS(n.dataset.add));document.querySelectorAll("#editBar [data-op]").forEach(n=>n.onclick=()=>{let e=n.dataset.op;if(e==="default"){Xn=JSON.parse(JSON.stringify(Ao)),vr(),gs(null),Rt("\u77F3\u982D\u56DE\u5230\u539F\u672C\u7684\u4F4D\u7F6E");return}if(!we.sel)return;let t=we.sel,i=t.userData.c;if(e==="rot")i.rot=(i.rot||0)+Math.PI/6,t.rotation.y=i.rot;else if(e==="smaller"||e==="bigger"){let s=xt((i.scale||1)+(e==="bigger"?.15:-.15),.6,1.8),r=i.scale||1;i.scale=s,Eo(i,i.x,i.z)||(i.scale=r,Rt("\u9019\u88E1\u653E\u4E0D\u4E0B\u66F4\u5927\u7684\u4E86")),t.scale.setScalar(i.scale)}else e==="del"&&(Xn.splice(Xn.indexOf(i),1),vr(),gs(null))});N("editDone").onclick=wS;N("editBtn").onclick=SS;var Rc=[],bf=null;function oh(n,e,t,i,s,r){N("keepRow").style.display=r?"flex":"none",N("keepChk").checked=!1,N("leafModalTitle").textContent=n;let a=N("leafInput");a.placeholder=e,a.maxLength=t,a.value="",N("leafOk").textContent=i,bf=s,N("leafModal").classList.remove("hidden"),setTimeout(()=>a.focus(),50)}function CS(){oh("\u5728\u8449\u5B50\u4E0A\u5BEB\u4E00\u500B\u8A5E","\u4E00\u500B\u8A5E\u5C31\u597D",10,"\u653E\u4E0B",n=>{N("keepChk").checked&&(he.notes.push({d:Date.now(),q:"\u5BEB\u5728\u8449\u5B50\u4E0A",a:n}),Kt(),Je("note")),DS(n)},!0)}function id(){N("leafModal").classList.add("hidden"),N("leafInput").blur()}N("leafCancel").onclick=id;N("leafOk").onclick=()=>{let n=N("leafInput").value.trim();id(),n&&bf&&bf(n)};N("leafInput").addEventListener("keydown",n=>{n.stopPropagation(),n.key==="Enter"&&N("leafOk").click(),n.key==="Escape"&&id()});function PS(n){let e=document.createElement("canvas");e.width=320,e.height=200;let t=e.getContext("2d"),i={spring:"#f2b3c4",summer:"#7fae4a",autumn:"#cf5530",winter:"#e2d6b0"}[Ve],s=Ve==="autumn"||Ve==="summer";t.fillStyle=i,t.beginPath(),t.moveTo(14,100),t.bezierCurveTo(70,10,240,8,308,100),t.bezierCurveTo(240,192,70,190,14,100),t.fill(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=3,t.beginPath(),t.moveTo(14,100),t.lineTo(306,100),t.stroke(),t.lineWidth=1.5;for(let o=1;o<6;o++){let l=20+o*48;t.beginPath(),t.moveTo(l,100),t.quadraticCurveTo(l+20,70,l+34,40+o*2),t.moveTo(l,100),t.quadraticCurveTo(l+20,130,l+34,160-o*2),t.stroke()}t.strokeStyle=i,t.lineWidth=5,t.beginPath(),t.moveTo(16,100),t.lineTo(0,108),t.stroke();let r=n.length<=3?56:n.length<=5?44:n.length<=7?34:28;t.font=`600 ${r}px "Noto Serif TC","Songti TC",serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle=s?"rgba(255,248,236,.96)":"rgba(43,36,32,.92)",t.fillText(n,162,102);let a=new Vn(e);return a.colorSpace=Ut,a}function DS(n){he.leafCount=(he.leafCount||0)+1,Je("leaf");let e=new Se,t=new z(new mn(1.3,.81),new ht({map:PS(n),transparent:!0,alphaTest:.05,side:Mt,roughness:.85}));t.castShadow=!0,e.add(t),e.rotation.y=Math.PI;let i=We.position;e.position.set(i.x+.2,i.y+2,i.z+.9),de.add(e),Rc.push({grp:e,m:t,state:"fall",t:0,ph:Math.random()*6,vx:0,vz:0}),D.ctx&&D.on&&Y0(Z0(3),D.ctx.currentTime+.05,.6),N("poem").classList.remove("show")}function LS(n,e){for(let t=Rc.length-1;t>=0;t--){let i=Rc[t],s=i.grp;if(i.t+=n,i.state==="fall"){s.position.y-=.3*n,s.position.z+=.24*n,s.position.x+=Math.sin(e*1.1+i.ph)*.35*n;let r=xo(s.position.x,s.position.z)+.02,a=xt((s.position.y-r)/.9,0,1);i.m.rotation.x=Nn.lerp(-Math.PI/2+.12,-.35+Math.sin(e*1.6+i.ph)*.35,a),s.rotation.y=Math.PI+Math.sin(e*.7+i.ph)*.35*a,s.position.y<=r&&(s.position.y=r,i.m.rotation.x=-Math.PI/2+.12,i.state="rest",i.t=0)}else if(i.state==="rest"){if(i.t>14&&(i.state="wind",i.t=0,D.ctx&&D.wind)){let r=D.ctx.currentTime;D.wind.gain.setTargetAtTime(.12,r,.4),setTimeout(()=>xr(),2500)}}else{let r=Math.min(1,i.t/1.5);s.position.x+=1.6*r*n,s.position.z+=.9*r*n,s.position.y+=.35*r*n,i.m.rotation.x=-Math.PI/2+i.t*2.5,i.m.material.opacity=Math.max(0,1-i.t/3.5),i.t>3.5&&(de.remove(s),i.m.geometry.dispose(),i.m.material.map.dispose(),i.m.material.dispose(),Rc.splice(t,1))}}}var jm={spring:["\u6700\u8FD1\uFF0C\u6709\u4EC0\u9EBC\u6B63\u5728\u4F60\u5FC3\u88E1\u6162\u6162\u767C\u82BD\uFF1F","\u5982\u679C\u4ECA\u5929\u662F\u4E00\u500B\u65B0\u7684\u958B\u59CB\uFF0C\u4F60\u60F3\u5F9E\u54EA\u4E00\u4EF6\u5C0F\u4E8B\u958B\u59CB\uFF1F","\u6709\u4EC0\u9EBC\u7F8E\u597D\u7684\u4E8B\uFF0C\u662F\u4F60\u6700\u8FD1\u5DEE\u9EDE\u932F\u904E\u7684\uFF1F"],summer:["\u6700\u8FD1\u8B93\u4F60\u60B6\u60B6\u7684\uFF0C\u662F\u4EC0\u9EBC\uFF1F\u5B83\u9700\u8981\u4E00\u5834\u96E8\u55CE\uFF1F","\u9019\u9663\u5B50\uFF0C\u4F60\u89BA\u5F97\u81EA\u5DF1\u5728\u54EA\u88E1\u9577\u5927\u4E86\u4E00\u9EDE\uFF1F","\u5982\u679C\u53EF\u4EE5\u8B93\u96E8\u5E36\u8D70\u4E00\u4EF6\u4E8B\uFF0C\u4F60\u60F3\u4EA4\u7D66\u5B83\u4EC0\u9EBC\uFF1F"],autumn:["\u9019\u9663\u5B50\uFF0C\u6709\u4EC0\u9EBC\u662F\u4F60\u6E96\u5099\u653E\u4E0B\u7684\uFF1F","\u4ECA\u5E74\u5230\u73FE\u5728\uFF0C\u4F60\u6536\u7A6B\u4E86\u4EC0\u9EBC\uFF1F\u54EA\u6015\u5F88\u5C0F\u3002","\u6709\u4EC0\u9EBC\u4E8B\uFF0C\u4F60\u60F3\u6162\u6162\u4F86\u5C31\u597D\uFF1F"],winter:["\u5B89\u975C\u4E0B\u4F86\u7684\u6642\u5019\uFF0C\u4F60\u6700\u5E38\u60F3\u8D77\u8AB0\uFF1F","\u73FE\u5728\u7684\u4F60\uFF0C\u9700\u8981\u4EC0\u9EBC\u6A23\u7684\u6EAB\u6696\uFF1F","\u9019\u500B\u51AC\u5929\uFF0C\u6709\u4EC0\u9EBC\u4E00\u76F4\u966A\u8457\u4F60\uFF1F"],dawn:["\u4ECA\u5929\u9192\u4F86\u6642\uFF0C\u4F60\u7684\u7B2C\u4E00\u500B\u5FF5\u982D\u662F\u4EC0\u9EBC\uFF1F"],day:["\u4ECA\u5929\u6709\u4EC0\u9EBC\u4E8B\uFF0C\u8B93\u4F60\u60F3\u6162\u4E0B\u4F86\uFF1F"],dusk:["\u4ECA\u5929\u6709\u6C92\u6709\u4E00\u500B\u7247\u523B\uFF0C\u503C\u5F97\u8A18\u4F4F\uFF1F"],night:["\u7761\u524D\uFF0C\u60F3\u5C0D\u4ECA\u5929\u7684\u81EA\u5DF1\u8AAA\u4EC0\u9EBC\uFF1F"]},$m="",e0=0;function IS(){let n=Oo(),e=n>=4.5&&n<9?"dawn":n<16&&n>=9?"day":n>=16&&n<19?"dusk":"night",t=[...jm[Ve],...jm[e]].filter(s=>s!==$m),i=t[Math.floor(Math.random()*t.length)];$m=i,N("askText").textContent=i,N("askCard").classList.add("show"),clearTimeout(e0),e0=setTimeout(()=>N("askCard").classList.remove("show"),14e3)}N("askOk").onclick=()=>{N("askCard").classList.remove("show")};N("askWrite").onclick=()=>{let n=N("askText").textContent;N("askCard").classList.remove("show"),oh("\u5BEB\u4E0B\u4F60\u7684\u56DE\u7B54","\u5E7E\u500B\u5B57\u5C31\u597D",60,"\u6536\u9032\u624B\u5E16",e=>{he.notes.push({d:Date.now(),q:n,a:e}),he.notes.length>300&&he.notes.shift(),Kt(),Je("note"),Rt("\u6536\u9032\u624B\u5E16\u4E86\u3002")},!1)};var Te={present:Math.random()<.45||location.search.includes("cat"),x:0,z:-6.85,g:null,head:null,tail:null,body:null,eyesOpen:null,eyesShut:null,ears:[],awake:0,purrT:0,twitch:0};if(Te.present){let n=Sn/8,e=[0,2,3,4,5,7][Math.floor(Math.random()*7)];Te.x=Tn+(e+.5)*n+(Math.random()-.5)*.6;let t=[{b:"#e49a52",s:"#c06f31",l:"#f8ecdb",k:"tabby"},{b:"#9a9893",s:"#64625e",l:"#efece6",k:"tabby"},{b:"#2b2827",s:null,l:"#f5f2ec",k:"tux"},{b:"#f6f1e8",s:null,l:"#fbf8f2",k:"calico"},{b:"#f1e6d3",s:"#e0c69e",l:"#fbf6ee",k:"tabby"}],i=t[Math.floor(Math.random()*t.length)],s=T=>(P,F,Y)=>{if(P.fillStyle=i.b,P.fillRect(0,0,F,Y),i.k==="tabby"){P.strokeStyle=i.s,P.globalAlpha=.55,P.lineCap="round";for(let L=1;L<20;L++){let H=L*Y/20+(Math.random()-.5)*3;P.lineWidth=1.5+Math.random()*2.5,P.beginPath(),P.moveTo(T?F*.42:0,H);for(let O=T?F*.42:0;O<=F*1.08;O+=12)P.lineTo(O,H+Math.sin(O*.08+L)*2.5);P.stroke()}P.globalAlpha=1}if(i.k==="calico")for(let[L,H]of T?[["#d98b3d",5],["#2f2b28",4]]:[["#d98b3d",2],["#2f2b28",1]])for(let O=0;O<H;O++)P.fillStyle=L,P.beginPath(),P.ellipse(T?Math.random()*F:F*.55+Math.random()*F*.4,Math.random()*Y*.5,18+Math.random()*16,12+Math.random()*10,Math.random()*3,0,7),P.fill();if(T){let L=P.createLinearGradient(F*.05,0,F*.45,0);L.addColorStop(0,"rgba(0,0,0,0)"),L.addColorStop(.3,i.l),L.addColorStop(.7,i.l),L.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=L,P.fillRect(F*.05,0,F*.4,Y)}for(let L=0;L<1500;L++)P.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.05)`,P.fillRect(Math.random()*F,Math.random()*Y,1,3)},r=Hn(256,128,s(!0)),a=Hn(256,128,s(!1));a.wrapS=Un,r.wrapS=Un;let o=new ht({map:r,roughness:.95}),l=ie(i.l,{r:.95}),c=ie("#e7a1a1",{r:.7}),h=ie("#1b1817",{r:.35}),u=new pn({color:"#ffffff"}),f=new Se,d=new Pe(1,28,20);d.rotateX(Math.PI/2);let g=new z(d,o);if(g.scale.set(.24,.15,.27),g.position.y=.14,f.add(g),i.k==="tux"||i.k==="calico"){let T=new z(new Pe(1,16,12),l);T.scale.set(.12,.1,.1),T.position.set(.04,.12,.17),f.add(T)}for(let[T,P]of[[.07,.25],[-.03,.255]]){let F=new z(new Pe(1,12,10),i.k==="tabby"&&i.b!=="#f1e6d3"?o:l);F.scale.set(.042,.03,.06),F.position.set(T,.03,P),f.add(F)}let x=new na([new S(-.02,.1,-.25),new S(-.2,.07,-.15),new S(-.25,.05,.05),new S(-.15,.045,.22),new S(.03,.045,.3)]),m=new so(x,40,.034,10);{let T=m.attributes.position;for(let P=0;P<T.count;P++){let F=Math.floor(P/11)/40,Y=1-F*.35,L=x.getPointAt(Math.min(1,F));T.setXYZ(P,L.x+(T.getX(P)-L.x)*Y,L.y+(T.getY(P)-L.y)*Y,L.z+(T.getZ(P)-L.z)*Y)}m.computeVertexNormals()}let p=new Se;f.add(p);let y=new z(m,o);p.add(y);let v=new z(new Pe(.023,10,8),i.k==="tux"?h:o);v.position.copy(x.getPointAt(1)),p.add(v);let M=new Se;M.position.set(.11,.16,.2),M.rotation.set(.05,.45,.18),f.add(M);let R=new ht({map:a,roughness:.95}),_=new z(new Pe(.115,24,18),R);_.scale.set(1.12,.94,1),M.add(_);for(let T of[-1,1]){let P=new z(new Pe(.038,12,10),l);P.position.set(T*.033,-.035,.088),P.scale.set(1,.85,.8),M.add(P)}let C=new z(new Pe(.012,8,6),c);C.scale.set(1.3,.8,.8),C.position.set(0,-.012,.113),M.add(C);for(let T of[-1,1]){let P=new Se;P.position.set(T*.068,.078,-.01),P.rotation.set(-.15,0,-T*.32),M.add(P),Te.ears.push(P);let F=new z(new Ti(.046,.088,12),R);F.scale.z=.55,F.position.y=.035,P.add(F);let Y=new z(new Ti(.03,.06,10),c);Y.scale.z=.4,Y.position.set(0,.03,.012),P.add(Y)}Te.eyesShut=new Se,Te.eyesOpen=new Se,M.add(Te.eyesShut),M.add(Te.eyesOpen);for(let T of[-1,1]){let P=new z(new Us(.017,.0035,6,14,Math.PI),h);P.rotation.z=Math.PI,P.position.set(T*.043,.016,.104),P.rotation.y=T*.25,Te.eyesShut.add(P);let F=new z(new Pe(1,12,10),h);F.scale.set(.017,.022,.01),F.position.set(T*.043,.012,.103),Te.eyesOpen.add(F);let Y=new z(new Pe(.0045,6,4),u);Y.position.set(T*.043+.005,.02,.112),Te.eyesOpen.add(Y)}Te.eyesOpen.visible=!1;let I=[];for(let T of[-1,1])for(let P of[-.008,.006])I.push(T*.05,-.02,.1,T*.13,-.02+P*2.2,.085);let E=new pt;E.setAttribute("position",new Ue(I,3)),M.add(new ea(E,new Is({color:"#f2efe8",transparent:!0,opacity:.7}))),f.scale.setScalar(1.15),f.position.set(Te.x,.75,Te.z),f.rotation.y=(Math.random()-.5)*1,dn(f),de.add(f),Object.assign(Te,{g:f,head:M,tail:p,body:g}),vs.push({x:Te.x,z:Te.z,r:.32})}function t0(n,e,t,i,s=3.4){let r=Math.max(2,Math.round(s/1.15));for(let[a,o,l,c]of[["lowpass",300,.7,.5],["bandpass",720,1.1,.42],["bandpass",1500,1.6,.12]]){let h=n.createBufferSource();h.buffer=t,h.loop=!0;let u=n.createBiquadFilter();u.type=a,u.frequency.value=o,u.Q.value=l;let f=n.createGain();f.gain.value=.55;let d=n.createOscillator();d.type="sine",d.frequency.value=25;let g=n.createGain();g.gain.value=.45,d.connect(g),g.connect(f.gain);let x=n.createGain();x.gain.setValueAtTime(0,i);for(let m=0;m<r;m++){let p=i+m*(s/r),y=s/r,v=m%2===0;x.gain.linearRampToValueAtTime(c*(v?.75:1),p+y*.18),x.gain.linearRampToValueAtTime(c*(v?.6:.85),p+y*.8),x.gain.linearRampToValueAtTime(c*.25,p+y*.98)}x.gain.linearRampToValueAtTime(0,i+s+.15),h.connect(u),u.connect(f),f.connect(x),x.connect(e),h.start(i,Math.random()*2),d.start(i),h.stop(i+s+.3),d.stop(i+s+.3)}}function US(n,e,t){let i=.62+Math.random()*.18,s=520+Math.random()*120,r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(s*.95,t),r.frequency.linearRampToValueAtTime(s*1.45,t+i*.35),r.frequency.linearRampToValueAtTime(s*1.1,t+i*.8),r.frequency.linearRampToValueAtTime(s*.85,t+i);let a=n.createOscillator();a.frequency.value=6;let o=n.createGain();o.gain.value=9,a.connect(o),o.connect(r.frequency);let l=n.createGain();l.gain.value=1;for(let[h,u,f]of[[900,6,.9],[1800,8,.55],[3e3,9,.22]]){let d=n.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(h*.8,t),d.frequency.linearRampToValueAtTime(h*1.15,t+i*.4),d.frequency.linearRampToValueAtTime(h*.9,t+i),d.Q.value=u;let g=n.createGain();g.gain.value=f,r.connect(d),d.connect(g),g.connect(l)}let c=n.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.32,t+.06),c.gain.setValueAtTime(.32,t+i*.55),c.gain.exponentialRampToValueAtTime(.001,t+i),l.connect(c),c.connect(e),r.start(t),a.start(t),r.stop(t+i+.05),a.stop(t+i+.05)}function NS(){if(Je("catpet"),Te.purrT=3.4,Rt(["\u547C\u5695\u2026\u2026\u547C\u5695\u2026\u2026","\u8C93\u7787\u8D77\u4E86\u773C\u775B\u3002","\u7260\u7FFB\u4E86\u500B\u8EAB\uFF0C\u53C8\u7761\u4E86\u3002","\u55B5\uFF5E","\u7260\u628A\u982D\u9760\u904E\u4F86\u4E86\u3002"][Math.floor(Math.random()*5)],2800),D.ctx&&D.on&&D.ctx.state==="running"){let n=D.ctx,e=n.currentTime+.03,t=n.createGain();t.gain.value=1,fn(t,.12),Math.random()<.5?(US(n,t,e),t0(n,t,D.noiseBuf,e+.75,3.2)):t0(n,t,D.noiseBuf,e,3.4),setTimeout(()=>t.disconnect(),5e3)}}function FS(n,e){if(!Te.present)return;let t=We.position,i=Math.hypot(t.x-Te.x,t.z-Te.z)<2.4&&t.y>.5;if(i&&Je("cat"),Te.awake+=((i||Te.purrT>0?1:0)-Te.awake)*(1-Math.exp(-n*3)),Te.body.scale.y=.15*(1+Math.sin(e*1.5)*.035),Te.head.position.y=.16+Te.awake*.06,Te.head.rotation.x=.05-Te.awake*.22,Te.head.rotation.z=.18*(1-Te.awake),i){let s=Math.atan2(t.x-Te.x,t.z-Te.z)-Te.g.rotation.y;Te.head.rotation.y+=(xt(((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,-.9,.9)-Te.head.rotation.y)*n*3}else Te.head.rotation.y+=(.45-Te.head.rotation.y)*n*2;Te.eyesOpen.visible=Te.awake>.5&&Te.purrT<=0,Te.eyesShut.visible=!Te.eyesOpen.visible,Te.twitch-=n,Te.twitch<=0&&(Te.twitch=3+Math.random()*6,Te.earT=.25),Te.earT>0?(Te.earT-=n,Te.ears[Math.random()<.5?0:1].rotation.x=-.15-Math.sin(Te.earT*40)*.25):Te.ears.forEach(s=>s.rotation.x+=(-.15-s.rotation.x)*n*6),Te.tail.rotation.y=Math.sin(e*(Te.purrT>0?3:.7))*(Te.purrT>0?.12:.03),Te.purrT>0&&(Te.purrT-=n)}var pr={g:null,state:"perch",t:0,home:new S(nn.x,1.79,nn.z),away:new S(nn.x+5,6.5,nn.z+7),wings:[],enabled:Math.random()<.7};{let n=new Se,e=ie("#8a6a4a",{r:.9}),t=ie("#6e5338"),i=ie("#e9dccb"),s=new z(new Pe(1,10,8),e);s.scale.set(.055,.05,.075),n.add(s);let r=new z(new Pe(1,10,8),i);r.scale.set(.04,.035,.05),r.position.set(0,-.015,.02),n.add(r);let a=new z(new Pe(.035,10,8),e);a.position.set(0,.045,.05),n.add(a),pr.head=a;let o=new z(new Ti(.01,.03,5),ie("#d89b3a"));o.rotation.x=Math.PI/2,o.position.set(0,.04,.09),n.add(o);let l=new z(new Tt(.03,.006,.06),t);l.position.set(0,.01,-.08),l.rotation.x=.4,n.add(l);for(let c of[-1,1]){let h=new z(new Tt(.07,.005,.05),t);h.position.set(c*.045,.015,0),n.add(h),pr.wings.push(h)}n.position.copy(pr.home),n.rotation.y=Math.PI,dn(n,!0,!1),de.add(n),pr.g=n}function zS(n,e){if(!(pr.enabled&&Ve==="spring"&&dt<.5)){pr.g.visible=!1;return}let i=pr,s=We.position;i.t+=n;let r=Math.hypot(s.x-nn.x,s.z-nn.z);if(i.state==="perch")r<6&&Wo()&&Je("bird"),i.g.visible=!0,i.g.position.copy(i.home),i.g.position.y+=Math.max(0,Math.sin(e*5))*0,Math.random()<n*.5&&(i.g.rotation.y+=(Math.random()-.5)*1.6),i.head.rotation.y=Math.sin(e*2.3)*.4,i.wings.forEach(a=>a.rotation.z=0),r<2.6&&(i.state="fly",i.t=0,D.ctx&&D.on&&D.ctx.state==="running"&&J0(D.ctx.currentTime+.02));else if(i.state==="fly"||i.state==="back"){let a=Math.min(1,i.t/2.4),o=i.state==="fly"?a:1-a,l=o*o*(3-2*o);i.g.position.lerpVectors(i.home,i.away,l),i.g.position.y+=Math.sin(l*Math.PI)*.8,i.g.rotation.y=Math.atan2(i.away.x-i.home.x,i.away.z-i.home.z)+(i.state==="back"?Math.PI:0),i.wings.forEach((c,h)=>c.rotation.z=Math.sin(e*38)*.9*(h?1:-1)),a>=1&&(i.state==="fly"?(i.state="gone",i.t=0,i.g.visible=!1):(i.state="perch",i.t=0))}else i.state==="gone"&&i.t>40&&r>5&&(i.state="back",i.t=0,i.g.visible=!0)}he.met=he.met||{};var n0={first:"\u7B2C\u4E00\u6B21\u8D70\u9032\u5EAD\u9662",bird:"\u71C8\u7C60\u4E0A\u7684\u5C0F\u9CE5",cat:"\u7DE3\u5074\u7761\u8457\u7684\u8C93",catpet:"\u6478\u4E86\u6478\u8C93",frog:"\u624B\u6C34\u7F3D\u908A\u7684\u9752\u86D9",furin:"\u807D\u898B\u98A8\u9234",dragonfly:"\u9EC3\u660F\u7684\u7D05\u873B\u8713",rainbow:"\u96E8\u5F8C\u7684\u5F69\u8679",mist:"\u6E05\u6668\u7684\u8584\u9727",tanuki:"\u4E00\u9583\u800C\u904E\u7684\u5C0F\u72F8\u8C93",fullmoon:"\u6EFF\u6708\u4E0B\u5750\u5728\u7DE3\u5074",snowsit:"\u96EA\u591C\u5750\u5728\u7DE3\u5074",sakura:"\u5750\u770B\u4E00\u5834\u6AFB\u82B1",rainsit:"\u5750\u8457\u807D\u4E86\u4E00\u5834\u96E8",momiji:"\u5750\u770B\u7D05\u8449",fireflies:"\u590F\u591C\u7684\u87A2\u706B\u87F2",koi:"\u9935\u4E86\u9326\u9BC9",wash:"\u5728\u624B\u6C34\u7F3D\u6D17\u4E86\u624B",leaf:"\u5BEB\u4E0B\u7B2C\u4E00\u7247\u8449\u5B50",tea:"\u9EDE\u4E86\u4E00\u7897\u8336",omikuji:"\u62BD\u4E86\u4E00\u5F35\u7C64",listen:"\u9589\u4E0A\u773C\u775B\u807D\u4E86\u4E00\u5206\u9418",zazen:"\u975C\u5750\u5230\u980C\u7F3D\u97FF\u8D77",garden:"\u6392\u4E86\u81EA\u5DF1\u7684\u5EAD\u9662",sky:"\u62AC\u982D\u671B\u8457\u5929\u7A7A",mood:"\u8A18\u4E0B\u4E86\u5FC3\u60C5\u5929\u6C23",bowls:"\u5750\u5728\u980C\u7F3D\u524D",bowlrub:"\u8B93\u980C\u7F3D\u5531\u8D77\u6B4C\u4F86",bowllisten:"\u807D\u8457\u7F3D\u8072\u76F4\u5230\u6D88\u5931",bowlbreath:"\u8DDF\u8457\u7F3D\u8072\u547C\u5438",note:"\u6536\u9032\u4E00\u53E5\u81EA\u5DF1\u7684\u8A71",photo:"\u62CD\u4E0B\u4E00\u5F35\u5EAD\u9662",bansho:"\u807D\u898B\u508D\u665A\u7684\u9418\u8072",share:"\u628A\u5EAD\u9662\u5206\u4EAB\u7D66\u5225\u4EBA",visitcode:"\u770B\u4E86\u5225\u4EBA\u7684\u5EAD\u9662",stars:"\u591C\u88E1\u671B\u8457\u6EFF\u5929\u661F\u661F",meteor:"\u770B\u898B\u4E00\u9846\u6D41\u661F","mid-autumn":"\u4E2D\u79CB\u7684\u7CF0\u5B50\u8207\u8292\u8349",lantern:"\u5143\u5BB5\u5C4B\u7C37\u4E0B\u7684\u71C8",tanabata:"\u4E03\u5915\u5BEB\u4E86\u4E00\u500B\u9858\u671B"};function Wo(){return!ed&&qs==="auto"&&Ve===Sf()}function Je(n){he.met[n]||(he.met[n]=Date.now(),he.bookNew=!0,N("bookDot").classList.add("on"),Kt())}var mo="met",lg={sun:"#e6b84a",cloud:"#a7b0b5",rain:"#5f86b0",fog:"#cfd5d6",snow:"#eef3f7"};function sd(n){Ho(),he.bookNew=!1,N("bookDot").classList.remove("on"),Kt(),n&&(mo=n),document.querySelectorAll("#bookTabs button").forEach(s=>s.classList.toggle("on",s.dataset.t===mo)),N("bookStats").textContent=`\u4F86\u904E ${va} \u6B21\u30FB\u5BEB\u904E ${he.leafCount||0} \u7247\u8449\u5B50\u30FB\u975C\u5750 ${he.zazenMin||0} \u5206\u9418`;let e=N("bookList"),t=N("bookYear");e.style.display="",t.style.display="none";let i=s=>{let r=new Date(s);return`${r.getMonth()+1}\u6708${r.getDate()}\u65E5`};if(mo==="met"){let s=Object.entries(he.met).filter(([r])=>n0[r]).sort((r,a)=>r[1]-a[1]);e.innerHTML=s.map(([r,a])=>`<li><span class="d">${i(a)}</span>${n0[r]}</li>`).join("")+'<li class="blank">\u3000</li><li class="blank">\u3000</li><li class="blank">\u3000</li>'}else if(mo==="mood"){let s=Object.keys(he.moods).sort((r,a)=>new Date(r.replace(/-/g,"/"))-new Date(a.replace(/-/g,"/"))).slice(-28);e.innerHTML=s.length?'<li class="moodrow">'+s.map(r=>{let a=he.moods[r],o=r.split("-");return`<span class="mchip" style="background:${lg[a]}"><b>${Cf[a][0]}</b><i>${o[1]}/${o[2]}</i></span>`}).join("")+"</li>":'<li class="empty">\u9084\u6C92\u6709\u8A18\u4E0B\u5FC3\u60C5\u5929\u6C23\u3002</li>'}else mo==="notes"?e.innerHTML=he.notes.length?he.notes.slice().reverse().map(s=>`<li class="note"><span class="d">${i(s.d)}</span><small>${i0(s.q||"")}</small><span>${i0(s.a)}</span></li>`).join(""):'<li class="empty">\u9084\u6C92\u6709\u6536\u9032\u4F86\u7684\u77ED\u53E5\u3002\u8D77\u8EAB\u6642\u7684\u63D0\u554F\uFF0C\u53EF\u4EE5\u6309\u300C\u5BEB\u4E0B\u4F86\u300D\u3002</li>':(e.style.display="none",t.style.display="block",BS());N("book").classList.remove("hidden")}var i0=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.querySelectorAll("#bookTabs button").forEach(n=>n.onclick=()=>sd(n.dataset.t));function BS(){let n=N("yearCanvas"),e=Math.min(2,devicePixelRatio||1),t=Math.min(280,innerWidth*.72);n.width=t*e,n.height=t*e,n.style.width=t+"px",n.style.height=t+"px";let i=n.getContext("2d");i.scale(e,e),i.clearRect(0,0,t,t);let s=new Date,r=s.getFullYear(),a=r%4===0&&r%100!==0||r%400===0?366:365,o=t/2,l=t/2,c=t*.4,h=new Set(he.days.filter(f=>f.startsWith(r+"-"))),u=0;for(let f=0;f<a;f++){let d=new Date(r,0,1+f),g=r+"-"+(d.getMonth()+1)+"-"+d.getDate(),x=f/a*Math.PI*2-Math.PI/2,m=o+Math.cos(x)*c,p=l+Math.sin(x)*c,y=h.has(g),v=he.moods[g];y&&u++,i.beginPath(),i.arc(m,p,y?3.6:1.6,0,7),i.fillStyle=y?v?lg[v]:"#6e5038":"rgba(110,100,85,.25)",i.fill(),y&&v==="snow"&&(i.strokeStyle="#9aa6ad",i.lineWidth=.8,i.stroke()),d.toDateString()===s.toDateString()&&(i.beginPath(),i.arc(m,p,7,0,7),i.strokeStyle="#a33f2c",i.lineWidth=1.4,i.stroke())}i.fillStyle="#8a7f72",i.font='11px "Noto Serif TC",serif',i.textAlign="center",i.textBaseline="middle";for(let f=0;f<12;f++){let d=(new Date(r,f,15)-new Date(r,0,1))/864e5,g=d/a*Math.PI*2-Math.PI/2;i.fillText(f+1+"\u6708",o+Math.cos(g)*(c-22),l+Math.sin(g)*(c-22))}i.fillStyle="#2b2824",i.font='600 22px "Noto Serif TC",serif',i.fillText(r,o,l-10),i.font='13px "Noto Serif TC",serif',i.fillStyle="#6e655a",i.fillText(`\u4F86\u904E ${u} \u5929`,o,l+16)}N("bookBtn").onclick=n=>{n.stopPropagation(),sd()};N("bookClose").onclick=()=>N("book").classList.add("hidden");he.bookNew&&N("bookDot").classList.add("on");Je("first");function Mc(n){let e=new Date,t=e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate(),i=0;for(let s of n)i=(i*31+s.charCodeAt(0))%9973;return bo(t%10007,i,t%97)}function HS(n){return!yo.mist||n<4.6||n>9.6?0:n<6.6?Nn.smoothstep(n,4.6,6.2):1-Nn.smoothstep(n,7.2,9.6)}var s0=new rr,r0=new Ie;function a0(n){return r0.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),s0.setFromProjectionMatrix(r0),s0.containsPoint(n)}var cg=[];for(let n=0;n<12;n++){let e=new Hi(new Ei({map:Er,color:"#f2f4f3",transparent:!0,opacity:0,depthWrite:!1}));e.scale.set(9+le()*5,2.4+le()*1.2,1),e.position.set(-13+le()*26,.5+le()*.8,-3+le()*13),de.add(e),cg.push(e)}var Yt={a:0,target:0,until:0,mesh:null};{let i=[],s=[],r=[];for(let l=0;l<=72;l++){let c=l/72*Math.PI;for(let[h,u]of[[30,0],[33.5,1]])i.push(Math.cos(c)*h,Math.sin(c)*h,0),s.push(l/72,u)}for(let l=0;l<72;l++){let c=l*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}let a=new pt;a.setAttribute("position",new Ue(i,3)),a.setAttribute("uv",new Ue(s,2)),a.setIndex(r);let o=Hn(4,64,(l,c,h)=>{let u=l.createLinearGradient(0,h,0,0);[["rgba(150,80,200,0)",0],["rgba(140,90,220,.8)",.12],["rgba(80,120,230,.85)",.28],["rgba(90,190,120,.85)",.46],["rgba(240,220,90,.9)",.62],["rgba(245,150,70,.9)",.78],["rgba(230,80,70,.8)",.9],["rgba(230,80,70,0)",1]].forEach(([f,d])=>u.addColorStop(d,f)),l.fillStyle=u,l.fillRect(0,0,c,h)});o.wrapS=o.wrapT=On,Yt.mesh=new z(a,new pn({map:o,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:Mt})),Yt.mesh.position.set(-4,-14,82),Yt.mesh.scale.set(1.1,1,1),Yt.mesh.visible=!1,de.add(Yt.mesh)}function OS(){Yt.target=.42,Yt.until=performance.now()+15e4}function hg(){ds.next=performance.now()+(ds.on?180+Math.random()*180:120+Math.random()*120)*1e3}hg();var Wi={g:null,croakT:3};{let n=new Se,e=ie("#5f8f3a",{r:.6}),t=ie("#a9c46a",{r:.6}),i=ie("#151512",{r:.3}),s=new z(new Pe(1,12,10),e);s.scale.set(.07,.045,.08),s.position.y=.04,n.add(s);let r=new z(new Pe(1,10,8),t);r.scale.set(.055,.03,.06),r.position.set(0,.025,.02),n.add(r);for(let a of[-1,1]){let o=new z(new Pe(.02,8,6),e);o.position.set(a*.035,.085,.045),n.add(o);let l=new z(new Pe(.01,6,4),i);l.position.set(a*.04,.09,.06),n.add(l);let c=new z(new Pe(1,8,6),e);c.scale.set(.03,.02,.05),c.position.set(a*.065,.02,-.03),n.add(c)}n.position.set(Jt.x+.6,.22,Jt.z+.4),n.rotation.y=-.6,dn(n,!0,!1),de.add(n),Wi.g=n}var Fn={g:null,sway:0,next:performance.now()+5e3};{let n=new Se,e=Sn/8;n.position.set(Tn+4.5*e+.3,3.86,-4.72);let t=new z(new He(.003,.003,.42,4),ie("#e8e2d2"));t.position.y=-.21,n.add(t);let i=new Se;i.position.y=-.42,n.add(i),Fn.bell=i;let s=new z(new Pe(.07,16,10,0,Math.PI*2,0,Math.PI*.55),new ht({color:"#cfe4ee",transparent:!0,opacity:.55,roughness:.05,metalness:.1,side:Mt}));s.position.y=-.07,i.add(s);let r=new z(new Pe(.012,6,4),ie("#c0392b"));r.position.set(0,-.035,.06),i.add(r);let a=new z(new He(.002,.002,.16,4),ie("#e8e2d2"));a.position.y=-.15,i.add(a);let o=new z(new mn(.06,.2),ie("#d9eef2",{side:Mt}));o.position.y=-.32,i.add(o),Fn.paper=o,de.add(n),Fn.g=n}function rd(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx.currentTime,e=2150+Math.random()*450;for(let[t,i,s]of[[1,.05,1.8],[2.41,.022,1],[3.95,.01,.6]]){let r=D.ctx.createOscillator(),a=D.ctx.createGain();r.type="sine",r.frequency.value=e*t,a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(i,n+.004),a.gain.exponentialRampToValueAtTime(2e-4,n+s),r.connect(a),fn(a,.55),r.start(n),r.stop(n+s+.1)}if(Math.random()<.5){let t=n+.22+Math.random()*.2,i=D.ctx.createOscillator(),s=D.ctx.createGain();i.type="sine",i.frequency.value=e*1.06,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.03,t+.004),s.gain.exponentialRampToValueAtTime(2e-4,t+1.2),i.connect(s),fn(s,.55),i.start(t),i.stop(t+1.3)}xs("\u98A8\u9234"),Ve==="summer"&&Wo()&&Je("furin")}var ug=[];for(let n=0;n<7;n++){let e=new Se,t=ie("#c63b25",{r:.5}),i=new pn({color:"#f3f0e6",transparent:!0,opacity:.35,side:Mt,depthWrite:!1}),s=new z(new He(.008,.005,.14,6),t);s.rotation.x=Math.PI/2,s.position.z=-.04,e.add(s);let r=new z(new Pe(.014,8,6),t);r.position.z=.035,e.add(r);let a=[];for(let[o,l]of[[-1,.012],[1,.012],[-1,-.012],[1,-.012]]){let c=new z(new mn(.08,.018),i);c.rotation.x=-Math.PI/2,c.position.set(o*.042,.004,l),e.add(c),a.push(c)}e.scale.setScalar(1.8),e.visible=!1,de.add(e),ug.push({g:e,wings:a,x:-6+le()*12,y:.8,z:le()*8,tx:0,ty:.8,tz:3,hover:0,ph:le()*6})}var _f={g:null,state:"none",t:0,seen:0,done:!1,spot:null};{let n=new Se,e=ie("#7a5a3c",{r:.95}),t=ie("#a07a52",{r:.95}),i=ie("#2a221b",{r:.8}),s=ie("#e6dac4",{r:.9}),r=new z(new Pe(1,14,10),e);r.scale.set(.17,.15,.21),r.position.y=.15,n.add(r);let a=new Se;a.position.set(0,.27,.17),n.add(a),_f.head=a,a.add(new z(new Pe(.11,14,12),t));for(let h of[-1,1]){let u=new z(new Pe(1,10,8),i);u.scale.set(.045,.032,.03),u.position.set(h*.045,.01,.085),a.add(u);let f=new z(new Pe(.011,6,4),ie("#0c0b0a",{r:.2}));f.position.set(h*.045,.015,.112),a.add(f);let d=new z(new Pe(.03,8,6),i);d.position.set(h*.07,.085,-.01),a.add(d)}let o=new z(new Pe(.04,10,8),s);o.position.set(0,-.03,.1),a.add(o);let l=new z(new Pe(.012,6,4),i);l.position.set(0,-.015,.14),a.add(l);let c=new z(new He(.05,.035,.22,10),e);c.rotation.x=1.1,c.position.set(0,.1,-.22),n.add(c),n.scale.setScalar(1.35),n.visible=!1,dn(n,!0,!1),de.add(n),_f.g=n}var o0=[{x:-12.3,z:4.4,ry:Math.PI/2,dx:-1,dz:0},{x:-2.5,z:10.55,ry:Math.PI,dx:0,dz:1},{x:12.3,z:1.6,ry:-Math.PI/2,dx:1,dz:0}],fg={"mid-autumn":["\u4E2D\u79CB","\u7DE3\u5074\u4E0A\u64FA\u4E86\u7CF0\u5B50\u548C\u8292\u8349\uFF0C\u665A\u4E0A\u8A18\u5F97\u62AC\u982D\u770B\u770B\u6708\u4EAE\u3002"],lantern:["\u5143\u5BB5","\u5C4B\u7C37\u4E0B\u639B\u8D77\u4E86\u71C8\uFF0C\u591C\u88E1\u6703\u4EAE\u8D77\u4F86\u3002"],tanabata:["\u4E03\u5915","\u7AF9\u5B50\u4E0A\u639B\u8457\u9858\u671B\uFF0C\u4F60\u4E5F\u5BEB\u4E00\u5F35\u5427\u3002"]},Ai=(()=>{let n=location.hash.slice(1);if(fg[n])return{kind:n,preview:!0};try{let e=new Intl.DateTimeFormat("zh-TW-u-ca-chinese",{month:"numeric",day:"numeric"}).formatToParts(new Date),t=(e.find(r=>r.type==="month")||{}).value||"",i=parseInt(t.replace(/\D/g,"")),s=parseInt((e.find(r=>r.type==="day")||{}).value);if(!/閏|bis/.test(t)){if(i===8&&s>=13&&s<=16)return{kind:"mid-autumn"};if(i===1&&s>=13&&s<=16)return{kind:"lantern"};if(i===7&&s>=5&&s<=8)return{kind:"tanabata"}}}catch{}return{kind:null}})(),_i={lanterns:[],glows:[],strips:[]},pa={x:11.15,z:-2.85};if(Ai.kind==="mid-autumn"){let n=new Se,e=Sn/8;n.position.set(Tn+3.5*e,.75,-6.75);let t=ie("#d8bc8a",{r:.8}),i=ie("#f7f3ea",{r:.7}),s=new z(new Tt(.34,.12,.34),t);s.position.y=.06,n.add(s);let r=new z(new Tt(.4,.02,.4),t);r.position.y=.13,n.add(r);let a=new Pe(.045,12,10);[[3,.185],[2,.255],[1,.325]].forEach(([h,u])=>{for(let f=0;f<h;f++)for(let d=0;d<h;d++){let g=new z(a,i);g.position.set((f-(h-1)/2)*.088,u,(d-(h-1)/2)*.088),n.add(g)}});let o=new z(new He(.06,.075,.34,12),ie("#4a3b30",{r:.4}));o.position.set(.55,.17,.05),n.add(o);let l=ie("#b9a477"),c=ie("#e3d6b5",{r:1});for(let h=0;h<6;h++){let u=(h/6-.5)*1.4,f=new S(.55+Math.sin(u)*.35,1.05+le()*.25,.05+Math.cos(u*2)*.08);n.add(Yi(new S(.55,.3,.05),f,.006,.004,l));let d=new z(new Pe(1,8,6),c);d.scale.set(.035,.16,.035),d.position.copy(f).add(new S(Math.sin(u)*.06,.08,0)),d.rotation.z=-u*.6-.3,n.add(d)}dn(n),de.add(n),_i.center=n.position.clone()}if(Ai.kind==="lantern"){let n=Sn/8,e=ie("#1c1a18");for(let t=0;t<8;t++){let i=Tn+(t+.5)*n,s=new Se;s.position.set(i,3.86,-4.62);let r=new z(new He(.004,.004,.4,4),e);r.position.y=-.2,s.add(r);let a=new ht({color:"#c8382a",emissive:new ce("#ff6a3a"),emissiveIntensity:.5,roughness:.8}),o=new z(new Pe(1,16,12),a);o.scale.set(.2,.25,.2),o.position.y=-.62,s.add(o);for(let h of[-.38,-.86]){let u=new z(new He(.08,.08,.04,12),e);u.position.y=h,s.add(u)}let l=new z(new He(.012,.02,.18,6),ie("#d9a531"));l.position.y=-.97,s.add(l);let c=new Hi(new Ei({map:Er,color:"#ff9a5a",transparent:!0,opacity:.2,depthWrite:!1,blending:_s}));c.scale.set(1.3,1.3,1),c.position.y=-.62,s.add(c),de.add(s),_i.lanterns.push({g:s,lm:a,ph:le()*6}),_i.glows.push(c)}}function kS(n,e){let t=document.createElement("canvas");t.width=64,t.height=256;let i=t.getContext("2d");if(i.fillStyle=e,i.fillRect(0,0,64,256),i.fillStyle="rgba(255,255,255,.25)",i.fillRect(0,0,64,6),n){let r=[...n].slice(0,16),a=r.length<=6?30:r.length<=10?22:16;i.font=`600 ${a}px "Noto Serif TC",serif`,i.fillStyle="rgba(40,32,28,.88)",i.textAlign="center",i.textBaseline="top",r.forEach((o,l)=>i.fillText(o,32,14+l*(a+2)))}let s=new Vn(t);return s.colorSpace=Ut,s}var l0=["#f2c94c","#e87a7a","#7fb3e0","#9ccf8a","#f3f0e8","#c9a0dc"],Rf=[];function Af(n,e){let t=Rf[e%Rf.length],i=l0[Math.floor(Math.random()*l0.length)],s=new Se;s.position.copy(t).add(new S((Math.random()-.5)*.3,0,(Math.random()-.5)*.3));let r=new z(new mn(.11,.42),new ht({map:kS(n,i),side:Mt,roughness:.9}));r.position.y=-.24,s.add(r),s.rotation.y=Math.random()*6,de.add(s),_i.strips.push({g:s,ph:Math.random()*6})}if(Ai.kind==="tanabata"){let n=new Se,e=ie("#7f9a4a",{r:.6}),t=ie("#6f9a3e",{r:.8,side:Mt});n.position.set(pa.x,0,pa.z);let i=new S(.25,3.9,.05);n.add(Yi(new S(0,0,0),i,.06,.03,e));for(let a=1;a<9;a++){let o=new z(new Us(.055-a*.003,.01,5,12),e);o.rotation.x=Math.PI/2,o.position.set(i.x*a/9,i.y*a/9,i.z*a/9),n.add(o)}let s=new mn(.06,.32);s.translate(0,.16,0);for(let a=0;a<7;a++){let o=1.6+a*.33,l=a*2.3,c=new S(i.x*o/3.9,o,0),h=c.clone().add(new S(Math.cos(l)*.75,.25,Math.sin(l)*.75));n.add(Yi(c,h,.014,.008,e)),Rf.push(h.clone().add(n.position));for(let u=0;u<6;u++){let f=new z(s,t);f.position.copy(c).lerp(h,.4+u*.12),f.rotation.set(.9+Math.random()*.8,Math.random()*6,.4),n.add(f)}}dn(n),de.add(n),vs.push({x:pa.x,z:pa.z,r:.3});for(let a=0;a<9;a++)Af("",a);let r=new Date().getFullYear();he.wishes=he.wishes&&he.wishes.year===r?he.wishes:{year:r,list:[]},he.wishes.list.forEach((a,o)=>Af(a,o+3))}function GS(n){Af(n,_i.strips.length+2),Ai.preview||(he.wishes.list.push(n),Je("tanabata"),Kt()),Rt("\u9858\u671B\u639B\u4E0A\u53BB\u4E86\u3002",2600),D.ctx&&D.on&&rd()}function VS(){if(!Ai.kind)return;let[n,e]=fg[Ai.kind];N("scTitle").textContent=n,N("scText").textContent=e;let t=N("seasonCard");t.classList.add("show"),clearTimeout(qc),qc=setTimeout(()=>t.classList.remove("show"),6e3)}var ui={x:Tn+1.5*(Sn/8),z:-6.95};{let n=new Se;n.position.set(ui.x,.75,ui.z);let e=ie("#b48a55",{r:.75}),t=ie("#5a3f2c",{r:.8}),i=ie("#a8352a",{r:.7}),s=new z(new He(.15,.16,.42,6),e);s.position.y=.21,n.add(s);let r=new z(new He(.162,.162,.06,6),i);r.position.y=.3,n.add(r);let a=new z(new He(.16,.16,.03,6),t);a.position.y=.435,n.add(a);let o=new z(new Tt(.016,.2,.016),ie("#ecdcb5"));o.position.set(.03,.52,0),o.rotation.z=.18,n.add(o);let l=Hn(256,384,(d,g,x)=>{d.fillStyle="#f3ead6",d.fillRect(0,0,g,x),d.strokeStyle="#6e5038",d.lineWidth=14,d.strokeRect(7,7,g-14,x-14),d.fillStyle="#a8352a",d.font='600 150px "Noto Serif TC",serif',d.textAlign="center",d.textBaseline="middle",d.fillText("\u7C64",g/2,x*.4),d.fillStyle="#4a3b30",d.font='600 34px "Noto Serif TC",serif',d.fillText("\u6BCF\u65E5\u4E00\u5F35",g/2,x*.78)});l.wrapS=l.wrapT=On;let c=new z(new Tt(.04,.75,.04),t);c.position.set(-.38,.375,.05),n.add(c);let h=new z(new Tt(.34,.5,.025),[t,t,t,t,new ht({map:l,roughness:.85,emissive:new ce("#fff3dc"),emissiveMap:l,emissiveIntensity:0}),t]);h.position.set(-.38,.95,.07),h.rotation.y=.15,n.add(h),ui.board=h;let u=new z(new Tt(.44,.03,.12),t);u.position.set(-.38,1.22,.07),u.rotation.y=.15,n.add(u);let f=.48;for(let d of[-.25,.25]){let g=new z(new Tt(.035,.62,.035),t);g.position.set(f+d,.31,0),n.add(g)}for(let d of[.42,.58]){let g=new z(new He(.006,.006,.5,4),ie("#d9c8a0"));g.rotation.z=Math.PI/2,g.position.set(f,d,0),n.add(g);for(let x=0;x<5;x++){let m=new z(new Tt(.035,.06,.012),ie("#fbf8f0",{r:.9}));m.position.set(f-.2+x*.1+(Math.random()-.5)*.03,d-.035,0),m.rotation.z=(Math.random()-.5)*.5,n.add(m)}}dn(n),de.add(n),vs.push({x:ui.x,z:ui.z,r:.2},{x:ui.x+f,z:ui.z,r:.25},{x:ui.x-.38,z:ui.z+.05,r:.18})}var cf=["\u4ECA\u5929\u8A18\u5F97\u559D\u6C34\u3002","\u4ECA\u5929\u53EF\u4EE5\u5C0D\u81EA\u5DF1\u5BEC\u5BB9\u4E00\u9EDE\u3002","\u6162\u6162\u4F86\uFF0C\u4E5F\u662F\u4E00\u7A2E\u524D\u9032\u3002","\u7D2F\u4E86\u5C31\u4F11\u606F\uFF0C\u4E0D\u7528\u89E3\u91CB\u3002","\u4ECA\u5929\u627E\u4E00\u500B\u4EBA\uFF0C\u8AAA\u8072\u8B1D\u8B1D\u3002","\u62AC\u982D\u770B\u770B\u5929\u7A7A\u5427\u3002","\u6709\u4E9B\u4E8B\uFF0C\u653E\u8457\u4E5F\u6C92\u95DC\u4FC2\u3002","\u4ECA\u5929\u597D\u597D\u5403\u4E00\u9813\u98EF\u3002","\u4F60\u5DF2\u7D93\u505A\u5F97\u5F88\u597D\u4E86\u3002","\u8D70\u6162\u4E00\u9EDE\uFF0C\u6703\u770B\u898B\u66F4\u591A\u3002","\u4ECA\u5929\u65E9\u4E00\u9EDE\u7761\u3002","\u7559\u4E00\u9EDE\u6642\u9593\u7D66\u81EA\u5DF1\u3002","\u4E0D\u5B8C\u7F8E\uFF0C\u4E5F\u5F88\u597D\u3002","\u4ECA\u5929\u5C0D\u8EAB\u908A\u7684\u4EBA\u7B11\u4E00\u4E0B\u3002","\u6DF1\u547C\u5438\u4E09\u6B21\uFF0C\u518D\u958B\u59CB\u3002","\u60F3\u5FF5\u8AB0\uFF0C\u5C31\u8DDF\u4ED6\u8AAA\u5427\u3002","\u4ECA\u5929\u4E0D\u7528\u6025\u8457\u56DE\u7B54\u3002","\u628A\u4E00\u4EF6\u5C0F\u4E8B\u505A\u597D\u5C31\u597D\u3002","\u4F60\u7684\u52AA\u529B\uFF0C\u6709\u4EBA\u770B\u898B\u3002","\u8AAA\u300C\u6211\u4E0D\u77E5\u9053\u300D\uFF0C\u4E5F\u6C92\u95DC\u4FC2\u3002","\u4E0B\u96E8\u5929\uFF0C\u4E5F\u6709\u4E0B\u96E8\u5929\u7684\u597D\u3002","\u7D66\u4ECA\u5929\u7684\u81EA\u5DF1\u4E00\u9EDE\u638C\u8072\u3002","\u4ECA\u5929\u51FA\u53BB\u8D70\u4E00\u8D70\u3002","\u5148\u7167\u9867\u597D\u81EA\u5DF1\u3002","\u6709\u9EDE\u4E82\uFF0C\u4E5F\u662F\u751F\u6D3B\u7684\u6A23\u5B50\u3002","\u4ECA\u5929\u807D\u4E00\u9996\u559C\u6B61\u7684\u6B4C\u3002","\u8A18\u5F97\u4F38\u5C55\u4E00\u4E0B\u80A9\u8180\u3002","\u5C11\u770B\u4E00\u9EDE\u87A2\u5E55\uFF0C\u591A\u770B\u4E00\u9EDE\u9060\u65B9\u3002"];function Yc(){let n=new Date;return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()}function WS(){let n=Yc(),e=!1;if(he.kuji&&he.kuji.date===n)e=!0;else{let i;do i=Math.floor(Math.random()*cf.length);while(he.kuji&&i===he.kuji.i&&cf.length>1);he.kuji={date:n,i},Je("omikuji"),Kt()}if(D.ctx&&D.on&&D.ctx.state==="running"){let i=D.ctx.currentTime;for(let s=0;s<7;s++)Pi(380+Math.random()*160,300,i+s*.07,.05,.04,"triangle",.2);Ci(i+.7,.35,4200,.8,.03,.2)}let t=new Date;N("kujiText").textContent=cf[he.kuji.i],N("kujiDate").textContent=`${t.getMonth()+1}\u6708${t.getDate()}\u65E5`,N("kujiNote").textContent=e?"\u4ECA\u5929\u5DF2\u7D93\u62BD\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\u770B\u770B\u3002":"",setTimeout(()=>N("kujiCard").classList.add("show"),e?0:650)}N("kujiOk").onclick=()=>N("kujiCard").classList.remove("show");var j={on:!1,stage:"",prog:0,g:null,foam:null,liq:null,whisk:null,down:null,lx:0,ly:0,acc:0,t:0,base:new S,wx:0,wz:0,idle:0};{let n=new Se,e=[[0,0],[.045,0],[.05,.012],[.09,.03],[.108,.07],[.112,.11],[.103,.108],[.088,.06],[.045,.034],[0,.03]].map(([h,u])=>new $(h,u)),t=new z(new ja(e,40),new ht({color:"#4a3326",roughness:.35,metalness:.05,side:Mt}));n.add(t),j.liq=new z(new Oi(.099,36),new ht({color:"#3f5f2c",roughness:.3})),j.liq.rotation.x=-Math.PI/2,j.liq.position.y=.094,n.add(j.liq);let i=Hn(128,128,(h,u,f)=>{h.fillStyle="#b8cf7a",h.fillRect(0,0,u,f);for(let d=0;d<900;d++){let g=Math.random()*2.2+.4;h.fillStyle=`rgba(${225+Math.random()*30},240,${190+Math.random()*30},${.25+Math.random()*.4})`,h.beginPath(),h.arc(Math.random()*u,Math.random()*f,g,0,7),h.fill()}});j.foam=new z(new Oi(.098,36),new ht({map:i,transparent:!0,opacity:0,roughness:.9})),j.foam.rotation.x=-Math.PI/2,j.foam.position.y=.097,n.add(j.foam);let s=new Se,r=ie("#dcc58f",{r:.7}),a=new z(new He(.011,.012,.09,10),r);a.position.y=.115,s.add(a);let o=new z(new He(.03,.011,.07,18,1,!0),ie("#efe2bd",{side:Mt}));o.position.y=.035,s.add(o),s.position.set(0,.07,0),n.add(s),j.whisk=s;let l=new z(new He(.035,.035,.06,18),ie("#1d1a18",{r:.25}));l.position.set(-.2,.03,-.05),n.add(l);let c=new z(new Tt(.17,.005,.012),r);c.position.set(.2,.004,.1),c.rotation.y=.4,n.add(c),n.scale.setScalar(1.6),n.visible=!1,dn(n),de.add(n),j.g=n}function mr(n){let e=N("teaHint");if(!n){e.classList.remove("show");return}e.textContent=n,e.classList.add("show")}function XS(){rt&&(j.on=!0,j.stage="whisk",j.prog=0,j.acc=0,j.idle=0,j.wx=j.wz=0,j.base.set(Xc.x,.75,-5.5),We.visible=!1,j.g.position.copy(j.base),j.g.visible=!0,j.foam.material.opacity=0,j.foam.scale.setScalar(.3),j.liq.material.color.set("#3f5f2c"),j.whisk.position.set(0,.07,0),j.whisk.visible=!0,Qi(null),N("poem").classList.remove("show"),setTimeout(()=>{j.on&&j.stage==="whisk"&&mr("\u7528\u624B\u6307\u5728\u7897\u4E0A\u756B\u5708\uFF0C\u5237\u51FA\u7D30\u7D30\u7684\u6CE1\u6CAB")},900))}function qS(n){let e=n.clientX-j.lx,t=n.clientY-j.ly,i=Math.hypot(e,t);j.lx=n.clientX,j.ly=n.clientY,j.prog=Math.min(1,j.prog+i/(Math.min(innerWidth,innerHeight)*5.5)),j.acc+=i,j.idle=0,j.wx=xt(j.wx+e*7e-4,-.05,.05),j.wz=xt(j.wz+t*7e-4,-.05,.05),j.acc>38&&(j.acc=0,D.ctx&&D.on&&D.ctx.state==="running"&&Ci(D.ctx.currentTime,.12,3800+Math.random()*800,1.4,.045,.15)),j.prog>=1&&j.stage==="whisk"&&(j.stage="ready",mr("\u6CE1\u6CAB\u7D30\u7D30\u7684\u3002\u6367\u8D77\u4F86\uFF0C\u559D\u4E00\u53E3\u3002"),N("teaDrink").classList.remove("hidden"))}N("teaDrink").onclick=()=>{N("teaDrink").classList.add("hidden"),mr(""),j.stage="sip",j.t=0};function dg(){We.visible=!0,j.on=!1,j.stage="",j.g.visible=!1,mr(""),N("teaDrink").classList.add("hidden"),j.down=null}function YS(n,e){if(j.on){if(j.foam.material.opacity=Math.min(1,j.prog*1.25),j.foam.scale.setScalar(.3+.7*Math.min(1,j.prog*1.1)),j.liq.material.color.set("#3f5f2c").lerp(eg.set("#9dbb5e"),j.prog),j.stage==="whisk")j.wx*=1-n*4,j.wz*=1-n*4,j.whisk.position.set(j.wx,.07,j.wz),j.whisk.rotation.z=j.wx*4,j.whisk.rotation.x=-j.wz*4,j.idle+=n,j.idle>9&&j.prog<1&&(j.idle=0,mr("\u6162\u6162\u756B\u5708\u5C31\u597D\uFF0C\u4E0D\u7528\u6025"));else if(j.stage==="ready")j.whisk.position.lerp(ZS.set(.22,0,-.12),n*3),j.whisk.rotation.set(0,0,0);else if(j.stage==="sip"){j.t+=n;let t=Math.min(1,j.t/1.5),i=t*t*(3-2*t);j.whisk.visible=!1,j.g.position.set(j.base.x-.04*i,j.base.y+.75*i,j.base.z-.55*i),j.g.rotation.x=-.35*i,j.t>1&&!j.sipped&&(j.sipped=!0,D.ctx&&D.on&&D.ctx.state==="running"&&Ci(D.ctx.currentTime,.55,900,.7,.05,.2,"lowpass")),j.t>2&&(j.sipped=!1,j.g.rotation.x=0,dg(),Je("tea"),mr("\u5FAE\u82E6\uFF0C\u7136\u5F8C\u56DE\u7518\u3002"),setTimeout(()=>{j.on||(mr(""),rt&&setTimeout(()=>{rt&&!j.on&&!Pt.mode&&Qi("choices")},700))},3800))}}}var ZS=new S,c0=0;function QS(n,e){let t=performance.now(),i=Oo(),s=We.position,r=Wo();t>ds.next&&(ds.on=!ds.on,hg(),ms(),xr(),!ds.on&&Ve==="summer"&&i>=12&&i<17.5&&Math.random()<.6&&OS()),t>Yt.until&&(Yt.target=0),(Ve!=="summer"||dt>.3)&&(Yt.target=0),Yt.a+=(Yt.target-Yt.a)*(1-Math.exp(-n*.35)),Yt.mesh.material.opacity=Yt.a,Yt.mesh.visible=Yt.a>.01,Yt.a>.25&&r&&Je("rainbow");for(let c of cg)c.material.opacity=zn*.32,c.visible=zn>.01,c.position.x+=n*.12,c.position.x>14&&(c.position.x=-14);zn>.5&&r&&Je("mist");let a=Ve==="summer"&&yo.frog;Wi.g.visible=a,a&&(Math.hypot(s.x-Wi.g.position.x,s.z-Wi.g.position.z)<3&&(r&&Je("frog"),Wi.croakT-=n,Wi.croakT<=0&&(Wi.croakT=5+Math.random()*5,D.ctx&&D.on&&D.ctx.state==="running"&&K0(D.ctx.currentTime+.02),Wi.g.scale.y=1.15)),Wi.g.scale.y+=(1-Wi.g.scale.y)*n*6),Fn.g.visible=Ve==="summer",Fn.g.visible&&(t>Fn.next&&(Fn.next=t+6e3+Math.random()*11e3,Fn.sway=1,rd()),Fn.sway*=1-n*.8,Fn.bell.rotation.z=Math.sin(e*5)*.25*Fn.sway+Math.sin(e*.8)*.03,Fn.paper.rotation.y=Math.sin(e*3)*.6*Fn.sway,Fn.paper.rotation.x=Math.sin(e*4.3)*.3*Fn.sway);let o=Ve==="autumn"&&yo.dragon&&i>=15.5&&i<=18.7&&dt<.5;for(let c of ug)if(c.g.visible=o,!!o){if(c.hover>0)c.hover-=n,c.x+=Math.sin(e*9+c.ph)*.002,c.y+=Math.sin(e*7+c.ph)*.0015;else{let h=c.tx-c.x,u=c.ty-c.y,f=c.tz-c.z,d=Math.hypot(h,u,f);if(d<.08)c.hover=.5+Math.random()*1.8,c.tx=-10+Math.random()*20,c.ty=.4+Math.random()*.9,c.tz=-2.5+Math.random()*11.5;else{let g=Math.min(d,2.4*n);c.x+=h/d*g,c.y+=u/d*g,c.z+=f/d*g,c.g.rotation.y=Math.atan2(h,f)}}c.g.position.set(c.x,c.y,c.z),c.wings.forEach((h,u)=>h.rotation.y=Math.sin(e*60+u)*.35),r&&a0(c.g.position)&&Math.hypot(s.x-c.x,s.z-c.z)<9&&Je("dragonfly")}let l=_f;if(l.state==="none"&&!l.done&&yo.tanuki&&i>=16.5&&i<=19.3&&(l.spot=o0[Math.floor(Math.random()*o0.length)],l.state="peek",l.t=0,l.g.visible=!0),l.state!=="none"&&l.spot){let c=l.spot;l.t+=n;let h=0;if(l.state==="peek")h=Math.min(1,l.t/1.5),h>=1&&(l.state="watch",l.t=0);else if(l.state==="watch"){h=1;let u=Math.atan2(s.x-c.x,s.z-c.z)-c.ry;l.head.rotation.y=xt(((u+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,-.8,.8),a0(l.g.position)&&(l.seen+=n,l.seen>1.2&&r&&Je("tanuki")),(Math.hypot(s.x-c.x,s.z-c.z)<7||l.t>60)&&(l.state="hide",l.t=0)}else l.state==="hide"&&(h=1-Math.min(1,l.t/.5),h<=0&&(l.state="none",l.done=!0,l.g.visible=!1));l.g.position.set(c.x+c.dx*(1-h)*.8,0,c.z+c.dz*(1-h)*.8),l.g.rotation.y=c.ry}ui.board.material[4].emissiveIntensity=dt*.35,rt&&r&&dt>.6&&(Io.illum>.93&&Je("fullmoon"),Ve==="winter"&&Je("snowsit")),rt&&r&&performance.now()-qf>2e4&&(Ve==="spring"&&dt<.5&&Je("sakura"),Ve==="summer"&&Yn.visible&&Je("rainsit"),Ve==="autumn"&&dt<.5&&Je("momiji")),ko.visible&&r&&Je("fireflies"),Ai.kind==="lantern"&&(_i.lanterns.forEach((c,h)=>{c.lm.emissiveIntensity=.35+1.4*dt+Math.sin(e*2+c.ph)*.05,c.g.rotation.z=Math.sin(e*.9+c.ph)*.03}),_i.glows.forEach(c=>c.material.opacity=.08+.5*dt),!Ai.preview&&dt>.5&&(c0+=n,c0>5&&Je("lantern"))),Ai.kind==="mid-autumn"&&!Ai.preview&&_i.center&&Math.hypot(s.x-_i.center.x,s.z-_i.center.z)<3.5&&Je("mid-autumn");for(let c of _i.strips)c.g.rotation.z=Math.sin(e*1.3+c.ph)*.08}var Bn=new S;function JS(n,e,t){let i=1-Math.exp(-n*9),s=q.arms[0],r=q.arms[1],a=We.position,o=Yn.visible&&!rt&&!Wn&&a.y<.3&&!we.on;q.umbK+=((o?1:0)-q.umbK)*(1-Math.exp(-n*4)),q.umb.visible=q.umbK>.05,q.umb.scale.set(.3+.7*q.umbK,q.umbK,.3+.7*q.umbK);let l=dt>.45&&!rt&&!we.on;q.lan.visible=l,q.lanLight.intensity=l?1.5+Math.sin(e*9)*.08+Math.sin(e*14)*.05:0;let c=Ve==="summer"&&!o&&!Wn&&!rt;q.fan.visible=c,!t&&!rt&&!we.on&&!q.anim&&(q.idleT+=n,q.idleT>7&&(q.idleT=-(4+Math.random()*5),th(["stretch","sky","crouch"][Math.floor(Math.random()*3)]))),(t||rt)&&(q.idleT=0,q.anim&&q.anim!=="bow"&&q.anim!=="wash"&&(q.anim=null));let h=.1,u=-.08,f=.1,d=.08,g=0,x=Math.sin(e*1.6)*.006,m=0,p=0,y=!1;if(t&&!rt&&(x=Math.abs(Math.sin(ls))*.045,p=Math.sin(ls)*.06,h=.1+Math.sin(ls)*.45,f=.1-Math.sin(ls)*.45),Wn&&(h=-.75,u=.12,f=-.7,d=-.12,m=t?.1+Math.sin(ls*.5)*.03:.06,t&&(h+=Math.sin(ls*.5)*.12)),c&&(h=-.45+Math.sin(e*(t?7:3.5))*.2,u=1),q.umbK>.05&&(h=-1.15,u=.3),l&&(f=-.55,d=.05),rt&&(x=-.05,y=!0,h=-.5,u=.2,f=-.5,d=-.2,m=.04),q.anim){q.animT+=n;let v=q.animT,M=R=>Math.sin(Math.min(1,v/R)*Math.PI);if(q.anim==="bow"){let R=M(1.5);m=.5*R,g=.25*R,h=f=-.2*R+.1,v>1.5&&(q.anim=null)}else if(q.anim==="wash"){let R=Math.min(1,v/.4)*Math.min(1,(2.4-v)/.4);h=f=-1.05*R+.1*(1-R),u=.42*R,d=-.42*R,g=.25*R,m=.08*R,v>2.4&&(q.anim=null)}else if(q.anim==="stretch"){let R=M(2.4);h=f=-2.9*R+.1*(1-R),u=-.25*R,d=.25*R,g=-.35*R,x+=.03*R,v>2.4&&(q.anim=null)}else if(q.anim==="sky")g=-.6*(Math.min(1,v/.8)*Math.min(1,(3.6-v)/.8)),v>3.6&&(q.anim=null);else if(q.anim==="crouch"){let R=Math.min(1,v/.6)*Math.min(1,(3.4-v)/.6);x=-.17*R,m=.22*R,g=.4*R,h=f=-.55*R+.1*(1-R),v>3.4&&(q.anim=null)}}if(An.position.y+=(x-An.position.y)*i,An.rotation.x+=(m-An.rotation.x)*i,An.rotation.z+=(p-An.rotation.z)*i,s.rotation.x+=(h-s.rotation.x)*i,s.rotation.z+=(u-s.rotation.z)*i,r.rotation.x+=(f-r.rotation.x)*i,r.rotation.z+=(d-r.rotation.z)*i,q.head.rotation.x+=(g-q.head.rotation.x)*i,q.legs.visible=y,q.feet.forEach(v=>v.visible=!y),q.scarf.visible&&(q.scarfTail.rotation.z=.15+Math.sin(e*2.2)*.06+(t?Math.sin(ls)*.12:0)),Ve==="winter"&&!j.on&&(q.breathT-=n,q.breathT<=0)){q.breathT=3.2+Math.random()*.8;let v=q.fog.find(M=>M.t>=1.6)||q.fog[0];v.sp.material.map||(v.sp.material.map=Er,v.sp.material.needsUpdate=!0),q.head.localToWorld(Bn.set(0,-.06,.24)),v.sp.position.copy(Bn),v.t=0,v.sp.visible=!0}for(let v of q.fog){if(v.t>=1.6){v.sp.visible=!1;continue}v.t+=n;let M=v.t/1.6;v.sp.position.y+=n*.12;let R=Bn.set(Math.sin(We.rotation.y),0,Math.cos(We.rotation.y));v.sp.position.addScaledVector(R,n*.18),v.sp.scale.setScalar(.08+M*.3),v.sp.material.opacity=.32*(1-M)}if(Ve==="spring"&&!rt&&a.y<.3&&(q.petalT-=n,q.petalT<=0&&(q.petalT=18+Math.random()*25,q.petals.length<5))){let v=.08+Math.random()*.24,M=Math.random()*6.28,R=new z(new Oi(.045,6),new pn({color:["#f6c3d0","#f9dbe3","#fff4f6"][Math.floor(Math.random()*3)],side:Mt}));R.position.set(Math.cos(M)*v,.21+.1-v*(.2/.38)+.004,Math.sin(M)*v),R.rotation.set(-Math.PI/2+.48*Math.cos(M)*0,Math.random()*6,0),R.lookAt(q.head.localToWorld(new S(Math.cos(M)*v*3,2,Math.sin(M)*v*3))),q.head.add(R),q.petals.push(R)}}function KS(n){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let e=D.ctx.currentTime;if(n==="gravel")aS();else if(n==="wood"){let t=.8+Math.random()*.4;Ci(e,.04,1700,2.2,.016*t,.08),Pi(230,170,e,.07,.017*t,"sine",.1)}else n==="stone"?(Pi(150,95,e,.09,.06,"sine",.15),Ci(e,.06,650,1,.03,.1,"lowpass")):Ci(e,.08,900,.8,.022,.05,"lowpass")}function pg(){if(we.on||j.on)return;at.on=!0,Ho(),N("poem").classList.remove("show");let n=We.position;dt>.5&&ti.visible?(at.yaw=Math.atan2(ti.position.x-n.x,ti.position.z-n.z),at.pitch=Math.min(.9,Math.atan2(ti.position.y-n.y,Math.hypot(ti.position.x-n.x,ti.position.z-n.z))+.25)):Yt.a>.1?(at.yaw=Math.atan2(-4-n.x,82-n.z),at.pitch=.25):(at.yaw=rt?0:We.rotation.y,at.pitch=.6),at.fov=vt.fov,We.visible=!1,document.body.classList.add("gazing"),N("gazeHint").classList.add("show"),setTimeout(()=>N("gazeHint").classList.remove("show"),4200),Je("sky"),dt>.6&&Wo()&&Je("stars")}function Xo(){at.on&&(at.on=!1,We.visible=!j.on,document.body.classList.remove("gazing"),hd(),N("gazeHint").classList.remove("show"))}N("gazeBtn").onclick=pg;N("gazeBack").onclick=Xo;N("zoomIn").onclick=()=>{at.on?at.fov=xt(at.fov*.8,18,75):pi=xt(pi*.8,2.6,16)};N("zoomOut").onclick=()=>{at.on?at.fov=xt(at.fov*1.25,18,75):pi=xt(pi*1.25,2.6,16)};addEventListener("keydown",n=>{n.code==="KeyG"&&(at.on?Xo():pg()),(n.code==="Equal"||n.code==="NumpadAdd")&&N("zoomIn").click(),(n.code==="Minus"||n.code==="NumpadSubtract")&&N("zoomOut").click()});var jS=(()=>{let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");for(let s=0;s<22;s++){let r=24+Math.random()*80,a=50+Math.random()*30-Math.abs(r-64)*.25,o=12+Math.random()*20,l=t.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,a,o,0,7),t.fill()}let i=new Vn(e);return i.colorSpace=Ut,i})(),mg=[];for(let n=0;n<20;n++){let e=new Ei({map:jS,transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),t=new Hi(e),i=Math.random()*Math.PI*2,s=40+Math.random()*45;t.position.set(Math.cos(i)*s,24+Math.random()*26,Math.sin(i)*s);let r=18+Math.random()*22;t.scale.set(r,r*.5,1),t.renderOrder=-5,de.add(t),mg.push({sp:t,a:i,r:s,sp0:.004+Math.random()*.004})}var vn={m:null,t:9,next:performance.now()+15e3};{let n=new pt;n.setAttribute("position",new Ue([0,0,0,0,0,0],3)),vn.m=new Ja(n,new Is({color:"#ffffff",transparent:!0,opacity:0,fog:!1})),vn.m.frustumCulled=!1,de.add(vn.m)}var qt={g:new Se,t:99,next:performance.now()+2e4,dir:new S};{let n=new pn({color:"#2d2a28",side:Mt,fog:!1});for(let e=0;e<6;e++){let t=new Se;for(let r of[-1,1]){let a=new z(new mn(.9,.18),n);a.position.x=r*.42,a.rotation.z=r*.25,t.add(a)}let i=Math.ceil(e/2),s=e%2?1:-1;t.position.set(s*i*1.6,0,-i*1.4),qt.g.add(t)}qt.g.visible=!1,de.add(qt.g)}function $S(n,e){let t=1-dt,i=performance.now(),s=Math.max(0,1-Math.abs(Oo()-17.8)/1.3)*t;for(let r of mg){r.a+=n*r.sp0,r.sp.position.x=Math.cos(r.a)*r.r,r.sp.position.z=Math.sin(r.a)*r.r;let a=en==="sun"?.35:en==="cloud"||en==="rain"||en==="snow"?1.6:1;r.sp.material.opacity=Math.min(1,(.25+.55*t)*(Ve==="summer"&&Yn.visible?1.15:1)*(1-zn*.6)*a);let o=a>1?.18:0;r.sp.material.color.setRGB(1-dt*.72-o,1-dt*.7-s*.15-o,1-dt*.62-s*.32-o*.8)}if(dt>.7&&i>vn.next){vn.next=i+(at.on?12e3:3e4)+Math.random()*25e3,vn.t=0;let r=Math.random()*Math.PI*2;vn.p0=new S(Math.cos(r)*60,45+Math.random()*20,Math.sin(r)*60),vn.d=new S(-Math.sin(r)+Math.random()*.4,-.35,Math.cos(r)).normalize()}if(vn.t<1.2){vn.t+=n;let r=vn.t/1.2,a=vn.p0.clone().addScaledVector(vn.d,r*40),o=a.clone().addScaledVector(vn.d,-6),l=vn.m.geometry.attributes.position;l.setXYZ(0,o.x,o.y,o.z),l.setXYZ(1,a.x,a.y,a.z),l.needsUpdate=!0,vn.m.material.opacity=Math.sin(r*Math.PI)*.9,at.on&&r>.3&&Wo()&&Je("meteor")}else vn.m.material.opacity=0;if(t>.6&&!Yn.visible&&i>qt.next){qt.next=i+4e4+Math.random()*5e4,qt.t=0;let r=Math.random()*Math.PI*2;qt.p0=new S(Math.cos(r)*70,30+Math.random()*12,Math.sin(r)*70),qt.dir.set(-Math.cos(r),0,-Math.sin(r)),qt.g.lookAt(qt.p0.clone().sub(qt.dir)),qt.g.visible=!0}qt.g.visible&&(qt.t+=n,qt.g.position.copy(qt.p0).addScaledVector(qt.dir,qt.t*7),qt.g.children.forEach((r,a)=>r.children.forEach((o,l)=>o.rotation.z=(l?1:-1)*(.25+Math.sin(e*6+a)*.35))),qt.t>20&&(qt.g.visible=!1))}var Cf={sun:["\u6674","\u4ECA\u5929\u662F\u6674\u5929\uFF0C\u597D\u597D\u66EC\u4E00\u66EC\u3002"],cloud:["\u96F2","\u96F2\u591A\u4E00\u9EDE\u7684\u65E5\u5B50\uFF0C\u6162\u6162\u8D70\u5C31\u597D\u3002"],rain:["\u96E8","\u4E0B\u96E8\u7684\u65E5\u5B50\uFF0C\u5C31\u8B93\u5B83\u4E0B\u5427\u3002"],fog:["\u9727","\u9727\u6FDB\u6FDB\u7684\uFF0C\u770B\u4E0D\u6E05\u695A\u4E5F\u6C92\u95DC\u4FC2\u3002"],snow:["\u96EA","\u4E0B\u96EA\u4E86\uFF0C\u5B89\u5B89\u975C\u975C\u7684\u3002"]},To=!1;function gg(n){To=!!n,document.querySelectorAll("#moodPick [data-m]").forEach(e=>e.classList.toggle("on",e.dataset.m===en)),N("moodPick").classList.remove("hidden")}function lh(n){N("moodPick").classList.add("hidden");let e=n!==en;if(en=n,n?(he.moods[Yc()]=n,Kt(),Je("mood"),N("moodBtn").textContent=Cf[n][0],e&&Rt(Cf[n][1],3800)):N("moodBtn").textContent="\u5FC3",e){let t=N("fade");To?(ms(),D.ctx&&xr(),_t.cubeDirty=!0,Dc=""):(t.classList.add("on"),setTimeout(()=>{ms(),D.ctx&&xr(),_t.cubeDirty=!0,Dc="",t.classList.remove("on")},380))}To&&(To=!1,setTimeout(Mf,n?4200:400),setTimeout(yS,n?9e3:5200),setTimeout(VS,n?8800:5e3))}document.querySelectorAll("#moodPick [data-m]").forEach(n=>n.onclick=()=>lh(n.dataset.m));N("moodSkip").onclick=()=>lh(en&&!To?en:null);N("moodClear").onclick=()=>lh(null);N("moodBtn").onclick=()=>gg(!1);var fi={on:!1,cap:"",seal:!0};function vg(){we.on||(at.on&&Xo(),fi.on=!0,Ho(),document.body.classList.add("photo"),N("phStamp").querySelector("small").textContent=Pf(),ad(),Rt("\u627E\u4E00\u500B\u559C\u6B61\u7684\u89D2\u5EA6",2400))}function ew(){fi.on=!1,document.body.classList.remove("photo"),N("phCap").style.display="none",N("phStamp").style.display="none"}var Pf=()=>{let n=new Date;return n.getFullYear()+"."+(n.getMonth()+1)+"."+n.getDate()};function ad(){N("phCap").textContent=fi.cap,N("phCap").style.display=fi.cap?"block":"none",N("phStamp").style.display=fi.seal?"flex":"none",N("phSeal").classList.toggle("on",fi.seal)}N("photoBtn").onclick=vg;N("phExit").onclick=ew;N("phSeal").onclick=()=>{fi.seal=!fi.seal,ad()};N("phCaption").onclick=()=>oh("\u70BA\u9019\u5F35\u7167\u7247\u5BEB\u4E00\u53E5","\u5E7E\u500B\u5B57\u5C31\u597D",24,"\u597D",n=>{fi.cap=n,ad()},!1);function tw(){$n?$n.render():Zn.render(de,vt)}N("phShot").onclick=()=>{tw();let n=Zn.domElement,e=n.width,t=n.height,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");s.drawImage(n,0,0);let r=Math.min(e,t)/100;if(fi.cap){s.save(),s.font=`600 ${5.2*r}px "Noto Serif TC","Songti TC",serif`,s.textAlign="center",s.textBaseline="top";let o=[...fi.cap],l=e-9*r,c=8*r;s.shadowColor="rgba(255,255,255,.9)",s.shadowBlur=2.5*r,s.fillStyle="#2b2824",o.forEach((h,u)=>s.fillText(h,l,c+u*6.4*r)),s.restore()}if(fi.seal){let o=9*r,l=5*r,c=t-5*r-o;s.fillStyle="rgba(163,63,44,.92)",s.beginPath(),s.roundRect?s.roundRect(l,c,o,o,1.2*r):s.rect(l,c,o,o),s.fill(),s.fillStyle="#fbf3e6",s.font=`600 ${5.6*r}px "Noto Serif TC",serif`,s.textAlign="center",s.textBaseline="middle",s.fillText("\u5EAD",l+o/2,c+o/2+.3*r),s.fillStyle="rgba(255,255,255,.92)",s.font=`${2.4*r}px "Noto Serif TC",serif`,s.textAlign="left",s.shadowColor="rgba(0,0,0,.5)",s.shadowBlur=r,s.fillText("\u67AF\u5C71\u6C34\u5C0F\u5EAD\u3000"+Pf(),l+o+2*r,c+o-1.5*r)}let a=i.toDataURL("image/jpeg",.92);N("phImg").src=a,N("phResult").classList.remove("hidden"),Je("photo"),N("phDownload").onclick=()=>{try{let o=document.createElement("a");o.href=a,o.download="\u67AF\u5C71\u6C34\u5C0F\u5EAD_"+Pf()+".jpg",document.body.appendChild(o),o.click(),o.remove()}catch{}},D.ctx&&D.on&&D.ctx.state==="running"&&Ci(D.ctx.currentTime,.06,3e3,1,.05,.05)};N("phClose").onclick=()=>N("phResult").classList.add("hidden");function nw(n){if(n.k)return n.k;let e=JSON.stringify(n.rocks);for(let t=0;t<Ao.length;t++)if(JSON.stringify(Ao[t].rocks)===e)return"d"+t;for(let t in Fo)if(JSON.stringify(Fo[t].rocks)===e)return t;return"x"}function xg(){let n=Xn.map(e=>{let t=nw(e),i=[t,Math.round(e.x*10),Math.round(e.z*10),Math.round((e.rot||0)*180/Math.PI%360),Math.round((e.scale||1)*100),e.seed||1].join(",");return t==="x"&&(i+=":"+Math.round(e.moss*100)+":"+e.rocks.map(s=>s.map(r=>Math.round(r*100)).join("_")).join("~")),i});return"KS1-"+btoa(unescape(encodeURIComponent(n.join(";")))).replace(/\+/g,"-").replace(/\//g,".").replace(/=+$/,"")}function yg(n){n=String(n).trim();let e=n.match(/KS1-([A-Za-z0-9\-.]+)/);if(!e)return null;let t;try{let s=e[1].replace(/-/g,"+").replace(/\./g,"/");for(;s.length%4;)s+="=";t=decodeURIComponent(escape(atob(s)))}catch{return null}let i=[];for(let s of t.split(";").slice(0,20)){let[r,a,o]=s.split(":"),l=r.split(","),c=l[0],h=null;/^d[0-4]$/.test(c)?h=Ao[+c[1]]:Fo[c]&&(h=Fo[c]);let u={k:c,x:xt(+l[1]/10,be.x0+.5,be.x1-.5),z:xt(+l[2]/10,be.z0+.5,be.z1-.5),rot:(+l[3]||0)*Math.PI/180,scale:xt((+l[4]||100)/100,.6,1.8),seed:+l[5]||1};if(h)u.moss=h.moss,u.rocks=JSON.parse(JSON.stringify(h.rocks));else if(c==="x"&&a)u.moss=xt(+a/100,.3,3),u.rocks=(o||"").split("~").filter(Boolean).slice(0,8).map(f=>f.split("_").map(d=>+d/100));else continue;u.rocks.every(f=>f.length===4&&f.every(d=>isFinite(d)))&&i.push(u)}return i.length?i:null}var Mg="share";function Eg(n){Mg=n;let e=N("codeText");n==="share"?(N("codeTitle").textContent="\u628A\u9019\u4E32\u4EE3\u78BC\u50B3\u7D66\u670B\u53CB\uFF0C\u4ED6\u5C31\u80FD\u770B\u5230\u4F60\u6392\u7684\u5EAD\u9662",e.value=xg(),e.readOnly=!0,N("codeOk").textContent="\u8907\u88FD",N("codeNote").textContent="",Je("share")):(N("codeTitle").textContent="\u8CBC\u4E0A\u670B\u53CB\u7D66\u4F60\u7684\u5EAD\u9662\u4EE3\u78BC",e.value="",e.readOnly=!1,N("codeOk").textContent="\u5957\u7528",N("codeNote").textContent="\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662\u6703\u5148\u6536\u597D\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u63DB\u56DE\u4F86\u3002",setTimeout(()=>e.focus(),50)),N("codeModal").classList.remove("hidden")}N("codeCancel").onclick=()=>N("codeModal").classList.add("hidden");N("codeText").addEventListener("keydown",n=>n.stopPropagation());N("codeOk").onclick=async()=>{let n=N("codeText");if(Mg==="share"){n.select();let t=!1;try{await navigator.clipboard.writeText(n.value),t=!0}catch{try{t=document.execCommand("copy")}catch{}}N("codeNote").textContent=t?"\u5DF2\u8907\u88FD\u3002":"\u8ACB\u9577\u6309\u6216\u9078\u53D6\u4E0A\u9762\u7684\u4EE3\u78BC\uFF0C\u624B\u52D5\u8907\u88FD\u3002";return}let e=yg(n.value);if(!e){N("codeNote").textContent="\u9019\u4E32\u4EE3\u78BC\u597D\u50CF\u4E0D\u592A\u5C0D\uFF0C\u518D\u78BA\u8A8D\u4E00\u4E0B\uFF1F";return}he.layoutBackup||(he.layoutBackup=JSON.parse(JSON.stringify(Xn))),Xn=e,vr(),gs(null),N("codeModal").classList.add("hidden"),od(),Je("visitcode"),Kt(),Rt("\u9019\u662F\u670B\u53CB\u7684\u5EAD\u9662\u3002\u6309\u300C\u5B8C\u6210\u300D\u5F8C\uFF0C\u6C99\u7D0B\u6703\u91CD\u65B0\u8019\u597D\u3002",4200)};function od(){N("restoreMine").classList.toggle("hidden",!he.layoutBackup)}N("shareCode").onclick=()=>Eg("share");N("enterCode").onclick=()=>Eg("enter");N("restoreMine").onclick=()=>{he.layoutBackup&&(Xn=he.layoutBackup,delete he.layoutBackup,vr(),gs(null),od(),Kt(),Rt("\u63DB\u56DE\u4F60\u81EA\u5DF1\u7684\u5EAD\u9662\u4E86\u3002"))};od();function Tg(){if(!D.ctx||!D.on||D.ctx.state!=="running")return;let n=D.ctx;for(let e=0;e<3;e++){let t=n.currentTime+.1+e*7.5,i=n.createGain();i.gain.value=.16,fn(i,.8);for(let[s,r,a]of[[1,1,14],[1.007,.7,14],[2.01,.5,9],[2.76,.35,7],[3.42,.22,5],[5.03,.1,3]]){let o=n.createOscillator(),l=n.createGain();o.type="sine",o.frequency.value=98*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.02),l.gain.exponentialRampToValueAtTime(4e-4,t+a),o.connect(l),l.connect(i),o.start(t),o.stop(t+a+.1)}Ci(t,.12,500,1,.05,.5,"lowpass")}xs("\u665A\u9418")}function iw(){let n=new Date;n.getHours()===18&&n.getMinutes()===0&&he.bellDay!==Yc()&&(he.bellDay=Yc(),Kt(),Tg(),Rt("\u9060\u8655\u50B3\u4F86\u665A\u9418\u3002",4500),Je("bansho"))}var wi={t:99,next:performance.now()+15e3,dur:6,lastAudio:0};function sw(n){let e=performance.now();if(e>wi.next&&(wi.t=0,wi.dur=5+Math.random()*3,wi.next=e+2e4+Math.random()*35e3,Ve==="summer"&&setTimeout(rd,700)),wi.t<wi.dur?(wi.t+=n,fr.value=Math.sin(Math.PI*Math.min(1,wi.t/wi.dur))**1.5):fr.value=0,D.ctx&&D.wind&&e-wi.lastAudio>200){wi.lastAudio=e;let t=D.ctx.currentTime,i=nh[Ve].wind+(en==="cloud"||en==="snow"?.02:0);D.wind.gain.setTargetAtTime(i+fr.value*.09,t,.3),D.rustle&&D.rustle.gain.setTargetAtTime(Ve==="winter"?fr.value*.012:fr.value*.05,t,.3)}}var ni={x:Tn+6.5*(Sn/8),z:-6.95},Ke={on:!1,list:[],mode:"free",ptr:new Map,hits:[],listen:null,breath:null,rippleT:0};{let n=(()=>{let T=document.createElement("canvas");T.width=512,T.height=256;let P=T.getContext("2d");P.fillStyle="#808080",P.fillRect(0,0,512,256);for(let O=0;O<1500;O++){let K=Math.random()*512,J=Math.random()*256,Q=5+Math.random()*11,ee=P.createRadialGradient(K,J,0,K,J,Q);ee.addColorStop(0,"rgba(40,40,40,.55)"),ee.addColorStop(.7,"rgba(110,110,110,.2)"),ee.addColorStop(1,"rgba(128,128,128,0)"),P.fillStyle=ee,P.beginPath(),P.arc(K,J,Q,0,7),P.fill()}let F=P.getImageData(0,0,512,256).data,Y=P.createImageData(512,256),L=(O,K)=>F[((K+256)%256*512+(O+512)%512)*4]/255;for(let O=0;O<256;O++)for(let K=0;K<512;K++){let J=(L(K+1,O)-L(K-1,O))*3,Q=(L(K,O+1)-L(K,O-1))*3,ee=Math.hypot(J,Q,1),re=(O*512+K)*4;Y.data[re]=(-J/ee*.5+.5)*255,Y.data[re+1]=(Q/ee*.5+.5)*255,Y.data[re+2]=(1/ee*.5+.5)*255,Y.data[re+3]=255}P.putImageData(Y,0,0);let H=new Vn(T);return H.wrapS=Un,H})(),e=Hn(512,256,(I,E,T)=>{for(let P=0;P<T;P++){let F=P/T,Y=F<.25?.72+F:1,L=Math.abs(F-.49)<.025?1.18:1,H=.9+.1*Math.sin(F*40);for(let O=0;O<E;O+=4){let K=.94+Math.random()*.1,J=Y*L*H*K;I.fillStyle=`rgb(${Math.min(255,176*J)},${Math.min(255,132*J)},${Math.min(255,70*J)})`,I.fillRect(O,P,4,1)}}I.fillStyle="rgba(60,38,18,.75)";for(let P of[.405,.448])I.fillRect(0,P*T,E,1.6);I.fillStyle="rgba(70,45,22,.6)";for(let P=4;P<E;P+=16)I.beginPath(),I.arc(P,.427*T,1.6,0,7),I.fill();for(let P=0;P<300;P++)I.fillStyle=`rgba(80,110,90,${Math.random()*.12})`,I.fillRect(Math.random()*E,T*.05+Math.random()*T*.2,3,2)});e.wrapS=Un;let t=[[0,0],[.35,0],[.6,.04],[.82,.14],[.95,.3],[1,.46],[.99,.56],[.965,.605],[.935,.615],[.912,.595],[.915,.5],[.875,.32],[.74,.16],[.48,.075],[0,.06]].map(([I,E])=>new $(I,E)),i=new ja(t,72),s=new ht({map:e,normalMap:n,normalScale:new $(.8,.8),metalness:.88,roughness:.3,envMap:Vc.texture,envMapIntensity:1.3,side:Mt}),r=Hn(256,256,(I,E,T)=>{I.fillStyle="#2f4466",I.fillRect(0,0,E,T);for(let P=0;P<T;P+=3)I.fillStyle=`rgba(255,255,255,${.03+Math.random()*.03})`,I.fillRect(0,P,E,1);for(let P=0;P<E;P+=3)I.fillStyle=`rgba(0,0,0,${.04+Math.random()*.04})`,I.fillRect(P,0,1,T);I.strokeStyle="rgba(225,215,190,.5)",I.lineWidth=2,I.strokeRect(14,14,E-28,T-28)},[1,1]),a=new Se;a.position.set(ni.x,.75,ni.z),de.add(a);let o=new z(new Tt(1.42,.075,.74,10,1,6),new ht({map:r,roughness:.95}));{let I=o.geometry.attributes.position;for(let E=0;E<I.count;E++){let T=I.getX(E),P=I.getZ(E);if(I.getY(E)>0){let Y=1-Math.pow(Math.abs(T)/.71,4)*.5-Math.pow(Math.abs(P)/.37,4)*.5;I.setY(E,.0375*Math.max(.2,Y)+.012)}}o.geometry.computeVertexNormals()}o.position.y=.035,a.add(o);for(let[I,E]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let T=new z(new Pe(.018,8,6),ie("#c9a14a"));T.position.set(I*.71,.06,E*.37),a.add(T)}let l=["#9c3a2e","#c08a2c","#3b5a7a","#4f6e45","#6e3f5c"],c=[.14,.123,.109,.096,.085],h=[196,220,246.94,293.66,329.63],u=[-60,-30,0,30,60].map(I=>I*Math.PI/180),f=u.map(I=>.58*Math.sin(I)),d=u.map(I=>.4-.58*Math.cos(I)),g=new pn({visible:!1});c.forEach((I,E)=>{let T=new Se;T.position.set(f[E],.08,d[E]),a.add(T);let P=new z(new Us(I*.5,I*.13,14,36),ie(l[E],{r:.92}));P.rotation.x=Math.PI/2,P.position.y=I*.13,T.add(P);let F=new z(i,s);F.scale.set(I,I,I),F.position.y=I*.21,F.rotation.y=Math.random()*6,T.add(F);let Y=new z(new Oi(I*.8,40),new ht({color:"#2e3d3f",roughness:.06,metalness:.1,transparent:!0,opacity:.42,normalMap:ga,normalScale:new $(.12,.12),envMap:Vc.texture,envMapIntensity:.45,depthWrite:!1}));Y.rotation.x=-Math.PI/2,Y.position.y=I*.21+I*.24,T.add(Y);let L=new z(new He(I*1.2,I*1.2,I*1.4,16),g);L.position.y=I*.5,T.add(L),L.userData.i=E,Ke.hits.push(L),Ke.list.push({g:T,bw:F,R:I,f:h[E],energy:0,rub:0,rubT:0,voice:null,silent:0,water:Y,wy:Y.position.y})});let x=new Se;x.position.set(.05,.09,.25),x.rotation.y=.12,a.add(x);let m=new z(new He(.011,.013,.27,10),ie("#6b4a30",{r:.6}));m.rotation.z=Math.PI/2,x.add(m);let p=new z(new He(.022,.022,.075,14),ie("#8a6a4c",{r:1}));p.rotation.z=Math.PI/2,p.position.x=.12,x.add(p);let y=new Se;y.position.set(.8,0,-.3),a.add(y);let v=new z(new He(.06,.05,.022,20),ie("#5b5048",{r:.55}));v.position.y=.011,y.add(v);let M=new z(new He(.022,.024,.11,16),ie("#efe6d2",{r:.6,extra:{emissive:new ce("#ffb070"),emissiveIntensity:0}}));M.position.y=.077,y.add(M);let R=new z(new He(.0015,.0015,.012,4),ie("#222"));R.position.y=.138,y.add(R);let _=new z(new Pe(.012,12,8),new pn({color:"#ffd38a",transparent:!0,opacity:.95}));_.scale.set(1,2.4,1),_.position.y=.156,_.visible=!1,y.add(_);let C=new sa("#ffb35a",0,2.6,1.6);C.position.set(-.1,.17,.08),y.add(C),Ke.candle={flame:_,light:C,lit:0,wax:M},dn(a),_.castShadow=!1,vs.push({x:ni.x-.35,z:ni.z,r:.42},{x:ni.x+.35,z:ni.z,r:.42})}function qo(n,e=.8){if(n.energy=Math.max(n.energy,e),Xs(n.g.getWorldPosition(Bn).x,n.g.getWorldPosition(Bn).y+n.wy+.003,Bn.z,Math.max(.01,n.R*.72-.05)),!D.ctx||!D.on||D.ctx.state!=="running")return;let t=D.ctx,i=t.currentTime+.01,s=t.createGain();s.gain.value=e*.11*(.8+n.R*1.5),fn(s,.7,"mus");let r=1+(n.R-.1)*6;for(let[a,o,l]of[[1,1,13],[1.0035,.8,13],[2.71,.5,8],[2.718,.3,8],[5.15,.22,4.2],[8.32,.09,2.2]]){let c=t.createOscillator(),h=t.createGain();c.type="sine",c.frequency.value=n.f*a,h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(o,i+.004),h.gain.exponentialRampToValueAtTime(25e-5,i+l*r),c.connect(h),h.connect(s),c.start(i),c.stop(i+l*r+.1)}Ci(i,.035,900,.8,.03*e,.3,"lowpass")}function rw(n){if(n.voice||!D.ctx||!D.on||D.ctx.state!=="running")return;let e=D.ctx,t=e.createGain();t.gain.value=0,fn(t,.7,"mus");let i=[];for(let[o,l]of[[1,1],[1.0045,.75],[2.71,.28],[5.15,.06]]){let c=e.createOscillator(),h=e.createGain();c.type="sine",c.frequency.value=n.f*o,h.gain.value=l,c.connect(h),h.connect(t),c.start(),i.push(c)}let s=e.createBufferSource();s.buffer=D.noiseBuf,s.loop=!0;let r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=n.f*4,r.Q.value=3;let a=e.createGain();a.gain.value=.05,s.connect(r),r.connect(a),a.connect(t),s.start(),i.push(s),n.voice={out:t,os:i}}function Sg(n){if(!n.voice)return;let e=n.voice;n.voice=null;let t=D.ctx.currentTime;e.out.gain.cancelScheduledValues(t),e.out.gain.setTargetAtTime(0,t,.8),setTimeout(()=>{e.os.forEach(i=>{try{i.stop()}catch{}}),e.out.disconnect()},5e3)}function ch(n,e=4200){let t=N("bowlHint");t.textContent=n,t.classList.add("show"),clearTimeout(t._t),e&&(t._t=setTimeout(()=>t.classList.remove("show"),e))}function ld(){we.on||j.on||(at.on&&Xo(),Pt.mode&&sh(),Ke.on=!0,Ke.mode="free",Qi(null),N("poem").classList.remove("show"),We.visible=!1,document.body.classList.add("bowling"),hh("free"),ch("\u9EDE\u4E00\u4E0B\u7F3D\uFF0C\u6216\u7528\u624B\u6307\u6CBF\u8457\u7F3D\u7DE3\u6162\u6162\u756B\u5708"),Je("bowls"),D.on&&Ys(),D.drone&&D.ctx&&D.drone.gain.setTargetAtTime(.025,D.ctx.currentTime,1))}function cd(){Ke.on&&(Ke.on=!1,Ke.list.forEach(n=>{n.rubT=0,Sg(n)}),Ke.ptr.clear(),Ke.breath=null,Ke.listen=null,We.visible=!j.on,document.body.classList.remove("bowling"),N("bowlHint").classList.remove("show"),N("bowlCard").classList.add("hidden"),N("bowlBreath").classList.remove("show"),D.drone&&D.ctx&&D.drone.gain.setTargetAtTime(.055,D.ctx.currentTime,1),rt&&Qi("choices"))}function hh(n){Ke.mode=n,document.querySelectorAll("#bowlBar [data-bm]").forEach(e=>e.classList.toggle("on",e.dataset.bm===n)),N("bowlCard").classList.add("hidden"),N("bowlBreath").classList.remove("show"),Ke.breath=null,Ke.listen=null,n==="listen"&&wg(),n==="breath"&&(Ke.breath={t:0,n:0,phase:-1,seq:0},ch("\u8DDF\u8457\u7F3D\u8072\uFF0C\u6162\u6162\u5730\u5438\u3001\u6162\u6162\u5730\u5410",4500)),n==="free"&&N("bowlHint").classList.remove("show")}function wg(){N("bowlCard").classList.add("hidden"),ch("\u5C08\u5FC3\u807D\u3002\u8072\u97F3\u5B8C\u5168\u6D88\u5931\u7684\u6642\u5019\uFF0C\u9EDE\u4E00\u4E0B\u756B\u9762\u3002",0),setTimeout(()=>{Ke.mode!=="listen"||!Ke.on||(qo(Ke.list[0],.95),Ke.listen={t0:performance.now(),done:!1})},1600)}function aw(){let n=Ke.listen;if(!n||n.done)return;n.done=!0;let e=Math.round((performance.now()-n.t0)/1e3);he.bowlListen=(he.bowlListen||[]).concat(e).slice(-30),Kt(),Je("bowllisten");let t=he.bowlListen.length>1?he.bowlListen[he.bowlListen.length-2]:null;N("bowlHint").classList.remove("show"),N("bowlSecs").textContent=`\u4F60\u807D\u4E86 ${e} \u79D2\u3002`,N("bowlLine").textContent=["\u8072\u97F3\u6D88\u5931\u4E4B\u524D\uFF0C\u4F60\u4E00\u76F4\u5728\u9019\u88E1\u3002","\u807D\u898B\u5B89\u975C\uFF0C\u4E5F\u662F\u4E00\u7A2E\u807D\u898B\u3002","\u525B\u624D\u90A3\u6BB5\u6642\u9593\uFF0C\u53EA\u5C6C\u65BC\u4F60\u3002","\u9918\u97FB\u6162\u6162\u6563\u958B\uFF0C\u5FC3\u4E5F\u8DDF\u8457\u975C\u4E0B\u4F86\u3002"][Math.floor(Math.random()*4)]+(t!==null?`\uFF08\u4E0A\u4E00\u6B21 ${t} \u79D2\uFF09`:""),N("bowlCard").classList.remove("hidden")}N("bowlAgain").onclick=()=>wg();N("bowlOk").onclick=()=>{N("bowlCard").classList.add("hidden"),hh("free")};document.querySelectorAll("#bowlBar [data-bm]").forEach(n=>n.onclick=()=>hh(n.dataset.bm));N("bowlExit").onclick=cd;function ow(n){nd(n);let e=ah.intersectObjects(Ke.hits,!1);return e.length?Ke.list[e[0].object.userData.i]:null}function bg(n){return n.g.getWorldPosition(Bn),Bn.y+=n.R*.4,Bn.project(vt),[(Bn.x+1)/2*innerWidth,(1-Bn.y)/2*innerHeight]}function lw(n){if(Ke.mode==="listen"){Ke.listen&&!Ke.listen.done&&aw();return}let e=ow(n);if(!e)return;let[t,i]=bg(e);Ke.ptr.set(n.pointerId,{b:e,moved:0,lx:n.clientX,ly:n.clientY,ang:Math.atan2(n.clientY-i,n.clientX-t),t:performance.now(),rub:!1})}function cw(n){let e=Ke.ptr.get(n.pointerId);if(!e)return;let t=e.b,i=performance.now();e.moved+=Math.hypot(n.clientX-e.lx,n.clientY-e.ly),e.lx=n.clientX,e.ly=n.clientY;let[s,r]=bg(t),a=Math.atan2(n.clientY-r,n.clientX-s),o=a-e.ang;o=((o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,e.ang=a;let l=Math.max(.008,(i-e.t)/1e3);e.t=i,e.moved>12&&(e.rub||(e.rub=!0,qo(t,.22),rw(t)),t.rubT=Math.min(1,t.rubT*.6+Math.min(1,Math.abs(o)/l*.16)*.4),Je("bowlrub"))}function hw(n){let e=Ke.ptr.get(n.pointerId);e&&(Ke.ptr.delete(n.pointerId),!e.rub&&e.moved<12&&qo(e.b,.85))}function uw(n,e){let t=Ke.on;for(let s of Ke.list){s.rubT*=Math.exp(-n*2.2),s.rub+=(s.rubT-s.rub)*(1-Math.exp(-n*5)),s.voice&&D.ctx&&(s.voice.out.gain.setTargetAtTime(s.rub*.12,D.ctx.currentTime,.12),s.rub<.01?(s.silent+=n,s.silent>2.5&&(Sg(s),s.silent=0)):s.silent=0),s.energy*=Math.exp(-n/3.5);let r=Math.max(s.energy*.6,s.rub);s.bw.scale.x=s.R*(1+Math.sin(e*70+s.f)*.006*r),s.bw.scale.z=s.R*(1+Math.cos(e*70+s.f)*.006*r),s.rub>.15&&Math.random()<n*3*s.rub&&(s.g.getWorldPosition(Bn),Xs(Bn.x,Bn.y+s.wy+.003,Bn.z,Math.max(.01,s.R*(.3+.42*Math.random())-.05)))}{let s=Ke.candle;s.lit+=((t?1:0)-s.lit)*(1-Math.exp(-n*(t?1.5:4))),s.flame.visible=s.lit>.05;let r=.85+.1*Math.sin(e*13)+.06*Math.sin(e*29+1)+.04*Math.random();s.light.intensity=s.lit*(.5+dt*4)*r,s.wax.material.emissiveIntensity=s.lit*.35*r,s.flame.scale.set(s.lit,s.lit*(2.2+.4*Math.sin(e*17)),s.lit),s.flame.position.x=Math.sin(e*5)*.0012}if(!t)return;let i=Ke.breath;if(i){i.t+=n;let s=10,r=i.t%s,a=r<4,o=Math.floor(i.t/s),l=N("bowlBreath"),c=a?0:1;if(c!==i.phase&&(i.phase=c,l.textContent=a?"\u5438\u6C23\u2026\u2026":"\u5410\u6C23\u2026\u2026",l.classList.add("show"),!a)){let h=[0,1,2,3,4,3,2,1];qo(Ke.list[h[i.seq%h.length]],.55),i.seq++,i.n++,i.n===3&&Je("bowlbreath"),i.n===10&&ch("\u5F88\u597D\u3002\u53EF\u4EE5\u7E7C\u7E8C\uFF0C\u4E5F\u53EF\u4EE5\u505C\u5728\u9019\u88E1\u3002",5e3)}l.style.transform=`translate(-50%,-50%) scale(${a?.85+.3*(r/4):1.15-.3*((r-4)/6)})`}}function xo(n,e){if(Gc(n,e)&&gr(n,e)<.35)return .07;if(n>=Tn&&n<=Ws){if(e>=-7.6&&e<-5)return .75;if(e>=-5&&e<-4.3)return .4}return 0}function _g(n,e){n=xt(n,-11.7,11.7),e=xt(e,-7.35,9.7);for(let t of[vs,Uf])for(let i of t){let s=n-i.x,r=e-i.z,a=Math.hypot(s,r),o=i.r+.22;a<o&&a>1e-5&&(n=i.x+s/a*o,e=i.z+r/a*o)}return[n,e]}var Bs=.32,pi=Ea?9.5:10,So=.4,Zc=Math.PI,at={on:!1,yaw:0,pitch:.6,fov:55};function hd(){vt.fov=vt.aspect<.8?62:50,vt.updateProjectionMatrix()}hd();var ca=new S().copy(We.position),os=new S().copy(We.position);vt.position.set(We.position.x+2,5.5,Math.min(We.position.z+7,10.4));var Vi=null,hf=0,h0=1,uf=new $(We.position.x,We.position.z),ls=0,u0=new ra;function fw(n,e){let t=Mn.x+(Xi.KeyD||Xi.ArrowRight?1:0)-(Xi.KeyA||Xi.ArrowLeft?1:0),i=Mn.y+(Xi.KeyW||Xi.ArrowUp?1:0)-(Xi.KeyS||Xi.ArrowDown?1:0),s=Math.hypot(t,i);s>1&&(t/=s,i/=s);let r=s>.1&&!we.on;at.on&&r&&Xo(),rt&&r&&Bo();let a=We.position;if(!rt&&r){let h=-Math.sin(Bs),u=-Math.cos(Bs),f=Math.cos(Bs),d=-Math.sin(Bs),g=f*t+h*i,x=d*t+u*i,m=Math.hypot(g,x);g/=m,x/=m;let p=(Wn?1.7:2.7)*Math.min(1,s),[y,v]=_g(a.x+g*p*n,a.z+x*p*n);nf(y,v)?nf(y,a.z)?nf(a.x,v)||(a.z=v):a.x=y:(a.x=y,a.z=v),Zc=Math.atan2(g,x),ls+=n*p*3.6}rt&&(a.x+=(Xc.x-a.x)*(1-Math.exp(-n*6)),a.z+=(Xc.z-a.z)*(1-Math.exp(-n*6)));let o=Zc-We.rotation.y;o=((o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,We.rotation.y+=o*(1-Math.exp(-n*11));let l=xo(a.x,a.z);if(a.y+=(l-a.y)*(1-Math.exp(-n*14)),JS(n,e,r),!rt&&r&&a.y<.1&&!Gc(a.x,a.z))if(Wn){let h=We.rotation.y,u=a.x-Math.sin(h)*.75,f=a.z-Math.cos(h)*.75;xS(u,f),vo(u,f)?Vi?Math.hypot(u-Vi.x,f-Vi.z)>.07&&(ZT(Vi.x,Vi.z,u,f),Vi={x:u,z:f}):Vi={x:u,z:f}:Vi=null}else vo(a.x,a.z)&&(hf+=Math.hypot(a.x-uf.x,a.z-uf.y),hf>.4&&(hf=0,h0*=-1,QT(a.x,a.z,We.rotation.y,h0)));else r&&(Vi=null);if(Wn||(Vi=null),r&&!rt){let h=Math.floor(ls/Math.PI);h!==q.stepIdx&&(q.stepIdx=h,KS(Gc(a.x,a.z)&&gr(a.x,a.z)<.35?"stone":a.y>.3?"wood":vo(a.x,a.z)?"gravel":"soft"))}oS(Wn&&r&&!rt&&a.y<.1&&vo(a.x,a.z)),uf.set(a.x,a.z),rt?Gi("stand"):Te.present&&a.y>.5&&Math.hypot(a.x-Te.x,a.z-Te.z)<1.3?Gi("cat"):a.y>.5&&Math.hypot(a.x-ui.x,a.z-ui.z)<1.5?Gi("kuji"):a.y>.5&&Math.hypot(a.x-ni.x,a.z-ni.z)<1.5?Gi("bowls"):Ai.kind==="tanabata"&&Math.hypot(a.x-pa.x,a.z-pa.z)<1.6?Gi("wish"):Math.hypot(a.x-nn.x,a.z-nn.z)<1.5?(hi=null,Gi("lantern")):Math.hypot(a.x-Xm.x,a.z-Xm.z)<1?Gi("wash"):gr(a.x,a.z)<.9&&a.y<.2?Gi("feed"):a.y>.6&&a.z>-6.3?Gi("sit"):Gi(null);let c=Pt.mode==="breath"?.3+3.9*Pt.v:Nt.on?3.2+Math.sin(e*7)*.15+Math.sin(e*13)*.1:0;Nt.light.intensity+=(c-Nt.light.intensity)*(1-Math.exp(-n*(Pt.mode==="breath"?12:5))),Nt.glowMat.emissiveIntensity=Nt.light.intensity*.8,Nt.halo.material.map||(Nt.halo.material.map=Er,Nt.halo.material.needsUpdate=!0);{let h=Nt.light.intensity/4;Nt.halo.material.opacity=Math.min(.85,h*.8),Nt.halo.scale.setScalar(.8+h*1.6),Nt.halo.visible=h>.02}if(cs)for(let h of Wf){let u=h.m;if(h.rest>0){h.rest-=n,h.rest<=0&&Xf(h);continue}u.position.y-=cs.speed*n,u.position.x+=(Math.sin(e*1.2+h.ph)*cs.sway+.18+fr.value*1.4)*n,u.position.z+=Math.cos(e*.8+h.ph)*.22*n,u.rotation.x+=n*1.4,u.rotation.y+=n*.9;let f=xo(u.position.x,u.position.z)+.012;u.position.y<=f&&(u.position.y=f,u.rotation.set(-Math.PI/2,0,le()*6),h.rest=8+le()*12,f<.05&&Math.random()<.22&&qn.length<td&&Go(u.position.x,u.position.z)&&(qn.push({x:u.position.x,z:u.position.z,r:Math.random()*6.28,c:"#"+u.material.color.getHexString()}),rh(),Kt(),h.rest=.01))}if(Yn.visible){for(let h=0;h<Hf;h++){let u=H0[h];u.y-=13*n,(u.y<xo(u.x,u.z)||u.z<-4.3&&u.x>Tn-1.3&&u.x<Ws+1.3&&u.y<4)&&(u.y=9+le()*4,u.x=-14+le()*28,u.z=-5+le()*17);let f=h*6;ur[f]=u.x,ur[f+1]=u.y,ur[f+2]=u.z,ur[f+3]=u.x+.02,ur[f+4]=u.y-.38,ur[f+5]=u.z}Of.attributes.position.needsUpdate=!0}if(zo.visible){for(let h=0;h<kf;h++){let u=O0[h];u.y-=.65*n,u.x+=Math.sin(e*.8+u.ph)*.25*n,u.z+=Math.cos(e*.6+u.ph)*.12*n,(u.y<xo(u.x,u.z)||u.z<-4.3&&u.x>Tn-1.3&&u.x<Ws+1.3&&u.y<4)&&(u.y=8+le()*3,u.x=-14+le()*28,u.z=-5+le()*17);let f=h*3;wc[f]=u.x,wc[f+1]=u.y,wc[f+2]=u.z}Gf.attributes.position.needsUpdate=!0}}var Ac=null;function dw(n){let e=We.position;if(Ac){vt.position.copy(Ac.p),vt.lookAt(Ac.l);return}if(Ke.on){let h=new S(ni.x,1.5,ni.z+.88),u=new S(ni.x,.8,ni.z-.1);vt.position.lerp(h,1-Math.exp(-n*4)),os.lerp(u,1-Math.exp(-n*5)),vt.lookAt(os);return}if(at.on){let h=new S(e.x,e.y+(rt?.62:.95),e.z),u=Math.cos(at.pitch);vt.position.lerp(h,1-Math.exp(-n*5)),os.lerp(h.clone().add(new S(Math.sin(at.yaw)*u,Math.sin(at.pitch),Math.cos(at.yaw)*u).multiplyScalar(10)),1-Math.exp(-n*6)),vt.lookAt(os),vt.fov+=(at.fov-vt.fov)*(1-Math.exp(-n*6)),vt.updateProjectionMatrix();return}if(we.on){let h=we.cam;if(vt.position.lerp(new S(h.x,h.h,h.z+h.h*.38),1-Math.exp(-n*5)),os.lerp(new S(h.x,0,h.z),1-Math.exp(-n*5)),vt.lookAt(os),we.sel){let u=we.sel.userData.c;yr.position.set(u.x,.04,u.z),yr.scale.setScalar(u.moss*(u.scale||1)+.3)}return}let t=1-Math.exp(-n*6);ca.lerp(new S(e.x,e.y+.7,e.z),t);let i,s;if(rt)if(j.on){let h=j.base;i=new S(h.x,h.y+.95,h.z-.7),s=new S(h.x,h.y+.06,h.z+.05)}else if(Pt.mode==="breath"){let h=nn.x-e.x,u=nn.z-e.z,f=Math.hypot(h,u);i=new S(e.x-h/f*2,e.y+1.7,Math.max(-7.3,e.z-u/f*2)),s=new S(nn.x,1,nn.z)}else i=new S(e.x,e.y+2.1,-7.25),s=new S(e.x,.15+Yt.a*9,e.z+7.5);else{i=new S(ca.x+Math.sin(Bs)*pi,Math.max(.45,ca.y+pi*Math.tan(So)),ca.z+Math.cos(Bs)*pi);let h=i.x,u=i.z;i.x=xt(i.x,-12.3,12.5),i.z=Math.min(i.z,10.4);let f=Math.hypot(h-i.x,u-i.z);i.y+=f*.35,i.z<-4.1&&i.x>Tn-1.6&&i.x<Ws+1.6&&(i.y=Math.min(i.y,3.45),i.z=Math.max(i.z,-7.3)),s=So<.3?ca.clone().add(new S(0,(.3-So)*9,0)):ca}vt.position.lerp(i,1-Math.exp(-n*(rt?1.6:4))),os.lerp(s,1-Math.exp(-n*(rt?1.6:6))),vt.lookAt(os);let r=vt.position.x,a=vt.position.z,o=e.x-r,l=e.z-a,c=o*o+l*l||1;for(let h of L0){let u=((h.position.x-r)*o+(h.position.z-a)*l)/c,f=r+o*xt(u,0,1)-h.position.x,d=a+l*xt(u,0,1)-h.position.z,x=u>-.1&&u<1.05&&Math.hypot(f,d)<.6&&vt.position.z<-4.3||u>0&&u<1&&Math.hypot(f,d)<.45||rt&&Math.abs(h.position.x-e.x)<1.6?.15:1,m=h.material;m.opacity+=(x-m.opacity)*(1-Math.exp(-n*10)),m.depthWrite=m.opacity>.9}}function Rg(){let n=Math.min(u0.getDelta(),.05),e=u0.elapsedTime;if(fw(n,e),dw(n),I0.value=e,yc+=n,yc>2&&(yc=0,qs==="auto"&&ms()),pS(e),gS(performance.now(),n),OT(n),kT(n,e),qT(!1),LS(n,e),FS(n,e),zS(n,e),QS(n,e),YS(n,e),$S(n,e),sw(n),uw(n,e),(yc|0)===0&&Math.random()<.02&&iw(),D.ctx&&D.trickle){let i=Math.hypot(We.position.x-Jt.x,We.position.z-Jt.z);D.trickle.gain.setTargetAtTime(.06*Math.max(0,1-i/6),D.ctx.currentTime,.3)}let t=performance.now();Gs&&t-Bm>90&&(Co.needsUpdate=!0,Gs=!1,Bm=t),lS(t),tn.done||($n?(wo&&(wo.enabled=rt&&!j.on&&!we.on),Qc&&(Qc.uniforms.uTime.value=e),$n.render()):Zn.render(de,vt)),d0&&(d0=!1,requestAnimationFrame(()=>{let i=N("loading");i&&i.remove()})),mw(t),requestAnimationFrame(Rg)}var pw={uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 c=texture2D(tDiffuse,vUv);float v=smoothstep(0.95,0.32,length(vUv-0.5));c.rgb*=mix(0.78,1.0,v);c.rgb+= (h(vUv*1000.+uTime)-0.5)*0.018*(c.rgb+0.15);gl_FragColor=c;}"},$n=null,ff=null,f0=null,wo=null,Qc=null;st.post&&($n=new dc(Zn),st.ao?(ff=new vc(de,vt,innerWidth,innerHeight),Object.assign(ff.configuration,{aoRadius:1.4,distanceFalloff:.9,intensity:2.4,halfRes:st.ao===1,aoSamples:st.ao===1?8:16,denoiseSamples:st.ao===1?4:8,denoiseRadius:st.ao===1?8:12,gammaCorrection:!1,color:new ce("#1c1712")}),$n.addPass(ff)):$n.addPass(new pc(de,vt)),st.bloom&&(f0=new la(new $(innerWidth/2,innerHeight/2),.5,.55,.95),$n.addPass(f0)),st.dof&&(wo=new gc(de,vt,{focus:9,aperture:9e-4,maxblur:.005}),wo.enabled=!1,$n.addPass(wo)),Qc=new oa(pw),$n.addPass(Qc),$n.addPass(new mc));document.querySelectorAll("#qBtns button").forEach(n=>{n.classList.toggle("on",n.dataset.q===Os),n.onclick=()=>Ag(n.dataset.q)});function Ag(n){if(n===Os)return;he.quality=n,Sa(),Vo();let e=N("fade");e.textContent="\u63DB\u6210\u300C"+Cc[n].name+"\u300D\u756B\u8CEA\u2026",e.classList.add("on","msg"),setTimeout(()=>{try{location.reload()}catch{}},350),setTimeout(()=>{e.classList.remove("on","msg"),e.textContent="",Rt("\u91CD\u65B0\u6253\u958B\u9801\u9762\u5F8C\uFF0C\u5C31\u6703\u63DB\u6210\u300C"+Cc[n].name+"\u300D\u756B\u8CEA",4200)},3500)}var xn={t0:0,frames:0,low:0,asked:!1,started:!1};N("startBtn").addEventListener("click",()=>{xn.started=!0,xn.t0=performance.now()+2500,xn.frames=0});function mw(n){if(!(!xn.started||xn.asked||Os==="low"||document.hidden||tn.on)){if(n<xn.t0){xn.frames=0;return}if(xn.frames++,n-xn.t0>5e3){let e=xn.frames*1e3/(n-xn.t0);xn.t0=n,xn.frames=0,e<22?(xn.low++,xn.low>=2&&(xn.asked=!0,N("perfTip").classList.add("show"))):xn.low=0}}}N("perfYes").onclick=()=>Ag(Os==="high"?"mid":"low");N("perfNo").onclick=()=>N("perfTip").classList.remove("show");addEventListener("resize",()=>{vt.aspect=innerWidth/innerHeight,hd(),Zn.setSize(innerWidth,innerHeight),$n&&$n.setSize(innerWidth,innerHeight)});g0(Oo(),!0);var d0=!0;location.search.includes("dev")&&(window.__camdbg=()=>[vt.position.toArray().map(n=>+n.toFixed(2)),os.toArray().map(n=>+n.toFixed(2))]);window.__g={player:We,sit:yf,stand:Bo,bowls:Ke,startBowls:ld,endBowls:cd,setBowlMode:hh,bowlStrike:qo,BOWLS:ni,applySeason:Yf,setTime:n=>{qs=n,ms()},setYaw:n=>{Bs=n},setDist:n=>{pi=n},TODAY:yo,tea:j,rainbow:Yt,cat:Te,AV:q,setMood:lh,templeBell:Tg,openBook:sd,startPhoto:vg,encodeLayout:xg,decodeLayout:yg,playAnim:th,rainOn:n=>{ds.on=n,ds.next=performance.now()+1e9,ms()},cam:(n,e)=>{Ac=n?{p:new S(...n),l:new S(...e)}:null}};Rg();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
