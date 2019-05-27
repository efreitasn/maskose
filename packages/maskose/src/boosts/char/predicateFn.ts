import { MaskoseChar, MaskoseCharPredicateFn } from '../../chars';

export default function mkCharBoostPredicateFn(predicateFn: MaskoseCharPredicateFn): (char: MaskoseChar) => MaskoseChar {
  return function mkCharBoostPredicateFnWithFn(char: MaskoseChar) {
    return {
      ...char,
      predicateFn
    };
  };
}