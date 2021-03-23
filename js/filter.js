import { clearMap } from './map.js';

const DEFAULT_VALUE = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const SIMILAR_OFFERS_COUNT = 10;

const mapFilter = document.querySelector('.map__filters');
const filterItems = mapFilter.querySelectorAll('select, input');
const typeFilter = mapFilter.querySelector('#housing-type');
const priceFilter = mapFilter.querySelector('#housing-price');
const roomsFilter = mapFilter.querySelector('#housing-rooms');
const guestsFilter = mapFilter.querySelector('#housing-guests');
const featuresFilter = mapFilter.querySelector('#housing-features');

const checkType = (data) => {
  return typeFilter.value === data.offer.type || typeFilter.value === DEFAULT_VALUE;
};

const checkPrice = (data) => {
  switch (priceFilter.value) {
    case 'low':
      return data.offer.price < MIN_PRICE;
    case 'middle':
      return data.offer.price >= MIN_PRICE && data.offer.price <= MAX_PRICE;
    case 'high':
      return data.offer.price > MAX_PRICE;
    case 'any':
      return data.offer.price;
  }
};

const checkRooms = (data) => {
  return Number(roomsFilter.value) === data.offer.rooms || roomsFilter.value === DEFAULT_VALUE;
};

const checkGuests = (data) => {
  return Number(guestsFilter.value) === data.offer.guests || guestsFilter.value === DEFAULT_VALUE;
};

const checkFeatures = (data) => {
  const checkedFeatures = Array.from(featuresFilter.querySelectorAll('input:checked'));

  return checkedFeatures.every((input) => {
    return data.offer.features.includes(input.value);
  });
};

const getFilterData = (datas) => {
  const filteredData = datas.filter((data) => {
    return checkType(data) && checkPrice(data) && checkRooms(data) && checkGuests(data) && checkFeatures(data);
  });

  return filteredData.slice(0, SIMILAR_OFFERS_COUNT);
};

const resetFilter = () => {
  filterItems.forEach((item) => {
    item.value = 'any';
  });

  let featuresItems = featuresFilter.querySelectorAll('input');
  featuresItems.forEach((feature) => {
    feature.checked = false;
  });
};

const onChangeFilter = (сb) => {
  mapFilter.addEventListener('change', () => {
    clearMap();
    сb();
  });
};

export { getFilterData, onChangeFilter, resetFilter };
