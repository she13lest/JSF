import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask } from "./tasksGateway.js";

const onDelete = (event) => {
  const parent = event
    .closest(".list-item")
    .querySelector(`input[type="checkbox"]`);
  const taskId = parent.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksLists())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export function onClickToggle(event) {
  const isCheckBox = event.target.type === "checkbox";
  if (!isCheckBox) {
    return;
  } else if (target.classList.contains("list-item-delete-btn")) {
    onDelete(event);
  }

  const tasks = getItem("tasksList");
  const { text, createData } = tasks.find((task) => task.id === taskId);
  const done = event.target.checked;

  const taskId = +event.target.dataset.id;

  const updatedTask = {
    text,
    createData,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
}
