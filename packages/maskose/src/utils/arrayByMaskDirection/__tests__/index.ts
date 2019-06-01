import arrayByMaskDirection from '..';
import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../../mask';

it(`should return the provided array when the provided direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, () => {
  const arr = [
    1,
    2,
    3,
    4
  ];
  const result = arrayByMaskDirection<number>(
    MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
    arr
  );

  expect(result).toEqual(arr);
});

it(`should return the provided mask's characters in a reversed order when its direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const arr = [
    1,
    2,
    3,
    4
  ];
  const result = arrayByMaskDirection<number>(
    MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
    arr
  );

  expect(result).toEqual([...arr].reverse());
});