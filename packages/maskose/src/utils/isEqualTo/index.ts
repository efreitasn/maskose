/**
 * Returns whether two values are the equal to each other (strict equality).
 */
export default function isEqualTo<T>(valueToCompare: T): (value: T) => boolean {
  return function isEqualToWithValueToCompare(value: T) {
    return valueToCompare === value;
  };
}