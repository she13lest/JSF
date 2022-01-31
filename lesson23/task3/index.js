const taskInputEl = document.querySelector('.task-input');
const btnEl = document.querySelector('.btn');
const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const addNewTask = () => {
  if (!taskInputEl.value) {
    return;
  }

  const newTaskEl = {
    text: taskInputEl.value,
    done: false,
    id: Date.now(),
  };
  tasks.push(newTaskEl);
  renderTasks(tasks);
};

const checkedchange = () => {
  renderTasks(tasks);
};

btnEl.addEventListener('click', addNewTask);
listElem.addEventListener('click', checkedchange);
