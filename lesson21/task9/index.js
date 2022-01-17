export function finishList() {
  const listOfEl = document.querySelector('.list');
  const spesialEl = document.querySelector('.special');

  function createdEl(num) {
    const elOfList = document.createElement('li');
    elOfList.textContent = num;
    return elOfList;
  }

  listOfEl.append(createdEl(8));
  listOfEl.prepend(createdEl(1));
  spesialEl.before(createdEl(4));
  spesialEl.after(createdEl(6));
}
finishList();
