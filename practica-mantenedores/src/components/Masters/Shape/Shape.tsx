import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Crud from "../../../client";
import { getShapeList, setShape } from "../../../redux/slices/masters/shapeSlice";
import Modal from "../../ui/myModal";

import styles from "./Shape.module.scss";
import Dialog from "./Dialog";
import List from "./List";

const Shape = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const getList = async () => {
    const server = new Crud(`/api/shape`);
    const res = await server.get("/list");
    dispatch(getShapeList(res?.data));
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  const shapeList = useSelector((state: any) => {
    return state.shapeSlice.shapeList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getList();
    dispatch(setShape({ name, id }));
  }, [name, id]);

  const createTitle = "Nueva Forma";
  const puttitle = "Modificar Forma";
  const deleteTitle = "¿Está seguro que desea eliminar el registro?";

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

export default Shape;
