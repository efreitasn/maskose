import test from 'ava';
import mkCreate from '../../../fns/create';
import { mkCharNum, mkCharLetter } from '../../../char';
import mkMaskBoostRightToLeft from '../rightToLeft';

test('should make a mask rightToLeft', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = mkMaskBoostRightToLeft()(mask);

  t.is(result.rightToLeft, true);
});