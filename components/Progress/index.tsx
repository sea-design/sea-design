import {FC, ReactNode} from 'react';

import {validProgress} from './utils';
import {Steps} from './Steps';
import {Circle} from './Circle';
import {Line} from './Line';

export type Size = 'default' | 'small';

type ProgressType = 'line' | 'circle' | 'dashboard';
type ProgressStatus = 'success' | 'exception' | 'normal' | 'active';

type StringGradients = {[percentage: string]: string};
type FromToGradients = {from: string; to: string};
type ProgressGradients = {direction?: string} & (
  | StringGradients
  | FromToGradients
);

interface SuccessProps {
  percent?: number;
  strokeColor?: string;
}

export interface ProgressProps {
  type?: ProgressType;
  size?: Size;
  status?: ProgressStatus;
  percent?: number;
  format?: (percent?: number, successPercent?: number) => ReactNode;
  showInfo?: boolean;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeColor?: string | ProgressGradients;
  trailColor?: string;
  width?: number;
  success?: SuccessProps;
  gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
  steps?: number;
}

export const Progress: FC<ProgressProps> = ({
  type = 'line',
  percent = 0,
  showInfo = true,
  trailColor = '#F3F3F3',
  size = 'default',
  gapDegree = undefined,
  strokeLinecap = 'round',
  ...RestProgressProps
}) => {
  const props = {
    type,
    percent,
    showInfo,
    trailColor,
    size,
    gapDegree,
    strokeLinecap,
    ...RestProgressProps,
  };
  const {status} = props;
  const getProgressStatus = () => {
    if (percent >= 100) {
      return 'success';
    }
    return status || 'normal';
  };

  const renderProcessInfo = (status: ProgressStatus) => {
    const {format} = props;
    if (!showInfo) return null;
    let text;
    const textFormatter = format || ((percent) => `${percent}%`);
    // const isLineType = type === 'line';
    if (format || (status !== 'exception' && status !== 'success')) {
      text = textFormatter(validProgress(percent));
    }
    // TODO status with icon
    return <span>{text}</span>;
  };

  const renderProgress = () => {
    const {steps, strokeColor} = props;
    const progressStatus = getProgressStatus();
    const progressInfo = renderProcessInfo(progressStatus);
    let progress;
    if (type === 'line') {
      progress = steps ? (
        <Steps
          {...props}
          strokeColor={
            typeof strokeColor === 'string' ? strokeColor : undefined
          }
          steps={steps}>
          {progressInfo}
        </Steps>
      ) : (
        <Line {...props}>{progressInfo}</Line>
      );
    } else if (type === 'circle' || type === 'dashboard') {
      progress = (
        <Circle {...props} progressStatus={progressStatus}>
          {progressInfo}
        </Circle>
      );
    }
    return progress;
  };
  return <>{renderProgress()}</>;
};
