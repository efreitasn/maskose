import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../chars/primitives/toBePut';
import { MaskoseMask } from '../..';

export default function isLastMaskCharAToBePut(
  mask: MaskoseMask,
  rightToLeft?: boolean
) {
  return rightToLeft ?
    mask.content[0].primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE :
    mask.content[mask.content.length - 1].primitive.type === MASKOSE_CHAR_TO_BE_PUT_TYPE;
}