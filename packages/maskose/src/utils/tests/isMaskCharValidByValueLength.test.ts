import mkCharNum from '../../mask/chars/num';
import isMaskCharValidByValueLength from '../isMaskCharValidByValueLength';
import mkCharBoostValueLengthEqualTo from '../../boosts/char/valueLengthEqualTo';
import mkCharBoostValueLengthGreaterThan from '../../boosts/char/valueLengthGreaterThan';
import mkCharBoostValueLengthLessThan from '../../boosts/char/valueLengthLessThan';
import mkBoostChar from '../../fns/boostChar';

test('should return true when the provided mask character doesn\'t have any valueLengthConditions', () => {
  const maskChar = mkCharNum();
  const result = isMaskCharValidByValueLength(5, maskChar);

  expect(result).toBe(true);
});

test('should return true when the provided mask character\'s valueLengthConditions (equalTo) are met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkCharBoostValueLengthEqualTo(5)(maskChar);
  const result = isMaskCharValidByValueLength(5, maskCharBoosted);

  expect(result).toBe(true);
});

test('should return true when the provided mask character\'s valueLengthConditions (greaterThan) are met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkCharBoostValueLengthGreaterThan(2)(maskChar);
  const result = isMaskCharValidByValueLength(5, maskCharBoosted);

  expect(result).toBe(true);
});

test('should return true when the provided mask character\'s valueLengthConditions (lessThan) are met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkCharBoostValueLengthLessThan(10)(maskChar);
  const result = isMaskCharValidByValueLength(5, maskCharBoosted);

  expect(result).toBe(true);
});

test('should return true when the provided mask character\'s valueLengthConditions (lessThan, greaterThan) are met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkBoostChar(maskChar)([
    mkCharBoostValueLengthGreaterThan(2),
    mkCharBoostValueLengthLessThan(10)
  ]);
  const result = isMaskCharValidByValueLength(5, maskCharBoosted);

  expect(result).toBe(true);
});

test('should return false when the provided mask character\'s valueLengthConditions (equalTo) aren\'t met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkCharBoostValueLengthEqualTo(5)(maskChar);
  const result = isMaskCharValidByValueLength(10, maskCharBoosted);

  expect(result).toBe(false);
});

test('should return false when the provided mask character\'s valueLengthConditions (greaterThan) aren\'t met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkCharBoostValueLengthGreaterThan(10)(maskChar);
  const result = isMaskCharValidByValueLength(5, maskCharBoosted);

  expect(result).toBe(false);
});

test('should return false when the provided mask character\'s valueLengthConditions (lessThan) aren\'t met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkCharBoostValueLengthLessThan(5)(maskChar);
  const result = isMaskCharValidByValueLength(5, maskCharBoosted);

  expect(result).toBe(false);
});

test('should return false when the provided mask character\'s valueLengthConditions (lessThan, greaterThan) aren\'t met', () => {
  const maskChar = mkCharNum();
  const maskCharBoosted = mkBoostChar(maskChar)([
    mkCharBoostValueLengthGreaterThan(2),
    mkCharBoostValueLengthLessThan(10)
  ]);
  const result = isMaskCharValidByValueLength(1, maskCharBoosted);

  expect(result).toBe(false);
});