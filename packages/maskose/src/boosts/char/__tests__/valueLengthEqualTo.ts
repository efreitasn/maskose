import mkCharBoostValueLengthEqualTo from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

it('should match the object returned by mkCharBoostValueLengthEqualTo()', () => {
  const result = mkCharBoostValueLengthEqualTo({
    masked: 5,
    unmasked: 5
  })(mkCharNum());

  expect(result).toMatchSnapshot();
});