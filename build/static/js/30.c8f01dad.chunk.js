(this["webpackJsonpapeswap-frontend"]=this["webpackJsonpapeswap-frontend"]||[]).push([[30],{1030:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return x})),t.d(e,"c",(function(){return u}));var i,c,r,a,o=t(31),s=t(17),d=t(39),l=Object(s.e)(d.fb)(i||(i=Object(o.a)(["\n  font-weight: 400;\n  font-size: 11px;\n  &:after {\n    font-weight: 700;\n    content: '","';\n  }\n  "," {\n    font-size: 16px;\n  }\n"])),(function(n){return n.boldContent}),(function(n){return n.theme.mediaQueries.md})),x=Object(s.e)(d.fb)(c||(c=Object(o.a)(["\n  font-weight: 400;\n  font-size: 13px;\n  &:after {\n    font-weight: 700;\n    font-size: 14px;\n    "," {\n      font-size: 17px;\n    }\n    content: '","';\n  }\n  "," {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md}),(function(n){return n.boldContent}),(function(n){return n.theme.mediaQueries.md})),u=Object(s.e)(d.fb)(r||(r=Object(o.a)(["\n  font-weight: 700;\n  font-size: 25px;\n  "," {\n    font-size: 30px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md}));Object(s.e)(d.fb)(a||(a=Object(o.a)(["\n  font-size: 12px;\n  "," {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md}))},1086:function(n,e,t){"use strict";var i,c=t(31),r=(t(0),t(17)),a=t(966),o=t(929),s=t(39),d=t(26),l=t(8),x=function(n){var e=n.days<10?"0".concat(n.days):n.days.toString(),t=n.hours<10?"0".concat(n.hours):n.hours.toString(),i=n.minutes<10?"0".concat(n.minutes):n.minutes.toString(),c=n.seconds<9?"0".concat(n.seconds.toFixed(0)):n.seconds.toFixed(0);return"".concat(e,":").concat(t,":").concat(i,":").concat(c)},u=Object(r.e)(s.fb)(i||(i=Object(c.a)(["\n  font-weight: ",";\n  color: ",";\n  &:after {\n    font-weight: 700;\n    font-size: ",";\n    content: '","';\n  }\n"])),(function(n){return n.fontSize}),(function(n){return n.fontColor}),(function(n){return n.fontSize||"17px"}),(function(n){return n.boldContent}));e.a=function(n){var e=n.timeInfo,t=n.fontSize,i=n.fontColor,c=e.activeTime,r=e.startTime,s=Object(a.b)()/1e3,h=parseInt(c)+parseInt(r),p=parseInt(r)-s,b=h-s,f=x(Object(o.a)(p,!0)),j=x(Object(o.a)(b,!0)),m=Object(d.b)().t;return p>0?Object(l.jsxs)(u,{fontSize:t,boldContent:f,fontColor:i,children:[m("Starts in")," "]}):b>0?Object(l.jsxs)(u,{fontSize:t,boldContent:j,fontColor:i,children:[m("Ends in")," "]}):Object(l.jsx)(u,{fontSize:t,boldContent:m("Completed"),fontColor:i})}},1116:function(n,e,t){"use strict";t.d(e,"a",(function(){return S}));var i,c,r,a,o,s,d,l=t(18),x=t(31),u=t(0),h=t(17),p=t(124),b=t(39),f=t(26),j=t(8),m={sm:"285px",md:"450px",lg:"525px",xl:"600px"},g={sm:"38px",md:"44px",lg:"100px",xl:"120px"},O=h.e.div(i||(i=Object(x.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: ",";\n  width: ",";\n"])),(function(n){return g[n.height]}),(function(n){return m[n.size]})),v=h.e.input(c||(c=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  padding-left: 15px;\n\n  font-size: ",";\n  line-height: 23px;\n  word-break: break-word;\n  text-align: left;\n  margin: ",";\n  background: ",";\n  color: ",";\n  border: none;\n  z-index: 0;\n  :focus {\n    outline: "," 1px solid;\n  }\n"])),(function(n){return"sm"===n.sizeText?"13px":"18px"}),(function(n){return n.margin}),(function(n){return n.backgroundColor||"#333333"}),(function(n){return n.theme.colors.text}),(function(n){return n.textColor||"#ffffff"})),w=h.e.textarea(r||(r=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  padding-left: 15px;\n\n  font-size: 18px;\n  line-height: 23px;\n  word-break: break-word;\n  text-align: left;\n  background: ",";\n  color: ",";\n  border: none;\n  z-index: 0;\n  :focus {\n    outline: "," 1px solid;\n  }\n"])),(function(n){return n.backgroundColor||"#333333"}),(function(n){return n.textColor||"#ffffff"}),(function(n){return n.textColor||"#ffffff"})),z=h.e.div(a||(a=Object(x.a)(["\n  position: absolute;\n  display: inline-block;\n  right: 10px;\n  width: 25px;\n  height: 25px;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  z-index: 10;\n  cursor: pointer;\n"])),(function(n){return"url(".concat(n.imgSrc,")")})),k=h.e.div(o||(o=Object(x.a)(["\n  position: absolute;\n  display: inline-block;\n  right: 10px;\n  width: 25px;\n  height: 21px;\n"]))),y=h.e.div(s||(s=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]))),C=Object(h.e)(b.fb)(d||(d=Object(x.a)(["\n  position: absolute;\n  height: ",";\n\n  font-weight: 500;\n  width: 130px;\n  font-size: 14px;\n  "," {\n    position: relative;\n    width: 130px;\n    flex-wrap: nowrap;\n    height: 30px;\n    font-size: 16px;\n  }\n"])),(function(n){return n.large?"155px":"90px"}),(function(n){return n.theme.mediaQueries.md})),S=function(n){var e=n.size,t=void 0===e?"md":e,i=n.height,c=void 0===i?"md":i,r=n.onChange,a=n.onLargeChange,o=n.backgroundColor,s=n.placeholderText,d=n.textColor,x=n.icon,h=n.load,m=n.title,g=n.url,S=n.margin,F=n.mandatory,I=Object(p.C)().toastError,M=Object(f.b)().t,B=Object(u.useState)(o),T=Object(l.a)(B,2),L=T[0],A=T[1];Object(u.useEffect)((function(){A(o)}),[o]);return Object(j.jsxs)(y,{children:[m&&Object(j.jsx)(C,{large:"lg"===c||"xl"===c,children:m}),Object(j.jsxs)(O,{size:t,height:c,children:["lg"===c||"xl"===c?Object(j.jsx)(w,{onChange:a,backgroundColor:o,placeholder:s,imgSrc:"images/".concat(x),textColor:d}):Object(j.jsx)(v,{onChange:r,backgroundColor:g?L:o,placeholder:s,imgSrc:"images/".concat(x),textColor:d,onKeyUp:function(n){var e=n.currentTarget.value,t=function(n){try{return new URL(n)}catch(e){return!1}}(e);return F||0!==e.length?(g&&(t?A(o):(A("rgb(255,0,0, .3)"),I(M("Error: Please enter a valid URL.")))),e):(A(o),e)},margin:S,sizeText:t}),h?Object(j.jsx)(k,{children:Object(j.jsx)(b.j,{spin:!0})}):Object(j.jsx)(z,{imgSrc:"images/".concat(x)})]})]})}},1155:function(n,e,t){"use strict";var i=t(3),c=(t(0),t(8));e.a=function(n){return Object(c.jsx)("svg",Object(i.a)(Object(i.a)({width:21,height:24,viewBox:"0 0 21 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(c.jsx)("path",{d:"M14.758 0c.495-.001.887.395.888.922l.001.9c3.214.259 5.337 2.511 5.34 5.966L21 17.898c.005 3.767-2.296 6.084-5.983 6.09L6.011 24c-3.665.005-5.994-2.368-5.998-6.145L0 7.863C-.005 4.386 2.043 2.14 5.257 1.836v-.9c-.002-.527.378-.924.885-.924.507-.001.887.395.888.922l.001.84 6.842-.01v-.84c-.002-.527.378-.923.885-.924zm.47 17.03h-.012c-.53.014-.954.47-.943 1.022.001.552.428 1.006.958 1.018.54 0 .978-.458.977-1.021 0-.564-.439-1.019-.98-1.019zm-9.492.002c-.53.023-.944.48-.943 1.032.024.552.462.984.992.959.52-.024.933-.482.909-1.033a.964.964 0 00-.958-.958zm4.746-.006c-.53.025-.943.48-.943 1.032.024.552.462.983.992.959.518-.026.932-.482.908-1.034a.964.964 0 00-.957-.957zm-4.751-4.312c-.53.024-.944.48-.943 1.032.023.552.462.984.992.959.519-.024.932-.481.908-1.033a.964.964 0 00-.957-.958zm4.746-.042c-.53.024-.944.48-.943 1.032.023.552.462.983.992.959.518-.026.932-.481.909-1.033a.965.965 0 00-.958-.958zm4.746.006c-.53.012-.944.455-.943 1.007v.013c.011.552.45.97.98.959.518-.014.932-.47.92-1.022-.024-.528-.44-.958-.957-.957zM13.876 3.61l-6.843.01.002.97c0 .517-.38.925-.886.925-.507.001-.888-.405-.888-.922L5.26 3.67c-2.247.232-3.49 1.59-3.486 4.19l.001.374 17.44-.024v-.42c-.05-2.579-1.308-3.932-3.566-4.133l.002.924c0 .515-.39.924-.886.924-.507.001-.888-.406-.888-.922l-.001-.972z"})}))}},1894:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return qn}));var i,c,r,a,o,s,d,l,x,u,h,p,b,f,j,m,g,O,v,w,z,k,y,C,S,F,I,M,B,T=t(22),L=t(18),A=t(0),Q=t.n(A),D=t(86),E=t(124),V=t(966),W=t(1116),H=t(263),P=t(39),R=t(931),_=t(26),U=t(31),q=t(17),J=t(3),X=t(8),K=function(n){return Object(X.jsx)("svg",Object(J.a)(Object(J.a)({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(X.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 0a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5H5zm13.728 8.685a1 1 0 10-1.456-1.37l-7.237 7.689-2.276-2.655a1 1 0 00-1.518 1.302l3 3.5a1 1 0 001.487.034l8-8.5z"})}))},N=t(1155),G=function(n){return Object(X.jsx)("svg",Object(J.a)(Object(J.a)({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:Object(X.jsx)("path",{d:"M16.14 2.136c-.048.3-.072.6-.072.9 0 2.7 2.184 4.883 4.872 4.883.3 0 .588-.035.888-.083v9.683c0 4.07-2.4 6.481-6.48 6.481H6.48C2.4 24 0 21.588 0 17.52V8.64c0-4.08 2.4-6.504 6.481-6.504h9.659zm.241 7.296a.922.922 0 00-.841.372l-2.903 3.756-3.325-2.616a.948.948 0 00-.684-.192.93.93 0 00-.6.36l-3.55 4.62-.074.108a.897.897 0 00.252 1.14c.168.108.348.18.552.18a.85.85 0 00.708-.36l3.012-3.877 3.42 2.57.108.07a.898.898 0 001.14-.252l3.468-4.475-.048.024a.899.899 0 00.096-.9.885.885 0 00-.73-.528zM21.108 0A2.894 2.894 0 0124 2.892a2.894 2.894 0 01-2.892 2.892 2.894 2.894 0 01-2.892-2.892A2.894 2.894 0 0121.108 0z"})}))},Y=Object(q.e)(P.p)(i||(i=Object(U.a)(["\n  height: 44px;\n  border-radius: 10px;\n  background: ",";\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-right: 7.5px;\n  margin-left: 7.5px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background-color: ",";\n  }\n  margin-top: 25px;\n  "," {\n    margin-top: 0px;\n  }\n"])),(function(n){return n.theme.colors.white3}),(function(n){return n.theme.colors.white3}),(function(n){return n.theme.mediaQueries.md})),Z=Object(q.e)(P.fb)(c||(c=Object(U.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 15px;\n  padding-left: 10px;\n  font-weight: 500;\n  "," {\n    font-size: 13px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),$=function(n){var e=n.icon,t=n.text,i=n.onClick,c=n.active,r=Object(H.a)().isDark?"#FAFAFA":"#4D4040";return Object(X.jsxs)(Y,{onClick:i,active:c,children:["check"===e?Object(X.jsx)(K,{fill:r}):"graph"===e?Object(X.jsx)(G,{fill:r}):"calendar"===e?Object(X.jsx)(N.a,{fill:r}):Object(X.jsx)(X.Fragment,{}),t&&Object(X.jsx)(Z,{children:t})]})},nn=t(929),en=t(85),tn=t(27),cn=t.n(tn),rn=t(1030),an=t(1086),on=q.e.div(r||(r=Object(U.a)(["\n  padding: 16px;\n  background: ",";\n  border-radius: 16px;\n  color: ",";\n  width: max-content;\n  display: none;\n  padding: 16px;\n\n  font-size: 17px;\n  line-height: 25px;\n  max-height: 500px;\n  z-index: 1000;\n  position: absolute;\n  bottom: calc(100% + 0px);\n  transform: translate(34px, 0);\n  right: 0;\n  max-width: 246px;\n  &:after {\n    content: '';\n    width: 0;\n    height: 0;\n    bottom: 0;\n    position: absolute;\n    z-index: 1000;\n  }\n\n  &:hover {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text})),sn=q.e.div(a||(a=Object(U.a)(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  pointer-events: auto !important;\n  &:hover ",", &:focus-within "," {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    pointer-events: auto !important;\n  }\n"])),on,on),dn=q.e.a(o||(o=Object(U.a)(["\n  margin-top: 5px;\n  position: relative;\n  display: block;\n\n  font-weight: 400;\n  font-size: 15px;\n  text-decoration: underline;\n  align-text: center;\n  pointer-events: auto !important;\n"]))),ln=function(n){var e=n.children,t=n.title,i=n.tagLinks;return Object(X.jsxs)(sn,{children:[e,Object(X.jsxs)(on,{children:[Object(X.jsxs)(P.fb,{fontWeight:600,fontSize:"19px",children:[" ",t]}),null===i||void 0===i?void 0:i.map((function(n){return Object(X.jsx)(dn,{href:null===n||void 0===n?void 0:n.link,target:"_blank",rel:"noopener noreferrer",onClick:function(n){n.stopPropagation()},children:null===n||void 0===n?void 0:n.title},n.title)}))]})]})},xn=function(n){return Object(X.jsxs)("svg",Object(J.a)(Object(J.a)({viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[Object(X.jsx)("circle",{cx:15,cy:15,r:14.5,stroke:"#FFB300"}),Object(X.jsx)("path",{d:"M14.882 14.502a.289.289 0 00-.197.357c.008.027.777 2.764.566 8.842a.287.287 0 10.575.02c.216-6.17-.554-8.908-.587-9.022a.289.289 0 00-.357-.197zM22.128 11.748A7.766 7.766 0 0014.963 7a7.738 7.738 0 00-2.996.6 9.308 9.308 0 00-1.484.78.288.288 0 00.314.483 8.72 8.72 0 011.392-.73 7.159 7.159 0 012.774-.557 7.19 7.19 0 016.633 4.397c.47 1.11.724 3.155.834 4.275a.288.288 0 10.573-.056c-.137-1.408-.4-3.322-.875-4.444zM9.629 9.8a.288.288 0 10-.405-.41c-1.55 1.526-3.093 4.365-1.647 9.22a.288.288 0 10.552-.165c-1.08-3.626-.561-6.615 1.5-8.645z",fill:"#FFB300"}),Object(X.jsx)("path",{d:"M15.184 8.733a6.05 6.05 0 00-6.045 7.69c.083.295.168.608.214.92.103.705.109 2.004.109 4.064a.288.288 0 10.576 0c0-2.15-.005-3.401-.115-4.148a7.735 7.735 0 00-.23-.993 5.474 5.474 0 015.47-6.957c2.05.073 4.372 1.88 5.072 3.944.607 1.786.612 4.83.537 7.57a.288.288 0 00.28.296.295.295 0 00.296-.28c.076-2.793.068-5.9-.567-7.772-.783-2.307-3.294-4.252-5.597-4.334z",fill:"#FFB300"}),Object(X.jsx)("path",{d:"M14.963 10.457c-.313 0-.625.034-.928.1a.288.288 0 00.125.563 3.739 3.739 0 014.252 2.2c.7 1.654.746 4.308.584 8.94a.287.287 0 00.278.298h.01a.288.288 0 00.288-.277c.168-4.819.117-7.422-.63-9.186a4.313 4.313 0 00-3.98-2.638zM12.822 11.707a.288.288 0 10-.33-.472c-1.485 1.042-2.13 3.044-1.604 4.984.006.02.59 2.15.59 5.475a.288.288 0 10.577 0c0-3.403-.587-5.541-.612-5.628-.461-1.704.093-3.456 1.38-4.36zM17.818 20.834a.288.288 0 00-.286-.29h-.002a.288.288 0 00-.288.286c-.002.217.005.533.013.875.011.497.024 1.06.012 1.422a.287.287 0 10.575.02c.014-.378 0-.95-.01-1.455a33.196 33.196 0 01-.014-.858z",fill:"#FFB300"}),Object(X.jsx)("path",{d:"M14.963 12.476c-.306 0-.605.06-.888.178-1.122.468-1.667 1.733-1.268 2.943.217.66.4 4.112.4 7.54a.288.288 0 10.577 0c0-3.086-.164-6.914-.43-7.72-.303-.921.102-1.88.943-2.231a1.727 1.727 0 012.259.924c.538 1.273.698 3.578.737 5.288a.289.289 0 00.288.281h.006a.289.289 0 00.282-.295c-.04-1.759-.21-4.142-.784-5.501a2.3 2.3 0 00-2.123-1.407z",fill:"#FFB300"})]}))},un=Q.a.memo(xn),hn=function(n){return Object(X.jsxs)("svg",Object(J.a)(Object(J.a)({viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[Object(X.jsx)("circle",{cx:15,cy:15,r:14.5,stroke:"#FFB300"}),Object(X.jsx)("path",{d:"M15 24a.55.55 0 01-.165-.026c-1.81-.57-3.35-1.666-4.578-3.256-.967-1.252-1.741-2.81-2.301-4.63C7.01 13.018 7 10.282 7 10.167c0-.276.212-.506.49-.533.042-.004 4.256-.43 7.191-2.532a.549.549 0 01.638 0c2.935 2.102 7.149 2.528 7.19 2.532.279.027.491.257.491.533 0 .115-.01 2.85-.956 5.921-.56 1.82-1.334 3.378-2.301 4.63-1.228 1.59-2.769 2.685-4.577 3.256A.549.549 0 0115 24zM8.1 10.636c.046.898.22 2.965.901 5.166 1.162 3.756 3.18 6.144 5.999 7.1 2.826-.959 4.846-3.354 6.006-7.124.676-2.197.85-4.249.894-5.142-1.216-.175-4.364-.767-6.9-2.449-2.536 1.682-5.684 2.274-6.9 2.449z",fill:"#FFB300"}),Object(X.jsx)("path",{d:"M14.71 18.105a.547.547 0 01-.353-.128l-1.961-1.654a.53.53 0 01-.06-.754.548.548 0 01.765-.06l1.525 1.287 3.024-3.91a.548.548 0 01.76-.102.53.53 0 01.103.75l-3.372 4.36a.544.544 0 01-.431.211z",fill:"#FFB300"})]}))},pn=Q.a.memo(hn),bn=function(n){return Object(X.jsxs)("svg",Object(J.a)(Object(J.a)({viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[Object(X.jsx)("circle",{cx:15,cy:15,r:14.5,stroke:"#FFB300"}),Object(X.jsx)("path",{d:"M19.238 8.292A.479.479 0 0018.793 8a.573.573 0 00-.478.26l-2.017 3.46h-2.103l-2.273-3.33a.51.51 0 00-.48-.228c-.187.017-.358.114-.426.276l-1.966 3.98a.476.476 0 00.24.649c.255.114.563.016.683-.227l1.572-3.167 1.932 2.81a.515.515 0 00.428.227h2.683a.496.496 0 00.445-.26l1.675-2.858 1.556 3.264a.528.528 0 00.478.292.474.474 0 00.205-.048c.257-.114.376-.406.257-.65l-1.966-4.158zM24.863 16.576c-.53 0-.889-.276-.889-.52V13.62c0-.844-.837-1.494-1.931-1.494H21.7v.974h.342c.53 0 .889.277.889.52v2.436c0 .39.188.747.495 1.007-.308.26-.495.617-.495 1.007v2.436c0 .244-.36.52-.89.52h-.341V22h.342c1.076 0 1.931-.65 1.931-1.494V18.07c0-.244.376-.52.89-.52H25v-.974h-.137zM6.026 13.62v2.436c0 .244-.376.52-.89.52H5v.974h.137c.53 0 .889.276.889.52v2.436c0 .845.837 1.494 1.931 1.494H8.3v-.974h-.342c-.53 0-.889-.276-.889-.52V18.07c0-.39-.188-.747-.495-1.007.307-.26.495-.617.495-1.007V13.62c0-.243.36-.52.89-.52h.341v-.974h-.342c-1.077 0-1.931.65-1.931 1.494zM11.992 15.39c0-.34-.29-.6-.633-.6a.616.616 0 00-.632.6c0 .342.29.602.632.602s.633-.276.633-.601zM19.291 15.39c0-.34-.29-.6-.632-.6a.616.616 0 00-.633.6c0 .342.29.602.633.602.341 0 .632-.276.632-.601zM17.957 19.305l3.163 1.17v-.813l-1.983-.73v-.017l1.983-.73v-.796l-3.163 1.169v.747zM8.88 18.184l1.983.731v.017l-1.982.73v.812l3.162-1.169v-.747l-3.162-1.17v.796z",fill:"#FFB300"})]}))},fn=Q.a.memo(bn),jn=function(n){return Object(X.jsxs)("svg",Object(J.a)(Object(J.a)({viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[Object(X.jsx)("circle",{cx:15,cy:15,r:14.5,stroke:"#FFB300"}),Object(X.jsx)("path",{d:"M24 15.142a1.974 1.974 0 00-1.977-1.969c-.538 0-1.012.205-1.36.551-1.345-.96-3.211-1.59-5.268-1.669l.902-4.205 2.926.615c.032.74.649 1.338 1.408 1.338.775 0 1.408-.63 1.408-1.401C22.039 7.63 21.406 7 20.63 7c-.554 0-1.028.315-1.25.787l-3.274-.693a.396.396 0 00-.269.048.384.384 0 00-.158.22l-.996 4.693c-2.104.063-3.986.677-5.347 1.67a2 2 0 00-1.36-.552A1.974 1.974 0 006 15.142c0 .803.475 1.48 1.17 1.795a3.67 3.67 0 00-.047.598C7.123 20.56 10.65 23 15.016 23c4.365 0 7.893-2.44 7.893-5.465a3.48 3.48 0 00-.048-.582A2.037 2.037 0 0024 15.142zm-13.524 1.401a1.408 1.408 0 012.816 0 1.408 1.408 0 01-2.816 0zm7.861 3.701c-.964.96-2.8 1.024-3.337 1.024-.538 0-2.388-.079-3.337-1.024a.37.37 0 010-.52.374.374 0 01.521 0c.602.599 1.899.82 2.832.82.933 0 2.214-.221 2.831-.82a.374.374 0 01.522 0c.11.158.11.378-.032.52zm-.253-2.3c-.775 0-1.407-.629-1.407-1.4a1.408 1.408 0 012.815 0c0 .771-.633 1.4-1.408 1.4z",fill:"#FFB300"})]}))},mn=Q.a.memo(jn),gn=q.e.div(s||(s=Object(U.a)(["\n  display: flex;\n  margin-left: 2.5px;\n  z-index: 50;\n  "," {\n    margin-left: 5px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),On=q.e.div(d||(d=Object(U.a)(["\n  margin-left: 2.5px;\n  margin-right: 2.5px;\n  width: 20px;\n  height: 20px;\n  z-index: 100;\n  "," {\n    width: 30px;\n    height: 30px;\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),vn=function(n){var e=n.badges,t=Object(H.a)().isDark?"#333":"rgba(240, 240, 240, .1)";return Object(X.jsx)(gn,{children:null===e||void 0===e?void 0:e.map((function(n){return function(n){var e=n.tagName,i=n.tagLinks,c=n.tagIcon;return"security"===c?Object(X.jsx)(On,{children:Object(X.jsx)(ln,{title:e,tagLinks:i,children:Object(X.jsx)(pn,{fill:t})})}):"rugdoc"===c?Object(X.jsx)(On,{children:Object(X.jsx)(ln,{title:e,tagLinks:i,children:Object(X.jsx)(fn,{fill:t})})}):"reddit"===c?Object(X.jsx)(On,{children:Object(X.jsx)(ln,{title:e,tagLinks:i,children:Object(X.jsx)(mn,{fill:t})})}):"kyc"===c?Object(X.jsx)(On,{children:Object(X.jsx)(ln,{title:e,tagLinks:i,children:Object(X.jsx)(un,{fill:t})})}):Object(X.jsx)(X.Fragment,{})}(n)}))})},wn=q.e.div(l||(l=Object(U.a)(["\n  position: relative;\n  height: 286px;\n  width: 320px;\n  border-radius: 10px;\n  margin-top: 12.5px;\n  margin-bottom: 12.5px;\n  background: ",";\n  cursor: pointer;\n  "," {\n    width: 796px;\n  }\n"])),(function(n){return n.theme.colors.white3}),(function(n){return n.theme.mediaQueries.md})),zn=q.e.div(x||(x=Object(U.a)(["\n  position: absolute;\n  height: 286px;\n  width: 320px;\n  overflow: hidden;\n  background: ",";\n  opacity: 0.2;\n  "," {\n    width: 796px;\n  }\n"])),(function(n){return n.theme.isDark?"url(images/card-ape.svg) no-repeat 425px 110px":"url(images/card-ape-light.svg) no-repeat 425px 110px"}),(function(n){return n.theme.mediaQueries.md})),kn=q.e.div(u||(u=Object(U.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  "," {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),yn=Object(q.e)(kn)(h||(h=Object(U.a)(["\n  height: 110px;\n  width: 320px;\n  border-radius: 10px 10px 0px 0px;\n  background: ",";\n  "," {\n    width: 796px;\n  }\n"])),(function(n){var e=n.theme;return e.isDark?"#414141":e.colors.primary}),(function(n){return n.theme.mediaQueries.md})),Cn=Object(q.e)(kn)(p||(p=Object(U.a)(["\n  width: 320px;\n  height: 80px;\n  "," {\n    width: 796px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),Sn=Object(q.e)(kn)(b||(b=Object(U.a)(["\n  width: 320px;\n  height: 96px;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 0px 0px 10px 10px;\n  "," {\n    width: 796px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),Fn=q.e.div(f||(f=Object(U.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),In=q.e.div(j||(j=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: ",";\n  align-items: ",";\n  padding-bottom: ",";\n  "," {\n    height: 100%;\n  }\n"])),(function(n){return n.justify||"center"}),(function(n){return n.align||"center"}),(function(n){return n.padding}),(function(n){return n.theme.mediaQueries.md})),Mn=q.e.img(m||(m=Object(U.a)(["\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  margin-left: 10px;\n  "," {\n    width: 35px;\n    height: 35px;\n    margin-left: 0px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),Bn=Object(q.e)(P.fb)(g||(g=Object(U.a)(["\n  font-size: 15px;\n  padding-left: 15px;\n\n  font-weight: 700;\n  "," {\n    font-size: 24px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),Tn=q.e.div(O||(O=Object(U.a)(["\n  height: 8px;\n  width: 100%;\n  border-radius: 20px;\n  background: #c4c4c4;\n  margin-bottom: 15px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.white4})),Ln=Object(q.e)(Tn)(v||(v=Object(U.a)(["\n  width: ",";\n  background: linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%);\n"])),(function(n){return n.percentComplete})),An=function(n){var e=n.iazo,t=e.maxSpendPerBuyer,i=e.baseToken,c=e.iazoToken,r=e.timeInfo,a=e.status,o=e.hardcap,s=e.softcap,d=e.liquidityPercent,l=e.socialInfo,x=e.iazoTags,u=l.tokenImage,h=r.activeTime,p=r.lockPeriod,b=Object(en.a)(new cn.a(t),parseInt(i.decimals)).toString(),f=Object(en.a)(new cn.a(a.totalBaseCollected),parseInt(i.decimals)),j=Object(en.a)(new cn.a(s),parseInt(i.decimals)),m=Object(en.a)(new cn.a(o),parseInt(i.decimals)),g=f/m*100,O=parseInt(d)/10,v=Object(nn.a)(parseInt(h),!0),w=Object(nn.a)(parseInt(p),!0),z=Object(P.ob)(),k=z.isMd,y=z.isSm,C=z.isXs,S=Object(_.b)().t,F=k||y||C;return Object(X.jsxs)(wn,{children:[Object(X.jsx)(zn,{}),Object(X.jsxs)(yn,{children:[Object(X.jsxs)(Fn,{children:[Object(X.jsx)(Mn,{src:u}),!F&&Object(X.jsxs)(Bn,{color:"white",children:[" ",c.name]}),Object(X.jsx)(vn,{badges:x})]}),Object(X.jsxs)(In,{align:"flex-end",children:[F&&Object(X.jsxs)(Bn,{color:"white",children:[" ",c.name]}),Object(X.jsx)(an.a,{timeInfo:r,fontSize:F?"12px":"16px",fontColor:"white"}),Object(X.jsxs)(rn.a,{color:"white",children:[S("Duration")," ",v.days,"d, ",v.hours,"h"]})]})]}),Object(X.jsxs)(Cn,{children:[Object(X.jsxs)(In,{align:"flex-start",children:[Object(X.jsx)(rn.a,{boldContent:"".concat(i.symbol," / ").concat(c.symbol)}),Object(X.jsxs)(rn.a,{boldContent:"".concat(O,"%"),children:[S("Liquidity Lock"),": "]})]}),!F&&Object(X.jsx)(In,{justify:"flex-end",padding:"15px",children:Object(X.jsxs)(rn.a,{boldContent:"".concat(b," ").concat(i.symbol),children:[S("Max Spend")," "]})}),Object(X.jsxs)(In,{align:"flex-end",children:[Object(X.jsxs)(rn.a,{children:[S("Lock Time:")," ",w.days," ",S("Days")]}),Object(X.jsxs)(rn.a,{boldContent:"".concat(j," ").concat(i.symbol),children:[S("Soft Cap"),": "]})]})]}),Object(X.jsxs)(Sn,{children:[F&&Object(X.jsx)(In,{justify:"flex-end",padding:"5px",children:Object(X.jsxs)(rn.a,{boldContent:"".concat(b," ").concat(i.symbol),children:[S("Max Spend")," "]})}),Object(X.jsx)(Tn,{children:Object(X.jsx)(Ln,{percentComplete:"".concat(g,"%")})}),Object(X.jsx)(rn.a,{boldContent:"".concat(f," / ").concat(m," ").concat(i.symbol)})]})]})},Qn=q.e.div(w||(w=Object(U.a)(["\n  display: flex;\n  padding-bottom: 200px;\n  margin-bottom: 100px;\n  justify-content: center;\n  padding: 0px 10px;\n"]))),Dn=q.e.div(z||(z=Object(U.a)(["\n  border-radius: 20px;\n  margin-top: 20px;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n"])),(function(n){return n.theme.colors.navbar})),En=q.e.div(k||(k=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  margin-top: 60px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),Vn=q.e.div(y||(y=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  "," {\n    height: 60px;\n    margin-top: 40px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md})),Wn=q.e.div(C||(C=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: 360px;\n  margin-top: 35px;\n  margin-bottom: 35px;\n  align-items: center;\n  justify-content: center;\n"]))),Hn=q.e.div(S||(S=Object(U.a)(["\n  position: relative;\n  height: 0px;\n  width: 320px;\n  border-radius: 20px 20px 0px 0px;\n  display: flex;\n  align-items: center;\n  padding-left: 30px;\n  z-index: 0;\n  "," {\n    width: 856px;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Pn=Object(q.e)(P.fb)(F||(F=Object(U.a)(["\n  font-size: 30px;\n  font-style: normal;\n  line-height: 52px;\n  text-align: center;\n  width: 100%;\n  font-weight: 600;\n  "," {\n    font-size: 45px;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Rn=Object(q.e)(P.p)(I||(I=Object(U.a)(["\n  width: 195px;\n  height: 46px;\n  color: #ffffff;\n  border-radius: 10px;\n  font-size: 18px;\n  margin-top: 20px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n"]))),_n=Object(q.e)(P.fb)(M||(M=Object(U.a)(["\n  font-size: 20px;\n  line-height: 30px;\n"]))),Un=q.e.div(B||(B=Object(U.a)(["\n  margin-top: 60px;\n"]))),qn=function(){var n,e;Object(E.l)();var t=Object(E.w)(),i=t.iazos,c=t.isInitialized,r=Object(H.a)().isDark,a=Object(P.ob)(),o=a.isMd,s=a.isSm,d=a.isXs,l=o||s||d,x=null===i||void 0===i?void 0:i.filter((function(n){return n.isRegistered})),u=Object(V.a)()/1e3,h=Object(A.useState)(null),p=Object(L.a)(h,2),b=p[0],f=p[1],j=Object(A.useState)(null),m=Object(L.a)(j,2),g=m[0],O=m[1],v=Object(_.b)().t,w=null===x||void 0===x?void 0:x.filter((function(n){return parseInt(n.timeInfo.startTime)<u&&u<parseInt(n.timeInfo.startTime)+parseInt(n.timeInfo.activeTime)&&"HARD_CAP_MET"!==n.iazoState&&"FAILED"!==n.iazoState})),z=null===x||void 0===x?void 0:x.filter((function(n){return parseInt(n.timeInfo.startTime)>u&&"FAILED"!==n.iazoState})),k=null===x||void 0===x?void 0:x.filter((function(n){return u>parseInt(n.timeInfo.startTime)+parseInt(n.timeInfo.activeTime)||"HARD_CAP_MET"===n.iazoState||"FAILED"===n.iazoState})),y=function(){if(g){var n=g.toLowerCase();return null===x||void 0===x?void 0:x.filter((function(e){return e.iazoToken.name.toLowerCase().includes(n)||e.iazoToken.address.includes(g)}))}switch(b){case"upcoming":return z;case"live":return w;case"done":return k;default:return[].concat(Object(T.a)(w),Object(T.a)(z))}};return Object(X.jsx)(X.Fragment,{children:Object(X.jsx)(Qn,{children:Object(X.jsxs)(P.A,{flexDirection:"column",children:[Object(X.jsx)(R.a,{banner:"ssiao",title:v("Self Serve Offerings"),link:"https://apeswap.gitbook.io/apeswap-finance/product-and-features/raise/self-serve-iao-ss-iao",maxWidth:856,listViewBreak:!0,margin:"30px 0 0 0"}),Object(X.jsxs)(Dn,{children:[Object(X.jsx)(Hn,{}),Object(X.jsxs)(En,{children:[Object(X.jsx)(Pn,{children:v("Self - Serve Launchpad")}),Object(X.jsx)(D.b,{to:"/ss-iao/create",children:Object(X.jsxs)(Rn,{children:[" ",v("CREATE")," "]})})]}),Object(X.jsxs)(Vn,{children:[Object(X.jsx)($,{icon:"calendar",text:"Upcoming",active:"upcoming"===b,onClick:function(){return f("upcoming")}}),Object(X.jsx)($,{icon:"graph",text:v("Current"),active:"live"===b,onClick:function(){return f("live")}}),Object(X.jsx)($,{icon:"check",text:v("Past"),active:"done"===b,onClick:function(){return f("done")}}),Object(X.jsx)(W.a,{placeholderText:v("Search token name or address...."),backgroundColor:r?"#0B0B0B":"#FDFBF5",onChange:function(n){O(n.target.value)},size:l?"sm":"md",margin:l?"30px 0px 0px 0px;":""})]}),Object(X.jsxs)(Wn,{children:[Object(X.jsx)(_n,{children:(c||i)&&"".concat(null===(n=y())||void 0===n?void 0:n.length," Presales")}),c||i?null===(e=y())||void 0===e?void 0:e.map((function(n){return Object(X.jsx)(D.b,{to:"/ss-iao/".concat(n.iazoContractAddress),children:Object(X.jsx)(An,{iazo:n},n.iazoContractAddress)},n.iazoContractAddress)})):Object(X.jsx)(Un,{children:Object(X.jsx)(P.cb,{})})]})]})]})})})}},929:function(n,e,t){"use strict";var i=3600,c=86400,r=2629800,a=31557600;e.a=function(n,e){var t=n,o={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=a&&!e&&(o.years=Math.floor(t/a),t-=o.years*a),t>=r&&!e&&(o.months=Math.floor(t/r),t-=o.months*r),t>=c&&(o.days=Math.floor(t/c),t-=o.days*c),t>=i&&(o.hours=Math.floor(t/i),t-=o.hours*i),t>=60&&(o.minutes=Math.floor(t/60),t-=60*o.minutes),o.seconds=t,o}},931:function(n,e,t){"use strict";var i,c,r,a=t(3),o=t(94),s=t(6),d=t(263),l=t(49),x=t(18),u=t(0),h=t.n(u),p=function(n){var e=Object(u.useState)(null),t=Object(x.a)(e,2),i=t[0],c=t[1];return Object(u.useEffect)((function(){var e=new Image;e.src=n,e.onload=function(){return c(n)}}),[n]),i},b=t(26),f=t(31),j=t(92),m={position:"relative",width:"100%"},g={position:"absolute",flexDirection:"column",top:"20%",left:"5%",width:"45%"},O={fontWeight:700,lineHeight:"4.5vw",fontSize:"5vw","@media screen and (min-width: 1130px)":{lineHeight:"50px",fontSize:"55px"}},v={mt:"5%",fontSize:"calc(6px + 1.5vw)",textTransform:"capitalize",padding:0,fontWeight:600,"@media screen and (min-width: 1130px)":{fontSize:"22.5px"}},w=Object(j.a)(s.p)(i||(i=Object(f.a)(["\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  width: 100%;\n  height: 24vw;\n  @media screen and (min-width: 500px) and (max-width: 851px) {\n    height: ",";\n  }\n  @media screen and (min-width: ","px) {\n    height: ","px;\n    width: ","px;\n  }\n"])),(function(n){return n.listViewBreak?"120px":"24vw"}),(function(n){return n.maxWidth}),(function(n){return n.maxWidth/4}),(function(n){return n.maxWidth})),z=Object(j.a)(s.H)(c||(c=Object(f.a)(["\n  border-radius: 10px;\n  width: 100%;\n  height: 24vw;\n  @media screen and (min-width: 500px) and (max-width: 851px) {\n    height: ",";\n  }\n  @media screen and (min-width: ","px) {\n    height: ","px;\n    width: ","px;\n  }\n"])),(function(n){return n.listViewBreak?"120px":"24vw"}),(function(n){return n.maxWidth}),(function(n){return n.maxWidth/4}),(function(n){return n.maxWidth})),k=Object(j.a)(s.c)(r||(r=Object(f.a)(["\n  transform: rotate(270deg);\n  margin-left: 10px;\n  width: calc(4px + 0.9vw);\n  @media screen and (min-width: 1130px) {\n    width: 14px;\n  }\n"]))),y=t(1),C=function(n){var e=n.banner,t=n.children,i=n.title,c=n.listViewBreak,r=n.margin,x=n.titleColor,u=n.link,h=n.maxWidth,f=void 0===h?1200:h,j=Object(o.g)(),C=Object(d.a)().isDark,S=Object(b.b)().t,F=p("../images/new-banners/".concat(e,"-").concat(C?"night":"day",".svg"));return Object(y.c)(s.p,{sx:Object(a.a)(Object(a.a)({},m),{},{margin:r}),children:[F?Object(y.b)(w,{sx:{backgroundImage:"url(".concat(F,")")},maxWidth:f,listViewBreak:c}):Object(y.b)(z,{maxWidth:f,listViewBreak:c}),Object(y.c)(s.p,{sx:Object(a.a)({},g),children:[Object(y.b)(l.n,{sx:Object(a.a)(Object(a.a)({},O),{},{color:x||"text","@media screen and (min-width: 500px) and (max-width: 851px)":{fontSize:c?"25px":"5vw",lineHeight:c?"25px":"5vw"}}),children:i.toUpperCase()}),Object(y.c)(s.f,{variant:"text",onClick:function(){return(n=u).includes("modal")?j.push({search:n}):window.open(n,"_blank");var n},sx:Object(a.a)(Object(a.a)({},v),{},{color:x||"text","&&&:hover":{textDecoration:"none",color:x||"text"}}),children:[S("Learn More")," ",Object(y.b)(k,{color:x||"text"})]})]}),t]})};e.a=h.a.memo(C)},966:function(n,e,t){"use strict";t.d(e,"b",(function(){return r}));var i=t(18),c=t(0),r=function(){var n=Object(c.useState)((new Date).getTime()),e=Object(i.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){var n=setInterval((function(){r((function(n){return n+1e3}))}),1e3);return function(){return clearInterval(n)}}),[]),t};e.a=r}}]);
//# sourceMappingURL=30.c8f01dad.chunk.js.map