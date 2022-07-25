import Window from "./Window";

import styles from "./Modal.module.scss";

const Modal = ({ setModal, modal, tittle, children }: any) => {
  return (
    <div className={modal ? styles.modal : styles.none}>
      <Window setModal={setModal} tittle={tittle}>
        {children}
      </Window>
    </div>
  );
};

export default Modal;
