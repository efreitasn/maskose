export default function getProp<TObj, TProp extends keyof TObj>(prop: TProp): ((obj: TObj) => TObj[TProp]) {
  return function getPropWithProp(obj: TObj) {
    return obj[prop];
  };
}