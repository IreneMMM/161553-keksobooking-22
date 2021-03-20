import './util.js';
import './data.js';
import { showAlert, onSuccessMessage } from './messages.js';
import { getData } from './api.js';
import { createMarkers } from './map.js';
import{ setAdFormSubmit } from './form.js';

const SIMILAR_OFFERS_COUNT = 10;

getData((json) => {
  createMarkers(json.slice(0, SIMILAR_OFFERS_COUNT));
},
() => {
  showAlert('Произошла ошибка во время загрузки данных');
});

setAdFormSubmit(onSuccessMessage);
