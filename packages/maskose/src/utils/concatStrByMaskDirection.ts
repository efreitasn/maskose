import { MaskoseMaskDirection } from '../mask';
import isMaskDirectionRightToLeft from './isMaskDirectionRightToLeft';

export default function concatStrByMaskDirection(
  str: string,
  value: string,
  direction: MaskoseMaskDirection
) {
  if (isMaskDirectionRightToLeft(direction)) {
    return `${value}${str}`;
  }

  return `${str}${value}`;
}