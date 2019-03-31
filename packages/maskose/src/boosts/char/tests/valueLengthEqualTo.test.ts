import test from 'ava';
import mkCharBoostValueLengthEqualTo from '../valueLengthEqualTo';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostValueLengthEqualTo()', t => {
  const result = mkCharBoostValueLengthEqualTo(5)(mkCharNum());

  t.snapshot(result);
});