import ReactDOM from 'react-dom';
import React from 'react';
import Backdrop from '@/shared/components/UIElements/Backdrop.tsx';

interface ModalOverlayProps extends ModalProps {
  onSubmit?: () => void;
}

interface ModalProps {
  show: boolean;
  backdropOpacity?: 'low' | 'medium' | 'high';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onCancel: () => void;
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ onSubmit, header, footer, children }) => {
  const drawerRoot = document.getElementById('modal-hook');

  if (!drawerRoot) return null;

  const content = (
    <div
      className="fixed top-1/2 left-1/2 z-50 bg-white text-black border
                  transform -translate-x-1/2 -translate-y-1/2 p-6 rounded shadow-lg w-[90%] max-w-lg"
    >
      <header className="mb-4">
        <h2 className="text-xl font-bold">{header}</h2>
      </header>

      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className="mb-4">{children}</div>
        <footer>{footer}</footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, drawerRoot);
};

const Modal: React.FC<ModalProps> = ({
  show,
  children,
  onCancel,
  backdropOpacity,
  header,
  footer,
}) => {
  return (
    <React.Fragment>
      {show && <Backdrop onClose={onCancel} isOpen={show} opacity={backdropOpacity} />}
      {show && (
        <ModalOverlay
          show={show}
          onCancel={onCancel}
          children={children}
          header={header}
          footer={footer}
        />
      )}
    </React.Fragment>
  );
};

export default Modal;
