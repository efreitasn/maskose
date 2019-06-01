import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../mask';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import getMaskCharsTailByDirection from '../getMaskCharsTailByDirection';

it(`should return the correct tail when the provided mask\'s direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, () => {
  const maskChars = [
    mkCharNum(),
    mkCharLetter()
  ];
  const result = getMaskCharsTailByDirection(
    MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
    maskChars
  );

  expect(result).toBe(maskChars[maskChars.length - 1]);
});

it(`should return the correct tail when the provided mask\'s direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const maskChars = [
    mkCharNum(),
    mkCharLetter()
  ];
  const result = getMaskCharsTailByDirection(
    MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
    maskChars
  );

  expect(result).toBe(maskChars[0]);
});