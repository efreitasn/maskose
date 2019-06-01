import isMaskValid from '..';
import { mkMaskBoostEndlessWithoutValidations } from '../../../boosts/mask/endless';
import mkCreate from '../../../fns/create';
import mkCharNum from '../../../mask/chars/num';
import mkCharLetter from '../../../mask/chars/letter';
import mkCharToBePut from '../../../mask/chars/toBePut';
import { MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT } from '../../../mask';
import mkCharGroup from '../../../mask/chars/group';
import mkBoostMask from '../../../fns/boostMask';
import { mkMaskBoostRightToLeftWithoutValidations } from '../../../boosts/mask/rightToLeft';

it('should return a truthy value if the provided mask is valid', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter(),
    mkCharToBePut('-')
  ]);
  const result = isMaskValid(mask);

  expect(result.valid).toBe(true);
});

it('should return a falsy value if the provided mask is endless and has a tail equal to a toBePut character', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter(),
    mkCharToBePut('-')
  ]);
  const maskBoosted = mkMaskBoostEndlessWithoutValidations()(mask);
  const result = isMaskValid(maskBoosted);

  expect(result.valid).toBe(false);
  // @ts-ignore
  expect(result.error).toBeDefined();
});

it(`should return a falsy value if the provided mask has a tail equal to a toBePut character (${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT})`, () => {
  const mask = mkCreate([
    mkCharToBePut('-'),
    mkCharNum(),
    mkCharLetter()
  ]);
  const maskBoosted = mkBoostMask(mask)([
    mkMaskBoostEndlessWithoutValidations(),
    mkMaskBoostRightToLeftWithoutValidations()
  ]);
  const result = isMaskValid(maskBoosted);

  expect(result.valid).toBe(false);
  // @ts-ignore
  expect(result.error).toBeDefined();
});

it('should return a falsy value if the provided mask is endless and has a tail equal to a group character that has a tail equal to a toBePutCharacter', () => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter(),
    mkCharGroup([
      mkCharNum(),
      mkCharLetter(),
      mkCharToBePut('A')
    ])
  ]);
  const maskBoosted = mkMaskBoostEndlessWithoutValidations()(mask);
  const result = isMaskValid(maskBoosted);

  expect(result.valid).toBe(false);
  // @ts-ignore
  expect(result.error).toBeDefined();
});

it(`should return a falsy value if the provided mask is endless and has a tail equal to a group character that has a tail equal to a toBePutCharacter (${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT})`, () => {
  const mask = mkCreate([
    mkCharGroup([
      mkCharToBePut('B'),
      mkCharNum(),
      mkCharLetter()
    ]),
    mkCharNum(),
    mkCharLetter()
  ]);
  const maskBoosted = mkBoostMask(mask)([
    mkMaskBoostEndlessWithoutValidations(),
    mkMaskBoostRightToLeftWithoutValidations()
  ]);
  const result = isMaskValid(maskBoosted);

  expect(result.valid).toBe(false);
  // @ts-ignore
  expect(result.error).toBeDefined();
});