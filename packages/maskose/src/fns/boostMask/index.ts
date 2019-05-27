import { MaskoseBoost, MaskoseMask } from '../..';
import pipe from '../../utils/pipe';

export default function mkBoostMask(Mask: MaskoseMask): (boosts: MaskoseBoost<MaskoseMask>[]) => MaskoseMask {
  return function mkBoostMaskWithMask(boosts: MaskoseBoost<MaskoseMask>[]) {
    return pipe<MaskoseMask, MaskoseMask>(...boosts)(Mask);
  };
}