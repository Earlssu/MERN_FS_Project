import { X } from 'lucide-react';
import * as React from 'react';
import MainHeaderLink from '@/shared/components/MainHeaderLink.tsx';

interface SideDrawerProps {
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ onClose }) => {
  return (
    <aside className={'fixed left-0 top-0 z-{100} h-screen w-full bg-white'}>
      <div className={'h-18 flex justify-end items-center px-4 bg-black'}>
        <X color={'white'} onClick={onClose} />
      </div>
      <ul className={'flex flex-col gap-4 pl-4 mt-4'}>
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
