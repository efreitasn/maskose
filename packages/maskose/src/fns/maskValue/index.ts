import { MaskoseMask } from '../../mask';
import maskValueByTraverse, {
  defaultState as maskValueByTraverseDefaultState
} from './maskValueByTraverse';
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

    const traverseResult = maskValueByTraverse({
      ...maskValueByTraverseDefaultState,
      maskCharsByDirection,
      valueToBeMaskedCharsByMaskDirection,
      direction,
      endless
    });

    return traverseResult.maskedValue;
  };
}