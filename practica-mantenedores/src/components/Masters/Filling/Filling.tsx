import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Crud from "../../../client";
import { getFillingList, setFilling } from "../../../store/slices/masters/fillingSlice";
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

  const getList = async () => {
    const server = new Crud(`/api/filling`);
    const res = await server.get("/list");
    dispatch(getFillingList(res?.data));
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  const fillingList = useSelector((state: any) => {
    return state.fillingSlice.fillingList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getList();
    dispatch(setFilling({ name, id }));
  }, [name, id]);

  const createTitle = "Nuevo Relleno";
  const puttitle = "Modificar Relleno";
  const deleteTitle = "¿Está seguro que desea eliminar el registro?";

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
          puttitle={puttitle}
          deleteTitle={deleteTitle}
        />
      </div>
      <Modal onClose={onClose} showModal={showModal} tittle={modalTitle}>
        <Dialog
          onClose={onClose}
          action={action}
          getList={getList}
          setId={setId}
          id={id}
          setName={setName}
          name={name}
          setTitle={setModalTitle}
        />
      </Modal>
      <div
        className={styles.add}
        onClick={() => {
          setAction("post");
          setId("");
          setName("");
          setModalTitle(createTitle);
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Filling;
