"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4574],{39008:(e,l,o)=>{o.d(l,{YourSoundCapsuleModal:()=>N});var s=o(30758),t=o(95440),u=o(33167),a=o(68053),n=o(8396),r=o(73803),d=o(63166),i=o(17674),c=o(84576),p=o(1978),m=o(20618),y=o(40748),_=o(61214),b=o(64721),f=o(49058);const w=()=>{const e=["IN","BR","ID"],l=(0,t.d4)(f.JJ);return e.includes(l?.toUpperCase())};var g=o(65311),P=o(95052);let h=function(e){return e.NOT_AVAILABLE="not-available",e.PREMIUM="premium",e.OPEN_APP="open-app",e}({});const x=()=>{const e=w(),l=(0,t.d4)(P.Yb),o=(0,g.V)();return e?l||o?h.PREMIUM:h.OPEN_APP:h.NOT_AVAILABLE};var v=o(90565),R=o(99549);const E="BGbkTNBgT3ZySaYM4ufS";var k=o(86070);const A=({isPremium:e})=>{const l=(0,v.k)(),{url:o,isExternal:s}=l,u=(0,p.Zp)(),a=(0,t.wA)(),d=x(),i=(0,g.V)(),f=(0,c.vh)(),w=(e,l)=>{const o={category:"your_sound_capsule_modal",action:"click",label:e,destination_url:l},s=i?(0,r.Z)(o):(0,n.Q)(o);f.send(s)};return(0,k.jsxs)("div",{className:E,children:[(0,k.jsx)(y.H,{condensed:!0,size:"small",onClick:()=>{w(`${d}-dismiss`),a(R.XL.actions.close())},children:b.Ru.get("web-player.your-sound-capsule-modal.dismiss")}),e&&(0,k.jsx)(_.$,{size:"small",onClick:()=>{w(`${d}-get-premium`,`${o}?ref=your_sound_capsule_modal`),!1===s?u({pathname:"/premium",search:(0,m.PI)({ref:"your_sound_capsule_modal"}).toString()}):window.open(`${o}?ref=your_sound_capsule_modal`,"_blank")},children:b.Ru.get("web-player.your-sound-capsule-modal.get-premium")})]})},C=()=>{switch(x()){case h.PREMIUM:return{title:b.Ru.get("web-player.your-sound-capsule-modal.premium-title"),text:b.Ru.get("web-player.your-sound-capsule-modal.premium-text")};case h.OPEN_APP:return{title:b.Ru.get("web-player.your-sound-capsule-modal.open-app-title"),text:b.Ru.get("web-player.your-sound-capsule-modal.open-app-text")};default:return{title:b.Ru.get("web-player.your-sound-capsule-modal.not-available-title"),text:b.Ru.get("web-player.your-sound-capsule-modal.not-available-text")}}};var M=o(19412),I=o(56608);const N=()=>{const e=(0,t.d4)(I.fl),l=(0,d.NC)(M.oFY),o=x(),{title:p,text:m}=C(),y=(0,c.vh)(),_=(0,g.V)();return(0,s.useEffect)((()=>{if(!e||!l)return;const s={category:"your_sound_capsule_modal",action:"view",label:`${o}-view`},t=_?(0,r.Z)(s):(0,n.Q)(s);y.send(t)}),[e,l,_,y,o]),l?(0,k.jsx)(i.A,{isOpen:e,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,children:(0,k.jsx)(u.Q,{id:"your-sound-capsule-modal",dialogTitle:p,body:(0,k.jsx)(a.Z,{children:m}),footer:(0,k.jsx)(A,{isPremium:o===h.PREMIUM})})}):null}}}]);
//# sourceMappingURL=your-sound-capsule-modal.js.map