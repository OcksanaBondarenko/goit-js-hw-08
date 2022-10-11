import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const LOCALSTORAGE_KEY = localStorage.getItem(STORAGE_KEY);

form.addEventListener('submit', throttle(onSubmitClick, 500));
form.addEventListener('input', inputIracking);

checkStorage();

function inputIracking(event) {
  let formData = LOCALSTORAGE_KEY;
  formData = formData ? JSON.parse(formData) : {};
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitClick(event) {
  event.preventDefault();

  console.log(`formData: `, JSON.parse(LOCALSTORAGE_KEY));

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function checkStorage() {
  if (localStorage.getItem(STORAGE_KEY)) {
    let data = LOCALSTORAGE_KEY;
    const formDataParse = JSON.parse(LOCALSTORAGE_KEY);
    if (data) {
      data = JSON.parse(data);
      form.elements.email.value = formDataParse.email;
      form.elements.message.value = formDataParse.message;
    }
  }
}
