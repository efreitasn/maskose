import { MaskoseMaskCharBase } from '.';
import escapeRegExpChar from '../../utils/escapeRegExpChar';

export const MASKOSE_CHAR_TO_BE_PUT_TYPE = 'MASKOSE_CHAR_TO_BE_PUT_TYPE';
export const MASKOSE_CHAR_TO_BE_PUT_STR_ID = 'TO_BE_PUT';

export interface MaskoseMaskCharToBePut extends MaskoseMaskCharBase {
  readonly type: typeof MASKOSE_CHAR_TO_BE_PUT_TYPE;
  readonly char: string;
  readonly   regExp: RegExp;
};

/**
 * A character that's not expected to be in the unmasked value when masking
 * and expected to be in the masked value when unmasking.
 */
export default function mkCharToBePut(char: string): MaskoseMaskCharToBePut {
  const regExp = new RegExp(escapeRegExpChar(char));

  if (char.length === 0 || char.length > 1) {
    throw new Error('The provided character must have a size equal to 1');
  }

  return {
    type: MASKOSE_CHAR_TO_BE_PUT_TYPE,
    char,
    repetitions: 1,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: [],
    regExp
  };
}