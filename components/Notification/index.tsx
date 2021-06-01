import {FC, CSSProperties, ReactNode, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import tw, {styled} from 'twin.macro';

type NotificationPlacement =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';
type NotifyType = 'success' | 'info' | 'error' | 'warning';

type NotificationProps = Omit<Notice, 'id'>;

export interface NotifyApi {
  info: (config: NotificationProps) => void;
  success: (config: NotificationProps) => void;
  warning: (config: NotificationProps) => void;
  error: (config: NotificationProps) => void;
}

export interface Notice {
  id: string;
  message: ReactNode;
  title?: string;
  type?: NotifyType;
  duration?: number;
  placement?: NotificationPlacement;
  showClose?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
  children?: ReactNode;
}

let seed = 0;
const now = Date.now();
export const getUUID = (): string => {
  const id = seed;
  seed += 1;
  return `notify_${now}_${id}`;
};

export function createContainer() {
  const portalId = 'notifyContainer';

  let element = document.querySelector(`${portalId}`);

  if (element) return element;

  element = document.createElement('div');
  element.setAttribute('id', portalId);
  document.body.appendChild(element);
  return element;
}

const container = createContainer();

let add: (notice: Notice) => void;

export const NotifyContainer = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  const remove = (notice: Notice) => {
    const {id} = notice;
    setNotices((prevNotices) => prevNotices.filter((n) => n.id !== id));
  };

  add = (notice) => {
    setNotices((prevNotices) => [...prevNotices, notice]);

    if (notice.duration && notice.duration > 0) {
      setTimeout(() => {
        remove(notice);
      }, notice.duration || 4500);
    } else if (!notice.duration && notice.duration !== 0) {
      setTimeout(() => {
        remove(notice);
      }, 4500);
    }
  };

  useEffect(() => {
    if (notices.length > 10) {
      remove(notices[0]);
    }
  }, [notices]);

  return (
    <div>
      {notices.map((props) => {
        const {id, ...rest} = props;
        return (
          <NotifyItem
            key={props.id}
            {...rest}
            onClose={() => {
              remove(props);
            }}></NotifyItem>
        );
      })}
    </div>
  );
};

function getPlacementStyle(
  placement: NotificationPlacement,
  top: number = 24,
  bottom: number = 24
) {
  let style;
  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom,
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom,
      };
      break;
  }
  return style;
}

function getColor(type: NotifyType) {
  switch (type) {
    case 'success':
      return tw`bg-green-200`;
    case 'error':
      return tw`bg-red-500`;
    case 'warning':
      return tw`bg-yellow-200`;
    default:
      return tw`bg-blue-400`;
  }
}

const Item = styled.div((props: NotificationProps) => [
  getPlacementStyle(props.placement as NotificationPlacement),
  getColor(props.type as NotifyType),
  tw`max-w-xs rounded mb-2 text-white `,
]);
const NotifyItem: FC<NotificationProps> = (props) => {
  const {showClose = true, onClose} = props;
  return (
    <Item {...props}>
      <div tw="flex">
        <h3 tw="flex-1 font-medium text-xl">{props.title}</h3>
        {showClose ? (
          <div
            tw="flex-none mr-2"
            onClick={() => {
              if (onClose) {
                onClose();
              }
            }}>
            x
          </div>
        ) : null}
      </div>
      <div tw="font-normal">{props.message}</div>
      {props.children}
    </Item>
  );
};

ReactDOM.render(<NotifyContainer></NotifyContainer>, container);

export const notify: NotifyApi = {
  info: (config) => {
    add({
      ...config,
      id: getUUID(),
      type: 'info',
    });
  },
  success: (config) => {
    add({
      ...config,
      id: getUUID(),
      type: 'success',
    });
  },
  warning: (config) => {
    add({
      ...config,
      id: getUUID(),
      type: 'warning',
    });
  },
  error: (config) => {
    add({
      ...config,
      id: getUUID(),
      type: 'error',
    });
  },
};
