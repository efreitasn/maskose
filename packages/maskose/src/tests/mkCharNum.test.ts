import test from 'ava';
import mkCharNum from '../mkCharNum';

test('should match the object returned by mkCharNum()', t => {
  const result = mkCharNum();

  t.snapshot(result);
});