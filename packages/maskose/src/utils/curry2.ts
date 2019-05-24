/**
 * Curry a binary function.
 * @param fn Function to be curried
 */
export default function curry2<A1, A2, R>(fn: Function) {
  function curried(arg1: A1, arg2: A2): R;
  function curried(arg1: A1): (arg2: A2) => R;

  function curried(arg1: A1, arg2?: any): any {
    if (arg2 === undefined) {
      return fn.bind(null, arg1);
    }

    return fn(arg1, arg2);
  }

  return curried;
}