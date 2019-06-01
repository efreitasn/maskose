import getMaskCharNextIteration from '..';

it('should return the currentIteration + 1 if there are more iterations', () => {
  const maskCharRepetitions = 5;
  const currentIterationZeroBased = 3;
  const result = getMaskCharNextIteration(
    maskCharRepetitions,
    currentIterationZeroBased
  );

  expect(result).toBe(currentIterationZeroBased + 1);
});

it('should return 0 if there are no more iterations', () => {
  const maskCharRepetitions = 5;
  const currentIterationZeroBased = 4;
  const result = getMaskCharNextIteration(
    maskCharRepetitions,
    currentIterationZeroBased
  );

  expect(result).toBe(0);
});