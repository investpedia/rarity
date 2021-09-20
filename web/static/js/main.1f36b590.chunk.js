(this["webpackJsonp@crypto-dev-amigos/client"]=this["webpackJsonp@crypto-dev-amigos/client"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),s=n.n(i),o=(n(11),n(12),n(13),n(2)),a=n.n(o),j=n(4),l=n(3),d=n(0),u=0,b=function(e){var t=e.children,n=Object(c.useRef)(null),r=Object(c.useState)(!1),i=Object(l.a)(r,2),s=i[0],o=i[1],a=Object(c.useRef)(!1);return Object(c.useEffect)((function(){if(n.current){var e=u++;if(n.current){var t=n.current;return new IntersectionObserver((function(c,r){n.current?c.some((function(e){return e.isIntersecting}))&&(n.current&&(a.current||(console.log("loadComponent",{lazyComponentId:e}),a.current=!0,o(!0))),r.unobserve(t)):r.unobserve(t)}),{threshold:.1}).observe(n.current),function(){a.current=!0}}}}),[]),Object(d.jsxs)(d.Fragment,{children:[!s&&Object(d.jsx)("div",{ref:n,style:{minWidth:1e3,minHeight:1e3}}),s&&t]})},x=function(e){return"/data/".concat(e,"/project.json")},f=function(e,t){return"/data/".concat(e,"/").concat(t,".json")},O=function(e){return e.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")},h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"nft-card",children:Object(d.jsx)("div",{style:{height:300},children:"Loading..."})})})},v=function(e){var t=e.nft;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"nft-card",children:[Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:t.nft.name})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Rarity Score:"})," ",t.rarityScore.toFixed(2)]}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:O(t.nft.external_url),children:"External Link"})}),Object(d.jsx)("div",{className:"nft-card-image",children:Object(d.jsx)(b,{children:Object(d.jsx)("img",{alt:"nft",src:O(t.nft.image)})})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.8em",color:"white"},children:[Object(d.jsx)("div",{style:{flex:1},children:"Content"}),Object(d.jsx)("div",{style:{flex:1},children:"Attribute"}),Object(d.jsx)("div",{style:{flex:1},children:"Commonality"}),Object(d.jsx)("div",{style:{flex:1},children:"Rarity Score"})]}),t.attributeRarities.map((function(e){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(d.jsx)("div",{style:{flex:1},children:e.trait_type}),Object(d.jsx)("div",{style:{flex:1},children:Object(d.jsx)("span",{style:"[Missing]"!==e.value?{fontWeight:"bold"}:{},children:e.value})}),Object(d.jsxs)("div",{style:{flex:1,position:"relative"},children:[Object(d.jsx)("div",{className:"bar-background",style:{position:"absolute",zIndex:0,width:"".concat((100*e.ratio).toFixed(0),"%"),height:"100%"}}),Object(d.jsx)("div",{style:{color:"#FFFFFF",position:"relative",zIndex:10},children:"".concat((100*e.ratio).toFixed(2),"%")})]}),Object(d.jsx)("div",{style:{flex:1},children:"".concat(e.ratioScore.toFixed(2))})]})},e.trait_type)}))]})]})})},p=function(e){var t=e.projectKey,n=e.tokenId,r=Object(c.useState)(null),i=Object(l.a)(r,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){Object(j.a)(a.a.mark((function e(){var c,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=f(t,n),console.log("NftLoader",{nftUrl:c}),e.next=4,fetch(c);case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,o(i);case 9:case"end":return e.stop()}}),e)})))()}),[t,n]),Object(d.jsxs)(d.Fragment,{children:[!s&&Object(d.jsx)(h,{}),s&&Object(d.jsx)(v,{nft:s})]})},m=function(e){var t=e.items,n=e.getItemKey,c=e.ItemComponent;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(b,{children:Object(d.jsx)(c,{item:e})},n(e))}))})},y=function(e){var t=e.projectKey,n=Object(c.useState)(null),r=Object(l.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){Object(j.a)(a.a.mark((function e(){var n,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,s(r);case 8:case"end":return e.stop()}}),e)})))()}),[t]),Object(d.jsx)(d.Fragment,{children:i&&Object(d.jsx)(g,{projectKey:t,projectRarity:i})})},g=function(e){var t=e.projectKey,n=e.projectRarity;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"nft-list",children:n&&Object(d.jsx)(m,{items:n.tokens,getItemKey:function(e){return"".concat(e.tokenId)},ItemComponent:function(e){var n=e.item;return Object(d.jsx)("div",{onClick:function(){return window.location.href="".concat(t,"/").concat(n.tokenId)},children:Object(d.jsx)(p,{projectKey:t,tokenId:"".concat(n.tokenId)})})}})})})},F=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){Object(j.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/data/projects.json",e.next=3,fetch("/data/projects.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,i(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsx)(d.Fragment,{children:r&&Object(d.jsx)(w,{projects:r})})},w=function(e){var t=e.projects;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"nft-list",children:t&&Object(d.jsx)(m,{items:t.projects,getItemKey:function(e){return"".concat(e.projectKey)},ItemComponent:function(e){var t=e.item;return Object(d.jsx)(I,{projectKey:t.projectKey,project:t.projectMetadata})}})})})},I=function(e){var t=e.projectKey,n=e.project;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"nft-card",children:[Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:n.name})}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:O(n.external_link),children:"External Link"})}),Object(d.jsx)("div",{className:"nft-card-image",onClick:function(){return window.location.href="".concat(t)},children:Object(d.jsx)(b,{children:Object(d.jsx)("img",{alt:"nft",src:O(n.image)})})})]})})};var k=function(){var e,t,n=window.location.pathname.split("/"),c=null!==(e=n[1])&&void 0!==e?e:void 0,r=null!==(t=n[2])&&void 0!==t?t:void 0;return console.log("route",{route:n,projectKey:c,tokenId:r}),c&&r?Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"nft-container-single",children:Object(d.jsx)(p,{projectKey:c,tokenId:r})})}):c?Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(y,{projectKey:c})}):Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(F,{})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),K()}},[[16,1,2]]]);
//# sourceMappingURL=main.1f36b590.chunk.js.map