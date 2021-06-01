import React, {ChangeEventHandler} from 'react';
import {BaseProps} from '../_base/type';
import tw, {css, styled} from 'twin.macro';

type Size = 'small' | 'default' | 'large';

export interface CheckboxProps extends BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  value?: string | number;
  size?: Size;
  onChange?: ChangeEventHandler;
}

const SIZE = {
  small: tw`h-3 w-3`,
  default: tw`h-4 w-4`,
  large: tw`h-6 w-6`,
};

const StyledInput: React.FC<CheckboxProps> = styled.input(
  ({
    size = 'default',
    checked = false,
    disabled = false,
    defaultChecked = false,
  }: CheckboxProps) => [
    tw`disabled:opacity-50`,
    SIZE[size],
    disabled && `disabled`,
    checked && `checked`,
    defaultChecked && `checked`,
    css`
      border-radius: 0.2em;
      visibility: visible;
    `,
  ]
);

// TODO deal with Indeterminate

export const Checkbox: React.FC<CheckboxProps> = ({
  defaultChecked,
  disabled = true,
  label,
  size,
  value = '',
  onChange,
}: CheckboxProps) => {
  return (
    <label>
      <StyledInput
        type="checkbox"
        size={size}
        disabled={disabled}
        defaultChecked={defaultChecked}
        value={value}
        onChange={onChange}
      />
      {label !== undefined && <span>{label}</span>}
    </label>
  );
};
