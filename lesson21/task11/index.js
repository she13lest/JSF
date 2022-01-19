export function manageClasses() {
  const one = document.querySelector('.one');
  one.classList.add('selected');
  const two = document.querySelector('.two');
  two.classList.remove('selected');
  const thirt = document.querySelector('.three');
  thirt.classList.toggle('three_done');
  const fourth = document.querySelector('.four');
  if (fourth.classList.containes('.some-class')) {
    fourth.classList.add('another-class');
  }
}
