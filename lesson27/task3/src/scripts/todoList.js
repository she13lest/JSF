import { onClickAdd } from './createTask.js';
import { onClickToggle } from './updateTask.js';

export function initToDoListHandlers() {
  const creatBtnElem = document.querySelector('.create-task-btn');
  creatBtnElem.addEventListener('click', onClickAdd);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onClickToggle);
}
