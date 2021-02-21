import { createOffers, TYPES } from './data.js';
import { getWordForm } from './util.js';

const ROOM_FORMS = ['комната', 'комнаты', 'комнат'];
const GUEST_FORMS = ['гостя', 'гостей', 'гостей'];

const promos = createOffers();
const map = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('article');
const cardFragment = document.createDocumentFragment();

// Функция создания списка удобств
const createFeaturesList = (array, list, tag, className) => {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement(tag);
    item.classList.add(className);
    item.classList.add(`${className}--${array[i]}`);
    item.textContent = array[i];
    list.appendChild(item);
  }
}

// Функция создания списка фотографий жилья
const createPhotosList = (array, list, tag, className, width, height, alt) => {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement(tag);
    item.classList.add(className);
    item.src = array[i];
    item.width = width;
    item.height = height;
    item.alt =alt;
    list.appendChild(item);
  }
}


const creatCard = (elements) => {
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
    createFeaturesList(element.offer.features, featuresList, 'li', '.popup__feature');

    const photosList = card.querySelector('.popup__photos');
    createPhotosList(element.offer.photos, photosList, 'img', '.popup__photo', 45, 40, 'Фотография жилья');

    cardFragment.appendChild(card);
  });
}

creatCard(promos);


map.appendChild(cardFragment);

export { map };
