export default function joinArray<T>(separator = ''): (arr: T[]) => string {
  return function joinArrayWithSplitter(arr: T[]) {
    return arr.join(separator);
  };
}