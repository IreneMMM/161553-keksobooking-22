const roomType = document.querySelector('#type');
const roomPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const roomPrices = {
  palace: '10000',
  house: '5000',
  flat: '1000',
  bungalow: '0',
}

roomType.addEventListener('change', (event) => {
  roomPrice.value = roomPrices[event.target.value];
})

timeIn.addEventListener('change', (event) => {
  const timeInValue = event.target.value;
  timeOut.value = timeInValue;
});

timeOut.addEventListener('change', (event) => {
  const timeOutValue = event.target.value;
  timeIn.value = timeOutValue;
});
