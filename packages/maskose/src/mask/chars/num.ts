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
export default function mkCharNum({
  start,
  end
}: {
  start?: number;
  end?: number;
} = {}): MaskoseCharNum {
  const regExp = new RegExp(
    `[${start || 0}-${end || 9}]`
  );

  return {
    type: MASKOSE_CHAR_NUM_TYPE,
    repetitions: 1,
    valueLengthConditions: [],
    regExp: regExp
  };
}