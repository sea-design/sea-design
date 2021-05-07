import React from 'react';
import {notify, NotifyContainer} from './index';
import {Meta} from '@storybook/react/types-6-0';
import {Button} from '../Button';

export default {
  title: 'Feedback/Notification',
  component: NotifyContainer,
} as Meta;

export const FUNC = () => (
  <>
    <Button
      onClick={() => {
        notify.info({
          message: 'info',
          placement: 'topRight',
        });
      }}>
      info
    </Button>
    <Button
      onClick={() => {
        notify.success({
          message: 'success',
          duration: 6000,
        });
      }}>
      success
    </Button>
    <Button
      onClick={() => {
        notify.error({
          title: 'title test',
          message: 'error',
        });
      }}>
      error
    </Button>
    <Button
      onClick={() => {
        notify.warning({
          message: 'warning',
          showClose: false,
        });
      }}>
      warning
    </Button>
  </>
);
