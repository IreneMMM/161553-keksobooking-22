'use strict';

const SIMILAR_OFFERS_COUNT = 10;

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

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

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

// функция для генерирования случайного целого числа
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return 'Диапазон указан неверно. Значения не должны быть отрицательными.';
  } else if (min >= max) {
    return 'Диапазон указан неверно. Минимальное значение должно быть меньше максимального.';
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// функция для генерирования случайного числа с точкой
const getRandomFloat = (min, max, numbersAfter) => {
  if (min < 0 || max < 0) {
    return 'Диапазон указан неверно. Значения не должны быть отрицательными.';
  } else if (min >= max) {
    return 'Диапазон указан неверно. Минимальное значение должно быть меньше максимального.';
  } else {
    return (Math.random() * (max - min) + min).toFixed(numbersAfter);
  }
}

// функция для выбора случайного элемента из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

// функция для генерации случайной длины массива
const getRandomArrayLength = (array) => {
  return getRandomIntInclusive(1, array.length);
};

// функция для генерации массива случайной длины
const getRandomValuesArray = function (array) {
  let randomFeaturesArray = [];
  for (let i = 0; i < getRandomArrayLength(array); i++) {
    randomFeaturesArray.push(array[i]);
  }
  return randomFeaturesArray;
};


const createOffer = () => {
  const X = getRandomFloat(35.65000, 35.70000, 5);
  const Y = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: X + ',' + Y,
      price: getRandomIntInclusive(0, 100),
      type: getRandomArrayElement(TYPES),
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
