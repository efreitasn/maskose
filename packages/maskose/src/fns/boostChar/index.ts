import pipe from '../../utils/pipe';
import { MaskoseChar } from '../../mask/chars';
import { MaskoseBoost } from '../../boosts';

/**
 * Helper to make easier to add multiple boosts to a mask character
 * @param char The mask character to be boosted
 */
export default function mkBoostChar(char: MaskoseChar): (boosts: MaskoseBoost<MaskoseChar>[]) => MaskoseChar {
  return function mkBoostCharWithChar(boosts: MaskoseBoost<MaskoseChar>[]) {
    return pipe<MaskoseChar, MaskoseChar>(...boosts)(char);
  };
}