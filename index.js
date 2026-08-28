import{a as p}from"./assets/vendor-D1k8Zldl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function u(o,t){const s="https://pixabay.com",n="/api/",e=new URLSearchParams({key:"56897880-ce564d0c5f2c9a99203aeddd2",q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}${n}?${e}`;return console.log(r),(await p.get(r)).data.hits}const c={galleryList:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn-load")};function d(o){const t=o.map(f).join(`
`);console.log(t),c.galleryList.innerHTML=t}function f(o){const{webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:l,downloads:m}=o;return`<li class="gallery-item">
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
    <p>Comments${l}</p>
    <p>Downloads${m}</p>
    </div>
  </a>
</li>
`}function g(){c.btnLoadMore.classList.remove("hidden")}function y(){c.btnLoadMore.classList.add("hidden")}const i={formElem:document.querySelector(".form"),btnLoadMore:document.querySelector(".js-btn-load"),galleryList:document.querySelector(".gallery")},a={query:"",page:1,total:100};i.formElem.addEventListener("submit",o=>{o.preventDefault(),a.query=o.currentTarget.elements.search.value.trim(),a.page=1,console.log(a.query),u(a.query,a.page).then(t=>{d(t),a.total=hits,console.log(a.total),h()}),i.formElem.reset()});i.btnLoadMore.addEventListener("click",()=>{a.page+=1,u(a.query,a.page).then(o=>{const t=d(o);i.galleryList.insertAdjacentHTML("beforeend",t)})});function h(){const t=Math.ceil(a.total/15);a.page>=t?(y(),iziToast.info("Try")):g()}
//# sourceMappingURL=index.js.map
