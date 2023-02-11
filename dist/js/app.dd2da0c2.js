(function(){var e={3875:function(e,n,t){"use strict";var o=t(9242),r=t(3396),i=t(4870),c=t(7139);const a=["src"],u={key:1};var s=(0,r.aZ)({__name:"CustomBtn",props:{type:{default:"text"},name:null,icon:null,text:null},emits:["click"],setup(e,{emit:n}){const o=e;return(e,i)=>((0,r.wg)(),(0,r.iD)("button",{type:"button",class:(0,c.C_)(["custom-btn",{"custom-btn--icon":"icon"===o.type,"custom-btn--text":"text"===o.type}]),onClick:i[0]||(i[0]=e=>n("click"))},[o.icon?((0,r.wg)(),(0,r.iD)("img",{key:0,src:t(7254)(`./${o.icon}.svg`),alt:"svg icon"},null,8,a)):(0,r.kq)("",!0),o.text?((0,r.wg)(),(0,r.iD)("span",u,(0,c.zw)(o.text),1)):(0,r.kq)("",!0)],2))}}),l=t(89);const d=(0,l.Z)(s,[["__scopeId","data-v-5799b9fa"]]);var p=d;const m={class:"edit-panel"};var v=(0,r.aZ)({__name:"EditPanel",emits:["redo","undo","heading","paragraph","picture","copy"],setup(e,{emit:n}){const t=[{type:"icon",name:"undo",icon:"undo"},{type:"icon",name:"redo",icon:"redo"},{type:"icon",name:"heading",icon:"heading"},{type:"icon",name:"paragraph",icon:"paragraph"},{type:"icon",name:"picture",icon:"picture"},{type:"text",name:"copy",text:"Скопировать HTML"}];return(e,o)=>((0,r.wg)(),(0,r.iD)("div",m,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((e,t)=>(0,r.Wm)(p,(0,r.dG)({key:t},e,{class:"edit-panel__btn",onClick:t=>n(e.name)}),null,16,["onClick"]))),64))]))}});const f=v;var g=f,y=e=>{const n=e.querySelectorAll("img"),t=e.querySelectorAll("h2"),o=e.querySelectorAll("p");n.forEach((e=>{e.style.display="block",e.style.margin="1em 0",e.style.maxWidth="100%"})),t.forEach((e=>{e.style.margin="1em 0"})),o.forEach((e=>{e.style.margin="0.5em 0"}))},h=e=>new Promise(((n,t)=>{const o=new Image;o.onload=()=>{n(!0)},o.onerror=()=>{t(new Error("Invalid image URL"))},o.src=e}));const b=()=>{try{document.execCommand("undo",!1,void 0)}catch(e){console.error(e)}},x=()=>{try{document.execCommand("redo",!1,void 0)}catch(e){console.error(e)}},w=()=>{try{document.execCommand("formatBlock",!1,"h2")}catch(e){console.error(e)}},_=()=>{try{document.execCommand("formatBlock",!1,"p")}catch(e){console.error(e)}},k=async()=>{const e=prompt("Enter image URL");if(e)try{await h(e),document.execCommand("insertImage",!1,e)}catch(n){console.error(n)}};var C=e=>{const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(t){console.error(t)}document.body.removeChild(n)};const O={class:"editor"};var E=(0,r.aZ)({__name:"Editor",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:n}){const t=e,o=(0,i.iH)(),c=()=>{n("update:modelValue",o.value.innerHTML),y(o.value)},a=()=>c(),u=()=>{C(t.modelValue)},s=()=>b(),l=()=>x(),d=()=>w(),p=()=>_(),m=()=>{k(),c()};return(0,r.bv)((()=>{o.value.innerHTML=t.modelValue})),(e,n)=>((0,r.wg)(),(0,r.iD)("div",O,[(0,r.Wm)(g,{onUndo:s,onRedo:l,onHeading:d,onParagraph:p,onPicture:m,onCopy:u}),(0,r._)("div",{ref_key:"contentRef",ref:o,class:"editor__editable-area",contenteditable:"",onInput:a},null,544)]))}});const D=(0,l.Z)(E,[["__scopeId","data-v-548571e8"]]);var V=D;const j={class:"container"};var H=(0,r.aZ)({__name:"App",setup(e){const n=(0,i.iH)('\n  <h2 style="margin: 1em 0px;">This is a heading</h2>\n  <div>this is a paragraph</div>\n  <div><br></div>\n  <div>\n    <img src="https://picsum.photos/1100/700" style="display: block; margin: 1em 0px; max-width: 100%;">\n  </div>\n');return(e,t)=>((0,r.wg)(),(0,r.iD)("div",j,[(0,r.Wm)(V,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,["modelValue"])]))}});const T=H;var I=T;(0,o.ri)(I).mount("#app")},7254:function(e,n,t){var o={"./heading.svg":4880,"./paragraph.svg":6549,"./picture.svg":6043,"./redo.svg":306,"./undo.svg":5809};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=7254},4880:function(e,n,t){"use strict";e.exports=t.p+"img/heading.8136f744.svg"},6549:function(e,n,t){"use strict";e.exports=t.p+"img/paragraph.3ee43b66.svg"},6043:function(e,n,t){"use strict";e.exports=t.p+"img/picture.56ca66c0.svg"},306:function(e,n,t){"use strict";e.exports=t.p+"img/redo.0a964fca.svg"},5809:function(e,n,t){"use strict";e.exports=t.p+"img/undo.c47b4529.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var c=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(a=!1,i<c&&(c=i));if(a){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,c=o[0],a=o[1],u=o[2],s=0;if(c.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(u)var l=u(t)}for(n&&n(o);s<c.length;s++)i=c[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkvue_light_wysiwyg"]=self["webpackChunkvue_light_wysiwyg"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3875)}));o=t.O(o)})();
//# sourceMappingURL=app.dd2da0c2.js.map