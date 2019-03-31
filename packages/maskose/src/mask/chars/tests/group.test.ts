import test from 'ava';
import mkCharGroup from '../group';
import mkCharNum from '../num';
import mkCharLetter from '../letter';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should match the object returned by mkCharGroup()', t => {
  const result = mkCharGroup([
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharLetter()
  ]);

  t.snapshot(result);
});

test('should throw an error if the provided array is empty', t => {
  t.throws(() => mkCharGroup([]));
});