const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

import * as throttle from 'lodash.throttle';

let formValue = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(setLocalStorage, 500));
form.addEventListener('submit', submitForm);

getLocalStorageAndSet();

function setLocalStorage(event) {
  formValue[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function getLocalStorageAndSet() {
  const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storage) {
    email.value = storage.email;
    message.value = storage.message;
  }
}

function submitForm(event) {
  const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(`email: ${storage.email} message: ${storage.message}`);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formValue = {
    email: '',
    message: '',
  };
}
