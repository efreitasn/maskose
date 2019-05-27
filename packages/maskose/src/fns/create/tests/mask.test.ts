import test from 'ava';
import mkCreate from '..';
import {
  mkCharNum,
  mkCharLetter,
  mkCharToBePut,
  mkCharSpecific
} from '../../../char';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should match the object returned by mkCreate()', t => {
  const result = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharBoostRepeat(1)(mkCharNum()),
    mkCharToBePut('K'),
    mkCharNum(),
    mkCharSpecific('B')
  ]);

  t.snapshot(result);
});