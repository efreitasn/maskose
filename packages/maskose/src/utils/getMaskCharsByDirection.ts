import { MaskoseMask } from '../mask';
import isMaskRightToLeft from './isMaskRightToLeft';

export default function getMaskCharsByDirection(mask: MaskoseMask) {
  if (isMaskRightToLeft(mask)) {
    return [...mask.chars].reverse();
  }

  return mask.chars;
}