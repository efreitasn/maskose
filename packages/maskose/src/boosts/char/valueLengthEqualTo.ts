import { MaskoseBoost } from '..';
import { MaskoseMaskChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the masked value's length
 * and/or the unmasked value's length is/are equal to the provided
 * number(s).
 * 
 * Whether the two conditions or only one of them will be checked changes
 * from fn to fn. Despite this, both of them must be provided.
 */
export default function mkCharBoostValueLengthEqualTo(values: {
  masked: number;
  unmasked: number;
}): MaskoseBoost<MaskoseMaskChar> {
  return function mkCharBoostValueLengthEqualToWithNum(char: MaskoseMaskChar): MaskoseMaskChar {
    return {
      ...char,
      valueToBeMaskedLengthConditions: [
        ...char.valueToBeMaskedLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO,
          num: values.unmasked
        }
      ],
      maskedValueLengthConditions: [
        ...char.maskedValueLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO,
          num: values.masked
        }
      ]
    };
  };
}