import { makeCounter } from './index';

it('should get counter', () => {
  const result = makeCounter();

  expect(result).toEqual(0);
});

