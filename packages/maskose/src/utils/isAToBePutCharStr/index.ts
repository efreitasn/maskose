import { toBePutCharsRegExp } from '../../mask/chars/toBePut';

/**
 * Whether the provided is a valid string to be passed to
 * a toBePut mask character.
 */
export default function isAToBePutCharStr(value: string) {
  if (value.length !== 1) {
    return false;
  }

  return toBePutCharsRegExp.test(value);
}