import joinArray from '..';

it('should return a string with all items of the provided array joined by the provided separator', () => {
  const arr = [
    1,
    2,
    3,
    4,
    5
  ];
  const separator = '-';
  const result = joinArray<number>(separator)(arr);

  expect(result).toBe(
    `${arr[0]}${separator}${arr[1]}${separator}${arr[2]}${separator}${arr[3]}${separator}${arr[4]}`
  );
});

it('should return a string with all items of the provided array joined when no separator is provided', () => {
  const arr = [
    1,
    2,
    3,
    4,
    5
  ];
  const result = joinArray<number>()(arr);

  expect(result).toBe(
    `${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}`
  );
});