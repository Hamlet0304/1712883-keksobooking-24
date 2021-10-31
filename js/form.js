const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelector('fieldset');
const adFormFilter = adForm.querySelector('');
const adFormFilterSelects = adForm.querySelector('select');
const adFormFilterFildsets  = adForm.querySelector('fieldset');


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

  } else {

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

export { enabladForm, disabledForm };
