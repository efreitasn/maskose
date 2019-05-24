import test from 'ava';
import mkCharRepeat from '../mkCharRepeat';
import mkCharNum from '../mkCharNum';
import mkCharGroup from '../mkCharGroup';
import mkCharLetter from '../mkCharLetter';

test('should match the object returned by mkCharRepeat()', t => {
  const result = mkCharRepeat(
    5,
    mkCharRepeat(
      1,
      mkCharGroup(
        [
          mkCharNum(),
          mkCharLetter()
        ]
      )
    )
  );

  t.snapshot(result);
});