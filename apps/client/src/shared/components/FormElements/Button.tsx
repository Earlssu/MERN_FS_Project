import React from 'react';
import { ButtonSize, widthMap } from '@/shared/types/buttons.ts';

interface ButtonProps {
  href?: string;
  size?: ButtonSize;
  style?: 'inverse' | 'danger' | 'edit' | 'default';
  children: React.ReactNode;
}

const getStyleClass = (style: ButtonProps['style']) => {
  switch (style) {
    case 'inverse':
      return 'bg-white text-black border-gray-400';
    case 'danger':
      return 'bg-red-600 text-white border-red-700';
    case 'edit':
      return 'bg-yellow-500 text-white border-yellow-600';
    case 'default':
    default:
      return 'bg-slate-800 text-white border-slate-900';
  }
};

const Button: React.FC<ButtonProps> = ({ href, size = 'md', style = 'default', children }) => {
  const styleClass = getStyleClass(style);
  const widthClass = widthMap[size];
  const className = `inline-block border ${widthClass} p-4 rounded-md text-center ${styleClass}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;
