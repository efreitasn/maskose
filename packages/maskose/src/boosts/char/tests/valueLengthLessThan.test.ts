import mkCharBoostValueLengthLessThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthLessThan()', () => {
  const result = mkCharBoostValueLengthLessThan(5)(mkCharNum());

  expect(result).toMatchSnapshot();
});