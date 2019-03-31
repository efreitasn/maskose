import {
  MaskoseChar,
  MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
  MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN,
  MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO
} from '../mask/chars';

export default function isMaskCharValidByValueLength(valueLength: number, maskChar: MaskoseChar) {
  const valueLengthConditionsFiltered = maskChar.valueLengthConditions.filter(condition => {
    switch (condition.type) {
      case MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN:
        return valueLength > condition.num;
      case MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN:
        return valueLength < condition.num;
      case MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO:
        return valueLength === condition.num;
    }
  });

  return valueLengthConditionsFiltered.length === maskChar.valueLengthConditions.length;
}