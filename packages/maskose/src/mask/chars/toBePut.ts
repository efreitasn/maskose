import { MaskoseCharBase } from '.';

export const MASKOSE_CHAR_TO_BE_PUT_TYPE = 'MASKOSE_CHAR_TO_BE_PUT_TYPE';
export const MASKOSE_CHAR_TO_BE_PUT_STR_ID = 'TO_BE_PUT';

export interface MaskoseCharToBePut extends MaskoseCharBase {
  type: typeof MASKOSE_CHAR_TO_BE_PUT_TYPE;
  char: string;
};

/**
 * A character that's expected to be put in the mask when formatting instead of being a character
 * expected to be in the value to be masked. For example, the dash (-) in a phone number mask is
 * such a character
 * @param char Character to be put in the mask
 */
export default function mkCharToBePut(char: string): MaskoseCharToBePut {
  if (char.length === 0 || char.length > 1) {
    throw new Error('The provided character must have a size equal to 1');
  }

  return {
    type: MASKOSE_CHAR_TO_BE_PUT_TYPE,
    char,
    repetitions: 1,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: []
  };
}