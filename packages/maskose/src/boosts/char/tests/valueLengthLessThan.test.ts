import test from 'ava';
import mkCharBoostValueLengthLessThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthLessThan()', t => {
  const result = mkCharBoostValueLengthLessThan(5)(mkCharNum());

  t.snapshot(result);
});