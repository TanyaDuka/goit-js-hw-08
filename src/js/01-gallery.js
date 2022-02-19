// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryBox = document.querySelector('.gallery');

const createGallery = galleryItems => {
    return galleryItems.map(({preview, original, description})  => {
        return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
`
    }).join(' ');
}

galleryBox.insertAdjacentHTML('beforeend', createGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});


console.log(galleryItems);
