import { useEffect, useState } from "react";

import { nanoid } from "nanoid";

import Crud from "../../../client/Crud";
import Item from "../../ui/inputText/InputText";

const Shape = () => {
  const [list, setList] = useState<[]>();

  const getList = async () => {
    const server = new Crud("/api/shape");
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
            return <Item e={e} key={key} endPoint={"/api/shape"} />;
          }
        })}
    </div>
  );
};

export default Shape;
