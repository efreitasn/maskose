import pipe from '../pipe';
import reverseArray from '../reverseArray';
import joinArray from '../joinArray';

/**
 * Returns the provided string in a reversed order.
 */
const reverseStr = pipe<string, string>(
  Array.from,
  reverseArray,
  joinArray('')
);

export default reverseStr;