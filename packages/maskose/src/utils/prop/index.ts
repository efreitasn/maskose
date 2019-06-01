/**
 * Returns the provided prop's value in the provided object.
 */
export default function prop<TObj, TProp extends keyof TObj>(prop: TProp): ((obj: TObj) => TObj[TProp]) {
  return function propWithProp(obj: TObj) {
    return obj[prop];
  };
}