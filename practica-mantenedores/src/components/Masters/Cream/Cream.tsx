import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Crud from "../../../client";
import { getCreamList, setCream } from "../../../store/slices/masters/creamSlice";
import Modal from "../../ui/myModal";

import styles from "./Cream.module.scss";
import Dialog from "./Dialog";
import List from "./List";

const Cream = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const getList = async () => {
    const server = new Crud(`/api/cream`);
    const res = await server.get("/list");
    dispatch(getCreamList(res?.data));
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  const creamList = useSelector((state: any) => {
    return state.creamSlice.creamList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getList();
    dispatch(setCream({ name, id }));
  }, [name, id]);

  const createTitle = "Nueva Crema";
  const puttitle = "Modificar Crema";
  const deleteTitle = "¿Está seguro que desea eliminar el registro?";

  return (
    <div className={styles.page}>
      <label className={styles.label}>Cremas</label>
      <div className={styles.content}>
        {/* {creamList &&
          creamList.map((e: any) => {
            const key = nanoid();
            if (e.enable) {
              return <Item e={e} endPoint={"/api/cream"} key={key} />;
            }
          })} */}
        <List
          list={creamList}
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

export default Cream;
