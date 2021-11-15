const OfferType = { FLAT: 'flat', BUNGALOW: 'bungalow', HOUSE: 'house', PALACE: 'palace', HOTEL:'hotel'};
const TYPES = [OfferType.PALACE, OfferType.FLAT, OfferType.HOUSE, OfferType.BUNGALOW, OfferType.HOTEL];
const OfferPrice = { FLAT: 1000, BUNGALOW: 0, HOUSE: 5000, PALACE: 10000, HOTEL: 3000 };
const roomsToOptions = { FIRST: 1, SECOND: 2, THIRD: 3, HUNDRED :100, ZERO :0};

const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES_ALL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ALL = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TITLES = ['rent room' , 'rent flat', 'rent bungalow', 'rent house', 'rent palace'];
const ROOMS = ['big room', 'small room', 'medium room'];
const DESCRIPTIONS = ['Сдам уютною квартиру' ,'Сдам шикарный номер','Сдам просторную комнату','Посуточная аренда'];

export { TYPES, OfferType, OfferPrice,roomsToOptions, CHECKINS, CHECKOUTS, FEATURES_ALL, PHOTOS_ALL, TITLES, ROOMS, DESCRIPTIONS};
