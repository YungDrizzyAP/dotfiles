"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6994],{56994:(e,t,a)=>{a.d(t,{z2:()=>Z});var i=a(30758),r=a(97500),n=a.n(r),s=a(48872),o=a(40638),l=a(97505);function c(e,t,a){const i=e.current;if(null===i)return 0;const r=i.getBoundingClientRect();return"vertical"===a?1-Math.max(0,Math.min((t.clientY-r.top)/r.height,1)):Math.max(0,Math.min((t.clientX-r.left)/r.width,1))}var u=a(38684),h=a(63166),d=a(65152);const f=20,g=[{name:"dark",frames:f},{name:"normal",frames:f},{name:"dark",frames:f},{name:"normal",frames:f},{name:"dark",frames:320},{name:"dark",frames:80,isStartOfFlashlightEnter:!0},{name:"flashlight-on",frames:f},{name:"dark",frames:f},{name:"flashlight-on",frames:f},{name:"dark",frames:40},{name:"flashlight-on",isInfinite:!0},{name:"dark",frames:f,isStartOfExit:!0},{name:"flashlight-on",frames:f},{name:"dark",frames:f},{name:"flashlight-on",frames:f},{name:"dark",frames:f},{name:"normal",isInfinite:!0,isEndOfExit:!0}],m=200;function b(e,t){const a=document.createElement("canvas"),i=a.getContext("2d");if(null===i)return null;const r=Math.sqrt(e**2+t**2),n=m;return a.width=r/1.5+2*n,a.height=r+2*n,i.translate(n,n),{canvas:a,context:i,width:a.width-2*n,height:a.height-2*n,padding:n}}function p(e,t,a,i,r=0){const n=i/2*Math.PI/180,s=a/Math.cos(n),o=Math.sin(n)*s*2;e.beginPath(),e.moveTo((t-o)/2,r),e.lineTo(t/2,r+a),e.lineTo((t-o)/2+o,r),e.closePath()}function v(e,t){const a=function(e,t){const a=(0,i.useMemo)((()=>{const e=new Image;return e.src=(0,d.b)("images/stranger-things-nether-bottom-left.png"),e}),[]),r=(0,i.useMemo)((()=>{const e=new Image;return e.src=(0,d.b)("images/stranger-things-nether-bottom-right.png"),e}),[]);return function(i){if(r){const a=e-r.naturalWidth,n=t-r.naturalHeight;i.drawImage(r,0,0,r.naturalWidth,r.naturalHeight,a,n,r.naturalWidth,r.naturalHeight)}if(a){const e=0,r=t-a.naturalHeight;i.drawImage(a,0,0,a.naturalWidth,a.naturalHeight,e,r,a.naturalWidth,a.naturalHeight)}}}(e,t),[r,n]=(0,i.useState)(y(e,t)),[s,o]=(0,i.useState)(w(e,t));return(0,i.useEffect)((()=>{n(y(e,t)),o(w(e,t))}),[e,t]),(i,n,o,l)=>{if(!r||!s)return;const c=o/100,u=n.left+n.width*c,h=n.top+n.height/2;let d=0;d=c>.5?(c-.5)/.5*-60:60-c/.5*60;const f=r.width,m=r.height,b=-r.width/2,p=-r.height,v=f,y=m;i.save(),i.fillStyle="rgba(0, 0, 0, 0.85)",i.fillRect(0,0,e,t);const w=i.createLinearGradient(e/2,0,e/2,t);w.addColorStop(0,"rgba(57, 139, 216, 0.3)"),w.addColorStop(1,"rgba(0, 29, 62, 0.15)"),i.fillStyle=w,i.fillRect(0,0,e,t),"flashlight-on"===g[l].name?(i.save(),i.translate(u,h),i.rotate(d*Math.PI/180),i.globalCompositeOperation="destination-out",i.drawImage(r,0,0,f,m,b,p+100,v,y),i.restore(),a(i),i.save(),i.translate(u,h),i.rotate(d*Math.PI/180),i.globalCompositeOperation="source-over",i.drawImage(s,0,0,f,m,b,p+100,v,y),i.restore()):a(i),i.restore()}}function y(e,t){const a=b(e,t);if(!a)return null;const{canvas:i,context:r,width:n,height:s,padding:o}=a,l=r.createLinearGradient(n/2,0,n/2,s);l.addColorStop(0,"rgba(0, 0, 0, 1)"),l.addColorStop(1,"rgba(0, 0, 0, 0)");const c=r.createLinearGradient(n/2,0,n/2,s);return c.addColorStop(.7,"rgba(0, 0, 0, 1)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),r.save(),r.fillStyle="rgba(0, 0, 0, 1)",p(r,n,s,30,120),r.filter="blur(10px)",r.fill(),r.restore(),r.globalCompositeOperation="destination-out",r.fillStyle=c,r.fillRect(-o,-o,n+2*o,s+2*o),r.globalCompositeOperation="source-over",r.fillStyle="rgba(0, 0, 0, 1)",p(r,n,s,5,40),r.filter="blur(30px)",r.fill(),r.fillStyle="rgba(0, 0, 0, 1)",p(r,n,s,30,80),r.filter="blur(40px)",r.fill(),r.restore(),r.globalCompositeOperation="destination-out",r.fillStyle=l,r.fillRect(-o,-o,n+2*o,s+2*o),i}function w(e,t){const a=b(e,t);if(!a)return null;const{canvas:i,context:r,width:n,height:s,padding:o}=a;r.save(),r.fillStyle="rgba(80, 170, 255, 0.6)",p(r,n,s,30,120),r.filter="blur(10px)",r.fill(),r.restore();const l=r.createLinearGradient(n/2,0,n/2,s);l.addColorStop(.7,"rgba(0, 0, 0, 1)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),r.globalCompositeOperation="destination-out",r.fillStyle=l,r.fillRect(-o,-o,n+2*o,s+2*o),r.globalCompositeOperation="source-over",r.fillStyle="rgba(80, 170, 255, 0.8)",p(r,n,s,5,40),r.filter="blur(30px)",r.fill(),r.fillStyle="rgba(80, 170, 255, 0.4)",p(r,n,s,30,150),r.filter="blur(40px)",r.fill(),r.restore(),r.save(),r.translate(n/2,s-140),r.scale(1,10),r.fillStyle="rgba(198, 238, 251, 0.2)",r.filter="blur(24px)",r.beginPath(),r.arc(0,0,22,0,2*Math.PI),r.fill(),r.fillStyle="rgba(234, 255, 255, 0.2)",r.filter="blur(18px)",r.beginPath(),r.arc(0,0,20,0,2*Math.PI),r.fill(),r.restore(),r.save(),r.translate(n/2,s-70),r.scale(1,5),r.fillStyle="rgba(198, 238, 251, 0.1)",r.filter="blur(14px)",r.beginPath(),r.arc(0,0,18,0,2*Math.PI),r.fill(),r.fillStyle="rgba(234, 255, 255, 0.1)",r.filter="blur(8px)",r.beginPath(),r.arc(0,0,20,0,2*Math.PI),r.fill(),r.restore(),r.fillStyle="rgba(100, 190, 255, 1)",r.filter="blur(22px)",r.beginPath(),r.arc(n/2,s+100,20,0,2*Math.PI),r.fill(),r.fillStyle="rgba(198, 238, 251, 1)",r.filter="blur(4px)",r.beginPath(),r.arc(n/2,s+100,14,0,2*Math.PI),r.fill(),r.fillStyle="rgba(234, 255, 255, 1)",r.filter="blur(1px)",r.beginPath(),r.arc(n/2,s+100,12,0,2*Math.PI),r.fill();const c=r.createLinearGradient(n/2,0,n/2,s);return c.addColorStop(0,"rgba(0, 0, 0, 1)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),r.globalCompositeOperation="destination-out",r.fillStyle=c,r.fillRect(-o,-o,n+2*o,s+2*o),r.globalCompositeOperation="source-over",i}const S=100,x=[{size:6,alpha:.5},{size:6,alpha:.4},{size:12,alpha:.3},{size:12,alpha:.3},{size:12,alpha:.3},{size:14,alpha:.2},{size:20,alpha:.2},{size:30,alpha:.2},{size:40,alpha:.1}],M=64,E=8,I=2;function P(e,t){const a=(0,i.useMemo)((()=>{const e=new Image;return e.src=(0,d.b)("images/stranger-things-spores.png"),e}),[]),[r,n]=(0,i.useState)(C(e,t));return(0,i.useEffect)((()=>{r?function(e,t,a){e.forEach((e=>{e.x=Math.random()*t,e.y=Math.random()*a}))}(r,e,t):n(C(e,t))}),[e,t,r]),function(i){null!==a&&r.forEach((r=>{r.x-=r.directionX*r.velocityX,r.y-=r.directionY*r.velocityY,r.y>t+10?(r.x=Math.random()*e,r.y=-10):r.x<-10&&(r.x=e+10,r.y=Math.random()*t);const n=r.spriteSheetX,s=r.spriteSheetY,o=M,l=M,c=r.x-r.size/2,u=r.y-r.size/2,h=r.size,d=r.size;i.save(),i.globalAlpha*=r.alpha,i.drawImage(a,n,s,o,l,c,u,h,d),i.restore()}))}}function C(e,t){const a=[];for(let i=0;i<S;i++){const i=Math.floor(Math.random()*x.length),r=Math.floor(Math.random()*E),n=Math.floor(Math.random()*I),s=x[i].size,o=x[i].alpha;a.push({alpha:o,size:s,spriteSheetX:r*M,spriteSheetY:n*M,x:Math.random()*e,y:Math.random()*t,directionX:Math.random()>.5?1:-1,directionY:Math.random()>.5?1:-1,velocityX:s/300,velocityY:s/400})}return a}class k{_subscribers=[];_active=!1;unsubscribeToActivity(e){const t=this._subscribers.findIndex((t=>t.fn===e));-1!==t&&(clearTimeout(this._subscribers[t].inactiveTimeout),this._subscribers.splice(t,1))}subscribeToActivity(e,t){this._subscribers.push({fn:t,msInactive:e,isActive:!1})}enableActivityMonitor(){window.addEventListener("mousemove",this._onActivity),window.addEventListener("mouseup",this._onActivity),window.addEventListener("keydown",this._onActivity),window.addEventListener("scroll",this._onActivity,!0)}disableActivityMonitor(){window.removeEventListener("mousemove",this._onActivity),window.removeEventListener("mouseup",this._onActivity),window.removeEventListener("keydown",this._onActivity),window.removeEventListener("scroll",this._onActivity,!0),this._subscribers.forEach((e=>clearTimeout(e.inactiveTimeout))),this._subscribers=[]}_onActivity=()=>{this._subscribers.forEach((e=>{this._active||(this._active=!0,e.fn(this._active)),clearTimeout(e.inactiveTimeout),e.inactiveTimeout=setTimeout((()=>{this._active=!1,e.fn(this._active)}),e.msInactive)}))}}class T{frame=0;lastPhaseFrame=0;phase=0;animationFrameRequestId=null;flickerTimerId=null;isPlaying=!0;start(){this.lastPhaseFrame=this.frame,this.phase=0;const e=()=>setTimeout((()=>{this.flickerTimerId=e(),this.isPlaying&&g[this.phase].isInfinite&&this.setPhase(g.findIndex((e=>e.isStartOfFlashlightEnter)))}),15e3*Math.random()+5e3);this.flickerTimerId=e()}stop(){const e=g.findIndex((e=>e.isStartOfExit));this.phase<e&&this.setPhase(e),null!==this.flickerTimerId&&clearTimeout(this.flickerTimerId)}setPhase(e){this.lastPhaseFrame=this.frame,this.phase=e}}const _="TNGv07zrye9gB_3ukweR";var A=a(86070);const R=e=>{const{getPercentage:t,isDragging:a=!1,isPlayingStrangerThings:r=!1,progressBar:n}=e,s=(0,i.useMemo)((()=>new k),[]),o=(0,i.useMemo)((()=>new T),[]),l=(0,i.useRef)(null),[c,u]=(0,i.useState)(null),[h,d]=(0,i.useState)(window.innerHeight),[f,m]=(0,i.useState)(window.innerWidth),[b,p]=(0,i.useState)(!1),[y,w]=(0,i.useState)(!1),S=P(f,h),x=v(f,h),M=(0,i.useCallback)((e=>{!a&&r&&(e?o.stop():(o.start(),w(!0)))}),[a,r,o]),E=(0,i.useCallback)((()=>{r&&(o.setPhase(g.findIndex((e=>e.isStartOfFlashlightEnter))),w(!0))}),[r,o]),I=(0,i.useCallback)((()=>{o.stop()}),[o]),C=(0,i.useCallback)((()=>{if(!y)return void p(!0);p(!1);const e=window.innerHeight,t=window.innerWidth;m(t),d(e)}),[y]),R=(0,i.useCallback)((()=>{if(!l.current)return;const{frame:e,lastPhaseFrame:a,phase:i}=o;if(o.frame=e+1,g[i].isEndOfExit)w(!1);else{if(g[i].isInfinite||e-a===g[i].frames&&o.setPhase(i+1),l.current.width=f,l.current.height=h,"normal"!==g[i].name){const e=l.current.getContext("2d");if(!e||!c)return;const a=t();x(e,c,a,i),S(e)}o.animationFrameRequestId=requestAnimationFrame(R)}}),[h,f,x,S,t,c,o]);return(0,i.useEffect)((()=>{window.addEventListener("resize",C);const e=s;return e.enableActivityMonitor(),e.subscribeToActivity(5e3,M),()=>{window.removeEventListener("resize",C),e.disableActivityMonitor(),e.unsubscribeToActivity(M)}}),[s,M,C]),(0,i.useEffect)((()=>{r||o.stop()}),[r,o]),(0,i.useEffect)((()=>{a?E():a||I()}),[a,E,I]),(0,i.useEffect)((()=>{y?(b&&C(),o.animationFrameRequestId=requestAnimationFrame(R)):o.animationFrameRequestId&&cancelAnimationFrame(o.animationFrameRequestId)}),[y,R,C,b,o]),(0,i.useEffect)((()=>{n.current&&u(n.current.getBoundingClientRect())}),[f,h,n]),y?(0,A.jsx)("canvas",{className:_,ref:l,width:f,height:h}):null};var z=a(19412);const F=e=>(0,h.NC)(z.c3z,{loadingValue:!1})&&e.isPlayingStrangerThings?(0,A.jsx)(R,{...e}):null;var D=a(49543);const O="playback-progressbar",L="playback-progressbar-isInteractive",q="progress-bar",N="x-progressBar-progressBarBg",j="x-progressBar-sliderArea",W="oShi2lRbnhFkEr2LlUqC",B="ZqlJ1uWjMeen9ye7Y7GC",Y="x-progressBar-fillColor",X="VI_bMRxDl9fS6qksct7W",H="sW0M_K97doEB3B4Ts58i",G="progress-bar--isDragging",V="progress-bar__slider",Z=({value:e,max:t,step:a,labelText:r,isInteractive:h=!0,forceActiveStyles:d=!1,onDragStart:f,onDragMove:g,onDragEnd:m,onStepForward:b,onStepBackward:p,saberConfig:v=null,isPlayingStrangerThings:y=!1,isAttackOnTitanEasterEggActive:w,direction:S="horizontal",enableAnimation:x,updateFrequency:M,offFrequencyUpdate:E,className:I,...P})=>{const C=(0,i.useRef)(null),{isDragging:k,onMouseDown:T}=(({progressBarRef:e,onDragStart:t,onDragMove:a,onDragEnd:r,direction:n="horizontal"})=>{const[s,u]=(0,i.useState)(!1),h=(0,i.useRef)(!1),d=(0,l.ZY)(),f=(0,i.useRef)(t),g=(0,i.useRef)(a),m=(0,i.useRef)(r);f.current=t,g.current=a,m.current=r;const b=(0,o.YQ)((t=>{g.current(c(e,t,n)),h.current=!0}),20,{leading:!0,maxWait:20});return{isDragging:s,onMouseDown:(0,i.useCallback)((t=>{const a=t=>{u(!1),b.cancel(),m.current(c(e,t,n),{wasDraggedBeforeReleased:h.current}),d?.removeEventListener("pointermove",b),h.current=!1};0===t.button&&(f.current(c(e,t,n)),u(!0),d?.addEventListener("pointermove",b),d?.addEventListener("pointerup",a,{once:!0}),h.current=!1)}),[b,e,n,d])}})({progressBarRef:C,onDragStart:f,onDragMove:g,onDragEnd:m,direction:S}),_=h?100*Math.max(0,Math.min(1,e/t)):0,R=d||k,z=h&&null!==v,Z=h&&!(0,D.n)(),Q=(({onStepForward:e,onStepBackward:t,value:a})=>(0,o.YQ)((i=>{parseFloat(i.target.value)>a?e?.():t?.()}),100,{trailing:!1,leading:!0,maxWait:200}))({onStepForward:b,onStepBackward:p,value:e}),U=(0,i.useCallback)((()=>_),[_]),K=(0,l.ZY)(),$=(0,i.useRef)(K?.visibilityState),J=K?.visibilityState,ee=k||E||"hidden"===J||"hidden"===$.current||0===e;$.current=J;const te=x?W:"";return(0,A.jsxs)("div",{className:n()(O,I,{[L]:h,[B]:ee}),"data-testid":P["data-testid"],children:[(0,A.jsx)(s.o,{disabled:!h,type:"range",min:0,max:t,value:e,step:a,onChange:Q,"aria-valuetext":P["aria-valuetext"],children:r}),(0,A.jsxs)("div",{className:n()(q,{[X]:null!==v,[G]:R}),style:{...z?v:null,"--progress-bar-transform":`${_}%`,"--progress-bar-duration":`${Number(M)}ms`,...w?{"--fg-color":u.q,"--is-active-fg-color":u.q}:null},onPointerDown:T,"data-testid":"progress-bar",children:[z?(0,A.jsx)("div",{className:H,"data-testid":"progress-bar-saber-overlay"}):null,(0,A.jsxs)("div",{ref:C,className:N,"data-testid":"progress-bar-background",children:[(0,A.jsx)("div",{className:j,children:(0,A.jsx)("div",{className:n()(Y,te)})}),(0,A.jsx)("div",{className:n()(V,te)})]}),Z&&(0,A.jsx)("div",{style:{width:"100%"},children:(0,A.jsx)(F,{getPercentage:U,progressBar:C,isPlayingStrangerThings:y,isDragging:k})})]})]})}},38684:(e,t,a)=>{a.d(t,{q:()=>o,O:()=>l});var i=a(63166),r=a(19412),n=a(67526);const s="spotify:playlist:37i9dQZF1DWXkVfVmXHa7l",o="#D4000E";function l(){const e=(0,i.NC)(r.Aem,{loadingValue:!1}),{isActive:t}=(0,n.l_)(s);return e&&t}}}]);
//# sourceMappingURL=6994.js.map