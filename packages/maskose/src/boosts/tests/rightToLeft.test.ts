import test from 'ava';
import mkMask from '../../fns/mask';
import { mkCharNum, mkCharLetter } from '../../chars';
import mkBoostRightToLeft from '../rightToLeft';

test('should make a mask rightToLeft', t => {
  const mask = mkMask(
    mkCharNum(),
    mkCharLetter()
  );
  const result = mkBoostRightToLeft(mask);

  t.is(result.rightToLeft, true);
});