import Crud from "../../../client";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";

import Item from "../../ui/item/Item";

const Cream = () => {
  const [list, setList] = useState<[]>();

  const getList = async () => {
    const server = new Crud("/api/cream");
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
            return <Item e={e} endPoint={"/api/cream"} key={key} />;
          }
        })}
    </div>
  );
};

export default Cream;
