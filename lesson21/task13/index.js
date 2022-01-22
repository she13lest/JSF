export function getSection(num) {
  const spanWithNum = document.querySelector(`span[data-number="${num}"]`);
  const parentEl = spanWithNum.parentNode;
  return parentEl.getAttribute('data-section');
}
