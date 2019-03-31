import test from 'ava';
import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../mask';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import getMaskCharsTailByDirection from '../getMaskCharsTailByDirection';

test(`should return the correct tail when the provided mask\'s direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, t => {
  const maskChars = [
    mkCharNum(),
    mkCharLetter()
  ];
  const result = getMaskCharsTailByDirection(
    MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
    maskChars
  );

  t.is(result, maskChars[maskChars.length - 1]);
});

test(`should return the correct tail when the provided mask\'s direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, t => {
  const maskChars = [
    mkCharNum(),
    mkCharLetter()
  ];
  const result = getMaskCharsTailByDirection(
    MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT,
    maskChars
  );

  t.is(result, maskChars[0]);
});