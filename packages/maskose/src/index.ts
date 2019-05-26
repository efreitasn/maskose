import { PrimitiveMaskoseChar } from './chars';
import { MaskoseCharPredicateFnFn } from './chars/nonPrimitives/predicateFn';

export interface MaskoseMaskContentItem {
  readonly primitive: PrimitiveMaskoseChar;
  readonly regExpStr: string;
  readonly predicateFn?: MaskoseCharPredicateFnFn;
};

export interface MaskoseMask {
  readonly content: MaskoseMaskContentItem[];
};

export { default as mkFormat } from './fns/format';
export { default as mkMask } from './fns/mask';
export { default as mkMatch } from './fns/match';
export {
  mkCharLetter as mkCharLetter,
  mkCharNum as mkCharNum,
  mkCharSpecific as mkCharSpecific,
  mkCharToBePut as mkCharToBePut,
  mkCharRepeat as mkCharRepeat,
  mkCharPredicateFn as mkCharPredicateFn
} from './chars';