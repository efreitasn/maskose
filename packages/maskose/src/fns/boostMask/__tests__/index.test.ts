import mkBoostMask from '..';
import mkCharNum from '../../../mask/chars/num';
import mkCreate from '../../create';
import mkCharToBePut from '../../../mask/chars/toBePut';
import mkCharLetter from '../../../mask/chars/letter';
import { mkMaskBoostEndless, mkMaskBoostRightToLeft } from '../../..';

it('should match the object returned by mkBoostMask()()', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharToBePut('-'),
    mkCharLetter()
  ]);
  const result = mkBoostMask(mask)([
    mkMaskBoostEndless(),
    mkMaskBoostRightToLeft()
  ]);

  expect(result).toMatchSnapshot();
});