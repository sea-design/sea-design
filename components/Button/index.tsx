import * as React from 'react';
import { BaseProps } from '../_base/type';
import tw, { css, styled, theme } from 'twin.macro';

type Size = 'default' | 'small' | 'large';
type Type = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
export interface ButtonProps extends BaseProps {
  size?: Size;
  type?: Type;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SIZE = {
  default: tw`py-3 px-6`,
  small: tw`py-1 px-1`,
  large: tw`py-4 px-7`,
};

const TYPE = {
  primary: tw`bg-blue-500`,
  secondary: tw`bg-blue-400`,
  tertiary: tw`bg-gray-500`,
  warning: tw`bg-yellow-500`,
  danger: tw`bg-red-500`,
};

export const Button: React.FC<ButtonProps> = styled.button(({ size = 'default', type = 'primary' }: ButtonProps) => [
  tw`text-white rounded`,
  TYPE[type],
  SIZE[size],
  css`
    color: ${theme`colors.white`};
  `,
]);
