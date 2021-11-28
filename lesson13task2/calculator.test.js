import { getSquaredArray, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});
