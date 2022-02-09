import { getItem } from './storage.js';

function compareTasks(a, b) {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.date) - new Date(a.date);
  }
  return new Date(b.date) - new Date(a.date);
}

function createCheckbox({ done, id }) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', id);
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  return checkbox;
}

function createListItem({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkbox = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkbox, text);

  return listItemElem;
}

export function renderTasks() {
  const listElem = document.querySelector('.list');
  const tasks = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasks.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
}
