import { toBePutCharsRegExp } from '../../mask/chars/toBePut';

/**
 * Remove all characters of the provided value that are toBePut mask
 * characters.
 */
export default function mkRemoveToBePutChars(value: string): string {
  const regExp = new RegExp(
    toBePutCharsRegExp.source,
    'g'
  );
  const result = value.replace(regExp, '');

  return result;
}