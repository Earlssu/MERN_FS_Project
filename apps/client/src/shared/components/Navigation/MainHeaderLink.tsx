import React from 'react';
import { cx } from '@/shared/utils/cx.ts';

interface MainHeaderLinkProps {
  to: string;
  content: string;
  className?: string;
}

const MainHeaderLink: React.FC<MainHeaderLinkProps> = ({ to, content, className }) => {
  return (
    <li
      className={cx(
        'font-bold text-lg hover:text-amber-400 border-b-2 px-2 pb-6 sm:p-0 border-gray-200 sm:border-none',
        className,
      )}
    >
      <a href={to}>{content ? content : 'Link Empty'}</a>
    </li>
  );
};

export default MainHeaderLink;
