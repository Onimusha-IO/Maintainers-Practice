import Window from "./Window";

import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";

const Modal = ({ onClose, showModal, tittle, children }: any) => {
  const [isShowModal, setIsShowModal] = useState(showModal);

  useEffect(() => {
    setIsShowModal(showModal);
  }, [showModal]);

  return (
    <div className={isShowModal ? styles.modal : styles.none}>
      <Window tittle={tittle} onClose={onClose}>
        {children}
      </Window>
    </div>
  );
};

export default Modal;
