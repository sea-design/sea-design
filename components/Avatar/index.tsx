import * as React from 'react';
import {BaseProps} from "../_base/type";
import classnames from 'classnames';

export type Size = 'default' | 'small' | 'large';

export interface AvatarProps extends BaseProps {
  size?: Size;
  url?:string;
}

export const Avatar = ({size = 'default',url}: AvatarProps) => {
  const classname = classnames(
    {
      'h-6 w-6': size === 'small',
      'h-8 w-8': size === 'default',
      'h-10 w-10': size === 'large',
    }
  );
  return (
    <div className={classname}>
      <img src={url}/>
    </div>
  )
};
