import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import UiContext from "../../../context/ui";
import ComboBox from "./ComboBox";

import styles from "./Cake.module.scss";
import { Alert } from "@mui/material";
import { listOptionSet, listSet } from "../../../redux/slices/masters/setSlice";

// takes the options and return the exsiting ones on the set
const optionBySet = (setsArray: any, options: any, trailIndex: any) => {
  // variable to store the posible combination
  let combination: any = [];
  // array containing all the arrays of options available
  setsArray.map((e: any) => {
    // "e" is the Set object stored in db who defines the combinations
    e[Object.keys(e)[trailIndex + 3]].map((id: any) => {
     // array of cake ingredients
     combination = options.map((categoryTable: any) => {
       // array of ingredients options
       return categoryTable.map((item: any) => {
         // checks for index 3 of table Size to return a number instead
         if (trailIndex === 3 && item.id === id) {
           return { quantity: item.quantity };
         } else if (item.id === id) {
           return { name: item.name };
         }
       });
     });
   });
  });
  // combination = combination.map((options: any) => {
  //   return options
  //     .map((label: any) => {
  //       return label;
  //     })
  //     .filter((def: any) => {
  //       return def !== undefined;
  //     });
  // });

  console.log("combination available: ", combination);
  // return combination;
  return [[]]
};

const Cake = () => {
  const { setShowMenu } = useContext(UiContext);
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();

  const opt = useSelector((state: any) => {
    return state.setSlice.optionList;
  });

  const lst = useSelector((state: any) => {
    console.log("lst: ", state.setSlice.setList);
    return state.setSlice.setList;
  });

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
    listOptionSet(dispatch);
    listSet(dispatch);
    if (opt !== undefined && lst !== undefined) {
      if (opt.length > 0 && lst.length > 0) {
        setRender(true);
      }
    }
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
        {render ? (
          tables.map((e: any, i: any) => {
            const key = nanoid();
            return (
              <ComboBox
                label={e}
                options={
                  optionBySet(lst, opt, i)[i] !== undefined
                    ? optionBySet(lst, opt, i)[i]
                    : []
                }
                index={i}
                key={key}
              />
            );
          })
        ) : (
          <Alert severity="warning">
            No existen combinaciones, favor crear al menos un Set.
          </Alert>
        )}
      </div>
      <div className={styles.add} onClick={() => {}}>
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Cake;
