import doesMaskCharHaveMoreIterations from './doesMaskCharHaveMoreIterations';

export default function getMaskCharNextIteration(
  maskCharRepetitions: number,
  currentIterationZeroBased: number
) {
  if (doesMaskCharHaveMoreIterations(maskCharRepetitions, currentIterationZeroBased)) {
    return currentIterationZeroBased + 1;
  }

  return 0;
}