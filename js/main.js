/* global _:readonly */
'use strict';

import './util.js';
import './data.js';
import { showAlert, onSuccessMessage } from './messages.js';
import { getData } from './api.js';
import { createMarkers } from './map.js';
import { setAdFormSubmit } from './form.js';
import { onChangeFilter } from './filter.js'


const RERENDER_DELAY = 500;

getData((json) => {
  createMarkers(json);
  onChangeFilter(_.debounce((() => { createMarkers(json) }), RERENDER_DELAY))
}, showAlert);

setAdFormSubmit(onSuccessMessage);
