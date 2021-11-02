const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelector('fieldset');
const adFormFilter = adForm.querySelector('filter');
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

export { enabladForm, disabledForm };
