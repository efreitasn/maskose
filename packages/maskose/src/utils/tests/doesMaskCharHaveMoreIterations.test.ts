import doesMaskCharHaveMoreIterations from '../doesMaskCharHaveMoreIterations';

it('should return true if there are more iterations', () => {
  const maskCharRepetitions = 5;
  const currentIterationZeroBased = 3;
  const result = doesMaskCharHaveMoreIterations(
    maskCharRepetitions,
    currentIterationZeroBased
  );

  expect(result).toBe(true);
});

it('should return false if there are no more iterations', () => {
  const maskCharRepetitions = 5;
  const currentIterationZeroBased = 4;
  const result = doesMaskCharHaveMoreIterations(
    maskCharRepetitions,
    currentIterationZeroBased
  );

  expect(result).toBe(false);
});