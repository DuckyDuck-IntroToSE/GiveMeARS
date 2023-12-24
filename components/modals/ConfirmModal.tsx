"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { any } from "zod";

interface ConfirmModalProps {
  isOpen: boolean,
  onOpen: () => void,
  onOpenChange: (isOpen: boolean) => void
  onConfirm: () => void
};

export const ConfirmModal = ({
  isOpen,
  onOpen,
  onOpenChange,
  onConfirm
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalBody>
              <p>This action cannot be undone.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button color="danger" onClick={()=>{
                onConfirm();
                onClose();
              }}>Delete</Button>
            </ModalFooter>
          </>
        )}


      </ModalContent>
    </Modal>
  );
};
