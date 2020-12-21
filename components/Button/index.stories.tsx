import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './index';

export default {
  title: 'Input/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'primary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  children: 'tertiary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'small',
};
