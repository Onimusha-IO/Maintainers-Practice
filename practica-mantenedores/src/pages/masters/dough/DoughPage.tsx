import { useContext, useEffect, useState } from "react";

import Dough from "../../../components/functional/Dough";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/functional/Modal";
import UiContext from "../../../context/ui";
import Crud from "../../../client/crud";

import styles from "./DoughPage.module.scss";

const DoughPage = () => {
  const [list, setList] = useState<[]>();

  const { modal, setModal } = useContext(UiContext);

  const getList = async () => {
    const server = new Crud("/api/dough");
    const res = await server.get("/list");
    setList(res?.data);
  };

  useEffect(() => {
    if (modal.state === false) {
      getList();
    }
  }, [modal]);

  return (
    <div className={styles.page}>
      <label className={styles.label}>Masas</label>
      {modal.state ? <Modal /> : <Dough list={list} />}
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

export default DoughPage;
