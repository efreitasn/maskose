import { MaskoseMask } from '../../mask';
import getMaskChars from '../../utils/getMaskChars';
import getMaskDirection from '../../utils/getMaskDirection';
import isMaskEndless from '../../utils/isMaskEndless';
import arrayByMaskDirection from '../../utils/arrayByMaskDirection';
import getValueCharsByMaskDirection from '../../utils/getValueCharsByMaskDirection';
import traverseMaskChars from '../../utils/traverseMaskChars';
import { defaultState as traverseMaskCharsDefaultState, TRAVERSE_MASK_CHARS_UNMASK_MODE } from '../../utils/traverseMaskChars/state';
import { MaskoseMaskChar } from '../../mask/chars';

/**
 * Unmask a value.
 */
export default function mkUnmaskValue(mask: MaskoseMask): (value: string) => string {
  return function mkUnmaskValueWithMask(value: string): string {
    const direction = getMaskDirection(mask);
    const endless = isMaskEndless(mask);
    const maskCharsByDirection = arrayByMaskDirection<MaskoseMaskChar>(
      getMaskDirection(mask),
      getMaskChars(mask)
    );
    const valueCharsByDirection = getValueCharsByMaskDirection(direction, value);

    const traverseResult = traverseMaskChars({
      ...traverseMaskCharsDefaultState,
      mode: TRAVERSE_MASK_CHARS_UNMASK_MODE,
      maskCharsByDirection,
      valueCharsByDirection,
      direction,
      endless
    });

    return traverseResult.result;
  };
}