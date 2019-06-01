import mkCharToBePut from '../toBePut';

it('should match the object returned by mkCharToBePut()', () => {
  const result = mkCharToBePut('B');

  expect(result).toMatchSnapshot();
});

it('should throw an error when an string with length > 1 is provided', () => {
  const str = '20';

  expect(() => mkCharToBePut(str)).toThrow();
});