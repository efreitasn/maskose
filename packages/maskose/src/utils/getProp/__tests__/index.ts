import getProp from '..';

it('should return the value of the provided prop in the provided object', () => {
  const prop = 'abc';
  const value = 120;
  const obj = {
    [prop]: value
  };
  const result = getProp<typeof obj, typeof prop>(prop)(obj);

  expect(result).toBe(value);
});