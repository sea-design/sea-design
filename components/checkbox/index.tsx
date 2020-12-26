import * as React from 'react';
import {BaseProps} from '../_base/type';
import tw, {css, styled} from 'twin.macro';

type Size = 'small' | 'default' | 'large';

// type Color = 'primary' | 'success' | 'warning' | 'secondary' | 'info' | 'error';

export interface CheckboxProps extends BaseProps {
  // id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  // isIndeterminate?: boolean;
  // isInvalid?: boolean;
  // isRequired?: boolean;
  label?: string;
  // name?: string;
  value?: string | number;
  size?: Size;
  // color?: Color;
  onChange?: React.ChangeEvent<HTMLInputElement>;
}

const SIZE = {
  small: tw`h-3 w-3`,
  default: tw`h-4 w-4`,
  large: tw`h-6 w-6`,
};
// TODO support colors
// const COLOR = {
//   'primary': tw`border-indigo-500`,
//   'success': tw`border-green-500`,
//   'warning': tw`border-yellow-500`,
//   'secondary': tw`border-gray-400`,
//   'info': tw`border-blue-300`,
//   'error': tw`border-red-500`,
// }

const checkState = (defaultChecked: boolean) => {
  if (defaultChecked) {
    return 'checked';
  } else {
    return ``;
  }
};

const StyledInput: React.FC<CheckboxProps> = styled.input(
  ({
    size = 'default',
    checked = false,
    disabled = false,
    defaultChecked = false,
  }: CheckboxProps) => [
    SIZE[size],
    disabled && `disabled`,
    checked && `checked`,
    checkState(defaultChecked),
    css`
      border-radius: 0.2em;
      visibility: visible;
    `,
  ]
);

// TODO deal with Indeterminate

export const Checkbox: React.FC<CheckboxProps> = ({
  defaultChecked,
  isChecked,
  disabled = true,
  label,
  size,
  value = '',
}: CheckboxProps) => {
  return (
    <label>
      <StyledInput
        type="checkbox"
        size={size}
        disabled={disabled}
        isChecked={isChecked}
        defaultChecked={defaultChecked}
        value={value}
      />
      {label !== undefined && <span>{label}</span>}
    </label>
  );
};
