import test from 'ava';
import mkMask from '../../mask';
import { mkCharNum, mkCharRepeat, mkCharToBePut } from '../../../chars';
import isLastMaskedValueCharAToBePut from '../isLastMaskedValueCharAToBePut';

test('should return true when the last maskedValue character is a charToBePut and rightToLeft equals false', t => {
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  );
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
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  );
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
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  );
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
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharToBePut('-'),
    mkCharNum()
  );
  const maskedValue = '1234-';
  const rightToLeft = true;
  const result = isLastMaskedValueCharAToBePut(
    maskedValue,
    mask,
    rightToLeft
  );

  t.is(result, false);
});