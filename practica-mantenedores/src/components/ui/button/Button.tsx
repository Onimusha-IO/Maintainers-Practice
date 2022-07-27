import styles from "./Button.module.scss";

const Button = ({ text, onClick, disabled }: any) => {
  return (
    <div className={disabled ? styles.buttonOff : styles.button} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
