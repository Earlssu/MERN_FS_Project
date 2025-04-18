import MainHeaderLink from '@/shared/components/MainHeaderLink.tsx';

const MainHeader = () => {
  return (
    <header className={'bg-black text-white py-6 px-4'}>
      <ul className={'flex gap-4'}>
        <MainHeaderLink to={'/'} content={'Home'} />
        <MainHeaderLink to={'/users'} content={'Users'} />
      </ul>
    </header>
  );
};

export default MainHeader;
