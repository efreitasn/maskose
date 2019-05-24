import { MaskCharNumObj } from './mkCharNum';
import { MaskCharLetterObj } from './mkCharLetter';
import { MaskCharToBePutObj } from './mkCharToBePut';
import { MaskCharSpecificObj } from './mkCharSpecific';
import { MaskCharGroupObj } from './mkCharGroup';

export { default as mkCharGroup } from './mkCharGroup';
export { default as mkCharLetter } from './mkCharLetter';
export { default as mkCharNum } from './mkCharNum';
export { default as mkCharSpecific } from './mkCharSpecific';
export { default as mkCharToBePut } from './mkCharToBePut';

export type MaskCharObj =
  | MaskCharLetterObj
  | MaskCharSpecificObj
  | MaskCharNumObj
  | MaskCharToBePutObj
  | MaskCharGroupObj
;

export type MaskCharPredicateFn = (arg: {
  value: string;
}) => boolean;