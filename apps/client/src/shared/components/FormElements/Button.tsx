import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSize, widthMap } from '@/shared/types/button.ts';
import { cx } from '@/shared/utils/cx.ts';

interface ButtonProps {
  href?: string;
  size?: ButtonSize;
  style?: 'inverse' | 'danger' | 'edit' | 'default';
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  to?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string; // 추가: 사용자 정의 클래스 지원
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
  className,
}) => {
  const baseClass =
    'border rounded-md text-center cursor-pointer transition flex justify-center items-center min-h-12 sm:min-h-auto sm:p-4';
  const disabledClass = 'disabled:cursor-not-allowed disabled:opacity-50';

  const mergedClasses = cx(
    baseClass,
    getStyleClass(style),
    widthMap[size],
    disabled && disabledClass,
    className,
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={mergedClasses}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={mergedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
