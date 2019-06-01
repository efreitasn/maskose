import prop from '..';

it('should return the value of the provided prop in the provided object', () => {
  const propName = 'abc';
  const value = 120;
  const obj = {
    [propName]: value
  };
  const result = prop<typeof obj, typeof propName>(propName)(obj);

  expect(result).toBe(value);
});