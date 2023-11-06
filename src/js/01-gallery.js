// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem => `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>`
  )
  .join('');

list.innerHTML = markup;

const gallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionsDelay: 250,
});
