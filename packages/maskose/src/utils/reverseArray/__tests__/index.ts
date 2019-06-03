import reverseArray from '..';

it('should return the provided array in a reversed order', () => {
  const arr = [
    1,
    2,
    3,
    4,
    5
  ];
  const result = reverseArray(arr);

  expect(result).toEqual([
    5,
    4,
    3,
    2,
    1
  ]);
});