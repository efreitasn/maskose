import test from 'ava';
import mkCharBoostPredicateFn from '../predicateFn';
import { mkCharNum } from '../../../chars';

test('should match the object returned by mkCharBoostPredicateFn()', t => {
  const mkCharBoostPredicateFnWithFn = mkCharBoostPredicateFn(
    ({ value }) => value.length > 4
  );
  const result = mkCharBoostPredicateFnWithFn(mkCharNum());

  t.snapshot(result);
});