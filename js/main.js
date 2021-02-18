import './util.js';
import { createOffer } from './data.js';

const SIMILAR_OFFERS_COUNT = 10;

const createOffers = (num) => {
  return new Array(num).fill(null).map(() => createOffer());
};

createOffers(SIMILAR_OFFERS_COUNT);
