import { nanoid } from "nanoid";
import Item from "../item";

import styles from "./Table.module.scss";

const Table = ({ list, setAction, setShowModal, setId, setName }: any) => {
  return (
    <div className={styles.table}>
      {list &&
        list.map((e: any) => {
          const key = nanoid();
          if (e.enable) {
            return <Item e={e} key={key} setAction={setAction} setShowModal={setShowModal} setId={setId} setName={setName} />;
          }
        })}
    </div>
  );
};

export default Table;
