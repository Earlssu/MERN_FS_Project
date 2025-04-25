import ReactDOM from 'react-dom';

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

  const content = (
    <div
      className={`
        fixed inset-0 bg-black
        transition-opacity duration-300
        ${isOpen ? ` ${getOpacityClass(opacity)} pointer-events-auto` : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    />
  );

  return ReactDOM.createPortal(content, drawerRoot);
};

export default Backdrop;
