import mkCharBoostRepeat from '../repeat';
import mkCharNum from '../../../mask/chars/num';

it('should match the object returned by mkCharBoostRepeat()', () => {
  const result = mkCharBoostRepeat(5)(mkCharNum());

  expect(result).toMatchSnapshot();
});