export function defer(funk, ms) {
  return function () {
    setTimeout(() => funk.apply(this, arguments), ms);
  };
}
