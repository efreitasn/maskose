import { MaskoseChar } from '../../char';
import { MaskoseBoost } from '../..';
import pipe from '../../utils/pipe';

export default function mkBoostChar(char: MaskoseChar): (boosts: MaskoseBoost<MaskoseChar>[]) => MaskoseChar {
  return function mkBoostCharWithChar(boosts: MaskoseBoost<MaskoseChar>[]) {
    return pipe<MaskoseChar, MaskoseChar>(...boosts)(char);
  };
}