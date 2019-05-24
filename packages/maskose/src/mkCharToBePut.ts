import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_TO_BE_PUT_TYPE = 'MASK_CHAR_TO_BE_PUT_TYPE';

export type MkCharToBePutObj = {
  type: typeof MASK_CHAR_TO_BE_PUT_TYPE;
  char: string;
  predicateFn?: MaskCharPredicateFn;
};

export default function mkCharToBePut(char: string, predicateFn?: MaskCharPredicateFn): MkCharToBePutObj {
  return {
    type: MASK_CHAR_TO_BE_PUT_TYPE,
    char,
    predicateFn
  };
}