export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
export const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  const listItemsElems = tasksList.map(itemText => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    listItemElem.append(itemText);

    return listItemElem;
  });
  listElem.append(...listItemsElems);
};

renderTasks(tasks);
