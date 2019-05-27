import test from 'ava';
import { mkCharNum, mkCharLetter, mkCharSpecific } from '../../char';
import mkCreate from '../../fns/create';
import getMaskTail from '../getMaskTail';
import mkCharBoostRepeat from '../../boosts/char/repeat';
import mkBoostMask from '../../fns/boostMask';
import mkMaskBoostRightToLeft from '../../boosts/mask/rightToLeft';

test('should return the correct mask tail', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharSpecific('(')
  ]);
  const maskBoosted = mkBoostMask(mask)([
    mkMaskBoostRightToLeft()
  ]);
  const result = getMaskTail(maskBoosted);

  t.is(result, mask.content[0]);
});

test('should return the correct mask tail (2)', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharSpecific('(')
  ]);
  const result = getMaskTail(mask);

  t.is(result, mask.content[mask.content.length - 1]);
});