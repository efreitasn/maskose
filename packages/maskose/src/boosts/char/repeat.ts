import { MaskoseBoost } from '..';
import { MaskoseMaskChar } from '../../mask/chars';

/**
 * Repeat the provided maskChar `num` times
 */
export default function mkCharBoostRepeat(num: number): MaskoseBoost<MaskoseMaskChar> {
  return function mkCharBoostRepeatWithNum(char: MaskoseMaskChar) {
    return {
      ...char,
      repetitions: num
    };
  };
}