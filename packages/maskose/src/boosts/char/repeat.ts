import { MaskoseBoost } from '..';
import { MaskoseMaskChar } from '../../mask/chars';

/**
 * Repeats the provided mask character `num` times.
 */
export default function mkCharBoostRepeat(num: number): MaskoseBoost<MaskoseMaskChar> {
  return function mkCharBoostRepeatWithNum(char: MaskoseMaskChar) {
    return {
      ...char,
      repetitions: num
    };
  };
}