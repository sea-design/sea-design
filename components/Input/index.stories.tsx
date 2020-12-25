import {Story, Meta} from '@storybook/react/types-6-0';

import {InputProps, Input} from './index';

export default {
  title: 'Input/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  PlaceHolder: 'wow',
};
