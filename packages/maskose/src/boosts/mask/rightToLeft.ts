import mkMaskBoostWithValidations from './withValidations';
import { MaskoseBoost } from '..';
import { MaskoseMask } from '../../mask';

/**
 * Make the provided mask a mask whose characters will be read from right to left.
 * This will only be visible when the provided value to be masked doesn't fill the mask,
 * i.e., has a smaller length than the mask, or when it's an endless mask.
 * 
 * This boost is most used when dealing with currency masks. In this type of mask,
 * the characters of the value to be masked, as well as the characters of the mask itself,
 * must be 'evaluated' from right to left. Example:
 * 
 ```javascript
 const valueToBeMasked = 12345;
 const leftToRightMask = mkCreate([
   mkCharBoostRepeat(2)(mkCharNum()),
   mkCharToBePut(','),
   mkCharBoostRepeat(3)(mkCharNum()),
   mkCharToBePut('.'),
   mkCharBoostRepeat(2)(mkCharNum())
 ]);
 const rightToLeftMask = mkMaskBoostRightToLeft()(leftToRightMask);
 const mkMaskValueLeftToRight = mkMaskValue(leftToRightMask);
 const mkMaskValueRightToLeft = mkMaskValue(rightToLeftMask);

 mkMaskValueLeftToRight(valueToBeMasked) // 12,345
 mkMaskValueRightToLeft(valueToBeMasked) // 132.45
 ```
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