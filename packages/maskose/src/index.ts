import { MaskoseChar, MaskoseCharPredicateFn } from './char';

export interface MaskoseMaskContentItem {
  readonly char: MaskoseChar;
  readonly regExpStr: string;
  readonly predicateFn?: MaskoseCharPredicateFn;
};

export interface MaskoseMask {
  readonly endless: boolean;
  readonly rightToLeft: boolean;
  readonly content: MaskoseMaskContentItem[];
};

export { default as mkFormat } from './fns/format';
export { default as mkMask } from './fns/mask';
export { default as mkMatch } from './fns/match';
export {
  mkCharLetter as mkCharLetter,
  mkCharNum as mkCharNum,
  mkCharSpecific as mkCharSpecific,
  mkCharToBePut as mkCharToBePut
} from './char';