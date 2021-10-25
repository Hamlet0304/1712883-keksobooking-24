import { OfferType} from './data.js';

function getGuestsText(rooms,guests) {
  return `${rooms} комнаты для ${guests} гостей`;
}

function getTimeText(checkin,checkout) {
  return `Заезд после ${checkin}, выезд до ${checkout}`;
}

function randerPhotos(photos, container) {
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

function randerFeatures(features, container) {
  const featureTemplate = container.querySelector('.popup__feature');

  container.innerHTML = '';

  const fragment = document.createDocumentFragment();

  features.forEach((feature) => {
    const featureElement = featureTemplate.cloneNode();
    featureElement.className = `popup__feature popup__feature--${feature}`;

    fragment.appendChild(featureElement);
  });

  container.appendChild(fragment);
}

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
    photos,
    features,
  } = offer;

  const card = content.cloneNode(true);
  const title = card.querySelector('.popup__title');
  title.textContent = offer.title;
  const address = card.querySelector('.popup__text--address');
  address.textContent = offer.address;
  const price = card.querySelector('.popup__text--price');
  price.textContent = offer.price;
  const description = card.querySelector('.popup__description');
  description.textContent = offer.description;
  const type = card.querySelector('.popup__type');
  type.textContent = getDisplayValue(offer.type);
  const capacity = card.querySelector('.popup__text--capacity');
  capacity.textContent = getGuestsText(offer.rooms , offer.guests);
  const time = card.querySelector('.popup__text--time');
  time.textContent = getTimeText(offer.checkin, offer.checkout);
  const photosElement = card.querySelector('.popup__photos');
  randerPhotos(photos, photosElement);
  const featureElement = card.querySelector('.popup__features');
  randerFeatures(features , featureElement);

  return card;
};


export { randerPopup };
