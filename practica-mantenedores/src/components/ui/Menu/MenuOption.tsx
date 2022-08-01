import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { nanoid } from "nanoid";

import styles from "./Menu.module.scss";
import UiContext from "../../../context/ui";

const MenuOption = ({ icon, text, subOptions, path }: any) => {
  const [show, setShow] = useState(false);

  const { setShowMenu } = useContext(UiContext);

  const navigate = useNavigate();

  return (
    <>
      <NavLink to={path} className={styles.navLink}>
        <div
          className={styles.option}
          onClick={() => {
            if (subOptions) {
              setShow(!show);
            }
          }}
        >
          <div className={styles.left}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={icon} className={styles.faIcon} />
            </div>
            <div className={styles.text}>{text}</div>
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={show ? styles.faIconSubPush : styles.faIconSub}
          />
        </div>
      </NavLink>
      {show && (
        <div className={styles.subOptions}>
          {subOptions &&
            subOptions.map((e: any) => {
              const key = nanoid();
              return (
                <label
                  onClick={() => {
                    navigate(e.path);
                    setShowMenu(false);
                  }}
                  key={key}
                >
                  {e.name}
                </label>
              );
            })}
        </div>
      )}
    </>
  );
};

export default MenuOption;
