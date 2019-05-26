import test from 'ava';
import {
  mkCharRepeat,
  mkCharNum,
  mkCharToBePut,
  mkCharPredicateFn,
  mkCharSpecific,
  mkCharLetter
} from '../../../chars';
import mkMask from '../../mask';
import mkFormat from '..';

test('should format the value using the provided mask', t => {
  const mask = mkMask(
    mkCharRepeat(5, mkCharNum()),
    mkCharToBePut('-'),
    mkCharRepeat(3, mkCharNum())
  );
  const mkFormatWithMask = mkFormat({ mask });
  const result = mkFormatWithMask('12345678');

  t.is(result, '12345-678');
});

test('should format the value using the provided mask (2)', t => {
  const mask = mkMask(
    mkCharToBePut('('),
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut(')'),
    mkCharToBePut(' '),
    mkCharPredicateFn(({ value }) => value.length === 11, mkCharNum()),
    mkCharRepeat(4, mkCharNum()),
    mkCharToBePut('-'),
    mkCharRepeat(4, mkCharNum())
  );
  const mkFormatWithMask = mkFormat({ mask });

  t.is(mkFormatWithMask('9912345678'), '(99) 1234-5678');
  t.is(mkFormatWithMask('99123456789'), '(99) 12345-6789');
});

test('should format the value using the provided mask (3)', t => {
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharSpecific('-'),
    mkCharLetter(),
    mkCharToBePut('/'),
    mkCharNum()
  );
  const mkFormatWithMask = mkFormat({ mask });

  t.is(mkFormatWithMask('1234-A2'), '1234-A/2');
  t.is(mkFormatWithMask('1234BA2'), '1234');
});

test('should return an empty string when the provided value is an empty string', t => {
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharSpecific('-'),
    mkCharLetter(),
    mkCharToBePut('/'),
    mkCharNum()
  );
  const mkFormatWithMask = mkFormat({ mask });

  t.is(mkFormatWithMask(''), '');
});

test('should format the value using the provided mask when using rightToLeft', t => {
  const mask = mkMask(
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut('.'),
    mkCharRepeat(3, mkCharNum()),
    mkCharToBePut(','),
    mkCharRepeat(2, mkCharNum())
  );
  const mkFormatWithMask = mkFormat({
    mask,
    rightToLeft: true
  });

  t.is(mkFormatWithMask('1234'), '12,34');
  t.is(mkFormatWithMask('1234567'), '12.345,67');
  t.is(mkFormatWithMask('12345'), '123,45');
});