import './util.js';
import './data.js';
import './form.js';
import './map.js';
import './messages.js';
import { showAlert, onSuccessMessage } from './messages.js';
import { getData } from './api.js';
import { createMarkers } from './map.js';
import{ setAdFormSubmit } from './form.js';

const SIMILAR_OFFERS_COUNT = 10;

getData((json) => {
  createMarkers(json.slice(0, SIMILAR_OFFERS_COUNT));
},
() => {
  showAlert();
});

setAdFormSubmit(onSuccessMessage);


