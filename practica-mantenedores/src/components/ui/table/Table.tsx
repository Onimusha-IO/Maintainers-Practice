import { nanoid } from "nanoid";
import Item from "../item";

import styles from "./Table.module.scss";

const Table = ({
  list,
  setAction,
  setShowModal,
  setId,
  setName,
  setTitle,
  puttitle,
  deleteTitle,
}: any) => {
  return (
    <div className={styles.table}>
      {list &&
        list.map((e: any) => {
          const key = nanoid();
          if (e.enable) {
            return (
              <Item
                e={e}
                key={key}
                setAction={setAction}
                setShowModal={setShowModal}
                setId={setId}
                setName={setName}
                setTitle={setTitle}
                puttitle={puttitle}
                deleteTitle={deleteTitle}
              />
            );
          }
        })}
    </div>
  );
};

export default Table;
