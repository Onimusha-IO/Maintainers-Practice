import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Page.module.scss";
import Modal from "../myModal";
import Dialog from "../../Masters/Dough/Dialog";

const Page = ({ tittle, children, message, endpoint }: any) => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    // actualizar listado
    console.log("Test...");
    setShowModal(false);
  };

  return (
    <div className={styles.page}>
      <label className={styles.label}>{tittle}</label>
      <div className={styles.content}>
        {showModal ? (
          <Modal onClose={onClose} showModal={showModal} tittle={"Nueva Masa"}>
            <Dialog onClose={onClose} />
          </Modal>
        ) : (
          children
        )}
      </div>
      <div
        className={styles.add}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Page;
