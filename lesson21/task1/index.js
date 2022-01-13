'use strict';
export const tasks = [
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');

      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderTasks(tasks);
