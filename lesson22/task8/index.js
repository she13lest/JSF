const checkboxElem = document.querySelector('.task-status');

function checkedEl(event) {
  console.log(event.target.cheсked);
}
checkboxElem.addEventListener('change', checkedEl);
