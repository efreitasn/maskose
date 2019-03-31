import { MaskoseCharBase } from '.';

export const MASKOSE_CHAR_SPECIFIC_TYPE = 'MASKOSE_CHAR_SPECIFIC_TYPE';
export const MASKOSE_CHAR_SPECIFIC_STR_ID = 'SPECIFIC';

export interface MaskoseCharSpecific extends MaskoseCharBase {
  type: typeof MASKOSE_CHAR_SPECIFIC_TYPE;
  char: string;
};

/**
 * A specific character expected to be in the value to be masked
 */
export default function mkCharSpecific(char: string): MaskoseCharSpecific {
  if (char.length === 0 || char.length > 1) {
    throw new Error('The provided character must have a size equal to 1');
  }

  return {
    type: MASKOSE_CHAR_SPECIFIC_TYPE,
    char,
    repetitions: 1,
    valueLengthConditions: []
  };
}