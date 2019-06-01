import pipe from '../../utils/pipe';
import { MaskoseMaskChar } from '../../mask/chars';
import { MaskoseBoost } from '../../boosts';

/**
 * Add a list of boosts to a mask character.
 */
export default function mkBoostChar(char: MaskoseMaskChar): (boosts: MaskoseBoost<MaskoseMaskChar>[]) => MaskoseMaskChar {
  return function mkBoostCharWithChar(boosts: MaskoseBoost<MaskoseMaskChar>[]) {
    return pipe<MaskoseMaskChar, MaskoseMaskChar>(...boosts)(char);
  };
}