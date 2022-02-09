import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export function onClickToggle(event) {
  const isCheckBox = event.target.type === 'checkbox';
  if (!isCheckBox) {
    return;
  }

  const tasks = getItem('tasksList');

  const newTasksList = tasks.map(task => {
    if (task.id === +event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);
  renderTasks();
}
