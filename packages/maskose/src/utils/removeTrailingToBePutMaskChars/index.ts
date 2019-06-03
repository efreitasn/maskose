import isAToBePutCharStr from '../isAToBePutCharStr';

function removeTrailingToBePutMaskCharsInternal(str: string): string {
  const lastChar = str[str.length - 1];

  // Base case
  if (!lastChar || !isAToBePutCharStr(lastChar)) {
    return str;
  }

  return removeTrailingToBePutMaskCharsInternal(str.substr(0, str.length - 1));
}

/**
 * Removes trailing toBePut mask chars from the provided value.
 * If this value comes from a right-to-left mask, it's expected
 * that it's already reversed.
 */
export default function removeTrailingToBePutMaskChars(value: string): string {
  return removeTrailingToBePutMaskCharsInternal(value);
}