import { MaskoseMaskDirection } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

/**
 * Returns `arr` based on `maskDirection`.
 */
export default function arrayByMaskDirection<T>(
  maskDirection: MaskoseMaskDirection,
  arr: T[]
): T[] {
  if (isMaskDirectionRightToLeft(maskDirection)) {
    return [...arr].reverse();
  }

  return arr;
}