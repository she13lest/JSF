import { onCreateTask } from "./createTask.js";
import { onClickTask } from "./updateTask.js";

export const initToDoListHandlers = () => {
  const creatBtnElem = document.querySelector(".create-task-btn");
  creatBtnElem.addEventListener("click", onCreateTask);

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onClickTask);
};
