import mkCharGroup from '../group';
import mkCharNum from '../num';
import mkCharLetter from '../letter';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

it('should match the object returned by mkCharGroup()', () => {
  const result = mkCharGroup([
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharLetter()
  ]);

  expect(result).toMatchSnapshot();
});

it('should throw an error if the provided array is empty', () => {
  expect(() => mkCharGroup([])).toThrow();
});