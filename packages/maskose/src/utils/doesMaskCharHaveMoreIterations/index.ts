/**
 * Returns whether, based on `maskCharRepetitions` and `currentIterationZeroBased`,
 * a mask char has more iterations.
 */
export default function doesMaskCharHaveMoreIterations(
  maskCharRepetitions: number,
  currentIterationZeroBased: number
) {
  return (currentIterationZeroBased + 1) < maskCharRepetitions;
}