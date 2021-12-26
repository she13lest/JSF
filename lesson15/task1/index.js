export const makeCounter = () => {
  let count = 0;
  return function () {
    // eslint-disable-next-line no-return-assign
    return (count += 1);
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();