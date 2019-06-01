import getArraySize from '..';

test('should return the size of the provided array', () => {
  const arr = [
    1,
    2,
    3,
    4,
    5
  ];
  const result = getArraySize(arr);

  expect(result).toBe(5);
});