import test from 'ava';
import mkCharLetter from '../mkCharLetter';

test('should match the object returned by mkCharLetter()', t => {
  const result = mkCharLetter();

  t.snapshot(result);
});