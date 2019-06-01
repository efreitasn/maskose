import mkCharLetter from '../letter';

it('should match the object returned by mkCharLetter()', () => {
  const result = mkCharLetter();

  expect(result).toMatchSnapshot();
});