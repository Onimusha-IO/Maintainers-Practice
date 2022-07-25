import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Page.module.scss";
import Modal from "../myModal";
import TextInput from "../textInput";

const Page = ({ tittle, children, message, endpoint }: any) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.page}>
      <label className={styles.label}>{tittle}</label>
      <div className={styles.content}>
        {modal ? (
          <Modal setModal={setModal} modal={modal} tittle={"Nueva Masa"}>
            <TextInput type={"text"} name={"Id"} disabled={true} />
            <TextInput type={"text"} name={"Nombre"} />
          </Modal>
        ) : (
          children
        )}
      </div>
      <div
        className={styles.add}
        onClick={() => {
          setModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Page;
