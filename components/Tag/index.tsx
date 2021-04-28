import React, {useEffect, useState} from 'react';
import tw, {styled} from 'twin.macro';

import CheckableTag from './CheckableTag';

type PresetColorTypes =
  | 'pink'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'cyan'
  | 'green'
  | 'blue'
  | 'purple';

const presetColorMap = {
  pink: tw`bg-pink-300`,
  red: tw`bg-red-300`,
  yellow: tw`bg-yellow-400`,
  orange: tw`bg-yellow-200`,
  cyan: tw`bg-indigo-300`,
  green: tw`bg-green-200`,
  blue: tw`bg-blue-200`,
  purple: tw`bg-purple-300`,
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: PresetColorTypes;
  visible?: boolean;
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

export interface TagType
  extends React.ForwardRefExoticComponent<
    TagProps & React.RefAttributes<HTMLElement>
  > {
  CheckableTag: typeof CheckableTag;
}

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  {style, children, icon, color, onClose, closable = false, ...props},
  ref
) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible!);
    }
  }, [props.visible]);
  const tagStyle = {
    ...style,
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);
    setVisible(false);
    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  const renderCloseIcon = () => {
    if (closable) {
      return <span onClick={handleCloseClick}>x</span>;
    }
    return null;
  };
  const iconNode = icon || null;
  const kids = iconNode ? (
    <>
      {iconNode}
      <span>{children}</span>
    </>
  ) : (
    children
  );

  const tagNode = (
    <StyleTag
      {...props}
      visible={visible}
      color={color}
      ref={ref}
      style={tagStyle}>
      {kids}
      {renderCloseIcon()}
    </StyleTag>
  );
  return tagNode;
};

const getVisible = (visible: boolean) => {
  return visible ? tw`inline` : tw`hidden`;
};

const StyleTag = styled.span(({color = 'blue', visible = true}: TagProps) => [
  presetColorMap[color],
  getVisible(visible),
  tw`cursor-pointer`,
]);

const Tag = React.forwardRef<unknown, TagProps>(InternalTag) as TagType;

Tag.displayName = 'Tag';

Tag.CheckableTag = CheckableTag;

export default Tag;
