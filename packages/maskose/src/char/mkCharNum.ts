import { MaskCharPredicateFn } from '.';

export const MASK_CHAR_NUM_TYPE = 'MASK_CHAR_NUM_TYPE';

export type MaskCharNumObj = {
  type: typeof MASK_CHAR_NUM_TYPE;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A character in the range 0 to 9 expected to be in the value to be masked
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharNum(predicateFn?: MaskCharPredicateFn): MaskCharNumObj {
  return {
    type: MASK_CHAR_NUM_TYPE,
    predicateFn
  };
}