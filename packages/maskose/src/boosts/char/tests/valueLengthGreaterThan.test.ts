import mkCharBoostValueLengthGreaterThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthGreaterThan()', () => {
  const result = mkCharBoostValueLengthGreaterThan({
    masked: 5,
    toBeMasked: 5
  })(mkCharNum());

  expect(result).toMatchSnapshot();
});