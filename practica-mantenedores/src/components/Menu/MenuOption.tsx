import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { nanoid } from "nanoid";

import styles from "./Menu.module.scss";

const MenuOption = ({ icon, text, subOptions, path }: any) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavLink to={path}>
        <div className={styles.option}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={icon} className={styles.faIcon} />
            </div>
            <div className={styles.text}>{text}</div>
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.faIconSub}
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>
      </NavLink>
      {show && (
        <div className={styles.subOptions}>
          {subOptions.map((e: any) => {
            const key = nanoid();
            return (
              <NavLink to={e.path} key={key}>
                <label>{e.name}</label>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MenuOption;
