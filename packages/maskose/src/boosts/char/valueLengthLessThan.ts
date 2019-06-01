import { MaskoseBoost } from '..';
import { MaskoseMaskChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the valueToBeMasked length is less than num.
 */
export default function mkCharBoostValueLengthLessThan(values: {
  masked: number;
  toBeMasked: number;
}): MaskoseBoost<MaskoseMaskChar> {
  return function mkCharBoostValueLengthLessThanWithNum(char: MaskoseMaskChar): MaskoseMaskChar {
    return {
      ...char,
      valueToBeMaskedLengthConditions: [
        ...char.valueToBeMaskedLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN,
          num: values.toBeMasked
        }
      ],
      maskedValueLengthConditions: [
        ...char.maskedValueLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN,
          num: values.masked
        }
      ]
    };
  };
}