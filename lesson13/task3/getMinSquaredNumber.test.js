import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([5, -2, 13, 64, 75]);

  expect(result).toEqual(4);
});
