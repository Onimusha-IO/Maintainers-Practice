import { useContext } from "react";

import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UiContext from "../../../context/ui";

import styles from "./InputText.module.scss";

const Item = ({ e, endPoint }: any) => {
  const { setModal } = useContext(UiContext);

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
                setModal({
                  state: true,
                  type: "put",
                  tittle: "Modificar masa",
                  accept: "Modificar",
                  reject: "Cancelar",
                  endPoint: endPoint,
                  data: { name: e.name, id: e.id },
                });
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.icon}
              onClick={() => {
                setModal({
                  state: true,
                  type: "delete",
                  tittle: "¿Está seguro que desea eliminar el registro?",
                  accept: "Si",
                  reject: "No",
                  endPoint: endPoint,
                  data: { name: e.name, id: e.id },
                });
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
