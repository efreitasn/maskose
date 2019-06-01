import mkCreate from '../../../fns/create';
import mkCharNum from '../../../mask/chars/num';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharGroup from '../../../mask/chars/group';
import getMaskCharsByMaskDirection from '..';
import {
  MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT,
  MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT
} from '../../../mask';
import mkMaskBoostRightToLeft from '../../../boosts/mask/rightToLeft';
import getMaskDirection from '../../getMaskDirection';

it(`should return the provided mask's characters when its direction is ${MASKOSE_MASK_DIRECTION_LEFT_TO_RIGHT}`, () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharBoostRepeat(4)(mkCharLetter()),
    mkCharGroup([
      mkCharLetter()
    ])
  ]);
  const result = getMaskCharsByMaskDirection(
    mask.chars,
    getMaskDirection(mask)
  );

  expect(result).toEqual(mask.chars);
});

it(`should return the provided mask's characters in a reversed order when its direction is ${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT}`, () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharBoostRepeat(4)(mkCharLetter()),
    mkCharGroup([
      mkCharLetter()
    ])
  ]);
  const maskBoosted = mkMaskBoostRightToLeft()(mask);
  const result = getMaskCharsByMaskDirection(
    maskBoosted.chars,
    getMaskDirection(maskBoosted)
  );

  expect(result).toEqual([...mask.chars].reverse());
});