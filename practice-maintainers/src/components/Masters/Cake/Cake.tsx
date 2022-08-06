import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import UiContext from "../../../context/ui";
import ComboBox from "./ComboBox";
import { listOption } from "../../../redux/slices/masters/cakeSlice";

import styles from "./Cake.module.scss";
import { Alert } from "@mui/material";

const Cake = () => {
  const { setShowMenu } = useContext(UiContext);

  const options = useSelector((state: any) => {
    console.log("cake slice: ", state.cakeSlice);
    return state.cakeSlice.list;
  });

  const path = useSelector((state: any) => {
    console.log("set slice: ", state.setSlice);
    return state.setSlice.path;
  });

  const dispatch = useDispatch();

  const tables = [
    "Forma",
    "Masa",
    "Sabor",
    "Tamaño (personas)",
    "Crema",
    "Relleno",
    "Extra",
  ];

  useEffect(() => {
    listOption(dispatch);
  }, []);

  return (
    <div
      className={styles.page}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <label className={styles.label}>Tortas</label>
      <div className={styles.content}>
        {path.length > 0 ? (
          tables.map((e: any, i: any) => {
            const key = nanoid();
            return (
              <ComboBox
                label={e}
                options={options.length > 0 ? options[i] : []}
                index={i}
                key={key}
              />
            );
          })
        ) : (
          <Alert severity="warning">No existen combinaciones, favor crear al menos un Set.</Alert>
        )}
      </div>
      <div className={styles.add} onClick={() => {}}>
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Cake;
