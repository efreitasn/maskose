import { mkMaskBoostEndlessWithoutValidations } from '../endless';
import mkCreate from '../../../fns/create';
import mkMaskBoostWithValidations from '../withValidations';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharToBePut from '../../../mask/chars/toBePut';

test('should throw an error if the provided mask is invalid', () => {
  const mkMaskBoostEndlessWithValidations = mkMaskBoostWithValidations(mkMaskBoostEndlessWithoutValidations);

  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter(),
    mkCharToBePut('-')
  ]);

  expect(() => mkMaskBoostEndlessWithValidations()(mask)).toThrow();
});