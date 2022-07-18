import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import client from "../../client/client";

import styles from "./CreateUser.module.scss";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirEmail, setRepetirEmail] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-type": "application/json",
      "x-api-key": 123456,
    },
  };

  const createRequest = async (
    name: any,
    rut: any,
    paterno: any,
    materno: any,
    email: any,
    password: any,
    config: any
  ) => {
    try {
      const create = await client.post(
        "/api/user/create",
        { name, rut, email, paterno, materno },
        config
      );

      if (create.status === 201) {
        console.log("success: ", create);
        const id: string = create.data.id;
        try {
          const res = await client.put(
            "/api/user/assignPassword",
            {
              id,
              password,
            },
            config
          );
          if (res.status === 200) {
            navigate("/login");
          }
        } catch (error) {}
      }
    } catch (error) {
      console.log("axios error: ", error);
    }
  };

  useEffect(() => {}, [error]);

  return (
    <div className={styles.screen}>
      <div className={styles.title}>Crear Usuario</div>
      {error ? <div className={styles.error}>{errorMsg}</div> : null}
      <div className={styles.formCreate}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder=" "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="rut">Rut</label>
          <input
            id="rut"
            type="text"
            value={rut}
            placeholder=" "
            onChange={(e) => {
              setRut(e.target.value);
            }}
          />
          <label htmlFor="aPaterno">Apellido Paterno</label>
          <input
            id="aPaterno"
            type="text"
            value={paterno}
            placeholder=" "
            onChange={(e) => {
              setPaterno(e.target.value);
            }}
          />
          <label htmlFor="aMaterno">Apellido Materno</label>
          <input
            id="aMaterno"
            type="text"
            value={materno}
            placeholder=" "
            onChange={(e) => {
              setMaterno(e.target.value);
            }}
          />
          <label htmlFor="inputEmail">Correo electrónico</label>
          <input
            id="inputEmail"
            type="email"
            value={email}
            placeholder=" "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="inputRepeatEmail">Repetir Correo electrónico</label>
          <input
            id="inputRepeatEmail"
            type="email"
            value={repetirEmail}
            placeholder=" "
            onChange={(e) => {
              setRepetirEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="inputPassword">Contraseña</label>
          <input
            id="inputPassword"
            type="password"
            value={password}
            placeholder=" "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="inputRepeatPassword">Repetir Contraseña</label>
          <input
            id="inputRepeatPassword"
            type="password"
            value={repetirPassword}
            placeholder=" "
            onChange={(e) => {
              setRepetirPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={() => {
          if (
            name !== "" &&
            rut !== "" &&
            paterno !== "" &&
            materno !== "" &&
            email !== "" &&
            repetirEmail !== "" &&
            password !== "" &&
            repetirPassword !== ""
          ) {
            if (email === repetirEmail && password === repetirPassword) {
              setError(false);
              createRequest(
                name,
                rut,
                paterno,
                materno,
                email,
                password,
                config
              );
            } else {
              setErrorMsg("Los campos Email y Password no coinciden");
              setError(true);
            }
          } else {
            setErrorMsg("Todos los campos son requeridos");
            setError(true);
          }
        }}
      >
        Crear
      </button>
    </div>
  );
};

export default CreateUser;
