import { MaskoseChar } from '../../chars';

export default function mkCharBoostRepeat(num: number): (char: MaskoseChar) => MaskoseChar {
  return function mkCharBoostRepeatWithNum(char: MaskoseChar) {
    return {
      ...char,
      repetitions: num
    };
  };
}