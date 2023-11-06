import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const btn = document.querySelector('button');
const keyLS = 'feedback-form-state';

const dataLSInput = JSON.parse(localStorage.getItem(keyLS));

const inputLS = {
  email: '',
  message: '',
};

function addInputLS() {
  localStorage.setItem(keyLS, JSON.stringify(inputLS));
}

const throttledUpdateEmail = throttle(email => {
  inputLS.email = email;
  addInputLS();
}, 500);

const throttledUpdateMessage = throttle(message => {
  inputLS.message = message;
  addInputLS();
}, 500);

inputEmail.addEventListener('input', event => {
  throttledUpdateEmail(event.currentTarget.value);
});

textareaMessage.addEventListener('input', event => {
  throttledUpdateMessage(event.currentTarget.value);
});

inputEmail.value = dataLSInput.email;
textareaMessage.value = dataLSInput.message;

btn.addEventListener('click', () => {
  inputLS.email = '';
  inputLS.message = '';
  localStorage.setItem(keyLS, JSON.stringify(inputLS));
  console.log(inputLS);
});
