import { Outlet } from 'react-router-dom';
import MainHeader from '@/shared/components/Navigation/MainHeader.tsx';
import SideDrawer from '@/shared/components/Navigation/SideDrawer.tsx';
import { useState } from 'react';
import Backdrop from '@/shared/components/UIElements/Backdrop.tsx';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className={'bg-[#F9F7F7] h-screen'}>
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
