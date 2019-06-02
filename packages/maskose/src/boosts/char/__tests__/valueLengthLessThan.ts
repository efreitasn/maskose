import mkCharBoostValueLengthLessThan from '../valueLengthLessThan';
import mkCharNum from '../../../mask/chars/num';

it('should match the object returned by mkCharBoostValueLengthLessThan()', () => {
  const result = mkCharBoostValueLengthLessThan({
    masked: 5,
    unmasked: 5
  })(mkCharNum());

  expect(result).toMatchSnapshot();
});