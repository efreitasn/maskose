import test from 'ava';
import mkCreate from '../../create';
import { mkCharNum, mkCharToBePut } from '../../../char';
import clearMaskedValue from '../clearMaskedValue';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should clear the provided maskedValue when rightToLeft equals false', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(','),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(2)(mkCharNum())
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
  const mask = mkCreate([
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(','),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(2)(mkCharNum())
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
  const mask = mkCreate([
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut(','),
    mkCharBoostRepeat(2)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharBoostRepeat(2)(mkCharNum())
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