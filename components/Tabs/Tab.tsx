import React, {FC} from 'react';

export interface TabProps {
  title: string;
}

export const Tab: FC<TabProps> = (props) => {
  return <>{props.children}</>;
};
