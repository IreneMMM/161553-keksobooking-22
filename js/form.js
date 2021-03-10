const adForm = document.querySelector('.ad-form');
const roomType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const adFormTitle = adForm.querySelector('#title');
const adFormPrice = adForm.querySelector('#price');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const MIN_QUANTITY = 0;
const MAX_QUANTITY = 100;

const roomPrices = {
  palace: '10000',
  house: '5000',
  flat: '1000',
  bungalow: '0',
}

const setRoomPrice = () => {
  const minRoomPrice = adForm.querySelector('#price');
  minRoomPrice.min = roomPrices[roomType.value];
  minRoomPrice.placeholder = roomPrices[roomType.value];
};

const checkCapacity = () => {
  if (roomNumber.value === MAX_QUANTITY && capacity.value !== MIN_QUANTITY) {
    capacity.setCustomValidity('Выберите вариант "не для гостей"');
  } else if (roomNumber.value !== MAX_QUANTITY && capacity.value === MIN_QUANTITY) {
    capacity.setCustomValidity('Выберите другой вариант');
  } else if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Выберите меньшее количество гостей');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
};

adFormTitle.addEventListener('input', () => {
  const valueLength = adFormTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adFormTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adFormTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    adFormTitle.setCustomValidity('');
  }

  adFormTitle.reportValidity();
});

adFormPrice.addEventListener('input', () => {
  const price = adForm.price.value;
  const min = adForm.price.min;

  if (price < min) {
    adFormPrice.setCustomValidity('Введенное значение меньше минимального');
  } else if (price > MAX_PRICE_LENGTH) {
    adFormPrice.setCustomValidity('Максимальное значение: ' + MAX_PRICE_LENGTH);
  } else {
    adFormPrice.setCustomValidity('');
  }

  adFormPrice.reportValidity();
});

roomType.addEventListener('change', setRoomPrice);

timeIn.addEventListener('change', (event) => {
  const timeInValue = event.target.value;
  timeOut.value = timeInValue;
});

timeOut.addEventListener('change', (event) => {
  const timeOutValue = event.target.value;
  timeIn.value = timeOutValue;
});

capacity.addEventListener('change', () => {
  checkCapacity();
});

roomNumber.addEventListener('change', () => {
  checkCapacity();
});
