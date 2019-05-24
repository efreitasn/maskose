import { MaskCharPredicateFn } from '.';

const MASK_CHAR_TO_BE_PUT_TYPE = 'MASK_CHAR_TO_BE_PUT_TYPE';

export type MaskCharToBePutObj = {
  type: typeof MASK_CHAR_TO_BE_PUT_TYPE;
  char: string;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A character that's expected to be put in the mask when formatting instead of being a character
 * expected to be in the value to be masked. For example, the dash (-) in a phone number mask is
 * such a character
 * @param char Character to be put in the mask
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharToBePut(char: string, predicateFn?: MaskCharPredicateFn): MaskCharToBePutObj {
  return {
    type: MASK_CHAR_TO_BE_PUT_TYPE,
    char,
    predicateFn
  };
}