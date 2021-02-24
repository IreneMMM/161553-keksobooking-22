const RANGE_2_TO_4 = [2, 3, 4];
const RANGE_10_TO_14 = [10, 11, 12, 13, 14];
const DIVIDER = 10;


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
// const getWordForm = (number, forms) => {
//   number = Math.abs(number);
//   if (Number.isInteger(number)) {
//     if (number % 100 > 4 && number % 100 < 20 || number % 10 > 4 || number % 10 === 0 ) {
//       return forms[2];
//     } else if (number % 10 < 5 && number % 10 > 1) {
//       return forms[1];
//     } else {
//       return forms[0];
//     }
//   }
// }


// функция для склонения слов без магических чисел
const getWordForm = (number, forms) => {
  number = Math.abs(number);
  if (Number.isInteger(number)) {

    if (number % DIVIDER === 1 && (!RANGE_10_TO_14.includes(number))) {
      return forms[0];
    } else if ((RANGE_2_TO_4.includes(number % DIVIDER)) && (!RANGE_10_TO_14.includes(number))) {
      return forms[1];
    } else {
      return forms[2];
    }
  }
}


export { getRandomIntInclusive, getRandomFloat, getRandomArrayElement, getRandomValuesArray, getWordForm };
