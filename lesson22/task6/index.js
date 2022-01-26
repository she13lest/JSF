const btnElems = document.querySelectorAll('.btn');

function handleClick(event) {
  console.log(event.target.textContent);
}

btnElems.forEach(el => {
  el.addEventListener('click', handleClick);
});
