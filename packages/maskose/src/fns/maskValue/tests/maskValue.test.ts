import mkCreate from '../../create';
import mkMaskBoostEndless from '../../../boosts/mask/endless';
import mkMaskBoostRightToLeft from '../../../boosts/mask/rightToLeft';
import mkCharNum from '../../../mask/chars/num';
import mkCharToBePut from '../../../mask/chars/toBePut';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharBoostValueLengthEqualTo from '../../../boosts/char/valueLengthEqualTo';
import mkMaskValue from '..';
import mkBoostMask from '../../boostMask';
import mkCharGroup from '../../../mask/chars/group';
import mkCharLetter from '../../../mask/chars/letter';

it('should mask the provided value (BR cellphone number mask)', () => {
  const mask = mkCreate([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(')'),
    mkCharToBePut(' '),
    mkCharBoostValueLengthEqualTo({
      masked: 11,
      toBeMasked: 11
    })(mkCharNum()),
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(4)(mkCharNum())
  ]);
  const mkMaskValueWithMask = mkMaskValue(mask);

  expect(mkMaskValueWithMask('9912345678')).toBe('(99) 1234-5678');
  expect(mkMaskValueWithMask('991234')).toBe('(99) 1234');
  expect(mkMaskValueWithMask('99123456789')).toBe('(99) 12345-6789');
});

it('should mask the provided value (US currency mask)', () => {
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
  const mkMaskValueWithMask = mkMaskValue(maskBoosted);

  expect(mkMaskValueWithMask('123456')).toBe('1,234.56');
  expect(mkMaskValueWithMask('12345')).toBe('123.45');
  expect(mkMaskValueWithMask('1234567891234567')).toBe('12,345,678,912,345.67');
  expect(mkMaskValueWithMask('12W4567891234567')).toBe('45,678,912,345.67');
  expect(mkMaskValueWithMask('')).toBe('');
});

it('should mask the provided value (number/letter between parenthesis mask)', () => {
  const mask = mkCreate([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(
      mkCharGroup([
        mkCharBoostRepeat(4)(mkCharNum()),
        mkCharLetter()
      ])
    ),
    mkCharToBePut(')')
  ]);
  const mkMaskValueWithMask = mkMaskValue(mask);

  expect(mkMaskValueWithMask('1234A5678B')).toBe('(1234A5678B)');
});