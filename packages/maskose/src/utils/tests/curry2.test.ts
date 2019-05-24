import test from 'ava';
import curry2 from '../curry2';

test('should execute the provided function in the first call of its curried version if both arguments are provided', t => {
  const fn = (
    a: number,
    b: number
  ) => a + b;
  const curriedFn = curry2<number, number, number>(fn);
  const result = curriedFn(1, 2);
  
  t.is(result, 3);
});

test('should return a partially-applied function if only the first argument is provided to the curried function', t => {
  const fn = (
    a: number,
    b: number
  ) => a + b;
  const curriedFn = curry2<number, number, number>(fn);
  const partiallyAppliedFn = curriedFn(1);
  const result = partiallyAppliedFn(5);

  t.is(result, 6);
});