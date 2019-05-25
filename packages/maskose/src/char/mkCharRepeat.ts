import { MaskCharPredicateFn, MaskCharObj } from '.';

export const MASK_CHAR_REPEAT_TYPE = 'MASK_CHAR_REPEAT_TYPE';

export type MaskCharRepeatObj = {
  type: typeof MASK_CHAR_REPEAT_TYPE;
  n: number;
  charObj: MaskCharObj;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * Repeat a character n times
 * @param n The number of repetions
 * @param charObj The character to be repeated
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharRepeat(
  n: number,
  charObj: MaskCharObj,
  predicateFn?: MaskCharPredicateFn
): MaskCharRepeatObj {
  return {
    type: MASK_CHAR_REPEAT_TYPE,
    n,
    charObj,
    predicateFn
  };
}