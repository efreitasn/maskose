import test from 'ava';
import mkCreate from '../../fns/create';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import getMaskDirection from '../getMaskDirection';

test('should return the provided mask\'s direction', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = getMaskDirection(mask);

  t.is(result, mask.direction);
});