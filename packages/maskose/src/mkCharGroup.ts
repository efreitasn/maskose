import mkCharNum, { MaskCharPredicateFn } from './mkCharNum';
import mkCharLetter from './mkCharLetter';
import mkCharToBePut from './mkCharToBePut';
import mkCharLiteral from './mkCharLiteral';

const MASK_CHAR_GROUP_TYPE = 'MASK_CHAR_GROUP_TYPE';

type CharObjs =
  | ReturnType<typeof mkCharLetter>
  | ReturnType<typeof mkCharLiteral>
  | ReturnType<typeof mkCharNum>
  | ReturnType<typeof mkCharToBePut>
;

export default function mkCharGroup(charObjs: CharObjs[], predicateFn?: MaskCharPredicateFn) {
  return {
    type: MASK_CHAR_GROUP_TYPE,
    charObjs,
    predicateFn
  };
}