import {
  MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
  MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN,
  MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO,
  MaskoseMaskCharValueLengthCondition
} from '../mask/chars';

export default function areValueLengthConditionsTrue(
  valueLength: number,
  maskCharValueLengthConditions: MaskoseMaskCharValueLengthCondition[]
) {
  const valueLengthConditionsFiltered = maskCharValueLengthConditions.filter(condition => {
    switch (condition.type) {
      case MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN:
        return valueLength > condition.num;
      case MASKOSE_CHAR_VALUE_LENGTH_CONDITION_LESS_THAN:
        return valueLength < condition.num;
      case MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO:
        return valueLength === condition.num;
    }
  });

  return valueLengthConditionsFiltered.length === maskCharValueLengthConditions.length;
}