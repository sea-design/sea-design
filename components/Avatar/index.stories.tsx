import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './index';

export default {
  title: 'Show/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  url:
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  url:
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
