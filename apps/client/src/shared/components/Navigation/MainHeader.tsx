import MainHeaderLink from '@/shared/components/Navigation/MainHeaderLink.tsx';
import * as React from 'react';
import { Menu } from 'lucide-react';

interface MainHeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainHeader: React.FC<MainHeaderProps> = ({ setIsOpen }) => {
  return (
    <header className={'bg-black text-white py-6 px-4'}>
      <nav className={'flex justify-end sm:justify-start'}>
        <ul className={'hidden sm:flex gap-4'}>
          <MainHeaderLink to={'/'} content={'HOME'} />
          <MainHeaderLink to={'/u1/themes'} content={'MY THEMES'} />
          <MainHeaderLink to={'/themes/new'} content={'ADD THEME'} />
          <MainHeaderLink to={'/auth'} content={'AUTHENTICATE'} />
        </ul>
        <Menu className={'sm:hidden'} onClick={() => setIsOpen(true)} />
      </nav>
    </header>
  );
};

export default MainHeader;
