import {BaseProps} from '../_base/type';
import {FC} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

type Color = 'default' | 'dark' | 'white';
type Height = 'default';

export interface HeaderProps extends BaseProps {
  color?: Color;
  height?: Height;
}

const styledColor = (color: Color) => {
  switch (color) {
    case 'default':
      return tw`bg-gray-500`;
    case 'dark':
      return tw`bg-green-700`;
    case 'white':
      return tw`bg-white border-white`;
    default:
      return tw`bg-gray-500`;
  }
};

const styleHeight = (height: Height) => {
  switch (height) {
    case 'default':
      return tw`h-8`;
    default:
      return tw`h-10`;
  }
};

export const Header: FC<HeaderProps> = styled.header(
  ({height = 'default', color = 'default'}: HeaderProps) => [
    styledColor(color),
    styleHeight(height),
  ]
);
