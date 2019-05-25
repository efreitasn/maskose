import { MaskoseCharLetter } from './primitives/letter';
import { MaskoseCharSpecific } from './primitives/specific';
import { MaskoseCharNum } from './primitives/num';
import { MaskoseCharToBePut } from './primitives/toBePut';
import { MaskoseCharRepeat } from './nonPrimitives/repeat';
import { MaskoseCharPredicateFn } from './nonPrimitives/predicateFn';

export { default as mkCharLetter } from './primitives/letter';
export { default as mkCharNum } from './primitives/num';
export { default as mkCharSpecific } from './primitives/specific';
export { default as mkCharToBePut } from './primitives/toBePut';
export { default as mkCharRepeat } from './nonPrimitives/repeat';
export { default as mkCharPredicateFn } from './nonPrimitives/predicateFn';

export type MaskoseChar =
  | MaskoseCharLetter
  | MaskoseCharSpecific
  | MaskoseCharNum
  | MaskoseCharToBePut
  | MaskoseCharRepeat
  | MaskoseCharPredicateFn
;

export type PrimitiveMaskoseChar =
  | MaskoseCharLetter
  | MaskoseCharSpecific
  | MaskoseCharNum
  | MaskoseCharToBePut
;

export type NonPrimitiveMaskoseChar = Exclude<MaskoseChar, PrimitiveMaskoseChar>;