import { MaskCharPredicateFn } from '.';

export const MASK_CHAR_SPECIFIC_TYPE = 'MASK_CHAR_SPECIFIC_TYPE';

export type MaskCharSpecificObj = {
  type: typeof MASK_CHAR_SPECIFIC_TYPE;
  char: string;
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A specific character expected to be in the value to be masked
 * @param char Character that will be used in the mask
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharSpecific(char: string, predicateFn?: MaskCharPredicateFn): MaskCharSpecificObj {
  return {
    type: MASK_CHAR_SPECIFIC_TYPE,
    char,
    predicateFn
  };
}