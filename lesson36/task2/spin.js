const spinElem = document.querySelector(".spinner");

export const showSpin = () => {
  spinElem.classList.remove("spinner_hidden");
};

export const hideSpin = () => {
  spinElem.classList.add("spinner_hidden");
};
