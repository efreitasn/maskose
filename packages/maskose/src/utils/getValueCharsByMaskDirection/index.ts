import { MaskoseMaskDirection } from '../../mask';
import arrayByMaskDirection from '../arrayByMaskDirection';

/**
 * Returns the provided value as an array based on `maskDirection`.
 */
export default function getValueCharsByMaskDirection(maskDirection: MaskoseMaskDirection, value: string) {
  return arrayByMaskDirection<string>(
    maskDirection,
    Array.from(value)
  );
}