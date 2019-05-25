import { MaskChar, PrimitiveMaskChar } from '.';
import { MASK_CHAR_LETTER_TYPE } from './mkCharLetter';
import { MASK_CHAR_NUM_TYPE } from './mkCharNum';
import { MASK_CHAR_SPECIFIC_TYPE } from './mkCharSpecific';
import { MASK_CHAR_TO_BE_PUT_TYPE } from './mkCharToBePut';

export default function isPrimitiveMaskChar(maskChar: MaskChar): maskChar is PrimitiveMaskChar {
  switch (maskChar.type) {
    case MASK_CHAR_LETTER_TYPE:
    case MASK_CHAR_NUM_TYPE:
    case MASK_CHAR_SPECIFIC_TYPE:
    case MASK_CHAR_TO_BE_PUT_TYPE:
      return true;
    default:
      return false;
  }
}