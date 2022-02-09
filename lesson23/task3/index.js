const taskInputEl = document.querySelector('.task-input');
const btnEl = document.querySelector('.create-task-btn');
const listEl = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = tasksList => {
  listEl.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemEl = document.createElement('li');
      listItemEl.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemEl.classList.add('list__item_done');
      }
      listItemEl.append(checkbox, text);

      return listItemEl;
    });

  listEl.append(...tasksElems);
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

const handleChange = event => {
  const isCheckBox = event.target.type === 'checkbox';
  if (!isCheckBox) {
    return;
  }

  tasks.forEach(el => {
    const changeDoneEl = el;
    if (changeDoneEl.id === +event.target.dataset.id) {
      changeDoneEl.done = !changeDoneEl.done;
    }
  });
  renderTasks(tasks);
};

btnEl.addEventListener('click', addNewTask);
listEl.addEventListener('click', handleChange);
