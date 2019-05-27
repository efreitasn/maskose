import test from 'ava';
import mkCharBoostRepeat from '../repeat';
import { mkCharLetter } from '../../../char';

test('should match the object returned by mkCharBoostRepeat()', t => {
  const mkCharBoostRepeatWithNum = mkCharBoostRepeat(4);
  const result = mkCharBoostRepeatWithNum(mkCharLetter());

  t.snapshot(result);
});