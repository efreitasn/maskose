import { MaskoseMask, MaskoseBoost } from '../..';

/**
 * Reverses the order in which the mask characters are read.
 */
export default function mkMaskBoostRightToLeft(): MaskoseBoost<MaskoseMask> {
  return function mkMaskBoostRightToLeftInternal(mask: MaskoseMask): MaskoseMask {
    return {
      ...mask,
      rightToLeft: true
    };
  };
}