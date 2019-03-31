import test from 'ava';
import mkCharSpecific from '../specific';

test('should match the object returned by mkCharSpecific()', t => {
  const result = mkCharSpecific('E');

  t.snapshot(result);
});

test('should throw an error when an string with length > 1 is provided', t => {
  const str = '20';

  t.throws(() => mkCharSpecific(str));
});