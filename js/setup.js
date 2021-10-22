import { OfferType} from './data.js';

function getGuestsText(rooms,guests) {
  return `${rooms} комнаты для ${guests} гостей`;
}

function getTimeText(checkin,checkout) {
  return `Заезд после ${checkin}, выезд до ${checkout}`;
}

function renderPhotos(photos, container) {
  const imgTemplate = container.querySelector('.popup__photo');

  container.innerHTML = '';

  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = imgTemplate.cloneNode();
    photoElement.src = photo;

    fragment.appendChild(photoElement);
  });

  container.appendChild(fragment);
}

// function renderFeatures(features, container) {
//   const feature = container.querySelector('.popup__feature .popup__feature--wifi');

//   container.innerHTML = '';

//   const fragment = document.createDocumentFragment();

//   features.forEach((feature) => {
//     const featureElement = feature.cloneNode();
//     featureElement = feature;

//     fragment.appendChild(featureElement);
//   });

//   container.appendChild(fragment);
// }

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

  const {
    title,
    address,
    price,
    description,
    photos,
  } = offer;

  const card = content.cloneNode(true);

  card.querySelector('.popup__title').textContent = title;
  card.querySelector('.popup__text--address').textContent =address;
  card.querySelector('.popup__text--price').textContent = price;
  card.querySelector('.popup__description').textContent = description;
  const type = card.querySelector('.popup__type');
  type.textContent = getDisplayValue(offer.type);
  const capacity = card.querySelector('.popup__text--capacity');
  capacity.textContent = getGuestsText(offer.rooms , offer.guests);
  const time = card.querySelector('.popup__text--time');
  time.textContent = getTimeText(offer.checkin, offer.checkout);
  const photosElement = card.querySelector('.popup__photos');
  renderPhotos(photos, photosElement);

  // const featureElement = card.querySelector('.popup__feature');
  // renderFeatures(features , featureElement);

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
