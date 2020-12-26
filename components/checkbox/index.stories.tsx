import {Story, Meta} from '@storybook/react/types-6-0';

import {Checkbox, CheckboxProps} from './index';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultChecked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultChecked: true,
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
  label: 'Checkbox',
};
