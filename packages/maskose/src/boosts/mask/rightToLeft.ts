import mkMaskBoostWithValidations from './withValidations';
import { MaskoseBoost } from '..';
import { MaskoseMask } from '../../mask';

/**
 * Makes the provided mask a mask whose characters will be read from right to left.
 * This will only be visible when the provided masked or unmasked value doesn't fill
 * the mask, i.e., has a smaller length than the mask, or when it's an endless mask.
 * 
 * This boost is mostly used when dealing with currency masks. In this type of mask,
 * the characters of the masked or unmasked value, as well as the characters of the
 * mask itself, must be 'evaluated' from right to left.
 */
export function mkMaskBoostRightToLeftWithoutValidations(): MaskoseBoost<MaskoseMask> {
  return function mkMaskBoostRightToLeftInternal(mask: MaskoseMask): MaskoseMask {
    return {
      ...mask,
      direction: 'right-to-left'
    };
  };
}

const mkMaskBoostRightToLeft = mkMaskBoostWithValidations(mkMaskBoostRightToLeftWithoutValidations);

export default mkMaskBoostRightToLeft;