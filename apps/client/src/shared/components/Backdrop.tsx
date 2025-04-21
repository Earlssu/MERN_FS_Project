interface BackdropProps {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
  return <div className={'bg-black opacity-40 w-screen h-screen'} onClick={onClose}></div>;
};

export default Backdrop;
