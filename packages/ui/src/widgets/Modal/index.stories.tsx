import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Flex } from "../../components/Box";
import { Button } from "../../components/Button";
import { PancakeTheme } from "../../theme";
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

/* Default Story */
export const Default: React.FC = () => {
  const theme = useTheme() as PancakeTheme;
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  const [onPresent3] = useModal(<CustomModal title="Modal 3" headerBackground={theme.colors.gradients.cardHeader} />);

  return (
    <Flex style={{ gap: "5px" }} alignItems="center">
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
      <Button onClick={onPresent3}>Open modal with background</Button>
    </Flex>
  );
};

/* WithBackButton Story */
const BackButtonModal: React.FC<ModalProps> = ({ title, onDismiss }) => {
  const handleOnBack = () => 1;

  return (
    <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
      <Button onClick={onDismiss} variant="text">
        Consumer can still close it
      </Button>
    </Modal>
  );
};

export const WithBackButton: React.FC = () => {
  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false);

  return <Button onClick={onPresent1}>Only Back Button</Button>;
};

/* WithCostumerHeader Story */

const CustomHeaderModal: React.FC<ModalProps> = ({ title, onDismiss }) => (
  <Modal title={title} onDismiss={onDismiss} headerBackground="primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros, eget
    sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in
    tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod ante
    mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper nibh sed
    sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices. Aliquam in
    eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac vulputate libero, id
    vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin non elementum nec,
    tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum sodales suscipit eu nec
    lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo et, tempor quis ligula.
    Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra mauris. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros, eget sollicitudin sapien. Donec
    imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in tincidunt cursus. Fusce vulputate,
    enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod ante mauris ut est. Vestibulum eu ligula
    eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper nibh sed sagittis. Integer a elit nec nisl
    cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices. Aliquam in eros eros. Maecenas fringilla enim
    varius, fringilla lectus ut, finibus sapien. Phasellus ac vulputate libero, id vehicula massa. Ut dignissim lorem ut
    risus accumsan feugiat. Quisque odio mi, sollicitudin non elementum nec, tristique non est. Sed faucibus ante
    hendrerit viverra volutpat. Proin et enim nec ipsum sodales suscipit eu nec lacus. Nulla consequat volutpat
    scelerisque. Phasellus ligula orci, dictum quis commodo et, tempor quis ligula. Pellentesque eget dapibus leo.
    Aliquam in ipsum vehicula, suscipit ipsum nec, viverra mauris.
    <Button>This button Does nothing</Button>
  </Modal>
);

export const WithCostumerHeader: React.FC = () => {
  const [onPresent1] = useModal(<CustomHeaderModal title="Modal with custom  header" />);

  return <Button onClick={onPresent1}>Modal with custom header</Button>;
};

/* ReactingToOutsideChanges Story */

const ReactiveModal: React.FC<ModalProps & { count: number }> = ({ onDismiss, count, title }) => (
  <Modal title={title} onDismiss={onDismiss}>
    <h2>Counter: {count}</h2>
    <Button mt="8px" onClick={onDismiss}>
      Close
    </Button>
  </Modal>
);

export const ReactingToOutsideChanges: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const [onPresent1] = useModal(
    <ReactiveModal count={counter} title={`[${counter}] Modal that react to outside change`} />,
    true,
    true,
    "reactiveModal"
  );

  const [onPresent2] = useModal(
    <ReactiveModal title={`[${counter}] Modal that doesn't react to outside change`} count={counter} />
  );

  return (
    <div>
      <h2>Counter {counter}</h2>
      <Button onClick={onPresent1}>Reactive Modal</Button>
      <Button onClick={onPresent2} ml="16px">
        Non-reactive Modal
      </Button>
    </div>
  );
};
