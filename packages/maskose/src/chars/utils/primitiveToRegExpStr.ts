import { PrimitiveMaskoseChar } from '..';
import { MASKOSE_CHAR_LETTER_TYPE } from '../primitives/letter';
import { MASKOSE_CHAR_NUM_TYPE } from '../primitives/num';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from '../primitives/specific';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../primitives/toBePut';
import escapeRegExp from '../../utils/escapeRegExp';

export default function primitiveMaskoseCharToRegExpStr(maskoseChar: PrimitiveMaskoseChar) {
  switch (maskoseChar.type) {
    case MASKOSE_CHAR_LETTER_TYPE:
      return '[a-zA-Z]';
    case MASKOSE_CHAR_NUM_TYPE:
      return '[0-9]';
    case MASKOSE_CHAR_SPECIFIC_TYPE:
    case MASKOSE_CHAR_TO_BE_PUT_TYPE:
      return escapeRegExp(maskoseChar.char);
  }
}