import {Story, Meta} from '@storybook/react/types-6-0';

import {RadioProps, Radio} from './index';

export default {
  title: 'Input/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: <b>wow</b>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: <b>wow</b>,
};
