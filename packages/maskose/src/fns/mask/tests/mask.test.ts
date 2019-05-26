import test from 'ava';
import mkMask from '..';
import {
  mkCharNum,
  mkCharRepeat,
  mkCharLetter,
  mkCharToBePut,
  mkCharSpecific,
  mkCharPredicateFn
} from '../../../chars';
import { MASKOSE_CHAR_TO_BE_PUT_TYPE } from '../../../chars/primitives/toBePut';

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

test('should not return the mkChars whose predicateFn() equals false when iterating makeContentIterator()', t => {
  const mask = mkMask(
    mkCharPredicateFn(
      ({ value }) => value.length === 4,
      mkCharToBePut('#')
    ),
    mkCharRepeat(5, mkCharNum())
  );
  const value = '444';
  const iterator = mask.makeContentIterator({
    value
  });

  for (const contentItem of iterator) {
    t.not(contentItem.primitive.type, MASKOSE_CHAR_TO_BE_PUT_TYPE);
  }
});

test('should return all mkChars whose predicateFn() equals true or undefined when iterating makeContentIterator()', t => {
  t.plan(6);

  const mask = mkMask(
    mkCharPredicateFn(
      ({ value }) => value.length === 4,
      mkCharToBePut('#')
    ),
    mkCharRepeat(5, mkCharNum())
  );
  const value = '4444';
  const iterator = mask.makeContentIterator({
    value
  });

  for (const contentItem of iterator) {
    t.truthy(contentItem);
  }
});