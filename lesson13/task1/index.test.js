it('17 means 17', () => {
  expect(17).toEqual(17);
});

it('18 not equal 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

getEvenNumbers([1, 2, 3, 4]);

it('get even numbers from arr', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
