import test from 'ava';
import escapeRegExp from '../escapeRegExp';

test('should escape the characters in the provided string that are considered special in a RegExp', t => {
  const result = escapeRegExp('*absjd?ccc[');

  t.is(result, '\\*absjd\\?ccc\\[');
});

test('should returned the provided string if it doesn\'t contain any characters that are considered special in a RegExp', t => {
  const str = 'abcdefgh';
  const result = escapeRegExp(str);

  t.is(result, str);
});