import { Outlet } from 'react-router-dom';
import MainHeader from '@/shared/components/Navigation/MainHeader.tsx';
import SideDrawer from '@/shared/components/Navigation/SideDrawer.tsx';
import { useState } from 'react';
import Backdrop from '@/shared/components/Navigation/Backdrop.tsx';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <MainHeader setIsOpen={setIsOpen} />
      <SideDrawer isOpen={isOpen} />
      <Backdrop onClose={closeDrawer} isOpen={isOpen} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
