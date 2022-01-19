export function finishForm() {
  const formEl = document.querySelector('.login-form');
  const inputPassword = document.querySelector('input');
  inputPassword.type = 'password';
  const inputLogin = document.createElement('input');
  inputLogin.name = 'login';
  inputLogin.type = 'text';
  formEl.prepend(inputLogin);
}

console.log(finishForm());
