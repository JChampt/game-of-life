(()=>{"use strict";function*e(){for(let e=0;e<r.length;e++)for(let t=0;t<r[e].length;t++)yield[r[e][t],e,t]}function t(){return Math.round(Math.random())}let r;function n(e,t){const n=document.querySelector("#grid");document.querySelector("#grid").innerHTML="";for(let r=0;r<e;r++)n.appendChild(o(t,r));r=Array.from(document.querySelector("#grid").children).map((e=>Array.from(e.children)))}function o(e,t){let r=document.createElement("div");r.classList="row",r.id=`r-${t}`;for(let n=0;n<e;n++)r.appendChild(c(`${t}:${n}`));return r}function c(e){let r=document.createElement("input");return r.type="checkbox",r.classList="cell",r.id=e,r.checked=!!t(),r}function i(){!function(t){for(const[r,n,o]of e())r.checked=!!t[n][o]}(function(){let t=Array(r.length).fill(0).map((e=>Array(r[e].length).fill(0)));for(const[r,n,o]of e()){let e=a(r);r.checked?t[n][o]=3==e||4==e?1:0:t[n][o]=3==e?1:0}return t}()),l.innerText=l.innerText.replace(/\d+/,(e=>+e+1))}function a(e){const[t,n]=function(e){return e.id.split(":").map(Number)}(e),o=n-1<0?n:n-1;let c=r[t-1]?r[t-1].slice(o,n+2):[],i=r[t].slice(o,n+2),a=r[t+1]?r[t+1].slice(o,n+2):[];return c.concat(i,a).reduce(((e,t)=>e+(1==t.checked?1:0)),0)}const l=document.querySelector("#generation");function u(){const e=document.querySelector("#start"),t=e.children[0],r=e.children[1];e.dataset.start="false"===e.dataset.start?"true":"false",t.innerText="Start"==t.innerText?"Stop":"Start",r.innerText="play_arrow"==r.innerText?"stop":"play_arrow","true"===e.dataset.start&&async function(){const e=document.querySelector("#start");for(;"true"==e.dataset.start;)i(),await t(333);function t(e){return new Promise((t=>setTimeout(t,e)))}}()}function d(){s();for(const[t]of e())t.checked=!1}function s(){const e=document.querySelector("#start"),t=e.children[0];e.dataset.start="false",t.innerText="Start",e.children[1].innerText="play_arrow",document.querySelector("#generation").innerText="generation: 0"}function f(){s();for(const[r]of e())r.checked=!!t()}function m(){const e=document.querySelector("#p1").style,t=document.querySelector("#p2").style,r=document.querySelector("#how-to-button").style;"1000px"==e.maxHeight?[e.maxHeight,t.maxHeight]=["0px","0px"]:[e.maxHeight,t.maxHeight]=["1000px","1000px"],r.transform="rotate(0deg)"==r.transform?"rotate(-180deg)":"rotate(0deg)"}window.matchMedia("(max-width: 864px)").matches?n(Math.floor((visualViewport.height-200)/30),Math.floor((visualViewport.width-50)/30)):n(23,23),function(){document.querySelector("#start").addEventListener("click",u),document.querySelector("#next").addEventListener("click",i),document.querySelector("#clear").addEventListener("click",d),document.querySelector("#reset").addEventListener("click",f);const e=document.querySelector("#how-to-button");e.style.transform="rotate(0deg)",e.addEventListener("click",m)}()})();