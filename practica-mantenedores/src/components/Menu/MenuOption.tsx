import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";

const MenuOption = ({ icon, text, subOptions, path }: any) => {
  return (
    <NavLink to={path}>
      <div className={styles.option}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={icon} className={styles.faIcon} />
          </div>
          <div className={styles.text}>{text}</div>
        </div>
        {subOptions && (
          <FontAwesomeIcon icon={faChevronRight} className={styles.faIconSub} />
        )}
      </div>
    </NavLink>
  );
};

export default MenuOption;
