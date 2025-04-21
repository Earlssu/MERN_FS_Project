import { Outlet } from 'react-router-dom';
import MainHeader from '@/shared/components/MainHeader.tsx';
import SideDrawer from '@/shared/components/SideDrawer.tsx';
import { useState } from 'react';
import Backdrop from '@/shared/components/Backdrop.tsx';

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
