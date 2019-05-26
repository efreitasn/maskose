import { PrimitiveMaskoseChar } from './chars';
import { MaskoseCharPredicateFnFn } from './chars/nonPrimitives/predicateFn';

export interface MaskoseMaskContentItem {
  readonly primitive: PrimitiveMaskoseChar;
  readonly regExpStr: string;
  readonly predicateFn?: MaskoseCharPredicateFnFn;
};

export interface MaskoseMaskIterateContentOptions {
  value: string;
  reversed?: boolean;
};

export type MaskoseMaskContentIterator = IterableIterator<MaskoseMaskContentItem>;

export interface MaskoseMask {
  readonly content: MaskoseMaskContentItem[];
  readonly makeContentIterator: (options: MaskoseMaskIterateContentOptions) => MaskoseMaskContentIterator;
};