import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  searchForm: document.querySelector('.search-form'),
  wrapperPictures: document.querySelector('.pictures-list'),
  loader: document.querySelector('.loader'),
  loadBtn: document.querySelector('.load-btn'),
};

let currentPage = 1;
let currentSearch = '';
let cardHeight = 0;

refs.searchForm.addEventListener('submit', onSubmitForm);
refs.loadBtn.addEventListener('click', onLoadMoreBtn);

async function onSubmitForm(e) {
  e.preventDefault();
  const symbol = e.target.elements.query.value;

  refs.loader.style.display = 'inline-block';

  try {
    currentSearch = symbol;
    const { data } = await getPicture(currentSearch, currentPage);
    renderPictures(data.hits);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
      });
    } else {
      cardHeight = getCardHeight();
      smoothScroll();
    }
  } catch (error) {
    console.error(error);
  } finally {
    refs.loader.style.display = 'none';
    smoothScroll();
  }

  e.target.reset();
}

async function onLoadMoreBtn() {
  currentPage += 1;
  showLoader();

  try {
    const { data } = await getPicture(currentSearch, currentPage);

    if (data.hits.length === 0) {
      showEndMessage();
    } else {
      appendPictures(data.hits);
      cardHeight = getCardHeight();
      smoothScroll();
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
    smoothScroll();
  }
}

function showLoader() {
  refs.loader.style.display = 'inline-block';
}

function hideLoader() {
  refs.loader.style.display = 'none';
}

async function getPicture(symbol, page) {
  const API_KEY = '42004606-5d03e591d800e1e125ea1f7b1';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = {
    key: API_KEY,
    q: symbol,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  };
  const url = `${BASE_URL}${END_POINT}?${new URLSearchParams(params)}`;

  return axios.get(url);
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
  refs.wrapperPictures.innerHTML = picturesTemplate(pictures);
  initializeLightbox();
  smoothScroll();
}

function appendPictures(pictures) {
  refs.wrapperPictures.innerHTML += picturesTemplate(pictures);
  initializeLightbox();
  smoothScroll();
}

function showEndMessage() {
  iziToast.info({
    title: '',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    backgroundColor: '#3498db',
    messageColor: '#ffffff',
  });
  hideLoadBtn();
  smoothScroll();
}

function hideLoadBtn() {
  refs.loadBtn.style.display = 'none';
}

function getCardHeight() {
  const galleryItem = document.querySelector('.gallery-card');
  const { height } = galleryItem.getBoundingClientRect();
  return height;
}

function smoothScroll() {
  const scrollHeight = currentPage * cardHeight;
  window.scrollBy({
    top: scrollHeight,
    behavior: 'smooth',
  });
}

function initializeLightbox() {
  const lightbox = new SimpleLightbox('.gallery-card a.gallary-card-link', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  lightbox.refresh();
}






