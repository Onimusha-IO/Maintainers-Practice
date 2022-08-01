import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Item.module.scss";

const Item = ({
  e,
  setAction,
  setShowModal,
  setId,
  setName,
  setTitle,
  labels,
}: any) => {
  return (
    <>
      {e && (
        <div className={styles.item}>
          <label>{e.name}</label>
          <div className={styles.controls}>
            <FontAwesomeIcon
              icon={faPencil}
              className={styles.icon}
              onClick={() => {
                setAction("put");
                setId(e.id);
                setName(e.name);
                setTitle(labels.title.modify);
                setShowModal(true);
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.icon}
              onClick={() => {
                setAction("delete");
                setTitle(labels.title.delete);
                setId(e.id);
                setName(e.name);
                setShowModal(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
