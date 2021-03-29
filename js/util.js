// функция для склонения слов без магических чисел
const getWordForm = (number, forms) => {
  const RANGE_PRIME = [2, 3, 4];
  const RANGE_DECIMAL = [10, 11, 12, 13, 14];
  const DIVIDER = 10;
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    if (number % DIVIDER === 1 && (!RANGE_DECIMAL.includes(number))) {
      return forms[0];
    } else if ((RANGE_PRIME.includes(number % DIVIDER)) && (!RANGE_DECIMAL.includes(number))) {
      return forms[1];
    } else {
      return forms[2];
    }
  }
};

export { getWordForm };
