import { MaskoseMaskCharBase } from '.';

export const MASKOSE_CHAR_LETTER_TYPE = 'MASKOSE_CHAR_LETTER_TYPE';
export const MASKOSE_CHAR_LETTER_STR_ID = 'LETTER';

export interface MaskoseMaskCharLetter extends MaskoseMaskCharBase {
  type: typeof MASKOSE_CHAR_LETTER_TYPE;
  regExp: RegExp;
};

interface MkCharLetterOptions {
  /**
   * Whether the range will be case sensitive, defaults to false
   */
  caseSensitive?: boolean;
}

/**
 * A character in the range A-Z expected to be in the value to be masked
 */
export default function mkCharLetter(options: MkCharLetterOptions = {}): MaskoseMaskCharLetter {
  const regExp = new RegExp(
    '[A-Z]',
    options.caseSensitive ? '' : 'i'
  );
  
  return {
    type: MASKOSE_CHAR_LETTER_TYPE,
    repetitions: 1,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: [],
    regExp
  };
}