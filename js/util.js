import { OfferPrice ,OfferType } from './data.js';

const getRandomNumberFromRange = function (from, at) {
  return Math.floor(Math.random() * (from - at + 1)) + at;
};

const getRandomNumberFromRangeByPrecision = function (from, at, presicion) {
  return getRandomNumberFromRange(from, at).toFixed(presicion);
};

export {getRandomNumberFromRange ,getRandomNumberFromRangeByPrecision };

const getPriceMinValue = function (offerPrice) {

  switch (offerPrice) {
    case OfferType.FLAT:
      return OfferPrice.FLAT;
    case OfferType.BUNGALOW:
      return OfferPrice.BUNGALOW;
    case OfferType.HOUSE:
      return OfferPrice.HOUSE;
    case OfferType.PALACE:
      return OfferPrice.PALACE;
    case OfferType.HOTEL:
      return OfferPrice.HOTEL;
  }
};


export { getPriceMinValue };
