const btnElem = document.querySelector('.search__btn');
btnElem.addEventListener('click', () => {
  const inputElem = document.querySelector('.search__input');
  console.log(inputElem.value);
});
