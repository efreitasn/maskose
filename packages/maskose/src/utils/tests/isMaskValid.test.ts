import test from 'ava';
import { mkMaskBoostEndlessWithoutValidations } from '../../boosts/mask/endless';
import isMaskValid from '../isMaskValid';
import mkCreate from '../../fns/create';
import mkCharNum from '../../mask/chars/num';
import mkCharLetter from '../../mask/chars/letter';
import mkCharToBePut from '../../mask/chars/toBePut';
import { MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT } from '../../mask';
import mkCharGroup from '../../mask/chars/group';
import mkBoostMask from '../../fns/boostMask';
import { mkMaskBoostRightToLeftWithoutValidations } from '../../boosts/mask/rightToLeft';

test('should return a truthy value if the provided mask is valid', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter(),
    mkCharToBePut('-')
  ]);
  const result = isMaskValid(mask);

  t.true(result.valid);
});

test('should return a falsy value if the provided mask is endless and has a tail equal to a toBePut character', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter(),
    mkCharToBePut('-')
  ]);
  const maskBoosted = mkMaskBoostEndlessWithoutValidations()(mask);
  const result = isMaskValid(maskBoosted);

  t.false(result.valid);
  // @ts-ignore
  t.truthy(result.error);
});

test(`should return a falsy value if the provided mask has a tail equal to a toBePut character (${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT})`, t => {
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

  t.false(result.valid);
  // @ts-ignore
  t.truthy(result.error);
});

test('should return a falsy value if the provided mask is endless and has a tail equal to a group character that has a tail equal to a toBePutCharacter', t => {
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

  t.false(result.valid);
  // @ts-ignore
  t.truthy(result.error);
});

test(`should return a falsy value if the provided mask is endless and has a tail equal to a group character that has a tail equal to a toBePutCharacter (${MASKOSE_MASK_DIRECTION_RIGHT_TO_LEFT})`, t => {
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

  t.false(result.valid);
  // @ts-ignore
  t.truthy(result.error);
});