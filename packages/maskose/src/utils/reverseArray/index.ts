/**
 * Returns the provided array in a reversed order
*/
export default function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}