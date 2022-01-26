const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('change', () => {
  console.log(checkboxElem.checked);
});
