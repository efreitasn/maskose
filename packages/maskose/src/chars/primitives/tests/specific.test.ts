import test from 'ava';
import mkCharSpecific from '../specific';

test('should match the object returned by mkCharSpecific()', t => {
  const result = mkCharSpecific('E');

  t.snapshot(result);
});