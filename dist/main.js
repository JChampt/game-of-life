(()=>{"use strict";function*e(){for(let e=0;e<r.length;e++)for(let t=0;t<r[e].length;t++)yield[r[e][t],e,t]}function t(){return Math.round(Math.random())}function n(){const e=document.querySelector(".play");e.dataset.play="false",e.children[0].innerText="play_arrow",document.querySelector("#generation").innerText="generation: 0"}let r;function c(){const[e,t]=[Math.max(9,Math.floor((visualViewport.height-200)/30)),Math.floor((visualViewport.width-54)/30)];!function(e,t){const c=document.querySelector("#grid");n(),document.querySelector("#grid").innerHTML="";for(let n=0;n<e;n++)c.appendChild(o(t,n));r=Array.from(document.querySelector("#grid").children).map((e=>Array.from(e.children)))}(Math.min(e,23),Math.min(t,27))}function o(e,t){let n=document.createElement("div");n.classList="row",n.id=`r-${t}`;for(let r=0;r<e;r++)n.appendChild(i(`${t}:${r}`));return n}function i(e){let n=document.createElement("input");return n.type="checkbox",n.classList="cell",n.id=e,n.checked=!!t(),n}function l(){!function(t){for(const[n,r,c]of e())n.checked=!!t[r][c]}(function(){let t=Array(r.length).fill(0).map((e=>Array(r[e].length).fill(0)));for(const[n,r,c]of e()){let e=a(r,c);n.checked?t[r][c]=3==e||4==e?1:0:t[r][c]=3==e?1:0}return t}()),u.innerText=u.innerText.replace(/\d+/,(e=>+e+1))}function a(e,t){const n=t-1<0?t:t-1;let c=r[e-1]?r[e-1].slice(n,t+2):[],o=r[e].slice(n,t+2),i=r[e+1]?r[e+1].slice(n,t+2):[];return c.concat(o,i).reduce(((e,t)=>e+(1==t.checked?1:0)),0)}const u=document.querySelector("#generation");function d(){const[e,t]=[...document.getElementsByTagName("p")].map((e=>e.style)),n=document.querySelector("#how-to-button");"1000px"==e.maxHeight?[e.maxHeight,t.maxHeight]=["0px","0px"]:[e.maxHeight,t.maxHeight]=["1000px","1000px"],n.innerText="add_circle"==n.innerText?"remove_circle":"add_circle"}c(),document.querySelector(".play").addEventListener("click",(function(){const e=document.querySelector(".play"),t=e.children[0],n=document.querySelector("#pulse");e.dataset.play="false"===e.dataset.play?"true":"false",t.innerText="play_arrow"==t.innerText?"pause":"play_arrow",n.className="","true"===e.dataset.play&&async function(){const e=document.querySelector(".play");for(;"true"==e.dataset.play;)l(),await t(333);function t(e){return new Promise((t=>setTimeout(t,e)))}}()})),document.querySelector(".next").addEventListener("click",l),document.querySelector(".clear").addEventListener("click",(function(){n();for(const[t]of e())t.checked=!1})),document.querySelector(".refresh").addEventListener("click",(function(){n();for(const[n]of e())n.checked=!!t()})),document.querySelector("#how-to-button").addEventListener("click",d),document.querySelector("#how-to-heading").addEventListener("click",d),function(){let e,t=visualViewport.width;window.addEventListener("resize",(()=>{visualViewport.width!=t&&(t=visualViewport.width,clearTimeout(e),e=setTimeout(c,150))}))}()})();