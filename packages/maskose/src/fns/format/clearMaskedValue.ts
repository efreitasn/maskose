import { MaskoseMask } from '../..';
import isLastMaskCharAToBePut from './isLastMaskCharAToBePut';
import isLastMaskedValueCharAToBePut from './isLastMaskedValueCharAToBePut';

export default function clearMaskedValue(
  maskedValue: string,
  mask: MaskoseMask,
  rightToLeft?: boolean
): string {
  if (
    isLastMaskedValueCharAToBePut(maskedValue, mask, rightToLeft) &&
    !isLastMaskCharAToBePut(mask, rightToLeft)
  ) {
    if (rightToLeft) {
      return maskedValue.substr(1, maskedValue.length);
    } else {
      return maskedValue.substr(0, maskedValue.length - 1);
    }
  }

  return maskedValue;
}