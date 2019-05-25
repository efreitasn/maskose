import { MaskCharPredicateFn, MaskChar } from '.';

export const MASK_CHAR_GROUP_TYPE = 'MASK_CHAR_GROUP_TYPE';

export type MaskCharGroup = {
  type: typeof MASK_CHAR_GROUP_TYPE;
  maskChars: MaskChar[];
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A group of characters
 * @param maskChars The characters that will be in the group
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharGroup(
  maskChars: MaskChar[],
  predicateFn?: MaskCharPredicateFn
): MaskCharGroup {
  return {
    type: MASK_CHAR_GROUP_TYPE,
    maskChars,
    predicateFn
  };
}