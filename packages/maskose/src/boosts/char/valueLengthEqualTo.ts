import { MaskoseBoost } from '..';
import { MaskoseChar, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO } from '../../mask/chars';

/**
 * Make a maskChar only present in a mask if the valueToBeMasked length is equal to num.
 */
export default function mkCharBoostValueLengthEqualTo(values: {
  masked: number;
  toBeMasked: number;
}): MaskoseBoost<MaskoseChar> {
  return function mkCharBoostValueLengthEqualToWithNum(char: MaskoseChar): MaskoseChar {
    return {
      ...char,
      valueToBeMaskedLengthConditions: [
        ...char.valueToBeMaskedLengthConditions,
        {
          type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO,
          num: values.toBeMasked
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