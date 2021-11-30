import { reverseArray, withdraw, getAdults } from './previoustask';

it('should return a mirrored array', () => {
  const result = reverseArray([1, 5, 6, 3, 12]);

  expect(result).toEqual([12, 3, 6, 5, 1]);
});

it('should withdraw money from the clients account and return the balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 950);

  expect(result).toEqual(-1);
});

it('should find people over 18', () => {
  const result = getAdults({ Nik: 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ Nik: 19, Bob: 18 });
});
