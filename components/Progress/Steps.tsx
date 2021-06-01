import React,{FC} from 'react';

import tw, {styled} from 'twin.macro';

import {ProgressProps, Size} from './index';

export interface StepsProps extends ProgressProps {
  steps: number;
  size?: Size;
  strokeColor?: string;
  trailColor?: string;
}

export const Steps: FC<StepsProps> = (props) => {
  const {
    size,
    steps,
    strokeColor = '#1890FF',
    strokeWidth = 8,
    trailColor,
    percent = 0,
    children,
  } = props;
  const current = Math.round(steps * (percent / 100));
  const stepWidth = size === 'default' ? tw`w-3` : tw`w-0.5`;
  const commonStyles = [tw`m-0.5`, stepWidth];
  const StrokeItem = styled.div(() => [
    commonStyles,
    {
      height: strokeWidth,
      backgroundColor: percent === 100 ? '#52c41a' : strokeColor,
    },
  ]);
  const TrailItem = styled.div(() => [
    commonStyles,
    {
      height: strokeWidth,
      backgroundColor: percent === 100 ? '#52c41a' : trailColor,
    },
  ]);

  const styledSteps = [];
  for (let i = 0; i < steps; i++) {
    styledSteps.push(
      i <= current - 1 ? <StrokeItem key={i} /> : <TrailItem key={i} />
    );
  }

  return (
    <div tw="flex items-center ">
      {styledSteps}
      {children}
    </div>
  );
};
