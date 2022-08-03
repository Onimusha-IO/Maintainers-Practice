import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { listShape } from "../../../redux/slices/masters/shapeSlice";
import Modal from "../../ui/myModal";
import Dialog from "./Dialog";
import List from "./List";

import styles from "./Shape.module.scss";

const Shape = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const dispatch = useDispatch();

  const onClose = () => {
    setShowModal(false);
  };

  const shapeList = useSelector((state: any) => {
    return state.shapeSlice.list;
  });

  useEffect(() => {
    listShape(dispatch);
  }, []);

  const labels = {
    title: {
      create: "Nueva Forma",
      modify: "Modificar Forma",
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
      <label className={styles.label}>Formas</label>
      <div className={styles.content}>
        <List
          list={shapeList}
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
          getList={listShape}
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

export default Shape;
