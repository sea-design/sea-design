import {FC, useCallback} from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

export interface TabTitleProps {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  currentActive: number;
}

export const TabTitle: FC<TabTitleProps> = (props) => {
  const handleClick = useCallback(() => {
    props.setSelectedTab(props.index);
  }, [props.setSelectedTab, props.index]);

  const isActive = (current: number, index: number) => {
    if (current === index) {
      return tw`border-0 bg-yellow-100 text-yellow-500`;
    }
  };

  const StyledTitle = styled.span((props: TabTitleProps) => [
    tw` h-8 p-2 justify-center text-center items-center hover:cursor-pointer`,
    isActive(props.currentActive, props.index),
  ]);

  return (
    <StyledTitle onClick={handleClick} {...props}>
      {props.title}
    </StyledTitle>
  );
};
