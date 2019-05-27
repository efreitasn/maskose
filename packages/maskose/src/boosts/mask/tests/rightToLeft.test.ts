import test from 'ava';
import mkMask from '../../../fns/mask';
import { mkCharNum, mkCharLetter } from '../../../chars';
import mkMaskBoostRightToLeft from '../rightToLeft';

test('should make a mask rightToLeft', t => {
  const mask = mkMask([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = mkMaskBoostRightToLeft(mask);

  t.is(result.rightToLeft, true);
});