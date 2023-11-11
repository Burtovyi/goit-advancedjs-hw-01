import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');

const key_LS = 'feedback-form-state';

let dataLSInput = JSON.parse(localStorage.getItem(key_LS)) ?? {};

inputEmail.value = dataLSInput.email ?? '';
textareaMessage.textContent = dataLSInput.message ?? '';

function addInputLS() {
  localStorage.setItem(key_LS, JSON.stringify(dataLSInput));
}

function submit(evt) {
  evt.preventDefault();
  if (dataLSInput.email && dataLSInput.message) {
    console.log(dataLSInput);
    localStorage.removeItem(key_LS);

    form.reset();
    textareaMessage.textContent = '';
    return;
  } else {
    alert(
      'Заповніть усі поля форми, а то мене ментор прибʼє, якщо я 3-й раз неправильно ДЗ відправлю ;-)'
    );
  }
}

form.addEventListener(
  'input',
  throttle(() => {
    const emailValue = form.email.value;
    const messageValue = form.message.value;
    dataLSInput.email = emailValue;
    dataLSInput.message = messageValue;
    addInputLS();
  }, 500)
);
form.addEventListener('submit', submit);
