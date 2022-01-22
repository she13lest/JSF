export function squaredNumbers() {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach(el => {
    const elWithNum = el.getAttribute('data-number');
    el.setAttribute('data-squared-number', elWithNum * elWithNum);
  });
}
