import MainHeaderLink from '@/shared/components/Navigation/MainHeaderLink.tsx';

interface SideDrawerProps {
  isOpen: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed left-0 top-0 z-50 h-screen w-4/5 bg-white 
        shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <ul className="flex flex-col gap-6 mt-6">
        <MainHeaderLink to="/" content="HOME" />
        <MainHeaderLink to="/users" content="ALL USERS" />
        <MainHeaderLink to="/u1/places" content="MY PLACES" />
        <MainHeaderLink to="/places/new" content="ADD PLACES" />
        <MainHeaderLink to="/auth" content="AUTHENTICATE" />
      </ul>
    </aside>
  );
};

export default SideDrawer;
