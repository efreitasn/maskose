import { MaskCharPredicateFn, MkCharNumObj } from './mkCharNum';
import { MkCharLetterObj } from './mkCharLetter';
import { MkCharToBePutObj } from './mkCharToBePut';
import { MkCharSpecificObj } from './mkCharSpecific';

const MASK_CHAR_GROUP_TYPE = 'MASK_CHAR_GROUP_TYPE';

export type CharObj =
  | MkCharLetterObj
  | MkCharSpecificObj
  | MkCharNumObj
  | MkCharToBePutObj
;

export type MkCharGroupObj = {
  type: typeof MASK_CHAR_GROUP_TYPE;
  charObjs: CharObj[];
  predicateFn?: MaskCharPredicateFn;
};

export default function mkCharGroup(charObjs: CharObj[], predicateFn?: MaskCharPredicateFn): MkCharGroupObj {
  return {
    type: MASK_CHAR_GROUP_TYPE,
    charObjs,
    predicateFn
  };
}