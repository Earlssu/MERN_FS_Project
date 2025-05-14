import * as React from 'react';
import { Menu } from 'lucide-react';
import NavLinks from '@/shared/components/Navigation/NavLinks.tsx';

interface MainHeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainHeader: React.FC<MainHeaderProps> = ({ setIsOpen }) => {
  return (
    <header className={'bg-[#112D4E] text-[#F9F7F7] py-6 px-4'}>
      <nav className={'flex justify-end sm:justify-start'}>
        <div className={'hidden sm:flex sm:flex-1 sm:items-center sm:gap-4 sm:pr-4'}>
          <NavLinks className="flex flex-1" linkClassName="text-lg" />
        </div>
        <Menu className={'sm:hidden'} onClick={() => setIsOpen(true)} />
      </nav>
    </header>
  );
};
export default MainHeader;
