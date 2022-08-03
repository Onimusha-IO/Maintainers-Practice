import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  createExtra,
  deleteExtra,
  updateExtra,
} from "../../../redux/slices/masters/extraSlice";

import Button from "../../ui/button";
import Input from "../../ui/input";

import styles from "./Extra.module.scss";

const Dialog = ({ onClose, action, setId, id, setName, name, labels }: any) => {
  const [accept, setAccept] = useState("");
  const [reject, setReject] = useState("");

  const dispatch = useDispatch();

  const handleModalCrud = (action: any) => {
    switch (action) {
      case "post":
        createExtra(dispatch, { name });
        break;
      case "put":
        updateExtra(dispatch, { id, name });
        break;
      case "delete":
        deleteExtra(dispatch, { id });
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
