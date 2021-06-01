import {CSSProperties, FC, ReactNode} from 'react';
import tw, {styled, css} from 'twin.macro';

type TooltipPlacement = 'top' | 'left' | 'bottom' | 'right';

export type RenderFunction = () => ReactNode;

export interface TooltipProps {
  color?: CSSProperties;
  children?: ReactNode;
  title?: ReactNode | RenderFunction;
  placement?: TooltipPlacement;
}

export interface TooltipTextProps {
  placement?: TooltipPlacement;
  children?: ReactNode;
}

const Tip = styled.span(() => [
  tw`relative inline-block `,
  css`
    &:hover > span {
      visibility: visible;
      opacity: 1;
    }
  `,
]);

const getTooltipTextPosition = (placement: TooltipPlacement) => {
  switch (placement) {
    case 'bottom':
      return {
        top: '125%',
        left: '50%',
        marginLeft: '-60px',
      };
    case 'left':
      return {
        top: '-5px',
        right: '105%',
      };
    case 'right':
      return {
        top: '-5px',
        left: '105%',
      };
    default:
      return {
        bottom: '125%',
        left: '50%',
        marginLeft: '-60px',
      };
  }
};

// const getArrowPosition = (placement: TooltipPlacement) => {
//   switch (placement) {
//     case 'bottom':
//       return;
//     case 'left':
//       return;
//     case 'right':
//       return;
//     default:
//       return {
//         bottom: '125%',
//         left: '50%',
//       };
//   }
// };

const ToolTipText = styled.span<TooltipTextProps>(({placement = 'top'}: TooltipTextProps) => [
  getTooltipTextPosition(placement),
  css`
    visibility: hidden;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
    // Arrow
    //&::after {
    //  content: "";
    //  position: absolute;
    //  top: 100%;
    //  left: 50%;
    //  margin-left: -5px;
    //  border-width: 5px;
    //  border-style: solid;
    //  border-color: #555 transparent transparent transparent;
    //}
  `,
]);
export const Tooltip: FC<TooltipProps> = (props) => {
  return (
    <Tip>
      <ToolTipText placement={props.placement}>{props.title}</ToolTipText>
      {props.children}
    </Tip>
  );
};
