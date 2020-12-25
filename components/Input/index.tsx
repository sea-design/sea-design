import {BaseProps} from '../_base/type';
import {FC} from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface InputProps extends BaseProps {
  disabled?: boolean;
}

const isDisabled = (disabled: boolean) => {
  return (
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `
  );
};

export const Input: FC<InputProps> = styled.input(
  ({disabled = false}: InputProps) => [
    isDisabled(disabled),
    tw`border-gray-400 border rounded-lg p-1`,
  ]
);
