import { calc } from './calculator';

it('should get + of numbers', () => {
  const result = calc('5 + 2');

  expect(result).toEqual('5 + 2 = 7');
});

it('should get - of numbers', () => {
  const result = calc('5 - 2');

  expect(result).toEqual('5 - 2 = 3');
});

it('should get * of numbers', () => {
  const result = calc('5 * 2');

  expect(result).toEqual('5 * 2 = 10');
});

it('should get / of numbers', () => {
  const result = calc('5 / 2');

  expect(result).toEqual('5 / 2 = 2.5');
});

it('should get / of numbers', () => {
  const result = calc(5 / 2);

  expect(result).toEqual(null);
});