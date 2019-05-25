import { PrimitiveMaskoseChar } from '..';

export const MASKOSE_CHAR_REPEAT_TYPE = 'MASKOSE_CHAR_REPEAT_TYPE';

export type MaskoseCharRepeat = {
  type: typeof MASKOSE_CHAR_REPEAT_TYPE;
  n: number;
  primitive: PrimitiveMaskoseChar;
};

/**
 * A character in the range A to Z (case insensitive) expected to be in the value to be masked
 * @param n Number of repetitions
 * @param primitive Primitive maskose char to be repeated
 */
export default function mkCharRepeat(n: number, primitive: PrimitiveMaskoseChar): MaskoseCharRepeat {
  return {
    type: MASKOSE_CHAR_REPEAT_TYPE,
    n,
    primitive
  };
}