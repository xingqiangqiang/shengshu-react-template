import React from 'react';

interface Props {
  name: string;
  color?: string;
  size: string;
  style?: any;
  onClick?: () => void;
  className?: string;
}

const SvgIcon: React.FC<Props> = ({ name, color, size, style, onClick, className }) => {
  const symbolId = `#icon-${name}`;

  return (
    <svg className={className} aria-hidden="true" width={size} height={size} style={style} onClick={onClick}>
      <use href={symbolId} color={color} />
    </svg>
  );
};

export default SvgIcon;
