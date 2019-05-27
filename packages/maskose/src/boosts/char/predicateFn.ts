import { MaskoseChar, MaskoseCharPredicateFn } from '../../char';
import { MaskoseBoost } from '../..';

export default function mkCharBoostPredicateFn(predicateFn: MaskoseCharPredicateFn): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostPredicateFnWithFn(char: MaskoseChar) {
    return {
      ...char,
      predicateFn
    };
  };
}