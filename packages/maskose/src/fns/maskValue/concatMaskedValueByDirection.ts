import { MaskoseMaskDirection, MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT } from '../../mask';

export default function concatMaskedValueByDirection(
  maskedValue: string,
  value: string,
  direction: MaskoseMaskDirection
) {
  if (direction === MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT) {
    return `${value}${maskedValue}`;
  }

  return `${maskedValue}${value}`;
}