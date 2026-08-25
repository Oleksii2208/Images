import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryList: document.querySelector('.gallery'),
};

export function createGallery(images) {
  const markup = images.map(galleryTemplate).join('\n');
  console.log(markup);
  refs.galleryList.innerHTML = markup;
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

export function clearGallery() {}

export function showLoader() {}

export function hideLoader() {}

export function showLoadMoreButton() {}

export function hideLoadMoreButton() {}
