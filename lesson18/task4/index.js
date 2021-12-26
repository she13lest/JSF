export function saveCalls(funk) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return funk.apply(this, args);
  }
  withMemory.calls = [];
  return withMemory;
}
