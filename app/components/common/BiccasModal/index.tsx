"use client";

import { Modal, ModalProps } from "@mantine/core";
import { ReactNode } from "react";

interface BiccasModalProps extends Pick<ModalProps, "classNames"> {
  opened: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

export default function BiccasModal({
  opened,
  onClose,
  title,
  classNames,
  children,
}: BiccasModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      centered
      classNames={classNames}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 4,
      }}
    >
      {children}
    </Modal>
  );
}
