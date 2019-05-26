/**
 * Curry a binary function
 * @param fn Function to be curried
 */
export default function curry2<T extends (...args: any[]) => any>(fn: T) {
  function curried(arg1: Parameters<T>[0], arg2: Parameters<T>[1]): ReturnType<T>;
  function curried(arg1: Parameters<T>[0]): (arg2: Parameters<T>[1]) => ReturnType<T>;

  function curried(arg1: Parameters<T>[0], arg2?: any): any {
    if (arg2 === undefined) {
      return fn.bind(null, arg1);
    }

    return fn(arg1, arg2);
  }

  return curried;
}