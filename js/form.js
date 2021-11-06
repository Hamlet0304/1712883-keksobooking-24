import { getPriceMinValue } from './util.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelector('fieldset');
const adFormFilter = adForm.querySelector('filter');
const adFormFilterSelects = adForm.querySelector('select');
const adFormFilterFildsets  = adForm.querySelector('fieldset');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const typeInput = adForm.querySelector('#type');


function changeStateAdFrom(isEnablad) {
  if (isEnablad) {
    adForm.classList.remove('ad-form--disabled');
    adFormFieldsets.classList.remove('fieldset');
  }
  else {
    adForm.classList.add('ad-form--disabled');
    adFormFieldsets.classList.add('fieldset');
  }
}

function changeStateFilterFrom(isEnablad) {
  if (isEnablad) {
    adFormFilter.classList.remove('filter');
    adFormFilterSelects.classList.remove('select');
    adFormFilterFildsets.classList.remove('fieldset');
  } else {
    adFormFilter.classList.add('filter');
    adFormFilterSelects.classList.add('select');
    adFormFilterFildsets.classList.add('fieldset');
  }
}


function enabladForm() {
  changeStateAdFrom(true);
  changeStateFilterFrom(true);
}

function disabledForm() {
  changeStateAdFrom(false);
  changeStateFilterFrom(false);
}

const initTitleEvent = () => {
  titleInput.addEventListener('invalid', () => {

    if (titleInput.validity.tooShort) {
      titleInput.setCustomValidity('Заголовок объявления должно состоять минимум из 30 символов');

    } else if (titleInput.validity.tooLong) {

      titleInput.setCustomValidity('Заголовок объявления не должно превышать 100 символов');

    } else if (titleInput.validity.valueMissing) {

      titleInput.setCustomValidity('Обязательное текстовое поле;');

    }
  });
};

const initPriceEvent = () => {
  priceInput.addEventListener('invalid', () => {

    if (priceInput.validity.tooShort) {
      priceInput.setCustomValidity('Числовое поле;');

    } else if (priceInput.validity.tooLong) {

      priceInput.setCustomValidity('Максимальное значение — 1 000 000.');

    } else if (priceInput.validity.valueMissing) {

      priceInput.setCustomValidity('Обязательное поле;');

    }
  });
};

const initTypeEvent = () => {
  typeInput.addEventListener('change', (evt) => {

    const minValue = getPriceMinValue('bungalow', 'flat', 'house', 'palace', 'hotel' );

    priceInput.placeholder = minValue;
  });
};


const initEvent = () => {
  initTitleEvent();
  initPriceEvent();
  initTypeEvent();
};

export { enabladForm, disabledForm, initEvent };
