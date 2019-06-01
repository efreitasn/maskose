import areValueLengthConditionsTrue from '../areValueLengthConditionsTrue';
import { MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO, MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN } from '../../mask/chars';

it('should return true when the provided provided array conditions is empty', () => {
  const result = areValueLengthConditionsTrue(
    5,
    []
  );

  expect(result).toBe(true);
});

it('should return true when the provided conditions are true', () => {
  const result = areValueLengthConditionsTrue(
    5,
    [
      {
        type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_EQUAL_TO,
        num: 5
      }
    ]
  );

  expect(result).toBe(true);
});

it('should return false when the provided conditions are false', () => {
  const result = areValueLengthConditionsTrue(
    5,
    [
      {
        type: MASKOSE_CHAR_VALUE_LENGTH_CONDITION_GREATER_THAN,
        num: 10
      }
    ]
  );

  expect(result).toBe(false);
});