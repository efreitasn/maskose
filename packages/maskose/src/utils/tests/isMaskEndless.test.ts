import test from 'ava';
import mkCreate from '../../fns/create';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import isMaskEndless from '../isMaskEndless';

test('should return whether the provided mask is endless', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = isMaskEndless(mask);

  t.is(result, mask.endless);
});