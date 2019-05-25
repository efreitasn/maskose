import { MaskCharPredicateFn } from '.';

export const MASK_CHAR_LETTER_TYPE = 'MASK_CHAR_LETTER_TYPE';

export type MaskCharLetterObj = {
  type: typeof MASK_CHAR_LETTER_TYPE;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A character in the range A to Z (case insensitive) expected to be in the value to be masked
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharLetter(predicateFn?: MaskCharPredicateFn): MaskCharLetterObj {
  return {
    type: MASK_CHAR_LETTER_TYPE,
    predicateFn
  };
}