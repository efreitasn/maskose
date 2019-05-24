import test from 'ava';
import mkCharGroup from '../mkCharGroup';
import mkCharNum from '../mkCharNum';
import mkCharLetter from '../mkCharLetter';

test('should match the object returned by mkCharGroup()', t => {
  const result = mkCharGroup(
    [
      mkCharNum(),
      mkCharLetter()
    ]
  );

  t.snapshot(result);
});