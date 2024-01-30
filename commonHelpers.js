import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a={searchForm:document.querySelector(".search-form"),wrapperPictures:document.querySelector(".pictures-list")},l=document.querySelector(".loader");a.searchForm.addEventListener("submit",p);function p(r){r.preventDefault();const o=r.target.elements.query.value;l.style.display="inline-block",setTimeout(()=>{m(o).then(i=>{g(i.hits),i.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}).catch(i=>{console.log(i)}).finally(()=>{l.style.display="none"})},1e3),r.target.reset()}function m(r){const o="42004606-5d03e591d800e1e125ea1f7b1",i="https://pixabay.com",s="/api/",e=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${i}${s}?${e}`;return fetch(t).then(n=>{if(n.ok)return n.json();throw new Error("Network response was not ok")})}function f({webformatURL:r,largeImageURL:o,tags:i,likes:s,views:e,comments:t,downloads:n}){return`<li class="gallery-card">
  <a class="gallary-card-link" href="${o}">
    <img src="${r}" alt="${i}" />
    <ul class="image-info">
      <li class="image-item-info">
        <p>Likes</p>
        <p>${s}</p>
      </li>
      <li class="image-item-info">
        <p>Views</p>
        <p>${e}</p>
      </li>
      <li class="image-item-info">
        <p>Comments</p>
        <p>${t}</p>
      </li>
      <li class="image-item-info">
        <p>Downloads</p>
        <p>${n}</p>
      </li>
    </ul>
  </a>
</li>`}function d(r){return r.map(f).join("")}function g(r){const o=d(r);a.wrapperPictures.innerHTML=o,new u(".gallery-card a.gallary-card-link",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
