import { MaskCharNum } from './mkCharNum';
import { MaskCharLetter } from './mkCharLetter';
import { MaskCharToBePut } from './mkCharToBePut';
import { MaskCharSpecific } from './mkCharSpecific';
import { MaskCharGroup } from './mkCharGroup';
import { MaskCharRepeat } from './mkCharRepeat';

export { default as mkCharGroup } from './mkCharGroup';
export { default as mkCharLetter } from './mkCharLetter';
export { default as mkCharNum } from './mkCharNum';
export { default as mkCharSpecific } from './mkCharSpecific';
export { default as mkCharToBePut } from './mkCharToBePut';

export type MaskChar =
  | MaskCharLetter
  | MaskCharSpecific
  | MaskCharNum
  | MaskCharToBePut
  | MaskCharGroup
  | MaskCharRepeat
;

export type PrimitiveMaskChar =
  | MaskCharLetter
  | MaskCharSpecific
  | MaskCharNum
  | MaskCharToBePut
;

export type NonPrimitiveMaskChar = Exclude<MaskChar, keyof PrimitiveMaskChar>;

export type MaskCharPredicateFn = (arg: {
  value: string;
}) => boolean;