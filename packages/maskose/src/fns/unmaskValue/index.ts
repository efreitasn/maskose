import { MaskoseMask } from '../../mask';
import getMaskDirection from '../../utils/getMaskDirection';
import isMaskEndless from '../../utils/isMaskEndless';
import getMaskCharsByMaskDirection from '../../utils/getMaskCharsByMaskDirection';
import getValueCharsByMaskDirection from '../../utils/getValueCharsByMaskDirection';
import traverseMaskChars from '../../utils/traverseMaskChars';
import { defaultState as traverseMaskCharsDefaultState, TRAVERSE_MASK_CHARS_UNMASK_MODE } from '../../utils/traverseMaskChars/state';

/**
 * Unmask a value
 */
export default function mkUnmaskValue(mask: MaskoseMask): (value: string) => string {
  return function mkUnmaskValueWithMask(value: string): string {
    const direction = getMaskDirection(mask);
    const endless = isMaskEndless(mask);
    const maskCharsByDirection = getMaskCharsByMaskDirection(
      mask.chars,
      getMaskDirection(mask)
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