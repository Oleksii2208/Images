import{a as g,S as y,i as c}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function u(o,t){const s="https://pixabay.com",n="/api/",e=new URLSearchParams({key:"56897880-ce564d0c5f2c9a99203aeddd2",q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}${n}?${e}`;return(await g.get(r)).data}const l={galleryList:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn-load"),loader:document.querySelector(".loader")};function m(o){L();const t=o.map(h).join(`
`);l.galleryList.insertAdjacentHTML("beforeend",t),new y(".gallery a",{captionsData:"alt",captionPosition:"botton",captionDelay:250,overlayOpacity:.7}).refresh()}function h(o){const{webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:i,downloads:f}=o;return`<li class="gallery-item">
  <a class="gallery-link" href='${s}'>
    <img
      class="gallery-image"
      src='${t}'
      data-source='${s}'
      alt='${n}'
      width='360'
      height='200'
    />
    <div>
    <p>Likes${e}</p>
    <p>Views${r}</p>
    <p>Comments${i}</p>
    <p>Downloads${f}</p>
    </div>
  </a>
</li>
`}function L(){l.galleryList.innerHTML=""}function b(){l.loader.classList.remove("hidden")}function q(){l.loader.classList.add("hidden")}function v(){l.btnLoadMore.classList.remove("hidden")}function S(){l.btnLoadMore.classList.add("hidden")}const d={formElem:document.querySelector(".form"),btnLoadMore:document.querySelector(".js-btn-load"),galleryList:document.querySelector(".gallery")},a={query:"",page:1,total:100};d.formElem.addEventListener("submit",o=>{if(o.preventDefault(),a.query=o.currentTarget.elements.search.value.trim(),a.page=1,!a.query){c.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}b(),u(a.query,a.page).then(t=>{if(q(),t.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:1e4});return}m(t.hits),a.total=t.totalHits,p()}),d.formElem.reset()});d.btnLoadMore.addEventListener("click",()=>{a.page+=1,p(),u(a.query,a.page).then(o=>{m(o.hits)})});function p(){const t=Math.ceil(a.total/15);a.page>=t?(S(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:1e4})):v()}
//# sourceMappingURL=index.js.map
