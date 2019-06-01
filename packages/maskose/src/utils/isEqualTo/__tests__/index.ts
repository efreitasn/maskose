import isEqualTo from '..';

it('should return true when the provided values are equal to each other', () => {
  const isEqualToWithValueToCompare = isEqualTo(20);
  const result = isEqualToWithValueToCompare(20);

  expect(result).toBe(true);
});

it('should return false when the provided values aren\'t equal to each other', () => {
  const isEqualToWithValueToCompare = isEqualTo(20);
  const result = isEqualToWithValueToCompare(30);

  expect(result).toBe(false);
});