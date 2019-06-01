import mkCharBoostValueLengthLessThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

it('should match the object returned by mkCharBoostValueLengthLessThan()', () => {
  const result = mkCharBoostValueLengthLessThan({
    masked: 5,
    toBeMasked: 5
  })(mkCharNum());

  expect(result).toMatchSnapshot();
});