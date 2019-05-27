import test from 'ava';
import regExpStrFromMask from '../regExpStrFromMask';
import mkCreate from '../../create';
import {
  mkCharNum,
  mkCharSpecific,
  mkCharLetter,
  mkCharToBePut
} from '../../../char';
import mkCharBoostRepeat from '../../../boosts/char/repeat';
import mkCharBoostPredicateFn from '../../../boosts/char/predicateFn';

test('should return the correct regExpStr from the provided mask', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharSpecific('-'),
    mkCharLetter(),
    mkCharToBePut('Z')
  ]);
  const value = 'any';
  const result = regExpStrFromMask(
    mask,
    value
  );

  t.is(result, '[0-9][0-9][0-9][0-9]-[a-zA-Z]Z');
});

test('should return the correct regExpStr from the provided mask (2)', t => {
  const mask = mkCreate([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharBoostPredicateFn(
      ({ value }) => value.length === 4
    )(mkCharSpecific('-')),
    mkCharLetter(),
    mkCharToBePut('Z')
  ]);
  const value = 'any';
  const result = regExpStrFromMask(
    mask,
    value
  );

  t.is(result, '[0-9][0-9][0-9][0-9][a-zA-Z]Z');
});