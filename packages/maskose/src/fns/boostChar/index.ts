import pipe from '../../utils/pipe';
import { MaskoseMaskChar } from '../../mask/chars';
import { MaskoseBoost } from '../../boosts';

/**
 * Helper to make easier to add multiple boosts to a mask character
 * @param char The mask character to be boosted
 */
export default function mkBoostChar(char: MaskoseMaskChar): (boosts: MaskoseBoost<MaskoseMaskChar>[]) => MaskoseMaskChar {
  return function mkBoostCharWithChar(boosts: MaskoseBoost<MaskoseMaskChar>[]) {
    return pipe<MaskoseMaskChar, MaskoseMaskChar>(...boosts)(char);
  };
}