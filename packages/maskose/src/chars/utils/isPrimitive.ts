import { MaskoseChar, PrimitiveMaskoseChar } from '..';
import { MASKOSE_CHAR_LETTER_TYPE } from '../primitives/letter';
import { MASKOSE_CHAR_NUM_TYPE } from '../primitives/num';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../primitives/toBePut';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from '../primitives/specific';

export default function isPrimitiveChar(char: MaskoseChar): char is PrimitiveMaskoseChar {
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