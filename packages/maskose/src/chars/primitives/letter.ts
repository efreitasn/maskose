export const MASKOSE_CHAR_LETTER_TYPE = 'MASKOSE_CHAR_LETTER_TYPE';

export interface MaskoseCharLetter {
  type: typeof MASKOSE_CHAR_LETTER_TYPE;
};

/**
 * A character in the range A to Z (case insensitive) expected to be in the value to be masked
 */
export default function mkCharLetter(): MaskoseCharLetter {
  return {
    type: MASKOSE_CHAR_LETTER_TYPE
  };
}