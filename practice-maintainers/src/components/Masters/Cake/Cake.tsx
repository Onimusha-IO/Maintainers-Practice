import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import UiContext from "../../../context/ui";
import ComboBox from "./ComboBox";

import styles from "./Cake.module.scss";
import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";
import {
  listCombination,
  listOption,
} from "../../../redux/slices/masters/cakeSlice";

// takes the options and return the exsiting ones on the set
// const path = (setsArray: any, options: any, trailIndex: any) => {
//   let optionSet = setsArray[0];
//   let set = optionSet[Object.keys(optionSet)[trailIndex + 3]];

//   let optionList = options[trailIndex];

//   return set.map((e: any) => {
//     let arr: any = {};
//     optionList.map((f: any) => {
//       if (e === f.id) {
//         arr = { name: f.name };
//       }

//       if (trailIndex === 3 && e === f.id) {
//         arr = { quantity: f.quantity };
//       }
//     });
//     return arr;
//   });
// };

const Cake = () => {
  const { setShowMenu } = useContext(UiContext);

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

  const combination = useSelector((state: any) => {
    return state.cakeSlice.combination;
  });

  const list = useSelector((state: any) => {
    return state.cakeSlice.list;
  });

  useEffect(() => {
    listCombination(dispatch);
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
        {combination.length > 0 && combination.length > 0 ? (
          tables.map((e: any, i: any) => {
            const key = nanoid();
            return <ComboBox label={e} options={list[i]} index={i} key={key} />;
          })
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className={styles.add} onClick={() => {}}>
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Cake;
