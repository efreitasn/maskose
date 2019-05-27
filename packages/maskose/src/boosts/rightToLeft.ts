import { MaskoseMask } from '..';

/**
 * Reverses the order in which the mask characters are read.
 */
export default function mkBoostRightToLeft(mask: MaskoseMask): MaskoseMask {
  return {
    ...mask,
    rightToLeft: true
  };
}