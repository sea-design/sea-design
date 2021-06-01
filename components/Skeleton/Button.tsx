import React from 'react';
import tw, {styled} from 'twin.macro';

type SIZE = 'large' | 'small' | 'default';
type SHAPE = 'circle' | 'square' | 'round';
export interface SkeletonButton {
  style?: React.CSSProperties;
  size?: SIZE;
  shape?: SHAPE;
}
const getSize = (size: SIZE) => {
  const opt = ['large', 'small', 'default'];
  const finalSize = [tw`h-12 w-16`, tw`h-8 w-12`, tw`h-6 w-8`];
  return finalSize[opt.indexOf(size)];
};

const getShape = (shape: SHAPE) => {
  const opt = ['circle', 'square', 'round'];
  const finalSize = [tw`rounded-full`, tw`rounded-none`, tw`rounded`];
  return finalSize[opt.indexOf(shape)];
};

const VirtualButton = styled.div<SkeletonButton>(
  ({size = 'default', shape = 'round'}: SkeletonButton) => [
    tw`bg-gray-200`,
    getSize(size),
    getShape(shape),
  ]
);

export const SkeletonButton = ({size, shape, style}: SkeletonButton) => {
  return <VirtualButton size={size} shape={shape} style={{...style}} />;
};
