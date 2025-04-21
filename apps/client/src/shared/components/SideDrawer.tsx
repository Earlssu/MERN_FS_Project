import MainHeaderLink from '@/shared/components/MainHeaderLink.tsx';

const SideDrawer = () => {
  return (
    <aside className={'fixed left-0 top-0 z-{100} h-screen w-4/5 bg-white z-10'}>
      <ul className={'flex flex-col gap-6 mt-6'}>
        <MainHeaderLink to={'/'} content={'HOME'} />
        <MainHeaderLink to={'/users'} content={'ALL USERS'} />
        {/*  TODO: fix "to" attributes */}
        <MainHeaderLink to={'/u1/places'} content={'MY PLACES'} />
        <MainHeaderLink to={'/places/new'} content={'ADD PLACES'} />
        <MainHeaderLink to={'/auth'} content={'AUTHENTICATE'} />
      </ul>
    </aside>
  );
};

export default SideDrawer;
