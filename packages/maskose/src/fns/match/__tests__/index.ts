import mkMatch from '..';
import mkCreate from '../../create';
import mkCharToBePut from '../../../mask/chars/toBePut';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharNum from '../../../mask/chars/num';
import mkBoostMask from '../../boostMask';
import mkMaskBoostEndless from '../../../boosts/mask/endless';
import mkMaskBoostRightToLeft from '../../../boosts/mask/rightToLeft';
import mkCharGroup from '../../../mask/chars/group';
import mkCharBoostValueLengthGreaterThan from '../../../boosts/char/valueLengthGreaterThan';

it('should return true when the provided value matches the provided mask (BR cellphone number mask)', () => {
  const mask = mkCreate([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(')'),
    mkCharToBePut(' '),
    mkCharBoostValueLengthGreaterThan({
      masked: 14,
      unmasked: 10
    })(mkCharNum()),
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(4)(mkCharNum())
  ]);
  const mkMatchWithMask = mkMatch(mask);

  expect(mkMatchWithMask('(99) 12345-6789')).toBe(true);
  expect(mkMatchWithMask('(99) 1234-5678')).toBe(true);
});

it('should return true when the provided value don\'t match the provided mask (US currency mask)', () => {
  const mask = mkCreate([
    mkCharGroup([
      mkCharBoostRepeat(3)(mkCharNum()),
      mkCharToBePut(',')
    ]),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(2)(mkCharNum())
  ]);
  const maskBoosted = mkBoostMask(mask)([
    mkMaskBoostEndless(),
    mkMaskBoostRightToLeft()
  ]);
  const mkMatchWithMask = mkMatch(maskBoosted);

  expect(mkMatchWithMask('123,456.55')).toBe(true);
  expect(mkMatchWithMask('123,123,456.55')).toBe(true);
});

it('should return false when the provided value don\'t match the provided mask (BR cellphone number mask)', () => {
  const mask = mkCreate([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(')'),
    mkCharToBePut(' '),
    mkCharBoostValueLengthGreaterThan({
      masked: 14,
      unmasked: 10
    })(mkCharNum()),
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(4)(mkCharNum())
  ]);
  const mkMatchWithMask = mkMatch(mask);

  expect(mkMatchWithMask('(99) 1234A5-6789')).toBe(false);
  expect(mkMatchWithMask('(99) 123B4-5678')).toBe(false);
  expect(mkMatchWithMask('(99) 12345678')).toBe(false);
});

it('should return false when the provided value don\'t match the provided mask (US currency mask)', () => {
  const mask = mkCreate([
    mkCharGroup([
      mkCharBoostRepeat(3)(mkCharNum()),
      mkCharToBePut(',')
    ]),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(2)(mkCharNum())
  ]);
  const maskBoosted = mkBoostMask(mask)([
    mkMaskBoostEndless(),
    mkMaskBoostRightToLeft()
  ]);
  const mkMatchWithMask = mkMatch(maskBoosted);

  expect(mkMatchWithMask('AAAAAA')).toBe(false);
  expect(mkMatchWithMask('123,456.A55')).toBe(false);
});