import { Outlet } from 'react-router-dom';
import MainHeader from '@/shared/components/MainHeader.tsx';

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
