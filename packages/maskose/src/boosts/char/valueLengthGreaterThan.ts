import { MaskoseBoost } from '..';
import { MaskoseMaskChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the valueToBeMasked length is greater than num.
 */
export default function mkCharBoostValueLengthGreaterThan(values: {
  masked: number;
  unmasked: number;
}): MaskoseBoost<MaskoseMaskChar> {
  return function mkCharBoostValueLengthGreaterThanWithNum(char: MaskoseMaskChar): MaskoseMaskChar {
    return {
      ...char,
      valueToBeMaskedLengthConditions: [
        ...char.valueToBeMaskedLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
          num: values.unmasked
        }
      ],
      maskedValueLengthConditions: [
        ...char.maskedValueLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
          num: values.masked
        }
      ]
    };
  };
}