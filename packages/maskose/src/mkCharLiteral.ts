import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_LITERAL_TYPE = 'MASK_CHAR_LITERAL_TYPE';

export type MkCharLiteralObj = {
  type: typeof MASK_CHAR_LITERAL_TYPE;
  char: string;
  predicateFn?: MaskCharPredicateFn;
};

export default function mkCharLiteral(char: string, predicateFn?: MaskCharPredicateFn): MkCharLiteralObj {
  return {
    type: MASK_CHAR_LITERAL_TYPE,
    char,
    predicateFn
  };
}