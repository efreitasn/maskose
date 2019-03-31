import test from 'ava';
import mkCreate from '../../fns/create';
import mkCharNum from '../../mask/chars/num';
import mkCharBoostRepeat from '../../boosts/char/repeat';
import mkCharLetter from '../../mask/chars/letter';
import mkCharGroup from '../../mask/chars/group';
import getMaskCharsByDirection from '../getMaskCharsByDirection';
import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../mask';
import mkMaskBoostRightToLeft from '../../boosts/mask/rightToLeft';

test(`should return the provided mask's characters when its direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharBoostRepeat(4)(mkCharLetter()),
    mkCharGroup([
      mkCharLetter()
    ])
  ]);
  const result = getMaskCharsByDirection(mask);

  t.deepEqual(result, mask.chars);
});

test(`should return the provided mask's characters in a reversed order when its direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharBoostRepeat(4)(mkCharLetter()),
    mkCharGroup([
      mkCharLetter()
    ])
  ]);
  const maskBoosted = mkMaskBoostRightToLeft()(mask);
  const result = getMaskCharsByDirection(maskBoosted);

  t.deepEqual(result, [...mask.chars].reverse());
});