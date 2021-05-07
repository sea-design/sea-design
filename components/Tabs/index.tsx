import React, {FC, ReactElement, useState} from 'react';
import {TabTitle} from './TabTitle';
import tw from 'twin.macro';

export interface TabsProps {
  children: ReactElement[];
}

export const Tabs: FC<TabsProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <ul tw="flex flex-row rounded ">
        {props.children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            currentActive={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      <div tw="my-8">{props.children[selectedTab]}</div>
    </div>
  );
};
