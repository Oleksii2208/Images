import{a as c}from"./assets/vendor-D1k8Zldl.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function u(o,r){const n="https://pixabay.com",a="/api/",e=new URLSearchParams({key:"56897880-ce564d0c5f2c9a99203aeddd2",q:o,page:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${n}${a}?${e}`;return console.log(t),c.get(t).then(s=>s.data.hits).catch(s=>{console.log(s)})}const m={galleryList:document.querySelector(".gallery")};function f(o){const r=o.map(d).join(`
`);console.log(r),m.galleryList.innerHTML=r}function d(o){const{webformatURL:r,largeImageURL:n,tags:a,likes:e,views:t,comments:s,downloads:i}=o;return`<li class="gallery-item">
  <a class="gallery-link" href='${n}'>
    <img
      class="gallery-image"
      src='${r}'
      data-source='${n}'
      alt='${a}'
      width='360'
      height='200'
    />
    <div>
    <p>Likes${e}</p>
    <p>Views${t}</p>
    <p>Comments${s}</p>
    <p>Downloads${i}</p>
    </div>
  </a>
</li>
`}const l={formElem:document.querySelector(".form")};l.formElem.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements.search.value.trim();console.log(r),u(r,2).then(n=>{f(n)}),l.formElem.reset()});
//# sourceMappingURL=index.js.map
