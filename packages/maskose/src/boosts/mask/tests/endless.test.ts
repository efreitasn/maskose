import test from 'ava';
import mkCreate from '../../../fns/create';
import { mkCharNum, mkCharLetter, mkCharToBePut } from '../../../char';
import mkCreateBoostEndleess from '../endless';
import mkMaskBoostRightToLeft from '../rightToLeft';

test('should make a mask endless', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharLetter()
  ]);
  const result = mkCreateBoostEndleess()(mask);

  t.is(result.endless, true);
});

test('should throw an error if the last character of the provided mask is a toBePut', t => {
  const mask = mkCreate([
    mkCharNum(),
    mkCharToBePut('A')
  ]);

  t.throws(() => mkCreateBoostEndleess()(mask));
});

test('should throw an error if the last character of the provided mask is a toBePut (2)', t => {
  const mask = mkMaskBoostRightToLeft()(
    mkCreate([
      mkCharToBePut('A'),
      mkCharNum()
    ])
  );

  t.throws(() => mkCreateBoostEndleess()(mask));
});