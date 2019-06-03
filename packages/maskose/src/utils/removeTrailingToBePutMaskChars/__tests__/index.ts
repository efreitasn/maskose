import removeTrailingToBePutMaskChars from '..';
import { availableToBePutChars } from '../../../mask/chars/toBePut';

it('should return the provided value with no trailing toBePut mask chars', () => {
  const baseValue = '12345ABCDE';
  const value = `${baseValue}${availableToBePutChars[0]}${availableToBePutChars[1]}${availableToBePutChars[2]}`;
  const result = removeTrailingToBePutMaskChars(value);

  expect(result).toBe(baseValue);
});

it('should return the provided value if there are no trailing toBePut mask chars', () => {
  const value = '12345ABCDE';
  const result = removeTrailingToBePutMaskChars(value);

  expect(result).toBe(value);
});