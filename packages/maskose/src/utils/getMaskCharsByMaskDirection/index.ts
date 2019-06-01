import { MaskoseMaskChar } from '../../mask/chars';
import { MaskoseMaskDirection } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

export default function getMaskCharsByMaskDirection(
  maskChars: MaskoseMaskChar[],
  maskDirection: MaskoseMaskDirection
) {
  if (isMaskDirectionRightToLeft(maskDirection)) {
    return [...maskChars].reverse();
  }

  return maskChars;
}