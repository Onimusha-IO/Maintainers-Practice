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
import { useEffect, useState } from "react";
import {
  listOptionSet,
  listSet,
  setSet,
} from "../../../redux/slices/masters/setSlice";
import Modal from "../../ui/myModal";
import Dialog from "./Dialog";

const Set = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [setState, setSetState] = useState<any>({
    shape: [],
    dough: [],
    flavor: [],
    size: [],
    cream: [],
    filling: [],
    extra: [],
    name: "",
  });

  const [modalTitle, setModalTitle] = useState("");

  const onClose = () => {
    setShowModal(false);
  };

  const optionList = useSelector((state: any) => {
    return state.setSlice.optionList;
  });

  // const set = useSelector((state: any) => {
  //   return state.setSlice.set;
  // });

  const tables = [
    "Forma",
    "Masa",
    "Sabor",
    "Tamaño (personas)",
    "Crema",
    "Relleno",
    "Extra",
  ];

  const labels = {
    title: {
      create: "Nuevo Set",
      modify: "Modificar Set",
      delete: "¿Está seguro que desea eliminar el registro?",
    },
    buttons: {
      create: {
        accept: "Agregar",
        reject: "Cancelar",
      },
      modify: {
        accept: "Modificar",
        reject: "Cancelar",
      },
      delete: {
        accept: "Si",
        reject: "No",
      },
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    listOptionSet(dispatch);
    listSet(dispatch);
    console.log("new set: ", setState);
  }, []);

  return (
    <div className={styles.set}>
      <label className={styles.label}>Sets</label>
      <div className={styles.content}>
        {tables.map((tableName: any, tableIndex: any) => {
          const paper = nanoid();
          return (
            <Paper elevation={3} key={paper} sx={{ p: 2 }}>
              {" "}
              {<Typography>{tableName}</Typography>}
              <Container>
                <FormControl component={"fieldset"}>
                  <FormGroup>
                    {optionList.length > 0
                      ? optionList[tableIndex].map((item: any) => {
                          const box = nanoid();
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  color="primary"
                                  checked={(() => {
                                    const key =
                                      setState[Object.keys(setState)[tableIndex]];
                                    console.log(key);
                                    const found = key.find((e: any) => {
                                      return e === item.id;
                                    });

                                    return found !== undefined ? true : false;
                                  })()}
                                  onChange={() => {
                                    console.log(
                                      "check box: ",
                                      item.name,
                                      " ",
                                      item.id
                                    );
                                    const id = item.id;
                                    const newSetState = setState;
                                    const found: any = newSetState[
                                      Object.keys(setState)[tableIndex]
                                    ].find((e: any) => {
                                      return e === id;
                                    });
                                    console.log("found: ", found);
                                    if (found === undefined) {
                                      newSetState[
                                        Object.keys(setState)[tableIndex]
                                      ].push(id);
                                      setSetState({
                                        ...setState,
                                        [Object.keys(setState)[tableIndex]]:
                                          newSetState[
                                            Object.keys(setState)[tableIndex]
                                          ],
                                      });
                                    } else {
                                      console.log("false");
                                      setSetState({
                                        ...setState,
                                        [Object.keys(setState)[tableIndex]]:
                                          newSetState[
                                            Object.keys(setState)[tableIndex]
                                          ].filter((e: any) => {
                                            console.log("filtering: ", e, " ", id);
                                            return e !== id;
                                          }),
                                      });
                                    }
                                  }}
                                />
                              }
                              label={item.name || item.quantity.toString()}
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
      <Modal onClose={onClose} showModal={showModal} tittle={modalTitle}>
        <Dialog
          onClose={onClose}
          action={action}
          setId={setId}
          id={id}
          setName={setSetState}
          set={setState}
          labels={labels}
        />
      </Modal>
      <div
        className={styles.add}
        onClick={() => {
          setAction("post");
          setId("");
          setSetState({ ...setState, name: "" });
          setModalTitle(labels.title.create);
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Set;
