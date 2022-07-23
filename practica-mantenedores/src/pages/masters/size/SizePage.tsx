import { useEffect, useState } from "react";

import { nanoid } from "nanoid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCirclePlus, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import Crud from "../../../client/crud";

import styles from "./SizePage.module.scss";

const SizePage = () => {
  // modal controls text
  const [modal, setModal] = useState(false);
  const [accept, setAccept] = useState("");
  const [reject, setReject] = useState("");
  const [tittle, setTittle] = useState("");

  // inputs
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [number, setNumber] = useState("");

  // crud type
  const [type, setType] = useState("get");

  const [list, setList] = useState<[]>();

  const handleModalCrud = async () => {
    const server = new Crud("/api/size");

    switch (type) {
      case "get":
        const res = await server.get("/list");
        setList(res?.data);
        break;
      case "post":
        await server.post("/add", { id, quantity, number });
        break;
      case "put":
        await server.put("/modify", { id, quantity, number });
        break;
      case "delete":
        await server.delete("/erase", { id });
        break;
      default:
        console.log("Crud operation not valid");
        break;
    }

    setModal(false);
  };

  useEffect(() => {
    handleModalCrud();
  }, []);

  // return <Page tittle={"Tamaños"} content={<Size />} message={"Nuevo Tamaño"} endpoint={"/api/size"} />;
  return (
    <div className={styles.page}>
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
                    setQuantity(0);
                    setNumber("");
                  }}
                />
              </div>
              <div className={styles.formLogin}>
                <div className={styles.field}>
                  <input id="inputId" value={id} type="text" placeholder=" " disabled />
                  <label htmlFor="inputId">Id</label>
                </div>
                <div className={styles.field}>
                  <input
                    id="inputQuantity"
                    type="text"
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
                    type="text"
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
                    setModal(false);

                    setId("");
                    setQuantity(0);
                    setNumber("");
                  }}
                >
                  {reject}
                </div>
                {quantity !== 0 && number !== "" ? (
                  <button
                    className={styles.buttons}
                    onClick={() => {
                      handleModalCrud();

                      setId("");
                      setQuantity(0);
                      setNumber("");
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
            {list &&
              list.map((e: any) => {
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
                            setModal(true);
                            setType("put");
                            setTittle("Modificar Tamaño");
                            setAccept("Modificar");
                            setReject("Cancelar");

                            setId(e.id);
                            setQuantity(e.quantity);
                            setNumber(e.number);
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={styles.icon}
                          onClick={() => {
                            setModal(true);
                            setType("delete");
                            setTittle("¿Está seguro que desea eliminar el registro?");
                            setAccept("Si");
                            setReject("No");
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
          setModal(true);
          setType("get");
          setTittle("Nuevo Tamaño");
          setAccept("Registrar");
          setReject("Cancelar");
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default SizePage;
