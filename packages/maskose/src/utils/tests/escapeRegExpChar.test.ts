import escapeRegExpChar from '../escapeRegExpChar';

test('should escape the characters in the provided string that are considered special in a RegExp', () => {
  const result = escapeRegExpChar('*absjd?ccc[');

  expect(result).toBe('\\*absjd\\?ccc\\[');
});

test('should returned the provided string if it doesn\'t contain any characters that are considered special in a RegExp', () => {
  const str = 'abcdefgh';
  const result = escapeRegExpChar(str);

  expect(result).toBe(str);
});