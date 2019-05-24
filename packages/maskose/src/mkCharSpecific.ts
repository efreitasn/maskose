import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_SPECIFIC_TYPE = 'MASK_CHAR_SPECIFIC_TYPE';

export type MkCharSpecificObj = {
  type: typeof MASK_CHAR_SPECIFIC_TYPE;
  char: string;
  predicateFn?: MaskCharPredicateFn;
};

export default function mkCharSpecific(char: string, predicateFn?: MaskCharPredicateFn): MkCharSpecificObj {
  return {
    type: MASK_CHAR_SPECIFIC_TYPE,
    char,
    predicateFn
  };
}