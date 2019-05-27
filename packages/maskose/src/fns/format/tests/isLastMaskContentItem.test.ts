import test from 'ava';
import mkMask from '../../mask';
import {
  mkCharNum,
  mkCharLetter,
  mkCharToBePut
} from '../../../chars';
import isLastMaskContentItem from '../isLastMaskContentItem';
import mkCharBoostRepeat from '../../../boosts/char/repeat';

test('should return true when the provided contentItem is the last one of the provided mask when rightToLeft equals false', t => {
  const mask = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharToBePut('A')
  ]);
  const result = isLastMaskContentItem(
    mask,
    mask.content[mask.content.length - 1]
  );

  t.is(result, true);
});

test('should return true when the provided contentItem is the last one of the provided mask when rightToLeft equals true', t => {
  const mask = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharToBePut('A')
  ]);
  const result = isLastMaskContentItem(
    mask,
    mask.content[0],
    true
  );

  t.is(result, true);
});

test('should return false when the provided contentItem is not the last one of the provided mask when rightTOLeft equals false', t => {
  const mask = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharToBePut('A')
  ]);
  const result = isLastMaskContentItem(
    mask,
    mask.content[0]
  );

  t.is(result, false);
});

test('should return false when the provided contentItem is not the last one of the provided mask when rightTOLeft equals true', t => {
  const mask = mkMask([
    mkCharBoostRepeat(4)(mkCharNum()),
    mkCharLetter(),
    mkCharToBePut('A')
  ]);
  const result = isLastMaskContentItem(
    mask,
    mask.content[mask.content.length - 1],
    true
  );

  t.is(result, false);
});