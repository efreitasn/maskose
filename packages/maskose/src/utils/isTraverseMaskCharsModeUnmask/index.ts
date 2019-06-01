import { TraverseMaskCharsMode, TRAVERSE_MASK_CHARS_UNMASK_MODE } from '../traverseMaskChars/state';

export default function isTraverseMaskCharsModeUnmask(mode: TraverseMaskCharsMode) {
  return mode === TRAVERSE_MASK_CHARS_UNMASK_MODE;
}