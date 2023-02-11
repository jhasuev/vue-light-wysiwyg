(function(){var e={4842:function(e,n,t){"use strict";var o=t(9242),r=t(3396),a=t(4870),i=t(7139);const c=["src"],u={key:1};var s=(0,r.aZ)({__name:"CustomBtn",props:{type:{default:"text"},name:null,icon:null,text:null},emits:["click"],setup(e,{emit:n}){const o=e;return(e,a)=>((0,r.wg)(),(0,r.iD)("button",{type:"button",class:(0,i.C_)(["custom-btn",{"custom-btn--icon":"icon"===o.type,"custom-btn--text":"text"===o.type}]),onClick:a[0]||(a[0]=e=>n("click"))},[o.icon?((0,r.wg)(),(0,r.iD)("img",{key:0,src:t(7254)(`./${o.icon}.svg`),alt:"svg icon"},null,8,c)):(0,r.kq)("",!0),o.text?((0,r.wg)(),(0,r.iD)("span",u,(0,i.zw)(o.text),1)):(0,r.kq)("",!0)],2))}}),l=t(89);const d=(0,l.Z)(s,[["__scopeId","data-v-5799b9fa"]]);var p=d;const m={class:"edit-panel"};var v=(0,r.aZ)({__name:"EditPanel",emits:["redo","undo","heading","paragraph","picture","copy"],setup(e,{emit:n}){const t=[{type:"icon",name:"undo",icon:"undo"},{type:"icon",name:"redo",icon:"redo"},{type:"icon",name:"heading",icon:"heading"},{type:"icon",name:"paragraph",icon:"paragraph"},{type:"icon",name:"picture",icon:"picture"},{type:"text",name:"copy",text:"Скопировать HTML"}];return(e,o)=>((0,r.wg)(),(0,r.iD)("div",m,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((e,t)=>(0,r.Wm)(p,(0,r.dG)({key:t},e,{class:"edit-panel__btn",onClick:t=>n(e.name)}),null,16,["onClick"]))),64))]))}});const f=v;var g=f;const h=e=>new Promise((n=>{const t=new Image;t.onload=()=>{n(!0)},t.onerror=()=>{n(!1)},t.src=e}));function y(e){const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}const b=()=>{document.execCommand("undo",!1,void 0)},x=()=>{document.execCommand("redo",!1,void 0)},w=()=>{document.execCommand("formatBlock",!1,"h2")},_=()=>{document.execCommand("formatBlock",!1,"p")},k=async()=>{const e=prompt("Enter image URL");if(!e)return;const n=await h(e);n&&document.execCommand("insertImage",!1,e)},C=e=>{const n=e.querySelectorAll("img"),t=e.querySelectorAll("h2"),o=e.querySelectorAll("p");n.forEach((e=>{e.style.display="block",e.style.margin="1em 0",e.style.maxWidth="100%"})),t.forEach((e=>{e.style.margin="1em 0"})),o.forEach((e=>{e.style.margin="0.5em 0"}))},O={class:"editor"};var D=(0,r.aZ)({__name:"Editor",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:n}){const t=e,o=(0,a.iH)(),i=(0,a.iH)(),c=()=>{n("update:modelValue",i.value.innerHTML),C(i.value)},u=()=>{o.value=new MutationObserver(c),o.value.observe(i.value,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})},s=()=>{y(t.modelValue)},l=()=>{k(),c()};return(0,r.bv)((()=>{i.value.innerHTML=t.modelValue,u()})),(0,r.Jd)((()=>{o.value.disconnect()})),(e,n)=>((0,r.wg)(),(0,r.iD)("div",O,[(0,r.Wm)(g,{onUndo:(0,a.SU)(b),onRedo:(0,a.SU)(x),onHeading:(0,a.SU)(w),onParagraph:(0,a.SU)(_),onPicture:l,onCopy:s},null,8,["onUndo","onRedo","onHeading","onParagraph"]),(0,r._)("div",{ref_key:"contentRef",ref:i,class:"editor__editable-area",contenteditable:""},null,512)]))}});const E=(0,l.Z)(D,[["__scopeId","data-v-156a0e3a"]]);var U=E;const H={class:"container"};var V=(0,r.aZ)({__name:"App",setup(e){const n=(0,a.iH)('\n  <h2 style="margin: 1em 0px;">This is a heading</h2>\n  <div>this is a paragraph</div>\n  <div><br></div>\n  <div>\n    <img src="https://picsum.photos/1100/700" style="display: block; margin: 1em 0px; max-width: 100%;">\n  </div>\n');return(e,t)=>((0,r.wg)(),(0,r.iD)("div",H,[(0,r.Wm)(U,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,["modelValue"])]))}});const j=V;var P=j;(0,o.ri)(P).mount("#app")},7254:function(e,n,t){var o={"./heading.svg":4880,"./paragraph.svg":6549,"./picture.svg":6043,"./redo.svg":306,"./undo.svg":5809};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=7254},4880:function(e,n,t){"use strict";e.exports=t.p+"img/heading.8136f744.svg"},6549:function(e,n,t){"use strict";e.exports=t.p+"img/paragraph.3ee43b66.svg"},6043:function(e,n,t){"use strict";e.exports=t.p+"img/picture.56ca66c0.svg"},306:function(e,n,t){"use strict";e.exports=t.p+"img/redo.0a964fca.svg"},5809:function(e,n,t){"use strict";e.exports=t.p+"img/undo.c47b4529.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkvue_light_wysiwyg"]=self["webpackChunkvue_light_wysiwyg"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4842)}));o=t.O(o)})();
//# sourceMappingURL=app.faab5a9d.js.map