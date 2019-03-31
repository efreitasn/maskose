import { MaskoseBoost } from '..';
import { MaskoseChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the valueToBeMasked length is greater than num.
 */
export default function mkCharBoostValueLengthGreaterThan(num: number): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostValueLengthGreaterThanWithNum(char: MaskoseChar): MaskoseChar {
    return {
      ...char,
      valueLengthConditions: [
        ...char.valueLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
          num
        }
      ]
    };
  };
}