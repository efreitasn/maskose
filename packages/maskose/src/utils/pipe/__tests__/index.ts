import pipe from '..';

it('should execute the provided functions right-to-left (top-to-bottom)', () => {
  const composed = pipe<number, number>(
    (num: number) => num * 2,
    (num: number) => num / 2,
    (num: number) => num - 2
  );
  const result = composed(4);

  expect(result).toBe(2);
});

it('should call the leftmost function with the value provided to the composed function', () => {
  const arg = 2;

  const composed = pipe<number, number>(
    (value: number) => {
      expect(value).toBe(arg);

      return value - 1;
    },
    (num: number) => num - 2,
    (num: number) => num / 2
  );

  composed(arg);
});