import { MaskoseChar } from '../char';
import { MASKOSE_CHAR_LETTER_TYPE } from '../char/letter';
import { MASKOSE_CHAR_NUM_TYPE } from '../char/num';
import { MASKOSE_CHAR_SPECIFIC_TYPE } from '../char/specific';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../char/toBePut';
import escapeRegExp from './escapeRegExp';

export default function charToRegExpStr(char: MaskoseChar) {
  switch (char.type) {
    case MASKOSE_CHAR_LETTER_TYPE:
      return '[a-zA-Z]';
    case MASKOSE_CHAR_NUM_TYPE:
      return '[0-9]';
    case MASKOSE_CHAR_SPECIFIC_TYPE:
    case MASKOSE_CHAR_TO_BE_PUT_TYPE:
      return escapeRegExp(char.char);
  }
}