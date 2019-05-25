import test from 'ava';
import mkCharRepeat from '../repeat';
import mkCharLetter from '../../primitives/letter';

test('should match the object returned by mkCharRepeat()', t => {
  const result = mkCharRepeat(5, mkCharLetter());

  t.snapshot(result);
});