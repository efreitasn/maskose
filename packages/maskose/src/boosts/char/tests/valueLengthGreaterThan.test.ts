import mkCharBoostValueLengthGreaterThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthGreaterThan()', () => {
  const result = mkCharBoostValueLengthGreaterThan(5)(mkCharNum());

  expect(result).toMatchSnapshot();
});