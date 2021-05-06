import React, {ReactNode, useState} from 'react';
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
        });
      }}>
      info
    </Button>
    <Button
      onClick={() => {
        notify.success({
          message: 'success',
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

// interface NoteInterface extends NotificationProps {
//   id: number;
// }

// export const Default = () => {
//   const [notifications, setNotifications] = useState<NoteInterface[]>([]);
//   const createNotification = (message: ReactNode) => {
//     setNotifications([
//       ...notifications,
//       {
//         message,
//         id: 'note'+notifications.length,
//       },
//     ]);
//   };
//
//   const deleteNotification = (id: number) =>
//     setNotifications(notifications.filter(notification => notification.id !== id));
//
//   return (
//     <div>
//       {/*<Notification message={'test'}/>*/}
//
//       <button onClick={() => createNotification('1')}>Info</button>
//       <button onClick={() => createNotification('2')}>Success</button>
//       <button onClick={() => createNotification('3')}>Warning</button>
//       <button onClick={() => createNotification('4')}>Error</button>
//       {notifications.map(({id, message}) => (
//         <Notification
//           onClose={() => deleteNotification(id)}
//           key={id}
//           message={message}
//           duration={3000}
//         />
//       ))}
//     </div>
//   );
// };
