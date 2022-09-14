const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTexareaInput);

function onFormSubmit(evt) {}

function onTexareaInput(evt) {}
const message = evt.currentTarget.value;

localStorage.setItem('feedback - msg', message);

function populateMessageOutput() {}
