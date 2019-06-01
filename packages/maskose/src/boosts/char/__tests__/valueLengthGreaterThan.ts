import mkCharBoostValueLengthGreaterThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

it('should match the object returned by mkCharBoostValueLengthGreaterThan()', () => {
  const result = mkCharBoostValueLengthGreaterThan({
    masked: 5,
    unmasked: 5
  })(mkCharNum());

  expect(result).toMatchSnapshot();
});