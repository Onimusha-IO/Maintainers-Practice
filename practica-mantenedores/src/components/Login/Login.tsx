import { useContext, useEffect, useState } from "react";
import UiContext from "../../context/ui";

import styles from "./Login.module.scss";
import Crud from "../../client/crud";

const Login = () => {
  const { setUserValidated } = useContext(UiContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginRequest = async (email: any, password: any) => {
    const server = new Crud("/api/user");
    try {
      const res = await server.post("/validate", { email, password });

      if (res?.status === 200) {
        console.log("success: >>", res);
        setUserValidated(true);
        setError(false);
      }
    } catch (error) {
      setError(true);
      console.log("axios error: ", error);
    }
  };

  useEffect(() => {}, [error]);

  return (
    <div className={styles.screen}>
      <div className={styles.contentLogin}>
        {error ? <div className={styles.error}>Invalid credentials</div> : null}
        <div className={styles.imgLogo}></div>
        <div className={styles.formLogin}>
          <div className={styles.field}>
            <input
              id="inputEmail"
              type="email"
              value={email}
              placeholder=" "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="inputEmail">Correo electrónico</label>
          </div>
          <div className={styles.field}>
            <input
              id="inputPassword"
              type="password"
              value={password}
              placeholder=" "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            loginRequest(email, password);
          }}
        >
          Ingresar
        </button>
        <a href="#">Olvidé mi contraseña</a>
        <div className={styles.create}>
          <label>Sin Usuario?</label>
          <a href="/CreateUser">Crear Cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
