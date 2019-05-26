export default function getValueChar(
  counter: number,
  value: string,
  rightToLeft?: boolean
): string {
  if (rightToLeft) {
    return value[(value.length - 1) - counter];
  }

  return value[counter];
}