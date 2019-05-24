import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_LETTER_TYPE = 'MASK_CHAR_LETTER_TYPE';

export type MkCharLetterObj = {
  type: typeof MASK_CHAR_LETTER_TYPE;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A character in the range a to z (case insensitive) expected to be in the value to be masked.
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharLetter(predicateFn?: MaskCharPredicateFn): MkCharLetterObj {
  return {
    type: MASK_CHAR_LETTER_TYPE,
    predicateFn
  };
}