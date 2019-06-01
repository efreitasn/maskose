import { MaskoseMaskDirection } from '../../mask';
import { MaskoseMaskChar } from '../../mask/chars';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

/**
 * Returns the last character of `maskChars` based on `maskDirection`.
 * If it's a right-to-left mask, the tail will be the first character.
 * If it's a left-to-right mask, the tail will be the last character.
 */
export default function getMaskCharsTailByDirection(
  maskDirection: MaskoseMaskDirection,
  maskChars: MaskoseMaskChar[]
): MaskoseMaskChar {
  if (isMaskDirectionRightToLeft(maskDirection)) {
    return maskChars[0];
  }

  return maskChars[maskChars.length - 1];
}