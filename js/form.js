/* global _:readonly */
import { setCoordinates, createMarkers } from './map.js';
import { sendData, getData } from './api.js';
import { onErrorMessage } from './messages.js';
import { onChangeFilter, resetFilter } from './filter.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const MIN_QUANTITY = 0;
const MAX_QUANTITY = 100;
const RERENDER_DELAY = 500;

const adForm = document.querySelector('.ad-form');
const roomType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const adFormTitle = adForm.querySelector('#title');
const adFormPrice = adForm.querySelector('#price');
const resetButton = adForm.querySelector('.ad-form__reset');


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
  if (Number(roomNumber.value) === MAX_QUANTITY && Number(capacity.value) !== MIN_QUANTITY) {
    capacity.setCustomValidity('Выберите вариант "не для гостей"');
  } else if (Number(roomNumber.value) !== MAX_QUANTITY && Number(capacity.value) === MIN_QUANTITY) {
    capacity.setCustomValidity('Выберите другой вариант');
  } else if (Number(roomNumber.value) < Number(capacity.value)) {
    capacity.setCustomValidity('Выберите меньшее количество гостей');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
};

const checkTitle = () => {
  const valueLength = adFormTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    adFormTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adFormTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    adFormTitle.setCustomValidity('');
  }
  adFormTitle.reportValidity();
};

const checkPrice = () => {
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
};

timeIn.addEventListener('change', (event) => {
  const timeInValue = event.target.value;
  timeOut.value = timeInValue;
});

timeOut.addEventListener('change', (event) => {
  const timeOutValue = event.target.value;
  timeIn.value = timeOutValue;
});

adFormTitle.addEventListener('input', checkTitle);
adFormPrice.addEventListener('input', checkPrice);
roomType.addEventListener('change', setRoomPrice);
capacity.addEventListener('change', checkCapacity);
roomNumber.addEventListener('change', checkCapacity);


const setAdFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        onSuccess();
        adForm.reset();
        setCoordinates();
        resetFilter();
        getData((ads) => {
          createMarkers(ads);
          onChangeFilter(_.debounce((() => { createMarkers(ads) }), RERENDER_DELAY))
        });
      },

      () => onErrorMessage(),
      new FormData(evt.target),
    );
  });
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  setCoordinates();
});

export { setAdFormSubmit };
