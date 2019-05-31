import mkCharNum from '../num';

test('should match the object returned by mkCharNum()', () => {
  const result = mkCharNum();

  expect(result).toMatchSnapshot();
});