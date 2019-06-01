import {
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT
} from '../../mask';
import concatMaskedValueByDirection from '../concatMaskedValueByDirection';

it(`should concat the provided values correctly when direction is equal to ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, () => {
  const maskedValue = 'abc-';
  const value = '2';
  const direction = MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT;
  const result = concatMaskedValueByDirection(
    maskedValue,
    value,
    direction
  );

  expect(result).toBe('abc-2');
});

it(`should concat the provided values correctly when direction is equal to ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const maskedValue = 'abc-';
  const value = '2';
  const direction = MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT;
  const result = concatMaskedValueByDirection(
    maskedValue,
    value,
    direction
  );

  expect(result).toBe('2abc-');
});