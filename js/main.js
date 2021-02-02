// Этот пример с mdn  - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return 'Диапазон указан неверно. Значения не должны быть отрицательными.';
  }
  else if (min == max || min > max) {
    return 'Диапазон указан неверно. Минимальное значение должно быть меньше максимального.';
  }
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandomIntInclusive(1, 8);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloat = (min, max, numbersAfter) => {
  if (min < 0 || max < 0) {
    return 'Диапазон указан неверно. Значения не должны быть отрицательными.';
  }
  else if (min == max || min > max) {
    return 'Диапазон указан неверно. Минимальное значение должно быть меньше максимального.';
  }
  else {
    return (Math.random() * (max - min) + min).toFixed(numbersAfter);
  }
}

getRandomFloat(1.0001, 1.0008, 5);
