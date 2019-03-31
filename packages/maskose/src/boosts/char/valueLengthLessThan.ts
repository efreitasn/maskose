import { MaskoseBoost } from '..';
import { MaskoseChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the valueToBeMasked length is less than num.
 */
export default function mkCharBoostValueLengthLessThan(num: number): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostValueLengthLessThanWithNum(char: MaskoseChar): MaskoseChar {
    return {
      ...char,
      valueLengthConditions: [
        ...char.valueLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN,
          num
        }
      ]
    };
  };
}