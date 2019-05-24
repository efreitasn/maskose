import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_TO_BE_PUT_TYPE = 'MASK_CHAR_TO_BE_PUT_TYPE';

export default function mkCharToBePut(char: string, predicateFn?: MaskCharPredicateFn) {
  return {
    type: MASK_CHAR_TO_BE_PUT_TYPE,
    char,
    predicateFn
  };
}