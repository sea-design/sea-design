import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {BackTop} from './index';

export default {
  title: 'Navigation/BackTop',
  component: BackTop,
} as Meta;

const box = {
  height: 1000,
};
export const Default = () => (
  <>
    <BackTop />
    <div style={box}>top</div>
  </>
);
