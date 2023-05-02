import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const getStorage = localStorage.getItem(STORAGE_KEY);
let formData = getStorage ? JSON.parse(getStorage) : {};
// form.addEventListener('submit', throttle(onSubmitClick, 500));
form.addEventListener('submit', onSubmitClick);
form.addEventListener('input', _.throttle(inputTracking, 500));

checkStorage();

function inputTracking(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitClick(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    alert(`Усі поля форми мають бути заповнені!`);
  } else {
    console.log(`formData: `, JSON.parse(getStorage));

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function checkStorage() {
  let data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const formDataParse = JSON.parse(getStorage);
    form.elements.email.value = formDataParse.email ? formDataParse.email : '';
    form.elements.message.value = formDataParse.message
      ? formDataParse.message
      : '';
  }
}
