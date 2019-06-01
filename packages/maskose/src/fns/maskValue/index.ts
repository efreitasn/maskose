import { MaskoseMask } from '../../mask';
import traverseMaskChars, {
  defaultState as traverseMaskCharsDefaultState
} from '../../utils/traverseMaskChars';
import getMaskCharsByMaskDirection from '../../utils/getMaskCharsByMaskDirection';
import getValueCharsByMaskDirection from '../../utils/getValueCharsByMaskDirection';
import isMaskEndless from '../../utils/isMaskEndless';
import getMaskDirection from '../../utils/getMaskDirection';

/**
 * Mask a value
 */
export default function mkMaskValue(mask: MaskoseMask): (value: string) => string {
  return function mkMaskValueWithMask(value: string) {
    const direction = getMaskDirection(mask);
    const endless = isMaskEndless(mask);
    const maskCharsByDirection = getMaskCharsByMaskDirection(
      mask.chars,
      getMaskDirection(mask)
    );
    const valueCharsByDirection = getValueCharsByMaskDirection(direction, value);

    const traverseResult = traverseMaskChars({
      ...traverseMaskCharsDefaultState,
      maskCharsByDirection,
      valueCharsByDirection,
      direction,
      endless
    });

    return traverseResult.result;
  };
}