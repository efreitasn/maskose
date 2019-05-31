import { MaskoseBoost } from '..';
import { MaskoseChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the valueToBeMasked length is greater than num.
 */
export default function mkCharBoostValueLengthGreaterThan(values: {
  masked: number;
  toBeMasked: number;
}): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostValueLengthGreaterThanWithNum(char: MaskoseChar): MaskoseChar {
    return {
      ...char,
      valueToBeMaskedLengthConditions: [
        ...char.valueToBeMaskedLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
          num: values.toBeMasked
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