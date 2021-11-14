import { OfferPrice ,OfferType } from './data.js';

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


const getRoomErrorMassage = function (room , capacity) {

  let errorMassage = '';
  if (room === 1 && capacity !== 1) {
    errorMassage = 'ошибка 1 комната — «для 1 гостя»';
  }
  if (room === 2 && capacity !== 1 && capacity !== 2) {
    errorMassage = 'ошибка 2 комнаты — «для 2 гостей» или «для 1 гостя»';
  }
  if (room === 3 && capacity !== 1 && capacity !== 2 && capacity !== 3) {
    errorMassage = '3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»';
  }
  if (room === 100 && capacity !== 0) {
    errorMassage = 'ошибка 100 комнат — «не для гостей».';
  }
  return errorMassage;
};

export { getPriceMinValue , getRoomErrorMassage};
