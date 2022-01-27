const checkboxElem = document.querySelector('.task-status');

function checkedEl(event) {
  console.log(event.target.checked);
}
checkboxElem.addEventListener('change', checkedEl);
