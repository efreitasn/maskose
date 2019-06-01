import { MaskoseMaskCharBase, MaskoseMaskChar } from '.';

export const MASKOSE_CHAR_GROUP_TYPE = 'MASKOSE_CHAR_GROUP_TYPE';
export const MASKOSE_CHAR_GROUP_STR_ID = 'GROUP';

export interface MaskoseMaskCharGroup extends MaskoseMaskCharBase {
  readonly type: typeof MASKOSE_CHAR_GROUP_TYPE;
  readonly chars: MaskoseMaskChar[];
};

/**
 * A group of characters.
 */
export default function mkCharGroup(chars: MaskoseMaskChar[]): MaskoseMaskCharGroup {
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