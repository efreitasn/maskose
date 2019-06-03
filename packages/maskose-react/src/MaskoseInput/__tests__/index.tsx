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
  mkMaskBoostRightToLeft
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

it('should call the onMaskedValueChange prop with the entered value masked', () => {
  const onMaskedValueChangeFn = jest.fn();
  const utils = render((
    <MaskoseInput
      onMaskedValueChange={onMaskedValueChangeFn}
      placeholder="Currency"
      mask={usCurrencyMask}
      maskedValue=""
    />
  ));
  const input = (utils.getByPlaceholderText('Currency') as HTMLInputElement);

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

it('should call the onChange prop with the entered value masked', () => {
  const onChangeFn = jest.fn();
  const utils = render((
    <MaskoseInput
      onChange={onChangeFn}
      onMaskedValueChange={() => void(0)}
      placeholder="Currency"
      mask={usCurrencyMask}
      maskedValue=""
    />
  ));
  const input = (utils.getByPlaceholderText('Currency') as HTMLInputElement);

  fireEvent.change(
    input,
    {
      target: {
        value: '123456789'
      }
    }
  );

  expect(onChangeFn).toHaveBeenCalledWith(expect.anything());
});