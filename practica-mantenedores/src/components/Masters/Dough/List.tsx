import { useEffect, useState } from "react";

import Table from "../../ui/table";

import Crud from "../../../client/Crud";

const List = ({ table }: any) => {
  const [list, setList] = useState<[]>();

  const getList = async () => {
    const server = new Crud(`/api/${table}`);
    const res = await server.get("/list");
    setList(res?.data);
  };

  useEffect(() => {
    getList();
  }, []);
  return <>{list && <Table list={list} />}</>;
};

export default List;
