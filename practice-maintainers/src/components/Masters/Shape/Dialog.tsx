import { useDispatch } from "react-redux";

import Button from "../../ui/button";
import Input from "../../ui/input";
import {
  createShape,
  deleteShape,
  updateShape,
} from "../../../redux/slices/masters/shapeSlice";

import styles from "./Shape.module.scss";
import { useEffect, useState } from "react";

const Dialog = ({ onClose, action, id, name, setId, setName, labels }: any) => {
  const [accept, setAccept] = useState("");
  const [reject, setReject] = useState("");

  const dispatch = useDispatch();

  const handleModalCrud = (action: any) => {
    switch (action) {
      case "post":
        createShape(dispatch, { name });
        break;
      case "put":
        updateShape(dispatch, { id, name });
        break;
      case "delete":
        deleteShape(dispatch, { id });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (action) {
      case "post":
        setAccept(labels.buttons.create.accept);
        setReject(labels.buttons.create.reject);
        break;
      case "put":
        setAccept(labels.buttons.modify.accept);
        setReject(labels.buttons.modify.reject);
        break;
      case "delete":
        setAccept(labels.buttons.delete.accept);
        setReject(labels.buttons.delete.reject);
        break;

      default:
        break;
    }
  }, [action]);

  return (
    <div className={styles.dialog}>
      <div className={styles.form}>
        <Input
          type={"text"}
          name={"Id"}
          disabled={true}
          getValue={setId}
          text={id}
        />
        <Input type={"text"} name={"Nombre"} getValue={setName} text={name} />
      </div>
      <div className={styles.options}>
        <Button
          text={reject}
          onClick={() => {
            setId("");
            setName("");
            onClose();
          }}
        />
        <Button
          text={accept}
          onClick={() => {
            setId("");
            setName("");
            handleModalCrud(action);
            onClose();
          }}
          disabled={name === "" ? true : false}
        />
      </div>
    </div>
  );
};

export default Dialog;
