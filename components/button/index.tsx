import * as React from 'react';
import { BaseProps } from '../_base/type';
import classnames from 'classnames';

export type Size = 'default' | 'small' | 'large';
export type Type = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
export interface ButtonProps extends BaseProps {
  size?: Size;
  type?: Type;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ size = 'default', type = 'primary', children, onClick }: ButtonProps) => {
  const className = classnames('text-white', 'rounded', {
    'bg-blue-500': type === 'primary',
    'bg-blue-400': type === 'secondary',
    'bg-gray-500': type === 'tertiary',
    'bg-yellow-500': type === 'warning',
    'bg-red-500': type === 'danger',
    'py-3 px-6': size === 'default',
    'py-1 px-1': size === 'small',
    'py-4 px-7': size === 'large',
  });
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
