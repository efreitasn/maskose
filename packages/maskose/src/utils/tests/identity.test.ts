import test from 'ava';
import identity from '../identity';

test('should return the provided value', t => {
  const value = 20;
  const result = identity(value);

  t.is(result, value);
});