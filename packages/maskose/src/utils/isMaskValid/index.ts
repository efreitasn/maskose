import isMaskEndless from '../isMaskEndless';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../mask/chars/toBePut';
import { MaskoseMask } from '../../mask';
import getMaskCharsTailByDirectionDeep from '../getMaskCharsTailByDirectionDeep';
import getMaskDirection from '../getMaskDirection';

/**
 * Returns whether the provided mask is valid.
 */
export default function isMaskValid(mask: MaskoseMask): {
  valid: true;
} | {
  valid: false;
  error: string;
} {
  const maskTail = getMaskCharsTailByDirectionDeep(
    getMaskDirection(mask),
    mask.chars
  );
  const isEndless = isMaskEndless(mask);

  if (
    isEndless &&
    maskTail.type === MASKOSE_CHAR_TO_BE_PUT_TYPE
  ) {
    return {
      valid: false,
      error: 'A mask cannot be endless when its tail is a toBePut character.'
    };
  }

  return {
    valid: true
  };
};