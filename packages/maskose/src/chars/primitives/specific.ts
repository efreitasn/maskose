export const MASKOSE_CHAR_SPECIFIC_TYPE = 'MASKOSE_CHAR_SPECIFIC_TYPE';

export type MaskoseCharSpecific = {
  type: typeof MASKOSE_CHAR_SPECIFIC_TYPE;
  char: string;
};

/**
 * A specific character expected to be in the value to be masked
 */
export default function mkCharSpecific(char: string): MaskoseCharSpecific {
  return {
    type: MASKOSE_CHAR_SPECIFIC_TYPE,
    char
  };
}