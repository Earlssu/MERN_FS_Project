import MainHeaderLink from '@/shared/components/MainHeaderLink.tsx';
import * as React from 'react';
import { Menu } from 'lucide-react';

interface MainHeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainHeader: React.FC<MainHeaderProps> = ({ setIsOpen }) => {
  return (
    <header className={'bg-black text-white py-6 px-4'}>
      <nav>
        <ul className={'hidden sm:flex gap-4'}>
          <MainHeaderLink to={'/'} content={'HOME'} />
          <MainHeaderLink to={'/users'} content={'ALL USERS'} />
          {/*  TODO: fix "to" attributes */}
          <MainHeaderLink to={'/u1/places'} content={'MY PLACES'} />
          <MainHeaderLink to={'/places/new'} content={'ADD PLACES'} />
          <MainHeaderLink to={'/auth'} content={'AUTHENTICATE'} />
        </ul>
        <Menu className={'sm:hidden'} onClick={() => setIsOpen(true)} />
      </nav>
    </header>
  );
};

export default MainHeader;
