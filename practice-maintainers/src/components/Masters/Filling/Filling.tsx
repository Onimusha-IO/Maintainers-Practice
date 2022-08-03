import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { listFilling } from "../../../redux/slices/masters/fillingSlice";
import Modal from "../../ui/myModal";

import styles from "./Filling.module.scss";
import Dialog from "./Dialog";
import List from "./List";

const Filling = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const dispatch = useDispatch();

  const onClose = () => {
    setShowModal(false);
  };

  const fillingList = useSelector((state: any) => {
    return state.fillingSlice.list;
  });

  useEffect(() => {
    listFilling(dispatch);
  }, []);

  const labels = {
    title: {
      create: "Nueva Relleno",
      modify: "Modificar Relleno",
      delete: "¿Está seguro que desea eliminar el registro?",
    },
    buttons: {
      create: {
        accept: "Agregar",
        reject: "Cancelar",
      },
      modify: {
        accept: "Modificar",
        reject: "Cancelar",
      },
      delete: {
        accept: "Si",
        reject: "No",
      },
    },
  };

  return (
    <div className={styles.page}>
      <label className={styles.label}>Rellenos</label>
      <div className={styles.content}>
        <List
          list={fillingList}
          setAction={setAction}
          setShowModal={setShowModal}
          setId={setId}
          setName={setName}
          setTitle={setModalTitle}
          labels={labels}
        />
      </div>
      <Modal onClose={onClose} showModal={showModal} tittle={modalTitle}>
        <Dialog
          onClose={onClose}
          action={action}
          getList={listFilling}
          setId={setId}
          id={id}
          setName={setName}
          name={name}
          labels={labels}
        />
      </Modal>
      <div
        className={styles.add}
        onClick={() => {
          setAction("post");
          setId("");
          setName("");
          setModalTitle(labels.title.create);
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Filling;
