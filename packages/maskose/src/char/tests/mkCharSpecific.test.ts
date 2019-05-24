import test from 'ava';
import mkCharSpecific from '../mkCharSpecific';

test('should match the object returned by mkCharSpecific()', t => {
  const result = mkCharSpecific('ABC');

  t.snapshot(result);
});