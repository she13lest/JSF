export function manageClasses() {
  const first = document.querySelector('.one');
  first.classList.add('selected');
  const second = document.querySelector('.two');
  second.classList.remove('selected');
  const thirt = document.querySelector('.three');
  thirt.classList.toggle('three_done');
  const fourth = document.querySelector('.four');
  if (fourth.classList.containes('.some-class')) {
    fourth.classList.add('another-class');
  }
}
