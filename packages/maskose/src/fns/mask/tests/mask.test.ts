import test from 'ava';
import mkMask from '..';
import {
  mkCharNum,
  mkCharLetter,
  mkCharToBePut,
  mkCharSpecific
} from '../../../chars';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should match the object returned by mkMask()', t => {
  const result = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharBoostRepeat(1)(mkCharNum()),
    mkCharToBePut('K'),
    mkCharNum(),
    mkCharSpecific('B')
  ]);

  t.snapshot(result);
});