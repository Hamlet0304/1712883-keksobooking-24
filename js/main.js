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
const TITLES = ['rent house',  'rent room'];
const ROOMS = ['big room', 'small room', 'medium room'];
const DESCRIPTIONS = ['Сдам номер'];


const getAvatarNumber = function () {
  const randomNumber = getRandomNumberFromRange(0, 10);
  if (randomNumber < 10) {
    return `0${randomNumber}`;
  }
  return randomNumber;
};

const createOffer = () => {
  const randomTypeIndex = _.random(0, TYPES.length - 1);
  const randomCheckinIndex = _.random(0, CHECKINS.length - 1);
  const randomCheckoutIndex = _.random(0, CHECKOUTS.length - 1);
  const randomFeatureIndex = _.random(0, FEATURES_ALL.length - 1);
  const randomPhotoIndex = _.random(0, PHOTOS_ALL.length - 1);
  const randomTitleIndex = _.random(0, TYPES.length - 1);
  const randomRoomIndex = _.random(0, TYPES.length - 1);
  const randomDescriptionIndex = _.random(0, TYPES.length - 1);

  // const name = "Vasya";
  // const name1 = name;
  // const age = 32;
  // const people  = { name: "Vasya", age 32 };
  // const male = true;


  return {
    author: {
      avatar:`img/avatars/user${getAvatarNumber()}.png`,
    },
    price:getRandomNumberFromRange(0, 10000) ,
    type:TYPES[randomTypeIndex],
    checkin:CHECKINS[randomCheckinIndex] ,
    checkout:CHECKOUTS[randomCheckoutIndex] ,
    feature:FEATURES_ALL[randomFeatureIndex] ,
    photo: PHOTOS_ALL[randomPhotoIndex],
    title: TITLES[randomTitleIndex],
    room: ROOMS[randomRoomIndex],
    description : DESCRIPTIONS[randomDescriptionIndex],
    location: {
      lng:getRandomNumberFromRangeByPrecision(35.65000 , 35.70000 ,5),
      lat:getRandomNumberFromRangeByPrecision(139.70000 , 139.80000 , 5),
    },
  };
};

console.log(
  createOffer()
);
