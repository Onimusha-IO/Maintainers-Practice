import styles from "./Button.module.scss";

const Button = ({ text }: any) => {
  return <div className={styles.button}>{text}</div>;
};

export default Button;
