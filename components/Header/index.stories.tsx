import {Story, Meta} from '@storybook/react/types-6-0';

import {Header, HeaderProps} from './index';

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <Header {...args}>Header</Header>
);

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
  height: 'default',
};

export const White = Template.bind({});
White.args = {
  color: 'white',
};

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  height: 'default',
};
