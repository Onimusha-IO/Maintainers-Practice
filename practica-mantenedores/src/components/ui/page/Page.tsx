import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Page.module.scss";
import Modal from "../myModal";
import Dialog from "../../Masters/Dough/Dialog";

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
  message,
  setTitle,
}: any) => {
const createTitle = "Nueva Masa";

  return (
    <div className={styles.page}>
      <label className={styles.label}>{tittle}</label>
      <div className={styles.content}>{children}</div>
      <Modal onClose={onClose} showModal={showModal} tittle={message}>
        <Dialog onClose={onClose} action={action} getList={getList} setId={setId} id={id} setName={setName} name={name} setTitle={setTitle}/>
      </Modal>
      <div
        className={styles.add}
        onClick={() => {
          setAction("post");
          setId("");
          setName("");
          setTitle(createTitle);
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Page;
