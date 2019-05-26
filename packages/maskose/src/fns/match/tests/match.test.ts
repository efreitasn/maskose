import test from 'ava';
import mkMask from '../../mask';
import {
  mkCharNum,
  mkCharLetter,
  mkCharRepeat,
  mkCharSpecific,
  mkCharToBePut,
  mkCharPredicateFn
} from '../../../chars';
import mkMatch from '..';

test('should return true when the provided value matches the provided mask', t => {
  const mask = mkMask(
    mkCharNum(),
    mkCharLetter(),
    mkCharRepeat(3, mkCharSpecific('A')),
    mkCharNum(),
    mkCharToBePut('Z')
  );
  const mkMatchWithOptions = mkMatch({
    mask
  });

  t.is(mkMatchWithOptions('1BAAA0Z'), true);
});

test('should return true when the provided value matches the provided mask (2)', t => {
  const mask = mkMask(
    mkCharNum(),
    mkCharPredicateFn(
      ({ value }) => value.length === 7,
      mkCharLetter()
    ),
    mkCharRepeat(3, mkCharSpecific('5')),
    mkCharNum(),
    mkCharToBePut('Z')
  );
  const mkMatchWithOptions = mkMatch({
    mask
  });

  t.is(mkMatchWithOptions('1B5550Z'), true);
  t.is(mkMatchWithOptions('15550Z'), true);
});

test('should return false when the provided value does not match the provided mask', t => {
  const mask = mkMask(
    mkCharNum(),
    mkCharPredicateFn(
      ({ value }) => value.length === 7,
      mkCharLetter()
    ),
    mkCharRepeat(3, mkCharSpecific('5')),
    mkCharNum(),
    mkCharToBePut('Z')
  );
  const mkMatchWithOptions = mkMatch({
    mask
  });

  t.is(mkMatchWithOptions('1B5550'), false);
});