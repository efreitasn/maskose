import test from 'ava';
import getValueChar from '../getValueChar';

test('should return the correct character', t => {
  const counter = 1;
  const value = 'abcdef';
  const rightToLeft = false;
  const result = getValueChar(
    counter,
    value,
    rightToLeft
  );

  t.is(result, 'b');
});

test('should return the correct character when rightToLeft equals true', t => {
  const counter = 3;
  const value = 'abcdef';
  const rightToLeft = true;
  const result = getValueChar(
    counter,
    value,
    rightToLeft
  );

  t.is(result, 'c');
});