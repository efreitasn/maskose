/**
 * Higher-order function to pass items of an array as arguments to a function.
 */
export default function arrayToArgs<TFn extends ((...args: any[]) => any)>(fn: TFn): (arr: Parameters<TFn>) => ReturnType<TFn> {
  return function arrayToArgsWithFn(arr: Parameters<TFn>) {
    return fn(...arr);
  };
}