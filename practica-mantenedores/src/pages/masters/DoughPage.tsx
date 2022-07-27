import { useEffect, useState } from "react";
import Dough from "../../components/Masters/Dough";
import Page from "../../components/ui/page/Page";

import Crud from "../../client/Crud";

const DoughPage = () => {
  const [list, setList] = useState<[]>();

  const [action, setAction] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const getList = async () => {
    const server = new Crud(`/api/dough`);
    const res = await server.get("/list");
    setList(res?.data);
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <Page
      tittle={"Masas"}
      message={"Nueva Masa"}
      endpoint={"/api/dough"}
      getList={getList}
      setAction={setAction}
      action={action}
      onClose={onClose}
      showModal={showModal}
      setShowModal={setShowModal}
      setId={setId}
      id={id}
      setName={setName}
      name={name}
    >
      <Dough list={list} setAction={setAction} action={action} setShowModal={setShowModal} setId={setId} setName={setName}/>
    </Page>
  );
};

export default DoughPage;
