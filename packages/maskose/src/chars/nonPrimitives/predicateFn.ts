import { PrimitiveMaskoseChar } from '..';

export const MASKOSE_CHAR_PREDICATE_FN_TYPE = 'MASKOSE_CHAR_PREDICATE_FN_TYPE';

type MaskoseCharPredicateFnFn = (arg: {
  value: string;
}) => boolean;

export type MaskoseCharPredicateFn = {
  type: typeof MASKOSE_CHAR_PREDICATE_FN_TYPE;
  fn: MaskoseCharPredicateFnFn;
  primitive: PrimitiveMaskoseChar;
};

/**
 * A character in the range A to Z (case insensitive) expected to be in the value to be masked
 * @param n Number of repetitions
 * @param primitive Primitive maskose char to be repeated
 */
export default function mkCharPredicateFn(
  fn: MaskoseCharPredicateFnFn,
  primitive: PrimitiveMaskoseChar
): MaskoseCharPredicateFn {
  return {
    type: MASKOSE_CHAR_PREDICATE_FN_TYPE,
    fn,
    primitive
  };
}