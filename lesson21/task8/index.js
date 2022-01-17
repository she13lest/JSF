export function createButton(buttonText) {
  const newButton = document.createElement('button');
  newButton.textContent = buttonText;
  document.querySelector('body').append(newButton);
}
