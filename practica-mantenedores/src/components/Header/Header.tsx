import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import UiContext from "../../context/ui";

import styles from "./Header.module.scss";

const Header = () => {
  const { showMenu, setShowMenu } = useContext(UiContext);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={styles.faIcon}
        />
        <div className={styles.logo}></div>
      </div>
      <div className={styles.avatar}></div>
    </div>
  );
};

export default Header;
