import React from 'react';
import { ButtonSize, widthMap } from '@/shared/types/button.ts';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string;
  size?: ButtonSize;
  style?: 'inverse' | 'danger' | 'edit' | 'default';
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  to?: string;
  disabled?: boolean;
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
  onClick,
  type,
  to,
  disabled,
  children,
}) => {
  const styleClass = getStyleClass(style);
  const widthClass = widthMap[size];
  const baseClass =
    'w-fit inline-block border sm:p-4 rounded-md text-center cursor-pointer transition disabled:cursor-not-allowed disabled:opacity-50';
  const className = `${baseClass} ${widthClass} ${styleClass}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
