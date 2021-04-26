import React from 'react';
import tw, {styled} from 'twin.macro';

export interface SkeletonProps {
  children?: React.ReactNode;
  active?: boolean;
}

export const Skeleton = ({active = true, ...rest}: SkeletonProps) => {
  const pulse = () => {
    if (active) {
      return tw`animate-pulse`;
    }
  };
  const StyledSkeleton = styled.div(() => [pulse(), tw`space-x-4 space-y-4  `]);
  return <StyledSkeleton>{rest.children}</StyledSkeleton>;
};
