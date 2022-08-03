import styles from "./Layouts.module.scss";

const Content = ({ children }: any) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
