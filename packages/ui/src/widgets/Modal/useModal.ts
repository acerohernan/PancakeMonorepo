import { get } from "lodash";
import { useCallback, useContext, useEffect } from "react";
import { Context } from "./ModalContext";
import { Handler } from "./types";

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = true,
  updateOnPropsChange = false,
  modalId = "defaultNodeId"
): [Handler, Handler] => {
  const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss, setCloseOnOverlayClick } = useContext(Context);

  const onPresentCallback = useCallback(() => {
    onPresent(modal, nodeId);
  }, [modal, nodeId, onPresent]);

  /**
   * Updates the "modal" component if props are changed
   * Use carefully since it might result in unnecessary rerenders
   * Typically if modal is static here is no need for updates use when you expect props to change
   */
  useEffect(() => {
    /**
     * NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
     */
    if (updateOnPropsChange && isOpen && nodeId === modalId) {
      const modalProps = get(modal, "props");
      const oldModalProps = get(modalNode, "props");
      /**
       * Note> I tried to use lodash isEqueal to compare props but it is giving false/negatives too easily
       * For example ConfirmSwapModal is exchange has ~500 lines porp object that stringifies to same string and online diff checker says both objects are identical but lodash isEqueal thinks they are different
       * Do not try to replace JSON.stringify with isEqual, high risk of infinitive rerenders
       */

      if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
        setModalNode(modal);
      }
    }
  }, [isOpen, modal, modalId, modalNode, nodeId, setModalNode, updateOnPropsChange]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
