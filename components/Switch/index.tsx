import {ChangeEventHandler, FC} from 'react';
import tw, {styled, css} from 'twin.macro';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
}

const InputWrapper = tw.label`relative`;

const Input = styled.input(() => [
  tw` relative appearance-none`,
  css`
    &:checked + span {
      ${tw`bg-blue-500`};
      &::before {
        left: calc(100%-1px);
        transform: translateX(100%);
      }
    }
    &:focus + span {
      ${tw`ring-2 ring-blue-100`}
    }
    &:focus:checked + span {
      ${tw`ring-2 ring-blue-300`}
    }
  `,
]);

const Slider = styled.span(() => [
  tw`flex cursor-pointer rounded-full w-12 h-6 bg-gray-400 relative`,
  css`
    transition: background-color 0.1s;
    &::before {
      content: '';
      ${tw`absolute rounded-full w-5 h-5 duration-100 bg-white`};
      top: 2px;
      left: 2px;
    }
    &:active::before {
      ${tw`w-6`}
    }
  `,
]);

export const Switch: FC<SwitchProps> = ({disabled, checked, onChange}) => {
  return (
    <InputWrapper>
      <Input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </InputWrapper>
  );
};
