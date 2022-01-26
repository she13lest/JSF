const btnElem = document.querySelector('.single-use-btn');

btnElem.addEventListener('click', clicked);
function clicked() {
  console.log('clicked');
  btnElem.removeEventListener('click', clicked);
}
