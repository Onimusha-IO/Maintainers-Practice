import { useContext, useEffect } from "react";
import UiContext from "../../context/ui";

import styles from "./User.module.scss";

const User = () => {
  const { setShowMenu, setUserValidated } = useContext(UiContext);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className={styles.user}>
      <div className={styles.photo}></div>
      <label className={styles.userName}>Juan Pablo Ramirez</label>
      <label className={styles.jobTitle}>Facturación</label>
      <a
        href="#"
        onClick={() => {
          setUserValidated(false);
        }}
      >
        Cerrar sesión
      </a>
    </div>
  );
};

export default User;
