import isAToBePutCharStr from '..';
import { availableToBePutChars } from '../../../mask/chars/toBePut';

it('should return true when the provided string is a valid toBePutCharStr', () => {
  const str = availableToBePutChars[0];
  const result = isAToBePutCharStr(str);

  expect(result).toBe(true);
});

it('should return false when the provided string is not a valid toBePutCharStr', () => {
  const str = 'AA*';
  const result = isAToBePutCharStr(str);

  expect(result).toBe(false);
});