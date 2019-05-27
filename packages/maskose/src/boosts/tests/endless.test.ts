import test from 'ava';
import mkMask from '../../fns/mask';
import { mkCharNum, mkCharLetter, mkCharToBePut } from '../../chars';
import mkBoostEndleess from '../endless';
import mkBoostRightToLeft from '../rightToLeft';

test('should make a mask endless', t => {
  const mask = mkMask(
    mkCharNum(),
    mkCharLetter()
  );
  const result = mkBoostEndleess(mask);

  t.is(result.endless, true);
});

test('should throw an error if the last character of the provided mask is a toBePut', t => {
  const mask = mkMask(
    mkCharNum(),
    mkCharToBePut('A')
  );

  t.throws(() => mkBoostEndleess(mask));
});

test('should throw an error if the last character of the provided mask is a toBePut (2)', t => {
  const mask = mkBoostRightToLeft(
    mkMask(
      mkCharToBePut('A'),
      mkCharNum()
    )
  );

  t.throws(() => mkBoostEndleess(mask));
});