import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-function';

const refs = {
  formElem: document.querySelector('.form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  galleryList: document.querySelector('.gallery'),
};

const params = {
  query: '',
  page: 1,
  total: 100,
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  // const query = e.currentTarget.elements.search.value.trim();
  params.query = e.currentTarget.elements.search.value.trim();
  params.page = 1;

  console.log(params.query);
  getImagesByQuery(params.query, params.page).then(data => {
    createGallery(data);

    params.total = hits;
    console.log(params.total);

    checkBtnStatus();
  });

  refs.formElem.reset();
});

refs.btnLoadMore.addEventListener('click', () => {
  params.page += 1;

  getImagesByQuery(params.query, params.page).then(data => {
    const markup = createGallery(data);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
    // createGallery(data);
    // createGallery(data) {
    //   refs.galleryList.insertAdjacentHTML('beforeend', markup)
    // }
  });
});

function checkBtnStatus() {
  const perPage = 15;
  const maxPage = Math.ceil(params.total / perPage);
  if (params.page >= maxPage) {
    hideLoadMoreButton();
    iziToast.info('Try');
  } else {
    showLoadMoreButton();
  }
}
