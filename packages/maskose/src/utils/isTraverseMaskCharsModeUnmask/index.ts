import isEqualTo from '../isEqualTo';
import { TraverseMaskCharsMode, TRAVERSE_MASK_CHARS_UNMASK_MODE } from '../traverseMaskChars/state';

const isTraverseMaskCharsModeUnmask = isEqualTo<TraverseMaskCharsMode>(TRAVERSE_MASK_CHARS_UNMASK_MODE);

export default isTraverseMaskCharsModeUnmask;