import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../../ui/button";
import Input from "../../ui/input";

import styles from "./Set.module.scss";
import { createSet } from "../../../redux/slices/masters/setSlice";

const Dialog = ({ onClose, action, setId, id, setName, set, labels }: any) => {
  const [accept, setAccept] = useState("");
  const [reject, setReject] = useState("");

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleModalCrud = (action: any) => {
    switch (action) {
      case "post":
        createSet(dispatch, set);
        break;
      case "put":
        // updateSet(dispatch, { id, name });
        break;
      case "delete":
        // deleteSet(dispatch, { id });
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

    setName({ ...set, name: text });
  }, [action, text]);

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
        <Input
          type={"text"}
          name={"Nombre"}
          getValue={setText}
          text={text}
          autoFocus={true}
        />
      </div>
      <div className={styles.options}>
        <Button
          text={reject}
          onClick={() => {
            setId("");
            setText("");
            setName({ ...set, name: "" });
            onClose();
          }}
        />
        <Button
          text={accept}
          onClick={() => {
            setId("");
            handleModalCrud(action);
            setText("");
            setName({
              shape: [],
              dogh: [],
              flavor: [],
              size: [],
              cream: [],
              filling: [],
              extra: [],
              name: "",
            });
            onClose();
          }}
          disabled={set.name === "" ? true : false}
        />
      </div>
    </div>
  );
};

export default Dialog;
