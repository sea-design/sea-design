import React from 'react';
import {Meta} from '@storybook/react/types-6-0';

import {InputNumber} from './index';

export default {
  title: 'Input/InputNumber',
  component: InputNumber,
} as Meta;

export const Size = () => (
  <>
    <InputNumber min={1} max={10} size="large" placeholder="Input number" />
    <br />
    <InputNumber min={0} max={50} size="middle" bordered={true} />
    <br />
    <InputNumber min={1} max={10} size="small" />
  </>
);

export const Step = () => (
  <>
    <InputNumber min={1} max={50} size="large" step={1} />
    <br />
    <InputNumber min={-1} max={50} size="middle" step={10} />
    <br />
    <InputNumber min={1} max={50} size="small" step={0.001} />
  </>
);

export const Disabled = () => <InputNumber disabled={true} />;
