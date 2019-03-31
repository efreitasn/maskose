export default function doesMaskCharHaveMoreIterations(
  maskCharRepetitions: number,
  currentIterationZeroBased: number
) {
  return (currentIterationZeroBased + 1) < maskCharRepetitions;
}