import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Spin} from './index';

export default {
  title: 'Feedback/Spin',
  component: Spin,
} as Meta;

export const Default = () => (
  <>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </>
);

export const TipSpin = () => <Spin tip="加载中..." />;
