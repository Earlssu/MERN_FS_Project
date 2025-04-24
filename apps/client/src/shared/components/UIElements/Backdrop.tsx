interface BackdropProps {
  onClose: () => void;
  isOpen: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose, isOpen }) => {
  return (
    <div
      className={`
        fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    />
  );
};

export default Backdrop;
