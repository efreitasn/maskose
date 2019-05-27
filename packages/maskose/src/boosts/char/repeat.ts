import { MaskoseChar } from '../../char';

export default function mkCharBoostRepeat(num: number): (char: MaskoseChar) => MaskoseChar {
  return function mkCharBoostRepeatWithNum(char: MaskoseChar) {
    return {
      ...char,
      repetitions: num
    };
  };
}