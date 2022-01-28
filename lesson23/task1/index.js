const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');

const errorTextEmailEl = document.querySelector('.error-text_email');
const errorTextPasswordEl = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');

const isEmail = value =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return [isRequired, isEmail]
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  errorTextEmailEl.textContent = errorText;
};

const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  errorTextPasswordEl.textContent = errorText;
};

emailInputEl.addEventListener('input', onEmailChange);
passwordInputEl.addEventListener('input', onPasswordChange);

const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formEl)].reduce(
    (acc, [name, password]) => ({
      ...acc,
      [name]: password,
    }),
    {}
  );

  alert(JSON.stringify(formData));
};

formEl.addEventListener('submit', onFormSubmit);
