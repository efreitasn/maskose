import { MaskCharPredicateFn, MaskCharObj } from '.';

export const MASK_CHAR_GROUP_TYPE = 'MASK_CHAR_GROUP_TYPE';

export type MaskCharGroupObj = {
  type: typeof MASK_CHAR_GROUP_TYPE;
  charObjs: MaskCharObj[];
  predicateFn?: MaskCharPredicateFn;
};

/**
 * A group of characters
 * @param charObjs The characters that will be in the group
 * @param predicateFn Function that will decide if the character will be present in the mask
 */
export default function mkCharGroup(
  charObjs: MaskCharObj[],
  predicateFn?: MaskCharPredicateFn
): MaskCharGroupObj {
  return {
    type: MASK_CHAR_GROUP_TYPE,
    charObjs,
    predicateFn
  };
}