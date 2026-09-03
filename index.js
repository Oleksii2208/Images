import{a as L,S as b,i as u}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(o,t,s){const i="https://pixabay.com",e="/api/",r=new URLSearchParams({key:"56897880-ce564d0c5f2c9a99203aeddd2",q:o,page:t,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${i}${e}?${r}`;return(await L.get(n)).data}const l={galleryList:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".btn-loadMore"),loader:document.querySelector(".loader")};function f(o){const t=o.map(P).join(`
`);l.galleryList.insertAdjacentHTML("beforeend",t),new b(".gallery a",{captionsData:"alt",captionPosition:"botton",captionDelay:250,overlayOpacity:.7}).refresh()}function P(o){const{webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:n,downloads:m}=o;return`<li class="gallery-item">
  <a class="gallery-link" href='${s}'>
    <img
      class="gallery-image"
      src='${t}'
      data-source='${s}'
      alt='${i}'
      width='360'
      height='200'
    />
    <div class='image-info'>
    <p><strong>Likes</strong>${e}</p>
    <p><strong>Views</strong>${r}</p>
    <p><strong>Comments</strong>${n}</p>
    <p><strong>Downloads</strong>${m}</p>
    </div>
  </a>
</li>
`}function q(){l.galleryList.innerHTML=""}function h(){l.loader.classList.remove("hidden")}function c(){l.loader.classList.add("hidden")}function v(){l.btnLoadMore.classList.remove("hidden")}function g(){l.btnLoadMore.classList.add("hidden")}const d={formElem:document.querySelector(".form"),btnLoadMore:document.querySelector(".btn-loadMore"),galleryList:document.querySelector(".gallery"),targetElem:document.querySelector(".js-target")},a={query:"",page:1,total:100,perPage:15};//! Послуховувач події на форму, для збирання даних з поля введеня користувачем
d.formElem.addEventListener("submit",o=>{if(o.preventDefault(),a.query=o.target.elements.search.value.trim(),a.page=1,q(),!a.query){u.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}h(),g(),p(a.query,a.page,a.perPage).then(t=>{c(),t.hits.length===0&&(u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:1e4}),g()),f(t.hits),a.total=t.totalHits,y(),c()}),d.formElem.reset()});d.btnLoadMore.addEventListener("click",()=>{a.page+=1,y(),h(),p(a.query,a.page,a.perPage).then(o=>{f(o.hits),c()}),w()});function y(){const t=Math.ceil(a.total/15);a.page>=t?(g(),c(),u.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:1e4})):v()}//!=========== Роблю перевірку для observer
//!============ Плавний скрол для рендеру нових картинок при Loadmore
function w(){const t=d.galleryList.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:t*3})}
//# sourceMappingURL=index.js.map
