import React, { useContext } from 'react';
import MainHeaderLink from '@/shared/components/Navigation/MainHeaderLink.tsx';
import { AuthContext } from '@/shared/context/authContext.ts';
import { cx } from '@/shared/utils/cx.ts';

interface NavLinksProps {
  isMain?: boolean;
  className?: string;
  linkClassName?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMain = true, className, linkClassName }) => {
  const auth = useContext(AuthContext);

  const links = [
    { condition: true, to: '/', content: 'ALL USERS' },
    { condition: auth.isLoggedIn, to: '/u1/themes', content: 'MY THEMES' },
    { condition: auth.isLoggedIn, to: '/themes/new', content: 'ADD THEME' },
    { condition: !auth.isLoggedIn, to: '/auth', content: 'AUTHENTICATE' },
  ];

  return (
    <ul className={cx('gap-4', className)}>
      {isMain && (
        <MainHeaderLink
          to={'/'}
          content={'방태공'}
          className={'text-2xl hover:text-blue-300 flex-1'}
        />
      )}
      {links.map(
        ({ condition, to, content }) =>
          condition && (
            <MainHeaderLink
              key={to}
              to={to}
              content={content}
              className={cx('hover:text-amber-400', linkClassName)}
            />
          ),
      )}
    </ul>
  );
};

export default NavLinks;
