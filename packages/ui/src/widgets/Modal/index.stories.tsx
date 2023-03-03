import React from "react";
import { Flex } from "../../components/Box";
import { Button } from "../../components/Button";
import Modal from "./Modal";
import { ModalProps } from "./types";
import useModal from "./useModal";

export default {
  title: "Widgets/Modal",
  component: Modal,
  argTypes: {},
};

const CustomModal: React.FC<ModalProps> = ({ title, onDismiss, ...props }) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <h1>{title}</h1>
    <Button>This button does nothing</Button>
  </Modal>
);

export const Default: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);

  return (
    <Flex style={{ gap: "10px" }} alignItems="center">
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button>Open modal 2</Button>
      <Button>Open modal with background</Button>
    </Flex>
  );
};
