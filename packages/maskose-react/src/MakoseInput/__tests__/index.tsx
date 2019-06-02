import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MaskoseInput from '..';
import {
  mkCreate,
  mkBoostMask,
  mkCharGroup,
  mkCharBoostRepeat,
  mkCharNum,
  mkCharToBePut,
  mkMaskBoostEndless,
  mkMaskBoostRightToLeft,
  MaskoseMask
} from 'maskose';

const usCurrencyMask = mkBoostMask(
  mkCreate([
    mkCharGroup([
      mkCharBoostRepeat(3)(mkCharNum()),
      mkCharToBePut(',')
    ]),
    mkCharBoostRepeat(3)(mkCharNum()),
    mkCharToBePut('.'),
    mkCharBoostRepeat(2)(mkCharNum())
  ])
)([
  mkMaskBoostEndless(),
  mkMaskBoostRightToLeft()
]);

const setup = (mask: MaskoseMask) => {
  const onMaskedValueChangeFn = jest.fn();
  const utils = render((
    <MaskoseInput
      onMaskedValueChange={onMaskedValueChangeFn}
      placeholder="Currency"
      mask={mask}
      maskedValue=""
    />
  ));
  const input = (utils.getByPlaceholderText('Currency') as HTMLInputElement);

  return {
    ...utils,
    onMaskedValueChangeFn,
    input
  };
};

it('should call the onMaskedValueChange prop with the entered value masked', () => {
  const {
    input,
    onMaskedValueChangeFn
  } = setup(usCurrencyMask);

  fireEvent.change(
    input,
    {
      target: {
        value: '123456789'
      }
    }
  );

  expect(onMaskedValueChangeFn).toHaveBeenCalledWith('1,234,567.89');
});