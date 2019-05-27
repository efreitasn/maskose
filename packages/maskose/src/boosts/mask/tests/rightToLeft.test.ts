import test from 'ava';
import mkCreate from '../../../fns/create';
import { mkCharNum, mkCharLetter } from '../../../char';
import mkCreateBoostRightToLeft from '../rightToLeft';

test('should make a mask rightToLeft', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = mkCreateBoostRightToLeft(mask);

  t.is(result.rightToLeft, true);
});