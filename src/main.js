import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-function';

const refs = {
  formElem: document.querySelector('.form'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements.search.value.trim();
  console.log(query);
  getImagesByQuery(query, 2).then(data => {
    createGallery(data);
  });

  refs.formElem.reset();
});
