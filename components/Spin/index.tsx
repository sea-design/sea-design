import {FC} from 'react';
import tw, {styled, css} from 'twin.macro';

type SIZE = 'small' | 'default' | 'large';

export interface SpinProps {
  size?: SIZE;
  spinning?: boolean;
  tip?: string;
}
const getSize = (size: SIZE) => {
  switch (size) {
    case 'small':
      return tw`w-8 h-8`;
    case 'large':
      return tw`w-12 h-12`;
    default:
      return tw`w-10 h-10`;
  }
};

const SpanItem = styled.span<SpinProps>((props: SpinProps) => [
  props.size && getSize(props.size),
  tw`rounded-full border-4 border-gray-200 animate-spin`,
  css`
    border-top: 4px solid blue;
    border-bottom: 4px solid blue;
  `,
]);

export const Spin: FC<SpinProps> = ({
  size = 'default',
  spinning = true,
  tip = '',
}) => {
  return (
    <div tw="flex flex-col items-center justify-center ">
      {spinning && <SpanItem size={size} spinning={spinning} />}
      {tip ? <span>{tip}</span> : null}
    </div>
  );
};
