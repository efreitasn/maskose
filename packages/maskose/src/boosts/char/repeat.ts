import { MaskoseChar } from '../../char';
import { MaskoseBoost } from '../..';

export default function mkCharBoostRepeat(num: number): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostRepeatWithNum(char: MaskoseChar) {
    return {
      ...char,
      repetitions: num
    };
  };
}