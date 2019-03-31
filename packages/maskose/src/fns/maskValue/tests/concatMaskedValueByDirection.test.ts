import test from 'ava';
import {
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT
} from '../../../mask';
import concatMaskedValueByDirection from '../concatMaskedValueByDirection';

test(`should concat the provided values correctly when direction is equal to ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, t => {
  const maskedValue = 'abc-';
  const value = '2';
  const direction = MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT;
  const result = concatMaskedValueByDirection(
    maskedValue,
    value,
    direction
  );

  t.is(result, 'abc-2');
});

test(`should concat the provided values correctly when direction is equal to ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, t => {
  const maskedValue = 'abc-';
  const value = '2';
  const direction = MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT;
  const result = concatMaskedValueByDirection(
    maskedValue,
    value,
    direction
  );

  t.is(result, '2abc-');
});