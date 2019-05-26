import test from 'ava';
import mkCharToBePut from '../toBePut';

test('should match the object returned by mkCharToBePut()', t => {
  const result = mkCharToBePut('B');

  t.snapshot(result);
});

test('should throw an error when an string with length > 1 is provided', t => {
  const str = '20';

  t.throws(() => mkCharToBePut(str));
});