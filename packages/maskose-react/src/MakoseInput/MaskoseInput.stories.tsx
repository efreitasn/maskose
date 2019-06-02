import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import MaskoseInput, { MaskoseInputOnMaskedValueChangeFn } from '.';
import {
  mkCreate,
  mkCharGroup,
  mkCharBoostRepeat,
  mkCharNum,
  mkCharToBePut,
  MaskoseMask,
  mkCharBoostValueLengthGreaterThan,
  mkBoostMask,
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

const brCellphoneNumberMask = mkCreate([
  mkCharToBePut('('),
  mkCharBoostRepeat(2)(mkCharNum()),
  mkCharToBePut(')'),
  mkCharToBePut(' '),
  mkCharBoostValueLengthGreaterThan({
    masked: 14,
    unmasked: 10
  })(mkCharNum()),
  mkCharBoostRepeat(4)(mkCharNum()),
  mkCharToBePut('-'),
  mkCharBoostRepeat(4)(mkCharNum())
]);

const MaskoseInputWrapper = ({
  mask
}: {
  mask: MaskoseMask;
}) => {
  const [maskedValue, setMaskedValue] = useState('');
  const onMaskedValueChange: MaskoseInputOnMaskedValueChangeFn = useCallback(
    (maskedValue: string) => {
      setMaskedValue(maskedValue);
    },
    []
  );

  return (
    <MaskoseInput
      maskedValue={maskedValue}
      mask={mask}
      onMaskedValueChange={onMaskedValueChange}
    />
  );
};

storiesOf('MaskoseInput', module)
  .add('US currency mask', () => (
    <MaskoseInputWrapper
      mask={usCurrencyMask}
    />
  ))
  .add('BR cellphone number mask', () => (
    <MaskoseInputWrapper
      mask={brCellphoneNumberMask}
    />
  ));