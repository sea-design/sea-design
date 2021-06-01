import React from 'react';
import tw from 'twin.macro';

export interface SkeletonImageProps {
  style?: React.CSSProperties;
}

const VirtualImage = tw.div`h-24 w-24 bg-gray-200 rounded`;

export const SkeletonImage = (_: SkeletonImageProps) => {
  return <VirtualImage />;
};
