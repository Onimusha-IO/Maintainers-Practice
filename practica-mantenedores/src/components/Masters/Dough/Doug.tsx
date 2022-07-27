import List from "./List";

const Dough = ({ list, setAction, setShowModal, setId, setName }: any) => {
  return <List list={list} setAction={setAction} setShowModal={setShowModal} setId={setId} setName={setName} />;
};

export default Dough;
