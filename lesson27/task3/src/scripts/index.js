import { renderTasks } from './renderer.js';
import { initToDoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initToDoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
