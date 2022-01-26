const inputElem = document.querySelector('.text-input')

function inputtedText(event) {
  console.log(event.target.value);
}

inputElem.addEventListener('change', inputtedText)
