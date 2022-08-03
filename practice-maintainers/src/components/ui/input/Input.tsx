import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styles from "./Input.module.scss";

const TextInput = ({
  type,
  name,
  text,
  disabled = false,
  getValue,
  autoFocus = false,
}: any) => {
  const id = nanoid();

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (autoFocus) {
      setFocus(true);
    }
  }, []);

  return (
    <div className={styles.textInput}>
      <input
        id={id}
        value={text}
        type={type}
        placeholder=" "
        disabled={disabled}
        autoFocus={focus}
        onChange={(e) => {
          getValue(e.target.value);
        }}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default TextInput;
