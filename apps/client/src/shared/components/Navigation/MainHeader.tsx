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
        <ul className={'hidden gap-4 sm:flex sm:flex-1 sm:pr-4'}>
          <div className={'flex-1'}>
            <MainHeaderLink
              to={'/'}
              content={'방태공'}
              className={'w-fit text-2xl hover:text-blue-300'}
            />
          </div>
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
