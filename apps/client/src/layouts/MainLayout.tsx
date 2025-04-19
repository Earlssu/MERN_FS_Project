import { Outlet } from 'react-router-dom';
import MainHeader from '@/shared/components/MainHeader.tsx';
import SideDrawer from '@/shared/components/SideDrawer.tsx';
import { useState } from 'react';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <MainHeader setIsOpen={setIsOpen} />
      {isOpen && <SideDrawer onClose={closeDrawer} />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
