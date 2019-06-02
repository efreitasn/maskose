import mkCharToBePut from '../toBePut';

it('should match the object returned by mkCharToBePut()', () => {
  const result = mkCharToBePut('(');

  expect(result).toMatchSnapshot();
});

it('should throw an error when an string with length > 1 is provided', () => {
  expect(() => mkCharToBePut('))')).toThrow();
  expect(() => mkCharToBePut('str')).toThrow();
});