import { MaskoseMaskDirection } from '../mask';
import { MaskoseChar } from '../mask/chars';
import isMaskDirectionRightToLeft from './isMaskDirectionRightToLeft';

/**
 * Get the last character of the provided maskChars list based on a maskDirection.
 * If it's a right-to-left mask, the tail will be the first character.
 * If it's a left-to-right mask, the tail will be the last character.
 */
export default function getMaskCharsTailByDirection(
  maskDirection: MaskoseMaskDirection,
  maskChars: MaskoseChar[]
): MaskoseChar {
  if (isMaskDirectionRightToLeft(maskDirection)) {
    return maskChars[0];
  }

  return maskChars[maskChars.length - 1];
}