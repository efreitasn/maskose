import test from 'ava';
import mkMask from '../../mask';
import { mkCharRepeat, mkCharNum, mkCharToBePut } from '../../../chars';
import clearMaskedValue from '../clearMaskedValue';

test('should clear the provided maskedValue when rightToLeft equals false', t => {
  const mask = mkMask([
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut(','),
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut('-'),
    mkCharRepeat(2, mkCharNum())
  ]);
  const maskedValue = '20,30-';
  const rightToLeft = false;
  const result = clearMaskedValue(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, '20,30');
});

test('should clear the provided maskedValue when rightToLeft equals true', t => {
  const mask = mkMask([
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut(','),
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut('-'),
    mkCharRepeat(2, mkCharNum())
  ]);
  const maskedValue = ',20-30';
  const rightToLeft = true;
  const result = clearMaskedValue(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, '20-30');
});

test('should return the provided maskedValue if there\'s nothing to be cleared', t => {
  const mask = mkMask([
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut(','),
    mkCharRepeat(2, mkCharNum()),
    mkCharToBePut('-'),
    mkCharRepeat(2, mkCharNum())
  ]);
  const maskedValue = '20-30';
  const rightToLeft = true;
  const result = clearMaskedValue(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, '20-30');
});