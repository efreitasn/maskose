import mkCharLetter from '../letter';

test('should match the object returned by mkCharLetter()', () => {
  const result = mkCharLetter();

  expect(result).toMatchSnapshot();
});