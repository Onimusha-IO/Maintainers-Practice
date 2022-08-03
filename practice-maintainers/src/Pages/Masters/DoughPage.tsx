import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getDoughList, setDough } from "../../redux/slices/masters/doughSlice";

import Dough from "../../components/Masters/Dough";
import Page from "../../components/ui/page/Page";

import Crud from "../../client/Crud";

const DoughPage = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTittle, setModalTitle] = useState("");

  const getList = async () => {
    const server = new Crud(`/api/dough`);
    const res = await server.get("/list");
    dispatch(getDoughList(res?.data));
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  const doughList = useSelector((state: any) => {
    return state.doughSlice.list;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getList();
    dispatch(setDough({ name, id }));
  }, [name, id]);

  return (
    <Page
      tittle={"Masas"}
      message={modalTittle}
      setTitle={setModalTitle}
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
      <Dough
        list={doughList}
        setAction={setAction}
        action={action}
        setShowModal={setShowModal}
        setId={setId}
        setName={setName}
        setTitle={setModalTitle}
      />
    </Page>
  );
};

export default DoughPage;
