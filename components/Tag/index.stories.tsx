import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import Tag from './index';
// import tw from 'twin.macro';

export default {
  title: 'Show/Tag',
  component: Tag,
} as Meta;

export const Default = () => (
  <>
    <Tag>tag</Tag>
    <Tag color="red" visible={true} closable={true}>
      red
    </Tag>
    <Tag color="pink">pink</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="green">green</Tag>
  </>
);

export const Closeable = () => (
  <>
    <Tag>tag</Tag>
    <Tag color="red" closable={true}>
      red
    </Tag>
    <Tag color="pink" closable={true}>
      pink
    </Tag>
    <Tag color="yellow" closable={true}>
      yellow
    </Tag>
    <Tag color="orange" closable={true}>
      orange
    </Tag>
    <Tag color="cyan" closable={true}>
      cyan
    </Tag>
    <Tag color="purple" closable={true}>
      purple
    </Tag>
    <Tag color="green" closable={true}>
      green
    </Tag>
  </>
);
