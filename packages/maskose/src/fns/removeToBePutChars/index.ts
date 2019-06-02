import { toBePutCharsRegExp } from '../../mask/chars/toBePut';

export default function mkRemoveToBePutChars(value: string): string {
  const regExp = new RegExp(
    toBePutCharsRegExp.source,
    'g'
  );
  const result = value.replace(regExp, '');

  return result;
}