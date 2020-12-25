import {BaseProps} from '../_base/type';
import {FC} from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface InputProps extends BaseProps {
  disabled?: boolean;
  PlaceHolder?: string;
  iserror?: boolean;
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

const isError = (error: boolean) => {
  return (
    error &&
    tw`
    border-red-400
    `
  );
};

const Inputstyled = styled.input(
  ({disabled = false, iserror = false}: InputProps) => [
    isDisabled(disabled),
    tw`border-gray-400 border rounded-lg p-2 px-3 focus:outline-none focus:ring focus:border-blue-300`,
    isError(iserror),
  ]
);

export const Input: FC<InputProps> = ({
  disabled = false,
  PlaceHolder = '',
  iserror = false,
}: InputProps) => {
  return (
    <Inputstyled
      placeholder={PlaceHolder}
      disabled={disabled}
      iserror={iserror}
    />
  );
};
