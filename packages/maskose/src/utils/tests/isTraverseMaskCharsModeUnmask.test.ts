import isTraverseMaskCharsModeUnmask from '../isTraverseMaskCharsModeUnmask';
import { TRAVERSE_MASK_CHARS_UNMASK_MODE } from '../traverseMaskChars';

test('should return true if the provided mode is the unmask mode', () => {
  const result = isTraverseMaskCharsModeUnmask(TRAVERSE_MASK_CHARS_UNMASK_MODE);

  expect(result).toBe(true);
});