import identity from './identity';

/**
 * Compose the provided functions by executing from the leftmost fn
 * to the rightmost one.
 * @param fns The functions that will be used to compose the returned fn
 * @return An unary function composed by fns
 */
export default function pipe<T, P>(...fns: Function[]): (arg: T) => P {
  return function composed(val: T): P {
    const composedFns = fns.reduce(
      (acc, fn) => (arg0: any) => fn(acc(arg0)),
      identity
    );

    return composedFns(val);
  };
}