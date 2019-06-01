import mkCharNum from '../num';

it('should match the object returned by mkCharNum()', () => {
  const result = mkCharNum();

  expect(result).toMatchSnapshot();
});