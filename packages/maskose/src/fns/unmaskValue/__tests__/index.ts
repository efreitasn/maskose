import mkUnmaskValue from '..';
import mkCreate from '../../create';
import mkCharNum from '../../../mask/chars/num';
import mkCharToBePut from '../../../mask/chars/toBePut';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharGroup from '../../../mask/chars/group';
import mkBoostMask from '../../boostMask';
import mkMaskBoostEndless from '../../../boosts/mask/endless';
import { mkMaskBoostRightToLeft } from '../../..';
import mkCharBoostValueLengthGreaterThan from '../../../boosts/char/valueLengthGreaterThan';

it('should unmask the provided value (BR cellphone number mask)', () => {
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
  const mkUnmaskValueWithMask = mkUnmaskValue(mask);

  expect(mkUnmaskValueWithMask('(99) 98888-3333')).toBe('99988883333');
  expect(mkUnmaskValueWithMask('(99) 8888-3333')).toBe('9988883333');
  expect(mkUnmaskValueWithMask('(99) AAAA8888-3333')).toBe('99');
});


it('should unmask the provided value (US currency mask)', () => {
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
  const mkUnmaskValueWithMask = mkUnmaskValue(maskBoosted);

  expect(mkUnmaskValueWithMask('1,234.56')).toBe('123456');
  expect(mkUnmaskValueWithMask('123.45')).toBe('12345');
  expect(mkUnmaskValueWithMask('12,345,678,912,345.67')).toBe('1234567891234567');
  expect(mkUnmaskValueWithMask('12W45,678,912,345.67')).toBe('4567891234567');
  expect(mkUnmaskValueWithMask('')).toBe('');
});