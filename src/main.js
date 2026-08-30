import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
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
}; // Створюю об'єкт з параметрами для запиту

// Послуховувач події на форму, для збирання даних з поля введеня користувачем

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  // const query = e.currentTarget.elements.search.value.trim();
  params.query = e.currentTarget.elements.search.value.trim();
  params.page = 1;

  if (!params.query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  } // Перевірка на введення користувачем запиту

  showLoader();

  getImagesByQuery(params.query, params.page).then(data => {
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 10000,
      });
      return;
    }

    createGallery(data.hits);

    params.total = data.totalHits;
    checkBtnStatus();
  });

  refs.formElem.reset();
});

// Послуховувач події на кнопку LoadMore
refs.btnLoadMore.addEventListener('click', () => {
  params.page += 1;
  checkBtnStatus();
  getImagesByQuery(params.query, params.page).then(data => {
    createGallery(data.hits);
  });
});

function checkBtnStatus() {
  const perPage = 15;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hideLoadMoreButton();
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
