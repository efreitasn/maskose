export const MASKOSE_CHAR_NUM_TYPE = 'MASKOSE_CHAR_NUM_TYPE';

export interface MaskoseCharNum {
  type: typeof MASKOSE_CHAR_NUM_TYPE;
};

/**
 * A character in the range 0 to 9 expected to be in the value to be masked
 */
export default function mkCharNum(): MaskoseCharNum {
  return {
    type: MASKOSE_CHAR_NUM_TYPE
  };
}