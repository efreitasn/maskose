import identity from '../identity';

it('should return the provided value', () => {
  const value = 20;
  const result = identity(value);

  expect(result).toBe(value);
});