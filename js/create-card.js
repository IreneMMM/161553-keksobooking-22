import { createOffers, TYPES } from './data.js';
import { getWordForm } from './util.js';

const ROOM_FORMS = ['комната', 'комнаты', 'комнат'];
const GUEST_FORMS = ['гостя', 'гостей', 'гостей'];

const IMG_WIDTH = 45;
const IMG_HEIGHT = 40;
const IMG_ALT = 'Фотография жилья';

const promos = createOffers();
const map = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('article');
const cardFragment = document.createDocumentFragment();

// Функция создания списка удобств
const createFeaturesList = (array, list) => {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('li');
    item.classList.add('.popup__feature');
    item.classList.add(`'.popup__feature'--${array[i]}`);
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


const createCard = (elements) => {
  elements.forEach((element) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.popup__avatar').src = element.author.avatar;
    card.querySelector('.popup__title').textContent = element.offer.title;
    card.querySelector('.popup__text--address').textContent = element.offer.address;
    card.querySelector('.popup__text--price').textContent = element.offer.price + '  ₽/ночь';
    card.querySelector('.popup__type').textContent = TYPES[element.offer.type];
    card.querySelector('.popup__text--capacity').textContent = element.offer.rooms + ' ' + getWordForm(element.offer.rooms, ROOM_FORMS) + ' для ' + element.offer.guests + ' ' + getWordForm(element.offer.guests, GUEST_FORMS);
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + element.offer.checkin + ', выезд до ' + element.offer.checkout;
    card.querySelector('.popup__description').textContent = element.offer.description;

    const featuresList = card.querySelector('.popup__features');
    createFeaturesList(element.offer.features, featuresList);

    const photosList = card.querySelector('.popup__photos');
    createPhotosList(element.offer.photos, photosList);

    cardFragment.appendChild(card);
  });
}

createCard(promos);

map.appendChild(cardFragment);

export { createCard };
