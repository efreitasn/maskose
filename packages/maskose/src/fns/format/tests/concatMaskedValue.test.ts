import test from 'ava';
import concatMaskedValue from '../concatMaskedValue';

test('should concat the provided characters', t => {
  const currentMaskedValue = 'abcdef';
  const value = '12';
  const rightToLeft = false;
  const result = concatMaskedValue(
    currentMaskedValue,
    value,
    rightToLeft
  );

  t.is(result, 'abcdef12');
});

test('should concat the provided characters when rightToLeft equals true', t => {
  const currentMaskedValue = 'abcdef';
  const value = '12';
  const rightToLeft = true;
  const result = concatMaskedValue(
    currentMaskedValue,
    value,
    rightToLeft
  );

  t.is(result, '12abcdef');
});