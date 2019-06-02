import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { MaskoseMask, mkRemoveToBePutChars, mkMaskValue } from 'maskose';

export interface MaskoseInputOnMaskedValueChangeFn {
  (maskedValue: string): void;
};

type Props = JSX.IntrinsicElements['input'] & {
  mask: MaskoseMask;
  onMaskedValueChange: MaskoseInputOnMaskedValueChangeFn;
  maskedValue: string;
};

export default function MaskoseInput({
  mask,
  onMaskedValueChange,
  maskedValue,
  onChange,
  ...props
}: Props) {
  const mkMaskValueWithMask = useMemo(
    () => mkMaskValue(mask),
    [
      mask
    ]
  );
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const valueWithoutToBePutChars = mkRemoveToBePutChars(e.target.value);
      const maskedValue = mkMaskValueWithMask(valueWithoutToBePutChars);
      
      onMaskedValueChange(maskedValue);

      if (onChange) {
        onChange(e);
      }
    },
    [
      onMaskedValueChange,
      onChange,
      mkMaskValueWithMask
    ]
  );

  return (
    <input
      {...props}
      value={maskedValue}
      onChange={onInputChange}
    />
  );
}