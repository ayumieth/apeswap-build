(this["webpackJsonpapeswap-frontend"]=this["webpackJsonpapeswap-frontend"]||[]).push([[22],{1009:function(n,e){},1019:function(n,e){},1020:function(n,e){},1023:function(n,e){},1024:function(n,e){},1054:function(n,e){},1055:function(n,e){},1056:function(n,e){},1900:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s,d,l,b,u,x,p,j,h,f,g,O,m,w,v,k,y,S,C,T=t(31),z=t(0),R=t(17),F=t(39),A=t(26),N=t(931),W=t(340),B=t(124),I=t(18),D=t(342),E=t.n(D),L=t(86),H=t(49),V=R.e.div(r||(r=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),Y=t(943),M=t(1),P=Object(R.e)(V)(i||(i=Object(T.a)(["\n  min-height: 28px;\n"]))),_=function(n){var e,t,r=n.nft,i=r.index,c=r.name,a=r.image,o=r.attributes;return Object(M.b)(L.b,{to:"/nft/".concat(i),children:Object(M.c)(F.t,{sx:{borderRadius:"10px",overflow:"hidden"},children:[Object(M.b)(Y.a,{src:a,alt:c,originalLink:a,rarityTier:o.rarityTierNumber}),Object(M.b)(H.a,{sx:{height:"80px",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(M.b)(P,{children:Object(M.c)(F.B,{as:"h5",sx:{textAlign:"center"},children:[c," - #",(e="".concat(i),t="4",e.length>=t?e:new Array(t-e.length+1).join("0")+e)]})})})]})})},G=Object(R.e)(F.l)(c||(c=Object(T.a)(["\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  & > div {\n    grid-column: 2 / 6;\n\n    "," {\n      grid-column: span 4;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),J=t(8),U=function(n){var e=n.nftSet;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(G,{children:e.map((function(n){return Object(J.jsx)("div",{children:Object(J.jsx)(_,{nft:n})},n.index)}))})})},K=R.e.div(a||(a=Object(T.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  background-color: transparent;\n  boxshadow: none;\n  @media (max-width: 768px) {\n    justify-content: center;\n  }\n"]))),Q=R.e.div(o||(o=Object(T.a)(["\n  display: none;\n  position: absolute;\n  background-color: ",";\n  color: ",";\n  min-width: 140px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  line-height: 50px;\n  font-size: 19px;\n  z-index: 1;\n  align-self: center;\n"])),(function(n){return n.theme.colors}),(function(n){return n.theme.colors.gray})),q=R.e.p(s||(s=Object(T.a)(["\n  cursor: pointer;\n  opacity: 0.8;\n  font-weight: 800;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),X=R.e.div(d||(d=Object(T.a)(["\n  &:hover "," {\n    display: block;\n  }\n  background-color: ",";\n  border-radius: 10%;\n  width: 140px;\n  color: white;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 22.5px;\n  cursor: pointer;\n  margin: 0 20px 25px 0px;\n  @media (max-width: 768px) {\n    margin: 0 20px 25px 20px;\n  }\n"])),Q,(function(n){return n.theme.colors.primary})),Z=R.e.svg(l||(l=Object(T.a)(["\n  cursor: pointer;\n  fill: ",";\n  width: 40px;\n  height: 50px;\n  @media (min-width: 768px) {\n    margin-right: 20px;\n  }\n"])),(function(n){return n.theme.colors.primary})),$=R.e.div(b||(b=Object(T.a)(["\n  float: right;\n  height: 50px;\n  width: 280px;\n  font-size: 30px;\n  margin: 0 20px 25px 0px;\n  @media (max-width: 768px) {\n    margin: 0 20px 25px 20px;\n  }\n"]))),nn=R.e.input(u||(u=Object(T.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  font-size: 20px;\n  display: flex;\n  border: none;\n  -webkit-box-shadow: 0px 0px 5px 0px ",";\n  box-shadow: 0px 0px 5px 0px ",";\n  background-color: ",";\n  color: ",";\n  font-weight: 800;\n\n  &:focus {\n    outline: none !important;\n    border-color: ",";\n  }\n  &::placeholder {\n    color: ",";\n    text-align: center;\n  }\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors}),(function(n){return n.theme.colors.gray})),en=R.e.button(x||(x=Object(T.a)(["\n  position: sticky;\n  bottom: 10px;\n  left: 100%;\n  width: 50px;\n  cursor: pointer;\n  height: 50px;\n  fill: black;\n  align-text: center;\n  opacity: 0.8;\n  border: none;\n  color: white;\n  border-radius: 50%;\n  font-size: 30px;\n  background-color: ",";\n  &:focus {\n    outline: none !important;\n  }\n"])),(function(n){return n.theme.colors.primary})),tn=R.e.p(p||(p=Object(T.a)(["\n  font-weight: 800;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryBright})),rn=function(n){var e=n.nftSet,t=Object(z.useState)(!1),r=Object(I.a)(t,2),i=r[0],c=r[1],a=Object(z.useState)(e),o=Object(I.a)(a,2),s=o[0],d=o[1],l=Object(z.useState)(50),b=Object(I.a)(l,2),u=b[0],x=b[1],p=Object(z.useState)(e.slice(0,u)),j=Object(I.a)(p,2),h=j[0],f=j[1],g=Object(z.useState)("Filter"),O=Object(I.a)(g,2),m=O[0],w=O[1],v=Object(z.useState)("Sort"),k=Object(I.a)(v,2),y=k[0],S=k[1],C=Object(A.b)().t;Object(z.useEffect)((function(){document.addEventListener("scroll",(function(){var n=document.documentElement.offsetHeight;window.scrollY>n-293.333*5&&x((function(n){return n+50}))}))}),[]),Object(z.useEffect)((function(){u<=1e3&&f(s.slice(0,u))}),[f,s,u]);var T=function(n){if("rarity"===n){var e=E()(s,["attributes.rarityOverallRank"]);d(e),x(50),S("Rarity")}else if("index"===n){var t=E()(s,"index");d(t),x(50),S("Ape #")}},R=function(n){var t=e.filter((function(e){return e.attributes.rarityTierNumber===n}));d(t),c(!0),x(50),S(C("Sort")),w("Tier ".concat(n))};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(K,{children:[Object(J.jsxs)(X,{children:[Object(J.jsx)(tn,{children:C(y)}),Object(J.jsxs)(Q,{children:[Object(J.jsx)(q,{onClick:function(){return T("index")},children:C("Ape #")}),Object(J.jsx)(q,{onClick:function(){return T("rarity")},children:C("Rarity")})]})]}),Object(J.jsxs)(X,{children:[Object(J.jsx)(tn,{children:C(m)}),Object(J.jsxs)(Q,{children:[Object(J.jsx)(q,{onClick:function(){return function(){var n=e.slice(851,954);d(n),c(!0),w(C("Next Sale"))}()},children:C("Next Sale")}),Object(J.jsx)(q,{onClick:function(){return R(1)},children:C("Tier 1")}),Object(J.jsx)(q,{onClick:function(){return R(2)},children:C("Tier 2")}),Object(J.jsx)(q,{onClick:function(){return R(3)},children:C("Tier 3")}),Object(J.jsx)(q,{onClick:function(){return R(4)},children:C("Tier 4")}),Object(J.jsx)(q,{onClick:function(){return R(5)},children:C("Tier 5")})]})]}),i&&Object(J.jsx)(Z,{viewBox:"0 0 15 15",onClick:function(){return c(!1),d(e),x(50),w(C("Filter")),S("Sort"),void f(E()(e,"index").slice(0,50))},children:Object(J.jsx)("g",{children:Object(J.jsx)("path",{d:"M12.083,1.887c-0.795-0.794-1.73-1.359-2.727-1.697v2.135c0.48,0.239,0.935,0.55,1.334,0.95 c1.993,1.994,1.993,5.236,0,7.229c-1.993,1.99-5.233,1.99-7.229,0c-1.991-1.995-1.991-5.235,0-7.229 C3.466,3.269,3.482,3.259,3.489,3.25h0.002l1.181,1.179L4.665,0.685L0.923,0.68l1.176,1.176C2.092,1.868,2.081,1.88,2.072,1.887 c-2.763,2.762-2.763,7.243,0,10.005c2.767,2.765,7.245,2.765,10.011,0C14.844,9.13,14.847,4.649,12.083,1.887z"})})}),Object(J.jsx)($,{onChange:function(n){return function(n){var t=e.filter((function(e){return e.name.toLowerCase().includes(n.target.value.toLowerCase())}));d(t),x(50)}(n)},children:Object(J.jsx)(nn,{type:"text",placeholder:C("Search by ape name")})})]}),Object(J.jsx)(U,{nftSet:h}),u>50&&Object(J.jsx)(en,{onClick:function(){return x(50),void(document.documentElement.scrollTop=0)},children:"\u2191"})]})},cn=t(9),an=t(2),on=t.n(an),sn=t(1046),dn=t.n(sn),ln=t(133),bn=t(75),un=t(466),xn=Object(R.e)(F.fb)(j||(j=Object(T.a)(["\n  font-weight: 300;\n"]))),pn=R.e.div(h||(h=Object(T.a)(["\n  margin-bottom: 16px;\n"]))),jn=R.e.div(f||(f=Object(T.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),hn=R.e.label(g||(g=Object(T.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(n){return n.theme.colors.text})),fn=function(n){var e=n.nft,t=n.tokenId,r=n.onDismiss,i=Object(z.useState)(!1),c=Object(I.a)(i,2),a=c[0],o=c[1],s=Object(z.useState)(""),d=Object(I.a)(s,2),l=d[0],b=d[1],u=Object(z.useState)(null),x=Object(I.a)(u,2),p=x[0],j=x[1],h=Object(A.b)().t,f=Object(ln.d)().account,g=Object(bn.r)(),O=function(){var n=Object(cn.a)(on.a.mark((function n(){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,dn.a.utils.isAddress(l)){n.next=6;break}j(h("Please enter a valid wallet address")),n.next=11;break;case 6:return o(!0),n.next=9,g["safeTransferFrom(address,address,uint256)"](f,l,t).then((function(n){return n.wait()}));case 9:o(!1),r();case 11:n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),console.warn("Unable to transfer NFT:",n.t0),o(!1);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}();return Object(J.jsxs)(F.P,{title:h("Transfer NFT"),onDismiss:r,children:[Object(J.jsxs)(pn,{children:[p&&Object(J.jsx)(F.fb,{color:"error",mb:"8px",children:p}),Object(J.jsxs)(V,{children:[Object(J.jsxs)(F.fb,{children:[h("Transferring"),":"]}),Object(J.jsx)(xn,{children:'1x "'.concat(e.name,'" NFT')})]}),Object(J.jsxs)(hn,{htmlFor:"transferAddress",children:[h("Receiving address"),":"]}),Object(J.jsx)(F.G,{id:"transferAddress",name:"address",type:"text",placeholder:h("Paste address"),value:l,onChange:function(n){var e=n.target.value;b(e)},isWarning:p,disabled:a})]}),Object(J.jsxs)(jn,{children:[Object(J.jsx)(F.p,{fullWidth:!0,onClick:O,disabled:!f||a||!l,children:h("Confirm")}),Object(J.jsx)(un.a,{text:h("Cancel"),handleClick:r})]})]})},gn=t(558),On=R.e.div(O||(O=Object(T.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n"]))),mn=R.e.div(m||(m=Object(T.a)(["\n  position: relative;\n  &:hover "," {\n    transform: rotateY(180deg);\n  }\n  width: 350px;\n  height: 425px;\n  perspective: 1000px;\n  align-self: center;\n  margin: 10px;\n"])),On),wn=R.e.div(w||(w=Object(T.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  background-color: ",";\n  border: 2.5px solid ",";\n  z-index: -1;\n"])),(function(n){return n.theme.colors}),(function(n){return n.theme.colors.primary})),vn=R.e.div(v||(v=Object(T.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-color: ",";\n  border: 2.5px solid ",";\n  transform: rotateY(180deg);\n  z-index: -1;\n"])),(function(n){return n.theme.colors}),(function(n){return n.theme.colors.primary})),kn=R.e.div(k||(k=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  justify-content: space-between;\n  margin-top: 10px;\n"]))),yn=Object(R.e)(F.fb)(y||(y=Object(T.a)(["\n  font-weight: 800;\n"]))),Sn=function(n){var e,t,r=n.nft,i=Object(A.b)().t,c=Object(z.useContext)(gn.a).reInitialize,a=["Face","Base","Frame","Mouth","Eyes","Hat","Rarity Score","Rarity Tier Number","Rarity Tier Name","Rarity Overall Rank"],o=Object(F.pb)(Object(J.jsx)(fn,{nft:r,tokenId:r.index,onSuccess:function(){c()}})),s=Object(I.a)(o,1)[0];return Object(J.jsx)(mn,{children:Object(J.jsxs)(On,{children:[Object(J.jsx)(L.b,{to:"/nft/".concat(r.index),children:Object(J.jsxs)(wn,{children:[Object(J.jsx)(Y.a,{src:r.image,alt:r.image,rarityTier:r.attributes.rarityTierNumber}),Object(J.jsxs)(yn,{fontSize:"20px",paddingTop:"20px",color:"subtle",children:[r.name," - #",(e="".concat(r.index),t="4",e.length>=t?e:new Array(t-e.length+1).join("0")+e)]})]})}),Object(J.jsxs)(vn,{children:[Object(J.jsx)(L.b,{to:"/nft/".concat(r.index),children:Object.keys(r.attributes).map((function(n,e){return Object(J.jsxs)(kn,{children:[Object(J.jsxs)(yn,{as:"p",color:"subtle",style:{paddingLeft:"10px",textAlign:"left"},children:[a[e],":"]}),Object(J.jsx)(yn,{as:"p",color:"subtle",style:{paddingRight:"10px",textAlign:"right"},children:r.attributes[n]})]},n)}))}),Object(J.jsx)(F.p,{variant:"primary",style:{position:"absolute",borderRadius:"0px",width:"100%",height:"50px",left:"0",bottom:"0"},onClick:s,children:i("Transfer")})]})]})})},Cn=function(){var n=Object(A.b)().t,e=Object(B.B)().profile;return Object(J.jsx)(J.Fragment,{children:(null===e||void 0===e?void 0:e.ownedNfts)&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(F.fb,{fontSize:"25px",style:{color:"subtle",paddingTop:"25px"},fontWeight:800,children:n("Your Apes")}),Object(J.jsx)(F.t,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"center",justifyContent:"center",backgroundColor:"transparent",boxShadow:"none"},padding:"25px",marginTop:"10px",marginBottom:"10px",children:e.ownedNfts.map((function(n){return Object(J.jsx)("div",{children:Object(J.jsx)(Sn,{nft:n},n.name)},n.name)}))})]})})},Tn=R.e.div(S||(S=Object(T.a)(["\n  border-bottom: 1px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(n){return n.theme.colors.gray})),zn=R.e.a(C||(C=Object(T.a)(["\n  font-weight: 800;\n"])));e.default=function(){Object(B.o)();var n=Object(B.A)(),e=n.nfas,t=n.isInitialized,r=Object(A.b)().t;return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(W.b,{children:[Object(J.jsx)(N.a,{banner:"nfa-collection",link:"https://apeswap.gitbook.io/apeswap-finance/product-and-features/collect/non-fungible-apes-nfas",title:r("Nfa Collection"),margin:"0 0 20px 0"}),Object(J.jsxs)(Tn,{children:[Object(J.jsx)(F.fb,{style:{color:"subtle",paddingTop:"10px",textDecoration:"underline"},children:Object(J.jsx)(zn,{href:"https://github.com/ApeSwapFinance/non-fungible-apes",target:"_blank",rel:"noopener noreferrer",children:r("GitHub Info")})}),Object(J.jsx)(Cn,{}),Object(J.jsx)(F.fb,{fontSize:"25px",style:{textDecoration:"underline",marginTop:"25px",color:"subtle"},children:Object(J.jsx)(zn,{href:"https://nftkey.app/collections/nfas/?nfasTab=forSale",target:"_blank",rel:"noopener noreferrer",children:r("Check out the NFA aftermarket on NFTKEY!")})})]}),t?Object(J.jsx)(rn,{nftSet:e}):Object(J.jsx)(F.A,{alignItems:"center",justifyContent:"center",children:Object(J.jsx)(F.cb,{})})]})})}},931:function(n,e,t){"use strict";var r,i,c,a=t(3),o=t(94),s=t(6),d=t(263),l=t(49),b=t(18),u=t(0),x=t.n(u),p=function(n){var e=Object(u.useState)(null),t=Object(b.a)(e,2),r=t[0],i=t[1];return Object(u.useEffect)((function(){var e=new Image;e.src=n,e.onload=function(){return i(n)}}),[n]),r},j=t(26),h=t(31),f=t(92),g={position:"relative",width:"100%"},O={position:"absolute",flexDirection:"column",top:"20%",left:"5%",width:"45%"},m={fontWeight:700,lineHeight:"4.5vw",fontSize:"5vw","@media screen and (min-width: 1130px)":{lineHeight:"50px",fontSize:"55px"}},w={mt:"5%",fontSize:"calc(6px + 1.5vw)",textTransform:"capitalize",padding:0,fontWeight:600,"@media screen and (min-width: 1130px)":{fontSize:"22.5px"}},v=Object(f.a)(s.p)(r||(r=Object(h.a)(["\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  width: 100%;\n  height: 24vw;\n  @media screen and (min-width: 500px) and (max-width: 851px) {\n    height: ",";\n  }\n  @media screen and (min-width: ","px) {\n    height: ","px;\n    width: ","px;\n  }\n"])),(function(n){return n.listViewBreak?"120px":"24vw"}),(function(n){return n.maxWidth}),(function(n){return n.maxWidth/4}),(function(n){return n.maxWidth})),k=Object(f.a)(s.H)(i||(i=Object(h.a)(["\n  border-radius: 10px;\n  width: 100%;\n  height: 24vw;\n  @media screen and (min-width: 500px) and (max-width: 851px) {\n    height: ",";\n  }\n  @media screen and (min-width: ","px) {\n    height: ","px;\n    width: ","px;\n  }\n"])),(function(n){return n.listViewBreak?"120px":"24vw"}),(function(n){return n.maxWidth}),(function(n){return n.maxWidth/4}),(function(n){return n.maxWidth})),y=Object(f.a)(s.c)(c||(c=Object(h.a)(["\n  transform: rotate(270deg);\n  margin-left: 10px;\n  width: calc(4px + 0.9vw);\n  @media screen and (min-width: 1130px) {\n    width: 14px;\n  }\n"]))),S=t(1),C=function(n){var e=n.banner,t=n.children,r=n.title,i=n.listViewBreak,c=n.margin,b=n.titleColor,u=n.link,x=n.maxWidth,h=void 0===x?1200:x,f=Object(o.g)(),C=Object(d.a)().isDark,T=Object(j.b)().t,z=p("../images/new-banners/".concat(e,"-").concat(C?"night":"day",".svg"));return Object(S.c)(s.p,{sx:Object(a.a)(Object(a.a)({},g),{},{margin:c}),children:[z?Object(S.b)(v,{sx:{backgroundImage:"url(".concat(z,")")},maxWidth:h,listViewBreak:i}):Object(S.b)(k,{maxWidth:h,listViewBreak:i}),Object(S.c)(s.p,{sx:Object(a.a)({},O),children:[Object(S.b)(l.n,{sx:Object(a.a)(Object(a.a)({},m),{},{color:b||"text","@media screen and (min-width: 500px) and (max-width: 851px)":{fontSize:i?"25px":"5vw",lineHeight:i?"25px":"5vw"}}),children:r.toUpperCase()}),Object(S.c)(s.f,{variant:"text",onClick:function(){return(n=u).includes("modal")?f.push({search:n}):window.open(n,"_blank");var n},sx:Object(a.a)(Object(a.a)({},w),{},{color:b||"text","&&&:hover":{textDecoration:"none",color:b||"text"}}),children:[T("Learn More")," ",Object(S.b)(y,{color:b||"text"})]})]}),t]})};e.a=x.a.memo(C)},943:function(n,e,t){"use strict";var r,i,c,a,o,s=t(31),d=t(0),l=t.n(d),b=t(17),u=t(8),x=Object(b.f)(r||(r=Object(s.a)(["\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n"]))),p=b.e.img(i||(i=Object(s.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: ",";\n"])),(function(n){return n.imageBorderRadius?"32px 32px 0 0":0})),j=b.e.div(c||(c=Object(s.a)(["\n  background: ",";\n  background-size: ",";\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 100%;\n  animation: "," 20s ease infinite;\n  border-radius: ",";\n"])),(function(n){return n.gradient}),(function(n){return n.backgroundSize}),x,(function(n){return n.borderRadius})),h=b.e.div(a||(a=Object(s.a)(["\n  position: absolute;\n  top: 2.5%;\n  right: 5%;\n  mix-blend-mode: screen;\n  font-size: 50px;\n  fill: rgba(255, 255, 255, 0.1);\n"]))),f=b.e.p(o||(o=Object(s.a)(["\n  font-weight: 800;\n"]))),g=function(n){var e=n.src,t=n.alt,r=n.rarityTier,i=n.borderRadius,c=n.hideTier,a=n.imageBorderRadius,o="",s="";return 1===r?(o="linear-gradient(90deg, rgba(0,83,255,1) 0%, rgba(73,252,69,1) 100%);",s="200% 200%"):2===r?(o="radial-gradient(circle, rgba(255,0,0,0.6189426112241772) 10%, rgba(121, 7, 242, .75) 70%,rgba(255,162,0,.8) 100%);",s="200% 200%"):3===r?(o="linear-gradient( 293.5deg,  rgba(254,255,42,1) .2%, rgba(251,148,207,1) 9.9%, rgba(181,149,208,1) 22.9%, rgba(254,255,42,1) 36.4%, rgba(181,149,208,1) 50.1%, rgba(0,255,252,1) 61.1%, rgba(181,149,208,1) 71.2%, rgba(254,255,42,1) 84.2%, rgba(0,255,252,1) 92.2% );",s="300% 300%"):4===r?(o="radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 70%), linear-gradient(-45deg, rgba(255, 255, 0, .1),rgba(255, 0, 0, .1) ,rgba(255, 255, 0, .1),rgba(0, 255, 255, .1), rgba(255, 255, 255, .1),rgba(255, 255, 0, .1), rgba(255, 0, 255, .1) ,rgba(0, 255, 0, .1), rgba(255, 255, 0, .1)), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif)",s="100% 100%"):5===r&&(o="radial-gradient(circle, rgba(243,255,35,1) 0%, rgba(148,187,233,0) 80%), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif)",s="100% 100%"),Object(u.jsxs)(j,{gradient:o,backgroundSize:s,borderRadius:i,children:[!c&&Object(u.jsx)(h,{children:Object(u.jsx)(f,{children:r})}),e&&Object(u.jsx)(p,{src:e,alt:t,imageBorderRadius:a})]})};e.a=l.a.memo(g)},969:function(n,e){},970:function(n,e){},983:function(n,e){},985:function(n,e){},986:function(n,e){},987:function(n,e){},988:function(n,e){}}]);
//# sourceMappingURL=22.e72d7381.chunk.js.map