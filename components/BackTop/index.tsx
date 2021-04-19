import {FC, CSSProperties, ReactNode, MouseEventHandler, useState} from 'react';
import tw, {styled, css} from 'twin.macro';

export interface BackTopProps {
  visibilityHeight?: number;
  durationRate?: number;
  style?: CSSProperties; //custom style still need consider doesn't support now
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  target?: () => HTMLElement | Window | Document;
}

function easeout(
  current: number,
  target: number,
  rate: number,
  callback: (value: number, isEnding: boolean) => void
) {
  if (current === target) return;
  target = target || 0;
  rate = rate || 2;
  const step = () => {
    current = current + (target - current) / rate;
    if (current < target + 1) {
      callback(target, true);
      return;
    }
    callback(current, false);
    requestAnimationFrame(step);
  };
  step();
}

const BackTopElement = styled.div(() => [
  tw`fixed bottom-10 right-10 z-50 border-0 outline-none bg-red-500 cursor-pointer p-2 rounded-full hover:bg-red-700`,
  css`
    corlor: white;
  `,
]);

export const BackTop: FC<BackTopProps> = ({
  visibilityHeight = 400,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const doc = document.body.scrollTop
    ? document.body
    : document.documentElement;

  window.addEventListener('scroll', () => {
    doc.scrollTop > visibilityHeight ? setVisible(true) : setVisible(false);
  });

  const scrollToTop = () => {
    easeout(doc.scrollTop, 0, 4, (value) => {
      doc.scrollTop = value;
    });
  };

  const getDisplay = (visible: boolean) => (visible ? 'block' : 'none');

  const display = {
    display: getDisplay(visible),
  };

  return (
    <BackTopElement style={display} onClick={scrollToTop}>
      {rest.children}
    </BackTopElement>
  );
};
