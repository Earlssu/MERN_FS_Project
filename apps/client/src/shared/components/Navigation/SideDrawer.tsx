import React from 'react';
import ReactDOM from 'react-dom';
import { cx } from '@/shared/utils/cx.ts';
import NavLinks from '@/shared/components/Navigation/NavLinks.tsx';

interface SideDrawerProps {
  isOpen: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen }) => {
  const drawerRoot = document.getElementById('drawer-hook');
  if (!drawerRoot) return null;

  const content = (
    <aside
      className={cx(
        'fixed left-0 top-0 z-50 h-screen w-4/5 bg-white shadow-lg',
        'transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <NavLinks
        isMain={false}
        className="mt-6 flex flex-col gap-6 px-4"
        linkClassName="text-gray-800 hover:text-amber-600"
      />
    </aside>
  );

  return ReactDOM.createPortal(content, drawerRoot);
};

export default SideDrawer;
