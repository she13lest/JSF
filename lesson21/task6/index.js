export function setButton(buttonText) {
  const bodyButton = document.querySelector('body');
  bodyButton.innerHTML = `<button>${buttonText}</button>`;
}
setButton('My best button!');
