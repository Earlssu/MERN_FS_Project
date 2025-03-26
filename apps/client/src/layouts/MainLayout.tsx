import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={'bg-black text-white'}>
      <header>공통 헤더</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
