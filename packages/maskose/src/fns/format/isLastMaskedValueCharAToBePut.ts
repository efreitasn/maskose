import { MaskoseMask } from '../..';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../chars/primitives/toBePut';

export default function isLastMaskedValueCharAToBePut(
  maskedValue: string,
  mask: MaskoseMask,
  rightToLeft?: boolean
) {
  return rightToLeft ?
    mask.content[mask.content.length - maskedValue.length].primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE :
    mask.content[maskedValue.length - 1].primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE;
}