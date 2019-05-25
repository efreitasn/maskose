import { MaskoseChar, PrimitiveMaskoseChar } from '..';
import { MASKOSE_CHAR_LETTER_TYPE } from './letter';
import { MASKOSE_CHAR_NUM_TYPE } from './num';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from './toBePut';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from './specific';

export default function isPrimitiveMaskoseChar(char: MaskoseChar): char is PrimitiveMaskoseChar {
  switch (char.type) {
    case MASKOSE_CHAR_LETTER_TYPE:
    case MASKOSE_CHAR_NUM_TYPE:
    case MASKOSE_CHAR_TO_BE_PUT_TYPE:
    case MASKOSE_CHAR_SPECIFIC_TYPE:
      return true;
    default:
      return false;
  }
}