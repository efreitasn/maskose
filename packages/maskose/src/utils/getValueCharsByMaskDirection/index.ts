import { MaskoseMaskDirection } from '../../mask';
import arrayByMaskDirection from '../arrayByMaskDirection';

export default function getValueCharsByMaskDirection(maskDirection: MaskoseMaskDirection, value: string) {
  return arrayByMaskDirection<string>(
    maskDirection,
    Array.from(value)
  );
}