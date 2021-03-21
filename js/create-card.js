import { TYPES } from './data.js';
import { getWordForm } from './util.js';

const ROOM_FORMS = ['комната', 'комнаты', 'комнат'];
const GUEST_FORMS = ['гостя', 'гостей', 'гостей'];

const IMG_WIDTH = 45;
const IMG_HEIGHT = 40;
const IMG_ALT = 'Фотография жилья';

const cardTemplate = document.querySelector('#card').content.querySelector('article');

// Функция создания списка удобств
const createFeaturesList = (array, list) => {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('li');
    item.classList.add('popup__feature');
    item.classList.add(`popup__feature--${array[i]}`);
    item.textContent = array[i];
    list.appendChild(item);
  }
}

// Функция создания списка фотографий жилья
const createPhotosList = (array, list) => {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('img');
    item.classList.add('.popup__photo');
    item.src = array[i];
    item.width = IMG_WIDTH;
    item.height = IMG_HEIGHT;
    item.alt = IMG_ALT;
    list.appendChild(item);
  }
}

const createCard = ({ offer, author }) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__avatar').src = author.avatar;
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = offer.price + '  ₽/ночь';
  card.querySelector('.popup__type').textContent = TYPES[offer.type];
  card.querySelector('.popup__text--capacity').textContent = offer.rooms + ' ' + getWordForm(offer.rooms, ROOM_FORMS) + ' для ' + offer.guests + ' ' + getWordForm(offer.guests, GUEST_FORMS);
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  card.querySelector('.popup__description').textContent = offer.description;

  const featuresList = card.querySelector('.popup__features');
  createFeaturesList(offer.features, featuresList);

  const photosList = card.querySelector('.popup__photos');
  createPhotosList(offer.photos, photosList);

  return card;
};

const showCards = (elements) => {
  const cardFragment = document.createDocumentFragment();

  elements.forEach((element) => {
    const similarCard = createCard(element);
    cardFragment.appendChild(similarCard);
  });
}


export { showCards, createCard };
