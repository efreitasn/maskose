import { MaskoseMaskCharBase } from '.';
import escapeRegExpChar from '../../utils/escapeRegExpChar';

export const MASKOSE_CHAR_SPECIFIC_TYPE = 'MASKOSE_CHAR_SPECIFIC_TYPE';
export const MASKOSE_CHAR_SPECIFIC_STR_ID = 'SPECIFIC';

export interface MaskoseMaskCharSpecific extends MaskoseMaskCharBase {
  type: typeof MASKOSE_CHAR_SPECIFIC_TYPE;
  char: string;
  regExp: RegExp;
};

/**
 * A specific character expected to be in the value to be masked
 */
export default function mkCharSpecific(char: string): MaskoseMaskCharSpecific {
  if (char.length === 0 || char.length > 1) {
    throw new Error('The provided character must have a size equal to 1');
  }

  const regExp = new RegExp(
    escapeRegExpChar(char)
  );

  return {
    type: MASKOSE_CHAR_SPECIFIC_TYPE,
    char,
    repetitions: 1,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: [],
    regExp
  };
}