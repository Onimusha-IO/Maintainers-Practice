import { useState, useContext, useEffect } from "react";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UiContext from "../../../context/ui";

import styles from "./Modal.module.scss";
import Crud from "../../../client/crud";

const Modal = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState("");

  const { modal, setModal } = useContext(UiContext);

  const handleModalCrud = async () => {
    const server = new Crud(modal.endPoint);

    switch (modal.type) {
      case "post":
        console.log("modal post values: ", modal);
        await server.post("/add", { id: id, name: text });
        break;
      case "put":
        console.log("modal put values: ", modal);
        await server.put("/modify", { id: id, name: text });
        break;
      case "delete":
        console.log("modal delete values: ", modal);
        await server.delete("/erase", { id: id, name: text });
        break;
      default:
        console.log("Crud operation not valid");
        break;
    }

    setModal({
      state: false,
      type: null,
      title: "",
      accept: "",
      reject: "",
      endPoint: "",
      data: null,
    });
  };

  useEffect(() => {
    if (modal.data) {
      setId(modal.data.id);
      setText(modal.data.name);
    }
  }, []);

  return (
    <div className={styles.modalBackGround}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <FontAwesomeIcon icon={faCircleXmark} className={styles.iconLeft} />
          <label>{modal.tittle}</label>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.iconRight}
            onClick={() => {
              setModal({
                state: false,
                type: null,
                title: "",
                accept: "",
                reject: "",
                endPoint: "",
                data: null,
              });
            }}
          />
        </div>
        <div className={styles.formLogin}>
          <div className={styles.field}>
            <input id="inputId" value={id} type="text" placeholder=" " disabled />
            <label htmlFor="inputId">Id</label>
          </div>
          <div className={styles.field}>
            <input
              id="inputName"
              type="text"
              value={text}
              placeholder=" "
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <label htmlFor="inputName">Nombre</label>
          </div>
        </div>
        <div className={styles.options}>
          <div
            className={styles.buttons}
            onClick={() => {
              setModal({
                state: false,
                type: null,
                title: "",
                accept: "",
                reject: "",
                endPoint: "",
                data: null,
              });
            }}
          >
            {modal.reject}
          </div>
          {text !== "" ? (
            <button
              className={styles.buttons}
              onClick={() => {
                handleModalCrud();
              }}
            >
              {modal.accept}
            </button>
          ) : (
            <button className={styles.buttonsOff} onClick={() => {}} disabled>
              {modal.accept}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
