export default function isEqualTo<T>(valueToCompare: T): (value: T) => boolean {
  return function isEqualToWithValueToCompare(value: T) {
    return valueToCompare === value;
  };
}