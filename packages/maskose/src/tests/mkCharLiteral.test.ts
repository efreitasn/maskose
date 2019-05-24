import test from 'ava';
import mkCharLiteral from '../mkCharLiteral';

test('should match the object returned by mkCharLiteral()', t => {
  const result = mkCharLiteral('ABC');

  t.snapshot(result);
});