(()=>{"use strict";var e={578:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Cabin&family=Press+Start+2P&display=swap);"]),o.push([e.id,'*{box-sizing:border-box;margin:0;padding:0}html{font-family:"Cabin",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:17px;color:#735b54}body{height:100vh;background-color:#ffab91;display:grid;justify-items:center;gap:.5rem 0px;grid-template-areas:"header" "main" "how-to" "footer"}a{text-decoration:none;color:inherit}header{grid-area:header;font-family:"Press Start 2P",cursive;text-align:center;margin-top:57px}header h1{color:#fafafa;font-size:36px;line-height:36px;font-weight:normal;margin-bottom:2.5rem}.subheading{font-size:18px;line-height:18px;text-align:center;font-weight:normal;color:#725b53}main{grid-area:main;position:relative;text-align:center;background:#ffddc1;padding:22px 22px 50px 22px;margin-bottom:50px;box-shadow:0px 4px 10px #eb8a84;border-radius:10px}#grid{position:relative;z-index:0}.row{height:32px}.cell{appearance:none;outline:none;cursor:pointer;height:23px;width:23px;margin:2.5px 3.5px;border-radius:50%;background:#fafafa;transition:background-color calc(1s / 7.5) ease;-webkit-tap-highlight-color:transparent}.cell:checked{background:#d1b7ad}#generation{position:relative;z-index:2;top:10px}#controls{position:relative;z-index:2;bottom:-30px;display:flex;justify-content:space-around;align-items:center}button{position:relative;z-index:1;display:flex;justify-content:center;align-items:center;outline:none;cursor:pointer;border:none;height:54px;width:54px;border-radius:50%;background:#a1887f;box-shadow:0px 4px 4px #e7cab5;-webkit-tap-highlight-color:transparent}@media(hover: hover){button:hover{background:#987c73}[data-start=true]:hover{background:#715a52}}[data-start=true]{background:#715a52}button:active{background:#715a52;transform:translateY(4px)}.material-icons-round.md-32{font-size:32px;color:#fafafa}.material-icons-round.md-24{font-size:24px;color:#fafafa}.material-icons-round.md-26{font-size:26px}.pulse{position:absolute;z-index:-1;height:54px;width:54px;border-radius:50%;background:#987c73;animation:pulse-border 1.5s ease-out infinite}@keyframes pulse-border{0%{transform:scale(1);opacity:1}100%{transform:scale(1.5);opacity:0}}#how-to{grid-area:how-to;display:grid;align-items:center;margin-bottom:45px;grid-template-columns:1fr 6fr 1fr;grid-template-rows:1fr min-content min-content;gap:.6rem 0px;grid-template-areas:"button header ." ". p1 ." ". p2 ."}#how-to a{color:#ffddc1}#how-to h2{font-family:"Press Start 2P",cursive;grid-area:header;font-weight:normal;font-size:18px;line-height:18px;color:#725b53}#how-to>*{margin-left:.7rem}#how-to-button{grid-area:button;justify-self:end}#p1{grid-area:p1}#p2{grid-area:p2}#p1,#p2{max-height:0px;max-width:62vw;overflow:hidden;transition:max-height .75s ease}footer{grid-area:footer;display:flex;justify-content:center;width:100%;font-size:1rem;line-height:1.5rem;background:#ffddc1;padding-top:3rem;padding-bottom:2rem}footer img{height:125px;width:125px}footer address{font-style:normal}@media only screen and (min-width: 900px){body{font-size:1.1rem;grid-template-areas:"header" "how-to" "main" "footer"}header{font-size:1.5em}#how-to h2,#how-to #how-to-button{display:none}#p1,#p2{max-height:1000px;max-width:500px;text-align:center;margin-bottom:15px}footer{margin-top:100px;font-size:1.1em}}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],d=t.base?c[0]+t.base:c[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=d(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var d=c(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=d}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function*e(){for(let e=0;e<o.length;e++)for(let t=0;t<o[e].length;t++)yield[o[e][t],e,t]}function t(){return Math.round(Math.random())}function r(){const e=document.querySelector("#start");e.dataset.start="false",e.children[0].innerText="play_arrow",document.querySelector("#generation").innerText="generation: 0"}let o;function i(){const[e,t]=[Math.max(9,Math.floor((visualViewport.height-200)/30)),Math.floor((visualViewport.width-54)/30)];!function(e,t){const n=document.querySelector("#grid");r(),document.querySelector("#grid").innerHTML="";for(let r=0;r<e;r++)n.appendChild(a(t,r));o=Array.from(document.querySelector("#grid").children).map((e=>Array.from(e.children)))}(Math.min(e,23),Math.min(t,27))}function a(e,t){let n=document.createElement("div");n.classList="row",n.id=`r-${t}`;for(let r=0;r<e;r++)n.appendChild(c(`${t}:${r}`));return n}function c(e){let n=document.createElement("input");return n.type="checkbox",n.classList="cell",n.id=e,n.checked=!!t(),n}function d(){!function(t){for(const[n,r,o]of e())n.checked=!!t[r][o]}(function(){let t=Array(o.length).fill(0).map((e=>Array(o[e].length).fill(0)));for(const[n,r,o]of e()){let e=s(r,o);n.checked?t[r][o]=3==e||4==e?1:0:t[r][o]=3==e?1:0}return t}()),l.innerText=l.innerText.replace(/\d+/,(e=>+e+1))}function s(e,t){const n=t-1<0?t:t-1;let r=o[e-1]?o[e-1].slice(n,t+2):[],i=o[e].slice(n,t+2),a=o[e+1]?o[e+1].slice(n,t+2):[];return r.concat(i,a).reduce(((e,t)=>e+(1==t.checked?1:0)),0)}const l=document.querySelector("#generation");function u(){const e=document.querySelector("#p1").style,t=document.querySelector("#p2").style,n=document.querySelector("#how-to-button");"1000px"==e.maxHeight?[e.maxHeight,t.maxHeight]=["0px","0px"]:[e.maxHeight,t.maxHeight]=["1000px","1000px"],n.innerText="add_circle"==n.innerText?"remove_circle":"add_circle"}var f=n(379),p=n.n(f),h=n(578);p()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,i(),document.querySelector("#start").addEventListener("click",(function(){const e=document.querySelector("#start"),t=e.children[0],n=document.querySelector("#pulse");e.dataset.start="false"===e.dataset.start?"true":"false",t.innerText="play_arrow"==t.innerText?"pause":"play_arrow",n.className="","true"===e.dataset.start&&async function(){const e=document.querySelector("#start");for(;"true"==e.dataset.start;)d(),await t(333);function t(e){return new Promise((t=>setTimeout(t,e)))}}()})),document.querySelector("#next").addEventListener("click",d),document.querySelector("#clear").addEventListener("click",(function(){r();for(const[t]of e())t.checked=!1})),document.querySelector("#reset").addEventListener("click",(function(){r();for(const[n]of e())n.checked=!!t()})),document.querySelector("#how-to-button").addEventListener("click",u),document.querySelector("#how-to-heading").addEventListener("click",u),function(){let e,t=visualViewport.width;window.addEventListener("resize",(()=>{visualViewport.width!=t&&(t=visualViewport.width,clearTimeout(e),e=setTimeout(i,150))}))}()})()})();