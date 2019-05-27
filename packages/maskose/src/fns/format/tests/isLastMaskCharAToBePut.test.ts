import test from 'ava';
import mkCreate from '../../create';
import { mkCharNum, mkCharToBePut } from '../../../char';
import isLastMaskCharAToBePut from '../isLastMaskCharAToBePut';

test('should return true when the last mask character is a charToBePut and rightToLeft equals false', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharToBePut('-')
  ]);
  const rightToLeft = false;
  const result = isLastMaskCharAToBePut(
    mask,
    rightToLeft
  );

  t.is(result, true);
});

test('should return true when the first mask character is a charToBePut and rightToLeft equals true', t => {
  const mask = mkCreate([
    mkCharToBePut('-'),
    mkCharNum()
  ]);
  const rightToLeft = true;
  const result = isLastMaskCharAToBePut(
    mask,
    rightToLeft
  );

  t.is(result, true);
});

test('should return false when the last mask character is a charToBePut and rightToLeft equals true', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharToBePut('-')
  ]);
  const rightToLeft = true;
  const result = isLastMaskCharAToBePut(
    mask,
    rightToLeft
  );

  t.is(result, false);
});

test('should return false when the first mask character is a charToBePut and rightToLeft equals false', t => {
  const mask = mkCreate([
    mkCharToBePut('-'),
    mkCharNum()
  ]);
  const rightToLeft = false;
  const result = isLastMaskCharAToBePut(
    mask,
    rightToLeft
  );

  t.is(result, false);
});