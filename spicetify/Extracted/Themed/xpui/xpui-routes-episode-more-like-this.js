"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[399],{9885:(e,t,i)=>{i.d(t,{k:()=>u});var r=i(30758),a=i(64721),n=i(37435),s=i(89494),o=i(36748),l=i(5886),d=i(86070);const u=({id:e,children:t,targetURI:i,fadeOut:u=!1})=>{const c=(0,r.useCallback)((()=>{window.open((0,o.rw)(i).href)}),[i]),g={getTitle:()=>a.Ru.get("action-trigger.available-in-app-only"),getDescription:()=>a.Ru.get("action-trigger.listen-mixed-media-episode"),primaryButtonText:()=>a.Ru.get("action-trigger.button.get-app"),secondaryButtonText:()=>a.Ru.get("action-trigger.button.not-now"),isCTA:!0,intentPrimaryButton:"download-app",onLogInteraction:(0,s.W)(),shouldHideOnScroll:!0,fadeOut:u};return(0,d.jsx)(n.U,{className:l.A.container,id:e,onPrimaryButtonClick:c,options:g,children:t})}},97953:(e,t,i)=>{i.d(t,{W:()=>V});var r=i(97500),a=i.n(r),n=i(75627),s=i(64721),o=i(16249),l=i(86565),d=i(50684);const u=new l.l("internalLinkRecommenderEpisode","query","1a707c8b0ffba70f26bb06446ad3c3b75c966e35a9f71a00120a67444558f321",null);var c=i(43431),g=i(30758),p=i(95440),m=i(63642),y=i(9885),h=i(13377),f=i(48732),_=i(68371),b=i(37435),w=i(30860),v=i(92057),x=i(65311),P=i(61155),k=i(71502),S=i(44632),I=i(74511),T=i(95309),C=i(90089),R=i(88417),j=i(40564),A=i(19434),E=i(30057),U=i(86070);const N=e=>`activation-trigger-mme-${e}`,M=g.memo((function({index:e=-1,audio:t,contentInformation:i,coverArt:r,contentRatingLabel:a,description:s,mediaTypes:o,isoString:l,name:d,playable:u,playedState:c,podcastSubscription:M,sharingInfo:D,showName:$,showTrailer:F,showTypes:L,showUri:O,status:W,totalMilliseconds:B,type:G,uri:V}){const q=c.playPositionMilliseconds,z=(0,g.useRef)(null),[H,Q]=(0,g.useState)(c.state===A._w.Completed),{draggable:Y,onDragStart:Z}=(0,v.P)(),X=(0,x.V)(),J=(0,C.y)(),K=(0,p.wA)(),{isActive:ee,isPlaying:te,togglePlay:ie}=(0,R.P)({uri:V},{featureIdentifier:"episode"}),[re]=(0,j.S)(1e4,(e=>e?.item?.uri===V));(0,g.useEffect)((()=>{te&&(z.current=re)}),[te,re]),(0,g.useEffect)((()=>{!te&&z.current&&B<=z.current&&Q(!0)}),[te,B]);const ae=(0,g.useCallback)((e=>{e||(z.current=0),Q(e)}),[]),ne={uri:O,name:$,trailer:F,showTypes:L},se=(0,P.C)({audio:t,name:d,uri:V,mediaTypes:o,coverArt:{sources:r}},ne),oe=(0,g.useCallback)((()=>{G!==A.I_.Episode?X?se():ie():b.h.set((()=>({triggerId:N(V),triggerAction:null})))}),[G,X,V,se,ie]),le=M?.isPaywalled??!1,de=M?.isUserSubscribed??!1,ue=le&&!de,ce=le&&X,{badges:ge}=(0,E.b)({contentRating:a,isPaywalled:le}),pe=(0,g.useCallback)((()=>K((0,m.Tf)(O))),[O,K]),me=(0,g.useCallback)((e=>{let t=e;return(ue||ce)&&(t=(0,U.jsx)(w.N,{enabled:!0,showUri:O,children:t})),!u&&ge.nineteen&&(t=(0,U.jsx)("div",{onClick:e=>{e.stopPropagation(),pe()},children:e})),t=(0,U.jsx)(y.k,{id:N(V),targetURI:(0,n.o_h)(V),children:t}),t}),[ue,ce,u,ge.nineteen,V,O,pe]);return(0,U.jsx)(T.pZ,{value:"row",index:e,children:(0,U.jsx)(h.h,{menu:(0,U.jsx)(f.b,{uri:V,showUri:O,sharingInfo:D,isPlayed:H,onMarkAsPlayed:ae}),children:(0,U.jsx)(_.k,{requestId:void 0,index:e,uri:V,size:J,images:r||[],name:d,showName:$,description:s,isPlayable:u||ue,fullyPlayed:H,durationMs:B,releaseDate:l||"",resumePositionMs:z.current??q,draggable:Y,handleDragStart:e=>{if(e.target!==e.currentTarget)return;Z(e,{itemUris:[V],dragLabelText:`${d} • ${$}`,contextUri:O})},handlePlaybackClick:oe,isCurrentlyPlaying:ee,isPaywalled:le,isUserSubscribed:de,isPlaying:te,position:te?re:void 0,episodeSharingInfo:D,onMarkAsPlayed:ae,contentInformation:i,showUri:O,mediaTypes:o??void 0,badges:(0,U.jsxs)(U.Fragment,{children:[ge.explicit&&(0,U.jsx)(k.U,{}),ge.paid&&(0,U.jsx)(S.y,{}),ge.nineteen&&(0,U.jsx)(I.q,{size:16})]}),playButtonWrapper:me,status:W})})})}));var D=i(24902);var $=i(25355),F=i(58528);const L="GgMHVmfXNzteIydSWMIA",O="GcupflQsYyy0IMOsCeD1",W="A4FqrLbXeENogU0IRaPn",B="YCYs0Gv5B5ctDN0f5Zby",G=({uri:e,isFullPage:t=!1})=>{const{data:i}=(r={uri:e},(0,d.I)(u,r,o));var r,o;const l=i?.seoRecommendedEpisode.totalCount,c=i?.seoRecommendedEpisode.items,g=function(e){return(e||[]).filter((e=>(e=>{return t=e,"NotFound"!==t?.__typename&&"GenericError"!==t?.__typename&&"RestrictedContent"!==t?.__typename&&"Episode"===e.__typename;var t})(e.data)))}(c),p=t?g:g.slice(0,5);if(0===l)return null;const m=(0,n.o_h)(e)?.id,y=`spotify:app:episode:${m}:more-like-this`;return(0,U.jsxs)("section",{className:a()(L,{[O]:!t}),"data-testid":"episode-list",children:[(0,U.jsx)($.k,{title:s.Ru.get("internal-link-recommender.more-episodes-like-this"),showSeeAll:!t,seeAllUri:y}),p.map((({data:e},t)=>{const i=(e=>{return t=e,"NotFound"!==t?.__typename&&"GenericError"!==t?.__typename&&"RestrictedContent"!==t?.__typename&&"Podcast"===e.__typename;var t})(e.podcastV2.data)?e.podcastV2.data:null;return i?e&&(0,U.jsxs)("div",{className:B,children:[(0,U.jsx)("hr",{className:W,"aria-hidden":!0}),(0,U.jsx)(M,{index:t,audio:e.audio,contentInformation:e.contentInformation,contentRatingLabel:e.contentRating?.label,coverArt:e.coverArt?e.coverArt.sources:void 0,description:e.description,isoString:e.releaseDate?.isoString,mediaTypes:e.mediaTypes,name:e.name,playable:e.playability.playable,playedState:e.playedState,podcastSubscription:(0,F.Wx)(e.restrictions,e.playability),sharingInfo:e.sharingInfo,showTrailer:(r=i.trailerV2?.data,r&&(e=>{return t=e,"NotFound"!==t?.__typename&&"GenericError"!==t?.__typename&&"RestrictedContent"!==t?.__typename&&"Episode"===e.__typename;var t})(r)?{type:D.c.EPISODE,uri:r.uri,name:r.name,coverArt:r.coverArt?.sources||[],audio:r.audio,audioPreview:r.audioPreview,sharingInfo:r.sharingInfo,duration:{milliseconds:r.duration.totalMilliseconds},contentRating:r.contentRating,mediaTypes:r.mediaTypes}:null),showName:i.name,showTypes:i.showTypes,showUri:i.uri,totalMilliseconds:e.duration.totalMilliseconds,type:e.type,uri:e.uri},`${e.uri}/${t}`)]},`${t}${e.uri}`):null;var r}))]})},V=e=>{const t=(0,c.D)({entityType:D.c.EPISODE,componentType:"list",uri:e.uri});return(0,U.jsx)(o.s,{onError:t,children:(0,U.jsx)(G,{...e})})}},4893:(e,t,i)=>{i.d(t,{EpisodeMoreLikeThis:()=>d});var r=i(30758),a=i(1978),n=i(64721),s=i(18212),o=i(97953),l=i(86070);const d=r.memo((function(){const{episodeId:e=""}=(0,a.g)(),t=(e=>`spotify:episode:${e}`)(e);return(0,l.jsxs)("div",{className:"contentSpacing",children:[(0,l.jsx)(s.Q,{children:n.Ru.get("internal-link-recommender.more-episodes-like-this")}),(0,l.jsx)(o.W,{uri:t,isFullPage:!0})]})}))},61155:(e,t,i)=>{i.d(t,{C:()=>y});var r=i(30758),a=i(63166),n=i(89494),s=i(19412);const o=e=>e<=64?"small":e>640?"xlarge":e>300?"large":"standard";function l(e,t){return e.filter((e=>e.label?e.label===t:e.width?o(e.width)===t:!!e.height&&o(e.height)===t))[0]}var d=i(98842);var u=i(99916);function c(e){const t=l(e,"standard"),i=l(e,"large"),r=l(e,"small"),a=l(e,"xlarge");return{image_url:t?.url,image_height:t?.height?.toString(),image_width:t?.width?.toString(),image_url_large:i?.url,image_height_large:i?.height?.toString(),image_width_large:i?.width?.toString(),image_url_small:r?.url,image_height_small:r?.height?.toString(),image_width_small:r?.width?.toString(),image_url_xlarge:a?.url,image_height_xlarge:a?.height?.toString(),image_width_xlarge:a?.width?.toString()}}var g=i(32751),p=i(67526),m=i(24902);function y(e,t){const i=(0,n.W)(),o=(0,g.z)(),{isPlaying:l,isActive:y}=(0,p.te)(e?.uri||""),{isActive:h}=(0,p.l_)(t?.uri||""),f=(0,a.NC)(s.pZ0);return(0,r.useCallback)((r=>{if(!t||!e)return;const a=function(e,t,i=!1){const r=(e.coverArt?.sources||[]).sort(((e,t)=>(t.width||0)-(e.width||0))),a=(0,d.QH)(e,t),n=(0,d.gf)(t)||a,s=e.mediaTypes&&e.mediaTypes.includes(u.Cx.Video)?"video":"audio";return{uri:e.uri,title:e.name,subtitle:t.name,type:"episode",album_uri:t.uri,album_title:t.name,artist_uri:t.uri,artist_name:t.name,...c(r),media_type:i?s:"audio",isTrailer:a,anonymousPlaybackAllowed:n}}(e,t,f);h&&!l&&y&&!r?o.resume():h&&l&&!r?(i({type:"click",intent:"pause",targetUri:e.uri}),o.pause()):(i({type:"click",intent:"play",targetUri:e.uri}),o.play({uri:t.uri,pages:[{items:[{type:m.c.EPISODE,uri:e.uri,uid:null,metadata:a,provider:null}]}]},{referrerIdentifier:o.getReferrer(),featureIdentifier:"episode"},r))}),[t,e,f,h,l,y,o,i])}}}]);
//# sourceMappingURL=xpui-routes-episode-more-like-this.js.map