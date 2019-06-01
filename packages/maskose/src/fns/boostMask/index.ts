import pipe from '../../utils/pipe';
import { MaskoseMask } from '../../mask';
import { MaskoseBoost } from '../../boosts';

/**
 * Add a list of boosts to a mask.
 */
export default function mkBoostMask(Mask: MaskoseMask): (boosts: MaskoseBoost<MaskoseMask>[]) => MaskoseMask {
  return function mkBoostMaskWithMask(boosts: MaskoseBoost<MaskoseMask>[]) {
    return pipe<MaskoseMask, MaskoseMask>(...boosts)(Mask);
  };
}