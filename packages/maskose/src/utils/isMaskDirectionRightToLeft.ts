import {
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
  MaskoseMaskDirection
} from '../mask';

export default function isMaskDirectionRightToLeft(maskDirection: MaskoseMaskDirection) {
  return maskDirection === MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT;
}