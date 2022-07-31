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
  puttitle,
  deleteTitle,
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
                // setModal({
                //   state: true,
                //   type: "put",
                //   tittle: "Modificar masa",
                //   accept: "Modificar",
                //   reject: "Cancelar",
                //   endPoint: endPoint,
                //   data: { name: e.name, id: e.id },
                // });
                setAction("put");
                setId(e.id);
                setName(e.name);
                setTitle(puttitle);
                setShowModal(true);
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.icon}
              onClick={() => {
                // setModal({
                //   state: true,
                //   type: "delete",
                //   tittle: "¿Está seguro que desea eliminar el registro?",
                //   accept: "Si",
                //   reject: "No",
                //   endPoint: endPoint,
                //   data: { name: e.name, id: e.id },
                // });
                setAction("delete");
                setTitle(deleteTitle);
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
