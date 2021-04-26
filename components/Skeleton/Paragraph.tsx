import React from 'react';
import tw from 'twin.macro';

export interface SkeletonParagraphProps {
  style?: React.CSSProperties;
  rows?: number;
}

const Row = tw.p`h-4 bg-gray-200 rounded `;

export const SkeletonParagraph = (props: SkeletonParagraphProps) => {
  const rows = props.rows || 3;
  return (
    <div tw="space-y-2 py-1">
      {new Array(rows).fill(1).map((_, index) => {
        return <Row key={index}></Row>;
      })}
    </div>
  );
};
