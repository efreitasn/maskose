import test from 'ava';
import mkCharBoostRepeat from '../repeat';
import mkCharNum from '../../../mask/chars/num';

test('should match the object returned by mkCharBoostRepeat()', t => {
  const result = mkCharBoostRepeat(5)(mkCharNum());

  t.snapshot(result);
});