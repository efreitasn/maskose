import {
  MaskoseMaskDirection,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../mask';

export default function getValueCharsByMaskDirection(maskDirection: MaskoseMaskDirection, value: string) {
  if (maskDirection === MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT) {
    return Array.from(value).reverse();
  }

  return Array.from(value);
}