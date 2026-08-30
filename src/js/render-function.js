import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryList: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loader: document.querySelector('.loader'),
};

// Дві функції для рендеру, для одного елементу та для масиву елементів

export function createGallery(images) {
  clearGallery();
  const markup = images.map(galleryTemplate).join('\n');
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
  // refs.galleryList.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'botton',
    captionDelay: 250,
    overlayOpacity: 0.7,
  });

  lightbox.refresh();
}

function galleryTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `<li class="gallery-item">
  <a class="gallery-link" href='${largeImageURL}'>
    <img
      class="gallery-image"
      src='${webformatURL}'
      data-source='${largeImageURL}'
      alt='${tags}'
      width='360'
      height='200'
    />
    <div>
    <p>Likes${likes}</p>
    <p>Views${views}</p>
    <p>Comments${comments}</p>
    <p>Downloads${downloads}</p>
    </div>
  </a>
</li>
`;
}

export function clearGallery() {
  refs.galleryList.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  refs.btnLoadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  refs.btnLoadMore.classList.add('hidden');
}
