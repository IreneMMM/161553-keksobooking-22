import { getRandomIntInclusive, getRandomFloat, getRandomArrayElement, getRandomValuesArray } from './util.js';

const SIMILAR_OFFERS_COUNT = 10;
const MIN_PHOTO_NUMBER = 1;
const MAX_PHOTO_NUMBER = 8;

const TITLES = [
  'Маленькая уютная квартирка в Токио',
  'Просторный светлый лофт',
  'Компактная квартира со всеми удобствами',
  'Квартира-студия с видом на море',
  'Квартира в центре Токио',
  'Современная уютная квартира',
  'Апартаменты в самом центре',
  'Уютное гнездышко в центре',
  'Уютная, чистая и теплая студия у метро',
  'Аппартаменты высшего класса',
];

const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Маленькая уютная квартирка в Токио',
  'Просторный светлый лофт',
  'Компактная квартира со всеми удобствами',
  'Квартира-студия с видом на море',
  'Квартира в центре Токио',
  'Современная уютная квартира',
  'Апартаменты в самом центре',
  'Уютное гнездышко в центре',
  'Уютная, чистая и теплая студия у метро',
  'Аппартаменты высшего класса',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];


const createOffer = () => {
  const X = getRandomFloat(35.65000, 35.70000, 5);
  const Y = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomIntInclusive(MIN_PHOTO_NUMBER, MAX_PHOTO_NUMBER) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: X + ',' + Y,
      price: getRandomIntInclusive(0, 100),
      type: getRandomArrayElement(Object.keys(TYPES)),
      rooms: getRandomIntInclusive(0, 100),
      guests: getRandomIntInclusive(0, 100),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomValuesArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomValuesArray(PHOTOS),
    },
    location: {
      x: X,
      y: Y,
    },
  };
};


const createOffers = (num) => {
  return new Array(num).fill(null).map(() => createOffer());
};

createOffers(SIMILAR_OFFERS_COUNT);

export { createOffers, TYPES };
