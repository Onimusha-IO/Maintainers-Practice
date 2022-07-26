import { useEffect, useState } from "react";

import Button from "../../ui/button";
import Input from "../../ui/input";

import styles from "./Dough.module.scss";

const Dialog = ({ onClose }: any) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.form}>
        <Input type={"text"} name={"Id"} disabled={true} />
        <Input type={"text"} name={"Nombre"} />
      </div>
      <div className={styles.options}>
        <Button
          text={"Canelar"}
          onClick={onClose}
        />
        <Button text={"Agregar"} />
      </div>
    </div>
  );
};

export default Dialog;
