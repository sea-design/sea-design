import {BaseProps} from '../_base/type';
import {FC} from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface RadioProps extends BaseProps {
  disabled?: boolean;
  iserror?: boolean;
  name?: string;
  checkeddefault?: boolean;
}

const isDisabled = (disabled: boolean | undefined) => {
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

const RadioStyled = styled.input<RadioProps>(({iserror = false}: RadioProps) => [
  isError(iserror),
  tw`relative invisible cursor-pointer`,
  css`
    &::before {
      content: '';
      border-radius: 50%;
      background-clip: content-box;
      ${tw`block absolute visible w-full h-full border p-0.5 `};
    }
  `,
  css`
    &:checked::before {
      background-color: black;
    }
  `,
]);

const Label = styled.label<RadioProps>(({disabled}: RadioProps) => [
  tw`flex items-center absolute cursor-pointer`,
  isDisabled(disabled),
]);

const Span = styled.span(() => [tw`ml-1`]);

export const Radio: FC<RadioProps> = ({
  iserror = false,
  disabled = false,
  name = 'default',
  children,
}: RadioProps) => {
  return (
  <Label disabled={disabled}>
      <RadioStyled name={name} iserror={iserror} type="radio" />
      {children !== undefined && <Span>{children}</Span>}
    </Label>
  );
};
