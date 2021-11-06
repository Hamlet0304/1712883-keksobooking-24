import { OfferType} from './data.js';
const getRandomNumberFromRange = function (from, at) {
  return Math.floor(Math.random() * (from - at + 1)) + at;
};

const getRandomNumberFromRangeByPrecision = function (from, at, presicion) {
  return getRandomNumberFromRange(from, at).toFixed(presicion);
};

export {getRandomNumberFromRange ,getRandomNumberFromRangeByPrecision };

const getPriceMinValue = function (offerType) {

  switch (offerType) {
    case OfferType.FLAT:
      return 1000;
    case OfferType.BUNGALOW:
      return 0;
    case OfferType.HOUSE:
      return 5000;
    case OfferType.PALACE:
      return 10000;
    case OfferType.HOTEL:
      return  3000;
  }
};

export { getPriceMinValue };
