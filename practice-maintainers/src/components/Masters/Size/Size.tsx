import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCirclePlus,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import UiContext from "../../../context/ui";

import styles from "./Size.module.scss";
import {
  listSize,
  createSize,
  deleteSize,
  updateSize,
} from "../../../redux/slices/masters/sizeSlice";

const SizePage = () => {
  // modal control
  const [modal, setModal] = useState(false);
  const [accept, setAccept] = useState("");
  const [reject, setReject] = useState("");
  const [tittle, setTittle] = useState("");

  // crud type
  const [type, setType] = useState("get");

  // inputs
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const sizeList = useSelector((state: any) => {
    return state.sizeSlice.list;
  });

  const handleModalCrud = (action: any) => {
    switch (action) {
      case "post":
        createSize(dispatch, { number, quantity });
        break;
      case "put":
        updateSize(dispatch, { id, number, quantity });
        break;
      case "delete":
        deleteSize(dispatch, { id });
        break;

      default:
        break;
    }

    listSize(dispatch);
  };

  const labels = {
    title: {
      create: "Nuevo Tamaño",
      modify: "Modificar Tamaño",
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

  useEffect(() => {
    switch (type) {
      case "post":
        setTittle(labels.title.create);
        setAccept(labels.buttons.create.accept);
        setReject(labels.buttons.create.reject);
        break;
      case "put":
        setTittle(labels.title.modify);
        setAccept(labels.buttons.modify.accept);
        setReject(labels.buttons.modify.reject);
        break;
      case "delete":
        setTittle(labels.title.delete);
        setAccept(labels.buttons.delete.accept);
        setReject(labels.buttons.delete.reject);
        break;

      default:
        break;
    }

    listSize(dispatch);
  }, [type]);

  const { setShowMenu } = useContext(UiContext);

  return (
    <div
      className={styles.page}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <label className={styles.label}>Tamaños</label>
      <div className={styles.content}>
        {modal ? (
          <div className={styles.modalBackGround}>
            <div className={styles.modal}>
              <div className={styles.header}>
                <FontAwesomeIcon icon={faCircleXmark} className={styles.iconLeft} />
                <label>{tittle}</label>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={styles.iconRight}
                  onClick={() => {
                    setModal(false);

                    setId("");
                    setQuantity(1);
                    setNumber("1");
                  }}
                />
              </div>
              <div className={styles.formLogin}>
                <div className={styles.field}>
                  <input
                    id="inputId"
                    value={id}
                    type="text"
                    placeholder=" "
                    disabled
                  />
                  <label htmlFor="inputId">Id</label>
                </div>
                <div className={styles.field}>
                  <input
                    id="inputQuantity"
                    type="number"
                    min="1"
                    max="150"
                    step="1"
                    value={quantity}
                    placeholder=" "
                    onChange={(e) => {
                      setQuantity(parseInt(e.target.value));
                    }}
                  />
                  <label htmlFor="inputQuantity">Personas</label>
                </div>
                <div className={styles.field}>
                  <input
                    id="inputNumber"
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value={number}
                    placeholder=" "
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                  <label htmlFor="inputNumber">Numero</label>
                </div>
              </div>
              <div className={styles.options}>
                <div
                  className={styles.buttons}
                  onClick={() => {
                    setId("");
                    setQuantity(1);
                    setNumber("1");

                    setModal(false);
                  }}
                >
                  {reject}
                </div>
                {quantity !== 0 && number !== "" ? (
                  <button
                    className={styles.buttons}
                    onClick={() => {
                      setId("");
                      setQuantity(1);
                      setNumber("1");

                      handleModalCrud(type);

                      setModal(false);
                    }}
                  >
                    {accept}
                  </button>
                ) : (
                  <button className={styles.buttonsOff} disabled>
                    {accept}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {sizeList &&
              sizeList.map((e: any) => {
                const key = nanoid();
                if (e.enable) {
                  return (
                    <div className={styles.dough} key={key}>
                      <label>
                        Personas: {e.quantity}, Numero: {e.number}
                      </label>
                      <div className={styles.controls}>
                        <FontAwesomeIcon
                          icon={faPencil}
                          className={styles.icon}
                          onClick={() => {
                            setType("put");

                            setId(e.id);
                            setQuantity(e.quantity);
                            setNumber(e.number);

                            setModal(true);
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={styles.icon}
                          onClick={() => {
                            setType("delete");

                            setId(e.id);
                            setQuantity(e.quantity);
                            setNumber(e.number);

                            setModal(true);
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        )}
      </div>
      <div
        className={styles.add}
        onClick={() => {
          setType("post");
          setModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default SizePage;
