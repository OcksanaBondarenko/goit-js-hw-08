const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTexareaInput);

function onFormSubmit(evt) {}

function onTexareaInput(evt) {}
const value = evt.currentTarget.value;
console.log(value);
