import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_LETTER_TYPE = 'MASK_CHAR_LETTER_TYPE';

export type MkCharLetterObj = {
  type: typeof MASK_CHAR_LETTER_TYPE;
  predicateFn?: MaskCharPredicateFn;
};

export default function mkCharLetter(predicateFn?: MaskCharPredicateFn): MkCharLetterObj {
  return {
    type: MASK_CHAR_LETTER_TYPE,
    predicateFn
  };
}