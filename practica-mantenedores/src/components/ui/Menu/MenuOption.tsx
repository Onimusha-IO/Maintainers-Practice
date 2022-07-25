import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { nanoid } from "nanoid";

import styles from "./Menu.module.scss";

const MenuOption = ({ icon, text, subOptions, path }: any) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.option}>
        <NavLink to={path}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={icon} className={styles.faIcon} />
            </div>
            <div className={styles.text}>{text}</div>
          </div>
        </NavLink>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.faIconSub}
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      {show && (
        <div className={styles.subOptions}>
          {subOptions.map((e: any) => {
            const key = nanoid();
            return (
              <label
                onClick={() => {
                  navigate(e.path);
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
