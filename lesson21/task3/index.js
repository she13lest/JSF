export function getItemList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

export function getItemArray() {
  const elementsArray = document.querySelectorAll('.tool');

  console.dir(Array.from(elementsArray));
  return elementsArray;
}

getItemList();
getItemArray();
