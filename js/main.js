const getRandomNumberFromRange = function (from, at) {
  return Math.floor(Math.random() * (from - at + 1)) + at;
};

const getRandomNumberFromRangeByPrecision = function (from, at, presicion) {
  return getRandomNumberFromRangeByPrecision(from, at).toFixed(presicion);
};

console.log(getRandomNumberFromRange(10, 15));
console.log(getRandomNumberFromRangeByPrecision(10, 15, 2));
console.log(toFixed);

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES_ALL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ALL = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createOffer = () => {
  const randomTypeIndex = _.random(0, TYPES.length - 1);
  const randomCheckinIndex = _.random(0, CHECKINS.length - 1);
  const randomCheckoutIndex = _.random(0, CHECKOUTS.length - 1);
  const randomFeatureIndex = _.random(0, FEATURES_ALL.length - 1);
  const randomPhotoIndex = _.random(0, PHOTOS_ALL.length - 1);


  return {
    type:TYPES[randomTypeIndex],
    checkin:CHECKINS[randomCheckinIndex] ,
    checkout:CHECKOUTS[randomCheckoutIndex] ,
    feature:FEATURES_ALL[randomFeatureIndex] ,
    photo:PHOTOS_ALL[randomPhotoIndex] ,
  };
};

console.log(
  createOffer()
);
