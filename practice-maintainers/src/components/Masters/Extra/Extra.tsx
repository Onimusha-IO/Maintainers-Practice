import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { listExtra } from "../../../redux/slices/masters/extraSlice";
import Modal from "../../ui/myModal";

import styles from "./Extra.module.scss";
import Dialog from "./Dialog";
import List from "./List";
import { listCream } from "../../../redux/slices/masters/creamSlice";

const Extra = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const dispatch = useDispatch();

  const onClose = () => {
    listExtra(dispatch);
    setShowModal(false);
  };

  const extraList = useSelector((state: any) => {
    return state.extraSlice.list;
  });


  useEffect(() => {
    listExtra(dispatch);
  }, []);

  const labels = {
    title: {
      create: "Nuevo Extra",
      modify: "Modificar Extra",
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
      <label className={styles.label}>Extras</label>
      <div className={styles.content}>
        <List
          list={extraList}
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
          getList={listCream}
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

export default Extra;
