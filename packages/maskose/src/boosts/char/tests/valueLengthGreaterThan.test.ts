import test from 'ava';
import mkCharBoostValueLengthGreaterThan from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthGreaterThan()', t => {
  const result = mkCharBoostValueLengthGreaterThan(5)(mkCharNum());

  t.snapshot(result);
});