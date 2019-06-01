import {
  MaskoseMaskDirection,
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT
} from '../../mask';
import { MaskoseMaskChar } from '../../mask/chars';

export const TRAVERSE_MASK_CHARS_MASK_MODE = 'mask';
export const TRAVERSE_MASK_CHARS_UNMASK_MODE = 'unmask';

export type TraverseMaskCharsMode =
  | typeof TRAVERSE_MASK_CHARS_MASK_MODE
  | typeof TRAVERSE_MASK_CHARS_UNMASK_MODE
  ;

export interface TraverseMaskCharsState {
  readonly mode: TraverseMaskCharsMode;
  readonly currentMaskCharIteration: number;
  readonly neverChangeMaskCharsByDirectionIndex: boolean;
  readonly direction: MaskoseMaskDirection;
  readonly endless: boolean;
  readonly result: string;
  // Mask chars
  readonly maskCharsByDirection: MaskoseMaskChar[];
  readonly maskCharsByDirectionIndex: number;
  // Value to be masked chars
  readonly valueCharsByDirection: string[];
  readonly valueCharsByDirectionIndex: number;
  // Matching-related data
  readonly maskCharsMatchNum: number;
  readonly maskCharsDidntMatchNum: number;
  readonly valueCharsMatchNum: number;
  readonly valueCharsDidntMatchNum: number;
  readonly stopOnFirstMaskCharMatch: boolean;
  readonly stopOnFirstMaskCharDidntMatch: boolean;
  readonly stopOnFirstValueCharMatch: boolean;
  readonly stopOnFirstValueCharDidntMatch: boolean;
};

export const defaultState: TraverseMaskCharsState = {
  mode: TRAVERSE_MASK_CHARS_MASK_MODE,
  currentMaskCharIteration: 0,
  neverChangeMaskCharsByDirectionIndex: false,
  direction: MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  endless: false,
  result: '',
  maskCharsByDirection: [],
  maskCharsByDirectionIndex: 0,
  valueCharsByDirection: [],
  valueCharsByDirectionIndex: 0,
  maskCharsMatchNum: 0,
  maskCharsDidntMatchNum: 0,
  valueCharsMatchNum: 0,
  valueCharsDidntMatchNum: 0,
  stopOnFirstMaskCharMatch: false,
  stopOnFirstMaskCharDidntMatch: false,
  stopOnFirstValueCharMatch: false,
  stopOnFirstValueCharDidntMatch: true
};