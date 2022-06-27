import { renderTasks } from "./renderer.js";
import { initToDoListHandlers } from "./todoList.js";
import { createTask, getTasksList } from "./tasksGateway.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((newTasksList) => {
    renderTasks(newTasksList);
  });

  initToDoListHandlers();
});
