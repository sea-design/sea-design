import {FC} from 'react';
import tw, {styled} from 'twin.macro';

type Size = 'large' | 'middle' | 'small';
export interface InputNumberProps {
  min?: number;
  max?: number;
  size?: Size;
  step?: number | string;
  autoFocus?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export const InputNumber: FC<InputNumberProps> = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  size = 'middle',
  step = 1,
  autoFocus = true,
  placeholder = '',
  bordered = false,
  ...rest
}) => {
  const {disabled} = rest;
  const styles = () => {
    let inputStyles = [];
    if (bordered) {
      inputStyles.push(tw` border-2 border-blue-300`);
    }
    if (autoFocus) {
      inputStyles.push(tw`focus:outline-none focus:ring focus:border-blue-100`);
    }
    switch (size) {
      case 'large':
        inputStyles.push(tw`h-10 w-full`);
        break;
      case 'small':
        inputStyles.push(tw`h-6 w-16`);
        break;
      default:
        inputStyles.push(tw`h-8 w-24`);
    }
    if (disabled) {
      inputStyles.push(tw`disabled:opacity-50`);
    }
    return inputStyles;
  };
  const StyledInputNumber = styled.input(() => [
    tw`border-2`,
    tw`rounded`,
    styles(),
  ]);

  return (
    <StyledInputNumber
      type="number"
      min={min}
      max={max}
      step={step}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
