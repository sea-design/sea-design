import React from 'react';
import {
  SkeletonParagraph,
  Skeleton,
  SkeletonTitle,
  SkeletonImage,
  SkeletonButton,
} from './index';
import {Meta} from '@storybook/react/types-6-0';
import 'twin.macro';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
} as Meta;

export const Pulse = () => (
  <>
    <Skeleton>
      <SkeletonTitle />
      <SkeletonParagraph />
      <SkeletonImage />
      <SkeletonButton />
      <SkeletonButton size={'small'} shape={'round'} />
      <SkeletonButton size={'large'} shape={'circle'} />
    </Skeleton>
  </>
);
export const Unpulse = () => (
  <>
    <Skeleton active={false}>
      <SkeletonTitle />
      <SkeletonParagraph />
      <SkeletonImage />
      <SkeletonButton />
      <SkeletonButton size={'small'} shape={'round'} />
      <SkeletonButton size={'large'} shape={'circle'} />
    </Skeleton>
  </>
);
