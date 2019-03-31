import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MaskoseMaskDirection
} from '../mask';

export default function isMaskDirectionLeftToRight(maskDirection: MaskoseMaskDirection) {
  return maskDirection === MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT;
}