/* global L:readonly */
import { createCard } from './create-card.js';
import { getFilterData } from './filter.js';

const TOKIO_ADDRESS = {
  lat: 35.683359,
  lng: 139.749919,
}

const MAP_ZOOM = 10;
const MAINPINICON_SIZE = 52;
const PINICON_SIZE = 40;
const NUMBERS_AFTER_COMMA = 5;


const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const address = adForm.querySelector('#address');
const mapFilter = document.querySelector('.map__filters');
const mapFilterSelects = mapFilter.querySelectorAll('select');
const mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');
const markers = [];

const elementsEnable = (collections) => {
  for (const element of collections) {
    element.disabled = false;
  }
};

const elementsDisable = (collections) => {
  for (const element of collections) {
    element.disabled = true;
  }
};

const mapDeactivate = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  elementsDisable(adFormFieldsets);
  elementsDisable(mapFilterSelects);
  elementsDisable(mapFilterFieldsets);
};

const mapActivate = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  elementsEnable(adFormFieldsets);
  elementsEnable(mapFilterSelects);
  elementsEnable(mapFilterFieldsets);
  address.value = `${TOKIO_ADDRESS.lat}, ${TOKIO_ADDRESS.lng}`;
  address.setAttribute('readonly', 'readonly');
};

mapDeactivate();

const map = L.map('map')
  .on('load', mapActivate)
  .setView(TOKIO_ADDRESS, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAINPINICON_SIZE, MAINPINICON_SIZE],
  iconAnchor: [MAINPINICON_SIZE / 2, MAINPINICON_SIZE],
});

const mainPinMarker = L.marker(
  TOKIO_ADDRESS,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', () => {
  address.value = mainPinMarker.getLatLng().lat.toFixed(NUMBERS_AFTER_COMMA) + ',' + mainPinMarker.getLatLng().lng.toFixed(NUMBERS_AFTER_COMMA);
});

const setCoordinates = () => {
  address.value = `${TOKIO_ADDRESS.lat}, ${TOKIO_ADDRESS.lng}`;
  mainPinMarker.setLatLng(TOKIO_ADDRESS).update();
};


const clearMap = () => {
  markers.forEach((marker) => {
    marker.remove()
  })
  map.closePopup();
};

const createMarkers = (promos) => {

  const filteredData = getFilterData(promos);

  filteredData.forEach((promo) => {
    const pinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [PINICON_SIZE, PINICON_SIZE],
      iconAnchor: [PINICON_SIZE / 2, PINICON_SIZE],
    });
    const marker = L.marker(
      {
        lat: promo.location.lat,
        lng: promo.location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        createCard(promo),
        {
          keepInView: true,
        },
      );
    markers.push(marker);
  });
  return markers;
};


export { createMarkers, setCoordinates, clearMap };
