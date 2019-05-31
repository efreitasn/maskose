import getValueCharsByMaskDirection from '../getValueCharsByMaskDirection';
import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../mask';

test(`should return the provided value\'s characters in the correct order when the provided direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, () => {
  const value = 'abcdefg1234';
  const result = getValueCharsByMaskDirection(
    MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
    value
  );

  expect(result).toEqual(Array.from(value));
});

test(`should return the provided value\'s characters in the correct order when the provided direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const value = 'abcdefg1234';
  const result = getValueCharsByMaskDirection(
    MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
    value
  );

  expect(result).toEqual(Array.from(value).reverse());
});