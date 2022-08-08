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
const path = (setsArray: any, options: any, trailIndex: any) => {
  // let combination: any = [];
  let optionSet = setsArray[0];
  let set = optionSet[Object.keys(optionSet)[trailIndex + 3]];

  let optionList = options[trailIndex];

  return set.map((e: any) => {
    let arr: any = {};
    optionList.map((f: any) => {
      if (e === f.id) {
        arr = { name: f.name };
      }

      if (trailIndex === 3 && e === f.id) {
        arr = { quantity: f.quantity };
      }
    });
    return arr;
  });

  // setsArray.map((e: any) => {
  //   e[Object.keys(e)[trailIndex + 3]].map((id: any) => {
  //     combination = options.map((categoryTable: any) => {
  //       return categoryTable.map((item: any) => {
  //         if (trailIndex === 3 && item.id === id) {
  //           return { quantity: item.quantity };
  //         } else if (item.id === id) {
  //           return { name: item.name };
  //         }
  //       });
  //     });
  //   });
  // });

  // combination = combination.map((options: any) => {
  //   return options
  //     .map((label: any) => {
  //       return label;
  //     })
  //     .filter((def: any) => {
  //       return def !== undefined;
  //     });
  // });

  // console.log("combination available: ", combination);
  // return combination;
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
                options={path(lst, opt, i) !== undefined ? path(lst, opt, i) : []}
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
