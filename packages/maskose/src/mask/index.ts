import { MaskoseChar } from './chars';

export const MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT = 'right-to-left';
export const MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT = 'left-to-right';

export type MaskoseMaskDirection =
  | typeof MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
  | typeof MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT
;

export interface MaskoseMask {
  readonly endless: boolean;
  readonly direction: MaskoseMaskDirection;
  readonly chars: MaskoseChar[];
};