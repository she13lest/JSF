/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

export const createArrayOfFunctions = num => {
  if (typeof num === 'undefined') {
    return [];
  }
  if (typeof num !== 'number') {
    return null;
  }

  let arr = [];
  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};
