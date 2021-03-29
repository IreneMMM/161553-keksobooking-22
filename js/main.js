/* global _:readonly */
'use strict';

import './util.js';
import { showAlert, onSuccessMessage } from './messages.js';
import { getData } from './api.js';
import { createMarkers } from './map.js';
import { setAdFormSubmit } from './form.js';
import { onChangeFilter } from './filter.js'

const RERENDER_DELAY = 500;

getData((ads) => {
  createMarkers(ads);
  onChangeFilter(_.debounce((() => { createMarkers(ads) }), RERENDER_DELAY))
}, showAlert);

setAdFormSubmit(onSuccessMessage);
