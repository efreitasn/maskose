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
  // TODO
  // throw an error if chars is empty

  return {
    type: MASKOSE_CHAR_GROUP_TYPE,
    repetitions: 1,
    chars,
    valueLengthConditions: []
  };
}