import { MaskoseMaskDirection } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

/**
 * Returns `str` and `value` concatenated based on `maskDirection`.
 */
export default function concatStrByMaskDirection(
  str: string,
  value: string,
  maskDirection: MaskoseMaskDirection
) {
  if (isMaskDirectionRightToLeft(maskDirection)) {
    return `${value}${str}`;
  }

  return `${str}${value}`;
}