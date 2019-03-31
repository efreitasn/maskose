import pipe from '../../utils/pipe';
import { MaskoseMask } from '../../mask';
import { MaskoseBoost } from '../../boosts';

/**
 * Helper to make easier to add multiple boosts to a mask
 * @param Mask The mask to be boosted
 */
export default function mkBoostMask(Mask: MaskoseMask): (boosts: MaskoseBoost<MaskoseMask>[]) => MaskoseMask {
  return function mkBoostMaskWithMask(boosts: MaskoseBoost<MaskoseMask>[]) {
    return pipe<MaskoseMask, MaskoseMask>(...boosts)(Mask);
  };
}