import { MaskoseMaskCharBase } from '.';

export const MASKOSE_CHAR_NUM_TYPE = 'MASKOSE_CHAR_NUM_TYPE';
export const MASKOSE_CHAR_NUM_STR_ID = 'NUM';

export interface MaskoseMaskCharNum extends MaskoseMaskCharBase {
  readonly type: typeof MASKOSE_CHAR_NUM_TYPE;
  readonly regExp: RegExp;
};

/**
 * A character in the range 0 to 9 expected to be in the masked or unmasked value.
 */
export default function mkCharNum(): MaskoseMaskCharNum {
  return {
    type: MASKOSE_CHAR_NUM_TYPE,
    repetitions: 1,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: [],
    regExp: /[0-9]/
  };
}