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