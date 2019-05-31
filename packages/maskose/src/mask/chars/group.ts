import { MaskoseCharBase, MaskoseChar } from '.';

export const MASKOSE_CHAR_GROUP_TYPE = 'MASKOSE_CHAR_GROUP_TYPE';
export const MASKOSE_CHAR_GROUP_STR_ID = 'GROUP';

export interface MaskoseCharGroup extends MaskoseCharBase {
  type: typeof MASKOSE_CHAR_GROUP_TYPE;
  chars: MaskoseChar[];
};

/**
 * A group of characters
 */
export default function mkCharGroup(chars: MaskoseChar[]): MaskoseCharGroup {
  if (chars.length === 0) {
    throw new Error('The provided chars array must not be empty.');
  }

  return {
    type: MASKOSE_CHAR_GROUP_TYPE,
    repetitions: 1,
    chars,
    maskedValueLengthConditions: [],
    valueToBeMaskedLengthConditions: []
  };
}