import { MaskoseCharBase } from '.';

export const MASKOSE_CHAR_NUM_TYPE = 'MASKOSE_CHAR_NUM_TYPE';
export const MASKOSE_CHAR_NUM_STR_ID = 'NUM';

export interface MaskoseCharNum extends MaskoseCharBase {
  type: typeof MASKOSE_CHAR_NUM_TYPE;
  regExp: RegExp;
};

/**
 * A character in the range 0 to 9 expected to be in the value to be masked
 */
export default function mkCharNum(): MaskoseCharNum {
  return {
    type: MASKOSE_CHAR_NUM_TYPE,
    repetitions: 1,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: [],
    regExp: /[0-9]/
  };
}