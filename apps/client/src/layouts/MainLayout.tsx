import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header className={'bg-black text-white'}>공통 헤더</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
