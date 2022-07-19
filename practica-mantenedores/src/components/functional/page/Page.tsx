import { useContext, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import UiContext from "../../../context/ui";

import styles from "./Page.module.scss";

const Page = ({ tittle, content }: any) => {
  const { modal, setModal } = useContext(UiContext);

  return (
    <div className={styles.page}>
      <label className={styles.label}>{tittle}</label>
      <div className={styles.content}>{modal.state ? <Modal /> : content}</div>
      <div
        className={styles.add}
        onClick={() => {
          setModal({
            ...modal,
            state: true,
            type: "post",
            tittle: "Nueva masa",
            accept: "Registrar",
            reject: "Cancelar",
            endPoint: "/api/dough",
          });
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Page;
