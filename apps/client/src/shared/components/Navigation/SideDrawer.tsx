import React from 'react';
import ReactDOM from 'react-dom';
import MainHeaderLink from '@/shared/components/Navigation/MainHeaderLink.tsx';

interface SideDrawerProps {
  isOpen: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen }) => {
  const drawerRoot = document.getElementById('drawer-hook');

  if (!drawerRoot) return null;

  const content = (
    <aside
      className={`
        fixed left-0 top-0 z-50 h-screen w-4/5 bg-white 
        shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <ul className="flex flex-col gap-6 mt-6">
        <MainHeaderLink to="/" content="HOME" />
        <MainHeaderLink to={'/u1/themes'} content={'MY THEMES'} />
        <MainHeaderLink to={'/themes/new'} content={'ADD THEME'} />
        <MainHeaderLink to={'/auth'} content={'AUTHENTICATE'} />
      </ul>
    </aside>
  );

  return ReactDOM.createPortal(content, drawerRoot);
};

export default SideDrawer;
