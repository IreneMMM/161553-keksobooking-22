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

// функция для склонения слов
const getWordForm = (number, forms) => {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    const cases = [2, 0, 1, 1, 1, 2];
    return forms[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
  return forms[1];
}

export { getRandomIntInclusive, getRandomFloat, getRandomArrayElement, getRandomValuesArray, getWordForm };
