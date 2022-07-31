import { useSelector } from "react-redux";

import Button from "../../ui/button";
import Input from "../../ui/input";
import Crud from "../../../client/Crud";

import styles from "./Filling.module.scss";

const Dialog = ({
  onClose,
  action,
  setList,
  getList,
  setId,
  id,
  setName,
  name,
}: any) => {
  const filling = useSelector((state: any) => {
    return state.fillingSlice.filling;
  });

  const handleModalCrud = async (action: any) => {
    const server = new Crud("/api/filling");

    switch (action) {
      case "get":
        const res = await server.get("/list");
        setList(res?.data);
        break;
      case "post":
        await server.post("/add", filling);
        break;
      case "put":
        await server.put("/modify", filling);
        break;
      case "delete":
        await server.delete("/erase", filling);
        break;
      default:
        console.log("Crud operation not valid");
        break;
    }

    onClose();
  };

  return (
    <div className={styles.dialog}>
      <div className={styles.form}>
        <Input
          type={"text"}
          name={"Id"}
          disabled={true}
          getValue={setId}
          text={id}
        />
        <Input type={"text"} name={"Nombre"} getValue={setName} text={name} />
      </div>
      <div className={styles.options}>
        <Button
          text={"Cancelar"}
          onClick={() => {
            setId("");
            setName("");
            onClose();
            getList();
          }}
        />
        <Button
          text={"Agregar"}
          onClick={() => {
            setId("");
            setName("");
            handleModalCrud(action);
            getList();
          }}
          disabled={name === "" ? true : false}
        />
      </div>
    </div>
  );
};

export default Dialog;
