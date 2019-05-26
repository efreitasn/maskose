export default function concatMaskedValue(
  currentMaskedValue: string,
  value: string,
  rightToLeft?: boolean
) {
  return rightToLeft ?
    `${value}${currentMaskedValue}` :
    `${currentMaskedValue}${value}`;
}