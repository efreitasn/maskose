import test from 'ava';
import getProp from '../getProp';

test('should return the value of the provided prop in the provided object', t => {
  const prop = 'abc';
  const value = 120;
  const obj = {
    [prop]: value
  };
  const result = getProp<typeof obj, typeof prop>(prop)(obj);

  t.is(result, value);
});