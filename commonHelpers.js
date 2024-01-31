import{i as u,a as b,S as L}from"./assets/vendor-b52d9f5e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const n={searchForm:document.querySelector(".search-form"),wrapperPictures:document.querySelector(".pictures-list"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let c=1,d="",p=0;n.loadBtn.style.display="none";n.searchForm.addEventListener("submit",w);n.loadBtn.addEventListener("click",S);async function w(e){e.preventDefault();const r=e.target.elements.query.value;if(!r.trim()){u.warning({message:"Field can not be empty",position:"topRight",backgroundColor:"#FFD700",messageColor:"#000000"});return}n.loader.style.display="inline-block";try{d=r;const{data:i}=await m(d,c);F(i.hits),i.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"}):(p=y(),s(),f())}catch(i){console.error(i)}finally{n.loader.style.display="none",s()}e.target.reset()}async function S(){c+=1,B();try{const{data:e}=await m(d,c);e.hits.length===0?q():($(e.hits),p=y(),s(),f())}catch(e){console.error(e)}finally{P(),s()}}function f(){n.loadBtn.style.display="block",n.loadBtn.style.display="margin 0 auto"}function B(){n.loader.style.display="inline-block"}function P(){n.loader.style.display="none"}async function m(e,r){const i="42004606-5d03e591d800e1e125ea1f7b1",l="https://pixabay.com",t="/api/",o={key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40},a=`${l}${t}?${new URLSearchParams(o)}`;return b.get(a)}function k({webformatURL:e,largeImageURL:r,tags:i,likes:l,views:t,comments:o,downloads:a}){return`<li class="gallery-card">
    <a class="gallary-card-link" href="${r}">
      <img src="${e}" alt="${i}" />
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
          <p>${o}</p>
        </li>
        <li class="image-item-info">
          <p>Downloads</p>
          <p>${a}</p>
        </li>
      </ul>
    </a>
  </li>`}function g(e){return e.map(k).join("")}function F(e){n.wrapperPictures.innerHTML=g(e),h(),s()}function $(e){n.wrapperPictures.innerHTML+=g(e),h(),s()}function q(){u.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#3498db",messageColor:"#ffffff"}),C(),s()}function C(){n.loadBtn.style.display="none"}function y(){const e=document.querySelector(".gallery-card"),{height:r}=e.getBoundingClientRect();return r}function s(){const e=c*p;window.scrollBy({top:e,behavior:"smooth"})}function h(){new L(".gallery-card a.gallary-card-link",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
