import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export function onClickAdd() {
  const taskInputElem = document.querySelector('.task-input');

  const text = taskInputElem.value;

  if (!text) {
    return;
  }

  taskInputElem.value = '';
  const tasks = getItem('tasksList') || [];

  const newTasksList = tasks.concat({
    text,
    done: false,
    date: new Date().toISOString(),
    id: Date.now(),
  });

  setItem('tasksList', newTasksList);

  renderTasks(tasks);
}
