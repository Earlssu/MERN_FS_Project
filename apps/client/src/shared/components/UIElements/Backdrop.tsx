import ReactDOM from 'react-dom';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface BackdropProps {
  onClose: () => void;
  isOpen: boolean;
  opacity?: 'low' | 'medium' | 'high';
}

const getOpacityClass = (opacity?: 'low' | 'medium' | 'high') => {
  switch (opacity) {
    case 'low':
      return 'opacity-50';
    case 'high':
      return 'opacity-100';
    case 'medium':
    default:
      return 'opacity-75';
  }
};

const Backdrop: React.FC<BackdropProps> = ({ onClose, isOpen, opacity }) => {
  const drawerRoot = document.getElementById('backdrop-hook');
  if (!drawerRoot) return null;

  const classes = clsx('fixed inset-0 bg-black transition-opacity duration-300', {
    [getOpacityClass(opacity)]: isOpen,
    'pointer-events-auto': isOpen,
    'opacity-0 pointer-events-none': !isOpen,
  });

  const mergedClasses = twMerge(classes);

  const content = <div className={mergedClasses} onClick={onClose} />;

  return ReactDOM.createPortal(content, drawerRoot);
};

export default Backdrop;
