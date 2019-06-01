import { MaskoseMaskDirection } from '../../mask';
import isMaskDirectionRightToLeft from '../isMaskDirectionRightToLeft';

/**
 * Return the provided array by the provided mask direction.
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