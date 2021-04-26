import React from 'react';
import tw from 'twin.macro';
export interface SkeletonTitleProps {
  style?: React.CSSProperties;
  width?: number | string;
}

const H3 = tw.h3`w-3/4 h-4 bg-gray-200 rounded`;

export const SkeletonTitle = ({style, width}: SkeletonTitleProps) => (
  <H3 style={{...style, width}} />
);
