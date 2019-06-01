import prop from '../prop';

/**
 * Returns the size of the provided array.
 */
const getArraySize = prop<any[], 'length'>('length');

export default getArraySize;