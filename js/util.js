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

export { getRandomIntInclusive, getRandomFloat, getRandomArrayElement, getRandomValuesArray };
