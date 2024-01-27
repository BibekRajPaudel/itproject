import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  modalClose: () => void;
}

const Modal: React.FC<Props> = ({ children, modalClose }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-dark-grey bg-opacity-65`}
        onClick={modalClose}
      />
      <div
        className={`max-w-3xl min-w-[300px] rounded-2xl absolute center bg-white w-full z-50 shadow overflow-auto`}
      >
        {children}
      </div>
    </React.Fragment>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
