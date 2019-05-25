import test from 'ava';
import mkCharToBePut from '../toBePut';

test('should match the object returned by mkCharToBePut()', t => {
  const result = mkCharToBePut('B');

  t.snapshot(result);
});