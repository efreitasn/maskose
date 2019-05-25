export const MASKOSE_CHAR_TO_BE_PUT_TYPE = 'MASKOSE_CHAR_TO_BE_PUT_TYPE';

export type MaskoseCharToBePut = {
  type: typeof MASKOSE_CHAR_TO_BE_PUT_TYPE;
  char: string;
};

/**
 * A character that's expected to be put in the mask when formatting instead of being a character
 * expected to be in the value to be masked. For example, the dash (-) in a phone number mask is
 * such a character
 * @param char Character to be put in the mask
 */
export default function mkCharToBePut(char: string): MaskoseCharToBePut {
  return {
    type: MASKOSE_CHAR_TO_BE_PUT_TYPE,
    char
  };
}