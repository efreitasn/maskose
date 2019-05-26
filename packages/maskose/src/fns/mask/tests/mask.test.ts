import test from 'ava';
import mkMask from '..';
import {
  mkCharNum,
  mkCharRepeat,
  mkCharLetter,
  mkCharToBePut,
  mkCharSpecific
} from '../../../chars';

test('should match the object returned by mkMask()', t => {
  const result = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharLetter(),
    mkCharRepeat(1, mkCharNum()),
    mkCharToBePut('K'),
    mkCharNum(),
    mkCharSpecific('B')
  );

  t.snapshot(result);
});