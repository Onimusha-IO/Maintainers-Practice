import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./Input.module.scss";

const TextInput = ({ type, name, text, disabled = false }: any) => {
  const [value, setValue] = useState(text ? text : "");

  const id = nanoid();
  return (
    <div className={styles.textInput}>
      <input
        id={id}
        value={value}
        type={type}
        placeholder=" "
        disabled={disabled}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default TextInput;
