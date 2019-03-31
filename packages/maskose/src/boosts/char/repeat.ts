import { MaskoseBoost } from '..';
import { MaskoseChar } from '../../mask/chars';

/**
 * Repeat the provided maskChar `num` times
 */
export default function mkCharBoostRepeat(num: number): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostRepeatWithNum(char: MaskoseChar) {
    return {
      ...char,
      repetitions: num
    };
  };
}