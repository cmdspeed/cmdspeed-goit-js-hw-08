import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
    .map(({ preview, original, description }) => {
        return `    <a class="gallery__item" href="${original}">
                    <img src="${preview}" alt="${description} " class="gallery__image"
                    />
                </a>
            `;
    })
    .join('');

gallery.insertAdjacentHTML('beforeend', createGallery);

const lighboxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom',
});
lighboxGallery.on('show.simplelightbox');