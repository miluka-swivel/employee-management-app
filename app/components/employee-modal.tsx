import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalProps{
    title : string,
    message: string,
    show : boolean
    handleConfirm: () => Promise<void>,
    handleClose:() => void,
    closeButtonText : string,
    confirmButtonText: string,
}

function ConfirmationModal({title, message, show, handleConfirm, handleClose, closeButtonText, confirmButtonText} : ModalProps) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {closeButtonText}
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            {confirmButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;