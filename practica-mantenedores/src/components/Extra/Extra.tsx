import Crud from "../../client/crud";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";

import Item from "../functional/item/Item";

const Extra = () => {
  const [list, setList] = useState<[]>();

  const getList = async () => {
    const server = new Crud("/api/extra");
    const res = await server.get("/list");
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
            return <Item e={e} key={key} endPoint={"/api/extra"} />;
          }
        })}
    </div>
  );
};

export default Extra;
