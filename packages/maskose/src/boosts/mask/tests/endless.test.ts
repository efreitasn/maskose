import test from 'ava';
import mkCreate from '../../../fns/create';
import mkMaskBoostEndless from '../endless';
import isMaskEndless from '../../../utils/isMaskEndless';
import mkCharNum from '../../../mask/chars/num';
import mkCharToBePut from '../../../mask/chars/toBePut';
import mkCharLetter from '../../../mask/chars/letter';

test('should make the provided mask an endless mask', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharToBePut('-'),
    mkCharLetter()
  ]);
  const maskBoosted = mkMaskBoostEndless()(mask);

  t.true(isMaskEndless(maskBoosted));
});