import React,{FC, ReactNode} from 'react';
import tw, {styled} from 'twin.macro';

import {ProgressProps} from './index';
import {validProgress} from './utils';

export interface LineProps extends ProgressProps {
  children: ReactNode;
}

// TODO support  Gradient color
export const sortGradient = () => {};

export const handleGradient = () => {};

export const Line: FC<LineProps> = (props) => {
  const {
    size,
    percent,
    strokeColor,
    strokeLinecap,
    trailColor,
    children,
  } = props;

  const percentStyle = () => {
    let percentStyles = [];
    percentStyles.push(
      strokeLinecap === 'round' ? tw`rounded` : tw`rounded-none`
    );
    percentStyles.push(size === 'default' ? tw`h-2` : tw`h-1`);
    if (validProgress(percent) === 100) {
      percentStyles.push(tw`bg-green-300`);
    } else {
      if (strokeColor) {
        percentStyles.push({color: strokeColor});
      } else {
        switch (props.status) {
          case 'success':
            percentStyles.push(tw`bg-green-300`);
            break;
          case 'exception':
            percentStyles.push(tw`bg-red-600`);
            break;
          case 'active':
            percentStyles.push(tw`bg-blue-500`);
            break;
          default:
            percentStyles.push(tw`bg-blue-500`);
        }
      }
    }
    return percentStyles;
  };

  const StyledPercent = styled.div(() => [
    {width: `${validProgress(percent)}%`},
    percentStyle(),
  ]);

  const TrialColor = trailColor
    ? {backgroundColor: trailColor}
    : tw`bg-gray-200`;

  const StyledTrail = styled.div(() => [
    tw`w-full`,
    size === 'default' ? tw`h-2` : tw`h-1`,
    strokeLinecap === 'round' ? tw`rounded` : tw`rounded-none`,
    TrialColor,
  ]);

  return (
    <div tw="flex items-center">
      <div tw="h-5 w-full rounded flex justify-center items-center">
        <StyledTrail>
          <StyledPercent />
        </StyledTrail>
      </div>
      {children}
    </div>
  );
};
