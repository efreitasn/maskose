import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../char/toBePut';
import { MaskoseMask } from '../..';

export default function isLastMaskCharAToBePut(
  mask: MaskoseMask,
  rightToLeft?: boolean
) {
  return rightToLeft ?
    mask.content[0].char.type === MASKOSE_CHAR_TO_BE_PUT_TYPE :
    mask.content[mask.content.length - 1].char.type === MASKOSE_CHAR_TO_BE_PUT_TYPE;
}