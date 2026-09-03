import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-function';

const refs = {
  formElem: document.querySelector('.form'),
  btnLoadMore: document.querySelector('.btn-loadMore'),
  galleryList: document.querySelector('.gallery'),
  targetElem: document.querySelector('.js-target'),
};

const params = {
  query: '',
  page: 1,
  total: 100,
  perPage: 15,
}; // Створюю об'єкт з параметрами для запиту, зберігаю їх глобально для того щоб мати до них доступ з інших функції де це потрібно.

//! Послуховувач події на форму, для збирання даних з поля введеня користувачем
refs.formElem.addEventListener('submit', e => {
  e.preventDefault();

  // const query = e.currentTarget.elements.search.value.trim();
  params.query = e.target.elements.search.value.trim();
  params.page = 1;
  clearGallery();

  if (!params.query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  } // Перевірка на введення користувачем запиту

  showLoader();
  hideLoadMoreButton();

  getImagesByQuery(params.query, params.page, params.perPage).then(data => {
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 10000,
      });
      hideLoadMoreButton();
      // return;
    }

    createGallery(data.hits);

    params.total = data.totalHits;
    checkBtnStatus();
    // checkObserverStatus();
    hideLoader();
  });

  refs.formElem.reset();
});

// Послуховувач події на кнопку LoadMore
refs.btnLoadMore.addEventListener('click', () => {
  params.page += 1;

  checkBtnStatus();
  showLoader();
  getImagesByQuery(params.query, params.page, params.perPage).then(data => {
    createGallery(data.hits);
    hideLoader();
  });
  scrollPage();
  // checkObserverStatus();
});

function checkBtnStatus() {
  const perPage = 15;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hideLoadMoreButton();
    hideLoader();
    iziToast.info({
      title: 'Info',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      timeout: 10000,
    });
  } else {
    showLoadMoreButton();
  }
}

// const options = {
//   // root: document.querySelector('#scrollArea'),
//   rootMargin: '0px',
//   scrollMargin: '0px',
//   threshold: 1.0,
// };

// const observer = new IntersectionObserver(callback, options); //Створюю спостерігача

// observer.observe(refs.targetElem); //Вказую за яким елементом спостерігати

//!=========== Роблю перевірку для observer

// function checkObserverStatus() {
//   const perPage = 15;
//   const maxPage = Math.ceil(params.total / perPage);

//   if (params.page < maxPage) {
//     observer.observe(refs.targetElem);
//     console.log('observer+');
//   } else {
//     observer.unobserve(refs.targetElem);
//     console.log('observer-');
//   }
// }

//!============ Плавний скрол для рендеру нових картинок при Loadmore

function scrollPage() {
  const info = refs.galleryList.firstElementChild.getBoundingClientRect();
  const height = info.height;
  window.scrollBy({
    behavior: 'smooth',
    top: height * 3,
  });
}
