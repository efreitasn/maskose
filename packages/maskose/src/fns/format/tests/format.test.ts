import test from 'ava';
import {
  mkCharNum,
  mkCharToBePut,
  mkCharSpecific,
  mkCharLetter,
  MaskoseChar
} from '../../../char';
import mkMask from '../../mask';
import mkFormat from '..';
import mkMaskBoostRightToLeft from '../../../boosts/mask/rightToLeft';
import { MaskoseMask } from '../../..';
import pipe from '../../../utils/pipe';
import mkMaskBoostEndleess from '../../../boosts/mask/endless';
import mkCharBoostPredicateFn from '../../../boosts/char/predicateFn';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should format the value using the provided mask', t => {
  const mask = mkMask([
    mkCharBoostRepeat(5)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(3)(mkCharNum())
  ]);
  const mkFormatWithMask = mkFormat(mask);
  const result = mkFormatWithMask('12345678');

  t.is(result, '12345-678');
});

test('should format the value using the provided mask (2)', t => {
  const mask = mkMask([
    mkCharToBePut('('),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(')'),
    mkCharToBePut(' '),
    mkCharBoostPredicateFn(({ value }) => value.length === 11)(mkCharNum()),
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(4)(mkCharNum())
  ]);
  const mkFormatWithMask = mkFormat(mask);

  t.is(mkFormatWithMask('9912345678'), '(99) 1234-5678');
  t.is(mkFormatWithMask('99123456789'), '(99) 12345-6789');
});

test('should format the value using the provided mask (3)', t => {
  const mask = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharSpecific('-'),
    mkCharLetter(),
    mkCharToBePut('/'),
    mkCharNum()
  ]);
  const mkFormatWithMask = mkFormat(mask);

  t.is(mkFormatWithMask('1234-A2'), '1234-A/2');
  t.is(mkFormatWithMask('1234BA2'), '1234');
});

test('should return an empty string when the provided value is an empty string', t => {
  const mask = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharSpecific('-'),
    mkCharLetter(),
    mkCharToBePut('/'),
    mkCharNum()
  ]);
  const mkFormatWithMask = mkFormat(mask);

  t.is(mkFormatWithMask(''), '');
});

test('should format the value using the provided mask when using rightToLeft', t => {
  const makeMask = pipe<MaskoseChar[], MaskoseMask>(
    mkMask,
    mkMaskBoostRightToLeft
  );
  const mask = makeMask([
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut(','),
    mkCharBoostRepeat(2)(mkCharNum())
  ]);
  const mkFormatWithMask = mkFormat(mask);

  t.is(mkFormatWithMask('1234'), '12,34');
  t.is(mkFormatWithMask('1234567'), '12.345,67');
  t.is(mkFormatWithMask('12345'), '123,45');
});

test('should format the value using the provided mask when using endless', t => {
  const makeMask = pipe<MaskoseChar[], MaskoseMask>(
    mkMask,
    mkMaskBoostEndleess
  );
  const mask = makeMask([
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut(','),
    mkCharBoostRepeat(2)(mkCharNum())
  ]);
  const mkFormatWithMask = mkFormat(mask);

  t.is(mkFormatWithMask('12345671234567'), '12.345,671234567');
});

test.only('should format the value using the provided mask when using endless and rightToLeft', t => {
  const makeMask = pipe<MaskoseChar[], MaskoseMask>(
    mkMask,
    mkMaskBoostEndleess,
    mkMaskBoostRightToLeft
  );
  const mask = makeMask([
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut(','),
    mkCharBoostRepeat(2)(mkCharNum())
  ]);
  const mkFormatWithMask = mkFormat(mask);

  t.is(mkFormatWithMask('12345671234567'), '123456712.345,67');
});