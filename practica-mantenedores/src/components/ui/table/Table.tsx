import { nanoid } from "nanoid";
import Item from "../item";

import styles from "./Table.module.scss";

const Table = ({ list }: any) => {
  return (
    <div className={styles.table}>
      {list &&
        list.map((e: any) => {
          const key = nanoid();
          if (e.enable) {
            return <Item e={e} key={key} />;
          }
        })}
    </div>
  );
};

export default Table;
