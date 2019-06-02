import mkRemoveToBePutChars from '..';

it('should return the provided value without toBePut chars', () => {
  expect(mkRemoveToBePutChars('(99) 1234-567)9')).toBe('9912345679');
});