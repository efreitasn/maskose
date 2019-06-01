import getProp from '../getProp';

/**
 * Get the length of the provided array
 */
const getArraySize = getProp<any[], 'length'>('length');

export default getArraySize;