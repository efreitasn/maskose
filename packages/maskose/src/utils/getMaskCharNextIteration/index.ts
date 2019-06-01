import doesMaskCharHaveMoreIterations from '../doesMaskCharHaveMoreIterations';

/**
 * Returns, based on `maskCharRepetitions` and `currentIterationZeroBased`,
 * a maskChar's next iteration. If there isn't a next one, returns 0.
 */
export default function getMaskCharNextIteration(
  maskCharRepetitions: number,
  currentIterationZeroBased: number
) {
  if (doesMaskCharHaveMoreIterations(maskCharRepetitions, currentIterationZeroBased)) {
    return currentIterationZeroBased + 1;
  }

  return 0;
}