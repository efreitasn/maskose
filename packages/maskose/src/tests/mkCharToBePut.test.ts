import test from 'ava';
import mkCharToBePut from '../mkCharToBePut';

test('should match the object returned by mkCharToBePut()', t => {
  const result = mkCharToBePut('-');

  t.snapshot(result);
});