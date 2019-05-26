import test from 'ava';
import regExpStrFromMask from '../regExpStrFromMask';
import mkMask from '../../mask';
import {
  mkCharRepeat,
  mkCharNum,
  mkCharSpecific,
  mkCharLetter,
  mkCharToBePut,
  mkCharPredicateFn
} from '../../../chars';

test('should return the correct regExpStr from the provided mask', t => {
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharSpecific('-'),
    mkCharLetter(),
    mkCharToBePut('Z')
  );
  const value = 'any';
  const result = regExpStrFromMask(
    mask,
    value
  );

  t.is(result, '[0-9][0-9][0-9][0-9]-[a-zA-Z]Z');
});

test('should return the correct regExpStr from the provided mask (2)', t => {
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharPredicateFn(
      ({ value }) => value.length === 4,
      mkCharSpecific('-')
    ),
    mkCharLetter(),
    mkCharToBePut('Z')
  );
  const value = 'any';
  const result = regExpStrFromMask(
    mask,
    value
  );

  t.is(result, '[0-9][0-9][0-9][0-9][a-zA-Z]Z');
});