import test from 'ava';
import pipe from '../pipe';

test('should execute the provided functions right-to-left (top-to-bottom)', t => {
  const composed = pipe<number, number>(
    (num: number) => num * 2,
    (num: number) => num / 2,
    (num: number) => num - 2
  );
  const result = composed(4);

  t.is(result, 2);
});

test('should call the leftmost function with the value provided to the composed function', t => {
  const arg = 2;

  const composed = pipe<number, number>(
    (value: number) => {
      t.is(value, arg);

      return value - 1;
    },
    (num: number) => num - 2,
    (num: number) => num / 2
  );

  composed(arg);
});