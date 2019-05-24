import { MaskCharPredicateFn } from './mkCharNum';

const MASK_CHAR_LITERAL_TYPE = 'MASK_CHAR_LITERAL_TYPE';

export default function mkCharLiteral(char: string, predicateFn?: MaskCharPredicateFn) {
  return {
    type: MASK_CHAR_LITERAL_TYPE,
    char,
    predicateFn
  };
}