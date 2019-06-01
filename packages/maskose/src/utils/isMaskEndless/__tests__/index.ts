import isMaskEndless from '..';
import mkCreate from '../../../fns/create';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';

it('should return whether the provided mask is endless', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = isMaskEndless(mask);

  expect(result).toBe(mask.endless);
});