import test from 'ava';
import mkCharPredicateFn from '../predicateFn';
import mkCharLetter from '../../primitives/letter';

test('should match the object returned by mkCharPredicateFn()', t => {
  const result = mkCharPredicateFn(() => true, mkCharLetter());

  t.snapshot(result);
});