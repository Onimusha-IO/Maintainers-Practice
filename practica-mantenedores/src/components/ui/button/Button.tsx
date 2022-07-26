import styles from "./Button.module.scss";

const Button = ({ text, onClick }: any) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
