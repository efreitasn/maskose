import mkCharBoostValueLengthEqualTo from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthEqualTo()', () => {
  const result = mkCharBoostValueLengthEqualTo({
    masked: 5,
    toBeMasked: 5
  })(mkCharNum());

  expect(result).toMatchSnapshot();
});