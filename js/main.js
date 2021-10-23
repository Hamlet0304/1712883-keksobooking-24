import {TYPES, CHECKINS, CHECKOUTS, FEATURES_ALL, PHOTOS_ALL, TITLES, ROOMS, DESCRIPTIONS} from './data.js';
import {getRandomNumberFromRange ,getRandomNumberFromRangeByPrecision } from './util.js';
import { randerPopup } from './setup.js';

console.log(getRandomNumberFromRange(10, 15));
console.log(getRandomNumberFromRangeByPrecision(10, 15, 2));



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
  const randomTitleIndex = _.random(0, TYPES.length - 1);
  const randomRoomIndex = _.random(0, TYPES.length - 1);
  const randomDescriptionIndex = _.random(0, TYPES.length - 1);



  return {
    author: {
      avatar:`img/avatars/user${getAvatarNumber()}.png`,
    },
    price:getRandomNumberFromRange(0, 10000) ,
    type:TYPES[randomTypeIndex],
    checkin:CHECKINS[randomCheckinIndex] ,
    checkout:CHECKOUTS[randomCheckoutIndex] ,
    features:FEATURES_ALL,
    photos:PHOTOS_ALL,
    title: TITLES[randomTitleIndex],
    rooms: ROOMS[randomRoomIndex],
    guests: getRandomNumberFromRange(0, 500) ,
    description : DESCRIPTIONS[randomDescriptionIndex],
    location: {
      lng:getRandomNumberFromRangeByPrecision(35.65000 , 35.70000 ,5),
      lat:getRandomNumberFromRangeByPrecision(139.70000 , 139.80000 , 5),
    },
  };
};

// console.log(
const offer = createOffer();
const popup = randerPopup(offer);
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(popup);
// );

// const returValue = function (a , b) {
//   return a + b
// }
// const value = returValue(1 ,2)
