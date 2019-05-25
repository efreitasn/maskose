import { MaskCharPredicateFn, MaskChar } from '.';

export const MASK_CHAR_REPEAT_TYPE = 'MASK_CHAR_REPEAT_TYPE';

export type MaskCharRepeat = {
  type: typeof MASK_CHAR_REPEAT_TYPE;
  n: number;
  maskChar: MaskChar;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * Repeat a character n times
 * @param n The number of repetions
 * @param maskChar The character to be repeated
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharRepeat(
  n: number,
  maskChar: MaskChar,
  predicateFn?: MaskCharPredicateFn
): MaskCharRepeat {
  return {
    type: MASK_CHAR_REPEAT_TYPE,
    n,
    maskChar,
    predicateFn
  };
}