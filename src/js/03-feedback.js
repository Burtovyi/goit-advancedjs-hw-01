import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const btn = document.querySelector('button');
const form = document.querySelector('.feedback-form');

const key_LS = 'feedback-form-state';

const dataLSInput = JSON.parse(localStorage.getItem(key_LS)) ?? {};

function addInputLS() {
  localStorage.setItem(key_LS, JSON.stringify(dataLSInput));
}

const throttledUpdateEmail = throttle(email => {
  dataLSInput.email = email;
  addInputLS();
}, 500);

const throttledUpdateMessage = throttle(message => {
  dataLSInput.message = message;
  addInputLS();
}, 500);

inputEmail.addEventListener('input', event => {
  throttledUpdateEmail(event.currentTarget.value);
});

textareaMessage.addEventListener('input', event => {
  throttledUpdateMessage(event.currentTarget.value);
});

btn.addEventListener('click', evt => {
  evt.preventDefault();
  if (dataLSInput.email && dataLSInput.message) {
    form.reset();

    if (localStorage.getItem(key_LS)) {
      console.log(localStorage.getItem(key_LS));
    }

    localStorage.removeItem(key_LS);
    throttledUpdateMessage();
    throttledUpdateEmail();
  }
});
