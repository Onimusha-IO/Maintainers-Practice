import Crud from "../../client/crud";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";

import Item from "../functional/item/Item";

const Dough = () => {
  const [list, setList] = useState<[]>();

  const getList = async () => {
    const server = new Crud("/api/mantainer");
    const res = await server.get("/list", "dough");
    setList(res?.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {list &&
        list.map((e: any) => {
          const key = nanoid();
          if (e.enable) {
            return <Item e={e} table={"dough"} key={key} />;
          }
        })}
    </div>
  );
};

export default Dough;
