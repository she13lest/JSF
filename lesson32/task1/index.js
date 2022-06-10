const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const number1 = getValueWithDelay(56, 1000);
const number2 = getValueWithDelay(undefined, 3000);
const number3 = getValueWithDelay("10", 4000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asynkNumbers) =>
  Promise.all(asynkNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(number1, Promise.reject(new Error("error")), number3).then((result) =>
  console.log(result)
);
