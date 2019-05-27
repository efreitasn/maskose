import test from 'ava';
import mkCreate from '../../create';
import { mkCharNum, mkCharToBePut } from '../../../char';
import isLastMaskedValueCharAToBePut from '../isLastMaskedValueCharAToBePut';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should return true when the last maskedValue character is a charToBePut and rightToLeft equals false', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  ]);
  const maskedValue = '1234-';
  const rightToLeft = false;
  const result = isLastMaskedValueCharAToBePut(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, true);
});

test('should return true when the first maskedValue character is a charToBePut and rightToLeft equals true', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  ]);
  const maskedValue = '-2';
  const rightToLeft = true;
  const result = isLastMaskedValueCharAToBePut(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, true);
});

test('should return false when the first maskedValue character is a charToBePut and rightToLeft equals false', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  ]);
  const maskedValue = '-2';
  const rightToLeft = false;
  const result = isLastMaskedValueCharAToBePut(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, false);
});


test('should return false when the last maskedValue character is a charToBePut and rightToLeft equals true', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  ]);
  const maskedValue = '1234-';
  const rightToLeft = true;
  const result = isLastMaskedValueCharAToBePut(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, false);
});