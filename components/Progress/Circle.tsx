import React,{FC, ReactNode} from 'react';

import {ProgressProps} from './index';

export interface CircleProps extends ProgressProps {
  children: ReactNode;
  progressStatus: string;
}
// TODO support dashboard
export const Circle: FC<CircleProps> = (props) => {
  const {
    width,
    strokeWidth,
    strokeColor,
    // trailColor,
    // strokeLinecap,
    // gapPosition,
    // gapDegree,
    // type,
    // children,
  } = props;
  const circleSize = width || 120;
  const circleWidth = strokeWidth || 6;
  // const gapPos = gapPosition || (type === 'dashboard' && 'bottom') || 'top';
  const center = circleSize / 2;
  const r = (circleSize - circleWidth * 2) / 2;
  const percent = (props.percent as number) / 100,
    perimeter = Math.PI * 2 * r;
  const dasharray = `${perimeter * percent} ${perimeter * (1 - percent)}`;
  function ptgColor(): string {
    if (props.percent === 100) {
      return '#52C41A';
    }
    if (props.status === 'success') {
      return '#52C41A';
    } else if (props.status === 'exception') {
      return '#FF4D4F';
    } else {
      return typeof strokeColor === 'string' ? strokeColor : '#1890FF';
    }
  }
  // TODO dispaly pencentag in the center of  circle
  return (
    <div>
      <svg width={circleSize} height={circleSize}>
        <circle
          cx={center}
          cy={center}
          r={r}
          strokeWidth={circleWidth}
          stroke="#F5F5F5"
          fill="none"
        />
        <circle
          cx={center}
          cy={center}
          r={r}
          strokeWidth={circleWidth}
          stroke={ptgColor()}
          fill="none"
          strokeDasharray={dasharray}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      {/* {children} */}
    </div>
  );
};
