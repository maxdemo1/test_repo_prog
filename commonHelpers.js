import{a as n,i as w}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.forEach(a=>{a.addEventListener("click",s)}),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",t);function t(a){a.target===a.currentTarget&&e.modal.classList.add("is-hidden")}function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const q=localStorage.getItem("active-category"),f=document.getElementById(q),L=document.querySelectorAll(".choose-category-button"),p=document.querySelector(".placeholder-container"),O="https://energyflow.b.goit.study/api/filters";let h=1;function y(e,t){return n.get(`${O}?filter=${e}&page=${t}&limit=12`).then(s=>s.data.results.length?s.data:(console.error("No results found for this filter."),null)).catch(s=>{console.error("Error fetching images:",s)})}function U({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function v(e){if(e){let t="";e.results.forEach(a=>{t+=U(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,p.innerHTML="",p.appendChild(s)}else p.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}L.forEach(e=>{e.addEventListener("click",async()=>{L.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;y(t,h).then(s=>{v(s)})})});f?(f.classList.add("active-category"),y(f.innerHTML,h).then(e=>{v(e)})):(document.getElementById("muscles").classList.add("active-category"),y("Muscles",h).then(t=>{v(t)}));const A="https://energyflow.b.goit.study/api/exercises",H=document.querySelector(".placeholder-container"),l=document.querySelector(".placeholder-container");H.addEventListener("click",N);const c=document.createElement("ul");c.classList.add("search-result-list");const d={group:"",item:""};async function N(e){if(e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;d.group=t.lastElementChild.textContent,d.item=t.firstChild.textContent;const{data:s}=await E(d);if(!s.results){l.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=k(s),l.innerHTML="",l.appendChild(c),$(c,s)}async function E({group:e,item:t},s=1){e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return await n.get(`${A}?${e.toLowerCase()}=${t.toLowerCase()}&page=${s}&limit=12`)}catch(a){window.alert("something goes wrong"),console.log(a)}}function k({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:o,burnedCalories:r,time:i,_id:g})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${s.toFixed(1)}</p>
                <svg class="rating-star-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#rating-star"></use>
                </svg>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${g} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="/project-dev-hunters/assets/sprite-f8222074.svg#running-man"></use>
            </svg>
            <h2>${a[0].toUpperCase()+a.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${r} / ${i} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${o[0].toUpperCase()+o.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function $(e,{totalPages:t},s=0){if(t===1)return;const a=document.createElement("ul");a.classList.add("pagination-counter"),a.addEventListener("click",I);for(let o=0;o<t;o++){const r=document.createElement("li");r.textContent=o+1,r.classList.add("one-count"),a.append(r),console.log(o==s),o+1==s&&r.classList.add("active-count")}e.after(a),e.classList.add("exercises-margin-for-pagin")}async function I(e){if(e.target.nodeName==="UL")return;const{data:t}=await E(d,e.target.textContent);console.log(t),c.innerHTML=k(t),l.innerHTML="",l.appendChild(c),$(c,t,e.target.textContent),console.log(e.target.textContent)}const P=document.querySelector("[data-modal-open]"),R=document.querySelector("[data-modal-close]"),u=document.querySelector("[data-modal]"),C=document.querySelector(".exercises-modal");let j="64f389465ae26083f39b17a2";P.addEventListener("click",()=>{u.classList.add("is-open"),z(),Y()});async function D(){return n.defaults.baseURL="https://energyflow.b.goit.study",await n.get(`/api/exercises/${j}`)}async function z(){try{const e=await D();console.log(e.data);const t=e.data;Z(t)}catch(e){W(e)}}function Z(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:o,gifUrl:r,name:i,popularity:g,rating:S,target:M,time:B}=e;let b=S.toFixed(1);const T=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${i}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${i}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${b}</p>
          <ul class="exercises-modal-stars-list">
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
          </ul>
      </div>
      <ul class="exercises-modal-block-list">
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Target</h5>
              <p class="exercises-modal-block-paragraf">${M}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${t}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${o}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${g}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${B} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${a}</p>
      </div>
      <div class="exercises-modal-buttons">
          <button class="exercises-modal-button-favorites" type="button">
              Add to favorites
              <svg class="exercises-modal-button-icon">
                  <use href="./img/sprite.svg#icon-heart"></use>
              </svg>
          </button>
          <button class="exercises-modal-button-rating" type="button">Give a rating</button>
      </div>
  </div>
  `;C.insertAdjacentHTML("beforeend",T),F(b)}function F(e){const s=[...C.querySelectorAll(".exercises-modal-star-icon")];console.log(s);for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function W(e){console.log(e);const t=e.name,s=e.message;w.error({position:"topRight",message:`${t}: ${s}.`})}function Y(){document.addEventListener("keydown",s),R.addEventListener("click",e),u.addEventListener("click",t);function e(){u.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-modal")&&e()}function s(a){a.code==="Escape"&&(u.classList.remove("is-open"),document.removeEventListener("keydown",s))}}n.defaults.baseURL="https://energyflow.b.goit.study/api";const x={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};x.form.addEventListener("submit",V);async function V(e){e.preventDefault();const t=x.form.email.value.trim();try{if(!t){m("Oooops! You forgot to enter the email! 🫣");return}if(!G(t))return;const s=await _(t);m("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&m("Sorry! This email has been already declarated!")}finally{x.form.reset()}}async function _(e){return(await n.post("subscription",{email:e})).data}function G(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(m("Please, enter the valid email!"),!1)}function m(e){w.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers.js.map
