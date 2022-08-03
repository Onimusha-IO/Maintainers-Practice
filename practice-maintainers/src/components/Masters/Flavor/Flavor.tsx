import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { listFlavor } from "../../../redux/slices/masters/flavorSlice";
import Modal from "../../ui/myModal";

import styles from "./Flavor.module.scss";
import Dialog from "./Dialog";
import List from "./List";

const Flavor = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClose = () => {
    setShowModal(false);
  };

  const flavorList = useSelector((state: any) => {
    return state.flavorSlice.list;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    listFlavor(dispatch);
  }, []);

  const labels = {
    title: {
      create: "Nueva Sabor",
      modify: "Modificar Sabor",
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
      <label className={styles.label}>Sabores</label>
      <div className={styles.content}>
        <List
          list={flavorList}
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
          getList={listFlavor}
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

export default Flavor;
