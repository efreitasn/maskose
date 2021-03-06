import getMaskDirection from '..';
import mkCreate from '../../../fns/create';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';

it('should return the provided mask\'s direction', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = getMaskDirection(mask);

  expect(result).toBe(mask.direction);
});