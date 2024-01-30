import axios from 'axios';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
  searchForm: document.querySelector('.search-form'),
  wrapperPictures: document.querySelector('.pictures-list'),
};

const loader = document.querySelector('.loader');


refs.searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
  const symbol = e.target.elements.query.value;
  
  loader.style.display = 'inline-block';


    
  setTimeout(() => {
        getPicture(symbol)
            .then(data => {
                renderPictures(data.hits);

                if (data.hits.length === 0) {
                    iziToast.error({
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        position: 'topRight',
                        backgroundColor: '#EF4040',
                        messageColor: '#FAFAFB',
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                loader.style.display = 'none';
            });
    }, 1000);

    e.target.reset();
}

function getPicture(symbol) {
    const API_KEY = '42004606-5d03e591d800e1e125ea1f7b1'
    const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: API_KEY,
        q: symbol,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
  });
    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    });
}

function pictureTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
    return `<li class="gallery-card">
  <a class="gallary-card-link" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
    <ul class="image-info">
      <li class="image-item-info">
        <p>Likes</p>
        <p>${likes}</p>
      </li>
      <li class="image-item-info">
        <p>Views</p>
        <p>${views}</p>
      </li>
      <li class="image-item-info">
        <p>Comments</p>
        <p>${comments}</p>
      </li>
      <li class="image-item-info">
        <p>Downloads</p>
        <p>${downloads}</p>
      </li>
    </ul>
  </a>
</li>`;
}

function picturesTemplate(pictures) {
  return pictures.map(pictureTemplate).join('');
}

function renderPictures(pictures) {
  const markup = picturesTemplate(pictures);
  refs.wrapperPictures.innerHTML = markup;
  
  const lightbox = new SimpleLightbox('.gallery-card a.gallary-card-link', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  lightbox.refresh();
}