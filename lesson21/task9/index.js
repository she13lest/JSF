export function finishList() {
  const listOfEl = document.querySelector('.list');
  const specialEl = document.querySelector('.special');

  function createdEl(num) {
    const elOfList = document.createElement('li');
    elOfList.textContent = num;
    return elOfList;
  }

  listOfEl.append(createdEl(8));
  listOfEl.prepend(createdEl(1));
  specialEl.before(createdEl(4));
  specialEl.after(createdEl(6));
}
