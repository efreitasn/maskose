import isEqualTo from '../isEqualTo';
import { TraverseMaskCharsMode, TRAVERSE_MASK_CHARS_UNMASK_MODE } from '../traverseMaskChars/state';

/**
 * Returns whether the provided TraverseMaskCharsMode is equal
 * to TRAVERSE_MASK_CHARS_UNMASK_MODE.
 */
const isTraverseMaskCharsModeUnmask = isEqualTo<TraverseMaskCharsMode>(TRAVERSE_MASK_CHARS_UNMASK_MODE);

export default isTraverseMaskCharsModeUnmask;