import { Outlet } from 'react-router-dom';
import CommonHeader from '@/shared/components/CommonHeader.tsx';

const MainLayout = () => {
  return (
    <div>
      <CommonHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
