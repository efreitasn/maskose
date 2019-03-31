export default function getDidntMatchNum(
  matchNum: number,
  itemsSoFarZeroBased: number
) {
  return (itemsSoFarZeroBased + 1) - matchNum;
}