import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styles from "./Input.module.scss";

const TextInput = ({ type, name, text, disabled = false, getValue }: any) => {

  const id = nanoid();

  return (
    <div className={styles.textInput}>
      <input
        id={id}
        value={text}
        type={type}
        placeholder=" "
        disabled={disabled}
        onChange={(e) => {
          getValue(e.target.value);
        }}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default TextInput;
