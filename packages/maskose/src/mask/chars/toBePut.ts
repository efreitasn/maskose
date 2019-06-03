import { MaskoseMaskCharBase } from '.';
import escapeRegExpChar from '../../utils/escapeRegExpChar';
import isAToBePutCharStr from '../../utils/isAToBePutCharStr';

export const MASKOSE_CHAR_TO_BE_PUT_TYPE = 'MASKOSE_CHAR_TO_BE_PUT_TYPE';
export const MASKOSE_CHAR_TO_BE_PUT_STR_ID = 'TO_BE_PUT';

export interface MaskoseMaskCharToBePut extends MaskoseMaskCharBase {
  readonly type: typeof MASKOSE_CHAR_TO_BE_PUT_TYPE;
  readonly char: string;
  readonly   regExp: RegExp;
};

export const availableToBePutChars = [
  '(',
  ')',
  '[',
  ']',
  '-',
  '/',
  '\\',
  ',',
  '.',
  ' '
];

export const toBePutCharsRegExp = new RegExp(
  availableToBePutChars
    .map(escapeRegExpChar)
    .join('|')
);

/**
 * A character that's not expected to be in the unmasked value when masking
 * and expected to be in the masked value when unmasking.
 */
export default function mkCharToBePut(char: string): MaskoseMaskCharToBePut {
  const regExp = new RegExp(escapeRegExpChar(char));

  if (!isAToBePutCharStr(char)) {
    throw new Error(`The provided character must be one of: ${availableToBePutChars.join(', ')}`);
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