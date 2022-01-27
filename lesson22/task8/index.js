const checkboxElem = document.querySelector('.task-status')

function checkedEl(event) {
    console.log(event.target.cheked)
}
checkboxElem.addEventListener('change', checkedEl)