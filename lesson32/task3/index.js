export const makePromise = (num) => Promise.resolve(num);

makePromise(17).then((number) => {
  console.log(number); // 17
});
