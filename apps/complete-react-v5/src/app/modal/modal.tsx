import React, { useEffect, useRef } from 'react';

import './modal.scss';

import { createPortal } from 'react-dom';

/* eslint-disable-next-line */
export interface ModalProps {}

export const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');

    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{ children }</div>, elRef.current)
};

export default Modal;
