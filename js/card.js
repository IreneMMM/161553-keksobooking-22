import { createOffers, TYPES } from './data.js';
import { getWordForm } from './util.js';

const promos = createOffers();

const map = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('article');
const cardFragment = document.createDocumentFragment();
const ROOM_FORMS = ['комната', 'комнаты', 'комнат'];
const GUEST_FORMS = ['гостя', 'гостей', 'гостей'];


promos.forEach((promo) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__avatar').src = promo.author.avatar;
  card.querySelector('.popup__title').textContent = promo.offer.title;
  card.querySelector('.popup__text--address').textContent = promo.offer.address;
  card.querySelector('.popup__text--price').textContent = promo.offer.price + '  ₽/ночь';
  card.querySelector('.popup__type').textContent = TYPES[promo.offer.type];
  card.querySelector('.popup__text--capacity').textContent = promo.offer.rooms + ' ' + getWordForm(promo.offer.rooms, ROOM_FORMS) + ' для ' + promo.offer.guests + ' ' + getWordForm(promo.offer.guests, GUEST_FORMS);
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + promo.offer.checkin + ', выезд до ' + promo.offer.checkout;
  card.querySelector('.popup__description').textContent = promo.offer.description;

  const popupFeaturesList = card.querySelector('.popup__features');
  popupFeaturesList.innerHTML = '';
  for (let i = 0; i < promo.offer.features.length; i++) {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${promo.offer.features[i]}`);
    featureItem.textContent = promo.offer.features[i];
    popupFeaturesList.appendChild(featureItem);
  }

  const popupPhotosList = card.querySelector('.popup__photos');
  popupPhotosList.innerHTML = '';
  for (let i = 0; i < promo.offer.photos.length; i++) {
    const photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.src = promo.offer.photos[i];
    photoItem.width = '45';
    photoItem.height = '40';
    photoItem.alt = 'Фотография жилья';
    popupPhotosList.appendChild(photoItem);
  }

  cardFragment.appendChild(card);
});

map.appendChild(cardFragment);

export { map };
