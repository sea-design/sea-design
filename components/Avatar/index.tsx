import * as React from 'react';
import {BaseProps} from '../_base/type';
import tw, {css, styled} from 'twin.macro';

type Size = 'default' | 'small' | 'large';
type Shape = 'square' | 'rounded';

export interface AvatarProps extends BaseProps {
  shape?: Shape;
  size?: Size;
  src?: string;
}

const SIZE = {
  default: tw`h-8 w-8 `,
  small: tw`h-6 w-6`,
  large: tw`h-10 w-10`,
};

const SHAPE = {
  square: tw`rounded-none`,
  rounded: tw`rounded-full`,
};

const AvatarSpan: React.FC<AvatarProps> = styled.div(
  ({shape = 'square', size = 'default'}: AvatarProps) => [
    SHAPE[shape],
    SIZE[size],
    css`
      overflow: hidden;
    `,
  ]
);
export const Avatar: React.FC<AvatarProps> = ({
  shape,
  size,
  src,
}: AvatarProps) => {
  return (
    <AvatarSpan shape={shape} size={size}>
      <img src={src} />
    </AvatarSpan>
  );
};
