const buttonElems = document.querySelectorAll('.pagination__page')

function handleClick(event) {
    console.log(event.target.dataset.pageNumber)
}

buttonElems.forEach(el => {
    el.addEventListener('click', handleClick)
})