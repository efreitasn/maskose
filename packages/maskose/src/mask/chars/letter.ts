import { MaskoseCharBase } from '.';

export const MASKOSE_CHAR_LETTER_TYPE = 'MASKOSE_CHAR_LETTER_TYPE';
export const MASKOSE_CHAR_LETTER_STR_ID = 'LETTER';

export interface MaskoseCharLetter extends MaskoseCharBase {
  type: typeof MASKOSE_CHAR_LETTER_TYPE;
  regExp: RegExp;
};

/**
 * A character in the range A to Z (case insensitive) expected to be in the value to be masked
 */
export default function mkCharLetter({
  start,
  end
}: {
  start?: string;
  end?: string;
} = {}): MaskoseCharLetter {
  // TODO
  // verificar se {start,end}.length === 1
  const regExp = new RegExp(
    `[${start || 'A'}-${end || 'Z'}]`,
    'i'
  );
  
  return {
    type: MASKOSE_CHAR_LETTER_TYPE,
    repetitions: 1,
    valueLengthConditions: [],
    regExp
  };
}