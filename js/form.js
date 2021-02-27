const adForm = document.querySelector('.ad-form');
const roomType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

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

roomType.addEventListener('change', setRoomPrice);

timeIn.addEventListener('change', (event) => {
  const timeInValue = event.target.value;
  timeOut.value = timeInValue;
});

timeOut.addEventListener('change', (event) => {
  const timeOutValue = event.target.value;
  timeIn.value = timeOutValue;
});
