import { renderTasks } from "./renderer.js";
import { updateTask, deleteTask, getTasksList } from "./tasksGateway.js";

const onDelete = (event) => {
  const isDelete = event.target.classList.contains("list-item__delete-btn");

  if (!isDelete) {
    return;
  }
  const taskId = event.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      renderTasks(newTasksList);
    });
};

export const onClickToggle = (event) => {
  const isCheckBox = event.target.classList.contains("list-item__checkbox");

  if (!isCheckBox) {
    return;
  }

  const taskId = +event.target.dataset.id;

  const done = event.target.checked;

  const updatedTask = {
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      renderTasks(newTasksList);
    });
};

export const onClickTask = (event) => {
  const isCheckBox = event.target.classList.contains("list-item__checkbox");
  const isDelete = event.target.classList.contains("list-item__delete-btn");

  if (isCheckBox) {
    onClickToggle(event);
  } else if (isDelete) {
    onDelete(event);
  }
};
