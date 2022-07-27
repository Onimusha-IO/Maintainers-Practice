import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Page.module.scss";
import Modal from "../myModal";
import Dialog from "../../Masters/Dough/Dialog";
import Crud from "../../../client/Crud";

const Page = ({
  tittle,
  children,
  getList,
  setAction,
  action,
  showModal,
  setShowModal,
  onClose,
  setId,
  id,
  setName,
  name,
}: any) => {
  const [list, setList] = useState<[]>();

  // const getList = async () => {
  //   const server = new Crud(`/api/dough`);
  //   const res = await server.get("/list");
  //   setList(res?.data);
  // };

  // const onClose = () => {
  //   getList();
  //   setShowModal(false);
  // };

  return (
    <div className={styles.page}>
      <label className={styles.label}>{tittle}</label>
      <div className={styles.content}>{children}</div>
      <Modal onClose={onClose} showModal={showModal} tittle={"Nueva Masa"}>
        <Dialog onClose={onClose} action={action} getList={getList} setId={setId} id={id} setName={setName} name={name} />
      </Modal>
      <div
        className={styles.add}
        onClick={() => {
          setAction("post");
          setId("");
          setName("");
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Page;
