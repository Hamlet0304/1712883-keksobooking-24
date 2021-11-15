import { OfferPrice ,OfferType,roomsToOptions  } from './data.js';

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
  if (room === roomsToOptions.FIRST && capacity !== roomsToOptions.FIRST) {
    errorMassage = 'ошибка 1 комната — «для 1 гостя»';
  }
  if (room === roomsToOptions.SECOND && capacity !== roomsToOptions.FIRST && capacity !== roomsToOptions.SECOND) {
    errorMassage = 'ошибка 2 комнаты — «для 2 гостей» или «для 1 гостя»';
  }
  if (room === roomsToOptions.THIRD && capacity !== roomsToOptions.FIRST && capacity !== roomsToOptions.SECOND && capacity !== roomsToOptions.THIRD) {
    errorMassage = '3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»';
  }
  if (room === roomsToOptions.HUNDRED && capacity !== roomsToOptions.ZERO) {
    errorMassage = 'ошибка 100 комнат — «не для гостей».';
  }
  return errorMassage;
};

export { getPriceMinValue , getRoomErrorMassage};
