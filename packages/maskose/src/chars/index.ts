import { MaskoseCharLetter } from './letter';
import { MaskoseCharSpecific } from './specific';
import { MaskoseCharNum } from './num';
import { MaskoseCharToBePut } from './toBePut';

export { default as mkCharLetter } from './letter';
export { default as mkCharNum } from './num';
export { default as mkCharSpecific } from './specific';
export { default as mkCharToBePut } from './toBePut';

export interface MaskoseCharPredicateFn {
  (arg: {
    value: string;
  }): boolean;
}

export interface MaskoseCharBase {
  repetitions: number;
  predicateFn?: MaskoseCharPredicateFn;
};

export type MaskoseChar =
  | MaskoseCharLetter
  | MaskoseCharSpecific
  | MaskoseCharNum
  | MaskoseCharToBePut
;