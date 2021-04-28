import React from 'react';

export interface CheckableTagProps {
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const CheckableTag: React.FC<CheckableTagProps> = ({
  checked,
  onChange,
  onClick,
  ...restProps
}) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    onChange?.(!checked);
    onClick?.(e);
  };

  return <span {...restProps} onClick={handleClick} />;
};

export default CheckableTag;
