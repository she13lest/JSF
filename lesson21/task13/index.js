export function getSection(num) {
  const spanWithNum = document.querySelector(`span[data-number="${num}"]`);
  const parentEl = spanWithNum.closest('box');
  return parentEl.getAttribute('data-section');
}

console.log(getSection(3));
