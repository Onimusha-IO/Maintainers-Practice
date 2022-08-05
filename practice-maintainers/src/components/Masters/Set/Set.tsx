import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { nanoid } from "@reduxjs/toolkit";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
  Checkbox,
} from "@mui/material";

import styles from "./Set.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listOptionSet } from "../../../redux/slices/masters/setSlice";

const Set = () => {
  const setList = useSelector((state: any) => {
    return state.setSlice.list;
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

  const dispatch = useDispatch();

  useEffect(() => {
    listOptionSet(dispatch);
  }, []);

  return (
    <div className={styles.set}>
      <label className={styles.label}>Sets</label>
      <div className={styles.content}>
        {tables.map((e: any, i: any) => {
          const paper = nanoid();
          return (
            <Paper elevation={3} key={paper} sx={{ p: 2 }}>
              {" "}
              {<Typography>{e}</Typography>}
              <Container>
                <FormControl component={"fieldset"}>
                  <FormGroup>
                    {setList.length > 0
                      ? setList[i].map((e: any) => {
                          const box = nanoid();
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  color="primary"
                                  onChange={() => {
                                    console.log("check box: ", e.id);
                                  }}
                                />
                              }
                              label={e.name || e.quantity.toString()}
                              key={box}
                            />
                          );
                        })
                      : null}
                  </FormGroup>
                </FormControl>
              </Container>
            </Paper>
          );
        })}
      </div>

      <div className={styles.add} onClick={() => {}}>
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Set;
