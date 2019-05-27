import test from 'ava';
import pipe from '../pipe';
import { MaskoseChar, mkCharRepeat, mkCharNum, mkCharLetter, mkCharSpecific } from '../../chars';
import { MaskoseMask } from '../..';
import mkMask from '../../fns/mask';
import arrayToArgs from '../arrayToArgs';
import mkBoostRightToLeft from '../../boosts/rightToLeft';
import getMaskTail from '../getMaskTail';

test('should return the correct mask tail', t => {
  const createMask = pipe<MaskoseChar[], MaskoseMask>(
    mkBoostRightToLeft,
    arrayToArgs(mkMask)
  );
  const mask = createMask([
    mkCharRepeat(4, mkCharNum()),
    mkCharLetter(),
    mkCharSpecific('(')
  ]);
  const result = getMaskTail(mask);

  t.is(result, mask.content[0]);
});

test('should return the correct mask tail (2)', t => {
  const mask = mkMask(
    mkCharRepeat(4, mkCharNum()),
    mkCharLetter(),
    mkCharSpecific('(')
  );
  const result = getMaskTail(mask);

  t.is(result, mask.content[mask.content.length - 1]);
});