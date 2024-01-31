import{i as p,a as h,S as b}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const i={searchForm:document.querySelector(".search-form"),wrapperPictures:document.querySelector(".pictures-list"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let c=1,u="",d=0;i.searchForm.addEventListener("submit",L);i.loadBtn.addEventListener("click",w);async function L(e){e.preventDefault();const o=e.target.elements.query.value;i.loader.style.display="inline-block";try{u=o;const{data:n}=await f(u,c);k(n.hits),n.hits.length===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"}):(d=g(),s())}catch(n){console.error(n)}finally{i.loader.style.display="none",s()}e.target.reset()}async function w(){c+=1,S();try{const{data:e}=await f(u,c);e.hits.length===0?B():(q(e.hits),d=g(),s())}catch(e){console.error(e)}finally{P(),s()}}function S(){i.loader.style.display="inline-block"}function P(){i.loader.style.display="none"}async function f(e,o){const n="42004606-5d03e591d800e1e125ea1f7b1",l="https://pixabay.com",t="/api/",r={key:n,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40},a=`${l}${t}?${new URLSearchParams(r)}`;return h.get(a)}function $({webformatURL:e,largeImageURL:o,tags:n,likes:l,views:t,comments:r,downloads:a}){return`<li class="gallery-card">
    <a class="gallary-card-link" href="${o}">
      <img src="${e}" alt="${n}" />
      <ul class="image-info">
        <li class="image-item-info">
          <p>Likes</p>
          <p>${l}</p>
        </li>
        <li class="image-item-info">
          <p>Views</p>
          <p>${t}</p>
        </li>
        <li class="image-item-info">
          <p>Comments</p>
          <p>${r}</p>
        </li>
        <li class="image-item-info">
          <p>Downloads</p>
          <p>${a}</p>
        </li>
      </ul>
    </a>
  </li>`}function m(e){return e.map($).join("")}function k(e){i.wrapperPictures.innerHTML=m(e),y(),s()}function q(e){i.wrapperPictures.innerHTML+=m(e),y(),s()}function B(){p.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#3498db",messageColor:"#ffffff"}),v(),s()}function v(){i.loadBtn.style.display="none"}function g(){const e=document.querySelector(".gallery-card"),{height:o}=e.getBoundingClientRect();return o}function s(){const e=c*d;window.scrollBy({top:e,behavior:"smooth"})}function y(){new b(".gallery-card a.gallary-card-link",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
