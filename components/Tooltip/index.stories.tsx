import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Tooltip} from './index';
import {Button} from '../Button/index';
import tw from 'twin.macro';

export default {
  title: 'Show/Tooltip',
  component: Tooltip,
} as Meta;

export const Default = () => (
  <>
    <h2>Tooltip</h2>
    <p>Move the mouse over the text below:</p>
    <div tw="flex  space-x-8">
      <Tooltip title="这是一段提示">
        <Button>tooltip on top</Button>
      </Tooltip>
      <Tooltip title="这是一段提示" placement="left">
        <Button>ToolTip on left</Button>
      </Tooltip>
      <Tooltip title="这是一段提示" placement="right">
        <Button>ToolTip on right</Button>
      </Tooltip>
      <Tooltip title="这是一段提示" placement="bottom">
        <Button>ToolTip on button</Button>
      </Tooltip>
    </div>
  </>
);
