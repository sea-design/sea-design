import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Switch} from './index';

export default {
  title: 'Input/Switch',
  component: Switch,
} as Meta;

export const Default = () => (
  <>
    <Switch />
    <Switch disabled />
    <Switch disabled checked />
  </>
);
