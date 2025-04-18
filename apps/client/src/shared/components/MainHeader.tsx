import MainHeaderLink from '@/shared/components/MainHeaderLink.tsx';

const MainHeader = () => {
  return (
    <header className={'bg-black text-white py-6 px-4'}>
      <nav>
        <ul className={'flex gap-4'}>
          <MainHeaderLink to={'/'} content={'HOME'} />
          <MainHeaderLink to={'/users'} content={'ALL USERS'} />
          {/*  TODO: fix "to" attributes */}
          <MainHeaderLink to={'/u1/places'} content={'MY PLACES'} />
          <MainHeaderLink to={'/places/new'} content={'ADD PLACES'} />
          <MainHeaderLink to={'/auth'} content={'AUTHENTICATE'} />
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
