import { MaskoseBoost } from '..';
import { MaskoseMaskChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the masked value's length
 * and/or the unmasked value's length is/are greater than the provided
 * number(s).
 *
 * Whether the two conditions or only one of them will be checked changes
 * from fn to fn. Despite this, both of them must be provided.
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