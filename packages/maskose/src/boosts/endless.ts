import { MaskoseMask } from '..';
import getMaskTail from '../utils/getMaskTail';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../chars/primitives/toBePut';

/**
 * Turns the last character of a mask into a character with infinite
 * repetitions.
 */
export default function mkBoostEndleess(mask: MaskoseMask): MaskoseMask {
  const maskTail = getMaskTail(mask);

  if (maskTail.primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE) {
    throw new Error('You cannot make a mask endless when its last character is a mkCharToBePut.');
  }

  return {
    ...mask,
    endless: true
  };
}