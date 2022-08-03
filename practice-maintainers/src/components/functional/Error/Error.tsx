import { useNavigate } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <label>Error 404: la pagina no existe</label>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Ir a la página principal
        </button>
      </div>
    </div>
  );
};

export default Error;
