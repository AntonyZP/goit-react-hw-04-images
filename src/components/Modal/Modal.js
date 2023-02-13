import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({children, onCloseModal}) {
  
  useEffect(()=> { const handleKeyDown = e =>{
    if (e.code === 'Escape') {
      onCloseModal()
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return ()=> 
    window.removeEventListener('keydown', handleKeyDown)
  }, 
  [onCloseModal])

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal()
    }
  }

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );  
}
