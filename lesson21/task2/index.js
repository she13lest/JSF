export function getTitleElement() {
  const titleEl = document.querySelector('.title');
  console.dir(titleEl);
  return titleEl;
}

export function getInputElement() {
  const inputEl = document.querySelector('inpt[type="text"]');
  console.dir(inputEl);
  return inputEl;
}

getTitleElement();
getInputElement();
