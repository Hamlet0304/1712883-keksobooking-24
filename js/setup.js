import { OfferType } from './data.js';

function updateGuests(guestsElement = roomsDefault(rooms). guestsDefault(guests)) {
  return (2 + 'rooms' + для + 3 + 'guests');

function roomsDefault() {
  return 'Уточняйте количество'
};

function  updateTime( timeElement = checkinOrDefault(checkin). checkoutOrDefault(checkout)) {
  return (Заезд + после + 'checkin' + выезд + до + 'checkout');

function checkinOrDefault() {
  return 'Уточняйте количество'
};

const getDisplayValue = function (offerType) {

  switch (offerType) {
    case OfferType.FLAT:
      return 'Квартира';
    case OfferType.BUNGALOW:
      return 'Бунгало';
    case OfferType.HOUSE:
      return 'Дом';
    case OfferType.PALACE:
      return 'Дворец';
    case OfferType.HOTEL:
      return 'Отель';
  }
};


const content = document.querySelector('#card').content;

const randerPopup = function (offer) {
  const card = content.cloneNode(true);
  const title = card.querySelector('.popup__title');
  title.textContent = offer.title;
  const address = card.querySelector('.popup__text--address');
  address.textContent = offer.address;
  const price = card.querySelector('.popup__text--price');
  price.textContent = offer.price;
  const description = card.querySelector('.popup__description');
  description.textContent = offer.description;
  // const photos = card.querySelector('.popup__photos');
  // photos.textContent = offer.photos;
  const type = card.querySelector('.popup__type');
  type.textContent = getDisplayValue(offer.type);

  return card;
};


  export { randerPopup };



  // const obj1 = {
  // title: 'петя'
  // }

  // const obj = {
  // textContent: 'Вася'
  // }

  // obj.textContent = obj1.title;
