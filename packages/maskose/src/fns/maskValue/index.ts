import { MaskoseMask } from '../../mask';
import maskValueByTraversingMask, {
  defaultState as maskValueByTraversingMaskStateDefaultState
} from './maskValueByTraversingMask';
import getMaskCharsByDirection from '../../utils/getMaskCharsByDirection';
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
    const maskCharsByDirection = getMaskCharsByDirection(mask);
    const valueToBeMaskedCharsByMaskDirection = getValueCharsByMaskDirection(direction, value);

    const traverseResult = maskValueByTraversingMask({
      ...maskValueByTraversingMaskStateDefaultState,
      maskCharsByDirection,
      valueToBeMaskedCharsByMaskDirection,
      direction,
      endless
    });

    return traverseResult.maskedValue;
  };
}