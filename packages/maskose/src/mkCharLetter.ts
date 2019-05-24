import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_LETTER_TYPE = 'MASK_CHAR_LETTER_TYPE';

export default function mkCharLetter(predicateFn?: MaskCharPredicateFn) {
  return {
    type: MASK_CHAR_LETTER_TYPE,
    predicateFn
  };
}