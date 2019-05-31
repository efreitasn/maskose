import mkCharSpecific from '../specific';

test('should match the object returned by mkCharSpecific()', () => {
  const result = mkCharSpecific('E');

  expect(result).toMatchSnapshot();
});

test('should throw an error when an string with length > 1 is provided', () => {
  const str = '20';

  expect(() => mkCharSpecific(str)).toThrow();
});