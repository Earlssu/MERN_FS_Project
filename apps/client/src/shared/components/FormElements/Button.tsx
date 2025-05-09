import React from 'react';
import { ButtonSize, widthMap } from '@/shared/types/button.ts';

interface ButtonProps {
  href?: string;
  size?: ButtonSize;
  style?: 'inverse' | 'danger' | 'edit' | 'default';
  onClick?: () => void;
  children: React.ReactNode;
}

const getStyleClass = (style: ButtonProps['style']) => {
  switch (style) {
    case 'inverse':
      return 'bg-white text-black border-gray-400 hover:bg-gray-100';
    case 'danger':
      return 'bg-red-600 text-white border-red-700 hover:bg-red-500';
    case 'edit':
      return 'bg-yellow-500 text-white border-yellow-600 hover:bg-yellow-400';
    case 'default':
    default:
      return 'bg-slate-800 text-white border-slate-900 hover:bg-slate-700';
  }
};
const Button: React.FC<ButtonProps> = ({
  href,
  size = 'md',
  style = 'default',
  children,
  onClick,
}) => {
  const styleClass = getStyleClass(style);
  const widthClass = widthMap[size];
  const baseClass = 'inline-block border sm:p-4 rounded-md text-center cursor-pointer transition';
  const className = `${baseClass} ${widthClass} ${styleClass}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
