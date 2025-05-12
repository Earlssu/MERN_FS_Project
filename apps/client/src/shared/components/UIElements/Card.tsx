import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  const mergedClasses = twMerge(
    'flex flex-col gap-4 items-center bg-gray-100 px-4 py-8 border border-gray-400 rounded-lg shadow-xl',
    clsx(className),
  );

  return (
    <div className={mergedClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
